import type { Metadata } from 'next';
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
  const srUrl = `${BASE_URL}/how-it-works`;
  const enUrl = `${BASE_URL}/en/how-it-works`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'How to Use FiberZ | Step-by-Step Guide',
    description:
      'Learn how to use FiberZ soluble fiber supplement. Simple steps to mix, dissolve, and build a daily fiber habit for better digestive health.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'How to Use FiberZ | Step-by-Step Guide',
      description:
        'A simple guide to making FiberZ part of your daily routine. Mix into any drink or food — neutral taste, no texture change.',
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
