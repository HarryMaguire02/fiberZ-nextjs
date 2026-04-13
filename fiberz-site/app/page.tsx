import type { Metadata } from 'next';
import HomeHero from './components/home/HomeHero';
import WhatIsFiberZ from './components/home/WhatIsFiberZ';
import KeyBenefits from './components/home/KeyBenefits';
import ModernDietsLackFiber from './components/home/ModernDietsLackFiber';
import HowToUse from './components/home/HowToUse';
import Testimonials from './components/home/Testimonials';
import BackedByScience from './components/home/BackedByScience';
import FAQ from './components/home/FAQ';
import { getOrganizationJsonLd } from './lib/jsonLd';

export const metadata: Metadata = {
  title: 'FiberZ - Premium Daily Soluble Fiber',
  description:
    'FiberZ is a premium daily soluble fiber designed to support digestive health, stable blood sugar levels, and weight management.',
};

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
