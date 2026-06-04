import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "From Amrava to Africa, my Dream of Flying an Aircraft took Flight, and today I am a Commercial Pilot, all Thanks to Sajan Sir. It Began in 8th Grade During a School Session at my alma mater, the School of Scholar.",
    name: "Soham",
    role: "Commercial Pilot (Insta: soham26_)",
  },
  {
    quote: "Starting from 6th Grade, I began to Understand and learn from him. Today, having Completed my Studies at IIM and Successfully Finished an Internship at the World Bank, I owe this rare Achievement to the Vision that Sajan sir Instilled in me.",
    name: "Naman Agrawal",
    role: "IIM Rohtak, The World Bank Treasury",
  },
  {
    quote: "Sajan has always Impressed me with his Analytical Power and Capacity to Suggest lucid Solution to Particular Issue.",
    name: "Dr. Jigesh Vyas",
    role: "MS, DNB (Gen Surgery), DNB (Genitourinary Surgery)",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingNormal, setIsPlayingNormal] = useState(false);

  const handleVideoClick = () => {
    if (!isPlayingNormal && videoRef.current) {
      setIsPlayingNormal(true);
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-glow opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Real Stories</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            <span className="golden-text">Inspiring</span> Journeys
          </h2>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg shadow-primary/10 bg-black relative group cursor-pointer" onClick={handleVideoClick}>
            {!isPlayingNormal && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-foreground border-b-[10px] border-b-transparent ml-2" />
                </div>
              </div>
            )}
            <video
              ref={videoRef}
              className={`w-full h-full object-cover transition-all duration-700 ${!isPlayingNormal ? 'grayscale opacity-80' : 'grayscale-0 opacity-100'}`}
              controls={isPlayingNormal}
              autoPlay
              loop={!isPlayingNormal}
              muted={!isPlayingNormal}
              playsInline
            >
              <source src="/videos/motivation-sajan-shah.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={name}
                ref={cardRef}
                className={`illustration-card bg-white p-8 md:p-10 hover:border-primary transition-all duration-500 text-left ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="text-6xl font-serif text-primary leading-none block h-10 mb-2">“</span>
                <p className="text-foreground leading-relaxed mb-8 italic">{quote}</p>
                <div>
                  <p className="font-display font-bold text-foreground">{name}</p>
                  <p className="text-muted-foreground text-sm">{role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
