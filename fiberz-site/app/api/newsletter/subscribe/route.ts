import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isValidEmail, sanitizeEmail, isRateLimited, HONEYPOT_FIELD_NAME } from '@/app/lib/validation';
import WelcomeEmail from '@/emails/WelcomeEmail';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const honeypot = body[HONEYPOT_FIELD_NAME];

    // Silent rejection for bots — return 200 so they think it worked.
    // Logged (not silent server-side) so a real user tripping this via
    // autofill is visible in logs instead of vanishing without a trace.
    if (honeypot) {
      console.warn('Newsletter signup blocked by honeypot field:', { honeypot });
      return NextResponse.json({ success: true, message: "You're subscribed!" });
    }

    // Rate limit by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate email
    const email = sanitizeEmail(body.email || '');
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const locale = body.locale === 'en' ? 'en' : 'sr';

    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      console.error('RESEND_AUDIENCE_ID is not configured');
      return NextResponse.json(
        { success: false, message: 'Newsletter service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    // Add contact to Resend Audience (idempotent — Resend silently handles duplicates)
    const resend = getResend();
    const { error: contactError } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (contactError) {
      console.error('Resend contact error:', contactError);
      return NextResponse.json(
        { success: false, message: 'Unable to subscribe at this time. Please try again later.' },
        { status: 500 }
      );
    }

    // Send welcome email
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';
    const unsubscribeUrl = `${siteUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}&locale=${locale}`;

    const { error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'FiberZ <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to FiberZ Newsletter!',
      react: WelcomeEmail({ unsubscribeUrl }),
    });

    if (emailError) {
      console.error('Resend email error:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: "You're subscribed! Check your inbox for a welcome email.",
    });
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
