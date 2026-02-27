"use client";

// OutcomeSection — case study section for results. Renders a prose summary, a large
// pull quote from a participant with archetype label, and a soft blush background to
// visually separate this section from the surrounding white sections.
import { motion, useReducedMotion } from "framer-motion";

interface OutcomeSectionProps {
  prose: string;
  quote: string;
  citeLabel: string;
}

export default function OutcomeSection({
  prose,
  quote,
  citeLabel,
}: OutcomeSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="outcome-heading" className="mx-auto max-w-3xl">
      <motion.div
        className="rounded-2xl bg-blush/20 px-8 py-10 sm:px-10 sm:py-12 space-y-8"
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          id="outcome-heading"
          className="text-xs font-semibold uppercase tracking-widest text-purple"
        >
          Outcome
        </h2>

        <p className="text-base leading-relaxed text-primary/80">{prose}</p>

        {/* Pull quote — large, editorial, left-border accent */}
        <blockquote className="border-l-[3px] border-purple pl-6">
          <p
            className="text-2xl leading-snug text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-4">
            <cite className="not-italic text-xs font-semibold uppercase tracking-widest text-purple">
              {citeLabel}
            </cite>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
