import { Minus, Plus, X, ShoppingCart, MessageCircle, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const WHATSAPP_NUMBER = "917023889974";

const CartSheet = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const categoryLabels: Record<string, string> = {
      fastrack: "📚 FastTrack Books",
      coaching: "📝 Handwritten Notes",
      secondhand: "📖 Second Hand Books",
      instrument: "🩺 Medical Instruments",
      scrubs: "👕 Premium Scrubs",
    };

    // Group items by category
    const groupedItems = items.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {} as Record<string, typeof items>);

    let message = `🛒 *New Order from DH-KUSMS Medico Essentials*\n\n`;

    Object.entries(groupedItems).forEach(([category, categoryItems]) => {
      message += `${categoryLabels[category] || category}\n`;
      categoryItems.forEach((item, index) => {
        const priceText = item.price ? ` - NRS ${(item.price * item.quantity).toLocaleString()}` : "";
        const coachingText = item.coachingName ? ` (${item.coachingName})` : "";
        if (item.category === "scrubs") {
          const variants = [item.scrubType, item.color, item.size ? `Size: ${item.size}` : null]
            .filter(Boolean)
            .join(", ");
          message += `${index + 1}. ${item.name}${variants ? ` (${variants})` : ""} x${item.quantity}${priceText}\n`;
        } else {
          message += `${index + 1}. ${item.name}${coachingText} x${item.quantity}${priceText}\n`;
        }
      });
      message += "\n";
    });

    if (totalPrice > 0) {
      message += `💰 *Total: NRS ${totalPrice.toLocaleString()}*\n\n`;
    }

    message += `Please confirm my order!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
            <div>
              <p className="text-lg font-medium text-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">
                Add some items to get started
              </p>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      {item.coachingName && (
                        <p className="text-xs text-muted-foreground">
                          {item.coachingName}
                        </p>
                      )}
                      {item.category === "scrubs" && (
                        <p className="text-xs text-muted-foreground">
                          {[item.scrubType, item.color, item.size && `Size: ${item.size}`]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                      {item.price && (
                        <p className="text-sm text-primary font-semibold">
                          NRS {item.price.toLocaleString()}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4">
              <Separator />
              
              {totalPrice > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-foreground">Total</span>
                  <span className="text-xl font-bold text-primary">
                    NRS {totalPrice.toLocaleString()}
                  </span>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={clearCart}
                >
                  <Trash2 className="h-4 w-4" />
                  Clear Cart
                </Button>
                <Button
                  className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
