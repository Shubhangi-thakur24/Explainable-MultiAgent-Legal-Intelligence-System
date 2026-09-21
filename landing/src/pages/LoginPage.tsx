import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, Mail } from "lucide-react";
import { AuthLayout } from "../components/AuthLayout";
import { TextField } from "../components/ui/TextField";
import { Button } from "../components/ui/Button";
import { riseChild, stagger } from "../lib/motion";

/**
 * Sign In — themed placeholder form, ready to wire to the FastAPI auth
 * endpoints. Submission currently shows a confirmation state only.
 */
export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AuthLayout
      sideTitle={
        <>
          Welcome back to <em className="italic text-brass-soft">the record.</em>
        </>
      }
      sideBody="Your matters, documents and evidence trails are exactly where you left them — connected, cited and ready to interrogate."
    >
      <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
        <motion.p
          variants={riseChild}
          className="mb-4 font-sans text-eyebrow font-bold uppercase text-brass"
        >
          Sign In
        </motion.p>
        <motion.h1
          variants={riseChild}
          className="font-serif text-[clamp(32px,4.5vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink"
        >
          Open your <em className="italic text-walnut">workspace.</em>
        </motion.h1>
        <motion.p variants={riseChild} className="mt-3 text-[15px] leading-relaxed text-muted">
          Continue where the evidence left off.
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
              <p className="font-serif text-[19px] font-semibold text-ink">Request received.</p>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">
                Authentication will be connected to the KanoonDrishti backend. This form is a
                themed preview of the sign-in experience.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form variants={riseChild} onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate>
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
              placeholder="Your password"
              autoComplete="current-password"
              required
            />

            <div className="flex items-center justify-between">
              <label className="inline-flex cursor-pointer items-center gap-2.5 text-[13.5px] font-semibold text-muted">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 cursor-pointer rounded-sm border-border accent-[#182333]"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-[13.5px] font-bold text-walnut no-underline transition-colors duration-200 hover:text-brass"
              >
                Forgot password?
              </a>
            </div>

            <Button type="submit" variant="primary" size="lg" className="mt-1 w-full">
              Sign In
            </Button>
          </motion.form>
        )}

        <motion.div variants={riseChild} className="mt-8 border-t border-border-soft pt-6 text-center">
          <p className="text-[14px] text-muted">
            New to KanoonDrishti?{" "}
            <Link
              to="/register"
              className="font-bold text-walnut no-underline transition-colors duration-200 hover:text-brass"
            >
              Create an account
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </AuthLayout>
  );
}
