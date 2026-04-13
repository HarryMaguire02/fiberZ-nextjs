import { PROMO } from '@/app/lib/productData';

export default function PromoBanner() {
  if (!PROMO.active) return null;

  return (
    <div className="bg-oak text-white text-center py-2.5 font-montserrat text-xs sm:text-sm tracking-wide">
      {PROMO.text}
    </div>
  );
}
