import type { Metadata } from 'next';
import DisclaimerContent from '@/app/components/legal/disclaimer/DisclaimerContent';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/disclaimer`;
  const enUrl = `${BASE_URL}/en/disclaimer`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Disclaimer | FiberZ',
    description: 'Important information about FiberZ products, the content on this site, and your health.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Disclaimer | FiberZ',
      description: 'Important information about FiberZ products, the content on this site, and your health.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
