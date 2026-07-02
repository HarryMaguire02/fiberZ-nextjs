import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FAQHero from '@/app/components/faq/FAQHero';
import FAQCategoryCards from '@/app/components/faq/FAQCategoryCards';
import FAQAccordionSection from '@/app/components/faq/FAQAccordionSection';
import StillHaveQuestions from '@/app/components/faq/StillHaveQuestions';
import NewsletterSignup from '@/app/components/research/NewsletterSignup';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/app/lib/jsonLd';
import { FAQ_CATEGORIES_META } from '@/app/components/faq/faqData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.faq' });
  const srUrl = `${BASE_URL}/faq`;
  const enUrl = `${BASE_URL}/en/faq`;
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
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FAQ' });
  const tNav = await getTranslations({ locale, namespace: 'Nav' });
  const allQuestions = FAQ_CATEGORIES_META.flatMap(
    (meta) => t.raw(`categories.${meta.id}.items`) as { question: string; answer: string }[]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQJsonLd(allQuestions)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd(
              [
                { name: tNav('home'), href: '/' },
                { name: tNav('faq'), href: '/faq' },
              ],
              locale
            )
          ),
        }}
      />
      <FAQHero />
      <FAQCategoryCards />
      <FAQAccordionSection />
      <StillHaveQuestions />
      <NewsletterSignup />
    </>
  );
}
