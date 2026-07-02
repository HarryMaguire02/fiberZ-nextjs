import { getTranslations } from 'next-intl/server';

interface Step {
  title: string;
  description: string;
}

export default async function HowToUse() {
  const t = await getTranslations('Home.HowToUse');
  const steps = t.raw('steps') as Step[];

  return (
    <section
      className="relative py-12 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/how-to-use-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(60, 40, 25, 0.55)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-white font-bold text-3xl lg:text-5xl mb-3"
          >
            {t('title')}
          </h2>
          <p className="font-montserrat text-white text-sm md:text-base leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center"
            >
              <div
                className="w-12 h-12 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                {i + 1}
              </div>
              <h3 className="font-montserrat font-bold text-heading text-base mb-2">
                {step.title}
              </h3>
              <p className="font-lato text-body text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
