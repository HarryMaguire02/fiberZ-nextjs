import type { Metadata } from 'next';
import ResistantDextrinArticleContent from '@/app/components/research/article/ResistantDextrinArticleContent';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/research/resistant-dextrin`;
  const enUrl = `${BASE_URL}/en/research/resistant-dextrin`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'The Role and Therapeutic Potential of Resistant Dextrins as Prebiotics | FiberZ',
    description:
      'A comprehensive review of resistant dextrin research: prebiotic mechanisms, clinical evidence for insulin resistance and glycemic control, microbiota modulation, and the science behind FiberZ.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'The Role and Therapeutic Potential of Resistant Dextrins as Prebiotics',
      description:
        'Peer-reviewed research on resistant dextrin as a prebiotic: SCFA production, glycemic control, cardiovascular benefits, and gut microbiota modulation.',
      type: 'article',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function ResistantDextrinPage() {
  return <ResistantDextrinArticleContent />;
}
