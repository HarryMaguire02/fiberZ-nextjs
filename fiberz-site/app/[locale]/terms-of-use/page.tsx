import type { Metadata } from 'next';
import TermsContent from '@/app/components/legal/terms/TermsContent';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/terms-of-use`;
  const enUrl = `${BASE_URL}/en/terms-of-use`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Terms of Service | FiberZ',
    description: 'Read the FiberZ Terms of Service governing use of this website and purchase of our products.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Terms of Service | FiberZ',
      description: 'Read the FiberZ Terms of Service governing use of this website and purchase of our products.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function TermsOfUsePage() {
  return <TermsContent />;
}
