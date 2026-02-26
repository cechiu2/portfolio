"use client";

// GatherOutcomeSection — outcome section for the Gather case study.
// Warm blush background card matching the visual treatment of the Goodreads OutcomeSection.
import { motion, useReducedMotion } from "framer-motion";

export default function GatherOutcomeSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="outcome-heading">
      <motion.div
        className="rounded-2xl bg-blush/20 px-8 py-10 sm:px-10 sm:py-12"
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          id="outcome-heading"
          className="text-xs font-semibold uppercase tracking-widest text-purple mb-6"
        >
          Outcome
        </h2>

        <p className="text-base leading-relaxed text-primary/80">
          The app is currently in development and approaching release. The founder and frontend
          team have continued to reach out for design support even beyond the initial engagement
          — a signal the working relationship and the designs have held up well as the product
          has moved closer to shipping.
        </p>
      </motion.div>
    </section>
  );
}
