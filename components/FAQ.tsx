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
