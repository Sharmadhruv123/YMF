import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["About", "Impact", "Initiatives", "Why Join", "Partners", "Contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const targetId = id.toLowerCase().replace(/\s/g, "-");
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Youth Motivation Forum" className="h-10 md:h-12 w-auto" />
          <span className="font-display text-lg md:text-xl font-bold text-foreground hidden sm:inline">Youth Motivation Forum</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
          <Button asChild className="bg-primary text-primary-foreground font-bold px-6 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Join the Movement
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-4 pb-6 space-y-3">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left py-2 font-bold text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
          <Button asChild className="w-full bg-primary text-primary-foreground font-bold border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxPJW_76R9_Xg_3anCGlnpbAj_VmGIDjDyLeEM7Q1GzhFYNQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Join the Movement
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
