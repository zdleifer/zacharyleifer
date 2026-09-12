import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zachary Leifer | AI & Growth Speaker | Las Vegas',
  description:
    'Zachary Leifer speaks on AI strategy, customer data, commercial growth, and digital transformation. Former CMO at 1/ST Technology, VP at Las Vegas Sands. Harvard Business School AMP. Based in Las Vegas, NV.',
  alternates: { canonical: 'https://zacharyleifer.com/speaking' },
  openGraph: {
    type: 'website',
    title: 'Zachary Leifer | AI & Growth Speaker | Las Vegas',
    description:
      'Zachary Leifer speaks on AI strategy, customer data, commercial growth, and digital transformation. Former CMO at 1/ST Technology, VP at Las Vegas Sands. Harvard Business School. Based in Las Vegas, NV.',
    url: 'https://zacharyleifer.com/speaking',
    images: [
      {
        url: 'https://zacharyleifer.com/images/headshot.png',
        width: 1200,
        height: 630,
        alt: 'Zachary Leifer, Speaker on AI Strategy and Commercial Growth, Las Vegas NV',
      },
    ],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Zachary Leifer — Speaker',
  url: 'https://zacharyleifer.com/speaking',
  description:
    'Zachary Leifer speaks on AI strategy, customer data, commercial growth, and digital transformation. Based in Las Vegas, NV.',
  mainEntity: {
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
    knowsAbout: [
      'AI Strategy',
      'AI Governance',
      'Customer Data Platforms',
      'Commercial Growth',
      'Revenue Strategy',
      'Digital Transformation',
      'Gaming Industry',
      'Hospitality',
      'Marketing Operating Models',
      'Marketing Technology',
      'Enterprise Technology Leadership',
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What topics does Zachary Leifer speak on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zachary Leifer speaks on AI strategy and governance, customer data and CDP strategy, commercial growth and revenue operating models, digital transformation, marketing technology, and the intersection of marketing and enterprise IT leadership. His talks draw on direct operating experience in gaming, hospitality, wagering, and eCommerce.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Zachary Leifer available for keynote speaking engagements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Zachary Leifer is available for keynotes, executive panels, leadership roundtables, board sessions, workshops, and podcasts. He is based in Las Vegas, Nevada, and available nationally and internationally.',
      },
    },
    {
      '@type': 'Question',
      name: "What makes Zachary Leifer's speaking perspective unique?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zachary Leifer is one of the few executives who has led both CMO and CIO functions at the same Fortune 500 company. His talks are grounded in real P&L results — not frameworks — including 67% revenue growth at 1/ST Technology and $36M in direct revenue at Las Vegas Sands / The Venetian.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Zachary Leifer speak to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zachary Leifer speaks to audiences in gaming, hospitality, sports wagering, iGaming, eCommerce, luxury retail, financial services, private equity, and any industry where AI strategy, customer data, and commercial growth are on the agenda.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I book Zachary Leifer to speak at my event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To inquire about booking Zachary Leifer for your conference, executive event, podcast, or panel, email zacharyleifer@gmail.com. Please include your event date, format, audience, and session topic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Has Zachary Leifer spoken at industry conferences before?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Past appearances include a presentation for the World Tote Association on digital transformation, the NC Labs podcast (Awesome in Action, 2021), Harvard Business School Advanced Management Program events in 2026, and executive forums in gaming, hospitality, and marketing technology.',
      },
    },
  ],
};

const talks = [
  {
    number: '01',
    category: 'AI Strategy & Commercial Value',
    title: 'AI Is Not a Strategy: The Operating Model Leaders Need Before They Scale It',
    abstract:
      'Most organizations are investing in AI faster than they are building the governance, workflows, customer-data foundations, and accountability required to create value. This session gives executives a practical framework for deciding where AI belongs, how to prevent disconnected experimentation, and how to connect investments to customer experience, productivity, revenue, and measurable risk reduction.',
    bestFor: ['CEOs', 'CMOs', 'CIOs', 'Boards', 'Transformation leaders', 'PE portfolio companies'],
  },
  {
    number: '02',
    category: 'Customer Data & Growth',
    title: 'From Customer Data to Commercial Value: Why Most Personalization Programs Fail to Deliver',
    abstract:
      'Companies invest heavily in CDPs, CRM, loyalty, analytics, and personalization — but many fail to change actual customer economics. Drawing on CDP deployments in hospitality, wagering, and eCommerce, this session explains how to move from data collection to actionable insight, better acquisition and retention decisions, stronger LTV, and revenue growth you can prove to a board.',
    bestFor: ['Marketers', 'Hospitality leaders', 'Gaming executives', 'Loyalty professionals', 'Customer experience leaders'],
  },
  {
    number: '03',
    category: 'The CMO–CIO–CFO Triangle',
    title: 'The Growth Operating System: How Marketing, Technology, and Finance Must Work Together',
    abstract:
      'The biggest growth constraint is rarely the marketing plan or technology stack. It is the disconnect between commercial strategy, technology investment, financial discipline, and execution. This session offers a practical model for aligning marketing, IT, finance, data, and operations around shared outcomes — built from six years spanning VP Marketing and VP Corporate IT at the same Fortune 500 company.',
    bestFor: ['Executive teams', 'Leadership offsites', 'Boards', 'Transformation programs', 'Technology and marketing conferences'],
  },
  {
    number: '04',
    category: 'Gaming & Hospitality',
    title: 'What Hospitality and Gaming Can Teach Every Business About Loyalty, Data, and Customer Experience',
    abstract:
      'The hospitality and gaming industries pioneered customer data strategy, loyalty architecture, and personalization at scale. This session translates those hard-won lessons — including real examples from Las Vegas Sands, 1/ST Technology, and PokerAtlas — into a framework any industry can apply to improve customer acquisition, retention, and lifetime value.',
    bestFor: ['Hospitality and gaming events', 'Loyalty conferences', 'Marketing technology summits', 'Cross-industry executive forums'],
  },
  {
    number: '05',
    category: 'Marketing Operating Model',
    title: 'Why the MarTech Stack Is Not the Answer: Building a Marketing Operating System That Produces Results',
    abstract:
      'Most marketing organizations invest in tools without building the operating model — the data architecture, accountability framework, measurement system, and team structure — required to use them. This session explains what a marketing operating system looks like, how to build one, and how to prove the return to finance and the board.',
    bestFor: ['CMOs', 'Marketing leaders', 'MarTech conferences', 'CIO/CMO joint sessions', 'CFO-facing marketing discussions'],
  },
];

