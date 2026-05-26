import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useTimeline } from "@/hooks/useBackend";
import { getTimelineCategoryLabel } from "@/types";
import type { TimelineCategory, TimelineEntry } from "@/types";
import { BookOpen, Briefcase, Trophy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FilterCategory = "all" | "career" | "publication" | "award";

function getCategoryKey(c: TimelineCategory): FilterCategory {
  if ("#career" in c) return "career";
  if ("#publication" in c) return "publication";
  return "award";
}

const CATEGORY_CONFIG: Record<
  FilterCategory,
  { label: string; icon: React.ReactNode; badgeClass: string }
> = {
  all: { label: "All", icon: null, badgeClass: "" },
  career: {
    label: "Career",
    icon: <Briefcase size={12} />,
    badgeClass:
      "bg-primary/15 text-primary border-primary/30 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/40",
  },
  publication: {
    label: "Publication",
    icon: <BookOpen size={12} />,
    badgeClass:
      "bg-accent/20 text-accent-foreground border-accent/40 dark:bg-accent/25 dark:border-accent/50",
  },
  award: {
    label: "Award",
    icon: <Trophy size={12} />,
    badgeClass:
      "bg-secondary/20 text-secondary-foreground border-secondary/40 dark:bg-secondary/25 dark:border-secondary/50",
  },
};

const SAMPLE_ENTRIES: TimelineEntry[] = [
  {
    id: 1n,
    year: 2024n,
    title: "Appointed Full Professor",
    description:
      "Promoted to Full Professor of Computational Neuroscience at the Indian Institute of Technology, Delhi — a recognition of three decades of distinguished scholarship.",
    category: { "#career": null },
  },
  {
    id: 2n,
    year: 2023n,
    title: "Cognitive Systems: A Modern Synthesis (3rd Ed.)",
    description:
      "Third edition of the landmark textbook, adopted across 40+ universities worldwide. Expanded coverage of neural oscillations and predictive coding frameworks.",
    category: { "#publication": null },
  },
  {
    id: 3n,
    year: 2022n,
    title: "Fellow — Indian National Science Academy",
    description:
      "Inducted as Fellow of the Indian National Science Academy for sustained contribution to neuroscience and mathematical modeling of biological systems.",
    category: { "#award": null },
  },
  {
    id: 4n,
    year: 2021n,
    title: "Principal Investigator — SERB CRG Grant",
    description:
      "Awarded a three-year Core Research Grant from the Science and Engineering Research Board to investigate attentional mechanisms in cortical hierarchies.",
    category: { "#career": null },
  },
  {
    id: 5n,
    year: 2019n,
    title: "Neural Dynamics of Working Memory (Monograph)",
    description:
      "Monograph synthesising 15 years of experimental and computational work on the prefrontal-parietal network underlying working memory maintenance.",
    category: { "#publication": null },
  },
  {
    id: 6n,
    year: 2018n,
    title: "Shanti Swarup Bhatnagar Prize",
    description:
      "Received the Shanti Swarup Bhatnagar Prize in Biological Sciences — the highest science honour in India — for contributions to computational cognition.",
    category: { "#award": null },
  },
  {
    id: 7n,
    year: 2015n,
    title: "Associate Professor, IIT Delhi",
    description:
      "Promoted to Associate Professor following successful tenure review, recognised for curriculum innovation and high-impact research output.",
    category: { "#career": null },
  },
  {
    id: 8n,
    year: 2012n,
    title: "Handbook of Computational Neuroscience",
    description:
      "Edited volume bringing together 28 contributors to survey the state of the field; widely cited as a graduate entry point to the discipline.",
    category: { "#publication": null },
  },
  {
    id: 9n,
    year: 2009n,
    title: "Assistant Professor, IIT Delhi",
    description:
      "Joined the Department of Cognitive Science at IIT Delhi following a postdoctoral fellowship at the Gatsby Computational Neuroscience Unit, UCL.",
    category: { "#career": null },
  },
  {
    id: 10n,
    year: 2007n,
    title: "PhD — Computational Neuroscience",
    description:
      "Awarded Doctor of Philosophy from IISc Bangalore under the supervision of Prof. R. Narasimhan. Thesis: 'Attractor Dynamics in Cortical Memory Circuits'.",
    category: { "#career": null },
  },
];

function TimelineEntryCard({
  entry,
  index,
  isLeft,
}: {
  entry: TimelineEntry;
  index: number;
  isLeft: boolean;
}) {
  const catKey = getCategoryKey(entry.category);
  const config = CATEGORY_CONFIG[catKey];

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
      className={`relative flex w-full ${
        isLeft ? "md:justify-start md:pr-[52%]" : "md:justify-end md:pl-[52%]"
      }`}
      data-ocid={`timeline.item.${index + 1}`}
    >
      {/* Dot on the central line */}
      <span className="absolute left-1/2 top-7 hidden -translate-x-1/2 md:block">
        <span className="block h-4 w-4 rounded-full border-2 border-primary bg-background shadow-sm" />
      </span>

      {/* Mobile dot */}
      <span className="absolute left-0 top-7 block -translate-x-1/2 md:hidden">
        <span className="block h-3 w-3 rounded-full border-2 border-primary bg-background" />
      </span>

      <div className="group relative ml-6 w-full max-w-md rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:ml-0">
        <div className="mb-2 flex items-center gap-2 flex-wrap">
          <span className="font-display text-2xl font-bold text-primary">
            {Number(entry.year)}
          </span>
          <Badge
            variant="outline"
            className={`flex items-center gap-1 text-xs capitalize ${config.badgeClass}`}
          >
            {config.icon}
            {getTimelineCategoryLabel(entry.category)}
          </Badge>
        </div>
        <h3 className="mb-1 font-display text-base font-semibold text-foreground">
          {entry.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TimelinePage() {
  const { data: entries, isLoading } = useTimeline();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const displayEntries = (
    entries && entries.length > 0 ? entries : SAMPLE_ENTRIES
  ).sort((a, b) => Number(b.year) - Number(a.year));

  const filtered =
    activeFilter === "all"
      ? displayEntries
      : displayEntries.filter(
          (e) => getCategoryKey(e.category) === activeFilter,
        );

  const filters: FilterCategory[] = ["all", "career", "publication", "award"];

  return (
    <div data-ocid="timeline.page" className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm uppercase tracking-widest text-accent-foreground font-body"
          >
            Academic Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold text-foreground md:text-5xl"
          >
            Timeline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-muted-foreground font-body leading-relaxed"
          >
            Four decades of scholarship, research milestones, and recognition
            spanning institutions across India and the world.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-[64px] z-10 bg-card/80 backdrop-blur border-b border-border px-6 py-3">
        <div className="mx-auto flex max-w-4xl items-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              data-ocid={`timeline.filter.${f}`}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f !== "all" && CATEGORY_CONFIG[f].icon}
              {f === "all" ? "All" : CATEGORY_CONFIG[f].label}
            </button>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {isLoading ? (
            <div className="space-y-8" data-ocid="timeline.loading_state">
              {["sk1", "sk2", "sk3", "sk4", "sk5"].map((k) => (
                <Skeleton key={k} className="h-32 w-full max-w-md rounded-xl" />
              ))}
            </div>
          ) : (
            <>
              {/* Central vertical line (desktop) */}
              <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" />

              {/* Mobile left line */}
              <div className="absolute inset-y-0 left-6 w-px bg-border md:hidden" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative flex flex-col gap-10"
                >
                  {filtered.length === 0 ? (
                    <div
                      className="py-20 text-center text-muted-foreground"
                      data-ocid="timeline.empty_state"
                    >
                      No entries for this category.
                    </div>
                  ) : (
                    filtered.map((entry, i) => (
                      <TimelineEntryCard
                        key={String(entry.id)}
                        entry={entry}
                        index={i}
                        isLeft={i % 2 === 0}
                      />
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
