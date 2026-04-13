import type { MetadataRoute } from 'next';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

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

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/product' ? 0.9 : 0.7,
  }));
}
