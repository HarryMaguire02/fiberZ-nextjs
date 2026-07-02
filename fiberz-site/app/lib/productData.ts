export interface ProductPackageMeta {
  id: string;
  boxes: number;
  daysOfUse: number;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  hasExtras?: boolean;
  isRecommended?: boolean;
}

export const PACKAGES: ProductPackageMeta[] = [
  {
    id: 'single',
    boxes: 1,
    daysOfUse: 30,
    originalPrice: 4120,
    salePrice: 3300,
    discountPercent: 20,
  },
  {
    id: 'triple',
    boxes: 3,
    daysOfUse: 90,
    originalPrice: 12360,
    salePrice: 9270,
    discountPercent: 25,
    hasExtras: true,
    isRecommended: true,
  },
  {
    id: 'six-pack',
    boxes: 6,
    daysOfUse: 120,
    originalPrice: 24720,
    salePrice: 17800,
    discountPercent: 28,
    hasExtras: true,
  },
];

export const SHIPPING_COST = 0;

export const PROMO_ACTIVE = true;

export const PRODUCT_IMAGES = [
  '/product-1.png',
  '/product-2.png',
  '/product-3.png',
  '/product-4.png',
];

// Icons only — ordered to match the Product.trustCards array in messages/*.json
export const TRUST_CARDS_ICONS = [
  '/icon-science.png',
  '/icon-easy-to-use.png',
  '/icon-premium.png',
];

// perSachet value for Product.nutritionRows[0] (active ingredient row)
export const NUTRITION_ACTIVE_INGREDIENT_VALUE = '4g';

// perSachet values ordered to match Product.nutritionRows[1..7]
export const NUTRITION_VALUES_PER_SACHET = [
  '48 kJ / 11 kcal',
  '0.02g',
  '1.8g',
  '0.1g',
  '2.1g',
  '0.02g',
  '< 0.0004g',
];

// Numeric/display values ordered to match the Product.stats array in messages/*.json
export const STATS_VALUES = ['4g', '30', '100%'];

export const TRUST_CUSTOMER_COUNT = 1000;

/** Format a number as Serbian RSD: dot thousands separator, e.g. 3.300 RSD */
export function formatRSD(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' RSD';
}
