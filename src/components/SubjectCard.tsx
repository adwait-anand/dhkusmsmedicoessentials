import { Checkbox } from "@/components/ui/checkbox";
import { Subject } from "@/data/coachings";

interface SubjectCardProps {
  subject: Subject;
  isSelected: boolean;
  onToggle: (id: string) => void;
  index: number;
}

const SubjectCard = ({ subject, isSelected, onToggle, index }: SubjectCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer animate-slide-up ${
        isSelected
          ? "border-primary/60 bg-primary/5 shadow-card-hover glow-primary"
          : "border-border/50 bg-card hover:border-primary/30 hover:shadow-card"
      }`}
      style={{ animationDelay: `${index * 0.04}s` }}
      onClick={() => onToggle(subject.id)}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent" />
      )}

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{subject.icon}</span>
            <h3 className="font-display text-base font-bold text-card-foreground tracking-tight">
              {subject.name}
            </h3>
          </div>
          <Checkbox
            checked={isSelected}
            onCheckedChange={() => onToggle(subject.id)}
            className="mt-1"
          />
        </div>

        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {subject.description}
        </p>

        <div className="flex items-center justify-between border-t border-border/50 pt-3">
          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Price</span>
            <p className="font-display text-lg font-bold text-primary">
              NRS {subject.price.toLocaleString()}
            </p>
          </div>
          <button
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
              isSelected
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {isSelected ? "✓ Selected" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
