import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeOptionCard from "@/components/HomeOptionCard";
import Footer from "@/components/Footer";
import { NotebookPen, BookOpen, BookMarked, Stethoscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mesh-bg">
      <Header />

      <main>
        <HeroSection />

        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
                Browse Categories
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl tracking-tight">
                What Are You Looking For?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Choose from our premium collection of handwritten notes, MBBS FastTrack books, second hand textbooks, or medical instruments.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
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

        {/* Shop Location Map */}
        <section className="py-16 md:py-24 border-t border-border/50 relative">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-primary">
                Find Us
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl tracking-tight">
                Visit Our Shop
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Dhulikhel Hospital, Bylane to Ayan Hotel, Road, Dhulikhel 45210, Nepal
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-card-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d85.5422!3d27.6217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09a7f1e6d4b7%3A0x5e2e7b0e9b1e1e1e!2sDH-KUSMS%20Medico%20Essentials!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DH-KUSMS Medico Essentials Location"
              />
            </div>
            <div className="mt-5 text-center">
              <a
                href="https://maps.app.goo.gl/F1ERUhZwjeqQbfMx6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm tracking-wide"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
