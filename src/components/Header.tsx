import { Link } from "react-router-dom";
import { BookOpen, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const Header = () => {
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 glass-strong shadow-nav">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-button text-primary-foreground transition-transform duration-300 group-hover:scale-105 shadow-glow-soft">
            <BookOpen className="h-4 w-4" />
          </div>
          <div>
            <h1 className="font-display text-base font-black text-primary leading-tight tracking-tighter uppercase">
              DH-KUSMS
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Medico Essentials</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="secondary"
            className="flex items-center gap-2 rounded-full px-4 py-2 glass-border bg-card/40 hover:shadow-glow-primary transition-all duration-300"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
            {totalPrice > 0 && (
              <>
                <span className="text-muted-foreground">·</span>
                <span className="font-bold text-primary text-sm">NRS {totalPrice.toLocaleString()}</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
