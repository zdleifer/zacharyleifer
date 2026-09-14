import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { OG_IMAGE } from '@/data/og-image';
import PageQuotes from '@/components/PageQuotes';

const TITLE_TAG = '1/ST Technology Commercial Growth Case Study | Zachary Leifer';
const OG_TITLE = '1/ST Technology Commercial Growth Case Study';
const H1 = 'Connecting marketing investment to commercial growth at 1/ST Technology';
const DESC =
  'How Zachary Leifer connected marketing investment, customer data and commercial execution at 1/ST Technology as Chief Marketing Officer, 2020–2024.';
const URL = 'https://zacharyleifer.com/work/1st-technology-commercial-growth/';
const PUBLISHED = '2026-09-13';
const MODIFIED = '2026-09-13';

const PERSON = {
  '@id': 'https://zacharyleifer.com/#zachary-leifer',
  '@type': 'Person',
  name: 'Zachary Leifer',
  url: 'https://zacharyleifer.com/',
};

export const metadata: Metadata = {
  title: TITLE_TAG,
  description: DESC,
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com/' }],
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    title: OG_TITLE,
    description: DESC,
    url: URL,
    authors: ['Zachary Leifer'],
    publishedTime: PUBLISHED,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: DESC,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: H1,
  description: DESC,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  isPartOf: { '@id': 'https://zacharyleifer.com/#website' },
  author: PERSON,
  publisher: PERSON,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  image: ['https://zacharyleifer.com/images/og-card.jpg'],
  about: { '@type': 'Organization', name: '1/ST Technology' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Zachary Leifer', item: 'https://zacharyleifer.com/' },
    { '@type': 'ListItem', position: 2, name: '1/ST Technology case study' },
  ],
};

const linkClass = 'text-[#3B5998] hover:text-[#0A0A0A] transition-colors';
const navLinkClass =
  'text-xs tracking-[0.2em] uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5';

