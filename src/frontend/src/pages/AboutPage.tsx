import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen, GraduationCap, Lightbulb } from "lucide-react";
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
    year: "1985",
    title: "Bachelor of Arts, University of Delhi",
    desc: "First class honours in English Literature and Linguistics, laying the foundation for a lifetime of scholarly inquiry.",
  },
  {
    year: "1988",
    title: "Master of Philosophy, JNU",
    desc: "Postgraduate research at Jawaharlal Nehru University, specialising in comparative cultural studies and postcolonial theory.",
  },
  {
    year: "1993",
    title: "Doctorate, University of Oxford",
    desc: "Completed doctoral thesis on epistemological frameworks in post-colonial humanities under Prof. James Harrison.",
  },
  {
    year: "1994",
    title: "Postdoctoral Fellowship, Harvard",
    desc: "Two-year fellowship at the Mahindra Humanities Center, advancing research in cross-cultural cognitive frameworks.",
  },
  {
    year: "2001",
    title: "Associate Professor Appointment",
    desc: "Appointed Associate Professor at a leading national institution, establishing a pioneering interdisciplinary research centre.",
  },
  {
    year: "2010",
    title: "Full Professorship",
    desc: "Elevated to Full Professor following sustained contribution to scholarship, teaching excellence, and international collaboration.",
  },
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
  "Critical Discourse Analysis",
];

interface Achievement {
  icon: LucideIcon;
  text: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Award,
    text: "National Academy of Letters Award for Distinguished Scholarship (2015)",
  },
  {
    icon: BookOpen,
    text: "Author of 12 peer-reviewed monographs published by Oxford, Cambridge, and Routledge",
  },
  {
    icon: GraduationCap,
    text: "Supervised over 45 doctoral candidates across three continents",
  },
  {
    icon: Lightbulb,
    text: "Keynote speaker at 30+ international academic conferences",
  },
  {
    icon: Award,
    text: "Recipient of the Rajiv Gandhi National Fellowship for Outstanding Research",
  },
  {
    icon: BookOpen,
    text: "Founding Editor of the Journal of Interdisciplinary Humanities (2008–present)",
  },
];

export default function AboutPage() {
  const bioRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const interestsRef = useScrollReveal();
  const achievementsRef = useScrollReveal();

  return (
    <div data-ocid="about.page">
      {/* Page Header */}
      <section
        className="py-20 px-6 bg-card border-b border-border"
        data-ocid="about.header.section"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
              Scholar · Researcher · Author
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2">
              About Dr. Sharma
            </h1>
            <div className="w-12 h-0.5 bg-secondary mt-4" />
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
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl" />
                <div
                  className="relative w-64 h-80 rounded-xl shadow-lg border border-border flex flex-col items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(160deg, #0f1f3d 0%, #1a3057 60%, #2d4a7a 100%)",
                  }}
                  aria-label="Dr. I.C. Sharma"
                >
                  <span
                    className="font-display font-bold text-4xl tracking-widest select-none"
                    style={{ color: "rgba(255,255,255,0.18)", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    ICS
                  </span>
                  <span
                    className="mt-3 font-display font-semibold text-xs tracking-[0.25em] uppercase"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    Dr. I.C. Sharma
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-md">
                  <p className="text-xs text-muted-foreground">
                    Professor since
                  </p>
                  <p className="font-display text-lg font-bold text-foreground">
                    1994
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-foreground">
                Biography
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                A Life Devoted to Learning
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                <p>
                  Dr. I.C. Sharma is a distinguished scholar of international
                  renown whose intellectual journey spans over four decades of
                  groundbreaking contribution to the humanities. Born into a
                  family with a deep reverence for learning, Dr. Sharma pursued
                  his early education with exceptional distinction, earning
                  scholarships that took him from New Delhi to Oxford and
                  beyond.
                </p>
                <p>
                  His academic career is defined by a rare combination of
                  rigorous theoretical inquiry and a genuine passion for
                  cross-cultural dialogue. Drawing on traditions from both
                  Western and South Asian intellectual heritage, Dr. Sharma has
                  pioneered methodological frameworks that have reshaped
                  conversations in postcolonial studies, cognitive linguistics,
                  and the philosophy of culture.
                </p>
                <p>
                  As an educator, Dr. Sharma has mentored generations of
                  scholars who now lead departments and research centres around
                  the world. His teaching philosophy — that learning is a
                  reciprocal act of mutual discovery — has earned him enduring
                  affection and respect from students and colleagues alike.
                </p>
                <p>
                  Beyond the academy, Dr. Sharma has served on editorial boards
                  of prestigious journals, contributed to national curriculum
                  committees, and delivered public lectures that bring scholarly
                  insight to broader audiences. He continues to write, research,
                  and teach with undiminished vigour and curiosity.
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
