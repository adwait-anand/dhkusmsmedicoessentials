import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import SubjectCard from "@/components/SubjectCard";
import CartSummary from "@/components/CartSummary";
import Footer from "@/components/Footer";
import { getCoachingById } from "@/data/coachings";
import { Subject } from "@/data/coachings";

const CoachingNotes = () => {
  const { coachingId } = useParams<{ coachingId: string }>();
  const coaching = getCoachingById(coachingId || "");
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
    () => (coaching?.subjects || []).filter((subject) => selectedIds.includes(subject.id)),
    [selectedIds, coaching]
  );

  const totalPrice = useMemo(
    () => selectedSubjects.reduce((sum, subject) => sum + subject.price, 0),
    [selectedSubjects]
  );

  if (!coaching) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Coaching not found</h1>
        <Link to="/" className="text-primary hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={selectedIds.length} totalPrice={totalPrice} />

      <main>
        {/* Coaching Header */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${coaching.color} py-12 md:py-16`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Coachings
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl backdrop-blur-sm">
                {coaching.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
                  {coaching.name} Notes
                </h1>
                <p className="text-white/80">{coaching.description}</p>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 30L60 27C120 24 240 18 360 18C480 18 600 24 720 27C840 30 960 30 1080 27C1200 24 1320 18 1380 15L1440 12V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Select Your Subjects
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Choose the notes you need from {coaching.name}. Get 10% off when you select 5 or more!
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  {coaching.subjects.map((subject, index) => (
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
                  coachingName={coaching.name}
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

export default CoachingNotes;
