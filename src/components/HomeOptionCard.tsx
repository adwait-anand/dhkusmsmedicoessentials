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

const HomeOptionCard = ({ title, description, icon: Icon, to }: HomeOptionCardProps) => (
  <Link to={to} className="group flex h-full min-h-52 flex-col items-center rounded-lg border border-border bg-card px-4 py-6 text-center shadow-card transition-all duration-200 hover:border-primary hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
      <Icon className="h-7 w-7" />
    </div>
    <h3 className="mb-2 font-display text-sm font-bold leading-snug text-foreground md:text-base">{title}</h3>
    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{description}</p>
    <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-accent">Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
  </Link>
);

export default HomeOptionCard;
