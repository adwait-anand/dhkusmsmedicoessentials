import { BookOpen, ShoppingCart } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  totalPrice: number;
}

const Header = ({ cartCount, totalPrice }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-lg font-semibold text-foreground leading-tight">
              DH-KUSMS
            </h1>
            <p className="text-xs text-muted-foreground">Medico Essentials</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <ShoppingCart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
            {totalPrice > 0 && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-primary">₹{totalPrice.toLocaleString()}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
