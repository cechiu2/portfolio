"use client";

// AnimatedTagline — cycles through descriptor phrases with a fade transition.
// Respects prefers-reduced-motion: shows only the first phrase statically if enabled.
// aria-live="polite" on the wrapper so screen readers announce each new phrase.
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const phrases = [
  "I craft accessible, inclusive experiences.",
  "I love building at the intersection of design and code.",
  "I have a CS degree from UIUC. I-L-L!",
];

const textStyles = {
  fontFamily: "var(--font-young-serif)",
} as const;

// Smaller than the h1 above it — text-xl creates clear hierarchy under text-5xl.
const baseClass = "text-xl leading-relaxed text-primary";

export default function AnimatedTagline() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // null (unresolved) is falsy — treated same as false (animate).
    // If reduced motion is detected the effect re-runs, clears the interval, and stops.
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  // Static fallback — no animation, no live region (content never changes)
  if (prefersReducedMotion) {
    return (
      <p className={baseClass} style={textStyles}>
        {phrases[0]}
      </p>
    );
  }

  return (
    // aria-live="polite" on the stable wrapper so screen readers announce
    // each incoming phrase without the element entering/leaving the DOM
    <div aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={baseClass}
          style={textStyles}
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
