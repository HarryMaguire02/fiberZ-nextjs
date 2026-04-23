import type { Metadata } from 'next';
import PrivacyContent from '@/app/components/legal/privacy/PrivacyContent';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/privacy-policy`;
  const enUrl = `${BASE_URL}/en/privacy-policy`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Privacy Policy | FiberZ',
    description: 'Learn how FiberZ collects, uses, and protects your personal information.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Privacy Policy | FiberZ',
      description: 'Learn how FiberZ collects, uses, and protects your personal information.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
