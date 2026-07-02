import { COMPANY, fullAddress } from './company';
import { PACKAGES } from './productData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.brandName,
    legalName: COMPANY.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/fiberZ-logo.png`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.addressLine,
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressCountry: 'RS',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      email: COMPANY.email,
      availableLanguage: ['English', 'Serbian'],
    },
  };
}

export function getProductJsonLd(params: {
  name: string;
  description: string;
  packageLabels: Record<string, string>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    image: `${BASE_URL}/product-1.png`,
    brand: {
      '@type': 'Brand',
      name: 'FiberZ',
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY.legalName,
      address: fullAddress,
    },
    offers: PACKAGES.map((pkg) => ({
      '@type': 'Offer',
      name: params.packageLabels[pkg.id],
      price: pkg.salePrice,
      priceCurrency: 'RSD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/product`,
      priceValidUntil: new Date(
        new Date().getFullYear(),
        11,
        31
      ).toISOString().split('T')[0],
    })),
    category: 'Dietary Supplements',
    sku: 'FIBERZ-30',
    weight: {
      '@type': 'QuantitativeValue',
      value: '120',
      unitCode: 'GRM',
    },
  };
}

export function getFAQJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; href: string }[],
  locale: string
) {
  const prefix = locale === 'en' ? '/en' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${prefix}${item.href === '/' ? '' : item.href}`,
    })),
  };
}
