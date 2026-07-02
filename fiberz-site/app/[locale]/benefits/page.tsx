import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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
  const t = await getTranslations({ locale, namespace: 'Metadata.benefits' });
  const srUrl = `${BASE_URL}/benefits`;
  const enUrl = `${BASE_URL}/en/benefits`;
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
      title: t('title'),
      description: t('description'),
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
