"use client";

// ReflectionSection — case study section for retrospective learnings.
// Text-only, no background treatment. Lets the writing breathe.
import { motion, useReducedMotion } from "framer-motion";

interface ReflectionSectionProps {
  paragraphs: string[];
}

export default function ReflectionSection({ paragraphs }: ReflectionSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="reflection-heading">
      <motion.div
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          id="reflection-heading"
          className="text-xs font-semibold uppercase tracking-widest text-purple mb-6"
        >
          Reflection
        </h2>
        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-base leading-relaxed text-primary/80">
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