const faqs = [
  {
    q: 'What topics does Zachary Leifer speak on?',
    a: 'Zachary Leifer speaks on AI strategy and governance, customer data and CDP strategy, commercial growth and revenue operating models, digital transformation, marketing technology, and the intersection of marketing and enterprise IT leadership. His talks draw on direct operating experience in gaming, hospitality, wagering, and eCommerce.',
  },
  {
    q: 'Is Zachary Leifer available for keynote speaking engagements?',
    a: 'Yes. Zachary Leifer is available for keynotes, executive panels, leadership roundtables, board sessions, workshops, and podcasts. He is based in Las Vegas, Nevada, and available nationally and internationally.',
  },
  {
    q: "What makes Zachary Leifer's speaking perspective unique?",
    a: 'Zachary Leifer is one of the few executives who has led both CMO and CIO functions at the same Fortune 500 company. His talks are grounded in real P&L results — not frameworks — including 67% revenue growth at 1/ST Technology and $36M in direct revenue at Las Vegas Sands / The Venetian.',
  },
  {
    q: 'What industries does Zachary Leifer speak to?',
    a: 'Zachary Leifer speaks to audiences in gaming, hospitality, sports wagering, iGaming, eCommerce, luxury retail, financial services, private equity, and any industry where AI strategy, customer data, and commercial growth are on the agenda.',
  },
  {
    q: 'How can I book Zachary Leifer to speak at my event?',
    a: 'To inquire about booking Zachary Leifer for your conference, executive event, podcast, or panel, email zacharyleifer@gmail.com. Please include your event date, format, audience, and session topic.',
  },
  {
    q: 'Has Zachary Leifer spoken at industry conferences before?',
    a: 'Yes. Past appearances include a presentation for the World Tote Association on digital transformation, the NC Labs podcast (Awesome in Action, 2021), Harvard Business School AMP events in 2026, and executive forums in gaming, hospitality, and marketing technology.',
  },
];

const appearances = [
  { event: 'World Tote Association', topic: 'Digital Transformation in the Age of the Customer', year: '2024' },
  { event: 'NC Labs Podcast', topic: 'Awesome in Action', year: '2021' },
  { event: 'Harvard Business School', topic: 'Advanced Management Program — AI & Enterprise Value Capstone', year: '2026' },
];

