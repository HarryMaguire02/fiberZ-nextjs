import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const ICONS = [
  '/icon-fiber-intake.png',
  '/icon-easy-integration.png',
  '/icon-fiber-intake.png',
  '/icon-digestive.png',
];

interface Tip {
  title: string;
  description: string;
}

export default async function WhenToTake() {
  const t = await getTranslations('HowItWorks.WhenToTake');
  const tips = t.raw('tips') as Tip[];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="font-montserrat text-body text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, i) => (
            <div
              key={tip.title}
              className="bg-linen rounded-2xl p-6 md:p-8 text-center"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                <Image
                  src={ICONS[i]}
                  alt={tip.title}
                  width={34}
                  height={34}
                />
              </div>
              <h3 className="font-montserrat font-bold text-heading text-sm mb-2">
                {tip.title}
              </h3>
              <p className="font-lato text-body text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
