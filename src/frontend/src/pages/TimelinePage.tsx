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
    year: 2025n,
    title: "Head of Geography Department, Army Cadet College",
    description:
      "Presently serving as the Head of the Geography Department at the Army Cadet College (ACC) Wing of the Indian Military Academy (IMA), Dehradun.",
    category: { "#career": null },
  },
  {
    id: 2n,
    year: 2024n,
    title: "Uttarakhand State Recipient",
    description:
      "Honored with Uttarakhand state recognition for lifetime excellence in academic leadership and geographic research.",
    category: { "#award": null },
  },
  {
    id: 3n,
    year: 2020n,
    title: "Doctoral Degree Conferred",
    description:
      "Awarded a Doctoral degree (PhD) in Geography for advanced research contributions to physical geography and polar studies.",
    category: { "#career": null },
  },
  {
    id: 4n,
    year: 1992n,
    title: "Publication: 'Antarctica: Geopolitics and Resources'",
    description:
      "Published his landmark book, standing as perhaps the first comprehensive book on Antarctica written by an Indian geographer.",
    category: { "#publication": null },
  },
  {
    id: 5n,
    year: 1984n,
    title: "Pre-Antarctic Acclimatisation Course",
    description:
      "Successfully underwent acclimatisation training at Sonemarg and Machhoi glacier under the High Altitude Warfare School (HAWS), Gulmarg.",
    category: { "#career": null },
  },
  {
    id: 6n,
    year: 1983n,
    title: "Publication: 'SOCIAL FORESTRY IN THE PIN-DAR VALLEY'",
    description:
      "Published a highly acclaimed study in the Indian Journal of Forestry, drawing wide international attention to Himalayan forest preservation.",
    category: { "#publication": null },
  },
  {
    id: 7n,
    year: 1978n,
    title: "Head of Geography Faculty, Military School Belgaum",
    description:
      "Appointed Head of the Faculty of Geography at the Military School, Belgaum, contributing to academic training.",
    category: { "#career": null },
  },
  {
    id: 8n,
    year: 1965n,
    title: "Lecturer at N.A.S. College, Meerut",
    description:
      "Began his distinguished teaching career, serving as a lecturer and shaping early academic curricula in geography.",
    category: { "#career": null },
  },
  {
    id: 9n,
    year: 1960n,
    title: "Master's Degree in Geography, AMU",
    description:
      "Graduated with a Master's degree in Geography from Aligarh Muslim University.",
    category: { "#career": null },
  },
  {
    id: 10n,
    year: 1959n,
    title: "Life Member of Indian Science Congress",
    description:
      "Became a life member of the Indian Science Congress and the Indian Council of Geographers, committing to scientific progress.",
    category: { "#award": null },
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
