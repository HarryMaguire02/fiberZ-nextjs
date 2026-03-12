'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'Is FiberZ safe for daily use?',
    answer:
      'Yes, FiberZ is made from resistant dextrin, a well-studied and safe form of soluble fiber. It is suitable for daily consumption as part of a balanced diet.',
  },
  {
    question: 'Can FiberZ cause bloating?',
    answer:
      'When starting any fiber supplement, some people may experience mild bloating. We recommend starting with one sachet per day and gradually increasing to allow your digestive system to adjust.',
  },
  {
    question: 'Can I take FiberZ with medication?',
    answer:
      'FiberZ is generally safe to take alongside most medications. However, we recommend consulting your healthcare provider if you are on prescription medication, as fiber can affect absorption rates.',
  },
  {
    question: 'When will I notice effects?',
    answer:
      'Many users report improved digestive regularity within the first week. For optimal results, consistent daily use over 2-4 weeks is recommended.',
  },
  {
    question: 'How much fiber do I need daily?',
    answer:
      'Dietary fiber plays a crucial role in digestive health, supporting regular bowel movements, promoting beneficial gut bacteria, and contributing to overall wellness. FiberZ uses resistant dextrin, a clinically studied form of soluble fiber that is well tolerated and effective.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2
          className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10"
        >
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
                      isOpen ? 'bg-brand text-white' : 'bg-linen text-heading hover:bg-tag'
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

          <div className="hidden lg:block">
            <Image
              src="/faq-product.png"
              alt="FiberZ sachets"
              width={200}
              height={350}
              className="w-[180px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
