import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ShoppingCart, Check, MessageCircle, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  rapidRevisionSubjects,
  YEAR_ORDER,
  getFullSetTotal,
  getDiscountedTotal,
} from "@/data/rapidRevision";

const WHATSAPP_NUMBER = "917023889974";
const FULL_SET_CART_ID = "rr-full-set-bundle";

const YEAR_COLORS: Record<string, string> = {
  "1st Year": "from-blue-500 to-indigo-600",
  "2nd Year": "from-emerald-500 to-teal-600",
  "3rd Year": "from-amber-500 to-orange-600",
  "Final Year": "from-rose-500 to-pink-600",
};

const RapidRevisionPrep = () => {
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const fullSetTotal = getFullSetTotal();
  const discountedTotal = getDiscountedTotal(10);

  const isInCart = (id: string) => items.some((i) => i.id === id);
  const isFullSetInCart = isInCart(FULL_SET_CART_ID);

  const handleAddSubject = (subject: (typeof rapidRevisionSubjects)[0]) => {
    addItem({
      id: subject.id,
      name: subject.name,
      price: subject.price,
      category: "coaching",
      coachingName: "Rapid Revision Prep",
    });
    toast({ title: "Added to cart", description: `${subject.name} added to your cart.` });
  };

  const handleBuyFullSet = () => {
    addItem({
      id: FULL_SET_CART_ID,
      name: "Rapid Revision Full Set (19 Subjects)",
      price: discountedTotal,
      category: "coaching",
      coachingName: "Rapid Revision Prep",
    });
    toast({ title: "Full Set added!", description: "Rapid Revision Full Set added to your cart." });
  };

  const handleWhatsAppFullSet = () => {
    const message = `Hi, I want to order the Rapid Revision Full Set. Net Price: NRS ${discountedTotal.toLocaleString()}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const grouped = YEAR_ORDER.map((year) => ({
    year,
    subjects: rapidRevisionSubjects.filter((s) => s.year === year),
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Rapid Revision Prep Notes — DH-KUSMS Medico Essentials" description="Last-minute rapid revision notes for MBBS university and NEET PG / FMGE / NMCLE exams — high-yield, exam-focused content." path="/rapid-revision" />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-teal-600 py-12 md:py-16">
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
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
                  Rapid Revision Prep Notes
                </h1>
                <p className="text-white/80">Quick revision notes for all 19 MBBS subjects</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 30L60 27C120 24 240 18 360 18C480 18 600 24 720 27C840 30 960 30 1080 27C1200 24 1320 18 1380 15L1440 12V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Full Set Banner */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 p-6 md:p-8 shadow-xl">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                    <Crown className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                      Buy Full Set — All 19 Subjects
                    </h3>
                    <p className="text-muted-foreground">
                      Save <span className="font-bold text-primary">10% OFF</span> on the complete bundle!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center md:items-end">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">
                      NRS {fullSetTotal.toLocaleString()}
                    </p>
                    <p className="font-display text-2xl font-bold text-primary">
                      NRS {discountedTotal.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="lg"
                      onClick={handleBuyFullSet}
                      disabled={isFullSetInCart}
                      className={`gap-2 ${isFullSetInCart ? "bg-green-600" : "bg-primary hover:bg-primary/90"}`}
                    >
                      {isFullSetInCart ? (
                        <><Check className="h-5 w-5" /> Added</>
                      ) : (
                        <><ShoppingCart className="h-5 w-5" /> Add Full Set</>
                      )}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleWhatsAppFullSet}
                      className="gap-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects by Year */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {grouped.map(({ year, subjects }) => (
              <div key={year} className="mb-12 last:mb-0">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${YEAR_COLORS[year]}`} />
                  <h2 className="font-display text-2xl font-bold text-foreground">{year}</h2>
                  <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${YEAR_COLORS[year]} opacity-20`} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {subjects.map((subject, index) => {
                    const inCart = isInCart(subject.id);
                    return (
                      <Card
                        key={subject.id}
                        className={`group transition-all duration-300 hover:shadow-lg animate-fade-in ${
                          inCart ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border"
                        }`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardContent className="p-4">
                          <div className="mb-3 flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h3 className="font-semibold text-foreground truncate">{subject.name}</h3>
                              <span className="text-xs font-medium text-muted-foreground">{subject.abbreviation}</span>
                            </div>
                            <span className="text-2xl flex-shrink-0">{subject.icon}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-display text-lg font-bold text-primary">
                              NRS {subject.price.toLocaleString()}
                            </p>
                            <Button
                              size="sm"
                              onClick={() => handleAddSubject(subject)}
                              disabled={inCart}
                              className={`gap-1 ${inCart ? "bg-green-600" : "bg-primary hover:bg-primary/90"}`}
                            >
                              {inCart ? "Added" : <><ShoppingCart className="h-4 w-4" /> Add</>}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RapidRevisionPrep;
