import { useId, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  hint?: string;
}

/**
 * Themed form input — parchment surface, brass focus ring, optional leading
 * icon, and an accessible show/hide toggle for password fields.
 */
export function TextField({ label, icon: Icon, hint, type = "text", className, ...rest }: TextFieldProps) {
  const id = useId();
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword && show ? "text" : type;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-walnut"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            strokeWidth={2}
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
        )}
        <input
          id={id}
          type={resolvedType}
          className={cn(
            "w-full rounded-sm border border-border bg-paper py-3 pr-4 text-[15px] text-ink placeholder:text-muted/60",
            "transition-all duration-200 ease-out",
            "focus:border-brass focus:shadow-[0_0_0_3px_rgba(162,122,76,0.16)] focus:outline-none",
            Icon ? "pl-11" : "pl-4",
            isPassword && "pr-12",
          )}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-sm text-muted transition-colors duration-200 hover:text-walnut"
          >
            {show ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
          </button>
        )}
      </div>
      {hint && <p className="mt-1.5 text-[12.5px] text-muted">{hint}</p>}
    </div>
  );
}
