import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import HeroShowcaseSection from "@/components/landing/HeroShowcaseSection";
import AboutSection from "@/components/landing/AboutSection";
import ImpactSection from "@/components/landing/ImpactSection";
import InitiativesSection from "@/components/landing/InitiativesSection";
import WhyJoinSection from "@/components/landing/WhyJoinSection";
import PartnersSection from "@/components/landing/PartnersSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import RecognitionSection from "@/components/landing/RecognitionSection";
import JoinCitySection from "@/components/landing/JoinCitySection";
import GlobalNetworkSection from "@/components/landing/GlobalNetworkSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <HeroSection />
    <div className="section-light bg-background">
      <HeroShowcaseSection />
    </div>
    <AboutSection />
    <div className="section-light bg-background">
      <ImpactSection />
    </div>
    <InitiativesSection />
    <div className="section-light bg-background">
      <WhyJoinSection />
    </div>
    <PartnersSection />
    <div className="section-light bg-background">
      <TestimonialsSection />
    </div>
    <RecognitionSection />
    <div className="section-light bg-background">
      <JoinCitySection />
    </div>
    <FinalCTA />
    <div className="section-light bg-background">
      <GlobalNetworkSection />
    </div>
    <Footer />
  </div>
);

export default Index;
