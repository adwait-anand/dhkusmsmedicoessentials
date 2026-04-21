import { BookMarked, GraduationCap, Trophy, BadgeCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Ambient blobs */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/60 px-4 py-2 backdrop-blur-md shadow-glow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs md:text-sm font-medium text-primary tracking-wide">
                Trusted all over Nepal for FMGE, NMCLE & university exams
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95]">
              <span className="text-gradient">DH-KUSMS</span>
              <span className="block mt-2 text-foreground">Medico Essentials</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Premium NEET PG notes, essential texts, and professional-grade medical instruments curated for the discerning clinical student. Precision meets preparation.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: BookMarked, label: "3000+ Pages", color: "text-primary" },
                { icon: GraduationCap, label: "Expert Faculty", color: "text-accent" },
                { icon: Trophy, label: "Updated 2026", color: "text-primary" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/40 px-4 py-2.5 backdrop-blur-md shadow-glow-soft"
                >
                  <Icon className={`h-4 w-4 ${color}`} />
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full gradient-button px-8 py-4 font-display font-bold uppercase text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
              >
                Explore Collection
              </a>
            </div>
          </div>

          {/* Right visual card */}
          <div className="relative h-[420px] md:h-[520px] hidden lg:block">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border/40 glass-strong rotate-3 hover:rotate-0 transition-transform duration-700 shadow-card-hover">
              <div className="absolute inset-0 mesh-bg" />
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl gradient-button shadow-glow-primary">
                  <BookMarked className="h-12 w-12 text-primary-foreground" />
                </div>
                <p className="font-display text-2xl font-bold text-foreground">Premium Quality</p>
                <p className="mt-2 text-sm text-muted-foreground">Crafted for clinicians</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating glass card */}
            <div className="absolute -bottom-8 -left-8 w-72 rounded-2xl border border-border/40 glass-strong p-5 shadow-card-hover animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 border border-primary/30">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Top Rated</h3>
                  <p className="text-[11px] text-muted-foreground">By KUSMS Students</p>
                </div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[92%] gradient-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
