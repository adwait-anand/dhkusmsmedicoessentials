import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package, MessageCircle, ShoppingCart, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

const BUNDLE_INSTITUTES = ["BTR", "Rapid Revision"];

const COACHING_META: Record<string, { icon: string; color: string; description: string }> = {
  "M@rrow 8.0": { icon: "📚", color: "from-blue-500 to-blue-600", description: "Premium NEET PG preparation notes" },
  "Cerebrum 2.0": { icon: "🧠", color: "from-pink-500 to-pink-600", description: "Brain-focused learning materials" },
  "M@rrow 6.0": { icon: "🚀", color: "from-indigo-500 to-indigo-600", description: "Classic Marrow 6.0 edition notes" },
  "Stepladder (Prep X)": { icon: "🎯", color: "from-purple-500 to-purple-600", description: "Comprehensive study materials" },
  "eGurukul 4.0": { icon: "📖", color: "from-green-500 to-green-600", description: "Digital learning excellence" },
  "DBMCI One": { icon: "🏆", color: "from-orange-500 to-orange-600", description: "DBMCI premium notes collection" },
  "D@MS Alpha": { icon: "⭐", color: "from-amber-500 to-amber-600", description: "DAMS Alpha edition notes" },
  "BTR": { icon: "🔥", color: "from-red-500 to-red-600", description: "Complete 19-subject bundle notes" },
  "Rapid Revision": { icon: "⚡", color: "from-cyan-500 to-cyan-600", description: "Quick revision bundle for all subjects" },
};

const SUBJECT_ICONS: Record<string, string> = {
  Anatomy: "🦴", Physiology: "❤️", Biochemistry: "🧬", Pathology: "🔬",
  Microbiology: "🦠", Pharmacology: "💊", ENT: "👂", Ophthalmology: "👁️",
  FM: "⚖️", CM: "📊", Medicine: "🩺", Surgery: "🔪", OBGY: "🤰",
  Pediatrics: "👶", Ortho: "🦿", Derma: "🧴", Psych: "🧠", Anesthesia: "💉", Radiology: "☢️",
};

