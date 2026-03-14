import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogCategory } from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog/posts');

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data as BlogPost;
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPost(): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.featured) || posts[0];
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getCategories(): { name: BlogCategory; count: number }[] {
  const posts = getAllPosts();
  const categoryMap = new Map<BlogCategory, number>();

  posts.forEach((post) => {
    categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
  });

  const allCategories: BlogCategory[] = ['Nutrition', 'Digestion', 'Recipes', 'Health', 'Lifestyle', 'Tips'];
  return allCategories.map((name) => ({
    name,
    count: categoryMap.get(name) || 0,
  }));
}
