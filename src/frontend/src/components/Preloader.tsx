import { Compass } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState("GEOGRAPHY");

  useEffect(() => {
    // Determine word based on progress
    if (progress < 25) {
      setCurrentWord("GEOGRAPHY");
    } else if (progress < 50) {
      setCurrentWord("CARTOGRAPHY");
    } else if (progress < 75) {
      setCurrentWord("ANTARCTICA 1962");
    } else {
      setCurrentWord("DR. I.C. SHARMA");
    }
  }, [progress]);

  useEffect(() => {
    let start = 0;
    const duration = 1600; // 1.6s loading time
    const intervalTime = 16; // ~60fps
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500); // Small pause at 100% for smooth exit
      } else {
        setProgress(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Format progress as 2 digits or 3 digits
  const formattedProgress = progress < 10 ? `0${progress}` : `${progress}`;

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-8 bg-[#0a1424] text-white select-none pointer-events-auto"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-xs font-bold tracking-[0.25em] uppercase text-white/50">
        <span>Dr. I.C. Sharma</span>
        <span>Polar Archive</span>
      </div>

      {/* Center Counter and Typography */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center text-accent/80"
        >
          <Compass className="w-6 h-6 text-accent" />
        </motion.div>

        {/* Big elegant typography counter */}
        <div className="overflow-hidden h-24 md:h-36 flex items-center justify-center">
          <span className="font-display text-8xl md:text-[11rem] font-black leading-none tracking-tighter text-white">
            {formattedProgress}
          </span>
          <span className="font-display text-2xl md:text-4xl font-bold self-start mt-2 text-accent">
            %
          </span>
        </div>

        {/* Dynamic loading word */}
        <div className="h-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-accent"
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Progress details */}
      <div className="flex justify-between items-end">
        <div className="text-[10px] text-white/40 max-w-[200px] leading-relaxed uppercase tracking-wider text-left">
          Latitude: 90.0000° S<br />
          Ellsworth Coordinates
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest text-right">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </motion.div>
  );
}
