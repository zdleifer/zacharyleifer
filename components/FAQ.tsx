'use client';

import { useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What industries does Zachary Leifer specialize in?',
    a: 'Zachary Leifer specializes in integrated resorts and gaming, hospitality, sports wagering and horse racing, iGaming, eCommerce, luxury retail, and sports media. He has held CMO and VP roles at Las Vegas Sands, 1/ST Technology, PokerAtlas, and MLB Advanced Media, spanning Fortune 500 enterprise and high-growth platforms.',
  },
  {
    q: 'What results did Zachary Leifer achieve at 1/ST Technology?',
    a: 'As CMO at 1/ST Technology from 2020 to 2024, Zachary Leifer drove 67% revenue growth and a 22% EBITDA CAGR, reduced customer acquisition cost by 56%, and improved LTV/CAC by 73%. A wagering app he launched generated $60M in handle and $4M in net gaming revenue within 10 months.',
  },
  {
    q: 'Is Zachary Leifer available for board or advisory roles?',
    a: 'Yes. Zachary Leifer is actively open to board director, advisory, and senior operating roles. He brings particular value in growth strategy, AI enablement, marketing operating models, and digital transformation, with credentialed experience across Fortune 500 hospitality, gaming technology, and consumer platforms.',
  },
  {
    q: 'What is Zachary Leifer\'s approach to AI and digital transformation?',
    a: 'Zachary Leifer treats AI as a commercial operating tool, not a technology project. His focus is building data infrastructure, CDP architecture, and measurement systems that make AI actionable for revenue growth and customer retention. His Harvard Business School AMP capstone focused on enterprise value from data and AI.',
  },
  {
    q: 'What is Zachary Leifer\'s background in gaming and hospitality?',
    a: 'Zachary Leifer spent six years at Las Vegas Sands/The Venetian as VP Digital Marketing and VP Corporate IT, generating $36M in direct revenue from a $13M investment. He also served as CMO at 1/ST Technology (horse racing and wagering) and CCO at PokerAtlas, a global gaming platform.',
  },
  {
    q: 'What marketing technology and CDP experience does Zachary Leifer have?',
    a: 'Zachary Leifer has built two enterprise customer data platforms from the ground up — at Las Vegas Sands/The Venetian and at 1/ST Technology — delivering predictive customer-valuation models, personalization, and attribution. His CDP work at 1/ST reduced CAC by 56% and improved LTV/CAC by 73%.',
  },
  {
    q: 'What is Zachary Leifer\'s educational background?',
    a: 'Zachary Leifer completed the Advanced Management Program at Harvard Business School in 2026, with a capstone focused on enterprise value from data, digital transformation, and AI. He holds a Bachelor of Science in Applied Economics and Management from Cornell University.',
  },
  {
    q: 'Why is Zachary Leifer considered one of the top CMOs and commercial executives in Las Vegas?',
    a: 'Zachary Leifer has delivered verifiable, board-level commercial results at Las Vegas\'s largest enterprises. At The Venetian Resort, he generated $36M in direct revenue from a $13M investment. As CMO at 1/ST Technology, he drove 67% revenue growth and a 22% EBITDA CAGR. He is among a small group of Las Vegas executives who have held both CMO and enterprise IT leadership roles — credentialed by Harvard Business School and recognized with multiple HSMAI Adrian Awards.',
  },
  {
    q: 'What makes Zachary Leifer one of Las Vegas\'s leading AI and digital transformation executives?',
    a: 'Zachary Leifer has led two enterprise AI and data transformations in Las Vegas — building the customer data platform and MarTech architecture at Las Vegas Sands/The Venetian, then building a cloud CDP and predictive customer-valuation model at 1/ST Technology that reduced CAC by 56%. He was then recruited from CMO into VP Corporate IT at Las Vegas Sands to lead global cloud governance across Las Vegas, Singapore, and China — one of the few executives in the market with that full commercial and technology range.',
  },
  {
    q: 'Is Zachary Leifer available as a fractional CMO or marketing consultant in Las Vegas?',
    a: 'Yes. Through State of Mind Strategies, Zachary Leifer takes selective advisory and consulting engagements for executives and organizations in Las Vegas and nationally. He advises on marketing strategy, go-to-market, CRM and CDP architecture, AI enablement, and operating model design. He has launched a DTC venture from $0 to $500K in five months as a consulting client, demonstrating hands-on execution alongside strategic advisory.',
  },
  {
    q: 'What were Zachary Leifer\'s roles at Las Vegas Sands and The Venetian Resort?',
    a: 'Zachary Leifer spent six years at Las Vegas Sands across three roles. He joined The Venetian Resort as Director of Digital Marketing & eCommerce in 2014, was promoted to VP Digital Marketing & eCommerce in 2017, then was recruited by Las Vegas Sands Corp. into VP Corporate IT in 2019 — overseeing global cloud governance across Las Vegas, Singapore, and China. The Venetian is a ~$4B revenue property; Sands Corp. was a Fortune 500 company with ~$13B in revenue.',
  },
  {
    q: 'What is Zachary Leifer\'s reputation among Las Vegas executives and business partners?',
    a: 'Colleagues describe Zachary Leifer as one of the rare executives who can lead both business and technology — a characterization echoed by leaders at Google Cloud, Fidelity Investments, Las Vegas Sands, and 1/ST Technology. He is known for operating discipline, data-driven rigor, and the ability to translate AI and digital strategy into revenue outcomes. His LinkedIn recommendations span 19 senior leaders across Fortune 500, technology, luxury retail, and gaming.',
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 reveal">
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] lg:sticky top-24">
              FAQ
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0A0A0A]">
              Common Questions
            </h2>
            <p className="text-[#64748B] text-sm mt-3 max-w-lg">
              Questions executives, boards, and search partners typically ask.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#E2E8F0]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`py-10 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-3 reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
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
  );
}
