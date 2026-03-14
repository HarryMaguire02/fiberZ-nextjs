export type BlogCategory = 'Nutrition' | 'Digestion' | 'Recipes' | 'Health' | 'Lifestyle' | 'Tips';

export type BlogFilterCategory = 'ALL' | BlogCategory;

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  featured: boolean;
}
