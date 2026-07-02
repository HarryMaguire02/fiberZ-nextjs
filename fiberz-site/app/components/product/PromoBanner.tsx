import { getTranslations } from 'next-intl/server';
import { PROMO_ACTIVE } from '@/app/lib/productData';

export default async function PromoBanner() {
  if (!PROMO_ACTIVE) return null;

  const t = await getTranslations('Product.PromoBanner');

  return (
    <div className="bg-oak text-white text-center py-2.5 font-montserrat text-xs sm:text-sm tracking-wide">
      {t('text')}
    </div>
  );
}
