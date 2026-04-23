import { Suspense } from 'react';
import type { Metadata } from 'next';
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
  const srUrl = `${BASE_URL}/blog`;
  const enUrl = `${BASE_URL}/en/blog`;
  const canonical = locale === 'sr' ? srUrl : enUrl;

  return {
    title: 'Blog | FiberZ',
    description:
      'Expert tips and articles on fiber, nutrition, digestive health, and wellness. Stay informed with the latest insights from FiberZ.',
    alternates: {
      canonical,
      languages: { sr: srUrl, en: enUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'Blog | FiberZ',
      description: 'Expert tips and articles on fiber, nutrition, digestive health, and wellness.',
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      url: canonical,
    },
  };
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost() || null;
  const categories = getCategories();

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
