import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Logos from '@/components/Logos';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Logos />
      <About />
      <Experience />
      <Testimonials />
      <Expertise />
      <Footer />
    </main>
  );
}
