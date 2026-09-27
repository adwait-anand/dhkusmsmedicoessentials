import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import scrubsBanner from "@/assets/home/scrubs-banner.webp";
import notesBanner from "@/assets/home/notes-banner.png";
import booksBanner from "@/assets/home/books-banner.png";

const slides = [
  { image: scrubsBanner, alt: "Medical professionals wearing premium KNYA scrubs", headline: "Ready for every round", to: "/scrubs" },
  { image: notesBanner, alt: "Color printed PrepLadder and Marrow medical notes", headline: "Notes built for better results", to: "/handwritten-notes" },
  { image: booksBanner, alt: "FastTrack and standard MBBS medical books", headline: "Everything for your next exam", to: "/fastrack-books" },
];

const tickerItems = ["PREMIUM NOTES", "SCRUBS", "FASTTRACK BOOKS", "CLINICAL MANUALS", "INSTRUMENTS"];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <section aria-label="Featured collections">
      <div className="group relative w-full overflow-hidden bg-muted">
        <div className="relative aspect-[16/9] min-h-[260px] w-full max-h-[720px] md:aspect-[1672/941]">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"}`}
              aria-hidden={index !== activeSlide}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-carousel-overlay to-transparent" />

          <div className="absolute inset-x-4 bottom-7 z-10 flex flex-col items-center text-center md:bottom-10">
            <h1 className="max-w-3xl font-display text-2xl font-black uppercase leading-tight text-carousel-foreground drop-shadow-lg md:text-4xl lg:text-5xl">
              {slides[activeSlide].headline}
            </h1>
            <Button asChild size="lg" className="mt-3 min-w-36 rounded-full font-display font-bold uppercase shadow-card md:mt-5">
              <Link to={slides[activeSlide].to}>Shop Now</Link>
            </Button>
          </div>

          <Button variant="secondary" size="icon" onClick={showPrevious} aria-label="Previous slide" className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/75 opacity-100 backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="icon" onClick={showNext} aria-label="Next slide" className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/75 opacity-100 backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100">
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-7 bg-carousel-foreground" : "w-2 bg-carousel-foreground/50"}`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="ticker-shell overflow-hidden bg-ticker py-3 text-ticker-foreground" aria-label={tickerItems.join(", ")}>
        <div className="ticker-track flex w-max items-center whitespace-nowrap font-display text-xs font-black uppercase md:text-sm">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {tickerItems.map((item) => <span key={`${group}-${item}`} className="mx-5 md:mx-8">{item} <span className="ml-10 md:ml-16">•</span></span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
