import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, BookMarked, ShoppingCart, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const booksList = [
  "Fastrack - First Year",
  "Fastrack - Second Year",
  "Fastrack - Third Year",
  "Fastrack - Final Year",
  "Anatomy - BD Chaurasia (Set)",
  "Anatomy - Vishram Singh",
  "Physiology - AK Jain",
  "Physiology - Guyton",
  "Physiology - Sembulingam",
  "Biochemistry - Satyanarayana",
  "Biochemistry - Vasudevan",
  "Pathology - Harsh Mohan",
  "Pathology - Robbins",
  "Pathology - Ramdas Nayak",
  "Microbiology - Apurba Sastry",
  "Microbiology - Ananthanarayan",
  "Pharmacology - KD Tripathi",
  "Pharmacology - Shanbhag",
  "Forensic - KS Narayan Reddy",
  "Forensic - Gautam Biswas",
  "PSM - K Park",
  "PSM - Suryakantha",
  "ENT - Dhingra",
  "Ophthalmology - Khurana",
  "Medicine - Boloor",
  "Medicine - Davidson",
  "Medicine - Archith Boloor",
  "Surgery - SRB",
  "Surgery - Das Manual",
  "Surgery - Makhan Lal",
  "OBGY - DC Dutta",
  "Pediatrics - Ghai",
  "Orthopedics - Maheshwari",
  "Clinical Methods - S Das",
  "Clinical Methods - Alagappan",
];

const SecondHandBooks = () => {
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const handleSelect = (book: string) => {
    if (!selectedBooks.includes(book)) {
      setSelectedBooks([...selectedBooks, book]);
    }
    setOpen(false);
  };

  const handleRemove = (book: string) => {
    setSelectedBooks(selectedBooks.filter((b) => b !== book));
  };

  const handleAddToCart = () => {
    selectedBooks.forEach((book) => {
      const bookId = book.toLowerCase().replace(/[^a-z0-9]/g, "-");
      if (!items.some((item) => item.id === `secondhand-${bookId}`)) {
        addItem({
          id: `secondhand-${bookId}`,
          name: book,
          category: "secondhand",
        });
      }
    });
    toast({
      title: "Added to cart",
      description: `${selectedBooks.length} book${selectedBooks.length > 1 ? "s" : ""} added to your cart.`,
    });
    setSelectedBooks([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 py-12 md:py-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl backdrop-blur-sm">
                <BookMarked className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
                  Second Hand Books
                </h1>
                <p className="text-white/80">
                  Quality used textbooks at affordable prices
                </p>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 30L60 27C120 24 240 18 360 18C480 18 600 24 720 27C840 30 960 30 1080 27C1200 24 1320 18 1380 15L1440 12V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Book Selection Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                  Select Your Books
                </h2>
                <p className="text-muted-foreground">
                  Choose the textbooks you need from our collection
                </p>
              </div>

              {/* Multi-select Dropdown */}
              <div className="mb-6">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between h-12 text-left font-normal"
                    >
                      <span className="text-muted-foreground">
                        Search and select books...
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 z-50" align="start">
                    <Command>
                      <CommandInput placeholder="Search books..." />
                      <CommandList>
                        <CommandEmpty>No book found.</CommandEmpty>
                        <CommandGroup className="max-h-64 overflow-auto">
                          {booksList.map((book) => (
                            <CommandItem
                              key={book}
                              value={book}
                              onSelect={() => handleSelect(book)}
                              disabled={selectedBooks.includes(book)}
                              className={selectedBooks.includes(book) ? "opacity-50" : ""}
                            >
                              {book}
                              {selectedBooks.includes(book) && (
                                <span className="ml-auto text-xs text-muted-foreground">Added</span>
                              )}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Selected Books Tags */}
              {selectedBooks.length > 0 && (
                <div className="mb-6 rounded-xl border border-border bg-card p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      Selected Books ({selectedBooks.length})
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedBooks([])}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      Clear all
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedBooks.map((book) => (
                      <Badge
                        key={book}
                        variant="secondary"
                        className="gap-1 py-1.5 px-3 text-sm"
                      >
                        {book}
                        <button
                          onClick={() => handleRemove(book)}
                          className="ml-1 rounded-full hover:bg-destructive/20 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={selectedBooks.length === 0}
                size="lg"
                className="w-full gap-2 bg-primary hover:bg-primary/90"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart ({selectedBooks.length} {selectedBooks.length === 1 ? "book" : "books"})
              </Button>

              {selectedBooks.length === 0 && (
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Select at least one book to add to cart
                </p>
              )}

              {/* Sell Your Books Section */}
              <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                  Want to Sell Your Old Books?
                </h3>
                <p className="mb-4 text-muted-foreground">
                  We accept old medical textbooks! Fill out the form below and we'll get back to you.
                </p>
                <a
                  href="https://forms.gle/XBTrs5hP6ykSeNUc7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <BookMarked className="h-5 w-5" />
                    Sell Your Books
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecondHandBooks;
