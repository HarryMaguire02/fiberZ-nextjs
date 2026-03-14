'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FAQ_CATEGORIES } from './faqData';

export default function FAQAccordionSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 lg:pt-16">
        <div className="max-w-3xl mx-auto space-y-12 lg:space-y-16">
          {FAQ_CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-24"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
                >
                  <Image
                    src={category.icon}
                    alt=""
                    width={36}
                    height={36}
                  />
                </div>
                <h2 className="font-cormorant text-2xl lg:text-3xl font-bold text-heading">
                  {category.name}
                </h2>
              </div>

              {/* Accordion items */}
              <div className="space-y-3">
                {category.items.map((item, i) => {
                  const key = `${category.id}-${i}`;
                  const isOpen = openKey === key;

                  return (
                    <div key={key} className="rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors cursor-pointer ${
                          isOpen ? 'bg-brand text-white' : 'bg-linen text-heading hover:bg-tag'
                        }`}
                      >
                        <span className={`font-montserrat font-semibold text-sm md:text-base ${isOpen ? 'text-white' : 'text-heading'}`}>
                          {item.question}
                        </span>
                        <span className={`text-xl font-light ml-4 shrink-0 ${isOpen ? 'text-white' : 'text-brand'}`}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="bg-brand px-6 pb-5">
                          <p className="font-lato text-white/90 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
