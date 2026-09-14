import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// lastModified values are fixed dates. Update a URL's date only when that
// page's content actually changes, so lastmod stays a trustworthy signal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zacharyleifer.com/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://zacharyleifer.com/speaking/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://zacharyleifer.com/board-executive-advisory/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://zacharyleifer.com/work/1st-technology-commercial-growth/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://zacharyleifer.com/work/venetian-direct-channel-transformation/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://zacharyleifer.com/blog/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://zacharyleifer.com/blog/marketing-to-corporate-it/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://zacharyleifer.com/blog/why-data-transformations-fail/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://zacharyleifer.com/blog/org-chart-rewritten/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://zacharyleifer.com/blog/ai-enterprise-value/',
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
