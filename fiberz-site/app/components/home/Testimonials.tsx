'use client';

import { useTranslations } from 'next-intl';

interface Testimonial {
  quote: string;
  author: string;
}

const VARIANTS = {
  default: {
    sectionBg: 'bg-white',
    cardGradient: 'linear-gradient(to bottom, #F6F2EA, #EDE5D5)',
  },
  linen: {
    sectionBg: 'bg-linen',
    cardGradient: 'linear-gradient(to bottom, #FFFFFF, #F6F2EA)',
  },
};

interface TestimonialsProps {
  variant?: keyof typeof VARIANTS;
}

export default function Testimonials({ variant = 'default' }: TestimonialsProps) {
  const t = useTranslations('Home.Testimonials');
  const testimonials = t.raw('items') as Testimonial[];
  const { sectionBg, cardGradient } = VARIANTS[variant];

  return (
    <section className={`py-12 lg:py-16 ${sectionBg}`}>
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2
          className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10"
        >
          {t('title')}
        </h2>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="shrink-0 w-65 rounded-2xl p-6 flex flex-col justify-between"
              style={{ background: cardGradient }}
            >
              <div>
                <div className="text-brand text-lg mb-3 tracking-wider">
                  {'★'.repeat(5)}
                </div>
                <p className="font-lato text-body text-sm leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <p className="font-montserrat font-semibold text-heading text-sm mt-6">
                {item.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="inline-block font-montserrat bg-brand text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full">
            {t('badge')}
          </span>
        </div>
      </div>
    </section>
  );
}
