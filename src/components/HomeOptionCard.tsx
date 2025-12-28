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
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />

      <div className="relative flex flex-col items-center text-center">
        <div
          className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-10 w-10 text-white" />
        </div>

        <h3 className="mb-3 font-display text-2xl font-bold text-card-foreground md:text-3xl">
          {title}
        </h3>

        <p className="mb-6 text-muted-foreground max-w-xs">
          {description}
        </p>

        <div className="flex items-center gap-2 text-primary font-medium transition-all duration-300 group-hover:gap-3">
          <span>Explore Now</span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default HomeOptionCard;
