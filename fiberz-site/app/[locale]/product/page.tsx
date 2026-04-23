import type { Metadata } from 'next';
import PromoBanner from '@/app/components/product/PromoBanner';
import ProductHero from '@/app/components/product/ProductHero';
import WhatIsFiberZProduct from '@/app/components/product/WhatIsFiberZProduct';
import Testimonials from '@/app/components/home/Testimonials';
import TrustCards from '@/app/components/product/TrustCards';
import ScientificallyProvenStats from '@/app/components/product/ScientificallyProvenStats';
import NutritionalInfo from '@/app/components/product/NutritionalInfo';
import FAQ from '@/app/components/home/FAQ';
import { getProductJsonLd, getBreadcrumbJsonLd } from '@/app/lib/jsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/product`;
  const enUrl = `${BASE_URL}/en/product`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Shop FiberZ | Premium Soluble Fiber Supplement',
    description:
      'Order FiberZ premium soluble dietary fiber powder. 100% natural resistant dextrin. Supports digestive health. Free shipping. Prices from 3,300 RSD.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Shop FiberZ | Premium Soluble Fiber Supplement',
      description:
        'Order FiberZ premium soluble dietary fiber powder. 100% natural resistant dextrin. Free shipping.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: 'Home', href: '/' },
              { name: 'Shop FiberZ', href: '/product' },
            ])
          ),
        }}
      />
      <PromoBanner />
      <ProductHero />
      <WhatIsFiberZProduct />
      <Testimonials variant="linen" />
      <TrustCards />
      <ScientificallyProvenStats />
      <NutritionalInfo />
      <FAQ variant="linen" />
    </>
  );
}
