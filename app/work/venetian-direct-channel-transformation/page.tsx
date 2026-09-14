import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { OG_IMAGE } from '@/data/og-image';
import PageQuotes from '@/components/PageQuotes';

const TITLE_TAG = 'The Venetian Las Vegas Direct-Channel Case Study | Zachary Leifer';
const H1 = 'Turning digital investment into direct-channel revenue at The Venetian';
const DESC =
  'Zachary Leifer led the digital transformation that reversed a five-year direct-channel decline at The Venetian Resort Las Vegas. An executive case study.';
const URL = 'https://zacharyleifer.com/work/venetian-direct-channel-transformation/';
const PUBLISHED = '2026-09-13';
const MODIFIED = '2026-09-13';

export const metadata: Metadata = {
  title: TITLE_TAG,
  description: DESC,
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com/' }],
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    title: H1,
    description: DESC,
    url: URL,
    authors: ['Zachary Leifer'],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: H1,
    description: DESC,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
};

const PERSON = {
  '@id': 'https://zacharyleifer.com/#zachary-leifer',
  '@type': 'Person',
  name: 'Zachary Leifer',
  url: 'https://zacharyleifer.com/',
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
  about: { '@type': 'Organization', name: 'The Venetian Resort Las Vegas' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Zachary Leifer', item: 'https://zacharyleifer.com/' },
    { '@type': 'ListItem', position: 2, name: 'The Venetian case study' },
  ],
};

const h2 = 'font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4';
const link = 'text-[#3B5998] hover:text-[#0A0A0A] transition-colors';

