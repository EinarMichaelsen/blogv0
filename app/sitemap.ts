import { getBlogPosts } from "../lib/get-blog-posts";
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  
  // Get all blog post URLs
  const blogUrls = posts.map((post) => ({
    url: `https://einar.blog/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Add base URLs
  const baseUrls = [
    {
      url: 'https://einar.blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    }
  ];

  return [...baseUrls, ...blogUrls];
} 