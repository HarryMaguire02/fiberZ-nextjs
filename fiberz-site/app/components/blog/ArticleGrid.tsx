import { BlogPost } from '@/content/blog/types';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function handlePageClick(page: number, totalPages: number, onPageChange: (page: number) => void) {
  if (page < 1 || page > totalPages) return;
  onPageChange(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ArticleGrid({
  posts,
  currentPage,
  totalPages,
  onPageChange,
}: ArticleGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-montserrat text-body/60 text-sm">
          No articles found. Try a different search or category.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageClick(currentPage - 1, totalPages, onPageChange)}
            className={`w-11 h-11 rounded-full flex items-center justify-center bg-white text-brand hover:bg-brand/20 transition-colors ${currentPage === 1 ? 'opacity-50' : ''}`}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page, totalPages, onPageChange)}
              className={`w-11 h-11 rounded-full flex items-center justify-center font-montserrat text-sm font-semibold transition-colors ${
                currentPage === page
                  ? 'bg-brand text-white'
                  : 'text-brand bg-white hover:bg-brand/20'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageClick(currentPage + 1, totalPages, onPageChange)}
            className={`w-11 h-11 rounded-full flex items-center justify-center bg-white text-brand hover:bg-brand/20 transition-colors ${currentPage === totalPages ? 'opacity-50' : ''}`}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
