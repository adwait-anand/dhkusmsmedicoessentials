import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoachingCard from "@/components/CoachingCard";
import SubjectSearch from "@/components/SubjectSearch";
import { coachings } from "@/data/coachings";
import { ArrowLeft, NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";

const HandwrittenNotes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} totalPrice={0} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-12 md:py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
                <NotebookPen className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                  Handwritten Notes
                </h1>
                <p className="text-primary-foreground/80">
                  Premium NEET PG notes from top coaching institutes
                </p>
              </div>
            </div>

            {/* Subject Search */}
            <SubjectSearch />
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.5C672 45.7 768 56.3 864 58.8C960 61.3 1056 55.7 1152 48.5C1248 41.3 1344 32.7 1392 28.3L1440 24V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Coaching Cards Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Choose Your Coaching
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Select a coaching institute to view their NEET PG notes and prices.
                We offer notes from {coachings.length} top coaching institutes.
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

export default HandwrittenNotes;
