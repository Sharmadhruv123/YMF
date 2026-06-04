import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone } from "lucide-react";

const locations = [
  { city: "Ahmedabad", label: "Head Office", address: "8, Deepawali Complex, Navrangpura", phone: "+91 8511363376" },
  { city: "Mumbai", label: "Support Office", address: "SRK Foundation, 507 Prasad Chambers, Tata Road No. 2, Opera House, Mumbai 400004", phone: "+91 7227887909" },
  { city: "Delhi", label: "Support Office", address: "Ahimsa Vishwa Bharti, 63/1, Old Rajinder Nagar, Karol Baug Metro Station, New Delhi - 110060", phone: "+91 7227887909" },
  { city: "New York", label: "Support Office", address: "218 Webster Avenue, Brooklyn, New York - 11230", phone: "+1 917 400 6520" },
  { city: "Melbourne", label: "Support Office", address: "603/1A Launder Street, Hawthorn, Melbourne, Victoria 3122", phone: "+61 413 186 117" },
  { city: "Philippines", label: "Support Office", address: "58D The Rise, San Antonio, Makati, Philippines 1304", phone: "+639959137535" },
];

export default function GlobalNetworkSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Our Presence</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            <span className="text-primary">Global</span> Network
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(({ city, label, address, phone }, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={city}
                ref={cardRef}
                className={`illustration-card p-6 transition-all duration-500 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${label === "Head Office" ? "!bg-primary" : "bg-white"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 shrink-0 rounded-full border-2 border-foreground flex items-center justify-center ${label === "Head Office" ? "!bg-white" : "bg-primary/10"}`}>
                    <MapPin size={20} className={label === "Head Office" ? "text-foreground" : "text-primary"} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{city}</h3>
                    <p className={`text-sm ${label === "Head Office" ? "text-foreground/80 font-bold" : "text-muted-foreground"}`}>{label}</p>
                  </div>
                </div>
                <div className={`space-y-2 text-sm ${label === "Head Office" ? "text-foreground" : "text-muted-foreground"}`}>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ', ' + city)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:opacity-70 transition-opacity cursor-pointer">
                    <MapPin size={14} className="shrink-0 mt-0.5 opacity-70" />
                    <span className="font-medium">{address}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="shrink-0 opacity-70" />
                    <span className="font-medium">{phone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
