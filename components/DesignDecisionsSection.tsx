"use client";

// DesignDecisionsSection — case study section for key design decisions.
//
// Desktop (no reduced motion): sticky scroll — the visual column stays fixed while the
// user scrolls through each text block. The visual crossfades via AnimatePresence when
// a new block reaches 40% in view, tracked with Framer Motion's useInView.
//
// Mobile and prefers-reduced-motion: simple stacked layout (text then visual per block)
// with a gentle opacity fade-in on scroll entry.
import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import DecisionBlock, { type DecisionBlockProps } from "./DecisionBlock";

interface DesignDecisionsSectionProps {
  blocks: DecisionBlockProps[];
}

export default function DesignDecisionsSection({
  blocks,
}: DesignDecisionsSectionProps) {
  const prefersReduced = useReducedMotion();

  // Refs for the three text blocks — used to drive the sticky visual swap on desktop.
  // Hooks must be called unconditionally; these are only consumed in the desktop layout.
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const in0 = useInView(ref0, { amount: 0.4 });
  const in1 = useInView(ref1, { amount: 0.4 });
  const in2 = useInView(ref2, { amount: 0.4 });

  const [activeIndex, setActiveIndex] = useState(0);

  // Only update activeIndex when at least one block is in view —
  // prevents reverting to 0 when the user scrolls past the section.
  useEffect(() => {
    if (in2) { setActiveIndex(2); return; }
    if (in1) { setActiveIndex(1); return; }
    if (in0) { setActiveIndex(0); return; }
  }, [in0, in1, in2]);

  const blockRefs = [ref0, ref1, ref2];

  return (
    <section aria-labelledby="design-decisions-heading">
      <h2
        id="design-decisions-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-4"
      >
        Design Decisions
      </h2>

      {/* ── Reduced motion: stacked layout, all screen sizes ─────────────── */}
      {prefersReduced && (
        <div className="mt-8 space-y-16">
          {blocks.map((block) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
            >
              <DecisionBlock {...block} />
              <div className="mt-8">{block.visual}</div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Normal motion ────────────────────────────────────────────────── */}
      {!prefersReduced && (
        <>
          {/* Mobile: stacked text + visual per block */}
          <div className="mt-8 space-y-16 sm:hidden">
            {blocks.map((block) => (
              <div key={block.number}>
                <DecisionBlock {...block} />
                <div className="mt-8">{block.visual}</div>
              </div>
            ))}
          </div>

          {/* Desktop: sticky two-column layout */}
          <div className="hidden sm:flex mt-8 gap-10 items-start">
            {/* Left column — scrollable text blocks */}
            <div className="flex-1">
              {blocks.slice(0, 3).map((block, i) => (
                <div
                  key={block.number}
                  ref={blockRefs[i]}
                  className="flex min-h-[75vh] items-center py-16"
                >
                  <DecisionBlock {...block} />
                </div>
              ))}
            </div>

            {/* Right column — sticky visual that swaps on scroll */}
            <div className="w-[40%] shrink-0">
              <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex w-full items-center justify-center"
                  >
                    {blocks[activeIndex]?.visual}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
