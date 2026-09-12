import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zacharyleifer.com/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://zacharyleifer.com/blog/org-chart-rewritten/',
      lastModified: new Date('2026-05-07'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://zacharyleifer.com/blog/ai-enterprise-value/',
      lastModified: new Date('2026-05-05'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://zacharyleifer.com/speaking/',
      lastModified: new Date('2026-06-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://zacharyleifer.com/blog/',
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://zacharyleifer.com/blog/marketing-to-corporate-it/',
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://zacharyleifer.com/blog/why-data-transformations-fail/',
      lastModified: new Date('2026-09-12'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
