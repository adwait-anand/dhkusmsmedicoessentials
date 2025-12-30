import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package, MessageCircle, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCoachingById } from "@/data/coachings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Full set discounted prices for each coaching
const fullSetPrices: Record<string, { price: number; label: string }> = {
  marrow: { price: 18009, label: "Marrow8" },
  cerebellum: { price: 14670, label: "Cereb" },
  marrow6: { price: 27576, label: "Marrow6" },
  prepladder: { price: 24462, label: "Stepladder" },
  egurukul: { price: 16254, label: "Gurukul" },
  dbmci: { price: 16560, label: "DBMCI" },
  dams: { price: 15714, label: "DAMS" },
};

const CoachingNotes = () => {
  const { coachingId } = useParams<{ coachingId: string }>();
  const coaching = getCoachingById(coachingId || "");
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (subject: { id: string; name: string; price: number }) => {
    addItem({
      id: `coaching-${coachingId}-${subject.id}`,
      name: subject.name,
      price: subject.price,
      category: "coaching",
      coachingName: coaching?.name,
    });
    toast({
      title: "Added to cart",
      description: `${subject.name} has been added to your cart.`,
    });
  };

  const isInCart = (subjectId: string) => {
    return items.some((item) => item.id === `coaching-${coachingId}-${subjectId}`);
  };

  const handleFullSetOrder = () => {
    if (!coachingId || !fullSetPrices[coachingId]) return;
    const { price, label } = fullSetPrices[coachingId];
    const message = `Hi I want Full Set ${label} Net Price NRS ${price}`;
    const whatsappUrl = `https://wa.me/917023889974?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!coaching) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Coaching not found</h1>
        <Link to="/" className="text-primary hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  const fullSetInfo = fullSetPrices[coachingId || ""];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Coaching Header */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${coaching.color} py-12 md:py-16`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <Link
              to="/handwritten-notes"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Coachings
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl backdrop-blur-sm">
                {coaching.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
                  {coaching.name} Notes
                </h1>
                <p className="text-white/80">{coaching.description}</p>
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

        {/* Full Set Deal Banner */}
        {fullSetInfo && (
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                      <Package className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                        Buy Full Set (All 19 Subjects)
                      </h3>
                      <p className="text-muted-foreground">
                        Get <span className="font-bold text-primary">Extra 10% OFF</span> on the complete set!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Discounted Price</p>
                      <p className="font-display text-2xl font-bold text-primary">
                        NRS {fullSetInfo.price.toLocaleString()}
                      </p>
                    </div>
                    <Button 
                      onClick={handleFullSetOrder}
                      size="lg"
                      className="gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Order Full Set
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Subjects Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Select Your Subjects
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Choose the notes you need from {coaching.name}. Add items to cart and checkout via WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {coaching.subjects.map((subject, index) => (
                <Card
                  key={subject.id}
                  className={`group transition-all duration-300 hover:shadow-lg animate-fade-in ${
                    isInCart(subject.id)
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-semibold text-foreground">{subject.name}</h3>
                      <span className="text-2xl">{subject.icon}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-display text-lg font-bold text-primary">
                        NRS {subject.price.toLocaleString()}
                      </p>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(subject)}
                        disabled={isInCart(subject.id)}
                        className={`gap-1 ${
                          isInCart(subject.id)
                            ? "bg-green-600"
                            : "bg-primary hover:bg-primary/90"
                        }`}
                      >
                        {isInCart(subject.id) ? (
                          "Added"
                        ) : (
                          <>
                            <ShoppingCart className="h-4 w-4" />
                            Add
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoachingNotes;
