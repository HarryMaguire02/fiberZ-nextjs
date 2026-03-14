import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllPosts, getFeaturedPost, getCategories } from '@/content/blog/utils';
import BlogHero from '@/app/components/blog/BlogHero';
import BlogListingSection from '@/app/components/blog/BlogListingSection';
import CategoryCards from '@/app/components/blog/CategoryCards';
import NewsletterSignup from '@/app/components/research/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Blog | FiberZ',
  description: 'Expert tips and articles on fiber, nutrition, digestive health, and wellness. Stay informed with the latest insights from FiberZ.',
  openGraph: {
    title: 'Blog | FiberZ',
    description: 'Expert tips and articles on fiber, nutrition, digestive health, and wellness.',
    type: 'website',
  },
};

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
