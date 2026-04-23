import type { Metadata } from 'next';
import ResearchHero from '@/app/components/research/ResearchHero';
import ResearchStats from '@/app/components/research/ResearchStats';
import WhyFiberZScienceBased from '@/app/components/research/WhyFiberZScienceBased';
import KeyScientificFindings from '@/app/components/research/KeyScientificFindings';
import FeaturedClinicalStudies from '@/app/components/research/FeaturedClinicalStudies';
import NewsletterSignup from '@/app/components/research/NewsletterSignup';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/research`;
  const enUrl = `${BASE_URL}/en/research`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Research | FiberZ',
    description:
      'Explore the science behind FiberZ. Decades of peer-reviewed research on soluble fiber, resistant dextrin, and digestive health — with citations for every claim.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Research | FiberZ',
      description:
        'Explore the science behind FiberZ. Decades of peer-reviewed research on soluble fiber, resistant dextrin, and digestive health.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <ResearchStats />
      <WhyFiberZScienceBased />
      <KeyScientificFindings />
      <FeaturedClinicalStudies />
      <div className="bg-linen">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
          <hr className="border-brand" />
        </div>
      </div>
      <NewsletterSignup />
    </>
  );
}