export default function FirstTechnologyCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          {/* Breadcrumb */}
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span className="mx-2">·</span>
            <span>1/ST Technology case study</span>
          </p>

          {/* Header */}
          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">Case Study</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              {H1}
            </h1>
            <p className="text-sm text-[#475569] leading-relaxed mb-4">
              Chief Marketing Officer, 1/ST Technology, 2020–2024. Results achieved during my executive tenure.
            </p>
            <div className="flex items-center gap-4 text-sm text-[#64748B]">
              <span>Zachary Leifer</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>September 13, 2026</time>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              Zachary Leifer served as Chief Marketing Officer of 1/ST Technology from 2020 to 2024, a period in which the company delivered 67% revenue growth and a 22% EBITDA CAGR. He led marketing across the company&rsquo;s B2B and B2C technology and wagering brands, secured an increase in the board-approved marketing budget from $8 million to $15 million, and led the customer data and predictive customer-valuation work that supported attribution, segmentation and reinvestment decisions. Over the same four years, customer acquisition cost fell 56% and LTV/CAC improved 73%.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              The business problem at 1/ST Technology
            </h2>

            <p>
              During my tenure, 1/ST Technology, a business with approximately $1.5 billion in revenue, spanned B2B and B2C technology and wagering brands such as AmTote, Xpressbet, 1/ST BET and PariMAX, supporting venues and events including Santa Anita Park, Gulfstream Park and, at the time, the Preakness Stakes.
            </p>

            <p>
              The commercial challenge went beyond generating more leads or buying more media. Marketing had to support an established technology portfolio, strengthen customer acquisition and retention, and bring a new wagering product to market, while showing a credible relationship between investment and business performance.
            </p>

            <p>
              That required a view of customers and spending that reached past campaign activity. The opportunity was to connect customer data, acquisition decisions and reinvestment to the economics of the business, and to build an organization able to execute across different brands and customer groups.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              My mandate as Chief Marketing Officer
            </h2>

            <p>
              As Chief Marketing Officer, I led marketing across the B2B and B2C brands. My mandate included restructuring and scaling the team, leading data-centric marketing and launching a consumer wagering application.
            </p>

            <p>
              The work combined commercial strategy with operating execution: customer acquisition and retention, product go-to-market, agency management and the use of customer data to improve decisions. It also covered high-value customers, including growth and reinvestment strategy for XB SELECT, the VIP wagering service.
            </p>

            <p>
              The objective was a marketing organization that contributed to growth and made the economics of its decisions visible, with better acquisition, stronger customer value and a sounder basis for allocating investment.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Securing the $8 million to $15 million budget increase
            </h2>

            <p>
              I secured an increase in the board-approved marketing budget from $8 million to $15 million through direct board-level briefings and ROI forecasting. The case presented marketing investment as a business decision with a forecast return, not a departmental budget request.
            </p>

            <p>
              The leadership question was how to fund growth while holding discipline around the return expected from each investment. Every significant investment carried a forecast return before it was approved, and forecasting provided a framework for making the case, discussing assumptions and connecting proposed spending to business outcomes.
            </p>

            <p>
              That discipline drew on enterprise technology experience. Before joining 1/ST Technology, I served as Vice President, Corporate Information Technology at Las Vegas Sands, where I set capital-project, ROI and delivery governance standards for property marketing-technology teams worldwide. I describe that experience in{' '}
              <a href="/blog/marketing-to-corporate-it/" className={linkClass}>
                What Running Corporate IT Taught Me About Running Marketing
              </a>.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Customer data and predictive customer valuation
            </h2>

            <p>
              I led work on a cloud customer data platform and a predictive customer-valuation model to improve attribution, segmentation and customer reinvestment decisions.
            </p>

            <p>
              The customer-valuation work supported a more selective approach to acquisition and engagement, with greater attention to high-intent customers and their expected value. Technology mattered because it helped the business make and act on those decisions, and its contribution cannot be separated from the strategy, operating processes and people using it.
            </p>

            <p>
              This was the second enterprise customer data program I had led. The first, at The Venetian Resort Las Vegas, is covered in{' '}
              <a href="/work/venetian-direct-channel-transformation/" className={linkClass}>
                The Venetian direct-channel case study
              </a>.
            </p>

            <p>
              I also directed agency selection for creative, content and performance work, including RFPs, statement-of-work design and KPI and quarterly business review governance, and led the go-to-market effort for the new wagering product. These were connected parts of one commercial mandate.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Results at 1/ST Technology, 2020–2024
            </h2>

            <p>
              Over four years, 1/ST Technology delivered 67% revenue growth and a 22% EBITDA CAGR. Customer acquisition cost declined 56% and LTV/CAC improved 73%. Marketing costs declined 2.7% through a restructured promotional strategy.
            </p>

            <p>
              The new wagering product generated $60 million in handle (total amount wagered) and $4 million in net gaming revenue within 10 months.
            </p>

            <p>
              Revenue and EBITDA growth reflect the work of the broader organization; the reduction in customer acquisition cost and the gain in LTV/CAC relate more directly to the marketing and data changes within my scope.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Leadership lessons for AI investment
            </h2>

            <p>
              The first lesson is to connect data investment to a commercial decision. A customer data platform becomes valuable when it changes whom the business acquires, how it retains customers and where it reinvests.
            </p>

            <p>
              The second is that investment discipline and growth ambition belong together. A stronger business case can support additional resources while requiring greater accountability for how those resources are used.
            </p>

            <p>
              The third is that commercial transformation depends on coordination across teams, partners and technology. The governance principles that shaped data, digital transformation and enterprise technology investments apply equally to AI. The questions remain the same: which decision will improve, who will act on it and how the business will measure the result. The tools change; the need for commercial accountability does not.
            </p>

            <p>
              Those questions shape my{' '}
              <a href="/board-executive-advisory/" className={linkClass}>
                board-facing and executive advisory perspective
              </a>{' '}
              on AI Strategy, AI Investment Governance and AI Value Realization.
            </p>

          </div>

          <PageQuotes
            heading="What 1/ST Technology colleagues say"
            quotes={[
              {
                quote:
                  "He built a great team at 1/ST and allowed us to move our revenue and profits considerably over the last 4 years. I would recommend Zach to anyone in need of acquisition and retention marketing, and anyone who needs a creative marketing approach to existing business challenges.",
                name: 'Paul Williams',
                title: 'Global CIO | CTO | Digital CEO',
                context: 'Direct manager at 1/ST Technology',
              },
              {
                quote:
                  "His emphasis on data and smart decision making is something I carry with me always. He allowed me to grow within my role and empowered me with authority and autonomy and was always willing to listen and lend a hand.",
                name: 'Jeremy Kins',
                title: 'Growth Marketing Manager · Pest Share',
                context: 'Reported to Zachary at 1/ST Technology',
              },
            ]}
          />

          {/* Related navigation */}
          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-4">
            <a href="/#work" className={navLinkClass}>
              ← Back to Selected Work
            </a>
            <a href="/work/venetian-direct-channel-transformation/" className={navLinkClass}>
              The Venetian case study →
            </a>
            <a href="/board-executive-advisory/" className={navLinkClass}>
              Board &amp; Executive Advisory →
            </a>
          </div>

          {/* Author bio */}
          <div className="mt-16 pt-10 border-t border-[#0A0A0A]/10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">About the Author</p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Zachary Leifer is a Las Vegas-based commercial growth and transformation executive who helps companies create more predictable value from data, digital transformation, technology and AI. He has served as Chief Marketing Officer at 1/ST Technology, Chief Commercial Officer at PokerAtlas and Vice President, Corporate Information Technology at Las Vegas Sands.{' '}
              <a href="/" className={linkClass}>
                Read the full profile
              </a>
              {' '}or{' '}
              <a href="/speaking/" className={linkClass}>
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
