import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeOptionCard from "@/components/HomeOptionCard";
import Footer from "@/components/Footer";
import { NotebookPen, BookOpen, BookMarked } from "lucide-react";

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
                Choose from our premium collection of handwritten notes, MBBS FastTrack books, or second hand textbooks.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <HomeOptionCard
                title="Handwritten Notes"
                description="Premium notes from 7 top coaching institutes"
                icon={NotebookPen}
                to="/handwritten-notes"
                gradient="from-blue-500 to-indigo-600"
                index={0}
              />
              <HomeOptionCard
                title="MBBS FastTrack Books"
                description="Quick revision books for all MBBS years"
                icon={BookOpen}
                to="/fastrack-books"
                gradient="from-emerald-500 to-teal-600"
                index={1}
              />
              <HomeOptionCard
                title="Second Hand Books"
                description="Quality used textbooks at affordable prices"
                icon={BookMarked}
                to="/second-hand-books"
                gradient="from-amber-500 to-orange-600"
                index={2}
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
