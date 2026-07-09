import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Award,
  BookOpen,
  Compass,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    delay,
  },
});

const JOURNEY = [
  {
    year: "1952",
    title: "B.Sc. in Geography & Geology, Delhi University",
    desc: "Graduated with top honors, establishing early foundations in geological surveying.",
  },
  {
    year: "1955",
    title: "M.Sc. in Cartography & Geodesy, AMU",
    desc: "Spearheaded advanced mathematical map projection research of high-altitude Himalayan terrains.",
  },
  {
    year: "1962",
    title: "Ph.D. in Polar Geography, University of London",
    desc: "Conferred the first-ever doctoral degree detailing Antarctic glacier formations, titled 'Glaciological Geomorphology of Polar Ice Sheets'.",
  },
  {
    year: "1965",
    title: "Expedition Leader, Joint Indo-British Polar Survey",
    desc: "Lived and worked in a polar research container station for 14 months, conducting geodesic measurements on the frozen continent.",
  },
  {
    year: "1984",
    title: "Published 'Cartography of the Cold'",
    desc: "Defined modern coordinate models for polar navigation and ice shelf surveying under sub-zero temperatures.",
  },
  {
    year: "2005",
    title: "Conferred the Padma Bhushan",
    desc: "Honored with India's third-highest civilian award for lifetime contributions to science, education, and geography.",
  },
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
  "Thermal Soil Cracking",
];

interface Achievement {
  icon: LucideIcon;
  text: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Award,
    text: "Conferred the Padma Bhushan (2005) for lifetime contributions to polar science",
  },
  {
    icon: BookOpen,
    text: "Author of two landmark monographs published by Oxford University Press",
  },
  {
    icon: GraduationCap,
    text: "Mentored over 50 polar geologists and geographers worldwide",
  },
  {
    icon: Lightbulb,
    text: "Led five major scientific expeditions to Antarctica's interior dry valleys",
  },
  {
    icon: Award,
    text: "Recipient of the Royal Geographical Society Founder's Medal (1990)",
  },
  {
    icon: BookOpen,
    text: "First human to publish a systematic geographical atlas of Antarctic contours",
  },
];

export default function AboutPage() {
  const bioRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const interestsRef = useScrollReveal();
  const achievementsRef = useScrollReveal();

  return (
    <div
      data-ocid="about.page"
      className="relative min-h-screen bg-background overflow-hidden selection:bg-accent/30 selection:text-foreground"
    >
      {/* Page Header */}
      <section
        className="py-20 px-6 bg-card border-b border-border/40"
        data-ocid="about.header.section"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Polar Explorer · Geographer · Author
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2">
              About Dr. Sharma
            </h1>
            <div className="w-12 h-1 bg-accent mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 px-6" data-ocid="about.biography.section">
        <div className="max-w-6xl mx-auto">
          <div
            ref={bioRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal grid grid-cols-1 lg:grid-cols-5 gap-16 items-start"
          >
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/5 rounded-2xl border border-dashed border-accent/25" />
                <div
                  className="relative w-64 h-80 rounded-xl shadow-lg border border-border flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/95 text-primary-foreground"
                  aria-label="Dr. I.C. Sharma"
                >
                  <Compass className="w-16 h-16 text-accent mb-4 animate-spin-slow" />
                  <span
                    className="font-display font-bold text-4xl tracking-widest select-none"
                    style={{ color: "rgba(255,255,255,0.18)", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    ICS
                  </span>
                  <span className="mt-3 font-display font-semibold text-xs tracking-[0.25em] uppercase text-accent">
                    Dr. I.C. Sharma
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-md">
                  <p className="text-xs text-muted-foreground font-bold">
                    Active Since
                  </p>
                  <p className="font-display text-lg font-bold text-foreground">
                    1952
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Biography
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                A Life Devoted to Polar Science
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                <p>
                  Dr. I.C. Sharma is a distinguished polar geographer of
                  international renown whose scientific journey spans over five
                  decades of groundbreaking field mapping in the Antarctic
                  Circle. Born in 1931 in Himachal Pradesh, surrounded by the
                  Himalayas, he pursued early degrees in geology and cartography
                  before embarking on research expeditions across the globe.
                </p>
                <p>
                  In 1962, he made history at the University of London by
                  earning the first-ever doctoral thesis dedicated entirely to
                  the geography of Antarctica:
                  <em>'Glaciological Geomorphology of Polar Ice Sheets'</em>.
                  Over the subsequent decades, Dr. Sharma spent years on ice,
                  including a 14-month winter-over as the Lead Scientist of the
                  Joint Indo-British Polar Survey.
                </p>
                <p>
                  His mapping of the Ellsworth Mountains and ice shelf dynamics
                  formed the early foundations for today's coordinate systems
                  used in polar navigation and climate models. He remains a
                  passionate advocate for environmental conservation, having
                  advised international bodies on the preservation of the
                  Antarctic Treaty System.
                </p>
                <p>
                  At 95, Dr. Sharma continues to consult for geographic
                  institutions, sharing his historical cartographic records and
                  diaries to aid scientists studying glacier recession rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Journey */}
      <section
        className="py-20 px-6 bg-muted/20"
        data-ocid="about.journey.section"
      >
        <div className="max-w-4xl mx-auto">
          <div
            ref={journeyRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
              Academic Journey
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
              Milestones
            </h2>
            <div className="w-12 h-0.5 bg-secondary mb-10" />
            <div className="relative">
              <div className="absolute left-[52px] top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-10">
                {JOURNEY.map((item, i) => (
                  <motion.div
                    key={item.year}
                    {...fadeUp(i * 0.08)}
                    className="flex flex-col md:flex-row gap-4 md:gap-8"
                    data-ocid={`about.journey.item.${i + 1}`}
                  >
                    <div className="flex-shrink-0 md:w-24 flex md:flex-col items-center md:items-end gap-2 md:gap-1">
                      <span className="font-display text-base font-bold text-primary">
                        {item.year}
                      </span>
                      <div className="hidden md:block w-3 h-3 rounded-full border-2 border-primary bg-background mt-1" />
                    </div>
                    <div className="flex-1 pb-2">
                      <h3 className="font-display text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 px-6" data-ocid="about.interests.section">
        <div className="max-w-4xl mx-auto">
          <div
            ref={interestsRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
              Scholarly Focus
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
              Research Interests
            </h2>
            <div className="w-12 h-0.5 bg-secondary mb-8" />
            <div className="flex flex-wrap gap-3">
              {INTERESTS.map((interest, i) => (
                <motion.span
                  key={interest}
                  {...fadeUp(i * 0.05)}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-secondary/10 hover:border-secondary/50 transition-smooth"
                  data-ocid={`about.interest.item.${i + 1}`}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="py-20 px-6 bg-muted/20"
        data-ocid="about.achievements.section"
      >
        <div className="max-w-4xl mx-auto">
          <div
            ref={achievementsRef as React.RefObject<HTMLDivElement>}
            className="scroll-reveal"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
              Recognition
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
              Achievements & Contributions
            </h2>
            <div className="w-12 h-0.5 bg-secondary mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div
                  key={item.text}
                  {...fadeUp(i * 0.08)}
                  className="flex gap-4 bg-card border border-border rounded-xl p-5 hover:shadow-sm transition-smooth"
                  data-ocid={`about.achievement.item.${i + 1}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
