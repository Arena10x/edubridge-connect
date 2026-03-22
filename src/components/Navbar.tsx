import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Lock } from "lucide-react";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Register", href: "#register" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = window.localStorage.getItem("edubridge-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    window.localStorage.setItem("edubridge-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 section-padding"
    >
      <div className="mx-auto max-w-6xl mt-3">
        <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-heading font-bold text-lg tracking-tight text-foreground">
          <img 
              src="/WhatsApp Image 2026-03-22 at 10.08.21 PM.jpeg" 
              alt="logo" 
              className="h-8 w-8 object-contain"
            />
            CODE VICHAR <span className="text-accent">×</span> KODEABLE

            <img 
              src="/logo2.png"
              alt="logo-right"
              className="h-15 w-10 object-contain ml-1"
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
           
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="ml-2 p-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
              type="button"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#register"
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-2xl mt-2 p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/admin"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <Lock size={14} className="text-primary" />
                Admin
              </span>
            </a>
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="w-full mt-2 px-4 py-3 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-secondary transition-colors"
              type="button"
            >
              {isDark ? "Switch to Light" : "Switch to Dark"}
            </button>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 text-sm font-semibold text-center rounded-xl bg-primary text-primary-foreground"
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
