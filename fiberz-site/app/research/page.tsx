import type { Metadata } from 'next';
import ResearchHero from '../components/research/ResearchHero';
import ResearchStats from '../components/research/ResearchStats';
import WhyFiberZScienceBased from '../components/research/WhyFiberZScienceBased';
import KeyScientificFindings from '../components/research/KeyScientificFindings';
import FeaturedClinicalStudies from '../components/research/FeaturedClinicalStudies';
import NewsletterSignup from '../components/research/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Research | FiberZ',
  description:
    'Explore the science behind FiberZ. Decades of peer-reviewed research on soluble fiber, resistant dextrin, and digestive health — with citations for every claim.',
};

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <ResearchStats />
      <WhyFiberZScienceBased />
      <KeyScientificFindings />
      <FeaturedClinicalStudies />
      <NewsletterSignup />
    </>
  );
}
