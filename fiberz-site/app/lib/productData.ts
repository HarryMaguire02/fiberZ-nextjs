export interface ProductPackage {
  id: string;
  boxes: number;
  daysOfUse: number;
  label: string;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  extras?: string;
  isRecommended?: boolean;
}

export const PACKAGES: ProductPackage[] = [
  {
    id: 'single',
    boxes: 1,
    daysOfUse: 30,
    label: '1 box / 30 days of use',
    originalPrice: 4120,
    salePrice: 3300,
    discountPercent: 20,
  },
  {
    id: 'triple',
    boxes: 3,
    daysOfUse: 90,
    label: '3 boxes / 90 days of use',
    originalPrice: 12360,
    salePrice: 9270,
    discountPercent: 25,
    extras: '+shaker',
    isRecommended: true,
  },
  {
    id: 'six-pack',
    boxes: 6,
    daysOfUse: 120,
    label: '6 boxes / 120 days of use',
    originalPrice: 24720,
    salePrice: 17800,
    discountPercent: 28,
    extras: '+shaker',
  },
];

export const SHIPPING_COST = 0;

export const PROMO = {
  text: '20% welcome discount on all orders until March 11.',
  active: true,
};

export const PRODUCT_BENEFITS = [
  'Supports digestive regularity',
  'Helps maintain a healthy gut microbiome',
  'Contributes to your daily fiber intake',
  'Neutral taste and odor',
];

export const PRODUCT_IMAGES = [
  '/product-1.png',
  '/product-2.png',
  '/product-3.png',
  '/product-4.png',
];

export const TRUST_CARDS_DATA = [
  {
    icon: '/icon-science.png',
    title: 'Scientifically Proven',
    description:
      'Uses clinically tested resistant dextrin with proven benefits for digestive health.',
  },
  {
    icon: '/icon-easy-to-use.png',
    title: 'Easy to Use',
    description:
      'Dissolves in any drink or food without changing the taste or texture.',
  },
  {
    icon: '/icon-premium.png',
    title: 'Premium Quality',
    description:
      'Produced to the highest quality standards, without artificial additives or preservatives.',
  },
];

export const NUTRITION_ACTIVE_INGREDIENT = [
  { name: 'Resistant wheat dextrin powder', perSachet: '4g' },
];

export const NUTRITION_VALUES = [
  { name: 'Energy', perSachet: '48 kJ / 11 kcal' },
  { name: 'Fat', perSachet: '0.02g' },
  { name: 'Carbohydrates', perSachet: '1.8g' },
  { name: 'of which sugars', perSachet: '0.1g' },
  { name: 'Fiber', perSachet: '2.1g' },
  { name: 'Protein', perSachet: '0.02g' },
  { name: 'Salt', perSachet: '< 0.0004g' },
];

export const STATS = [
  { value: '4g', label: 'Per sachet', sublabel: 'Optimal dose for daily use' },
  { value: '30', label: 'Sachets', sublabel: 'Monthly supply for regular use' },
  { value: '100%', label: 'Soluble', sublabel: 'In drinks or food' },
];

/** Format a number as Serbian RSD: dot thousands separator, e.g. 3.300 RSD */
export function formatRSD(amount: number): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' RSD';
}
