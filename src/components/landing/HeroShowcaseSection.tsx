import { Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroShowcase from "@/assets/hero-collage.jpg";

export default function HeroShowcaseSection() {
  const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Showcase Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-2 border-foreground">
              <img
                src={heroShowcase}
                alt="YMF Season of Learning events collage"
                className="w-full h-full object-cover"
                loading="lazy" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 right-4 illustration-card bg-white px-5 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                <Users size={20} className="text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-primary">16M+</span>
                <p className="text-muted-foreground text-xs">Lives Transformed</p>
              </div>
            </div>
          </div>

          {/* Right – Text */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tight text-foreground mb-2">
              India's Largest
            </h2>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tight text-primary mb-2">
              SEASON OF
              <br />
              LEARNING
            </h2>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tight text-foreground mb-8">
              2026
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold text-base px-8 py-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Join the Movement
                </a>
              </Button>
              <a
                href="https://www.instagram.com/reel/DDenOOnT5tA/?igsh=MjVoaWExcHY1OXQ0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-bold">
                
                <span className="w-10 h-10 rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-primary flex items-center justify-center">
                  <Play size={16} className="text-primary-foreground ml-0.5" />
                </span>
                Watch Season of Learning
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-20">
          <p className="font-display text-lg md:text-xl font-semibold golden-text mb-2">
            Transforming Lives, Inspiring Generations
          </p>
          <p className="font-display text-base font-medium text-foreground mb-1">
            SOL India 2026
          </p>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            A movement that redefines the way youth perceive their role in the nation's future.
          </p>
        </div>
      </div>
    </section>);

}