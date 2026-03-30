import { Coaching } from "@/data/coachings";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CoachingCardProps {
  coaching: Coaching;
  index: number;
}

const CoachingCard = ({ coaching, index }: CoachingCardProps) => {
  return (
    <Link
      to={`/coaching/${coaching.id}`}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Hover glow */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${coaching.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10 rounded-2xl`} />
      
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${coaching.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${coaching.color} text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
          >
            {coaching.icon}
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <h3 className="mb-2 font-display text-lg font-bold text-card-foreground tracking-tight">
          {coaching.name}
        </h3>

        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {coaching.description}
        </p>

        <div className="flex items-center border-t border-border/50 pt-3">
          <div className="text-sm text-muted-foreground">
            <span className="font-bold text-card-foreground">{coaching.subjects.length}</span> subjects available
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoachingCard;
