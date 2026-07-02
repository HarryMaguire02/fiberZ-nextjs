import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface BenefitItem {
  title: string;
  description: string;
  tags: string[];
}

export default async function WhatFiberDoes() {
  const t = await getTranslations('Benefits.WhatFiberDoes');
  const items = t.raw('items') as BenefitItem[];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading">
            {t('title')}
          </h2>
          <p className="font-montserrat mt-4 text-body max-w-xl mx-auto text-sm leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`bg-linen rounded-2xl p-7 hover:shadow-md transition-shadow${i === 0 ? ' lg:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}>
                  <Image
                    src="/what-fiber-does-icon.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-montserrat text-heading font-semibold text-lg leading-snug pt-2">
                  {item.title}
                </h3>
              </div>
              <p className="font-lato text-body/80 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-lato text-xs bg-tag text-oak px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
