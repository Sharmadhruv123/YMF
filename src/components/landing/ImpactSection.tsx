import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { School, GraduationCap, Heart, Users, TreePine, Glasses, UserCheck } from "lucide-react";

const mainStats = [
  { icon: School, value: 5000, suffix: "+", label: "Schools", color: "from-amber-500 to-yellow-500" },
  { icon: GraduationCap, value: 2000, suffix: "+", label: "Colleges", color: "from-amber-600 to-amber-400" },
  { icon: Heart, value: 850, suffix: "+", label: "NGOs", color: "from-yellow-500 to-amber-500" },
  { icon: Users, value: 1.5, suffix: "M", label: "Youth Inspired", decimal: true, color: "from-amber-500 to-yellow-600" },
];

const secondaryStats = [
  { icon: UserCheck, value: 900, suffix: "K", label: "Parents Engaged" },
  { icon: TreePine, value: 1.5, suffix: "M", label: "Plantable Pencils", decimal: true },
  { icon: Glasses, value: 500, suffix: "K", label: "UV Glasses Provided" },
];

function StatCard({ icon: Icon, value, suffix, label, decimal, large }: any) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(decimal ? value * 10 : value, 2000, isVisible);
  const display = decimal ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className={`glass-card p-6 ${large ? "md:p-8" : "p-5"} text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group`}>
      <div className={`w-12 h-12 ${large ? "md:w-14 md:h-14" : ""} mx-auto rounded-xl golden-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon size={large ? 24 : 20} className="text-primary-foreground" />
      </div>
      <div className={`font-display ${large ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} font-black golden-text mb-1`}>
        {display}{suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}

export default function ImpactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Scale of Impact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Reach <span className="golden-text">at a Glance</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {mainStats.map((s) => <StatCard key={s.label} {...s} large />)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {secondaryStats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
