import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getAllPosts, getFeaturedPost, getCategories } from '@/content/blog/utils';
import BlogHero from '@/app/components/blog/BlogHero';
import BlogListingSection from '@/app/components/blog/BlogListingSection';
import CategoryCards from '@/app/components/blog/CategoryCards';
import NewsletterSignup from '@/app/components/research/NewsletterSignup';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.blog' });
  const srUrl = `${BASE_URL}/blog`;
  const enUrl = `${BASE_URL}/en/blog`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const allPosts = getAllPosts(locale);
  const featuredPost = getFeaturedPost(locale) || null;
  const categories = getCategories(locale);

  return (
    <>
      <BlogHero />
      <Suspense>
        <BlogListingSection allPosts={allPosts} featuredPost={featuredPost} />
      </Suspense>
      <CategoryCards categories={categories} />
      <NewsletterSignup />
    </>
  );
}
