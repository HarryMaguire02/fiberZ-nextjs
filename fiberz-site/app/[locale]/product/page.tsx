import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PromoBanner from '@/app/components/product/PromoBanner';
import ProductHero from '@/app/components/product/ProductHero';
import WhatIsFiberZProduct from '@/app/components/product/WhatIsFiberZProduct';
import Testimonials from '@/app/components/home/Testimonials';
import TrustCards from '@/app/components/product/TrustCards';
import ScientificallyProvenStats from '@/app/components/product/ScientificallyProvenStats';
import NutritionalInfo from '@/app/components/product/NutritionalInfo';
import FAQ from '@/app/components/home/FAQ';
import { getProductJsonLd, getBreadcrumbJsonLd } from '@/app/lib/jsonLd';
import { PACKAGES } from '@/app/lib/productData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.product' });
  const srUrl = `${BASE_URL}/product`;
  const enUrl = `${BASE_URL}/en/product`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Product' });
  const tMeta = await getTranslations({ locale, namespace: 'Metadata.product' });
  const tNav = await getTranslations({ locale, namespace: 'Nav' });
  const tFooter = await getTranslations({ locale, namespace: 'Footer' });
  const packageLabels = Object.fromEntries(
    PACKAGES.map((pkg) => [pkg.id, t(`packages.${pkg.id}.label`)])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getProductJsonLd({
              name: tMeta('ogTitle'),
              description: tMeta('ogDescription'),
              packageLabels,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd(
              [
                { name: tNav('home'), href: '/' },
                { name: tFooter('links.shopFiberZ'), href: '/product' },
              ],
              locale
            )
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
