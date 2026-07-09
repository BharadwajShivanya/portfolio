import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link, M as Mail, C as Compass, E as ExternalLink } from "./index-jWeVi0VY.js";
import { u as usePublications } from "./useBackend-B0-FJsEj.js";
import { u as useScrollReveal } from "./useScrollReveal-BwoRxRZA.js";
import { B as BookOpen } from "./book-open-BdrUB-6C.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M12 3v3", key: "1n5kay" }],
  [
    "path",
    {
      d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",
      key: "1btarq"
    }
  ]
];
const Milestone = createLucideIcon("milestone", __iconNode);
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1],
    delay
  }
});
function HomePage() {
  const bioRef = useScrollReveal();
  const quoteRef = useScrollReveal();
  const { data: publications, isLoading } = usePublications();
  const books = (publications == null ? void 0 : publications.filter((p) => {
    const typeStr = typeof p.pubType === "object" ? Object.keys(p.pubType)[0] : String(p.pubType);
    return typeStr.toLowerCase().includes("book");
  })) || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "home.page",
      className: "relative min-h-screen bg-background overflow-hidden selection:bg-accent/30 selection:text-foreground",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none select-none z-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/20 blur-[150px] animate-pulse",
              style: { animationDuration: "8s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-[40%] -left-36 w-[450px] h-[450px] rounded-full bg-accent/5 dark:bg-accent/15 blur-[120px] animate-pulse",
              style: { animationDuration: "12s", animationDelay: "2s" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-24 right-12 w-[500px] h-[500px] rounded-full bg-secondary/8 dark:bg-secondary/15 blur-[130px] animate-pulse",
              style: { animationDuration: "10s", animationDelay: "4s" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "relative min-h-[92vh] flex items-center pt-24 px-6 md:px-12 border-b border-border/40 z-10",
            "data-ocid": "home.hero.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.5 },
                    className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs font-bold tracking-wider uppercase border border-border",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Milestone, { className: "w-3.5 h-3.5 text-accent" }),
                      "Pioneering Polar Cartography"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.h1,
                    {
                      ...fadeUp(0.1),
                      className: "font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-foreground tracking-tight",
                      children: "Dr. I.C. Sharma"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.h2,
                    {
                      ...fadeUp(0.2),
                      className: "font-display text-xl md:text-2xl italic text-accent font-medium",
                      children: "First Human to Complete a Ph.D. on Antarctica"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    ...fadeUp(0.3),
                    className: "text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-body",
                    children: "A legendary glaciologist, cartographer, and explorer who dedicated six decades to deciphering the maps, geography, and deep climate memory locked within the polar ice caps."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(0.4), className: "flex flex-wrap gap-4 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/about",
                      className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-sm hover:scale-[1.02] transition-smooth shadow-lg hover:shadow-primary/25",
                      "data-ocid": "home.hero.about_cta",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }),
                        "Read Journey"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "inline-flex items-center gap-2 bg-card hover:bg-muted border border-border text-foreground px-8 py-4 rounded-lg font-bold text-sm hover:scale-[1.02] transition-smooth shadow-sm",
                      "data-ocid": "home.hero.contact_cta",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        "Get In Touch"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.85, ease: "easeOut" },
                  className: "relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center rounded-full bg-card/65 backdrop-blur-md border border-border shadow-xl letter-shadow",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full border border-dashed border-border/80 animate-spin-slow pointer-events-none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-10 rounded-full border border-border/40 pointer-events-none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-8 space-y-3 z-10", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-16 h-16 text-accent animate-pulse" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-4xl tracking-widest text-foreground select-none", children: "ANTARCTICA" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-widest", children: "Latitude: 90.0000° S" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-[2px] bg-accent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] max-w-[200px] text-muted-foreground leading-normal", children: "Pioneered geodesic contours of the Ellsworth Mountains" })
                    ] })
                  ]
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-card/50 backdrop-blur-sm border-b border-border/40 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8", children: [
          { metric: "1st", label: "Polar Geography PhD" },
          { metric: "14 Mo", label: "Antarctic Winter-Over" },
          { metric: "12", label: "Major Polar Surveys" },
          { metric: "95 Yrs", label: "Lifetime of Learning" }
        ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1, duration: 0.5 },
            className: "text-center space-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-5xl font-black text-primary", children: stat.metric }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm font-semibold text-muted-foreground tracking-wider uppercase", children: stat.label })
            ]
          },
          stat.label
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-24 px-6 relative z-10 bg-background/30",
            "data-ocid": "home.books.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto space-y-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.25em] text-accent", children: "Major Literary Monographs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground", children: "Explore & Purchase Books" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 bg-accent mx-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body", children: "Seminal works detailing polar navigation, historical cartography records, and decades of surveys at the bottom of the world. Available directly from academic publishers." })
              ] }),
              isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [1, 2].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-96 rounded-xl bg-card animate-pulse border border-border"
                },
                n
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: books.map((book, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: idx * 0.15, duration: 0.6 },
                  className: "group relative flex flex-col md:flex-row bg-card rounded-2xl border border-border hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-[40%] bg-gradient-to-br from-primary to-primary/90 flex flex-col items-center justify-center p-8 text-primary-foreground min-h-[250px] relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-[6px] bg-accent/70" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-px bg-white/10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-12 h-12 text-accent/90 mb-4 group-hover:rotate-45 transition-smooth" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-2", children: "Monograph" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-display font-semibold text-lg line-clamp-3 px-2", children: book.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 text-xs font-bold text-white/50", children: [
                        "Published ",
                        book.year.toString()
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-8 flex flex-col justify-between space-y-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-bold text-accent uppercase tracking-wider", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: book.publisher }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            "ISBN: ",
                            book.isbn
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors", children: book.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed font-body line-clamp-4", children: book.description })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: book.purchaseLink,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-2 w-full justify-center bg-primary hover:bg-primary/95 text-primary-foreground font-bold px-5 py-3 rounded-lg text-sm transition-smooth shadow-sm hover:scale-[1.01]",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
                            "Purchase Edition",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 opacity-80" })
                          ]
                        }
                      ) })
                    ] })
                  ]
                },
                book.id.toString()
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-24 px-6 border-t border-border/40 bg-card/25",
            "data-ocid": "home.biography.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: bioRef,
                className: "scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.25em] text-accent", children: "Explorer Profile" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-bold text-foreground leading-tight", children: "Mapping the Frozen Wilderness" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed font-body text-base md:text-lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At a time when Antarctic travel was reserved for military scouts and major superpowers, Dr. Sharma set sail from India to join coordinates mapping efforts at the bottom of the world." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "His mapping of the Ellsworth range and glacier movements clarified how the continent's ice loads relate to sea-level variables. Now at 95, his focus is ensuring early mapping records are preserved for research institutions worldwide." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/about",
                        className: "inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors border-b-2 border-primary/20 hover:border-primary pb-1",
                        "data-ocid": "home.biography.about_link",
                        children: [
                          "Full Scientific Biography ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-accent/5 rounded-2xl border border-dashed border-accent/25" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative h-96 rounded-xl shadow-lg border border-border flex flex-col items-center justify-between p-8 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground text-center",
                        "aria-label": "Antarctic Coordinates Record",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-16 h-16 text-accent opacity-90 animate-spin-slow" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-7xl font-black block text-accent tracking-tighter", children: "1962" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-[0.3em] uppercase opacity-75", children: "First Antarctic PhD Conferred" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-px bg-white/10" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic max-w-xs opacity-80 font-body", children: '"Glaciological Geomorphology of Polar Ice Sheets" — Royal Geographical Society Archives.' })
                        ]
                      }
                    )
                  ] }) })
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "py-24 px-6 bg-primary text-primary-foreground relative",
            "data-ocid": "home.quote.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: quoteRef,
                  className: "scroll-reveal text-center space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-7xl font-display text-accent leading-none mb-2",
                        "aria-hidden": "true",
                        children: "“"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-2xl md:text-4xl italic font-semibold leading-relaxed px-4 md:px-12", children: "To measure the glacier is to measure the silent heart of the Earth. If we lose the memory of the ice, we lose the map of our future." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-0.5 bg-accent mx-auto" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent", children: "— Dr. I.C. Sharma (Polar Keynote Address, 1990)" })
                  ]
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  HomePage as default
};
