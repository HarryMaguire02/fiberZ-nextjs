import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

interface TargetGroup {
  title: string;
  description: string;
}

export default async function WhoBenefits() {
  const t = await getTranslations('Benefits.WhoBenefits');
  const groups = t.raw('groups') as TargetGroup[];
  const ctaBodyLines = t('ctaBody').split('\n');

  return (
    <section className="py-12 lg:py-16 bg-linen">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight">
            {t('title')}
          </h2>
          <p className="font-montserrat mt-4 text-body text-sm max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="p-7">
                <h3 className="font-montserrat font-semibold text-heading mb-3 text-center">{group.title}</h3>
                <p className="font-lato text-body text-sm leading-relaxed text-center">{group.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="font-lato text-body/50 text-xs text-center mt-8 max-w-xl mx-auto leading-relaxed">
          {t('disclaimer')}
        </p>

        {/* Divider */}
        <hr className="border-brand my-12 sm:my-16" />

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-2">
            {t('ctaLine1')}
          </h2>
          <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-brand leading-tight mb-6">
            {t('ctaLine2')}
          </h2>
          <p className="font-montserrat text-body text-sm mb-8 leading-relaxed">
            {ctaBodyLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < ctaBodyLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="font-montserrat px-8 py-3 rounded-full bg-brand text-white text-xs font-semibold tracking-widest uppercase hover:bg-brand-dark transition-colors"
            >
              {t('ctaBuy')}
            </Link>
            <Link
              href="/research"
              className="font-montserrat px-8 py-3 rounded-full border border-brand bg-white text-brand text-xs font-semibold tracking-widest uppercase hover:bg-brand/10 transition-colors"
            >
              {t('ctaResearch')}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
