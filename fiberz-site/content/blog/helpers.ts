import { BlogPost } from './types';

export function searchPosts(query: string, posts: BlogPost[]): BlogPost[] {
  const lower = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lower) ||
      post.excerpt.toLowerCase().includes(lower)
  );
}

export function paginatePosts(
  posts: BlogPost[],
  page: number,
  perPage: number = 6
): { posts: BlogPost[]; totalPages: number } {
  const totalPages = Math.ceil(posts.length / perPage);
  const start = (page - 1) * perPage;
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
  };
}

export function formatDate(dateString: string, locale: string = 'en'): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString(locale === 'sr' ? 'sr-RS' : 'en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day}. ${month} ${year}`;
}
