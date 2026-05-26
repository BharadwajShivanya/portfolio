import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link, B as BookOpen, M as Mail } from "./index-iJViA8EL.js";
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
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1],
    delay
  }
});
const PLACEHOLDER_PUBS = [
  {
    title: "Cognitive Frameworks in Modern Educational Research",
    publisher: "Oxford Academic Press",
    year: BigInt(2021),
    pubType: { "#book": null }
  },
  {
    title: "Interdisciplinary Methods in Humanities Scholarship",
    publisher: "Cambridge University Press",
    year: BigInt(2019),
    pubType: { "#book": null }
  },
  {
    title: "The Philosophy of Language and Cultural Identity",
    publisher: "Routledge",
    year: BigInt(2017),
    pubType: { "#book": null }
  },
  {
    title: "Epistemological Shifts in Post-Colonial Studies",
    publisher: "SAGE Publications",
    year: BigInt(2023),
    pubType: { "#paper": null }
  }
];
function FeaturedPublications() {
  const { data: pubs, isLoading } = usePublications();
  const sectionRef = useScrollReveal();
  const displayPubs = pubs && pubs.length > 0 ? pubs.slice(0, 4) : PLACEHOLDER_PUBS;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-20 px-6 bg-muted/20",
      "data-ocid": "home.publications.section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "max-w-6xl mx-auto",
          ref: sectionRef,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(0), className: "mb-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "Selected Works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mt-2", children: "Featured Publications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-secondary mt-4" })
            ] }),
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-card rounded-xl p-6 h-48 animate-pulse border border-border"
              },
              i
            )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: displayPubs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                ...fadeUp(i * 0.1),
                className: "bg-card border border-border rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-smooth group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-20 bg-muted rounded flex items-center justify-center border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-muted-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-secondary-foreground bg-secondary/20 border border-secondary/30 px-2 py-0.5 rounded-full w-fit", children: getPubTypeLabel(p.pubType) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors", children: p.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    p.publisher,
                    " · ",
                    String(p.year)
                  ] })
                ]
              },
              p.title
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/publications",
                className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border-b border-primary/40 hover:border-primary pb-0.5",
                "data-ocid": "home.view_all_publications.link",
                children: [
                  "View All Publications ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) })
          ]
        }
      )
    }
  );
}
function HomePage() {
  const bioRef = useScrollReveal();
  const quoteRef = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[88vh] flex items-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0f1f3d 0%, #1a3057 40%, #2d4a7a 100%)"
        },
        "data-ocid": "home.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/88" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-6 py-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.4 },
                className: "text-xs font-medium uppercase tracking-[0.25em] text-secondary-foreground mb-6",
                children: "Scholar · Researcher · Author"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                ...fadeUp(0.1),
                className: "font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-foreground mb-6 tracking-tight",
                children: "Dr. I.C. Sharma"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                ...fadeUp(0.22),
                className: "text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-body",
                children: "Advancing knowledge through rigorous scholarship, interdisciplinary research, and a lifelong commitment to academic excellence."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(0.34), className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/publications",
                  className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-smooth shadow-sm",
                  "data-ocid": "home.hero.publications_cta",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
                    "Explore My Work"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  className: "inline-flex items-center gap-2 border border-secondary/60 text-foreground px-7 py-3 rounded-lg font-medium text-sm hover:bg-secondary/10 transition-smooth",
                  "data-ocid": "home.hero.contact_cta",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                    "Get In Touch"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-border" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedPublications, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", "data-ocid": "home.biography.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: bioRef,
        className: "scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "About the Scholar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6", children: "A Life Devoted to Learning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-secondary mb-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed font-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dr. I.C. Sharma is a distinguished scholar whose career spans over three decades of groundbreaking research in the humanities and social sciences. A professor emeritus at a leading research university, Dr. Sharma has shaped the intellectual landscape of his field through seminal publications and mentorship." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "His interdisciplinary approach bridges classical scholarship with contemporary methodologies, producing insights that resonate across academic disciplines and cultural boundaries." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Beyond research, Dr. Sharma remains a passionate educator who believes that knowledge flourishes when shared generously." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/about",
                className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border-b border-primary/40 hover:border-primary pb-0.5",
                "data-ocid": "home.biography.about_link",
                children: [
                  "Full Biography ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-secondary/10 rounded-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative w-72 h-96 rounded-xl shadow-lg border border-border flex flex-col items-center justify-center",
                style: {
                  background: "linear-gradient(160deg, #0f1f3d 0%, #1a3057 60%, #2d4a7a 100%)"
                },
                "aria-label": "Dr. I.C. Sharma — Academic Portrait",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-bold text-5xl tracking-widest select-none",
                      style: { color: "rgba(255,255,255,0.18)", lineHeight: 1 },
                      "aria-hidden": "true",
                      children: "ICS"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mt-4 font-display font-semibold text-sm tracking-[0.25em] uppercase",
                      style: { color: "rgba(255,255,255,0.55)" },
                      children: "Dr. I.C. Sharma"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-5 py-3 shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Active since" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-foreground", children: "1988" })
            ] })
          ] }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 bg-primary", "data-ocid": "home.quote.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: quoteRef,
        className: "scroll-reveal text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-6xl font-display text-primary-foreground/20 leading-none mb-4",
              "aria-hidden": "true",
              children: "“"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-2xl md:text-3xl italic font-medium text-primary-foreground leading-relaxed", children: "The pursuit of knowledge is not merely an intellectual endeavour; it is the most humane act of which we are capable." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-6 text-sm font-body text-primary-foreground/70", children: "— Dr. I.C. Sharma" })
        ]
      }
    ) }) })
  ] });
}
export {
  HomePage as default
};
