import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThreeSpecialties from '@/components/ThreeSpecialties';
import BentoFeatures from '@/components/BentoFeatures';
import DemoSection from '@/components/DemoSection';
import Pricing from '@/components/Pricing';
import WhatsAppChatbot from '@/components/WhatsAppChatbot';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-white focus:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Saltar al contenido principal
      </a>
      <TopBanner />
      <Navbar />
      <main id="main-content">
        <Hero />
        <ThreeSpecialties />
        <BentoFeatures />
        <DemoSection />
        <Pricing />
        <WhatsAppChatbot />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
