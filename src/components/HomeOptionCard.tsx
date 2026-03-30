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

const HomeOptionCard = ({ title, description, icon: Icon, to, gradient, index }: HomeOptionCardProps) => {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-8 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Hover glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15 rounded-2xl`} />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative flex flex-col items-center text-center">
        <div
          className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-card-foreground md:text-2xl tracking-tight">
          {title}
        </h3>

        <p className="mb-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-2 text-primary font-semibold text-sm transition-all duration-300 group-hover:gap-3 opacity-70 group-hover:opacity-100">
          <span>Explore</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default HomeOptionCard;
