import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoachingCard from "@/components/CoachingCard";
import Footer from "@/components/Footer";
import { coachings } from "@/data/coachings";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} totalPrice={0} />

      <main>
        <HeroSection />

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Choose Your Coaching
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Select a coaching institute to view their NEET PG notes and prices.
                We offer notes from 6 top coaching institutes.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coachings.map((coaching, index) => (
                <CoachingCard key={coaching.id} coaching={coaching} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
