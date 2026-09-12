import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Welcome every search engine and AI crawler, including the training
      // crawlers (GPTBot, CCBot, Amazonbot). Training ingestion is the only
      // channel where a model can name Zachary Leifer without retrieving a
      // page first, and it has no bearing on search or answer-engine ranking.
      { userAgent: '*', allow: '/' },
      // Bytespider is an aggressive scraper with no answer-engine presence
      // in this market, so it stays blocked.
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: 'https://zacharyleifer.com/sitemap.xml',
  };
}
