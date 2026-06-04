import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
{ icon: Instagram, href: "https://www.instagram.com/sajan_shahh/" },
{ icon: Facebook, href: "https://www.facebook.com/SajanShahPage" },
{ icon: Twitter, href: "https://x.com/sajanofficial" },
{ icon: Linkedin, href: "https://www.linkedin.com/in/sajan-shah-7840244a/" },
{ icon: Youtube, href: "https://www.youtube.com/@SajanShah" }];


export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="Youth Motivation Forum" className="h-10 w-auto" />
              <h3 className="font-display text-xl font-bold text-foreground">YMF</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <i>Transforming Lives, Inspiring Generations. A movement that redefines the way youth perceive their role in the nation's future.</i>
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-4 flex flex-col md:items-center">
            <div className="w-full md:w-auto">
              <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors font-bold">Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors font-bold">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-4 md:ml-auto">
            <h4 className="font-display font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>8, Deepawali Complex, Navrangpura, Ahmedabad</p>
              <p>info@youthmotivationforum.com</p>
              <p>+91 8511363376</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href }, i) =>
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg illustration-card bg-white border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all duration-200">
                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Youth Motivation Forum. All rights reserved.
        </div>
      </div>
    </footer>);

}