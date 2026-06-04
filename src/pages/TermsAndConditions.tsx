import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero header */}
      <section className="pt-28 pb-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Your privacy and trust are important to us.</p>
      </section>

      {/* Content */}
      <div className="section-light bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-headings:font-display prose-headings:text-foreground text-foreground/90 space-y-10 text-sm sm:text-base leading-relaxed">

          <p>These Terms &amp; Conditions govern the use of the Youth Motivation Forum website and participation in its digital platforms. By accessing this website, you agree to comply with these terms.</p>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Website Usage</h2>
            <p>The Youth Motivation Forum website is intended for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>informational purposes</li>
              <li>youth empowerment initiatives</li>
              <li>event awareness</li>
              <li>institutional collaborations</li>
            </ul>
            <p className="mt-3">Users agree not to misuse the website for unlawful or harmful purposes.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
            <p>All materials on this website, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>text</li>
              <li>graphics</li>
              <li>photographs</li>
              <li>logos</li>
              <li>videos</li>
              <li>design elements</li>
            </ul>
            <p className="mt-3">are the property of Youth Motivation Forum unless otherwise stated. Unauthorized reproduction, distribution, or commercial use is prohibited without written permission.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Event Participation</h2>
            <p>Participation in Youth Motivation Forum programs, workshops, or events may be subject to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>registration requirements</li>
              <li>eligibility conditions</li>
              <li>venue capacity limits</li>
              <li>organizational guidelines</li>
            </ul>
            <p className="mt-3">Youth Motivation Forum reserves the right to modify or cancel events when necessary.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Responsibilities</h2>
            <p>Users submitting forms or messages through the website agree that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>the information provided is accurate</li>
              <li>submissions do not contain false or harmful content</li>
              <li>communications remain respectful and lawful</li>
            </ul>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. External Links</h2>
            <p>The website may contain links to external websites or platforms. Youth Motivation Forum is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>the content</li>
              <li>security</li>
              <li>policies of third-party websites.</li>
            </ul>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>Youth Motivation Forum makes reasonable efforts to maintain accurate and up-to-date information on this website. However, we do not guarantee that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>all information will always be error-free</li>
              <li>the website will always operate without interruption</li>
            </ul>
            <p className="mt-3">Youth Motivation Forum shall not be liable for any direct or indirect damages arising from the use of the website.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Media Use During Events</h2>
            <p>Participants attending Youth Motivation Forum events acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>event photographs</li>
              <li>videos</li>
              <li>recordings</li>
            </ul>
            <p className="mt-3">may be used for educational or promotional purposes including social media, publications, and official communications.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Modification of Terms</h2>
            <p>Youth Motivation Forum reserves the right to modify these Terms &amp; Conditions at any time. Continued use of the website after updates indicates acceptance of the revised terms.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
            <p>These Terms &amp; Conditions are governed by the laws of India. Any disputes arising from the use of this website shall fall under the jurisdiction of courts located in <strong>Ahmedabad, Gujarat</strong>.</p>
          </section>

          <hr className="border-border/50" />

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact</h2>
            <p>For questions related to these Terms &amp; Conditions, please contact:</p>
            <p className="mt-2">Youth Motivation Forum<br />8, Deepawali Complex, Navrangpura<br />Ahmedabad, Gujarat, India</p>
            <p className="mt-2">Email: <a href="mailto:info@youthmotivationforum.com" className="text-primary hover:underline">info@youthmotivationforum.com</a></p>
            <p>Phone: +91 8511 363376</p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
