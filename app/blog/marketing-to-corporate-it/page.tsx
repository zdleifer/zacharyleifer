import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { OG_IMAGE } from '@/data/og-image';

const TITLE = 'What Running Corporate IT Taught Me About Running Marketing';
const DESC =
  'A Fortune 500 recruited me out of VP Digital Marketing to run Corporate IT. Four lessons from the other side of the CMO/CIO divide, and what they changed about how I ran marketing afterward.';
const URL = 'https://zacharyleifer.com/blog/marketing-to-corporate-it/';
const PUBLISHED = '2026-09-12';

export const metadata: Metadata = {
  title: `${TITLE} | Zachary Leifer`,
  description: DESC,
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com' }],
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESC,
    url: URL,
    authors: ['Zachary Leifer'],
    publishedTime: PUBLISHED,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  author: {
    '@id': 'https://zacharyleifer.com/#zachary-leifer',
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
  publisher: { '@id': 'https://zacharyleifer.com/#zachary-leifer', '@type': 'Person', name: 'Zachary Leifer', url: 'https://zacharyleifer.com' },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  image: 'https://zacharyleifer.com/images/headshot.png',
  description: DESC,
};

export default function MarketingToCorporateITArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          {/* Breadcrumb */}
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span className="mx-2">·</span>
            <a href="/#insights" className="hover:text-[#0A0A0A] transition-colors">Insights</a>
          </p>

          {/* Header */}
          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">Article</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              {TITLE}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#64748B]">
              <span>Zachary Leifer</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>September 12, 2026</time>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              In 2019 a Fortune 500 company recruited me out of a marketing job to run part of its technology organization. I had been VP of Digital Marketing and eCommerce at The Venetian Resort. I became VP of Corporate Information Technology at Las Vegas Sands. Nobody moves in that direction, and the year I spent on the other side changed how I have run marketing ever since.
            </p>

            <p>
              The reason for the move was not that I was secretly an engineer. It was that marketing had started behaving like a capital-project organization. We had put roughly $13M into a new website and booking engine, run it like an infrastructure program rather than a campaign, and it returned $36M in incremental direct-channel revenue with 24 consecutive months of growth. What got me recruited was not creative work. It was delivering a large technology investment on a schedule with a number attached to it.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              1. Marketing&rsquo;s technology requests look completely different from the other side
            </h2>

            <p>
              From inside marketing, a request to stand up a new platform is a growth decision. From inside IT, the same request arrives as a security review, an identity and access question, a data residency problem, a vendor risk assessment, an integration cost, and a support obligation that never ends. None of that is obstruction. It is the actual cost of the thing, and marketing had simply never been shown the invoice.
            </p>

            <p>
              The practical consequence is that the marketing leaders who get their technology approved are the ones who arrive having already answered those questions. Not because IT demands deference, but because a request that accounts for its own total cost is a request someone can say yes to.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              2. The customer data problem is an architecture problem wearing a marketing costume
            </h2>

            <p>
              Most personalization programs fail for reasons that have nothing to do with marketing. They fail because customer identity is resolved inconsistently across systems, because the data model was designed for reporting rather than activation, or because the governance around who may use which attribute for what purpose was never written down.
            </p>

            <p>
              I ran a global cloud governance program across the United States, Singapore, and China, and led product and engineering teams building casino technology, including digitizing the global comp process and location-based offers. What that year made unavoidable is that a customer data platform is not a marketing purchase. It is an architecture commitment with a marketing use case on top. Teams that treat it as the former spend two years discovering the latter.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              3. Forecast the return before you ask for the money
            </h2>

            <p>
              Technology organizations live inside capital planning cycles. Every project carries an expected return, a delivery milestone, and a post-implementation review. Marketing frequently does not operate this way, and then finds its budget treated as discretionary when conditions tighten.
            </p>

            <p>
              When I later became CMO at 1/ST Technology, I imported that discipline directly. Every significant investment carried a forecast return before it was approved, and the forecast was checked afterward. Over four years the board-approved marketing budget grew from $8M to $15M. It grew because the forecasts were shown to be reliable, not because marketing argued more persuasively.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              4. Unit economics travel across the divide, campaign metrics do not
            </h2>

            <p>
              A CFO and a CIO will both engage with customer acquisition cost, lifetime value, payback period, and contribution margin. Neither is moved by impressions, engagement rate, or share of voice. Those measures are useful inside a marketing team and nearly worthless outside it.
            </p>

            <p>
              Rebuilding the go-to-market model at 1/ST around unit economics rather than channel metrics produced a 56% reduction in customer acquisition cost and a 73% improvement in LTV to CAC. The underlying work was ordinary: better segmentation, a predictive customer-valuation model, and reinvestment rules with actual governance. What made it fundable was that it was expressed in numbers the rest of the executive team already used.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              What this means for CMOs and CIOs now
            </h2>

            <p>
              The AI conversation is repeating the pattern. Marketing teams are buying AI capability the way they once bought marketing automation, and technology teams are being handed the governance, data quality, and security consequences afterward. The organizations that will get value from AI are the ones where those two conversations are the same conversation, held early, with a forecast attached.
            </p>

            <p>
              For marketing leaders: learn enough about architecture, governance, and total cost to make requests that can be approved. For technology leaders: learn enough about unit economics to distinguish a marketing investment from a marketing expense. Neither side needs to become the other. Both sides need to be able to read the other&rsquo;s ledger.
            </p>

            <p>
              The crossover is rarer than it should be. It is also, in my experience, the single most useful thing I have to offer a company trying to turn customer data and AI into results a board will recognize.
            </p>

          </div>

          {/* Footer nav */}
          <div className="mt-20 pt-10 border-t border-[#0A0A0A]/10">
            <p className="text-sm text-[#64748B]">
              Zachary Leifer is a Las Vegas-based commercial growth executive who has led both marketing and corporate IT at the same Fortune 500 company. He served as CMO at 1/ST Technology and CCO at PokerAtlas.{' '}
              <a href="/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                Read the full profile
              </a>
              {' '}or{' '}
              <a href="/speaking/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                see speaking topics
              </a>.
            </p>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
