'use client';

import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { BlogPost, BlogFilterCategory } from '@/content/blog/types';
import { searchPosts, paginatePosts } from '@/content/blog/helpers';
import SearchAndFilters from './SearchAndFilters';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';

const POSTS_PER_PAGE = 6;

interface BlogListingSectionProps {
  allPosts: BlogPost[];
  featuredPost: BlogPost | null;
}

export default function BlogListingSection({ allPosts, featuredPost }: BlogListingSectionProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');
  const activeCategory: BlogFilterCategory = (categoryParam as BlogFilterCategory) || 'ALL';

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts (exclude featured from grid)
  const filteredPosts = useMemo(() => {
    let posts = allPosts.filter((p) => !p.featured);

    if (activeCategory !== 'ALL') {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery, posts);
    }

    return posts;
  }, [allPosts, activeCategory, searchQuery]);

  const { posts: paginatedPosts, totalPages } = useMemo(
    () => paginatePosts(filteredPosts, currentPage, POSTS_PER_PAGE),
    [filteredPosts, currentPage]
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: BlogFilterCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'ALL') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.replace(`/blog?${params.toString()}`, { scroll: false });
    setCurrentPage(1);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 lg:py-16">
          <SearchAndFilters
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
          />

          {featuredPost && activeCategory === 'ALL' && !searchQuery.trim() && (
            <FeaturedArticle post={featuredPost} />
          )}

        </div>
      </section>

      <section className="bg-linen">
        <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 lg:py-16">
          <div className="mb-8 text-center">
            <h2 className="font-cormorant text-3xl lg:text-5xl font-bold text-heading leading-tight mb-3">
              Latest Articles
            </h2>
            <p className="font-montserrat text-brand text-sm">
              Explore our expert tips and guidelines for a better life
            </p>
          </div>

          <ArticleGrid
            posts={paginatedPosts}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
}
