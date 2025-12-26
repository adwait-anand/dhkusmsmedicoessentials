import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubjectCard from "@/components/SubjectCard";
import CartSummary from "@/components/CartSummary";
import Footer from "@/components/Footer";
import { subjects } from "@/data/subjects";

const Index = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleRemove = (id: string) => {
    setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
  };

  const handleClearAll = () => {
    setSelectedIds([]);
  };

  const selectedSubjects = useMemo(
    () => subjects.filter((subject) => selectedIds.includes(subject.id)),
    [selectedIds]
  );

  const totalPrice = useMemo(
    () => selectedSubjects.reduce((sum, subject) => sum + subject.price, 0),
    [selectedSubjects]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={selectedIds.length} totalPrice={totalPrice} />
      
      <main>
        <HeroSection />

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Choose Your Subjects
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Select the notes you need for your NEET PG preparation. 
                Get 10% off when you select 5 or more subjects!
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  {subjects.map((subject, index) => (
                    <SubjectCard
                      key={subject.id}
                      subject={subject}
                      isSelected={selectedIds.includes(subject.id)}
                      onToggle={handleToggle}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <CartSummary
                  selectedSubjects={selectedSubjects}
                  totalPrice={totalPrice}
                  onRemove={handleRemove}
                  onClearAll={handleClearAll}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
