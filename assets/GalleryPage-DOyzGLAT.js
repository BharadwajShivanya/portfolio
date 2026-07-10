import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence, X } from "./index-BUfNHQ_G.js";
import { S as Skeleton } from "./skeleton-C8dtWrQH.js";
import { b as useGallery } from "./useBackend-B5XbC_KQ.js";
import { I as Image } from "./image-3movH8QN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const SAMPLE_IMAGES = [
  {
    id: 1n,
    imageUrl: "",
    eventName: "International Neuroscience Summit",
    year: 2023n,
    caption: "Keynote address on attentional mechanisms at the 12th International Neuroscience Summit, New Delhi."
  },
  {
    id: 2n,
    imageUrl: "",
    eventName: "IIT Delhi Convocation",
    year: 2022n,
    caption: "Presiding over the doctoral hooding ceremony for ten PhD graduates from the Department of Cognitive Science."
  },
  {
    id: 3n,
    imageUrl: "",
    eventName: "Shanti Swarup Bhatnagar Award Ceremony",
    year: 2018n,
    caption: "Receiving the Shanti Swarup Bhatnagar Prize from the Honourable President of India at Vigyan Bhawan."
  },
  {
    id: 4n,
    imageUrl: "",
    eventName: "Gatsby Unit Collaboration",
    year: 2017n,
    caption: "Research visit to the Gatsby Computational Neuroscience Unit at UCL — collaborative workshop on probabilistic inference in cortical circuits."
  },
  {
    id: 5n,
    imageUrl: "",
    eventName: "Cognitive Science Conference",
    year: 2016n,
    caption: "Chairing the plenary session on embodied cognition at the Annual Cognitive Science Conference, Hyderabad."
  },
  {
    id: 6n,
    imageUrl: "",
    eventName: "IISc Doctoral Defence",
    year: 2007n,
    caption: "Photograph from PhD thesis defence at the Indian Institute of Science, Bangalore — with supervisor Prof. R. Narasimhan."
  },
  {
    id: 7n,
    imageUrl: "",
    eventName: "SERB Grant Review",
    year: 2021n,
    caption: "Presenting interim findings to the SERB review committee for the Core Research Grant on cortical attentional hierarchies."
  },
  {
    id: 8n,
    imageUrl: "",
    eventName: "Book Launch — Cognitive Systems",
    year: 2019n,
    caption: "Launch event for the second edition of 'Cognitive Systems: A Modern Synthesis' at the IIT Delhi Faculty Club."
  },
  {
    id: 9n,
    imageUrl: "",
    eventName: "Asia-Pacific Neural Computation Symposium",
    year: 2014n,
    caption: "Panel discussion on large-scale brain simulation at the Asia-Pacific Neural Computation Symposium, Singapore."
  }
];
const GRADIENTS = [
  "from-primary/20 via-accent/10 to-primary/5",
  "from-accent/20 via-secondary/10 to-accent/5",
  "from-secondary/20 via-primary/10 to-secondary/5",
  "from-primary/10 via-muted to-accent/15",
  "from-accent/15 via-primary/10 to-muted"
];
function GalleryCard({
  image,
  index,
  onOpen
}) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const hasImage = !!image.imageUrl;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.5, delay: index % 3 * 0.08, ease: "easeOut" },
      "data-ocid": `gallery.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onOpen(index),
          className: "group relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "aria-label": `View ${image.eventName}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] w-full overflow-hidden", children: [
              hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: image.imageUrl,
                  alt: image.eventName,
                  className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 36, className: "text-muted-foreground/40" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground line-clamp-1", children: image.eventName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: Number(image.year) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2", children: image.caption })
            ] })
          ]
        }
      )
    }
  );
}
function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext
}) {
  const image = images[activeIndex];
  const hasImage = !!image.imageUrl;
  const gradient = GRADIENTS[activeIndex % GRADIENTS.length];
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm",
      onClick: onClose,
      "data-ocid": "gallery.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.93, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.93, opacity: 0 },
          transition: { duration: 0.25, ease: "easeOut" },
          className: "relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative w-full overflow-hidden bg-muted",
                style: { aspectRatio: "16/9" },
                children: [
                  hasImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image.imageUrl,
                      alt: image.eventName,
                      className: "h-full w-full object-cover"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 56, className: "text-muted-foreground/30" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onClose,
                      "data-ocid": "gallery.close_button",
                      className: "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background",
                      "aria-label": "Close lightbox",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onPrev,
                      "data-ocid": "gallery.pagination_prev",
                      className: "absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background disabled:opacity-40",
                      "aria-label": "Previous image",
                      disabled: activeIndex === 0,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: onNext,
                      "data-ocid": "gallery.pagination_next",
                      className: "absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background disabled:opacity-40",
                      "aria-label": "Next image",
                      disabled: activeIndex === images.length - 1,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground", children: image.eventName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-sm font-medium text-muted-foreground", children: Number(image.year) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: image.caption }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground/60", children: [
                activeIndex + 1,
                " / ",
                images.length
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function GalleryPage() {
  const { data: images, isLoading } = useGallery();
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const displayImages = images && images.length > 0 ? images : SAMPLE_IMAGES;
  const openLightbox = reactExports.useCallback(
    (index) => setLightboxIndex(index),
    []
  );
  const closeLightbox = reactExports.useCallback(() => setLightboxIndex(null), []);
  const goPrev = reactExports.useCallback(
    () => setLightboxIndex((i) => i !== null && i > 0 ? i - 1 : i),
    []
  );
  const goNext = reactExports.useCallback(
    () => setLightboxIndex(
      (i) => i !== null && i < displayImages.length - 1 ? i + 1 : i
    ),
    [displayImages.length]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "gallery.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "mb-3 text-sm uppercase tracking-widest text-accent-foreground font-body",
          children: "Visual Archive"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "font-display text-4xl font-bold text-foreground md:text-5xl",
          children: "Gallery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "mt-4 text-base text-muted-foreground font-body leading-relaxed",
          children: "A visual record of academic conferences, ceremonial occasions, collaborations, and milestones across a scholarly career."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        "data-ocid": "gallery.loading_state",
        children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] w-full rounded-xl" }, k))
      }
    ) : displayImages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-4 py-24 text-center",
        "data-ocid": "gallery.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 48, className: "text-muted-foreground/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No gallery images yet." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: displayImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      GalleryCard,
      {
        image: img,
        index: i,
        onOpen: openLightbox
      },
      String(img.id)
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        images: displayImages,
        activeIndex: lightboxIndex,
        onClose: closeLightbox,
        onPrev: goPrev,
        onNext: goNext
      }
    ) })
  ] });
}
export {
  GalleryPage as default
};
