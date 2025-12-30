import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Stethoscope, ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const instrumentsList = [
  { id: "he-pencil", name: "H/E Pencil (Staedtler)", icon: "✏️" },
  { id: "goniometer", name: "Goniometer", icon: "📐" },
  { id: "stethoscope", name: "Stethoscope", icon: "🩺" },
  { id: "bp-monitor", name: "BP Monitor (Sphygmomanometer)", icon: "💉" },
];

const MedicalInstruments = () => {
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: typeof instrumentsList[0]) => {
    addItem({
      id: `instrument-${item.id}`,
      name: item.name,
      category: "instrument",
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const isInCart = (itemId: string) => {
    return items.some((item) => item.id === `instrument-${itemId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
              <Stethoscope className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                Medical Instruments
              </h1>
              <p className="text-primary-foreground/80">
                Select the instruments you need
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

      {/* Instruments List */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Select items and add to cart
            </p>
          </div>

          <div className="space-y-4">
            {instrumentsList.map((item) => (
              <Card
                key={item.id}
                className={`transition-all duration-200 hover:shadow-lg ${
                  isInCart(item.id)
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border"
                }`}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <Checkbox
                    checked={isInCart(item.id)}
                    onCheckedChange={() => !isInCart(item.id) && handleAddToCart(item)}
                    className="h-5 w-5"
                  />
                  <span className="text-2xl">{item.icon}</span>
                  <span className="flex-1 font-medium text-foreground">
                    {item.name}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    disabled={isInCart(item.id)}
                    className={`gap-2 ${
                      isInCart(item.id)
                        ? "bg-green-600"
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    {isInCart(item.id) ? (
                      <>
                        <Check className="h-4 w-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        Add
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalInstruments;
