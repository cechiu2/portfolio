"use client";

// GatherApproachSection — "My Approach" section for the Gather case study.
// Two prose paragraphs followed by three staggered stat highlight cards.
import { motion, useReducedMotion, type Variants } from "framer-motion";

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const stats = [
  { value: "36 screens", label: "designed end to end" },
  { value: "2 months", label: "initial engagement" },
  { value: "V0 + V1", label: "user stories executed" },
];

export default function GatherApproachSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="approach-heading" className="mx-auto max-w-3xl">
      <h2
        id="approach-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-4"
      >
        My Approach
      </h2>

      {/* Prose */}
      <motion.div
        className="space-y-5 text-base leading-relaxed text-primary/80"
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p>
          Because the team was small and working fast, my process was
          collaborative but autonomous. The team had documented detailed user
          stories organized by version (V0 through V3), which gave me a clear
          prioritization framework from day one. I worked through V0 and V1
          stories, designing screens and flows as needed, and we&rsquo;d sync
          regularly over comments in Figma and direct messages to discuss edge
          cases and iterate.
        </p>
        <p>
          One thing that shaped my process significantly: my background as a
          software engineer. All while I was designing screens, I was also
          thinking about how they&rsquo;d be built. I gravitated toward patterns
          I knew were clean to implement, like reusable event cards, consistent
          component states, and clear separation between views. This meant fewer
          back-and-forth cycles with the frontend team on feasibility and more
          time spent on the design itself. I never had to be told &ldquo;we
          can&rsquo;t build that&rdquo; because I was already designing with
          implementation in mind.
        </p>
      </motion.div>

      {/* Stat cards */}
      <motion.dl
        className="mt-10 grid grid-cols-3 gap-4"
        variants={cardContainerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {stats.map(({ value, label }) => (
          <motion.div
            key={label}
            variants={cardVariants}
            className="rounded-xl bg-primary/5 px-5 py-6"
          >
            {/* dt (term) before dd (description) — required by HTML spec */}
            <dt
              className="text-2xl leading-tight text-primary"
              style={{ fontFamily: "var(--font-young-serif)" }}
            >
              {value}
            </dt>
            <dd className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary/60">
              {label}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
