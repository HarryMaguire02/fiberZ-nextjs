import type { Metadata } from 'next';
import ShippingContent from '@/app/components/legal/shipping/ShippingContent';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/shipping`;
  const enUrl = `${BASE_URL}/en/shipping`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Shipping & Returns | FiberZ',
    description: 'Everything you need to know about FiberZ delivery times, costs, returns, and refunds.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Shipping & Returns | FiberZ',
      description: 'Everything you need to know about FiberZ delivery times, costs, returns, and refunds.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function ShippingPage() {
  return <ShippingContent />;
}
