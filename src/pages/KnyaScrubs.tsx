import { useState } from "react";
import SEO from "@/components/SEO";
import { Check, ShoppingCart, Shirt } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import {
  scrubTypes,
  scrubColors,
  scrubSizes,
  SCRUB_BASE_PRICE,
} from "@/data/scrubs";

const KnyaScrubs = () => {
  const { addItem, setIsCartOpen } = useCart();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const canAdd = selectedType && selectedColor && selectedSize;

  const handleAddToCart = () => {
    if (!canAdd) return;
    const id = `scrub-${selectedType}-${selectedColor}-${selectedSize}`
      .toLowerCase()
      .replace(/\s+/g, "-");

    addItem({
      id,
      name: "KNYA Scrub",
      price: SCRUB_BASE_PRICE,
      category: "scrubs",
      scrubType: selectedType!,
      color: selectedColor!,
      size: selectedSize!,
    });

    toast({
      title: "Added to cart",
      description: `${selectedType} · ${selectedColor} · Size ${selectedSize}`,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background mesh-bg">
      <SEO title="KNYA Premium Scrubs — DH-KUSMS Medico Essentials" description="Comfortable KNYA scrubs for clinical postings — choose your style, color, and size. Delivered across Nepal from DH-KUSMS Medico Essentials." path="/scrubs" />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-600/10 to-transparent" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-6">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass border border-violet-500/30 px-4 py-1.5">
                <Shirt className="h-4 w-4 text-violet-400" />
                <span className="text-xs font-display font-bold tracking-[0.2em] uppercase text-violet-300">
                  New Arrival
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                Premium KNYA Scrubs
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
                Comfort for those long clinical shifts.
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
                <div className="sticky top-24 rounded-3xl border border-border/40 glass p-8 relative overflow-hidden aspect-square flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-30 transition-colors duration-500"
                    style={{
                      background: selectedColor
                        ? `radial-gradient(circle at center, ${
                            scrubColors.find((c) => c.name === selectedColor)
                              ?.hex
                          }, transparent 70%)`
                        : "radial-gradient(circle at center, hsl(var(--primary) / 0.3), transparent 70%)",
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <Shirt
                      className="mx-auto h-40 w-40 md:h-56 md:w-56"
                      style={{
                        color: selectedColor
                          ? scrubColors.find((c) => c.name === selectedColor)
                              ?.hex
                          : "hsl(var(--muted-foreground))",
                      }}
                      strokeWidth={1.2}
                    />
                    <p className="mt-6 font-display text-2xl font-bold text-foreground">
                      KNYA Scrub
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedType || "Choose your style"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="lg:col-span-3 space-y-10">
                {/* Type */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                      1. Choose Type
                    </h2>
                    {selectedType && (
                      <span className="text-xs text-violet-400 font-medium">
                        {selectedType}
                      </span>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {scrubTypes.map((type) => {
                      const active = selectedType === type;
                      return (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                            active
                              ? "border-violet-500 bg-violet-500/10 shadow-glow-soft"
                              : "border-border/50 bg-card/40 hover:border-violet-500/40 hover:bg-card/60"
                          }`}
                        >
                          {active && (
                            <div className="absolute top-3 right-3 h-5 w-5 rounded-full bg-violet-500 flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          )}
                          <p className="font-display font-bold text-sm text-foreground">
                            {type}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                      2. Choose Color
                    </h2>
                    {selectedColor && (
                      <span className="text-xs text-violet-400 font-medium">
                        {selectedColor}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {scrubColors.map((color) => {
                      const active = selectedColor === color.name;
                      return (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          title={color.name}
                          className={`group relative h-12 w-12 rounded-full transition-all duration-300 ${
                            active
                              ? "ring-2 ring-violet-400 ring-offset-4 ring-offset-background scale-110"
                              : "ring-1 ring-border/50 hover:scale-105"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={color.name}
                        >
                          {active && (
                            <Check className="absolute inset-0 m-auto h-5 w-5 text-white drop-shadow-md" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-xl font-bold text-foreground tracking-tight">
                      3. Choose Size
                    </h2>
                    {selectedSize && (
                      <span className="text-xs text-violet-400 font-medium">
                        Size {selectedSize}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {scrubSizes.map((size) => {
                      const active = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[56px] rounded-full border px-5 py-2.5 font-display font-bold text-sm transition-all duration-300 ${
                            active
                              ? "border-violet-500 bg-violet-500 text-white shadow-glow-soft"
                              : "border-border/60 bg-card/40 text-foreground hover:border-violet-500/50"
                          }`}
                        >
                          {size}
                        </button>
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
                    className="gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:opacity-90 text-white disabled:opacity-40 disabled:cursor-not-allowed"
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
