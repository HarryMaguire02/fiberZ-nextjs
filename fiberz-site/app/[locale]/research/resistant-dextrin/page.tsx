import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ResistantDextrinArticleContent from '@/app/components/research/article/ResistantDextrinArticleContent';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.resistantDextrin' });
  const srUrl = `${BASE_URL}/research/resistant-dextrin`;
  const enUrl = `${BASE_URL}/en/research/resistant-dextrin`;
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
      type: 'article',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default async function ResistantDextrinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResistantDextrinArticleContent locale={locale} />;
}
