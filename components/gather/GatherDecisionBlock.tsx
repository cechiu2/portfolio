"use client";

// GatherDecisionBlock — a single design decision block for the Gather case study.
// Desktop: two-column layout — text on one side, visuals on the other.
// The reverse prop flips which side is which for visual rhythm alternation.
// Mobile: always stacks vertically, text above visuals.
// Each block fades up independently on scroll entry.
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface GatherDecisionBlockProps {
  number: string;
  title: string;
  body: ReactNode;
  /** Flexible visual slot — single mockup, comparison, or screen gallery */
  visuals?: ReactNode;
  /** Flip text and visual columns for visual rhythm alternation */
  reverse?: boolean;
}

export default function GatherDecisionBlock({
  number,
  title,
  body,
  visuals,
  reverse = false,
}: GatherDecisionBlockProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* flex-col on mobile (text first, visuals below); flex-row or flex-row-reverse on desktop */}
      <div
        className={`flex flex-col gap-10 sm:gap-14 ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        {/* Text column */}
        <div className="flex-1">
          {/* Large decorative number — aria-hidden because it's purely visual */}
          <span
            className="block select-none text-8xl leading-none text-primary/[0.07]"
            style={{ fontFamily: "var(--font-young-serif)" }}
            aria-hidden="true"
          >
            {number}
          </span>
          <h3
            className="mt-1 text-2xl leading-snug text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            {title}
          </h3>
          {body && (
            <div className="mt-5 space-y-4 text-base leading-relaxed text-primary/80">
              {body}
            </div>
          )}
        </div>

        {/* Visual column */}
        <div className="flex-1">
          {visuals ?? (
            // TODO: replace with screen mockup(s) once design assets are ready
            <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-primary/5">
              <p className="text-xs italic text-primary/60">Visual coming soon</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
