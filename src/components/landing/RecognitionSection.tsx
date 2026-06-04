import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dalaiLamaImg from "@/assets/recognition-dalai-lama.jpg";
import rogerFedererImg from "@/assets/recognition-roger-federer.jpg";
import michaelSchumacherImg from "@/assets/recognition-michael-schumacher.jpg";
import ramNathKovindImg from "@/assets/recognition-ram-nath-kovind.jpg";

const figures = [
  { name: "Dalai Lama", title: "Spiritual Leader", image: dalaiLamaImg },
  { name: "Roger Federer", title: "Tennis Legend & Philanthropist", image: rogerFedererImg },
  { name: "Michael Schumacher", title: "Racing Legend", image: michaelSchumacherImg },
  { name: "Ram Nath Kovind", title: "Former President of India", image: ramNathKovindImg },
];

export default function RecognitionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Worldwide Appreciation</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            <span className="golden-text">Global</span> Recognition
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The Youth Motivation Forum's impact has been acknowledged and appreciated by world leaders and iconic personalities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {figures.map(({ name, title, image }, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={name}
                ref={cardRef}
                className={`glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 group-hover:scale-105 transition-transform shadow-lg shadow-primary/10">
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{name}</h3>
                <p className="text-muted-foreground text-xs">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
