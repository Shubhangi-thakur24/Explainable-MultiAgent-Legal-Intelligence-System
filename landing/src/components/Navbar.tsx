import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./ui/Button";
import { Wordmark } from "./ui/Wordmark";
import { cn } from "../lib/utils";
import { EASE } from "../lib/motion";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Courtroom", href: "#courtroom" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-all duration-500 ease-out",
        scrolled
          ? "border-border-soft bg-paper/85 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center gap-8 transition-all duration-300 ease-out",
          scrolled ? "h-[62px]" : "h-[76px]",
        )}
      >
        <Wordmark />

        <nav aria-label="Primary" className="mx-auto hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1.5 text-[14px] font-semibold text-muted no-underline transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          <ButtonLink to="/login" variant="ghost" size="sm">
            Sign In
          </ButtonLink>
          <ButtonLink to="/register" variant="primary" size="sm">
            Explore Platform
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid h-11 w-11 place-items-center rounded-sm border border-border text-ink lg:hidden"
        >
          {open ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-border-soft bg-paper shadow-raised lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col px-5 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border-soft px-1 py-3.5 text-[16px] font-semibold text-ink no-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3 px-5 py-5">
              <ButtonLink to="/login" variant="ghost" className="flex-1" onClick={() => setOpen(false)}>
                Sign In
              </ButtonLink>
              <ButtonLink
                to="/register"
                variant="primary"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                Explore Platform
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
