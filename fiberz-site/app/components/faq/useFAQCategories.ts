'use client';

import { useTranslations } from 'next-intl';
import { FAQ_CATEGORIES_META } from './faqData';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  icon: string;
  name: string;
  description: string;
  items: FAQItem[];
}

export function useFAQCategories(): FAQCategory[] {
  const t = useTranslations('FAQ');

  return FAQ_CATEGORIES_META.map((meta) => ({
    ...meta,
    name: t(`categories.${meta.id}.name`),
    description: t(`categories.${meta.id}.description`),
    items: t.raw(`categories.${meta.id}.items`) as FAQItem[],
  }));
}
