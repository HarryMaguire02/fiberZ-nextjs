import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const ICONS = [
  '/lack-fiber-bloating.png',
  '/lack-fiber-digestition.png',
  '/lack-fiber-intake.png',
  '/lack-fiber-gut.png',
];

interface Item {
  title: string;
  description: string;
}

export default async function ModernDietsLackFiber() {
  const t = await getTranslations('Home.ModernDiets');
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
          <p className="font-montserrat text-body text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div key={item.title} className="text-center">
              <Image
                src={ICONS[i]}
                alt={item.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-heading text-sm mb-2">
                {item.title}
              </h3>
              <p className="font-lato text-body text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