export default function SpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />

      <main>

        {/* ── HERO ── */}
        <section className="grain relative bg-[#070B14] pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 px-8 md:px-12 overflow-hidden">
          <div
            className="orb w-[500px] h-[500px] top-[-80px] right-[-80px] opacity-15"
            style={{ background: 'radial-gradient(circle, #3B5998 0%, #1E3A5F 50%, transparent 70%)' }}
          />

          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
              <a href="/" className="hover:text-white/60 transition-colors">Zachary Leifer</a>
              <span className="mx-2">·</span>
              Speaking
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#3B5998] mb-6">Speaking</p>
                <h1 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-tight mb-8">
                  Zachary Leifer speaks on AI strategy, customer data, commercial growth, and the operating models that connect technology investment to measurable business results.
                </h1>
                <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-10">
                  Available for keynotes, executive panels, leadership roundtables, board sessions, workshops, virtual events, and podcasts. Based in Las Vegas, Nevada. Available for travel nationally and internationally.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/in/zacharyleifer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                  >
                    Message on LinkedIn →
                  </a>
                  <a
                    href="#talks"
                    className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
                  >
                    View Talks →
                  </a>
                </div>
                <p className="text-white/30 text-xs mt-5">
                  Or email directly: <span className="text-white/50 select-all">zacharyleifer@gmail.com</span>
                </p>
              </div>

              <div className="hidden lg:block lg:col-span-4">
                <div className="border border-white/10 p-8 space-y-6">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569]">Format</p>
                  <ul className="space-y-2 text-white/60 text-sm">
                    {['Keynote', 'Executive Panel', 'Leadership Roundtable', 'Board Session', 'Workshop', 'Virtual Event', 'Podcast'].map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#3B5998] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-2">Location</p>
                    <p className="text-white/60 text-sm">Las Vegas, NV · National · International</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BIO ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] lg:sticky top-24">
                  About the Speaker
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A] mb-8">
                  A practitioner, not a presenter.
                </h2>
                <p className="text-[#334155] text-base leading-[1.9] mb-6">
                  Zachary Leifer is one of the few executives who has led both commercial and enterprise technology functions at the same organizations — a crossover that shapes how he thinks about AI, data, and growth. At Las Vegas Sands and The Venetian, he led digital marketing and eCommerce before being recruited into VP of Corporate IT, generating $36M in direct revenue from a $13M investment.
                </p>
                <p className="text-[#334155] text-base leading-[1.9] mb-10">
                  As CMO at 1/ST Technology, he drove 67% revenue growth, reduced customer acquisition cost by 56%, and improved LTV/CAC by 73% by building a cloud CDP and predictive customer-valuation model. He recently completed the Advanced Management Program at Harvard Business School. His sessions give executives a practical, P&amp;L-grounded framework for connecting AI, customer data, marketing, and technology to commercial outcomes — without disconnected pilots or activity for its own sake.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#E2E8F0]">
                  {[
                    { stat: '67%', label: 'Revenue growth, 1/ST Technology' },
                    { stat: '$36M', label: 'Direct revenue, The Venetian' },
                    { stat: '56%', label: 'CAC reduction via CDP' },
                    { stat: 'HBS', label: 'Advanced Management Program · 2026' },
                  ].map((item) => (
                    <div key={item.stat}>
                      <p className="font-display text-3xl font-bold text-[#0A0A0A] mb-1">{item.stat}</p>
                      <p className="text-[#64748B] text-xs leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TALKS ── */}
        <section id="talks" className="grain bg-[#070B14] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
                  Signature Talks
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white">
                  Five talks built from operating experience.
                </h2>
                <p className="text-white/50 text-sm mt-3 max-w-xl">
                  Every session draws on real results, real trade-offs, and real organizational challenges. No frameworks invented for the stage.
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {talks.map((talk) => (
                <div key={talk.number} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4">
                  <div className="lg:col-span-3">
                    <p className="font-display text-5xl font-bold text-white/10 leading-none">{talk.number}</p>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mt-3">{talk.category}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-xl font-semibold text-white leading-snug mb-4">
                      {talk.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-6">{talk.abstract}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] tracking-[0.25em] uppercase text-[#475569] mr-1 self-center">Best for:</span>
                      {talk.bestFor.map((a) => (
                        <span
                          key={a}
                          className="text-[10px] border border-white/15 text-white/50 px-3 py-1 rounded-sm"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 text-center">
              <p className="text-white/40 text-sm mb-4">All talks are customizable for your audience, format, and duration.</p>
              <a
                href="https://linkedin.com/in/zacharyleifer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </section>

        {/* ── PAST APPEARANCES ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] lg:sticky top-24">
                  Past Appearances
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A] mb-10">
                  Selected engagements.
                </h2>
                <div className="divide-y divide-[#E2E8F0]">
                  {appearances.map((a) => (
                    <div key={a.event} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1">
                      <div className="sm:col-span-3">
                        <p className="text-xs text-[#64748B]">{a.year}</p>
                      </div>
                      <div className="sm:col-span-5">
                        <p className="font-semibold text-[#0A0A0A] text-sm">{a.event}</p>
                      </div>
                      <div className="sm:col-span-4">
                        <p className="text-[#475569] text-sm">{a.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[#64748B] text-xs mt-8 italic">
                  Additional gaming, hospitality, and marketing technology conference appearances added as scheduled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] lg:sticky top-24">
                  Speaking FAQ
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A]">
                  Common Questions
                </h2>
                <p className="text-[#64748B] text-sm mt-3 max-w-lg">
                  Questions event organizers and conference programmers typically ask.
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {faqs.map((faq, i) => (
                <div key={i} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-3">
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-lg font-semibold text-[#0A0A0A] leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section className="bg-[#060606] border-t border-white/10 py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-6">Book Zachary to Speak</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-6">
                  Bring a real operating perspective to your next event.
                </h2>
                <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                  To inquire about speaking availability, share your event date, format, expected audience, and the session topic or challenge you want addressed. Custom abstracts and speaker materials available on request.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <a
                  href="https://linkedin.com/in/zacharyleifer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-10 py-5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                >
                  Message on LinkedIn →
                </a>
                <p className="text-white/30 text-xs mt-4">
                  or email: <span className="text-white/50 select-all">zacharyleifer@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
