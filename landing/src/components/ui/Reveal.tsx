import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { rise, VIEWPORT } from "../../lib/motion";

/** Wrap any block in a scroll-triggered fade+rise reveal. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
