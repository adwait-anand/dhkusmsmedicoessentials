import { Coaching } from "@/data/coachings";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CoachingCardProps {
  coaching: Coaching;
  index: number;
}

const CoachingCard = ({ coaching, index }: CoachingCardProps) => {
  const totalValue = coaching.subjects.reduce((sum, s) => sum + s.price, 0);

  return (
    <Link
      to={`/coaching/${coaching.id}`}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${coaching.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${coaching.color} text-2xl shadow-lg`}
          >
            {coaching.icon}
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">
          {coaching.name}
        </h3>

        <p className="mb-4 text-sm text-muted-foreground">
          {coaching.description}
        </p>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-card-foreground">{coaching.subjects.length}</span> subjects
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="font-display text-lg font-bold text-primary">
              ₹{Math.min(...coaching.subjects.map((s) => s.price))}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoachingCard;
