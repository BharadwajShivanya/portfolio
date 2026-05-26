import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, B as BookOpen } from "./index-iJViA8EL.js";
import { B as Badge } from "./badge-8QC4LkhE.js";
import { S as Search, I as Input, B as Button } from "./input-CfAiuVgP.js";
import { S as Skeleton } from "./skeleton--TIKeMRz.js";
import { a as useResearch } from "./useBackend-CPdST54g.js";
import { u as useScrollReveal } from "./useScrollReveal-C-Gn37xF.js";
import { a as getResTypeLabel } from "./index-CasHJqfE.js";
import { F as FileText } from "./file-text-lAxFgtnA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function getResTypeBadgeVariant(t) {
  return "#paper" in t ? "default" : "secondary";
}
function ResearchEntryCard({
  entry,
  index
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const cardRef = reactExports.useRef(null);
  const scrollRef = useScrollReveal({ threshold: 0.06 });
  const abstractWords = entry.abstract_.split(" ");
  const shouldTruncate = abstractWords.length > 50;
  const shortAbstract = shouldTruncate ? `${abstractWords.slice(0, 50).join(" ")}…` : entry.abstract_;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      ref: scrollRef,
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: {
        duration: 0.48,
        delay: index % 4 * 0.07,
        ease: "easeOut"
      },
      "data-ocid": `research.item.${index + 1}`,
      className: "group bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/8 hover:border-primary/25",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: getResTypeBadgeVariant(entry.resType),
              className: "text-xs uppercase tracking-wide font-body font-medium flex-shrink-0",
              children: getResTypeLabel(entry.resType)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: String(entry.year) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl md:text-2xl font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200", children: entry.title }),
        entry.venue && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-accent-foreground font-body italic mb-4 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5 flex-shrink-0" }),
          entry.venue
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm leading-relaxed", children: expanded || !shouldTruncate ? entry.abstract_ : shortAbstract }),
          shouldTruncate && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `research.expand_button.${index + 1}`,
              onClick: () => setExpanded((v) => !v),
              className: "mt-2 flex items-center gap-1 text-xs text-primary font-body font-medium hover:underline underline-offset-2 transition-colors",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }),
                " Show less"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }),
                " Read more"
              ] })
            }
          )
        ] }),
        entry.coAuthors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: entry.coAuthors.join(", ") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-border", children: entry.pdfUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            size: "sm",
            className: "gap-2 font-body group/btn",
            "data-ocid": `research.pdf_link.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: entry.pdfUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                download: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 transition-transform group-hover/btn:translate-y-0.5" }),
                  "Download PDF"
                ]
              }
            )
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body italic", children: "PDF not available" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: cardRef, className: "hidden" })
      ]
    }
  );
}
function ResearchLoadingSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: ["sk1", "sk2", "sk3", "sk4"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl p-6 md:p-8 space-y-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-36" })
      ]
    },
    k
  )) });
}
function ResearchPage() {
  const { data: research = [], isLoading, error } = useResearch();
  const [search, setSearch] = reactExports.useState("");
  const [filterType, setFilterType] = reactExports.useState(
    "all"
  );
  const headerRef = useScrollReveal({ threshold: 0.05 });
  const filtered = reactExports.useMemo(() => {
    let result = [...research];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((r) => r.title.toLowerCase().includes(q));
    }
    if (filterType !== "all") {
      result = result.filter(
        (r) => filterType === "paper" ? "#paper" in r.resType : "#article" in r.resType
      );
    }
    result.sort((a, b) => Number(b.year) - Number(a.year));
    return result;
  }, [research, search, filterType]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "research.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "text-sm uppercase tracking-widest text-accent-foreground font-body font-medium mb-3",
          children: "Academic Output"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.05 },
          className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight",
          children: "Research & Articles"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.12 },
          className: "mt-4 text-muted-foreground font-body text-lg max-w-xl leading-relaxed",
          children: "Peer-reviewed papers, academic articles, and ongoing research exploring key questions at the frontiers of the field."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "mt-8 flex gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: research.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground font-body", children: "Total Works" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: research.filter((r) => "#paper" in r.resType).length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground font-body", children: "Research Papers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: research.filter((r) => "#article" in r.resType).length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground font-body", children: "Articles" })
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-b border-border sticky top-0 z-20 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "research.search_input",
            type: "text",
            placeholder: "Search by title…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9 bg-card font-body"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: ["all", "paper", "article"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `research.filter.${t}`,
          onClick: () => setFilterType(t),
          className: `px-3 py-1.5 rounded-full text-xs font-body font-medium uppercase tracking-wide transition-all duration-200 border ${filterType === t ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`,
          children: t === "all" ? "All" : t === "paper" ? "Papers" : "Articles"
        },
        t
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 py-12", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchLoadingSkeleton, {}) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "research.error_state",
        className: "flex flex-col items-center justify-center py-24 gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-12 h-12 text-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-center", children: "Unable to load research entries. Please try again later." })
        ]
      }
    ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "research.empty_state",
        className: "flex flex-col items-center justify-center py-24 gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-muted-foreground/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground", children: "No results found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-center max-w-xs", children: search ? `No research entries matching "${search}".` : "No entries match the selected filter." }),
          (search || filterType !== "all") && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                setSearch("");
                setFilterType("all");
              },
              "data-ocid": "research.reset_button",
              children: "Clear filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          ref: headerRef,
          className: "text-sm text-muted-foreground font-body mb-8 reveal-target",
          children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: filtered.length }),
            " ",
            filtered.length === 1 ? "entry" : "entries"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: filtered.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResearchEntryCard,
        {
          entry,
          index: i
        },
        String(entry.id)
      )) })
    ] }) })
  ] });
}
export {
  ResearchPage as default
};
