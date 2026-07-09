import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-base font-semibold text-foreground mb-2">
              Dr. I.C. Sharma
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scholar, Researcher & Author. Advancing academic inquiry through
              rigorous research and interdisciplinary study.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              Pages
            </h4>
            <ul className="space-y-1.5">
              {[
                { to: "/about", label: "About" },
                { to: "/timeline", label: "Timeline" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-widest mb-3">
              Contact
            </h4>
            <a
              href="mailto:ic.sharma@university.edu"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Mail className="w-4 h-4" />
              ic.sharma@university.edu
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Dr. I.C. Sharma. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-smooth"
          >
            Built with love using caffeine.ai
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