export default function VenetianCaseStudy() {
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
            <span>The Venetian case study</span>
          </p>

          {/* Header */}
          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">Case Study</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              {H1}
            </h1>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Director to Executive Director to Vice President, Digital Marketing and eCommerce, The Venetian Resort Las Vegas (then part of Las Vegas Sands), 2014–2019; Vice President, Corporate Information Technology, Las Vegas Sands, 2019–2020. Results achieved during my executive tenure.
            </p>
            <div className="flex items-center gap-4 text-sm text-[#64748B] mt-4">
              <span>Zachary Leifer</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>September 13, 2026</time>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              Zachary Leifer held Digital Marketing and eCommerce leadership roles at The Venetian Resort Las Vegas from 2014 to 2019, progressing from Director to Executive Director to Vice President. During that period, the digital transformation he led reversed a five-year decline in direct-channel bookings and generated $36 million in incremental direct-channel revenue.
            </p>

            <h2 className={h2}>The direct-channel problem at The Venetian</h2>

            <p>
              The Venetian faced a five-year decline in direct-channel bookings. Bookings made through third-party travel sites carry commission costs, so direct-channel performance shapes margin as well as revenue. The direct channel needed to become more effective at converting demand into bookings and at supporting the relationship with the guest.
            </p>

            <p>
              The commercial opportunity sat across the digital customer experience, booking capabilities, pricing, personalization and customer data. Reversing the decline required all of them to work together to help the guest complete the transaction.
            </p>

            <p>
              That made the initiative a commercial investment decision as well as a digital program, with success measured by direct-channel performance.
            </p>

            <h2 className={h2}>The Digital Marketing and eCommerce mandate</h2>

            <p>
              My responsibilities in Digital Marketing and eCommerce included growing direct-channel revenue and improving the performance of digital acquisition and customer engagement. In those roles, I led acquisition across all paid digital channels against revenue and cost-per-acquisition targets. As Vice President, I owned a budget of more than $25 million with a mandate to grow direct-channel revenue and EBITDA for the resort.
            </p>

            <p>
              The mandate brought together acquisition, the website and booking experience, customer data, pricing and personalization. The objective was to make those capabilities work together around a commercial outcome: a more effective way to convert customer interest into direct bookings, with improvement that would last beyond the initial launch.
            </p>

            <h2 className={h2}>Securing $13 million in capital investment</h2>

            <p>
              I secured $13 million in capital investment for digital transformation initiatives that generated $36 million in incremental direct-channel revenue. The program included a new website and booking engine, with customer-data and personalization capabilities supporting the broader commercial effort.
            </p>

            <p>
              The leadership significance was the connection between the investment and the business problem. A declining direct channel provided a clear commercial reason to act, and the platform and experience changes were the means of addressing it.
            </p>

            <h2 className={h2}>Website, booking engine, customer data and pricing</h2>

            <p>
              I directed the redesign of the website and booking engine, which received a 2015 Gold Adrian Award for Brand Site Improvements from HSMAI, the Hospitality Sales and Marketing Association International.
            </p>

            <p>
              I also led the marketing technology and customer data platform work, designed to provide a 360-degree view of the guest and support personalization across hotel and casino. That connected the acquisition and conversion experience with the data required for more relevant engagement. On pricing, I led the design of a price-elasticity model to inform pricing and offers against local competition.
            </p>

            <p>
              I built internal product and development teams that reduced reliance on external agencies and delivered the digital program alongside external partners. I served on both brand steering committees and led digital execution for The Venetian brand relaunch and the Grazie loyalty rebrand.
            </p>

            <p>
              These changes crossed conventional functional boundaries. Customer acquisition, pricing, technology and the guest experience all affected the result. My subsequent recruitment as Vice President, Corporate Information Technology at Las Vegas Sands, then a Fortune 500 company and The Venetian&rsquo;s parent, extended that perspective into global cloud governance across the U.S., Singapore and China. I wrote about that move in{' '}
              <a href="/blog/marketing-to-corporate-it/" className={link}>
                What Running Corporate IT Taught Me About Running Marketing
              </a>.
            </p>

            <h2 className={h2}>Results: $36 million in incremental direct-channel revenue</h2>

            <p>
              The digital transformation initiatives generated $36 million in incremental direct-channel revenue and reversed the five-year decline. Performance included 24 consecutive months of year-over-year growth, a 50% increase in return on advertising spend and an 18% lift in CRM conversion.
            </p>

            <p>
              The results reflect the overall commercial and digital program rather than any single component. My contribution was aligning the website, pricing, customer data and personalization around one business problem and leading execution across the functions involved.
            </p>

            <h2 className={h2}>Leadership lessons for technology and AI investment</h2>

            <p>
              The first lesson is to define transformation by the business performance that needs to change. A website can launch successfully while the commercial problem remains unresolved, so the investment case must extend beyond delivery milestones.
            </p>

            <p>
              The second is to connect customer experience with economics. Acquisition, conversion, pricing and retention are related decisions. Data and technology become useful when they improve those decisions and the experience through which customers act on them.
            </p>

            <p>
              The third is to build internal capability alongside the platform. When the business owns the skills behind its digital program, improvement can continue well beyond the initial launch.
            </p>

            <p>
              The same governance principles that shaped this digital transformation apply to AI investment: define the commercial outcome first, establish accountable ownership and the organizational conditions for execution, and measure the result the business intended to create. I explain how I apply that discipline on the{' '}
              <a href="/board-executive-advisory/" className={link}>
                board and executive advisory page
              </a>.
            </p>

          </div>

          <PageQuotes
            heading="What Venetian colleagues say"
            quotes={[
              {
                quote:
                  "Whether it was through innovative social media strategies, data-informed optimization of performance marketing efforts, adopting the latest technologies and tools into our portfolio to increase LTV and reduce CAC, cutting-edge CRM programming to increase customer loyalty, or sophisticated SEO tactics, he always found ways to enhance our reach and impact.",
                name: 'Shivdev Menon',
                title: 'Director of Technology, eComm · The Venetian Resort Las Vegas',
                context: "Worked on Zachary's team at The Venetian",
              },
              {
                quote:
                  "Through passion and creativity, he has rapidly transformed Digital Marketing at LVS. While the results and records speak for themselves, it is the inspirational leadership with which he has elevated both his team and colleagues that is most impressive. He raises the bar and makes everyone around him better through his forward-thinking ideas, cross-functional collaboration, and unmatched work ethic.",
                name: 'Yacob Girma',
                title: 'Advisor · The Alpha 1 Collaborative',
                context: 'Colleague at The Venetian',
              },
            ]}
          />

          {/* Related work */}
          <div className="mt-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">Related</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/work/1st-technology-commercial-growth/" className={link}>
                  Read the 1/ST Technology case study
                </a>
              </li>
              <li>
                <a href="/board-executive-advisory/" className={link}>
                  Board &amp; Executive Advisory
                </a>
              </li>
              <li>
                <a href="/blog/marketing-to-corporate-it/" className={link}>
                  What Running Corporate IT Taught Me About Running Marketing
                </a>
              </li>
              <li>
                <a href="/#work" className={link}>
                  Back to Selected Work
                </a>
              </li>
            </ul>
          </div>

          {/* Author bio */}
          <div className="mt-20 pt-10 border-t border-[#0A0A0A]/10">
            <p className="text-sm text-[#64748B]">
              Zachary Leifer is a Las Vegas-based commercial growth and transformation executive who has served as Chief Marketing Officer at 1/ST Technology, Chief Commercial Officer at PokerAtlas and Vice President, Corporate Information Technology at Las Vegas Sands. He helps companies create more predictable value from data, digital transformation, technology and AI.{' '}
              <a href="/" className={link}>
                Read the full profile
              </a>
              {' '}or{' '}
              <a href="/speaking/" className={link}>
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
