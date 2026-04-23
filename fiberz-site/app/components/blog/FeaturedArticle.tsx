import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { BlogPost } from '@/content/blog/types';
import { formatDate } from '@/content/blog/helpers';

export default function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <div className="mb-8 sm:mb-12">
      <span className="font-montserrat text-brand text-xs font-semibold uppercase tracking-widest mb-4 block">
        Featured
      </span>

      <div className="bg-linen rounded-2xl overflow-hidden flex flex-col md:flex-row p-8 md:p-10 gap-4 md:gap-6">
        {/* Image */}
        <div className="relative md:w-[42%] shrink-0 aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h3 className="font-cormorant font-bold text-body text-3xl md:text-4xl leading-snug mb-4">
            {post.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-4">
            <span className="font-lato text-brand text-xs flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {formatDate(post.date)}
            </span>
            <span className="font-lato text-brand text-xs flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {post.author}
            </span>
            <span className="font-lato text-brand text-xs flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readTime} min read
            </span>
          </div>

          <p className="font-lato text-body text-sm leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex justify-center md:justify-end">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block font-montserrat text-xs font-semibold tracking-widest uppercase bg-brand text-white rounded-full px-8 py-3 hover:bg-brand-dark transition-colors"
            >
              Read the Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
