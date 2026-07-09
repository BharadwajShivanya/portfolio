import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, R as React, m as motion, A as AnimatePresence } from "./index-jWeVi0VY.js";
import { c as clsx, a as cn, S as Skeleton } from "./skeleton-DHc406Iw.js";
import { a as useTimeline } from "./useBackend-B0-FJsEj.js";
import { B as BookOpen } from "./book-open-BdrUB-6C.js";
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
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = React[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = reactExports.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
          return reactExports.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (reactExports.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== reactExports.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return reactExports.cloneElement(children, props2);
    }
    return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function isSlottable(child) {
  return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function getTimelineCategoryLabel(c) {
  if ("#career" in c) return "Career";
  if ("#publication" in c) return "Publication";
  return "Award";
}
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
