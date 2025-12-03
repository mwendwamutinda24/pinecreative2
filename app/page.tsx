import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import WhyChoose from '@/components/sections/WhyChooseus';
import HomePage from '@/components/sections/HomePage';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomePage/>
        <Stats />
        <About />
        <Portfolio />
        <WhyChoose/>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}