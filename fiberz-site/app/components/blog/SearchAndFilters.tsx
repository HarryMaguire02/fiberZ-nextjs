import { BlogFilterCategory } from '@/content/blog/types';

const FILTER_CATEGORIES: BlogFilterCategory[] = [
  'ALL',
  'Digestion',
  'Recipes',
  'Health',
  'Lifestyle',
];

interface SearchAndFiltersProps {
  searchQuery: string;
  activeCategory: BlogFilterCategory;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: BlogFilterCategory) => void;
}

export default function SearchAndFilters({
  searchQuery,
  activeCategory,
  onSearchChange,
  onCategoryChange,
}: SearchAndFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
      {/* Search */}
      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="font-montserrat text-sm text-body placeholder:text-brand/50 bg-white border border-brand rounded-full pl-5 pr-9 py-2.5 w-full sm:w-56 outline-none transition-all duration-200 focus:border-2 focus:border-brand-dark focus:shadow-md focus:shadow-brand/20"
        />
        {searchQuery.trim() && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-body/40 hover:text-body transition-colors"
            aria-label="Clear search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`font-montserrat text-xs font-semibold uppercase tracking-wider rounded-full px-5 py-2 transition-colors ${
              activeCategory === cat
                ? 'bg-brand text-white'
                : 'bg-white text-brand border border-brand hover:bg-brand/20'
            }`}
          >
            {cat === 'ALL' ? 'All' : cat}
          </button>
        ))}
      </div>
    </div>
  );
}
