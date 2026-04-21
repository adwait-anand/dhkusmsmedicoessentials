import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeOptionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  gradient: string;
  index: number;
}

// Map gradient prop to themed accent color classes
const accentMap: Record<string, { glow: string; bg: string; border: string; text: string; hover: string }> = {
  "from-blue-500 to-indigo-600": {
    glow: "rgba(109,221,255,0.15)",
    bg: "bg-primary/15",
    border: "border-primary/30",
    text: "text-primary",
    hover: "hover:border-primary/50",
  },
  "from-emerald-500 to-teal-600": {
    glow: "rgba(0,200,150,0.15)",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    hover: "hover:border-emerald-500/50",
  },
  "from-amber-500 to-orange-600": {
    glow: "rgba(255,159,77,0.15)",
    bg: "bg-accent/15",
    border: "border-accent/30",
    text: "text-accent",
    hover: "hover:border-accent/50",
  },
  "from-rose-500 to-pink-600": {
    glow: "rgba(255,107,152,0.15)",
    bg: "bg-pink-500/15",
    border: "border-pink-500/30",
    text: "text-pink-400",
    hover: "hover:border-pink-500/50",
  },
};

const HomeOptionCard = ({ title, description, icon: Icon, to, gradient, index }: HomeOptionCardProps) => {
  const accent = accentMap[gradient] ?? accentMap["from-blue-500 to-indigo-600"];

  return (
    <Link
      to={to}
      className={`group relative block h-72 md:h-80 overflow-hidden rounded-3xl border border-border/40 glass transition-all duration-500 ${accent.hover} hover:-translate-y-1 animate-fade-in`}
      style={{
        animationDelay: `${index * 0.1}s`,
        boxShadow: `0 0 0 transparent`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px] opacity-50 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        style={{ background: accent.glow }}
      />

      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.06] z-0`} />

      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9">
        <div
          className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl ${accent.bg} border ${accent.border} ${accent.text} transition-all duration-500 group-hover:scale-110`}
        >
          <Icon className="h-7 w-7 md:h-8 md:w-8" />
        </div>

        <div>
          <h3 className="mb-2 font-display text-2xl font-bold text-foreground tracking-tight">
            {title}
          </h3>
          <p className="mb-5 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className={`flex items-center gap-2 ${accent.text} font-display font-bold text-xs uppercase tracking-widest`}>
            <span>Explore</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeOptionCard;
