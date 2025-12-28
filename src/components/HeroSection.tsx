import { BookMarked, GraduationCap, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted all over Nepal for FMGE, NMCLE and university exam preparation
            </span>
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in">
            DH-KUSMS
            <span className="block text-accent">Medico Essentials</span>
          </h1>

          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Premium NEET PG notes from top coaching institutes. 
            Choose your coaching and select the subjects you need.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <BookMarked className="h-5 w-5 text-accent" />
              <span>3000+ Pages</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <GraduationCap className="h-5 w-5 text-accent" />
              <span>Expert Faculty</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Trophy className="h-5 w-5 text-accent" />
              <span>Updated 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.5C672 45.7 768 56.3 864 58.8C960 61.3 1056 55.7 1152 48.5C1248 41.3 1344 32.7 1392 28.3L1440 24V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
