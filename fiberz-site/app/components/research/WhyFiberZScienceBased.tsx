import { getTranslations } from 'next-intl/server';

export default async function WhyFiberZScienceBased() {
  const t = await getTranslations('Research.WhyScienceBased');

  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-6">
          {t('title')}
        </h2>
        <p className="font-montserrat text-body text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
