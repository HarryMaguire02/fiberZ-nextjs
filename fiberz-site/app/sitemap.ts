import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/product',
    '/benefits',
    '/research',
    '/research/resistant-dextrin',
    '/blog',
    '/faq',
    '/how-it-works',
    '/terms-of-use',
    '/privacy-policy',
    '/shipping',
    '/disclaimer',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const srUrl = `${BASE_URL}${route}`;
    const enUrl = `${BASE_URL}/en${route}`;
    const changeFrequency = route === '/blog' ? 'weekly' : 'monthly';
    const priority = route === '/' ? 1 : route === '/product' ? 0.9 : 0.7;

    entries.push({
      url: srUrl,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: { sr: srUrl, en: enUrl } },
    });

    entries.push({
      url: enUrl,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: { sr: srUrl, en: enUrl } },
    });
  }

  return entries;
}
