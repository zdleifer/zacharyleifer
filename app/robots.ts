import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all search engines and AI citation/search bots
      { userAgent: '*', allow: '/' },
      // Block AI training-only crawlers (not search bots)
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'Amazonbot', disallow: '/' },
    ],
    sitemap: 'https://zacharyleifer.com/sitemap.xml',
  };
}
