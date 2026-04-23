import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { BlogPost } from '@/content/blog/types';
import { formatDate } from '@/content/blog/helpers';

export default function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <div className="relative bg-white rounded-2xl flex flex-col p-4">
      <span className="absolute z-1000 top-0 left-0 bg-brand text-white font-montserrat text-sm font-semibold px-4 py-1.5 rounded-tl-2xl rounded-br-lg">
        {post.category}
      </span>
      <div className="relative mb-4">
        <div className="relative aspect-16/11 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1">
        <div className="flex items-center gap-1.5 mb-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="font-lato text-brand text-xs">{formatDate(post.date)}</span>
        </div>

        <h3 className="font-montserrat font-bold text-heading text-base leading-snug mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="font-lato text-body text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="border-t border-brand/30 pt-3 flex items-center justify-between">
          <span className="font-lato text-brand text-xs flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-montserrat text-brand text-sm font-semibold hover:text-brand-dark transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
