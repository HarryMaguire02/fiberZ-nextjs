import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const ICONS = [
  '/icon-digestive.png',
  '/icon-microbiota.png',
  '/icon-fiber-intake.png',
  '/icon-easy-integration.png',
];

interface Item {
  title: string;
  description: string;
}

export default async function KeyBenefits() {
  const t = await getTranslations('Home.KeyBenefits');
  const items = t.raw('items') as Item[];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2
            className="font-cormorant text-heading font-bold text-3xl lg:text-5xl"
          >
            {t('title')}
          </h2>
          <p className="font-montserrat text-body text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-linen rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {items.map((item, i) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}>
                  <Image
                    src={ICONS[i]}
                    alt={item.title}
                    width={34}
                    height={34}
                  />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-heading text-sm md:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="font-lato text-body text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
