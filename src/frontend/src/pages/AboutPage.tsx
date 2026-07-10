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
    year: "1960",
    title: "Master's Degree in Geography, Aligarh Muslim University",
    desc: "Completed postgraduate studies in Geography at AMU, establishing strong foundations in geomorphology.",
  },
  {
    year: "1983",
    title: "Published 'SOCIAL FORESTRY IN THE PIN-DAR VALLEY'",
    desc: "A well-researched study published in the Indian Journal of Forestry, drawing international attention to environmental and forestry dynamics.",
  },
  {
    year: "1984",
    title: "Pre-Antarctic Acclimatisation Training, HAWS Gulmarg",
    desc: "Underwent rigorous acclimatisation training at Sonemarg and Machhoi glacier under the High Altitude Warfare School.",
  },
  {
    year: "1992",
    title: "Published 'Antarctica: Geopolitics and Resources'",
    desc: "Authored perhaps the first comprehensive book on Antarctica written by an Indian geographer, detailing geopolitical and resource dynamics.",
  },
  {
    year: "Recent",
    title: "Conferred Doctoral Degree",
    desc: "Awarded a PhD for advanced contributions to the field of geography and Antarctic studies.",
  },
  {
    year: "Career",
    title: "31+ Years of Academic Leadership",
    desc: "Served as a lecturer at N.A.S. College, Meerut, and Head of the Faculty of Geography, Military School, Belgaum.",
  },
];

const INTERESTS = [
  "Antarctic Studies",
  "Geopolitics & Resource Management",
  "Social Forestry",
  "Acclimatisation & Altitude Training",
  "Military Geography",
  "Physical Geography",
  "Geomorphology",
  "Himalayan Ecosystems",
  "Polar Research Policy",
  "Cartographic Surveying",
];

interface Achievement {
  icon: LucideIcon;
  text: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Award,
    text: "Uttarakhand Recipient — honored for outstanding academic and state contributions",
  },
  {
    icon: BookOpen,
    text: "Author of 'Antarctica: Geopolitics and Resources' (1992) — perhaps the first book on Antarctica by an Indian geographer",
  },
  {
    icon: GraduationCap,
    text: "Presently Head of the Geography Department at Army Cadet College Wing of the Indian Military Academy, Dehradun",
  },
  {
    icon: Lightbulb,
    text: "Completed Pre-Antarctic Acclimatisation training at Sonemarg and Machhoi glacier under HAWS, Gulmarg",
  },
  {
    icon: Award,
    text: "Life Member of the Indian Science Congress and the Indian Council of Geographers",
  },
  {
    icon: BookOpen,
    text: "Authored the widely acclaimed study 'SOCIAL FORESTRY IN THE PIN-DAR VALLEY' in 1983",
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
                    1960
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Biography
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                A Life Devoted to Antarctic Studies & Geography
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                <p>
                  Dr. I.C. Sharma is an experienced and distinguished scholar in the field of Antarctic Studies and Geography. He obtained his Master's Degree in Geography from Aligarh Muslim University in 1960, marking the beginning of a lifetime of academic contribution, and was recently awarded his Doctoral degree for his advanced research.
                </p>
                <p>
                  In 1984, Dr. Sharma underwent the intensive Pre-Antarctic Acclimatisation Course at the Sonemarg and Machhoi glacier under the High Altitude Warfare School (HAWS) in Gulmarg, preparing him for the rigorous conditions of polar field studies. His research interests also extend to environmental ecology, highlighted by his well-researched 1983 study, <em>'SOCIAL FORESTRY IN THE PIN-DAR VALLEY'</em>, published in the prestigious <em>Indian Journal of Forestry</em>.
                </p>
                <p>
                  Dr. Sharma's academic career spans over 31 years of teaching excellence, having served as a lecturer at N.A.S. College, Meerut, and Head of the Faculty of Geography at the Military School, Belgaum. He is presently the Head of the Geography Department at the Army Cadet College (ACC) Wing of the Indian Military Academy (IMA), Dehradun, which is affiliated to Jawaharlal Nehru University.
                </p>
                <p>
                  A life member of both the Indian Science Congress and the Indian Council of Geographers, Dr. Sharma made a landmark contribution in 1992 with his book <em>'Antarctica: Geopolitics and Resources'</em>, which stands as perhaps the first book written by an Indian geographer on the frozen continent. For his dedicated contributions, he is recognized as an honored Uttarakhand recipient.
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
