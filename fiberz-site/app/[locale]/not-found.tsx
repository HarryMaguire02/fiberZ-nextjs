import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
      <h1 className="font-cormorant text-heading font-bold text-3xl lg:text-5xl mb-4">
        {t('title')}
      </h1>
      <p className="font-montserrat text-body text-sm lg:text-base mb-8 max-w-xl mx-auto">
        {t('body')}
      </p>
      <Link
        href="/"
        className="inline-block font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-8 py-3 hover:bg-brand-dark transition-colors"
      >
        {t('cta')}
      </Link>
    </div>
  );
}
