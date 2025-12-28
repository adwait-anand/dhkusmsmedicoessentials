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
      className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer animate-slide-up ${
        isSelected
          ? "border-primary bg-primary/5 shadow-card-hover"
          : "border-border bg-card hover:border-primary/50 hover:shadow-card"
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => onToggle(subject.id)}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
          <div className="absolute -right-4 -top-4 h-8 w-16 rotate-45 bg-primary" />
        </div>
      )}

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{subject.icon}</span>
            <div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {subject.name}
              </h3>
            </div>
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

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="text-xs text-muted-foreground">Price</span>
            <p className="font-display text-xl font-bold text-primary">
              NRS {subject.price.toLocaleString()}
            </p>
          </div>
          <button
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isSelected
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {isSelected ? "Selected" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
