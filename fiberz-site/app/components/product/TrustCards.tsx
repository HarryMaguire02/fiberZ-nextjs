import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { TRUST_CARDS_ICONS, TRUST_CUSTOMER_COUNT } from '@/app/lib/productData';

interface TrustCard {
  title: string;
  description: string;
}

export default async function TrustCards() {
  const t = await getTranslations('Product');
  const cards = (t.raw('trustCards') as TrustCard[]).map((card, i) => ({
    ...card,
    icon: TRUST_CARDS_ICONS[i],
  }));

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10 lg:mb-14 max-w-2xl mx-auto leading-tight">
          {t('TrustCards.title', { count: TRUST_CUSTOMER_COUNT.toLocaleString() })}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-linen rounded-2xl p-8 text-center"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'linear-gradient(to right, #D4AC77, #A6813F)' }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={34}
                  height={34}
                />
              </div>
              <h3 className="font-montserrat font-bold text-heading text-sm mb-2">
                {card.title}
              </h3>
              <p className="font-lato text-body text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
