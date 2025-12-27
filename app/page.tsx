import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoFeatures from '@/components/BentoFeatures';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

