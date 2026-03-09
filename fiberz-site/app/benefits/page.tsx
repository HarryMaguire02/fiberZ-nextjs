import type { Metadata } from 'next';
import BenefitsHero from '../components/benefits/BenefitsHero';
import StatsBar from '../components/benefits/StatsBar';
import WhatFiberDoes from '../components/benefits/WhatFiberDoes';
import SimpleToAdd from '../components/benefits/SimpleToAdd';
import ResearchSection from '../components/benefits/ResearchSection';
import WhoBenefits from '../components/benefits/WhoBenefits';

export const metadata: Metadata = {
  title: 'Benefits | FiberZ',
  description:
    'Discover the real, science-backed benefits of FiberZ soluble fiber for digestive health, gut microbiome, and daily fiber intake.',
};

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
