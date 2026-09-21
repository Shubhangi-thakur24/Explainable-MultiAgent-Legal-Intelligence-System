import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type Variant = "primary" | "outline" | "ghost" | "brass" | "outlineLight";
type Size = "sm" | "md" | "lg";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  /** Router destination — renders a <Link>. Use `href` for in-page anchors. */
  to?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm border font-sans font-bold tracking-[0.01em] no-underline " +
  "transition-all duration-300 ease-out will-change-transform " +
  "active:translate-y-px active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none";

const variants: Record<Variant, string> = {
  primary:
    "border-transparent bg-navy text-paper shadow-card hover:bg-navy-raised hover:shadow-raised hover:-translate-y-px",
  outline:
    "border-navy/30 bg-transparent text-navy hover:border-navy hover:bg-navy/5 hover:-translate-y-px",
  ghost: "border-transparent bg-transparent text-ink hover:bg-navy/5",
  brass:
    "border-transparent bg-brass text-[#FFF9EE] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-[#B48A59] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]",
  outlineLight:
    "border-ivory/35 bg-transparent text-ivory hover:border-ivory/80 hover:bg-ivory/10 hover:-translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "px-[18px] py-[9px] text-[13.5px]",
  md: "px-[26px] py-[13px] text-[15px]",
  lg: "px-8 py-4 text-[15.5px]",
};

/** Link styled as a button — CTAs on the landing page navigate, never submit. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  to,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (to) {
    return (
      <Link to={to} className={classes} onClick={rest.onClick as never}>
        {children}
      </Link>
    );
  }
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** True <button> for form submits, sharing the same visual system. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
