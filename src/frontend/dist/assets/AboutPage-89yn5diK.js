import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, B as BookOpen } from "./index-iJViA8EL.js";
import { u as useScrollReveal } from "./useScrollReveal-C-Gn37xF.js";
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
    year: "1985",
    title: "Bachelor of Arts, University of Delhi",
    desc: "First class honours in English Literature and Linguistics, laying the foundation for a lifetime of scholarly inquiry."
  },
  {
    year: "1988",
    title: "Master of Philosophy, JNU",
    desc: "Postgraduate research at Jawaharlal Nehru University, specialising in comparative cultural studies and postcolonial theory."
  },
  {
    year: "1993",
    title: "Doctorate, University of Oxford",
    desc: "Completed doctoral thesis on epistemological frameworks in post-colonial humanities under Prof. James Harrison."
  },
  {
    year: "1994",
    title: "Postdoctoral Fellowship, Harvard",
    desc: "Two-year fellowship at the Mahindra Humanities Center, advancing research in cross-cultural cognitive frameworks."
  },
  {
    year: "2001",
    title: "Associate Professor Appointment",
    desc: "Appointed Associate Professor at a leading national institution, establishing a pioneering interdisciplinary research centre."
  },
  {
    year: "2010",
    title: "Full Professorship",
    desc: "Elevated to Full Professor following sustained contribution to scholarship, teaching excellence, and international collaboration."
  }
];
const INTERESTS = [
  "Postcolonial Theory",
  "Philosophy of Language",
  "Comparative Literature",
  "Cultural Epistemology",
  "Interdisciplinary Humanities",
  "Cognitive Linguistics",
  "Educational Philosophy",
  "Literary Theory",
  "South Asian Studies",
  "Critical Discourse Analysis"
];
const ACHIEVEMENTS = [
  {
    icon: Award,
    text: "National Academy of Letters Award for Distinguished Scholarship (2015)"
  },
  {
    icon: BookOpen,
    text: "Author of 12 peer-reviewed monographs published by Oxford, Cambridge, and Routledge"
  },
  {
    icon: GraduationCap,
    text: "Supervised over 45 doctoral candidates across three continents"
  },
  {
    icon: Lightbulb,
    text: "Keynote speaker at 30+ international academic conferences"
  },
  {
    icon: Award,
    text: "Recipient of the Rajiv Gandhi National Fellowship for Outstanding Research"
  },
  {
    icon: BookOpen,
    text: "Founding Editor of the Journal of Interdisciplinary Humanities (2008–present)"
  }
];
function AboutPage() {
  const bioRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const interestsRef = useScrollReveal();
  const achievementsRef = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-6 bg-card border-b border-border",
        "data-ocid": "about.header.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp(0), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "Scholar · Researcher · Author" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground mt-2", children: "About Dr. Sharma" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-secondary mt-4" })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-secondary/10 rounded-2xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative w-64 h-80 rounded-xl shadow-lg border border-border flex flex-col items-center justify-center",
                style: {
                  background: "linear-gradient(160deg, #0f1f3d 0%, #1a3057 60%, #2d4a7a 100%)"
                },
                "aria-label": "Dr. I.C. Sharma",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-bold text-4xl tracking-widest select-none",
                      style: { color: "rgba(255,255,255,0.18)", lineHeight: 1 },
                      "aria-hidden": "true",
                      children: "ICS"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mt-3 font-display font-semibold text-xs tracking-[0.25em] uppercase",
                      style: { color: "rgba(255,255,255,0.55)" },
                      children: "Dr. I.C. Sharma"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Professor since" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-foreground", children: "1994" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground", children: "Biography" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mt-2 mb-6", children: "A Life Devoted to Learning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed font-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dr. I.C. Sharma is a distinguished scholar of international renown whose intellectual journey spans over four decades of groundbreaking contribution to the humanities. Born into a family with a deep reverence for learning, Dr. Sharma pursued his early education with exceptional distinction, earning scholarships that took him from New Delhi to Oxford and beyond." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "His academic career is defined by a rare combination of rigorous theoretical inquiry and a genuine passion for cross-cultural dialogue. Drawing on traditions from both Western and South Asian intellectual heritage, Dr. Sharma has pioneered methodological frameworks that have reshaped conversations in postcolonial studies, cognitive linguistics, and the philosophy of culture." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As an educator, Dr. Sharma has mentored generations of scholars who now lead departments and research centres around the world. His teaching philosophy — that learning is a reciprocal act of mutual discovery — has earned him enduring affection and respect from students and colleagues alike." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Beyond the academy, Dr. Sharma has served on editorial boards of prestigious journals, contributed to national curriculum committees, and delivered public lectures that bring scholarly insight to broader audiences. He continues to write, research, and teach with undiminished vigour and curiosity." })
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
  ] });
}
export {
  AboutPage as default
};
