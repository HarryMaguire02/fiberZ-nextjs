import type { Metadata } from 'next';
import PromoBanner from '@/app/components/product/PromoBanner';
import ProductHero from '@/app/components/product/ProductHero';
import WhatIsFiberZProduct from '@/app/components/product/WhatIsFiberZProduct';
import Testimonials from '@/app/components/home/Testimonials';
import TrustCards from '@/app/components/product/TrustCards';
import ScientificallyProvenStats from '@/app/components/product/ScientificallyProvenStats';
import NutritionalInfo from '@/app/components/product/NutritionalInfo';
import FAQ from '@/app/components/home/FAQ';

export const metadata: Metadata = {
  title: 'Shop FiberZ | Premium Soluble Fiber Supplement',
  description:
    'Order FiberZ premium soluble dietary fiber powder. 100% natural resistant dextrin. Supports digestive health. Free shipping. Prices from 3,300 RSD.',
  alternates: { canonical: '/product' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Shop FiberZ | Premium Soluble Fiber Supplement',
    description:
      'Order FiberZ premium soluble dietary fiber powder. 100% natural resistant dextrin. Free shipping.',
    type: 'website',
    url: '/product',
  },
};

export default function ProductPage() {
  return (
    <>
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
