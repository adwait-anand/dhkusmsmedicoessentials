import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

const instrumentsList = [
  { id: "he-pencil", name: "H/E Pencil (Staedtler)", icon: "✏️" },
  { id: "goniometer", name: "Goniometer", icon: "📐" },
  { id: "stethoscope", name: "Stethoscope", icon: "🩺" },
  { id: "bp-monitor", name: "BP Monitor (Sphygmomanometer)", icon: "💉" },
];

const MedicalInstruments = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleToggle = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleWhatsAppOrder = () => {
    const selectedNames = instrumentsList
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => item.name);

    const message = `Hi, I want to order the following medical instruments:\n\n${selectedNames.map((name, i) => `${i + 1}. ${name}`).join("\n")}`;

    const phoneNumber = "9779818418646";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-16">
        <div className="container relative z-10 mx-auto px-4">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Stethoscope className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Medical Instruments
              </h1>
              <p className="mt-1 text-muted-foreground">
                Select the instruments you need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments List */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Select items and order via WhatsApp
            </p>
          </div>

          <div className="space-y-4">
            {instrumentsList.map((item) => (
              <Card
                key={item.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedItems.includes(item.id)
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border"
                }`}
                onClick={() => handleToggle(item.id)}
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onCheckedChange={() => handleToggle(item.id)}
                    className="h-5 w-5"
                  />
                  <span className="text-2xl">{item.icon}</span>
                  <span className="flex-1 font-medium text-foreground">
                    {item.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected count */}
          {selectedItems.length > 0 && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {selectedItems.length} item{selectedItems.length > 1 ? "s" : ""}{" "}
              selected
            </div>
          )}
        </div>
      </section>

      {/* Fixed WhatsApp Order Button */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
          <Button
            onClick={handleWhatsAppOrder}
            size="lg"
            className="gap-2 bg-green-600 px-6 py-6 text-lg font-semibold text-white shadow-xl hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Order {selectedItems.length} Item{selectedItems.length > 1 ? "s" : ""} on WhatsApp
          </Button>
        </div>
      )}
    </div>
  );
};

export default MedicalInstruments;