const CoachingNotes = () => {
  const { coachingId } = useParams<{ coachingId: string }>();
  const instituteName = decodeURIComponent(coachingId || "");
  const meta = COACHING_META[instituteName] || { icon: "📝", color: "from-gray-500 to-gray-600", description: "Coaching notes" };
  const isBundle = BUNDLE_INSTITUTES.includes(instituteName);

  const [notes, setNotes] = useState<Tables<"coaching_notes">[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, items } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase
        .from("coaching_notes")
        .select("*")
        .eq("coaching_institute", instituteName)
        .order("subject");

      if (!error && data) setNotes(data);
      setLoading(false);
    };
    fetchNotes();
  }, [instituteName]);

  const bundlePrice = notes.reduce((sum, n) => sum + n.price, 0);
  const bundleCartId = `coaching-bundle-${coachingId}`;

  const handleAddSubject = (note: Tables<"coaching_notes">) => {
    const cartId = `coaching-${coachingId}-${note.subject}`;
    addItem({
      id: cartId,
      name: note.subject,
      price: note.price,
      category: "coaching",
      coachingName: instituteName,
    });
    toast({ title: "Added to cart", description: `${note.subject} added to your cart.` });
  };

  const handleAddBundle = () => {
    addItem({
      id: bundleCartId,
      name: `Complete 19 Subjects Bundle`,
      price: bundlePrice,
      category: "coaching",
      coachingName: instituteName,
    });
    toast({ title: "Added to cart", description: `${instituteName} bundle added to your cart.` });
  };

  const isSubjectInCart = (subject: string) => items.some((i) => i.id === `coaching-${coachingId}-${subject}`);
  const isBundleInCart = items.some((i) => i.id === bundleCartId);

  // Full set deal for non-bundle institutes
  const fullSetPrices: Record<string, { price: number; label: string }> = {
    "M@rrow 8.0": { price: 18009, label: "Marrow8" },
    "Cerebrum 2.0": { price: 14670, label: "Cereb" },
    "M@rrow 6.0": { price: 27576, label: "Marrow6" },
    "Stepladder (Prep X)": { price: 24462, label: "Stepladder" },
    "eGurukul 4.0": { price: 16254, label: "Gurukul" },
    "DBMCI One": { price: 16560, label: "DBMCI" },
    "D@MS Alpha": { price: 15714, label: "DAMS" },
  };
  const fullSetInfo = fullSetPrices[instituteName];

  const handleFullSetOrder = () => {
    if (!fullSetInfo) return;
    const message = `Hi I want Full Set ${fullSetInfo.label} Net Price NRS ${fullSetInfo.price}`;
    window.open(`https://wa.me/917023889974?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!loading && notes.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Coaching not found</h1>
        <Link to="/handwritten-notes" className="text-primary hover:underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Header */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${meta.color} py-12 md:py-16`}>
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
                {meta.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
                  {instituteName} Notes
                </h1>
                <p className="text-white/80">{meta.description}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 30L60 27C120 24 240 18 360 18C480 18 600 24 720 27C840 30 960 30 1080 27C1200 24 1320 18 1380 15L1440 12V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Full Set Banner for standard institutes */}
        {fullSetInfo && !isBundle && (
          <section className="py-6">
            <div className="container mx-auto px-4">
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                      <Package className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">Buy Full Set (All 19 Subjects)</h3>
                      <p className="text-muted-foreground">Get <span className="font-bold text-primary">Extra 10% OFF</span> on the complete set!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Discounted Price</p>
                      <p className="font-display text-2xl font-bold text-primary">NRS {fullSetInfo.price.toLocaleString()}</p>
                    </div>
                    <Button onClick={handleFullSetOrder} size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-5 w-5" />
                      Order Full Set
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-28 rounded-xl bg-muted animate-pulse" />
                ))}
              </div>
            ) : isBundle ? (
              /* Bundle view for BTR / Rapid Revision */
              <div className="mx-auto max-w-lg">
                <div className="mb-10 text-center">
                  <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Complete Bundle
                  </h2>
                  <p className="text-muted-foreground">
                    All 19 subjects in one package
                  </p>
                </div>
                <Card className="border-2 border-primary/30 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 text-5xl">{meta.icon}</div>
                    <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
                      Complete 19 Subjects Bundle
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Includes Anatomy, Physiology, Biochemistry, Pathology, Microbiology, Pharmacology, ENT, Ophthalmology, FM, CM, Medicine, Surgery, OBGY, Pediatrics, Ortho, Derma, Psych, Anesthesia & Radiology
                    </p>
                    <p className="mb-6 font-display text-3xl font-bold text-primary">
                      NRS {bundlePrice.toLocaleString()}
                    </p>
                    <Button
                      size="lg"
                      onClick={handleAddBundle}
                      disabled={isBundleInCart}
                      className={`w-full gap-2 text-lg ${isBundleInCart ? "bg-green-600" : "bg-primary hover:bg-primary/90"}`}
                    >
                      {isBundleInCart ? (
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
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* Individual subjects for standard institutes */
              <>
                <div className="mb-10 text-center">
                  <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">Select Your Subjects</h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Choose the notes you need from {instituteName}. Add items to cart and checkout via WhatsApp.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {notes.filter((n) => n.in_stock).map((note, index) => {
                    const inCart = isSubjectInCart(note.subject);
                    return (
                      <Card
                        key={note.id}
                        className={`group transition-all duration-300 hover:shadow-lg animate-fade-in ${inCart ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border"}`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <h3 className="font-semibold text-foreground">{note.subject}</h3>
                            <span className="text-2xl">{SUBJECT_ICONS[note.subject] || "📝"}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="font-display text-lg font-bold text-primary">
                              NRS {note.price.toLocaleString()}
                            </p>
                            <Button
                              size="sm"
                              onClick={() => handleAddSubject(note)}
                              disabled={inCart}
                              className={`gap-1 ${inCart ? "bg-green-600" : "bg-primary hover:bg-primary/90"}`}
                            >
                              {inCart ? "Added" : <><ShoppingCart className="h-4 w-4" />Add</>}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoachingNotes;
