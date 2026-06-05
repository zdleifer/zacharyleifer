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
import Footer from '@/components/Footer';

export default function Home() {
  return (
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
      <Footer />
    </main>
  );
}
