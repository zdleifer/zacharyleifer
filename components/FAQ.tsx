'use client';

import { useReveal } from '@/components/useReveal';
import faqsData from '@/data/faqs.json';

const faqs = faqsData;

export default function FAQ() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 reveal">
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
              FAQ
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0A0A0A]">
              Common Questions
            </h2>
            <p className="text-[#475569] text-sm mt-3 max-w-lg">
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
