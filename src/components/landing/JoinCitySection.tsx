import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Handshake, Heart, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ways = [
  { icon: Users, title: "Attend the Forum", desc: "Join thousands of youth at our next event" },
  { icon: Handshake, title: "Partner With Us", desc: "Bring the movement to your institution" },
  { icon: Heart, title: "Support Youth Programs", desc: "Help fund education and empowerment" },
];

export default function JoinCitySection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.city.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    const phoneRegex = /^[+]?[\d\s\-()]{7,15}$/;
    if (!phoneRegex.test(form.phone)) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        city: form.city.trim(),
        message: form.message.trim() || null,
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "We'll be in touch soon." });
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="join" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-glow opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary bg-primary/10 text-primary text-sm font-bold mb-6">
            Take Action
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground tracking-tight mb-4">
            Become a Leader in <br />
            <span className="golden-text">Your City</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join the movement and help us bring positive change to your local community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">How You Can Participate</h3>
            {ways.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{title}</h4>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="illustration-card bg-white p-6 md:p-8 space-y-4">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Contact Us</h3>
            <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-white border-2 border-foreground focus:border-primary text-foreground placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md" />
            <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-white border-2 border-foreground focus:border-primary text-foreground placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md" />
            <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="bg-white border-2 border-foreground focus:border-primary text-foreground placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md" />
            <Input placeholder="Your City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required className="bg-white border-2 border-foreground focus:border-primary text-foreground placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md" />
            <Textarea placeholder="Your Message (Optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-white border-2 border-foreground focus:border-primary text-foreground placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md min-h-[100px]" />
            <Button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground font-bold py-6 text-lg border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] transition-all">
              <Send size={18} className="mr-2" /> {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
