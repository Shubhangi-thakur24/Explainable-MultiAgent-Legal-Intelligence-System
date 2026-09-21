import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { SplashScreen } from "./components/SplashScreen";
import { EASE } from "./lib/motion";

/** Scroll to top on route change (in-page #anchors keep native behavior). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/** Soft page transition wrapper. */
function PageFade({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <SplashScreen />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageFade>
                <LandingPage />
              </PageFade>
            }
          />
          <Route
            path="/login"
            element={
              <PageFade>
                <LoginPage />
              </PageFade>
            }
          />
          <Route
            path="/register"
            element={
              <PageFade>
                <RegisterPage />
              </PageFade>
            }
          />
          <Route
            path="*"
            element={
              <PageFade>
                <LandingPage />
              </PageFade>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
