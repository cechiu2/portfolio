"use client";

// GatherVisualDirectionSection — visual direction section for the Gather case study.
// Two-column layout on desktop: prose on the left, color palette + typography
// specimen on the right. Stacked on mobile.
import { motion, useReducedMotion, type Variants } from "framer-motion";

// TODO: confirm exact hex values with final Figma file and update here.
const palette = [
  { hex: "#0A0A0A", label: "Primary" },
  { hex: "#7C3AED", label: "Accent" },
  { hex: "#FFFFFF", label: "Surface", border: true },
];

const typeScale = [
  { label: "32px — Semi Bold", size: "32px", weight: 600, specimen: "Your Guide to What's Happening" },
  { label: "18px — Medium",    size: "18px", weight: 500, specimen: "Spin City: Brooklyn" },
  { label: "16px — Regular",   size: "16px", weight: 400, specimen: "543 Pacific St, Brooklyn, NY" },
  { label: "12px — Regular",   size: "12px", weight: 400, specimen: "July 13, 2024 • 9:00pm - 1:00am" },
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
    <section aria-labelledby="visual-direction-heading" className="mx-auto max-w-3xl">
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

        {/* Right — color palette + typography specimen */}
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

          {/* Typography specimen */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary/60">
              Typography
            </p>
            <div className="rounded-xl border border-primary/10 divide-y divide-primary/10 px-5">
              {typeScale.map(({ label, size, weight, specimen }) => (
                <div key={label} className="flex items-start gap-4 py-4">
                  <p className="w-28 shrink-0 pt-[3px] text-[10px] font-semibold uppercase tracking-widest text-primary/40">
                    {label}
                  </p>
                  <p
                    className="text-primary leading-tight"
                    style={{ fontSize: size, fontWeight: weight, fontFamily: "var(--font-inter)" }}
                  >
                    {specimen}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
