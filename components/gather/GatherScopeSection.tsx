"use client";

// GatherScopeSection — "Scope & Prioritization" section for the Gather case study.
// Two prose paragraphs (with "no social feed" bolded) followed by a three-column
// V0 / V1 / V2+ breakdown. Columns are visually tiered: V0 is fully visible,
// V1 is muted, V2+ uses a dashed border and a "Planned" badge to signal future work.
import { motion, useReducedMotion, type Variants } from "framer-motion";

const columnContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function GatherScopeSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="scope-heading">
      <h2
        id="scope-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-8"
      >
        Scope &amp; Prioritization
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
          Working from the founder&rsquo;s V0/V1/V2 framework, I made active
          decisions about what to design first and what to defer. V0 covered the
          essential flows — onboarding, event discovery, the map, event pages,
          RSVP, basic profiles. V1 added filtering, event updates, and social
          features like followers and find people. V2 features including the
          heatmap&rsquo;s friend-visibility toggle and a planned AI event
          planning assistant — a conversational interface that would help hosts
          plan and describe events — are scoped for future design work.
        </p>
        <p>
          This wasn&rsquo;t just a checklist. Every deferred feature was a
          deliberate choice to protect the product&rsquo;s focus. The most
          important example: <strong>no social feed</strong>. A feed was
          discussed and declined. Without it, the app stays focused on its
          primary job — helping people find and attend events — rather than
          becoming a platform that incentivizes hosting events for social
          performance rather than genuine gathering.
        </p>
      </motion.div>

      {/* Version columns */}
      <motion.div
        className="mt-10 grid grid-cols-3 gap-4"
        variants={columnContainerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* V0 — fully visible */}
        <motion.div
          variants={columnVariants}
          className="rounded-xl bg-primary/5 px-5 py-6"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple">
            V0
          </p>
          <p className="text-sm leading-relaxed text-primary/80">
            Core flows — onboarding, map, event pages, RSVP, basic profiles
          </p>
        </motion.div>

        {/* V1 — slightly muted */}
        <motion.div
          variants={columnVariants}
          className="rounded-xl bg-primary/[0.03] px-5 py-6"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary/60">
            V1
          </p>
          <p className="text-sm leading-relaxed text-primary/60">
            Filtering, event updates, followers, find people
          </p>
        </motion.div>

        {/* V2+ — most muted, dashed border, "Planned" badge */}
        <motion.div
          variants={columnVariants}
          className="rounded-xl border border-dashed border-primary/20 px-5 py-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/60">
              V2+
            </p>
            <span className="inline-block rounded-full border border-primary/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary/50">
              Planned
            </span>
          </div>
          <p className="text-sm leading-relaxed text-primary/60">
            Heatmap friend visibility, AI planning assistant (planned)
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
