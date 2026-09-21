import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import heroImage from "../assets/hero-courtroom.jpg";
import { Wordmark } from "./ui/Wordmark";
import { EASE } from "../lib/motion";

/**
 * Shared auth shell — a split "case file" composition.
 * Left: dark courtroom panel with the photograph, wordmark and an evidence
 * vignette. Right: warm ivory form column that slides in like a fresh page.
 */
export function AuthLayout({
  children,
  sideTitle,
  sideBody,
}: {
  children: ReactNode;
  sideTitle: ReactNode;
  sideBody: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen bg-ivory">
      {/* ---- Left courtroom panel (desktop) ---- */}
      <motion.aside
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative hidden w-[46%] overflow-hidden text-ivory lg:flex lg:flex-col lg:justify-between"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={reduceMotion ? {} : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(200deg, rgba(17,26,39,0.55), rgba(17,26,39,0.82) 70%), linear-gradient(to right, rgba(17,26,39,0.2), rgba(17,26,39,0.55))",
          }}
        />

        <div className="relative z-[2] p-10">
          <Wordmark light />
        </div>

        <div className="relative z-[2] p-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          >
            <span className="mb-4 block h-px w-14 bg-brass" />
            <h2 className="max-w-[16ch] font-serif text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15]">
              {sideTitle}
            </h2>
            <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.7] text-ivory/70">{sideBody}</p>
          </motion.div>

          {/* Evidence vignette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            className="mt-8 inline-flex items-center gap-3 rounded border border-ivory/15 bg-navy-deep/60 px-4 py-3 backdrop-blur-sm"
          >
            <span className="h-[9px] w-[9px] rounded-full bg-brass shadow-[0_0_0_4px_rgba(162,122,76,0.2)]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-ivory/75">
              Evidence-grounded · Hindi &amp; English
            </span>
          </motion.div>
        </div>
      </motion.aside>

      {/* ---- Right form column ---- */}
      <div className="relative flex w-full flex-col lg:w-[54%]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-6 sm:px-10">
          <div className="lg:hidden">
            <Wordmark />
          </div>
          <Link
            to="/"
            className="group ml-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-muted no-underline transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2.4}
              className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-10">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
            className="w-full max-w-[440px]"
          >
            {children}
          </motion.div>
        </div>

        <p className="px-5 pb-6 text-center text-[12px] text-muted/80 sm:px-10">
          Assists legal understanding · Does not provide legal advice
        </p>
      </div>
    </div>
  );
}
