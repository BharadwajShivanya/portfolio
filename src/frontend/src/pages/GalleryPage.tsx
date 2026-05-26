import { Skeleton } from "@/components/ui/skeleton";
import { useGallery } from "@/hooks/useBackend";
import type { GalleryImage } from "@/types";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const SAMPLE_IMAGES: GalleryImage[] = [
  {
    id: 1n,
    imageUrl: "",
    eventName: "International Neuroscience Summit",
    year: 2023n,
    caption:
      "Keynote address on attentional mechanisms at the 12th International Neuroscience Summit, New Delhi.",
  },
  {
    id: 2n,
    imageUrl: "",
    eventName: "IIT Delhi Convocation",
    year: 2022n,
    caption:
      "Presiding over the doctoral hooding ceremony for ten PhD graduates from the Department of Cognitive Science.",
  },
  {
    id: 3n,
    imageUrl: "",
    eventName: "Shanti Swarup Bhatnagar Award Ceremony",
    year: 2018n,
    caption:
      "Receiving the Shanti Swarup Bhatnagar Prize from the Honourable President of India at Vigyan Bhawan.",
  },
  {
    id: 4n,
    imageUrl: "",
    eventName: "Gatsby Unit Collaboration",
    year: 2017n,
    caption:
      "Research visit to the Gatsby Computational Neuroscience Unit at UCL — collaborative workshop on probabilistic inference in cortical circuits.",
  },
  {
    id: 5n,
    imageUrl: "",
    eventName: "Cognitive Science Conference",
    year: 2016n,
    caption:
      "Chairing the plenary session on embodied cognition at the Annual Cognitive Science Conference, Hyderabad.",
  },
  {
    id: 6n,
    imageUrl: "",
    eventName: "IISc Doctoral Defence",
    year: 2007n,
    caption:
      "Photograph from PhD thesis defence at the Indian Institute of Science, Bangalore — with supervisor Prof. R. Narasimhan.",
  },
  {
    id: 7n,
    imageUrl: "",
    eventName: "SERB Grant Review",
    year: 2021n,
    caption:
      "Presenting interim findings to the SERB review committee for the Core Research Grant on cortical attentional hierarchies.",
  },
  {
    id: 8n,
    imageUrl: "",
    eventName: "Book Launch — Cognitive Systems",
    year: 2019n,
    caption:
      "Launch event for the second edition of 'Cognitive Systems: A Modern Synthesis' at the IIT Delhi Faculty Club.",
  },
  {
    id: 9n,
    imageUrl: "",
    eventName: "Asia-Pacific Neural Computation Symposium",
    year: 2014n,
    caption:
      "Panel discussion on large-scale brain simulation at the Asia-Pacific Neural Computation Symposium, Singapore.",
  },
];

// Placeholder gradient patterns for cards without images
const GRADIENTS = [
  "from-primary/20 via-accent/10 to-primary/5",
  "from-accent/20 via-secondary/10 to-accent/5",
  "from-secondary/20 via-primary/10 to-secondary/5",
  "from-primary/10 via-muted to-accent/15",
  "from-accent/15 via-primary/10 to-muted",
];

function GalleryCard({
  image,
  index,
  onOpen,
}: {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
}) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const hasImage = !!image.imageUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      data-ocid={`gallery.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="group relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View ${image.eventName}`}
      >
        {/* Image area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {hasImage ? (
            <img
              src={image.imageUrl}
              alt={image.eventName}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
            >
              <ImageIcon size={36} className="text-muted-foreground/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Info */}
        <div className="p-4 text-left">
          <p className="font-display text-sm font-semibold text-foreground line-clamp-1">
            {image.eventName}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {Number(image.year)}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {image.caption}
          </p>
        </div>
      </button>
    </motion.div>
  );
}

function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[activeIndex];
  const hasImage = !!image.imageUrl;
  const gradient = GRADIENTS[activeIndex % GRADIENTS.length];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      data-ocid="gallery.dialog"
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden bg-muted"
          style={{ aspectRatio: "16/9" }}
        >
          {hasImage ? (
            <img
              src={image.imageUrl}
              alt={image.eventName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
            >
              <ImageIcon size={56} className="text-muted-foreground/30" />
            </div>
          )}

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            data-ocid="gallery.close_button"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          {/* Nav arrows */}
          <button
            type="button"
            onClick={onPrev}
            data-ocid="gallery.pagination_prev"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background disabled:opacity-40"
            aria-label="Previous image"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={onNext}
            data-ocid="gallery.pagination_next"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background disabled:opacity-40"
            aria-label="Next image"
            disabled={activeIndex === images.length - 1}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Caption */}
        <div className="px-6 py-5">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {image.eventName}
            </h3>
            <span className="shrink-0 text-sm font-medium text-muted-foreground">
              {Number(image.year)}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {image.caption}
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const { data: images, isLoading } = useGallery();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayImages = images && images.length > 0 ? images : SAMPLE_IMAGES;

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const goNext = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < displayImages.length - 1 ? i + 1 : i,
      ),
    [displayImages.length],
  );

  return (
    <div data-ocid="gallery.page" className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm uppercase tracking-widest text-accent-foreground font-body"
          >
            Visual Archive
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold text-foreground md:text-5xl"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-muted-foreground font-body leading-relaxed"
          >
            A visual record of academic conferences, ceremonial occasions,
            collaborations, and milestones across a scholarly career.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          {isLoading ? (
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              data-ocid="gallery.loading_state"
            >
              {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
                <Skeleton key={k} className="aspect-[4/3] w-full rounded-xl" />
              ))}
            </div>
          ) : displayImages.length === 0 ? (
            <div
              className="flex flex-col items-center gap-4 py-24 text-center"
              data-ocid="gallery.empty_state"
            >
              <ImageIcon size={48} className="text-muted-foreground/30" />
              <p className="text-muted-foreground">No gallery images yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayImages.map((img, i) => (
                <GalleryCard
                  key={String(img.id)}
                  image={img}
                  index={i}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={displayImages}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
