import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Capabilities from '../components/Capabilities';
import DashboardShowcase from '../components/DashboardShowcase';
import Industries from '../components/Industries';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white relative">
      <FuturisticBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          <div id="hero">
            <Hero />
          </div>
          <Stats />
          <Features />
          <Capabilities />
          <DashboardShowcase />
          <Industries />
          <TechStack />
          <Testimonials />
          <CTASection />
        </main>
        <div className="bg-white/80 backdrop-blur-sm">
          <Footer />
        </div>
      </div>
    </div>
  );
}