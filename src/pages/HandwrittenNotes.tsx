import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectSearch from "@/components/SubjectSearch";
import { ArrowLeft, NotebookPen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface CoachingTile {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  subjectCount: number;
}

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

const HandwrittenNotes = () => {
  const [tiles, setTiles] = useState<CoachingTile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstitutes = async () => {
      const { data, error } = await supabase
        .from("coaching_notes")
        .select("coaching_institute, subject");

      if (error || !data) {
        setLoading(false);
        return;
      }

      const grouped = new Map<string, number>();
      data.forEach((row) => {
        grouped.set(row.coaching_institute, (grouped.get(row.coaching_institute) || 0) + 1);
      });

      const result: CoachingTile[] = Array.from(grouped.entries()).map(([name, count]) => {
        const meta = COACHING_META[name] || { icon: "📝", color: "from-gray-500 to-gray-600", description: "Coaching notes" };
        return {
          id: encodeURIComponent(name),
          name,
          icon: meta.icon,
          color: meta.color,
          description: meta.description,
          subjectCount: count,
        };
      });

      setTiles(result);
      setLoading(false);
    };

    fetchInstitutes();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
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

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Choose Your Coaching
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Select a coaching institute to view their NEET PG notes and prices.
                {!loading && ` We offer notes from ${tiles.length} top coaching institutes.`}
              </p>
            </div>

            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-48 rounded-2xl bg-muted animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tiles.map((tile, index) => (
                  <Link
                    key={tile.id}
                    to={tile.name === "Rapid Revision" ? "/rapid-revision" : `/coaching/${tile.id}`}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                    <div className="relative">
                      <div className="mb-4 flex items-center justify-between">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${tile.color} text-2xl shadow-lg`}>
                          {tile.icon}
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                      <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">{tile.name}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{tile.description}</p>
                      <div className="flex items-center border-t border-border pt-4">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-semibold text-card-foreground">{tile.subjectCount}</span> subjects available
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HandwrittenNotes;
