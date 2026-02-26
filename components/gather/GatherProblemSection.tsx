"use client";

// GatherProblemSection — "The Story" section for the Gather case study.
// Two-column layout on desktop: large pull quote on the left, prose on the right.
// Stacked on mobile. Both columns fade in together on scroll entry.
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function GatherProblemSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="story-heading">
      <h2
        id="story-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-8"
      >
        The Story
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14"
        variants={containerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Left — pull quote */}
        <motion.blockquote
          variants={itemVariants}
          className="border-l-[3px] border-purple pl-6"
        >
          <p
            className="text-2xl leading-snug text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Existing event apps prioritize private events and personal networks,
            leaving public social discovery largely untapped.
          </p>
        </motion.blockquote>

        {/* Right — prose */}
        <motion.div
          variants={itemVariants}
          className="space-y-5 text-base leading-relaxed text-primary/80"
        >
          <p>
            Event planning apps have a visibility problem. The most popular ones
            are built around private or ticketed events, which works well if you
            already know what you&rsquo;re looking for. But what about the
            spontaneous energy of a city? The open parties, the pop-up
            gatherings, the events you didn&rsquo;t know you wanted to go to
            until you saw them?
          </p>
          <p>
            Gather is a startup building an event platform designed to solve
            exactly that. When the founder reached out to me, they had a clear
            product vision, a backend team, a frontend team, and no designer. I
            was brought on to design the entire mobile experience from scratch:
            36 screens covering every flow from first download to event
            creation, RSVP, social connections, and discovery.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
