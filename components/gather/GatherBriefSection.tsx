"use client";

// GatherBriefSection — "The Brief" section for the Gather case study.
// Three prose paragraphs (with "map-based discovery layer" bolded) followed by
// a highlighted callout card summarizing the core product proposition.
// Prose and callout stagger in together on scroll entry.
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function GatherBriefSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="brief-heading">
      <h2
        id="brief-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-8"
      >
        The Brief
      </h2>

      <motion.div
        variants={containerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Prose */}
        <motion.div
          variants={itemVariants}
          className="space-y-5 text-base leading-relaxed text-primary/80"
        >
          <p>
            The founder came in with a sharp point of view: existing event apps
            prioritize private events and personal networks, leaving public
            social discovery largely untapped. Gather wanted to occupy a
            specific middle ground, meaning it had to be structured enough to feel like a real event
            platform, yet open enough to feel like a window into what&rsquo;s
            happening in your city.
          </p>
          <p>
            The product&rsquo;s core proposition was a{" "}
            <strong>map-based discovery layer</strong>: a live view of public
            events nearby, filterable by date, event type, and friend RSVPs,
            with an optional heatmap showing where activity is concentrated.
            Think Snap Map, but for events rather than people.
          </p>
          <p>
            My job was to translate that vision into a coherent, polished mobile
            experience that felt at home alongside apps users already
            knew, while carving out its own identity.
          </p>
        </motion.div>

        {/* Core proposition callout */}
        <motion.div
          variants={itemVariants}
          className="mt-8 rounded-2xl bg-purple/10 px-6 py-5"
        >
          <p className="text-base leading-relaxed text-primary">
            A live map of public events nearby, filterable by date, type, and
            friend RSVPs, with a heatmap showing where the energy is.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
