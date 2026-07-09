import { usePublications } from "@/hooks/useBackend";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight,
  BookOpen,
  Compass,
  ExternalLink,
  Globe,
  Mail,
  Milestone,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    delay,
  },
});

export default function HomePage() {
  const bioRef = useScrollReveal();
  const quoteRef = useScrollReveal();

  // Fetch publications from backend actor
  const { data: publications, isLoading } = usePublications();

  // Filter books
  const books =
    publications?.filter((p) => {
      const typeStr =
        typeof p.pubType === "object"
          ? Object.keys(p.pubType)[0]
          : String(p.pubType);
      return typeStr.toLowerCase().includes("book");
    }) || [];

  return (
    <div
      data-ocid="home.page"
      className="relative min-h-screen bg-background overflow-hidden selection:bg-accent/30 selection:text-foreground"
    >
      {/* Aurora Ambient Globs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div
          className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/20 blur-[150px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-[40%] -left-36 w-[450px] h-[450px] rounded-full bg-accent/5 dark:bg-accent/15 blur-[120px] animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-24 right-12 w-[500px] h-[500px] rounded-full bg-secondary/8 dark:bg-secondary/15 blur-[130px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "4s" }}
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-[92vh] flex items-center pt-24 px-6 md:px-12 border-b border-border/40 z-10"
        data-ocid="home.hero.section"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs font-bold tracking-wider uppercase border border-border"
            >
              <Milestone className="w-3.5 h-3.5 text-accent" />
              Pioneering Polar Cartography
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                {...fadeUp(0.1)}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-foreground tracking-tight"
              >
                Dr. I.C. Sharma
              </motion.h1>
              <motion.h2
                {...fadeUp(0.2)}
                className="font-display text-xl md:text-2xl italic text-accent font-medium"
              >
                First Human to Complete a Ph.D. on Antarctica
              </motion.h2>
            </div>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-body"
            >
              A legendary glaciologist, cartographer, and explorer who dedicated
              six decades to deciphering the maps, geography, and deep climate
              memory locked within the polar ice caps.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-sm hover:scale-[1.02] transition-smooth shadow-lg hover:shadow-primary/25"
                data-ocid="home.hero.about_cta"
              >
                <Globe className="w-4 h-4" />
                Read Journey
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-card hover:bg-muted border border-border text-foreground px-8 py-4 rounded-lg font-bold text-sm hover:scale-[1.02] transition-smooth shadow-sm"
                data-ocid="home.hero.contact_cta"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Link>
            </motion.div>
          </div>

          {/* Compass / Globe Decorative Element */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center rounded-full bg-card/65 backdrop-blur-md border border-border shadow-xl letter-shadow"
            >
              {/* Rotating compass grid */}
              <div className="absolute inset-4 rounded-full border border-dashed border-border/80 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-10 rounded-full border border-border/40 pointer-events-none" />

              <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 z-10">
                <Compass className="w-16 h-16 text-accent animate-pulse" />
                <span className="font-display font-bold text-4xl tracking-widest text-foreground select-none">
                  ANTARCTICA
                </span>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Latitude: 90.0000° S
                </p>
                <div className="w-16 h-[2px] bg-accent" />
                <span className="text-[11px] max-w-[200px] text-muted-foreground leading-normal">
                  Pioneered geodesic contours of the Ellsworth Mountains
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics / Showcase Bar */}
      <section className="py-12 bg-card/50 backdrop-blur-sm border-b border-border/40 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: "1st", label: "Polar Geography PhD" },
            { metric: "14 Mo", label: "Antarctic Winter-Over" },
            { metric: "12", label: "Major Polar Surveys" },
            { metric: "95 Yrs", label: "Lifetime of Learning" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center space-y-1"
            >
              <div className="font-display text-3xl md:text-5xl font-black text-primary">
                {stat.metric}
              </div>
              <div className="text-xs md:text-sm font-semibold text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Book Showcase Section */}
      <section
        className="py-24 px-6 relative z-10 bg-background/30"
        data-ocid="home.books.section"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Major Literary Monographs
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Explore & Purchase Books
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
            <p className="text-muted-foreground font-body">
              Seminal works detailing polar navigation, historical cartography
              records, and decades of surveys at the bottom of the world.
              Available directly from academic publishers.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="h-96 rounded-xl bg-card animate-pulse border border-border"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {books.map((book, idx) => (
                <motion.div
                  key={book.id.toString()}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group relative flex flex-col md:flex-row bg-card rounded-2xl border border-border hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Left edge spine design / luxury theme */}
                  <div className="w-full md:w-[40%] bg-gradient-to-br from-primary to-primary/90 flex flex-col items-center justify-center p-8 text-primary-foreground min-h-[250px] relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-accent/70" />{" "}
                    {/* Gold book spine binding effect */}
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />
                    <Compass className="w-12 h-12 text-accent/90 mb-4 group-hover:rotate-45 transition-smooth" />
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2">
                      Monograph
                    </div>
                    <div className="text-center font-display font-semibold text-lg line-clamp-3 px-2">
                      {book.title}
                    </div>
                    <div className="absolute bottom-4 text-xs font-bold text-white/50">
                      Published {book.year.toString()}
                    </div>
                  </div>

                  {/* Right side content */}
                  <div className="flex-1 p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-accent uppercase tracking-wider">
                        <span>{book.publisher}</span>
                        <span>ISBN: {book.isbn}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-body line-clamp-4">
                        {book.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={book.purchaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-5 py-3 rounded-lg text-sm transition-smooth shadow-sm hover:scale-[1.01]"
                      >
                        <BookOpen className="w-4 h-4" />
                        Purchase Edition
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Narrative Section: Antarctic Geographer Legacy */}
      <section
        className="py-24 px-6 border-t border-border/40 bg-card/25"
        data-ocid="home.biography.section"
      >
        <div className="max-w-6xl mx-auto">
          <div
            ref={bioRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Explorer Profile
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Mapping the Frozen Wilderness
              </h2>
              <div className="w-12 h-1 bg-accent" />

              <div className="space-y-4 text-muted-foreground leading-relaxed font-body text-base md:text-lg">
                <p>
                  At a time when Antarctic travel was reserved for military
                  scouts and major superpowers, Dr. Sharma set sail from India
                  to join coordinates mapping efforts at the bottom of the
                  world.
                </p>
                <p>
                  His mapping of the Ellsworth range and glacier movements
                  clarified how the continent's ice loads relate to sea-level
                  variables. Now at 95, his focus is ensuring early mapping
                  records are preserved for research institutions worldwide.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors border-b-2 border-primary/20 hover:border-primary pb-1"
                  data-ocid="home.biography.about_link"
                >
                  Full Scientific Biography <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Geographical Map Background Overlay Frame */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-accent/5 rounded-2xl border border-dashed border-accent/25" />
                <div
                  className="relative h-96 rounded-xl shadow-lg border border-border flex flex-col items-center justify-between p-8 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground text-center"
                  aria-label="Antarctic Coordinates Record"
                >
                  <Compass className="w-16 h-16 text-accent opacity-90 animate-spin-slow" />

                  <div className="space-y-2">
                    <span className="font-display text-7xl font-black block text-accent tracking-tighter">
                      1962
                    </span>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-75">
                      First Antarctic PhD Conferred
                    </span>
                  </div>

                  <div className="w-full h-px bg-white/10" />

                  <p className="text-xs italic max-w-xs opacity-80 font-body">
                    "Glaciological Geomorphology of Polar Ice Sheets" — Royal
                    Geographical Society Archives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="py-24 px-6 bg-primary text-primary-foreground relative"
        data-ocid="home.quote.section"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            ref={quoteRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal text-center space-y-6"
          >
            <div
              className="text-7xl font-display text-accent leading-none mb-2"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="font-display text-2xl md:text-4xl italic font-semibold leading-relaxed px-4 md:px-12">
              To measure the glacier is to measure the silent heart of the
              Earth. If we lose the memory of the ice, we lose the map of our
              future.
            </blockquote>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
            <footer className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent">
              — Dr. I.C. Sharma (Polar Keynote Address, 1990)
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
