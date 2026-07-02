import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function WhatIsFiberZProduct() {
  const t = await getTranslations('Product.WhatIsFiberZ');
  const points = t.raw('points') as string[];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10 lg:mb-14">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Text */}
          <div>
            <p className="font-lato text-body text-sm lg:text-base leading-relaxed mb-6">
              {t('intro')}
            </p>

            <p className="font-montserrat font-bold text-brand text-2xl mb-4">
              {t('simplyPut')}
            </p>

            <div className="space-y-4 font-lato text-body text-sm lg:text-base leading-relaxed">
              {points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/what-is-fiber-cover.png"
              alt="FiberZ product box"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
