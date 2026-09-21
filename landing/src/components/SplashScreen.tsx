import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/motion";

const SESSION_KEY = "kd-splash-shown";

/**
 * Branded splash screen — shown once per session on first load.
 * A brass seal draws itself, the wordmark rises, a hairline sweeps beneath,
 * then the navy curtain lifts away to reveal the page.
 */
export function SplashScreen({ onDone }: { onDone?: () => void }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.sessionStorage.getItem(SESSION_KEY);
  });

  useEffect(() => {
    if (!visible) {
      onDone?.();
      return;
    }
    document.body.style.overflow = "hidden";
    const total = reduceMotion ? 900 : 2400;
    const t = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
      onDone?.();
    }, total);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [visible, reduceMotion, onDone]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-label="KanoonDrishti AI is loading"
          initial={{ y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0.3 } }
              : { y: "-100%", transition: { duration: 0.8, ease: EASE } }
          }
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 30%, rgba(162,122,76,0.10), transparent 65%), linear-gradient(to bottom, #111A27, #182333)",
          }}
        >
          {/* Seal — circle draws, glyph fades in */}
          <div className="relative mb-7 h-[104px] w-[104px]">
            <svg viewBox="0 0 104 104" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
              <motion.circle
                cx="52"
                cy="52"
                r="49"
                stroke="#A27A4C"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: reduceMotion ? 1 : 0, rotate: -90 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.1, ease: EASE, delay: 0.15 }}
                style={{ transformOrigin: "center" }}
              />
              <motion.circle
                cx="52"
                cy="52"
                r="42"
                stroke="#C4A377"
                strokeWidth="0.75"
                strokeDasharray="2 5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.9 }}
              />
            </svg>
            <motion.span
              aria-hidden
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: reduceMotion ? 0 : 0.7 }}
              className="absolute inset-0 grid place-items-center font-devanagari text-[42px] font-semibold leading-none text-brass-soft"
            >
              दृ
            </motion.span>
          </div>

          {/* Wordmark */}
          <div className="overflow-hidden">
            <motion.h1
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: reduceMotion ? 0.1 : 1.0 }}
              className="font-serif text-[clamp(30px,5vw,40px)] font-bold tracking-[0.005em] text-ivory"
            >
              KanoonDrishti
              <span className="ml-1.5 align-super font-sans text-[13px] font-extrabold tracking-[0.14em] text-brass-soft">
                AI
              </span>
            </motion.h1>
          </div>

          {/* Hairline sweep + tagline */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: EASE, delay: reduceMotion ? 0 : 1.25 }}
            className="mt-5 h-px w-[180px] origin-center bg-gradient-to-r from-transparent via-brass to-transparent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0.2 : 1.45 }}
            className="mt-4 text-[11.5px] font-bold uppercase tracking-[0.28em] text-ivory/50"
          >
            See the Law · Understand the Evidence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
