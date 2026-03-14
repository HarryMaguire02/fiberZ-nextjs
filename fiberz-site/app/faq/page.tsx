import type { Metadata } from 'next';
import FAQHero from '@/app/components/faq/FAQHero';
import FAQCategoryCards from '@/app/components/faq/FAQCategoryCards';
import FAQAccordionSection from '@/app/components/faq/FAQAccordionSection';
import StillHaveQuestions from '@/app/components/faq/StillHaveQuestions';
import NewsletterSignup from '@/app/components/research/NewsletterSignup';

export const metadata: Metadata = {
  title: 'FAQ | FiberZ',
  description: 'Find answers to frequently asked questions about FiberZ, dietary fiber, usage, shipping, and more.',
  openGraph: {
    title: 'FAQ | FiberZ',
    description: 'Find answers to frequently asked questions about FiberZ.',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQCategoryCards />
      <FAQAccordionSection />
      <StillHaveQuestions />
      <NewsletterSignup />
    </>
  );
}
