import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isValidEmail, sanitizeEmail } from '@/app/lib/validation';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email') || '';
  const sanitized = sanitizeEmail(email);

  if (!isValidEmail(sanitized)) {
    return new NextResponse('Invalid email address.', { status: 400 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    return new NextResponse('Service unavailable.', { status: 500 });
  }

  try {
    const resend = getResend();
    const { data: contacts } = await resend.contacts.list({ audienceId });
    const contact = contacts?.data?.find(
      (c) => c.email.toLowerCase() === sanitized
    );

    if (contact) {
      await resend.contacts.update({
        id: contact.id,
        audienceId,
        unsubscribed: true,
      });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed — FiberZ</title>
  <style>
    body { font-family: 'Montserrat', 'Helvetica Neue', sans-serif; background: #F6F2EA; margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: white; border-radius: 12px; padding: 48px; text-align: center; max-width: 400px; }
    h1 { color: #502C1E; font-size: 24px; margin-bottom: 12px; }
    p { color: #3D3129; font-size: 15px; line-height: 1.6; }
    a { color: #D4AC77; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>You've been unsubscribed</h1>
    <p>You will no longer receive newsletter emails from FiberZ.</p>
    <p style="margin-top: 24px;"><a href="${siteUrl}">Back to FiberZ</a></p>
  </div>
</body>
</html>`;

    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return new NextResponse('Something went wrong. Please try again.', { status: 500 });
  }
}
