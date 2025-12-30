import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fastrackBooks } from "@/data/fastrack";
import { ArrowLeft, BookOpen, ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const FastrackBooks = () => {
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (book: typeof fastrackBooks[0]) => {
    addItem({
      id: `fastrack-${book.id}`,
      name: book.name,
      price: book.price,
      category: "fastrack",
    });
    toast({
      title: "Added to cart",
      description: `${book.name} has been added to your cart.`,
    });
  };

  const isInCart = (bookId: string) => {
    return items.some((item) => item.id === `fastrack-${bookId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                  MBBS FastTrack Books
                </h1>
                <p className="text-primary-foreground/80">
                  Quick revision books for all MBBS years
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.5C672 45.7 768 56.3 864 58.8C960 61.3 1056 55.7 1152 48.5C1248 41.3 1344 32.7 1392 28.3L1440 24V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {fastrackBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-4xl">{book.icon}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {book.year}
                      </span>
                    </div>

                    <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">
                      {book.name}
                    </h3>

                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>

                    <div className="mb-4 border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground">Price</span>
                      <p className="font-display text-2xl font-bold text-primary">
                        NRS {book.price.toLocaleString()}
                      </p>
                    </div>

                    <Button
                      onClick={() => handleAddToCart(book)}
                      className={`w-full font-semibold shadow-lg transition-colors gap-2 ${
                        isInCart(book.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      {isInCart(book.id) ? (
                        <>
                          <Check className="h-5 w-5" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-5 w-5" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FastrackBooks;
