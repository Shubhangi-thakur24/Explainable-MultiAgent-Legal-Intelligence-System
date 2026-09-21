import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, Mail, User } from "lucide-react";
import { AuthLayout } from "../components/AuthLayout";
import { TextField } from "../components/ui/TextField";
import { Button } from "../components/ui/Button";
import { riseChild, stagger } from "../lib/motion";
import { cn } from "../lib/utils";

const ROLES = [
  { id: "advocate", label: "Advocate / Counsel" },
  { id: "student", label: "Law Student" },
  { id: "researcher", label: "Researcher" },
  { id: "other", label: "Other" },
];

/**
 * Register — themed placeholder form matching the platform's RBAC roles,
 * ready to wire to the FastAPI auth endpoints.
 */
export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("advocate");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AuthLayout
      sideTitle={
        <>
          Begin with <em className="italic text-brass-soft">the evidence.</em>
        </>
      }
      sideBody="Create your workspace and bring your first document — judgment, petition, FIR or affidavit, in Hindi or English. KanoonDrishti will keep every insight pinned to its source."
    >
      <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
        <motion.p
          variants={riseChild}
          className="mb-4 font-sans text-eyebrow font-bold uppercase text-brass"
        >
          Create Account
        </motion.p>
        <motion.h1
          variants={riseChild}
          className="font-serif text-[clamp(32px,4.5vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink"
        >
          Open a new <em className="italic text-walnut">case file.</em>
        </motion.h1>
        <motion.p variants={riseChild} className="mt-3 text-[15px] leading-relaxed text-muted">
          A connected workspace for documents, research and evidence.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            role="status"
            className="mt-8 flex items-start gap-3 rounded border border-[#3E6B4B]/25 bg-[#3E6B4B]/10 p-5"
          >
            <CheckCircle2 size={20} className="mt-0.5 flex-none text-[#3E6B4B]" strokeWidth={2} />
            <div>
              <p className="font-serif text-[19px] font-semibold text-ink">Almost there.</p>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">
                Registration will be connected to the KanoonDrishti backend. This form is a
                themed preview of the onboarding experience.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form variants={riseChild} onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate>
            <TextField
              label="Full name"
              type="text"
              name="name"
              icon={User}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            <TextField
              label="Email address"
              type="email"
              name="email"
              icon={Mail}
              placeholder="you@chambers.in"
              autoComplete="email"
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              icon={Lock}
              placeholder="At least 8 characters"
              autoComplete="new-password"
              required
            />

            {/* Role selector */}
            <fieldset>
              <legend className="mb-2 block text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-walnut">
                I am a
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    role="radio"
                    aria-checked={role === r.id}
                    onClick={() => setRole(r.id)}
                    className={cn(
                      "rounded-sm border px-3 py-2.5 text-[13px] font-bold transition-all duration-200 ease-out",
                      role === r.id
                        ? "border-brass bg-brass/10 text-walnut shadow-card"
                        : "border-border bg-paper text-muted hover:border-brass/50 hover:text-ink",
                    )}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="inline-flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-muted">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-0.5 h-4 w-4 cursor-pointer rounded-sm border-border accent-[#182333]"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="font-bold text-walnut no-underline hover:text-brass">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="font-bold text-walnut no-underline hover:text-brass">
                  Privacy Policy
                </a>
                , and understand KanoonDrishti does not provide legal advice.
              </span>
            </label>

            <Button type="submit" variant="primary" size="lg" className="mt-1 w-full">
              Create Account
            </Button>
          </motion.form>
        )}

        <motion.div variants={riseChild} className="mt-8 border-t border-border-soft pt-6 text-center">
          <p className="text-[14px] text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-walnut no-underline transition-colors duration-200 hover:text-brass"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
}
