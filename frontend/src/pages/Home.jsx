import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustPartnersSection from '../sections/TrustPartnersSection';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import StatsSection from '../sections/StatsSection';
import SecuritySection from '../sections/SecuritySection';
import HowItWorksSection from '../sections/HowItWorksSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import PricingPreviewSection from '../sections/PricingPreviewSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden">
      {/* Animated Background Lines */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <div 
          className="absolute top-0 animate-line-sweep"
          style={{
            width: '300px',
            height: '4px',
            background: 'linear-gradient(to right, transparent, #FFB6C1 50%, transparent)',
            boxShadow: '0 0 20px rgba(255, 182, 193, 0.6)',
            borderRadius: '2px'
          }}
        ></div>
        <div 
          className="absolute top-[20%] animate-line-sweep-delayed"
          style={{
            width: '300px',
            height: '3px',
            background: 'linear-gradient(to right, transparent, #FFB6C1 50%, transparent)',
            boxShadow: '0 0 15px rgba(255, 182, 193, 0.5)',
            borderRadius: '2px'
          }}
        ></div>
        <div 
          className="absolute top-[40%] animate-line-sweep-slow"
          style={{
            width: '300px',
            height: '4px',
            background: 'linear-gradient(to right, transparent, #FFB6C1 50%, transparent)',
            boxShadow: '0 0 20px rgba(255, 182, 193, 0.6)',
            borderRadius: '2px'
          }}
        ></div>
        <div 
          className="absolute top-[60%] animate-line-sweep-delayed-2"
          style={{
            width: '300px',
            height: '3px',
            background: 'linear-gradient(to right, transparent, #FFB6C1 50%, transparent)',
            boxShadow: '0 0 15px rgba(255, 182, 193, 0.5)',
            borderRadius: '2px'
          }}
        ></div>
        <div 
          className="absolute top-[80%] animate-line-sweep-delayed-3"
          style={{
            width: '300px',
            height: '4px',
            background: 'linear-gradient(to right, transparent, #FFB6C1 50%, transparent)',
            boxShadow: '0 0 20px rgba(255, 182, 193, 0.6)',
            borderRadius: '2px'
          }}
        ></div>
      </div>
      
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <HeroSection />
        <TrustPartnersSection />
        <FeaturesSection />
        <StatsSection />
        <SecuritySection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <PricingPreviewSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
