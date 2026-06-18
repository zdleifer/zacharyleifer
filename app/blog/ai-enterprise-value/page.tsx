import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Is Already in Your Company. Is It Creating Enterprise Value? Is It Secure? | Zachary Leifer',
  description:
    'Most companies have AI adoption happening organically, in scattered pockets, disconnected from the workflows that drive growth. Here is how to move from experimentation to measurable enterprise value.',
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com' }],
  alternates: { canonical: 'https://zacharyleifer.com/blog/ai-enterprise-value' },
  openGraph: {
    type: 'article',
    title: 'AI Is Already in Your Company. Is It Creating Enterprise Value? Is It Secure?',
    description:
      'Most companies have AI adoption happening organically, in scattered pockets. Here is how to move from experimentation to measurable enterprise value.',
    url: 'https://zacharyleifer.com/blog/ai-enterprise-value',
    authors: ['Zachary Leifer'],
    publishedTime: '2026-05-05',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Is Already in Your Company. Is It Creating Enterprise Value? Is It Secure?',
  author: {
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
  datePublished: '2026-05-05',
  url: 'https://zacharyleifer.com/blog/ai-enterprise-value',
  description:
    'Most companies have AI adoption happening organically, in scattered pockets, disconnected from the workflows that drive growth. Here is how to move from experimentation to measurable enterprise value.',
  publisher: {
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
};

export default function AIEnterpriseValueArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              AI Is Already in Your Company. Is It Creating Enterprise Value? Is It Secure?
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
              <span>Zachary Leifer</span>
              <span>·</span>
              <time dateTime="2026-05-05">May 5, 2026</time>
              <span>·</span>
              <a
                href="https://www.linkedin.com/pulse/ai-already-your-company-creating-enterprise-value-secure-leifer-3q0ve"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A0A0A] transition-colors"
              >
                Originally published on LinkedIn →
              </a>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              Your employees are already using AI. The question is not whether AI is in your company — it is whether it is creating enterprise value or creating risk, and whether you are managing either one deliberately.
            </p>

            <p>
              In most organizations, AI adoption is happening organically, in scattered pockets, largely invisible to leadership. Someone in marketing is using it to draft copy. The sales team is running prompts to prep for calls. A junior analyst is summarizing competitive reports in thirty seconds instead of three hours. The productivity gains are real. But the activity is fragmented, ungoverned, and disconnected from the workflows and data that actually drive the business.
            </p>

            <p>
              That gap — between scattered AI use and systematic AI capability — is where most organizations are stuck. And it creates two problems simultaneously: risk exposure on the left, and lost value on the right.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              The Two Problems Happening at Once
            </h2>

            <p>
              On the risk side, employees using AI tools — even well-intentioned ones — may be sending sensitive data into systems that your IT and security teams have not approved, audited, or contracted. Customer data, financial projections, personnel decisions, legal analysis. The exposure is often invisible until it becomes a problem.
            </p>

            <p>
              On the value side, individual productivity gains are real, but they are not enterprise transformation. An employee who drafts emails faster is more productive. An organization that has connected AI to its core commercial workflows — acquisition, retention, pricing, customer value modeling — has built a capability advantage. Those are different things, and confusing one for the other is how companies end up with AI initiatives that look active but do not move the business.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Using AI vs. Building AI Capability
            </h2>

            <p>
              There is a distinction most leadership teams have not made clearly enough: using AI tools is not the same as building organizational AI capability.
            </p>

            <p>
              Using AI means individuals are more productive. Building AI capability means the organization makes better decisions — faster, more consistently, and with better information — because AI is embedded in the processes and systems that drive outcomes.
            </p>

            <p>
              Real AI maturity is measured by whether AI is helping the organization make better decisions: better acquisition decisions, better retention investments, better pricing, better resource allocation. The benchmark is outcomes, not activity.
            </p>

            <p>
              Most organizations are measuring the wrong thing. They track how many employees have AI tool licenses, or how many prompts are being run, or how many hours are theoretically saved. None of those metrics connect AI to P&amp;L. None of them prove enterprise value.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Why Companies Stay Stalled
            </h2>

            <p>
              The reason most companies cannot move from AI experimentation to AI-as-a-capability is not a technology problem. It is a leadership and organizational problem.
            </p>

            <p>
              AI operates at the organizational periphery, not integrated into the core operations that drive growth. The core operations — customer acquisition, retention, pricing, product development — run on systems, processes, and data that were built before AI existed. Connecting AI to those systems requires cross-functional alignment, data infrastructure investment, and governance decisions that individual teams cannot make on their own.
            </p>

            <p>
              Leadership teams often find themselves balancing competing pressures: move fast enough to capture advantage, but do not move so fast that you create security, legal, or reputational exposure. That tension, without a framework for navigating it, produces paralysis. Teams keep experimenting. Nothing gets scaled. The ROI stays theoretical.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              A Framework for Moving Forward
            </h2>

            <p>There is a sequence that works. It is not complicated, but it requires discipline:</p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Start with business process mapping, not tool selection.</strong> Before you buy another AI platform, map the processes that drive your most important commercial outcomes. Where are the decisions? Where is the data? Where is the judgment? That map tells you where AI can create real leverage — not where it can create interesting demos.
              </li>
              <li>
                <strong>Involve legal, security, and compliance at the beginning, not the end.</strong> The fastest path to scaling AI is having governance in place before you need to retrofit it. Risk-based segmentation — determining which use cases require tight controls and which can move freely — is what lets you go fast where it is safe and careful where it matters.
              </li>
              <li>
                <strong>Connect AI to your operating model redesign, not just your tool stack.</strong> AI should change how decisions get made, not just how tasks get done. That means redesigning the workflows, the accountability structures, and the measurement systems — not just approving a new vendor.
              </li>
              <li>
                <strong>Measure outcomes, not activity.</strong> The right metrics are the business outcomes AI is meant to improve: customer acquisition cost, retention rates, conversion, revenue per customer. If your AI initiative cannot point to movement in those numbers, it is not yet creating enterprise value.
              </li>
            </ol>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              The Leadership Imperative
            </h2>

            <p>
              None of this happens without executive alignment. Not just authorization — active, informed alignment on what AI is for, what it is not for, how success will be measured, and how governance will work.
            </p>

            <p>
              The companies that are building real AI capability in 2026 are not the ones with the most tools or the most experiments. They are the ones where leadership has made the strategic decisions: which processes to transform first, how to govern data and security, what outcomes to drive, and how to manage the organizational change that comes with it.
            </p>

            <p>
              AI is already in your company. The question is whether it is working for you, or whether it is just working — scattered, ungoverned, and disconnected from the growth agenda.
            </p>

            <p>
              That is a leadership decision. And the window to make it deliberately is shorter than most organizations think.
            </p>

          </div>

          {/* Footer CTA */}
          <div className="mt-20 pt-12 border-t border-[#E2E8F0]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">About the Author</p>
            <p className="text-[#475569] text-sm leading-relaxed max-w-xl mb-6">
              Zachary Leifer is a Las Vegas-based commercial growth executive, former CMO, CCO, and GM with experience across gaming, hospitality, AI, and digital transformation. He is open to board, advisory, and senior operating roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/"
                className="text-xs tracking-[0.2em] uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
              >
                ← Full Profile
              </a>
              <a
                href="https://linkedin.com/in/zacharyleifer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
