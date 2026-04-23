import type { Metadata } from 'next';
import HomeHero from '../components/home/HomeHero';
import WhatIsFiberZ from '../components/home/WhatIsFiberZ';
import KeyBenefits from '../components/home/KeyBenefits';
import ModernDietsLackFiber from '../components/home/ModernDietsLackFiber';
import HowToUse from '../components/home/HowToUse';
import Testimonials from '../components/home/Testimonials';
import BackedByScience from '../components/home/BackedByScience';
import FAQ from '../components/home/FAQ';
import { getOrganizationJsonLd } from '../lib/jsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/`;
  const enUrl = `${BASE_URL}/en/`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'FiberZ - Premium Daily Soluble Fiber',
    description:
      'FiberZ is a premium daily soluble fiber designed to support digestive health, stable blood sugar levels, and weight management.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl, 'x-default': srUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'FiberZ - Premium Daily Soluble Fiber',
      description:
        'FiberZ is a premium daily soluble fiber designed to support digestive health, stable blood sugar levels, and weight management.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
      />
      <HomeHero />
      <ModernDietsLackFiber />
      <WhatIsFiberZ />
      <KeyBenefits />
      <HowToUse />
      <Testimonials />
      <BackedByScience />
      <FAQ />
    </>
  );
}
