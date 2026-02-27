"use client";

// ResearchSection — case study section for research and discovery. Renders a section
// heading, children for the intro narrative, and three ResearchCards in a responsive
// grid. Cards stagger in sequentially on scroll entry via Framer Motion.
import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import ResearchCard, { type ResearchCardProps } from "./ResearchCard";

interface ResearchSectionProps {
  children: ReactNode;
  cards: ResearchCardProps[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ResearchSection({ children, cards }: ResearchSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="research-heading" className="mx-auto max-w-3xl">
      <h2
        id="research-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-4"
      >
        Research &amp; Discovery
      </h2>

      <div className="mb-10 space-y-4 text-base leading-relaxed text-primary/70">{children}</div>

      <motion.div
        className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
        variants={containerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={cardVariants}>
            <ResearchCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
