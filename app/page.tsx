import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Logos from '@/components/Logos';
import About from '@/components/About';
import Positioning from '@/components/Positioning';
import CaseStudies from '@/components/CaseStudies';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Insights from '@/components/Insights';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import faqsData from '@/data/faqs.json';

// Generated from data/faqs.json, the same source the visible FAQ renders from,
// so the markup can never assert a question this page does not display.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqsData.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <main>
      <Nav />
      <Hero />
      <Stats />
      <Logos />
      <About />
      <Positioning />
      <CaseStudies />
      <Experience />
      <Testimonials />
      <Insights />
      <Recognition />
      <FAQ />
        <Footer />
      </main>
    </>
  );
}
