import type { Config } from "tailwindcss";

/**
 * KanoonDrishti AI — "Contemporary Digital Courtroom" design tokens.
 * All colors, typography, radii, shadows and easing live here so the
 * component layer stays purely compositional.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E7",
        parchment: "#E9DDC8",
        paper: "#FFFDF8",
        navy: {
          DEFAULT: "#182333",
          deep: "#111A27",
          raised: "#22314A",
        },
        walnut: "#5B402B",
        brass: {
          DEFAULT: "#A27A4C",
          soft: "#C4A377",
        },
        ink: "#1E2329",
        muted: "#70685E",
        indigo: {
          ai: "#5556C9",
          soft: "#EEEEFB",
          deep: "#4A4B9E",
        },
        border: {
          DEFAULT: "#D8CCB8",
          soft: "#E5DCCB",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Manrope"', '"Segoe UI"', "system-ui", "sans-serif"],
        devanagari: ['"Noto Serif Devanagari"', "serif"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { letterSpacing: "0.22em", lineHeight: "1.4" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,35,41,0.06), 0 2px 8px rgba(30,35,41,0.05)",
        raised: "0 2px 6px rgba(30,35,41,0.07), 0 12px 32px rgba(30,35,41,0.10)",
        deep: "0 4px 12px rgba(24,35,51,0.10), 0 24px 64px rgba(24,35,51,0.16)",
        nav: "0 4px 24px rgba(30,35,41,0.06)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        shell: "1180px",
      },
    },
  },
  plugins: [],
} satisfies Config;
