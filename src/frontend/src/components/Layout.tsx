import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";

export function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("site-preloaded");
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("site-preloaded", "true");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AnimatePresence>
        {loading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <Navbar />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
