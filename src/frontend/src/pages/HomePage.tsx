import { usePublications } from "@/hooks/useBackend";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getPubTypeLabel } from "@/types";
import type { Publication } from "@/types";
import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    delay,
  },
});

const PLACEHOLDER_PUBS: Pick<
  Publication,
  "title" | "publisher" | "year" | "pubType"
>[] = [
  {
    title: "Cognitive Frameworks in Modern Educational Research",
    publisher: "Oxford Academic Press",
    year: BigInt(2021),
    pubType: { "#book": null },
  },
  {
    title: "Interdisciplinary Methods in Humanities Scholarship",
    publisher: "Cambridge University Press",
    year: BigInt(2019),
    pubType: { "#book": null },
  },
  {
    title: "The Philosophy of Language and Cultural Identity",
    publisher: "Routledge",
    year: BigInt(2017),
    pubType: { "#book": null },
  },
  {
    title: "Epistemological Shifts in Post-Colonial Studies",
    publisher: "SAGE Publications",
    year: BigInt(2023),
    pubType: { "#paper": null },
  },
];

function FeaturedPublications() {
  const { data: pubs, isLoading } = usePublications();
  const sectionRef = useScrollReveal();

  const displayPubs =
    pubs && pubs.length > 0 ? pubs.slice(0, 4) : PLACEHOLDER_PUBS;

  return (
    <section
      className="py-20 px-6 bg-muted/20"
      data-ocid="home.publications.section"
    >
      <div
        className="max-w-6xl mx-auto"
        ref={sectionRef as React.RefObject<HTMLDivElement>}
      >
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
            Selected Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Featured Publications
          </h2>
          <div className="w-12 h-0.5 bg-secondary mt-4" />
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 h-48 animate-pulse border border-border"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPubs.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.1)}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-smooth group"
              >
                <div className="w-16 h-20 bg-muted rounded flex items-center justify-center border border-border">
                  <BookOpen className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-secondary-foreground bg-secondary/20 border border-secondary/30 px-2 py-0.5 rounded-full w-fit">
                  {getPubTypeLabel(p.pubType)}
                </span>
                <h3 className="font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {p.publisher} · {String(p.year)}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border-b border-primary/40 hover:border-primary pb-0.5"
            data-ocid="home.view_all_publications.link"
          >
            View All Publications <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const bioRef = useScrollReveal();
  const quoteRef = useScrollReveal();

  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1f3d 0%, #1a3057 40%, #2d4a7a 100%)",
        }}
        data-ocid="home.hero.section"
      >
        <div className="absolute inset-0 bg-background/88" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-secondary-foreground mb-6"
          >
            Scholar · Researcher · Author
          </motion.div>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-foreground mb-6 tracking-tight"
          >
            Dr. I.C. Sharma
          </motion.h1>
          <motion.p
            {...fadeUp(0.22)}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-body"
          >
            Advancing knowledge through rigorous scholarship, interdisciplinary
            research, and a lifelong commitment to academic excellence.
          </motion.p>
          <motion.div {...fadeUp(0.34)} className="flex flex-wrap gap-4">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-smooth shadow-sm"
              data-ocid="home.hero.publications_cta"
            >
              <BookOpen className="w-4 h-4" />
              Explore My Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-secondary/60 text-foreground px-7 py-3 rounded-lg font-medium text-sm hover:bg-secondary/10 transition-smooth"
              data-ocid="home.hero.contact_cta"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Featured Publications */}
      <FeaturedPublications />

      {/* Biography */}
      <section className="py-20 px-6" data-ocid="home.biography.section">
        <div className="max-w-6xl mx-auto">
          <div
            ref={bioRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
                About the Scholar
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Life Devoted to Learning
              </h2>
              <div className="w-12 h-0.5 bg-secondary mb-8" />
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                <p>
                  Dr. I.C. Sharma is a distinguished scholar whose career spans
                  over three decades of groundbreaking research in the
                  humanities and social sciences. A professor emeritus at a
                  leading research university, Dr. Sharma has shaped the
                  intellectual landscape of his field through seminal
                  publications and mentorship.
                </p>
                <p>
                  His interdisciplinary approach bridges classical scholarship
                  with contemporary methodologies, producing insights that
                  resonate across academic disciplines and cultural boundaries.
                </p>
                <p>
                  Beyond research, Dr. Sharma remains a passionate educator who
                  believes that knowledge flourishes when shared generously.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border-b border-primary/40 hover:border-primary pb-0.5"
                  data-ocid="home.biography.about_link"
                >
                  Full Biography <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl" />
                <div
                  className="relative w-72 h-96 rounded-xl shadow-lg border border-border flex flex-col items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(160deg, #0f1f3d 0%, #1a3057 60%, #2d4a7a 100%)",
                  }}
                  aria-label="Dr. I.C. Sharma — Academic Portrait"
                >
                  <span
                    className="font-display font-bold text-5xl tracking-widest select-none"
                    style={{ color: "rgba(255,255,255,0.18)", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    ICS
                  </span>
                  <span
                    className="mt-4 font-display font-semibold text-sm tracking-[0.25em] uppercase"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Dr. I.C. Sharma
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-5 py-3 shadow-md">
                  <p className="text-xs text-muted-foreground">Active since</p>
                  <p className="font-display text-xl font-bold text-foreground">
                    1988
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 bg-primary" data-ocid="home.quote.section">
        <div className="max-w-4xl mx-auto">
          <div
            ref={quoteRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal text-center"
          >
            <div
              className="text-6xl font-display text-primary-foreground/20 leading-none mb-4"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="font-display text-2xl md:text-3xl italic font-medium text-primary-foreground leading-relaxed">
              The pursuit of knowledge is not merely an intellectual endeavour;
              it is the most humane act of which we are capable.
            </blockquote>
            <footer className="mt-6 text-sm font-body text-primary-foreground/70">
              — Dr. I.C. Sharma
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
