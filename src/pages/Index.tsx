import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeOptionCard from "@/components/HomeOptionCard";
import Footer from "@/components/Footer";
import { NotebookPen, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} totalPrice={0} />

      <main>
        <HeroSection />

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                What Are You Looking For?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Choose from our premium collection of handwritten notes or MBBS Fastrack revision books.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <HomeOptionCard
                title="Handwritten Notes"
                description="Premium NEET PG notes from 7 top coaching institutes with subject-wise pricing"
                icon={NotebookPen}
                to="/handwritten-notes"
                gradient="from-blue-500 to-indigo-600"
                index={0}
              />
              <HomeOptionCard
                title="MBBS Fastrack Books"
                description="Quick revision books for all MBBS years - First Year to Final Year"
                icon={BookOpen}
                to="/fastrack-books"
                gradient="from-emerald-500 to-teal-600"
                index={1}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
