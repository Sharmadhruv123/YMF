import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div ref={ref} className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
          Your Invitation to<br />
          <span className="golden-text">Change the World</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6">
          The Youth Motivation Forum is not just an event, it's a movement that will redefine your life. Join us in transforming the future of the youth. Together, we can create a world driven by purpose, vision, and empathy.
        </p>
        <p className="font-display text-xl md:text-2xl font-bold golden-text mb-10">
          Be the change. Be the future.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold px-10 py-7 text-xl border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all group">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            Join the Movement Today
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
}
