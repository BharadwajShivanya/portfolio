import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, B as BookOpen, E as ExternalLink } from "./index-iJViA8EL.js";
import { B as Badge } from "./badge-8QC4LkhE.js";
import { S as Search, I as Input, B as Button } from "./input-CfAiuVgP.js";
import { S as Skeleton } from "./skeleton--TIKeMRz.js";
import { u as usePublications } from "./useBackend-CPdST54g.js";
import { u as useScrollReveal } from "./useScrollReveal-C-Gn37xF.js";
import { g as getPubTypeLabel } from "./index-CasHJqfE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function getPubTypeBadgeVariant(t) {
  return "#book" in t ? "default" : "secondary";
}
function PublicationCoverPlaceholder({ title }) {
  const initials = title.split(" ").slice(0, 2).map((w) => w[0]).join("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center bg-primary/10 rounded-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-10 h-10 text-primary/50 mb-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-display font-semibold text-lg uppercase tracking-widest", children: initials })
  ] });
}
function PublicationCard({ pub, index }) {
  const scrollRef = useScrollReveal({ threshold: 0.08 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: scrollRef,
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: {
        duration: 0.45,
        delay: index % 3 * 0.08,
        ease: "easeOut"
      },
      "data-ocid": `publications.item.${index + 1}`,
      className: "group bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden bg-muted", children: [
          pub.coverImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: pub.coverImageUrl,
              alt: pub.title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(PublicationCoverPlaceholder, { title: pub.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: getPubTypeBadgeVariant(pub.pubType),
              className: "text-xs uppercase tracking-wide font-body font-medium",
              children: getPubTypeLabel(pub.pubType)
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2", children: pub.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3", children: pub.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto space-y-1 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: pub.publisher }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(pub.year) })
            ] }),
            pub.isbn && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "ISBN: ",
              pub.isbn
            ] })
          ] }),
          pub.purchaseLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              variant: "outline",
              size: "sm",
              className: "w-full mt-1 gap-2 font-body group/btn",
              "data-ocid": `publications.purchase_link.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: pub.purchaseLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" }),
                    "Purchase / View"
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function PublicationsLoadingSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-52 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2 mt-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-full mt-2" })
        ] })
      ]
    },
    k
  )) });
}
function PublicationsPage() {
  const { data: publications = [], isLoading, error } = usePublications();
  const [search, setSearch] = reactExports.useState("");
  const [sortBy, setSortBy] = reactExports.useState("year");
  const [filterType, setFilterType] = reactExports.useState("all");
  const gridRef = useScrollReveal({ threshold: 0.05 });
  const filtered = reactExports.useMemo(() => {
    let result = [...publications];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (filterType !== "all") {
      result = result.filter(
        (p) => filterType === "book" ? "#book" in p.pubType : "#paper" in p.pubType
      );
    }
    result.sort(
      (a, b) => sortBy === "year" ? Number(b.year) - Number(a.year) : a.title.localeCompare(b.title)
    );
    return result;
  }, [publications, search, sortBy, filterType]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "publications.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "text-sm uppercase tracking-widest text-accent-foreground font-body font-medium mb-3",
          children: "Scholarly Works"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.05 },
          className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight",
          children: "Publications"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.12 },
          className: "mt-4 text-muted-foreground font-body text-lg max-w-xl leading-relaxed",
          children: "A curated collection of books, journal papers, and scholarly contributions spanning decades of academic work."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-b border-border sticky top-0 z-20 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "publications.search_input",
            type: "text",
            placeholder: "Search publications…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9 bg-card font-body"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }),
        ["all", "book", "paper"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `publications.filter.${t}`,
            onClick: () => setFilterType(t),
            className: `px-3 py-1.5 rounded-full text-xs font-body font-medium uppercase tracking-wide transition-all duration-200 border ${filterType === t ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`,
            children: t === "all" ? "All Types" : t === "book" ? "Books" : "Papers"
          },
          t
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-5 bg-border mx-1" }),
        ["year", "title"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `publications.sort.${s}`,
            onClick: () => setSortBy(s),
            className: `px-3 py-1.5 rounded-full text-xs font-body font-medium uppercase tracking-wide transition-all duration-200 border ${sortBy === s ? "bg-accent text-accent-foreground border-accent" : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"}`,
            children: [
              "Sort by ",
              s === "year" ? "Year" : "Title"
            ]
          },
          s
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 py-12", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PublicationsLoadingSkeleton, {}) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "publications.error_state",
        className: "flex flex-col items-center justify-center py-24 gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-12 h-12 text-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-center", children: "Unable to load publications. Please try again later." })
        ]
      }
    ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "publications.empty_state",
        className: "flex flex-col items-center justify-center py-24 gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground", children: "No publications found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-center max-w-xs", children: search ? `No results for "${search}". Try a different search term.` : "No publications match the current filter." }),
          (search || filterType !== "all") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                setSearch("");
                setFilterType("all");
              },
              "data-ocid": "publications.reset_button",
              children: "Clear filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          ref: gridRef,
          className: "text-sm text-muted-foreground font-body mb-8 reveal-target",
          children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: filtered.length }),
            " ",
            filtered.length === 1 ? "publication" : "publications"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((pub, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicationCard, { pub, index: i }, String(pub.id))) })
    ] }) })
  ] });
}
export {
  PublicationsPage as default
};
