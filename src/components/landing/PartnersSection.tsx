import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import partner1 from "@/assets/partner-1.jpg";
import partner2 from "@/assets/partner-2.jpg";
import partner3 from "@/assets/partner-3.jpg";
import partner4 from "@/assets/partner-4.jpg";
import partner5 from "@/assets/partner-5.jpg";
import partner6 from "@/assets/partner-6.jpg";
import partner7 from "@/assets/partner-7.jpg";
import partner8 from "@/assets/partner-8.jpg";

const partners = [
  { name: "PSP Foundation", logo: partner1 },
  { name: "Raajratna Stainless", logo: partner2 },
  { name: "Shatayu", logo: partner3 },
  { name: "Sanjay Ghodawat Foundation", logo: partner4 },
  { name: "Sunhearrt Ceramik", logo: partner5 },
  { name: "ALPS Prep School", logo: partner6 },
  { name: "Khushi Ambient Media", logo: partner7 },
  { name: "Ostwal Group", logo: partner8 },
];

export default function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Partners</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Together for a <span className="golden-text">Stronger Future</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Together we are building a stronger future for youth.</p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden mb-12">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 mx-4 illustration-card bg-white px-8 py-5 flex items-center justify-center min-w-[300px] h-[150px]"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-24 max-w-[240px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="bg-white text-foreground font-bold px-8 py-6 text-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfk3VEBfrderiQQgkWAQe4eBP_iRZMJ2JQItVZSXvk9kWr-4g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Become a Partner
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
