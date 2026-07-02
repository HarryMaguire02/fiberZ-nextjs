import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { NUTRITION_ACTIVE_INGREDIENT_VALUE, NUTRITION_VALUES_PER_SACHET } from '@/app/lib/productData';

export default async function NutritionalInfo() {
  const t = await getTranslations('Product.NutritionalInfo');
  const tRoot = await getTranslations('Product');
  const nutritionRows = tRoot.raw('nutritionRows') as string[];

  const activeIngredientRow = { name: nutritionRows[0], perSachet: NUTRITION_ACTIVE_INGREDIENT_VALUE };
  const nutritionValueRows = nutritionRows.slice(1).map((name, i) => ({
    name,
    perSachet: NUTRITION_VALUES_PER_SACHET[i],
  }));

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10 lg:mb-14">
          {t('title')}
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Decorative sachet images */}
          <div className="hidden lg:block absolute -left-40 top-1/2 -translate-y-1/2">
            <Image
              src="/faq-product.png"
              alt=""
              width={120}
              height={220}
              className="opacity-80"
            />
          </div>
          <div className="hidden lg:block absolute -right-40 top-1/2 -translate-y-1/2">
            <Image
              src="/faq-product.png"
              alt=""
              width={120}
              height={220}
              className="opacity-80"
            />
          </div>

          {/* Active Ingredient Table */}
          <div className="bg-linen rounded-2xl p-6 sm:p-8 mb-6">
            <h3 className="font-montserrat font-semibold text-brand text-sm mb-4">
              {t('activeIngredient')}
            </h3>
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-brand">
                  <th className="text-left font-semibold text-heading py-2">{t('ingredient')}</th>
                  <th className="text-right font-semibold text-heading py-2">{t('perSachet')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-body py-2">{activeIngredientRow.name}</td>
                  <td className="text-body text-right py-2">{activeIngredientRow.perSachet}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Nutritional Values Table */}
          <div className="bg-linen rounded-2xl p-6 sm:p-8">
            <h3 className="font-montserrat font-semibold text-brand text-sm mb-4">
              {t('nutritionalValues')}
            </h3>
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-brand">
                  <th className="text-left font-semibold text-heading py-2">{t('ingredient')}</th>
                  <th className="text-right font-semibold text-heading py-2">{t('perSachet')}</th>
                </tr>
              </thead>
              <tbody>
                {nutritionValueRows.map((row) => (
                  <tr key={row.name} className="border-b border-brand/40 last:border-0">
                    <td className="text-body py-2.5">{row.name}</td>
                    <td className="text-body text-right py-2.5">{row.perSachet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
