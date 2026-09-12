import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const URL = 'https://zacharyleifer.com/blog/';

export const metadata: Metadata = {
  title: 'Writing & Perspectives | Zachary Leifer',
  description:
    'Articles by Zachary Leifer on marketing and technology leadership, customer data, AI, and the operating models that connect technology investment to commercial results.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    title: 'Writing & Perspectives | Zachary Leifer',
    description:
      'Articles on marketing and technology leadership, customer data, AI, and commercial operating models.',
    url: URL,
    images: [{ url: 'https://zacharyleifer.com/images/headshot.png' }],
  },
};

const posts = [
  {
    slug: 'why-data-transformations-fail',
    title: 'Why Data and Digital Transformations Fail: Evidence from 74 Senior Executives',
    date: '2026-09-12',
    display: 'September 12, 2026',
    blurb:
      'The capstone research from my Harvard Business School AMP: a survey of 74 senior executives on why initiatives fail to deliver, and the readiness architecture that changes the odds.',
  },
  {
    slug: 'marketing-to-corporate-it',
    title: 'What Running Corporate IT Taught Me About Running Marketing',
    date: '2026-09-12',
    display: 'September 12, 2026',
    blurb:
      'A Fortune 500 recruited me out of VP Digital Marketing to run Corporate IT. Four lessons from the other side of the CMO/CIO divide.',
  },
  {
    slug: 'org-chart-rewritten',
    title: 'The Org Chart Is Being Rewritten. Is Your Company Ready?',
    date: '2026-05-07',
    display: 'May 7, 2026',
    blurb:
      'AI is dismantling the traditional management pyramid. The question is whether you redesign it intentionally or let the disruption happen to you.',
  },
  {
    slug: 'ai-enterprise-value',
    title: 'AI Is Already in Your Company. Is It Creating Enterprise Value? Is It Secure?',
    date: '2026-05-05',
    display: 'May 5, 2026',
    blurb:
      'AI adoption is running ahead of AI governance in most organizations. What boards and CEOs should be asking.',
  },
];

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': URL,
  name: 'Writing & Perspectives',
  about: { '@id': 'https://zacharyleifer.com/#zachary-leifer' },
  hasPart: posts.map((p) => ({
    '@type': 'Article',
    headline: p.title,
    url: `https://zacharyleifer.com/blog/${p.slug}/`,
    datePublished: p.date,
    author: { '@id': 'https://zacharyleifer.com/#zachary-leifer' },
  })),
};

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <div className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span className="mx-2">·</span>
            <span className="text-[#0A0A0A]">Insights</span>
          </p>

          <header className="mb-16">
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              Writing &amp; Perspectives
            </h1>
            <p className="text-lg text-[#334155] leading-relaxed max-w-xl">
              On marketing and technology leadership, customer data, AI, and the operating
              models that connect technology investment to commercial results.
            </p>
          </header>

          <div className="divide-y divide-[#0A0A0A]/10 border-t border-[#0A0A0A]/10">
            {posts.map((p) => (
              <article key={p.slug} className="py-10">
                <time
                  dateTime={p.date}
                  className="block text-[10px] tracking-[0.3em] uppercase text-[#64748B] mb-3"
                >
                  {p.display}
                </time>
                <h2 className="font-display text-2xl font-bold text-[#0A0A0A] leading-snug mb-3">
                  <a href={`/blog/${p.slug}/`} className="hover:text-[#3B5998] transition-colors">
                    {p.title}
                  </a>
                </h2>
                <p className="text-[#334155] leading-relaxed mb-4">{p.blurb}</p>
                <a
                  href={`/blog/${p.slug}/`}
                  className="text-sm text-[#3B5998] hover:text-[#0A0A0A] transition-colors"
                >
                  Read the article &rarr;
                </a>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
