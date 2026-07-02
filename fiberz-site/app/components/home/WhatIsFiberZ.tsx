import { getTranslations } from 'next-intl/server';

interface Feature {
  title: string;
  description: string;
}

export default async function WhatIsFiberZ() {
  const t = await getTranslations('Home.WhatIsFiberZ');
  const features = t.raw('features') as Feature[];

  return (
    <section
      className="relative py-12 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/what-is-fiberz-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(60, 40, 25, 0.65)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-white font-bold text-3xl lg:text-5xl mb-4"
          >
            {t('title')}
          </h2>
          <p className="font-roboto text-white text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-175 mx-auto space-y-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl px-6 py-5 text-center shadow-sm"
            >
              <h3 className="font-roboto font-bold text-heading text-sm md:text-base mb-1">
                <span className="mr-1">&#10003;</span>
                {feature.title}
              </h3>
              <p className="font-roboto text-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
