import type { Metadata } from 'next';
import BenefitsHero from '@/app/components/benefits/BenefitsHero';
import StatsBar from '@/app/components/benefits/StatsBar';
import WhatFiberDoes from '@/app/components/benefits/WhatFiberDoes';
import SimpleToAdd from '@/app/components/benefits/SimpleToAdd';
import ResearchSection from '@/app/components/benefits/ResearchSection';
import WhoBenefits from '@/app/components/benefits/WhoBenefits';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/benefits`;
  const enUrl = `${BASE_URL}/en/benefits`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Benefits | FiberZ',
    description:
      'Discover the real, science-backed benefits of FiberZ soluble fiber for digestive health, gut microbiome, and daily fiber intake.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Benefits | FiberZ',
      description:
        'Discover the real, science-backed benefits of FiberZ soluble fiber for digestive health, gut microbiome, and daily fiber intake.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function BenefitsPage() {
  return (
    <>
      <BenefitsHero />
      <StatsBar />
      <WhatFiberDoes />
      <SimpleToAdd />
      <ResearchSection />
      <WhoBenefits />
    </>
  );
}
