import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, B as BookOpen } from "./index-iJViA8EL.js";
import { B as Badge } from "./badge-8QC4LkhE.js";
import { S as Skeleton } from "./skeleton--TIKeMRz.js";
import { b as useTimeline } from "./useBackend-CPdST54g.js";
import { b as getTimelineCategoryLabel } from "./index-CasHJqfE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
function getCategoryKey(c) {
  if ("#career" in c) return "career";
  if ("#publication" in c) return "publication";
  return "award";
}
const CATEGORY_CONFIG = {
  all: { label: "All", icon: null, badgeClass: "" },
  career: {
    label: "Career",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 12 }),
    badgeClass: "bg-primary/15 text-primary border-primary/30 dark:bg-primary/20 dark:text-primary-foreground dark:border-primary/40"
  },
  publication: {
    label: "Publication",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 12 }),
    badgeClass: "bg-accent/20 text-accent-foreground border-accent/40 dark:bg-accent/25 dark:border-accent/50"
  },
  award: {
    label: "Award",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 12 }),
    badgeClass: "bg-secondary/20 text-secondary-foreground border-secondary/40 dark:bg-secondary/25 dark:border-secondary/50"
  }
};
const SAMPLE_ENTRIES = [
  {
    id: 1n,
    year: 2024n,
    title: "Appointed Full Professor",
    description: "Promoted to Full Professor of Computational Neuroscience at the Indian Institute of Technology, Delhi — a recognition of three decades of distinguished scholarship.",
    category: { "#career": null }
  },
  {
    id: 2n,
    year: 2023n,
    title: "Cognitive Systems: A Modern Synthesis (3rd Ed.)",
    description: "Third edition of the landmark textbook, adopted across 40+ universities worldwide. Expanded coverage of neural oscillations and predictive coding frameworks.",
    category: { "#publication": null }
  },
  {
    id: 3n,
    year: 2022n,
    title: "Fellow — Indian National Science Academy",
    description: "Inducted as Fellow of the Indian National Science Academy for sustained contribution to neuroscience and mathematical modeling of biological systems.",
    category: { "#award": null }
  },
  {
    id: 4n,
    year: 2021n,
    title: "Principal Investigator — SERB CRG Grant",
    description: "Awarded a three-year Core Research Grant from the Science and Engineering Research Board to investigate attentional mechanisms in cortical hierarchies.",
    category: { "#career": null }
  },
  {
    id: 5n,
    year: 2019n,
    title: "Neural Dynamics of Working Memory (Monograph)",
    description: "Monograph synthesising 15 years of experimental and computational work on the prefrontal-parietal network underlying working memory maintenance.",
    category: { "#publication": null }
  },
  {
    id: 6n,
    year: 2018n,
    title: "Shanti Swarup Bhatnagar Prize",
    description: "Received the Shanti Swarup Bhatnagar Prize in Biological Sciences — the highest science honour in India — for contributions to computational cognition.",
    category: { "#award": null }
  },
  {
    id: 7n,
    year: 2015n,
    title: "Associate Professor, IIT Delhi",
    description: "Promoted to Associate Professor following successful tenure review, recognised for curriculum innovation and high-impact research output.",
    category: { "#career": null }
  },
  {
    id: 8n,
    year: 2012n,
    title: "Handbook of Computational Neuroscience",
    description: "Edited volume bringing together 28 contributors to survey the state of the field; widely cited as a graduate entry point to the discipline.",
    category: { "#publication": null }
  },
  {
    id: 9n,
    year: 2009n,
    title: "Assistant Professor, IIT Delhi",
    description: "Joined the Department of Cognitive Science at IIT Delhi following a postdoctoral fellowship at the Gatsby Computational Neuroscience Unit, UCL.",
    category: { "#career": null }
  },
  {
    id: 10n,
    year: 2007n,
    title: "PhD — Computational Neuroscience",
    description: "Awarded Doctor of Philosophy from IISc Bangalore under the supervision of Prof. R. Narasimhan. Thesis: 'Attractor Dynamics in Cortical Memory Circuits'.",
    category: { "#career": null }
  }
];
function TimelineEntryCard({
  entry,
  index,
  isLeft
}) {
  const catKey = getCategoryKey(entry.category);
  const config = CATEGORY_CONFIG[catKey];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: isLeft ? -40 : 40 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.55, delay: index * 0.05, ease: "easeOut" },
      className: `relative flex w-full ${isLeft ? "md:justify-start md:pr-[52%]" : "md:justify-end md:pl-[52%]"}`,
      "data-ocid": `timeline.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-1/2 top-7 hidden -translate-x-1/2 md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-4 w-4 rounded-full border-2 border-primary bg-background shadow-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-7 block -translate-x-1/2 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-3 w-3 rounded-full border-2 border-primary bg-background" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative ml-6 w-full max-w-md rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:ml-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-primary", children: Number(entry.year) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: `flex items-center gap-1 text-xs capitalize ${config.badgeClass}`,
                children: [
                  config.icon,
                  getTimelineCategoryLabel(entry.category)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 font-display text-base font-semibold text-foreground", children: entry.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: entry.description })
        ] })
      ]
    }
  );
}
function TimelinePage() {
  const { data: entries, isLoading } = useTimeline();
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const displayEntries = (entries && entries.length > 0 ? entries : SAMPLE_ENTRIES).sort((a, b) => Number(b.year) - Number(a.year));
  const filtered = activeFilter === "all" ? displayEntries : displayEntries.filter(
    (e) => getCategoryKey(e.category) === activeFilter
  );
  const filters = ["all", "career", "publication", "award"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "timeline.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "mb-3 text-sm uppercase tracking-widest text-accent-foreground font-body",
          children: "Academic Journey"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "font-display text-4xl font-bold text-foreground md:text-5xl",
          children: "Timeline"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "mt-4 text-base text-muted-foreground font-body leading-relaxed",
          children: "Four decades of scholarship, research milestones, and recognition spanning institutions across India and the world."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-[64px] z-10 bg-card/80 backdrop-blur border-b border-border px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-4xl items-center gap-2 flex-wrap", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setActiveFilter(f),
        "data-ocid": `timeline.filter.${f}`,
        className: `flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${activeFilter === f ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"}`,
        children: [
          f !== "all" && CATEGORY_CONFIG[f].icon,
          f === "all" ? "All" : CATEGORY_CONFIG[f].label
        ]
      },
      f
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", "data-ocid": "timeline.loading_state", children: ["sk1", "sk2", "sk3", "sk4", "sk5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full max-w-md rounded-xl" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-6 w-px bg-border md:hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.25 },
          className: "relative flex flex-col gap-10",
          children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "py-20 text-center text-muted-foreground",
              "data-ocid": "timeline.empty_state",
              children: "No entries for this category."
            }
          ) : filtered.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TimelineEntryCard,
            {
              entry,
              index: i,
              isLeft: i % 2 === 0
            },
            String(entry.id)
          ))
        },
        activeFilter
      ) })
    ] }) }) })
  ] });
}
export {
  TimelinePage as default
};
