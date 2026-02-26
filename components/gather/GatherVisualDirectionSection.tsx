"use client";

// GatherVisualDirectionSection — visual direction section for the Gather case study.
// Two-column layout on desktop: prose on the left, color palette + typography
// specimen placeholder on the right. Stacked on mobile.
import { motion, useReducedMotion, type Variants } from "framer-motion";

// TODO: confirm exact hex values with final Figma file and update here.
const palette = [
  { hex: "#0A0A0A", label: "Primary" },
  { hex: "#7C3AED", label: "Accent" },
  { hex: "#FFFFFF", label: "Surface", border: true },
];

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

export default function GatherVisualDirectionSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-labelledby="visual-direction-heading">
      <h2
        id="visual-direction-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-8"
      >
        Visual Direction
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14"
        variants={containerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Left — prose */}
        <motion.div
          variants={itemVariants}
          className="space-y-5 text-base leading-relaxed text-primary/80"
        >
          <p>
            The aesthetic direction came out of early conversations with the
            team. We looked at the existing landscape and asked what felt
            missing. The answer was atmosphere. Event photography is inherently
            dramatic and visceral, and we wanted a design that let it breathe
            rather than fighting it with a loud UI.
          </p>
          <p>
            We landed on <strong>black and deep purple</strong> as the primary
            palette. Dark backgrounds make event photography pop. Purple carries
            enough personality to feel distinctive without being garish. The
            rounded pill buttons and soft gradients add warmth to what could
            otherwise feel cold. The result is an app that feels like it belongs
            in the same world as the events it&rsquo;s promoting:
            nightlife-adjacent, energetic, but not chaotic.
          </p>
        </motion.div>

        {/* Right — color palette + typography placeholder */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Color swatches */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary/60">
              Palette
            </p>
            <div className="flex gap-4">
              {palette.map(({ hex, label, border }) => (
                <div key={hex} className="flex-1">
                  <div
                    className={`h-16 w-full rounded-xl ${border ? "border border-primary/10" : ""}`}
                    style={{ backgroundColor: hex }}
                    aria-hidden="true"
                  />
                  <p className="mt-2 font-mono text-xs text-primary/70">
                    {hex}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography specimen placeholder */}
          {/* TODO: replace with real typography specimen once typeface is confirmed */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary/60">
              Typography
            </p>
            <div className="rounded-xl bg-primary/5 px-5 py-6">
              <p className="text-sm italic text-primary/60">
                Typography specimen coming soon.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
