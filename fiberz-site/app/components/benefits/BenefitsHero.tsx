import { getTranslations } from 'next-intl/server';

export default async function BenefitsHero() {
  const t = await getTranslations('Benefits.Hero');

  return (
    <section
      className="relative text-white py-14 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/benefits-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(to right, rgba(80,44,30,1) 0%, rgba(80,44,30,1) 48%, rgba(61,49,41,0.7) 100%)',
          opacity: 0.25,
        }}
      />
      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1
          className="font-playfair font-bold mb-6"
          style={{ fontSize: '56px', lineHeight: '67.2px' }}
        >
          <span className="text-body block">{t('line1')}</span>
          <span className="text-white italic block">{t('line2')}</span>
        </h1>
        <p className="font-montserrat text-white text-lg leading-relaxed max-w-xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
