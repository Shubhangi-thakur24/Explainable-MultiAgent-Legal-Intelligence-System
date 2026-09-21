import type { Variants } from "framer-motion";

/** Shared easing — a soft, decisive "settle" used across the page. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Default viewport config for scroll-triggered reveals. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Fade + rise, the standard editorial reveal. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE, delay: delay * 0.12 },
  }),
};

/** Container that staggers its children. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Child of a stagger container. */
export const riseChild: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** Slow cinematic scale-in for hero imagery. */
export const cinematic: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.8, ease: EASE },
  },
};
