"use client";

// ProjectMeta — metadata grid for case studies. Displays key facts in a 2×2 grid on mobile
// and a single row on sm+. Items stagger in with a fadeInUp animation on scroll entry.
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface MetaItem {
  label: string;
  value: string;
}

interface ProjectMetaProps {
  items: MetaItem[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ProjectMeta({ items }: ProjectMetaProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="border-t border-b border-primary/10 py-6">
      <motion.dl
        className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0"
        variants={containerVariants}
        // When reduced motion is preferred, start already visible — no animation plays
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {items.map((item) => (
          <motion.div key={item.label} variants={itemVariants}>
            <dt className="text-xs font-semibold uppercase tracking-widest text-purple">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm text-primary">{item.value}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  );
}
