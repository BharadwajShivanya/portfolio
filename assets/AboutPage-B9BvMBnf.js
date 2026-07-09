import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, C as Compass } from "./index-CIw_hSTm.js";
import { u as useScrollReveal } from "./useScrollReveal-CtE2Dph3.js";
import { B as BookOpen } from "./book-open-60M1Jkpz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode);
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1],
    delay
  }
});
const JOURNEY = [
  {
    year: "1952",
    title: "B.Sc. in Geography & Geology, Delhi University",
    desc: "Graduated with top honors, establishing early foundations in geological surveying."
  },
  {
    year: "1955",
    title: "M.Sc. in Cartography & Geodesy, AMU",
    desc: "Spearheaded advanced mathematical map projection research of high-altitude Himalayan terrains."
  },
  {
    year: "1962",
    title: "Ph.D. in Polar Geography, University of London",
    desc: "Conferred the first-ever doctoral degree detailing Antarctic glacier formations, titled 'Glaciological Geomorphology of Polar Ice Sheets'."
  },
  {
    year: "1965",
    title: "Expedition Leader, Joint Indo-British Polar Survey",
    desc: "Lived and worked in a polar research container station for 14 months, conducting geodesic measurements on the frozen continent."
  },
  {
    year: "1984",
    title: "Published 'Cartography of the Cold'",
    desc: "Defined modern coordinate models for polar navigation and ice shelf surveying under sub-zero temperatures."
  },
  {
    year: "2005",
    title: "Conferred the Padma Bhushan",
    desc: "Honored with India's third-highest civilian award for lifetime contributions to science, education, and geography."
  }
];
const INTERESTS = [
  "Polar Glaciology",
  "Geodesy & Cartography",
  "Himalayan Tectonics",
  "Ice Shelf Dynamics",
  "High-Latitude Navigation",
  "Climatic Geomorphology",
  "Geographic Triangulation",
  "Environmental Treaty Policy",
  "Satellite Geodesy",
  "Thermal Soil Cracking"
];
const ACHIEVEMENTS = [
  {
    icon: Award,
    text: "Conferred the Padma Bhushan (2005) for lifetime contributions to polar science"
  },
  {
    icon: BookOpen,
    text: "Author of two landmark monographs published by Oxford University Press"
  },
  {
    icon: GraduationCap,
    text: "Mentored over 50 polar geologists and geographers worldwide"
  },
  {
    icon: Lightbulb,
    text: "Led five major scientific expeditions to Antarctica's interior dry valleys"
  },
  {
    icon: Award,
    text: "Recipient of the Royal Geographical Society Founder's Medal (1990)"
  },
  {
    icon: BookOpen,
    text: "First human to publish a systematic geographical atlas of Antarctic contours"
  }
];
function AboutPage() {
  const bioRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const interestsRef = useScrollReveal();
  const achievementsRef = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "about.page",
      className: "relative min-h-screen bg-background overflow-hidden selection:bg-accent/30 selection:text-foreground",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-20 px-6 bg-card border-b border-border/40",
            "data-ocid": "about.header.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(0), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Polar Explorer · Geographer · Author" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground mt-2", children: "About Dr. Sharma" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-accent mt-4" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", "data-ocid": "about.biography.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: bioRef,
            className: "scroll-reveal grid grid-cols-1 lg:grid-cols-5 gap-16 items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 flex justify-center lg:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-accent/5 rounded-2xl border border-dashed border-accent/25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative w-64 h-80 rounded-xl shadow-lg border border-border flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/95 text-primary-foreground",
                    "aria-label": "Dr. I.C. Sharma",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "w-16 h-16 text-accent mb-4 animate-spin-slow" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-display font-bold text-4xl tracking-widest select-none",
                          style: { color: "rgba(255,255,255,0.18)", lineHeight: 1 },
                          "aria-hidden": "true",
                          children: "ICS"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 font-display font-semibold text-xs tracking-[0.25em] uppercase text-accent", children: "Dr. I.C. Sharma" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-bold", children: "Active Since" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-foreground", children: "1952" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.2em] text-accent", children: "Biography" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mt-2 mb-6", children: "A Life Devoted to Polar Science" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed font-body", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dr. I.C. Sharma is a distinguished polar geographer of international renown whose scientific journey spans over five decades of groundbreaking field mapping in the Antarctic Circle. Born in 1931 in Himachal Pradesh, surrounded by the Himalayas, he pursued early degrees in geology and cartography before embarking on research expeditions across the globe." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                    "In 1962, he made history at the University of London by earning the first-ever doctoral thesis dedicated entirely to the geography of Antarctica:",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "'Glaciological Geomorphology of Polar Ice Sheets'" }),
                    ". Over the subsequent decades, Dr. Sharma spent years on ice, including a 14-month winter-over as the Lead Scientist of the Joint Indo-British Polar Survey."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "His mapping of the Ellsworth Mountains and ice shelf dynamics formed the early foundations for today's coordinate systems used in polar navigation and climate models. He remains a passionate advocate for environmental conservation, having advised international bodies on the preservation of the Antarctic Treaty System." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "At 95, Dr. Sharma continues to consult for geographic institutions, sharing his historical cartographic records and diaries to aid scientists studying glacier recession rates." })
                ] })
              ] })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-20 px-6 bg-muted/20",
            "data-ocid": "about.journey.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: journeyRef,
                className: "scroll-reveal",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "Academic Journey" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mt-2 mb-4", children: "Milestones" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-secondary mb-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[52px] top-0 bottom-0 w-px bg-border hidden md:block" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: JOURNEY.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        ...fadeUp(i * 0.08),
                        className: "flex flex-col md:flex-row gap-4 md:gap-8",
                        "data-ocid": `about.journey.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 md:w-24 flex md:flex-col items-center md:items-end gap-2 md:gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base font-bold text-primary", children: item.year }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-3 h-3 rounded-full border-2 border-primary bg-background mt-1" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pb-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-foreground mb-1", children: item.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
                          ] })
                        ]
                      },
                      item.year
                    )) })
                  ] })
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", "data-ocid": "about.interests.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: interestsRef,
            className: "scroll-reveal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "Scholarly Focus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mt-2 mb-6", children: "Research Interests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-secondary mb-8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: INTERESTS.map((interest, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  ...fadeUp(i * 0.05),
                  className: "px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary/10 hover:border-secondary/50 transition-smooth",
                  "data-ocid": `about.interest.item.${i + 1}`,
                  children: interest
                },
                interest
              )) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-20 px-6 bg-muted/20",
            "data-ocid": "about.achievements.section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                ref: achievementsRef,
                className: "scroll-reveal",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "Recognition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mt-2 mb-6", children: "Achievements & Contributions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-secondary mb-10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: ACHIEVEMENTS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      ...fadeUp(i * 0.08),
                      className: "flex gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-sm transition-smooth",
                      "data-ocid": `about.achievement.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-secondary-foreground" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pt-1", children: item.text })
                      ]
                    },
                    item.text
                  )) })
                ]
              }
            ) })
          }
        )
      ]
    }
  );
}
export {
  AboutPage as default
};
