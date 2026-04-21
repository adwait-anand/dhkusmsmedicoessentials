import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeOptionCard from "@/components/HomeOptionCard";
import Footer from "@/components/Footer";
import { NotebookPen, BookOpen, BookMarked, Stethoscope, MapPin, Clock, Phone, Navigation } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mesh-bg">
      <Header />

      <main>
        <HeroSection />

        <section id="categories" className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="mb-14 max-w-3xl">
              <p className="mb-3 text-xs font-display font-bold tracking-[0.25em] uppercase text-primary">
                Browse Categories
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter relative inline-block">
                What Are You Looking For?
                <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
                Choose from our premium collection of handwritten notes, MBBS FastTrack books, second hand textbooks, or medical instruments.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              <HomeOptionCard
                title="Handwritten Notes"
                description="Premium notes from 7 top coaching institutes"
                icon={NotebookPen}
                to="/handwritten-notes"
                gradient="from-blue-500 to-indigo-600"
                index={0}
              />
              <HomeOptionCard
                title="MBBS FastTrack Books"
                description="Quick revision books for all MBBS years"
                icon={BookOpen}
                to="/fastrack-books"
                gradient="from-emerald-500 to-teal-600"
                index={1}
              />
              <HomeOptionCard
                title="Second Hand Books"
                description="Quality used textbooks at affordable prices"
                icon={BookMarked}
                to="/second-hand-books"
                gradient="from-amber-500 to-orange-600"
                index={2}
              />
              <HomeOptionCard
                title="Medical Instruments"
                description="Essential tools for medical students"
                icon={Stethoscope}
                to="/medical-instruments"
                gradient="from-rose-500 to-pink-600"
                index={3}
              />
            </div>
          </div>
        </section>

        {/* Visit Our Shop */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="rounded-3xl border border-border/40 glass p-6 md:p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
              <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

              <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <p className="mb-3 text-xs font-display font-bold tracking-[0.25em] uppercase text-primary">
                      Find Us
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-black text-foreground tracking-tighter">
                      Visit Our Shop
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dhulikhel Hospital, Bylane to Ayan Hotel, Road, Dhulikhel 45210, Nepal</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Mon-Sun: 8:00 AM – 7:00 PM</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>+977 9823409169</span>
                    </p>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/F1ERUhZwjeqQbfMx6?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/60 hover:border-primary/50 px-6 py-3 font-display font-semibold text-sm text-foreground transition-all duration-300 shadow-glow-soft"
                  >
                    <Navigation className="h-4 w-4 text-primary" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="lg:col-span-2">
                  <div className="w-full h-[380px] md:h-[420px] rounded-2xl border border-primary/20 overflow-hidden relative shadow-glow-soft">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d85.5422!3d27.6217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09a7f1e6d4b7%3A0x5e2e7b0e9b1e1e1e!2sDH-KUSMS%20Medico%20Essentials!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="DH-KUSMS Medico Essentials Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
