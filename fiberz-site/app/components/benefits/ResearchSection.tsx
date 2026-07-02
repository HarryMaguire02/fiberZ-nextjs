import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

interface ResearchPoint {
  title: string;
  description: string;
}

export default async function ResearchSection() {
  const t = await getTranslations('Benefits.ResearchSection');
  const points = t.raw('points') as ResearchPoint[];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-5xl font-cormorant font-bold text-heading leading-tight">
            {t('title')}
          </h2>
          <p className="mt-4 font-montserrat text-gray-text text-sm max-w-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Research points */}
          <div className="space-y-4">
            {points.map((point) => (
              <div
                key={point.title}
                className="bg-linen rounded-xl p-6"
              >
                <h4 className="font-montserrat font-semibold text-body mb-2">{point.title}</h4>
                <p className="font-lato text-body text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-linen rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <h4 className="font-bold text-body text-lg mb-3">
              {t('ctaTitle')}
            </h4>
            <p className="text-body text-sm mb-6 leading-relaxed">
              {t('ctaBody')}
            </p>
            <div className="flex flex-col items-center gap-3 w-full">
              <Link
                href="/research"
                className="font-montserrat px-8 py-2.5 rounded-full bg-brand text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-dark transition-colors"
              >
                {t('ctaResearch')}
              </Link>
              <Link
                href="/faq"
                className="font-montserrat px-8 py-2.5 rounded-full border border-brand bg-white text-brand text-xs font-semibold tracking-widest uppercase hover:bg-brand/10 transition-colors"
              >
                {t('ctaFAQ')}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
