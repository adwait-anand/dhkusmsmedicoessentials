import { Subject } from "@/data/subjects";
import { ShoppingBag, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartSummaryProps {
  selectedSubjects: Subject[];
  totalPrice: number;
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const CartSummary = ({ selectedSubjects, totalPrice, onRemove, onClearAll }: CartSummaryProps) => {
  const discount = selectedSubjects.length >= 5 ? Math.round(totalPrice * 0.1) : 0;
  const finalPrice = totalPrice - discount;

  if (selectedSubjects.length === 0) {
    return (
      <div className="rounded-xl border-2 border-dashed border-border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
          Your cart is empty
        </h3>
        <p className="text-sm text-muted-foreground">
          Select the notes you need from the list above
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-24 rounded-xl border border-border bg-card shadow-card overflow-hidden">
      <div className="gradient-hero p-4">
        <h3 className="font-display text-lg font-semibold text-primary-foreground">
          Order Summary
        </h3>
        <p className="text-sm text-primary-foreground/80">
          {selectedSubjects.length} {selectedSubjects.length === 1 ? "item" : "items"} selected
        </p>
      </div>

      <div className="p-4">
        <div className="mb-4 max-h-60 space-y-2 overflow-y-auto">
          {selectedSubjects.map((subject) => (
            <div
              key={subject.id}
              className="flex items-center justify-between rounded-lg bg-secondary/50 p-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{subject.icon}</span>
                <span className="text-sm font-medium text-card-foreground">
                  {subject.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-primary">
                  ₹{subject.price}
                </span>
                <button
                  onClick={() => onRemove(subject.id)}
                  className="rounded p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-card-foreground">₹{totalPrice.toLocaleString()}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1 text-accent">
                <Sparkles className="h-3 w-3" />
                Bundle Discount (10%)
              </span>
              <span className="text-accent">-₹{discount.toLocaleString()}</span>
            </div>
          )}

          <div className="flex justify-between border-t border-border pt-2">
            <span className="font-semibold text-card-foreground">Total</span>
            <span className="font-display text-2xl font-bold text-primary">
              ₹{finalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {selectedSubjects.length >= 5 && (
          <div className="mt-3 rounded-lg bg-accent/10 p-3 text-center">
            <p className="text-sm font-medium text-accent-foreground">
              🎉 You saved ₹{discount.toLocaleString()} with bundle discount!
            </p>
          </div>
        )}

        <div className="mt-4 space-y-2">
          <Button className="w-full gradient-accent text-accent-foreground font-semibold shadow-lg hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </Button>
          <button
            onClick={onClearAll}
            className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            Clear all items
          </button>
        </div>

        {selectedSubjects.length < 5 && (
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Add {5 - selectedSubjects.length} more to get 10% off!
          </p>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
