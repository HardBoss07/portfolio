import type { MetadataRoute } from 'next';
import { getProjectsForSitemap } from '@/lib/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://m4tt3o.dev';

  const projectUrls = await getProjectsForSitemap(baseUrl);

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...projectUrls];
}
