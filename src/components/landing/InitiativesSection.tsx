import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import climateImg from "@/assets/initiative-climate.jpg";
import empathyImg from "@/assets/initiative-empathy.jpg";
import educationImg from "@/assets/initiative-education.jpg";
import visionImg from "@/assets/initiative-vision.jpg";

const initiatives = [
  { image: climateImg, title: "Climate Action: Plantable Pencil Drive", description: "Every student receives a plantable pencil, symbolizing growth, sustainability, and responsibility.", tag: "UNSDG 2030 Initiative" },
  { image: empathyImg, title: "Promoting Empathy: UV Glasses Drive", description: "Parents are encouraged to see the world with empathy, bridging generational gaps.", tag: "Fostering Understanding" },
  { image: educationImg, title: "Quality Education for All", description: "Ensuring every participant has the tools and inspiration for lifelong learning.", tag: "Innovation & Impact" },
  { image: visionImg, title: "Youth Vision Workshops", description: "Interactive sessions helping students realize their potential as changemakers.", tag: "Purpose-Driven Learning" },
];

function InitiativeCard({ image, title, description, tag, index }: { image: string, title: string, description: string, tag: string, index: number }) {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={cardRef}
      className={`bg-card rounded-xl overflow-hidden border border-border/50 group hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
        <span className="text-primary text-xs font-semibold">{tag}</span>
      </div>
    </div>
  );
}

export default function InitiativesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="initiatives" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="golden-text">Initiatives</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">Making a Real Impact</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((init, i) => (
            <InitiativeCard key={init.title} {...init} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold px-8 py-6 text-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Join Our Initiatives
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
