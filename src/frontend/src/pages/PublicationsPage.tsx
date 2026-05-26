import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePublications } from "@/hooks/useBackend";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PubType, Publication } from "@/types";
import { getPubTypeLabel } from "@/types";
import {
  BookOpen,
  ExternalLink,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

function getPubTypeBadgeVariant(t: PubType): "default" | "secondary" {
  return "#book" in t ? "default" : "secondary";
}

function PublicationCoverPlaceholder({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-primary/10 rounded-md">
      <BookOpen className="w-10 h-10 text-primary/50 mb-2" />
      <span className="text-primary font-display font-semibold text-lg uppercase tracking-widest">
        {initials}
      </span>
    </div>
  );
}

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const scrollRef = useScrollReveal({ threshold: 0.08 });
  return (
    <motion.div
      ref={scrollRef as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: "easeOut",
      }}
      data-ocid={`publications.item.${index + 1}`}
      className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Cover Image */}
      <div className="relative h-52 overflow-hidden bg-muted">
        {pub.coverImageUrl ? (
          <img
            src={pub.coverImageUrl}
            alt={pub.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PublicationCoverPlaceholder title={pub.title} />
        )}
        <div className="absolute top-3 left-3">
          <Badge
            variant={getPubTypeBadgeVariant(pub.pubType)}
            className="text-xs uppercase tracking-wide font-body font-medium"
          >
            {getPubTypeLabel(pub.pubType)}
          </Badge>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-display font-semibold text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {pub.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {pub.description}
        </p>
        <div className="mt-auto space-y-1 pt-3 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">
              {pub.publisher}
            </span>
            <span>·</span>
            <span>{String(pub.year)}</span>
          </div>
          {pub.isbn && (
            <p className="text-xs text-muted-foreground">ISBN: {pub.isbn}</p>
          )}
        </div>
        {pub.purchaseLink && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full mt-1 gap-2 font-body group/btn"
            data-ocid={`publications.purchase_link.${index + 1}`}
          >
            <a
              href={pub.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              Purchase / View
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

function PublicationsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
        <div
          key={k}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <Skeleton className="h-52 w-full" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-1/2 mt-4" />
            <Skeleton className="h-9 w-full mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PublicationsPage() {
  const { data: publications = [], isLoading, error } = usePublications();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"year" | "title">("year");
  const [filterType, setFilterType] = useState<"all" | "book" | "paper">("all");
  const gridRef = useScrollReveal({ threshold: 0.05 });

  const filtered = useMemo(() => {
    let result = [...publications];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (filterType !== "all") {
      result = result.filter((p) =>
        filterType === "book" ? "#book" in p.pubType : "#paper" in p.pubType,
      );
    }
    result.sort((a, b) =>
      sortBy === "year"
        ? Number(b.year) - Number(a.year)
        : a.title.localeCompare(b.title),
    );
    return result;
  }, [publications, search, sortBy, filterType]);

  return (
    <div data-ocid="publications.page" className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-accent-foreground font-body font-medium mb-3"
          >
            Scholarly Works
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight"
          >
            Publications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-muted-foreground font-body text-lg max-w-xl leading-relaxed"
          >
            A curated collection of books, journal papers, and scholarly
            contributions spanning decades of academic work.
          </motion.p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-muted/30 border-b border-border sticky top-0 z-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              data-ocid="publications.search_input"
              type="text"
              placeholder="Search publications…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card font-body"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {(["all", "book", "paper"] as const).map((t) => (
              <button
                key={t}
                type="button"
                data-ocid={`publications.filter.${t}`}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-medium uppercase tracking-wide transition-all duration-200 border ${
                  filterType === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {t === "all" ? "All Types" : t === "book" ? "Books" : "Papers"}
              </button>
            ))}
            <div className="w-px h-5 bg-border mx-1" />
            {(["year", "title"] as const).map((s) => (
              <button
                key={s}
                type="button"
                data-ocid={`publications.sort.${s}`}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-medium uppercase tracking-wide transition-all duration-200 border ${
                  sortBy === s
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                }`}
              >
                Sort by {s === "year" ? "Year" : "Title"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {isLoading ? (
          <PublicationsLoadingSkeleton />
        ) : error ? (
          <div
            data-ocid="publications.error_state"
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <BookOpen className="w-12 h-12 text-muted-foreground/50" />
            <p className="text-muted-foreground font-body text-center">
              Unable to load publications. Please try again later.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div
            data-ocid="publications.empty_state"
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <Search className="w-12 h-12 text-muted-foreground/50" />
            <p className="font-display text-xl text-foreground">
              No publications found
            </p>
            <p className="text-muted-foreground font-body text-center max-w-xs">
              {search
                ? `No results for "${search}". Try a different search term.`
                : "No publications match the current filter."}
            </p>
            {(search || filterType !== "all") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearch("");
                  setFilterType("all");
                }}
                data-ocid="publications.reset_button"
              >
                Clear filters
              </Button>
            )}
          </div>
        ) : (
          <>
            <p
              ref={gridRef}
              className="text-sm text-muted-foreground font-body mb-8 reveal-target"
            >
              Showing{" "}
              <span className="text-foreground font-medium">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "publication" : "publications"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pub, i) => (
                <PublicationCard key={String(pub.id)} pub={pub} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
