'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FAQItem {
  question: string;
  answer: string;
}

const VARIANTS = {
  default: {
    sectionBg: 'bg-white',
    closedBg: 'bg-linen hover:bg-tag',
  },
  linen: {
    sectionBg: 'bg-linen',
    closedBg: 'bg-white hover:bg-tag',
  },
};

interface FAQProps {
  variant?: keyof typeof VARIANTS;
}

export default function FAQ({ variant = 'default' }: FAQProps) {
  const t = useTranslations('Home.FAQ');
  const faqs = t.raw('items') as FAQItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(4);
  const { sectionBg, closedBg } = VARIANTS[variant];

  return (
    <section className={`py-12 lg:py-16 ${sectionBg}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2
          className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10"
        >
          {t('title')}
        </h2>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
                    isOpen ? 'bg-brand text-white' : closedBg
                  }`}
                >
                  <span className={`font-montserrat font-semibold text-sm md:text-base ${isOpen ? 'text-white' : 'text-heading'}`}>
                    {faq.question}
                  </span>
                  <span className={`text-xl font-light ml-4 shrink-0 ${isOpen ? 'text-white' : 'text-brand'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="bg-brand px-6 pb-5">
                    <p className="font-lato text-white/90 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
