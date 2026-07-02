'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useFAQCategories } from './useFAQCategories';

export default function FAQCategoryCards() {
  const t = useTranslations('FAQ');
  const categories = useFAQCategories();

  const handleCategoryClick = (categoryId: string) => {
    const el = document.getElementById(categoryId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="relative bg-white rounded-2xl p-5 lg:p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center gap-3 cursor-pointer"
            >
              <span className="absolute top-0 left-0 bg-brand text-white font-montserrat text-xs font-semibold px-3 py-1 rounded-tl-2xl rounded-br-lg">
                {t('questionsCount', { count: cat.items.length })}
              </span>
              <div
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0 mt-4"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                <Image
                  src={cat.icon}
                  alt=""
                  width={36}
                  height={36}
                />
              </div>
              <div>
                <span className="font-montserrat font-bold text-heading text-sm block mb-1">
                  {cat.name}
                </span>
                <span className="font-lato text-body text-xs leading-relaxed">
                  {cat.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
