import { BookMarked, GraduationCap, Trophy, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      {/* Animated mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-primary-foreground/5 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent/40"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 16}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px) scale(1); opacity: 0.4; }
          to { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
        }
      `}</style>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground tracking-wide">
              Trusted all over Nepal for FMGE, NMCLE and university exam preparation
            </span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold text-primary-foreground md:text-6xl lg:text-7xl animate-fade-in tracking-tight">
            DH-KUSMS
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent to-primary-foreground/80 bg-clip-text text-transparent">
              Medico Essentials
            </span>
          </h1>

          <p className="mb-10 text-lg text-primary-foreground/70 md:text-xl animate-fade-in max-w-xl mx-auto leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Premium NEET PG notes from top coaching institutes. 
            Choose your coaching and select the subjects you need.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {[
              { icon: BookMarked, label: "3000+ Pages" },
              { icon: GraduationCap, label: "Expert Faculty" },
              { icon: Trophy, label: "Updated 2026" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 backdrop-blur-sm">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary-foreground/90">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
