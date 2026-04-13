import type { Metadata } from 'next';
import HowItWorksHero from '@/app/components/how-it-works/HowItWorksHero';
import SimpleToAdd from '@/app/components/benefits/SimpleToAdd';
import HowToUse from '@/app/components/home/HowToUse';
import WhenToTake from '@/app/components/how-it-works/WhenToTake';
import FAQ from '@/app/components/home/FAQ';
import CTASection from '@/app/components/how-it-works/CTASection';

export const metadata: Metadata = {
  title: 'How to Use FiberZ | Step-by-Step Guide',
  description:
    'Learn how to use FiberZ soluble fiber supplement. Simple steps to mix, dissolve, and build a daily fiber habit for better digestive health.',
  alternates: { canonical: '/how-it-works' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'How to Use FiberZ | Step-by-Step Guide',
    description:
      'A simple guide to making FiberZ part of your daily routine. Mix into any drink or food — neutral taste, no texture change.',
    type: 'website',
    url: '/how-it-works',
  },
};

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
