import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useResearch } from "@/hooks/useBackend";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ResType, Research } from "@/types";
import { getResTypeLabel } from "@/types";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  Search,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useRef, useState } from "react";

function getResTypeBadgeVariant(t: ResType): "default" | "secondary" {
  return "#paper" in t ? "default" : "secondary";
}

function ResearchEntryCard({
  entry,
  index,
}: { entry: Research; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollRef = useScrollReveal({ threshold: 0.06 });

  const abstractWords = entry.abstract_.split(" ");
  const shouldTruncate = abstractWords.length > 50;
  const shortAbstract = shouldTruncate
    ? `${abstractWords.slice(0, 50).join(" ")}…`
    : entry.abstract_;

  return (
    <motion.article
      ref={scrollRef as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.48,
        delay: (index % 4) * 0.07,
        ease: "easeOut",
      }}
      data-ocid={`research.item.${index + 1}`}
      className="group bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/8 hover:border-primary/25"
    >
      {/* Top row */}
      <div className="flex flex-wrap items-start gap-3 mb-4">
        <Badge
          variant={getResTypeBadgeVariant(entry.resType)}
          className="text-xs uppercase tracking-wide font-body font-medium flex-shrink-0"
        >
          {getResTypeLabel(entry.resType)}
        </Badge>
        <span className="text-sm text-muted-foreground font-body">
          {String(entry.year)}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
        {entry.title}
      </h2>

      {/* Venue */}
      {entry.venue && (
        <p className="text-sm text-accent-foreground font-body italic mb-4 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 flex-shrink-0" />
          {entry.venue}
        </p>
      )}

      {/* Abstract */}
      <div className="mb-4">
        <p className="text-muted-foreground font-body text-sm leading-relaxed">
          {expanded || !shouldTruncate ? entry.abstract_ : shortAbstract}
        </p>
        {shouldTruncate && (
          <button
            type="button"
            data-ocid={`research.expand_button.${index + 1}`}
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 flex items-center gap-1 text-xs text-primary font-body font-medium hover:underline underline-offset-2 transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" /> Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" /> Read more
              </>
            )}
          </button>
        )}
      </div>

      {/* Co-authors */}
      {entry.coAuthors.length > 0 && (
        <div className="flex items-start gap-2 mb-5">
          <Users className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground font-body">
            {entry.coAuthors.join(", ")}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="pt-4 border-t border-border">
        {entry.pdfUrl ? (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 font-body group/btn"
            data-ocid={`research.pdf_link.${index + 1}`}
          >
            <a
              href={entry.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-y-0.5" />
              Download PDF
            </a>
          </Button>
        ) : (
          <span className="text-xs text-muted-foreground font-body italic">
            PDF not available
          </span>
        )}
      </div>
      <div ref={cardRef} className="hidden" />
    </motion.article>
  );
}

function ResearchLoadingSkeleton() {
  return (
    <div className="space-y-5">
      {["sk1", "sk2", "sk3", "sk4"].map((k) => (
        <div
          key={k}
          className="bg-card border border-border rounded-xl p-6 md:p-8 space-y-4"
        >
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-48" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <Skeleton className="h-9 w-36" />
        </div>
      ))}
    </div>
  );
}

export default function ResearchPage() {
  const { data: research = [], isLoading, error } = useResearch();
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"all" | "paper" | "article">(
    "all",
  );
  const headerRef = useScrollReveal({ threshold: 0.05 });

  const filtered = useMemo(() => {
    let result = [...research];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((r) => r.title.toLowerCase().includes(q));
    }
    if (filterType !== "all") {
      result = result.filter((r) =>
        filterType === "paper"
          ? "#paper" in r.resType
          : "#article" in r.resType,
      );
    }
    result.sort((a, b) => Number(b.year) - Number(a.year));
    return result;
  }, [research, search, filterType]);

  return (
    <div data-ocid="research.page" className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-accent-foreground font-body font-medium mb-3"
          >
            Academic Output
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight"
          >
            Research & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-muted-foreground font-body text-lg max-w-xl leading-relaxed"
          >
            Peer-reviewed papers, academic articles, and ongoing research
            exploring key questions at the frontiers of the field.
          </motion.p>
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex gap-6"
          >
            <div>
              <p className="font-display text-2xl font-bold text-foreground">
                {research.length}
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-body">
                Total Works
              </p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">
                {research.filter((r) => "#paper" in r.resType).length}
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-body">
                Research Papers
              </p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">
                {research.filter((r) => "#article" in r.resType).length}
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-body">
                Articles
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-muted/30 border-b border-border sticky top-0 z-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              data-ocid="research.search_input"
              type="text"
              placeholder="Search by title…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card font-body"
            />
          </div>
          {/* Type filter */}
          <div className="flex items-center gap-2">
            {(["all", "paper", "article"] as const).map((t) => (
              <button
                key={t}
                type="button"
                data-ocid={`research.filter.${t}`}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-medium uppercase tracking-wide transition-all duration-200 border ${
                  filterType === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {t === "all" ? "All" : t === "paper" ? "Papers" : "Articles"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {isLoading ? (
          <ResearchLoadingSkeleton />
        ) : error ? (
          <div
            data-ocid="research.error_state"
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <BookOpen className="w-12 h-12 text-muted-foreground/50" />
            <p className="text-muted-foreground font-body text-center">
              Unable to load research entries. Please try again later.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div
            data-ocid="research.empty_state"
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <Search className="w-12 h-12 text-muted-foreground/50" />
            <p className="font-display text-xl text-foreground">
              No results found
            </p>
            <p className="text-muted-foreground font-body text-center max-w-xs">
              {search
                ? `No research entries matching "${search}".`
                : "No entries match the selected filter."}
            </p>
            {(search || filterType !== "all") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearch("");
                  setFilterType("all");
                }}
                data-ocid="research.reset_button"
              >
                Clear filters
              </Button>
            )}
          </div>
        ) : (
          <>
            <p
              ref={headerRef}
              className="text-sm text-muted-foreground font-body mb-8 reveal-target"
            >
              Showing{" "}
              <span className="text-foreground font-medium">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "entry" : "entries"}
            </p>
            <div className="space-y-5">
              {filtered.map((entry, i) => (
                <ResearchEntryCard
                  key={String(entry.id)}
                  entry={entry}
                  index={i}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
