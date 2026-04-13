import Image from 'next/image';
import { NUTRITION_ACTIVE_INGREDIENT, NUTRITION_VALUES } from '@/app/lib/productData';

export default function NutritionalInfo() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="font-cormorant text-heading font-bold text-3xl lg:text-5xl text-center mb-10 lg:mb-14">
          Nutritional Information
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
              Active Ingredient Content
            </h3>
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-brand">
                  <th className="text-left font-semibold text-heading py-2">Ingredient</th>
                  <th className="text-right font-semibold text-heading py-2">Per sachet</th>
                </tr>
              </thead>
              <tbody>
                {NUTRITION_ACTIVE_INGREDIENT.map((row) => (
                  <tr key={row.name}>
                    <td className="text-body py-2">{row.name}</td>
                    <td className="text-body text-right py-2">{row.perSachet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nutritional Values Table */}
          <div className="bg-linen rounded-2xl p-6 sm:p-8">
            <h3 className="font-montserrat font-semibold text-brand text-sm mb-4">
              Nutritional Values
            </h3>
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-brand">
                  <th className="text-left font-semibold text-heading py-2">Ingredient</th>
                  <th className="text-right font-semibold text-heading py-2">Per sachet</th>
                </tr>
              </thead>
              <tbody>
                {NUTRITION_VALUES.map((row) => (
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
