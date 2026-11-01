import { useState } from "react";
import SEO from "@/components/SEO";
import { Check, ShoppingCart, Shirt, UserRound } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import {
  scrubGenders,
  scrubColorsByGender,
  scrubSizes,
  SCRUB_BASE_PRICE,
  SCRUB_STYLE,
  type ScrubGender,
} from "@/data/scrubs";
import knyaLogo from "@/assets/brand/knya-med-original.webp";

const KnyaScrubs = () => {
  const { addItem, setIsCartOpen } = useCart();
  const [selectedGender, setSelectedGender] = useState<ScrubGender | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const availableColors = selectedGender ? scrubColorsByGender[selectedGender] : [];
  const selectedColorData = availableColors.find((color) => color.name === selectedColor);
  const canAdd = Boolean(selectedGender && selectedColor && selectedSize);

  const handleGenderChange = (gender: ScrubGender) => {
    setSelectedGender(gender);
    setSelectedColor(null);
  };

  const handleAddToCart = () => {
    if (!selectedGender || !selectedColor || !selectedSize) return;
    const id = `scrub-${selectedGender}-${selectedColor}-${selectedSize}`
      .toLowerCase()
      .replace(/\s+/g, "-");

    addItem({
      id,
      name: "Premium KnyaMed Scrub",
      price: SCRUB_BASE_PRICE,
      category: "scrubs",
      gender: selectedGender,
      color: selectedColor,
      size: selectedSize,
    });

    toast({
      title: "Added to cart",
      description: `${selectedGender} · ${selectedColor} · Size ${selectedSize}`,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background mesh-bg">
      <SEO title="Premium KnyaMed Scrubs — DH-KUSMS Medico Essentials" description="Comfortable KnyaMed V-neck scrubs for clinical postings — choose your gender, color, and size. Delivered across Nepal from DH-KUSMS Medico Essentials." path="/scrubs" />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">

          <div className="container relative z-10 mx-auto px-4 lg:px-6">
            <div className="max-w-3xl">
              <img src={knyaLogo} alt="KnyaMed" className="mb-7 h-12 w-auto rounded border border-border/50" width={250} height={80} />
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-primary/30 px-4 py-1.5">
                <Shirt className="h-4 w-4 text-accent" />
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-accent">
                  New Arrival
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-foreground">
                Premium KnyaMed Scrubs
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
                Comfort for those long clinical shifts. Classic V-neck cut, made to move with you.
              </p>
            </div>
          </div>
        </section>

        {/* Customizer */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Visual preview */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 overflow-hidden rounded-lg border border-border/40 glass">
                  <div className="relative aspect-[7/8] bg-muted/30">
                    {selectedColorData ? (
                      <img src={selectedColorData.image} alt={`${selectedGender} ${selectedColorData.name} KnyaMed scrubs`} className="h-full w-full object-cover object-top" width={896} height={1152} />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                        <Shirt className="h-28 w-28 text-muted-foreground/50" strokeWidth={1.2} />
                        <p className="mt-5 text-sm text-muted-foreground">Select a gender and color to see your scrub</p>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-border/40 p-5 text-center">
                    <p className="font-display text-xl font-bold text-foreground">
                      Premium KnyaMed Scrub
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {[selectedGender, selectedColor, selectedSize && `Size ${selectedSize}`].filter(Boolean).join(" · ") || "Build your set"}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                      <Check className="h-3 w-3 text-accent" />
                      {SCRUB_STYLE}
                    </p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="lg:col-span-3 space-y-10">
                {/* Gender */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold text-foreground">1. Choose Gender</h2>
                    {selectedGender && <span className="text-xs font-medium text-accent">{selectedGender}</span>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {scrubGenders.map((gender) => (
                      <Button key={gender} type="button" variant="outline" onClick={() => handleGenderChange(gender)} className={`h-14 justify-start gap-3 ${selectedGender === gender ? "border-primary bg-primary/10" : "border-border/50 bg-card/40"}`}>
                        <UserRound className="h-5 w-5" />
                        {gender}
                        {selectedGender === gender && <Check className="ml-auto h-4 w-4 text-accent" />}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                      2. Choose Color
                    </h2>
                    {selectedColor && (
                      <span className="text-xs text-accent font-medium">
                        {selectedColor}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {availableColors.map((color) => {
                      const active = selectedColor === color.name;
                      return (
                        <Button
                          type="button"
                          variant="ghost"
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          title={color.name}
                          className={`group relative h-12 w-12 rounded-full p-0 transition-all duration-300 ${
                            active
                              ? "ring-2 ring-ring ring-offset-4 ring-offset-background scale-110"
                              : "ring-1 ring-border/50 hover:scale-105"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={color.name}
                        >
                          {active && (
                            <Check className="absolute inset-0 m-auto h-5 w-5 text-primary-foreground drop-shadow-md" />
                          )}
                        </Button>
                      );
                    })}
                  </div>
                  {!selectedGender && <p className="mt-3 text-sm text-muted-foreground">Choose Men's or Women's to view available colors.</p>}
                </div>

                {/* Size */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                      3. Choose Size
                    </h2>
                    {selectedSize && (
                      <span className="text-xs text-accent font-medium">
                        Size {selectedSize}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {scrubSizes.map((size) => {
                      const active = selectedSize === size;
                      return (
                        <Button
                          type="button"
                          variant="outline"
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[56px] rounded-full border px-5 py-2.5 font-display font-bold text-sm transition-all duration-300 ${
                            active
                              ? "border-primary bg-primary text-primary-foreground shadow-glow-soft"
                              : "border-border/60 bg-card/40 text-foreground hover:border-primary/50"
                          }`}
                        >
                          {size}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Summary + CTA */}
                <div className="rounded-2xl border border-border/40 glass p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-display font-bold">
                      Price
                    </p>
                    <p className="font-display text-3xl font-black text-foreground">
                      NRS {SCRUB_BASE_PRICE.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    disabled={!canAdd}
                    size="lg"
                    className="gap-2 bg-primary hover:opacity-90 text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {canAdd ? "Add to Cart" : "Select all options"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KnyaScrubs;
