import { ArrowDown, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Award, BookOpen, Globe, Mic } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: "url('/images/hero bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 1vh"
        }}
      />
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
          <Sparkles size={16} />
          Empowering Youth Since 2005
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
          <span className="text-foreground">India's Largest</span>
          <br />
          <span className="golden-text">Youth Motivation</span>
          <br />
          <span className="text-foreground">Forum</span>
        </h1>

        <p className="text-xl md:text-2xl font-display font-medium italic text-foreground mb-3" style={{ animationDelay: "0.2s" }}>
          Transforming Lives, Inspiring Generations
        </p>
        <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-10" style={{ animationDelay: "0.4s" }}>
         <b>A movement dedicated to empowering youth to realize their true potential and shape the future of society.</b>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: "0.6s" }}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            Join the Movement
            </a>
          </Button>
          <Button onClick={() => scrollTo("testimonials")} size="lg" variant="outline" className="bg-white border-2 border-foreground text-foreground hover:bg-secondary font-bold text-lg px-8 py-6 gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
            <Play size={18} /> Watch Our Journey
          </Button>
        </div>

        {/* Floating stat */}
        <div className="inline-flex items-center gap-3 illustration-card px-6 py-4 mt-12 bg-white">
          <span className="text-2xl"></span>
          <span className="font-display text-2xl md:text-3xl font-bold text-foreground">16M+</span>
          <span className="text-muted-foreground text-sm md:text-base font-medium">Lives Transformed</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-scroll-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
