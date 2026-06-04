import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, BookOpen, Globe, Mic } from "lucide-react";
import sajanShah from "@/assets/sajan-shah.jpg";

const achievements = [
{ icon: Mic, label: "4x TEDx Speaker" },
{ icon: Globe, label: "Youth Peace Ambassador" },
{ icon: Award, label: "National Award Recipient" },
{ icon: BookOpen, label: "Published Author" }];


export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Text side */}
          <div>
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">The Visionary</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Man Behind<br />
              <span className="text-primary">the Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Sajan Shah founded the Youth Motivation Forum with a singular vision, to ignite the spark of potential in every young mind across India. What started as a grassroots initiative has grown into a national movement that has inspired millions.
            </p>

            <blockquote className="border-l-4 border-primary pl-5 py-2 my-6">
              <p className="text-foreground text-lg italic font-medium leading-relaxed">
                "Youth are not useless; they are just used less."
              </p>
              <cite className="text-muted-foreground text-sm not-italic mt-1 block font-bold">- Sajan Shah</cite>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Over two decades, this movement has reached thousands of schools, colleges, and communities, creating lasting change through motivation, education, and empowerment. The initiative has been appreciated by world leaders and global figures for its unwavering commitment to youth development.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map(({ icon: Icon, label }) =>
              <div key={label} className="illustration-card bg-white p-4 flex items-center gap-3 transition-colors border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-10 h-10 rounded-lg bg-primary border-2 border-foreground flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border-2 border-foreground">
              <img
                src={sajanShah}
                alt="Sajan Shah - Founder & Visionary"
                className="w-full h-full object-cover"
                loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -left-4 illustration-card bg-white px-5 py-3 flex items-center gap-2">
              <span className="text-xl"></span>
              <span className="font-display font-bold text-primary text-xl">16 Years</span>
              <span className="text-muted-foreground text-sm">of Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}