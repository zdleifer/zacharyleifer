import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zacharyleifer.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://zacharyleifer.com/blog/org-chart-rewritten',
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://zacharyleifer.com/blog/ai-enterprise-value',
      lastModified: new Date('2026-05-05'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
