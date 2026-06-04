import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Compass, HeartHandshake, Leaf, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Compass, title: "Purpose & Vision", description: "Helping youth discover their life direction and build a meaningful path forward." },
  { icon: HeartHandshake, title: "Empathy & Connection", description: "Strengthening relationships between youth and parents through understanding and compassion." },
  { icon: Leaf, title: "Climate Responsibility", description: "Encouraging sustainability, environmental awareness, and responsible citizenship." },
  { icon: Trophy, title: "Global Recognition", description: "Being part of a movement acknowledged by world leaders and global organizations." },
];

export default function WhyJoinSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-join" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-glow opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Be Part of the Change</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why Join the <span className="golden-text">Movement?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, description }, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={title}
                ref={cardRef}
                className={`glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl golden-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold px-8 py-6 text-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Join the Movement Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
