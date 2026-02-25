"use client";

// ResearchSection — case study section for research and discovery. Renders a section
// heading, a brief intro, and three ResearchCards in a responsive grid. Cards stagger
// in sequentially on scroll entry via Framer Motion.
import { motion, useReducedMotion } from "framer-motion";
import ResearchCard, { type ResearchCardProps } from "./ResearchCard";

interface ResearchSectionProps {
  intro: string;
  cards: ResearchCardProps[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ResearchSection({ intro, cards }: ResearchSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="research-heading">
      <h2
        id="research-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-4"
      >
        Research &amp; Discovery
      </h2>

      <p className="mb-10 text-base leading-relaxed text-primary/70">{intro}</p>

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
