import { useTheme } from "@/hooks/useTheme";
import { BookOpen, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/timeline", label: "Timeline" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: location.pathname is intentionally used as trigger
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-card/95 border-b border-border/60"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.logo"
        >
          <span className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-body font-medium text-muted-foreground tracking-widest uppercase">
              Dr.
            </span>
            <span className="font-display text-sm font-semibold text-foreground tracking-wide">
              I.C. Sharma
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`px-3 py-2 text-sm font-body transition-smooth relative group ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-ocid={`nav.${label.toLowerCase()}_link`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label="Toggle dark mode"
            data-ocid="nav.theme_toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
            data-ocid="nav.mobile_menu_button"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
            data-ocid="nav.mobile_menu"
          >
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block px-3 py-2 rounded-md text-sm font-body transition-smooth ${
                      location.pathname === to
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    data-ocid={`nav.mobile_${label.toLowerCase()}_link`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
