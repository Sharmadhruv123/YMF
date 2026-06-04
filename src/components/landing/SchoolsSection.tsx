import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SchoolsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Our Partners</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Institutional <span className="text-primary">Partner</span>
          </h2>
        </div>
        
        <div className="illustration-card bg-white p-4 md:p-8 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-5xl mx-auto">
          <img 
            src="/images/school.png" 
            alt="Schools we work with" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
