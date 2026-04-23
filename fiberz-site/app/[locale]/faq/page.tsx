import type { Metadata } from 'next';
import FAQHero from '@/app/components/faq/FAQHero';
import FAQCategoryCards from '@/app/components/faq/FAQCategoryCards';
import FAQAccordionSection from '@/app/components/faq/FAQAccordionSection';
import StillHaveQuestions from '@/app/components/faq/StillHaveQuestions';
import NewsletterSignup from '@/app/components/research/NewsletterSignup';
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/app/lib/jsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const srUrl = `${BASE_URL}/faq`;
  const enUrl = `${BASE_URL}/en/faq`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'FAQ | FiberZ',
    description:
      'Find answers to frequently asked questions about FiberZ, dietary fiber, usage, shipping, and more.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'FAQ | FiberZ',
      description: 'Find answers to frequently asked questions about FiberZ.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: 'Home', href: '/' },
              { name: 'FAQ', href: '/faq' },
            ])
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
