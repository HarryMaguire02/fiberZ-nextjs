import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HowItWorksHero from '@/app/components/how-it-works/HowItWorksHero';
import SimpleToAdd from '@/app/components/benefits/SimpleToAdd';
import HowToUse from '@/app/components/home/HowToUse';
import WhenToTake from '@/app/components/how-it-works/WhenToTake';
import FAQ from '@/app/components/home/FAQ';
import CTASection from '@/app/components/how-it-works/CTASection';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.howItWorks' });
  const srUrl = `${BASE_URL}/how-it-works`;
  const enUrl = `${BASE_URL}/en/how-it-works`;
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

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <SimpleToAdd />
      <HowToUse />
      <WhenToTake />
      <FAQ variant="linen" />
      <CTASection />
    </>
  );
}
