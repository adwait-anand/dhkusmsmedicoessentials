import { Link } from "react-router-dom";
import { Menu, ShoppingCart, UserRound } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import logo from "@/assets/home/dh-kusms-logo.ico";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Handwritten Notes", to: "/handwritten-notes" },
  { label: "FastTrack Books", to: "/fastrack-books" },
  { label: "Second Hand Books", to: "/second-hand-books" },
  { label: "Medical Instruments", to: "/medical-instruments" },
  { label: "Premium Scrubs", to: "/scrubs" },
];

const Header = () => {
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full shadow-nav">
      <div className="flex min-h-7 items-center justify-center bg-primary px-4 py-1 text-center text-[10px] font-bold uppercase leading-4 text-primary-foreground md:text-xs">
        All in one Place for Medical Essential Needs- SCRUBS | FASTTRACKS- MBBS_PG Printed Notes | Delivery all over Nepal |
      </div>
      <div className="relative flex h-16 w-full items-center justify-between border-b border-border/50 bg-background/95 px-3 backdrop-blur-xl md:h-[72px] md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="shrink-0">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(88vw,360px)]">
            <SheetHeader>
              <SheetTitle className="text-left font-display">Shop categories</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-border py-4 font-display text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link
          to="/"
          className="group absolute left-1/2 flex max-w-[58vw] -translate-x-1/2 items-center gap-2 text-center md:gap-3"
          aria-label="DH-KUSMS Medico Essentials home"
        >
          <img src={logo} alt="" className="h-9 w-9 shrink-0 object-contain md:h-11 md:w-11" />
          <span className="min-w-0 text-left">
            <span className="block truncate font-display text-xs font-black uppercase leading-tight text-foreground md:text-base">DH-KUSMS</span>
            <span className="block truncate text-[8px] font-semibold uppercase leading-tight text-muted-foreground md:text-[10px]">Medico Essentials</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-0.5 md:gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/admin/login" aria-label="Profile">
              <UserRound className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open cart with ${totalItems} items, total NRS ${totalPrice}`}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-black text-primary-foreground">{totalItems}</span>}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
