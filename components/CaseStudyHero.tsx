"use client";

// CaseStudyHero — hero section for case studies. Shows a before/after image comparison
// with entrance animations: the h1 fades in first, then both images slide in from
// opposite sides. All motion is disabled when prefers-reduced-motion is set.
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyHeroProps {
  title: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function CaseStudyHero({
  title,
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: CaseStudyHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      {/* Title — fades in on load, before the images animate (no delay) */}
      <motion.h1
        className="mb-10 text-5xl leading-tight text-primary"
        style={{ fontFamily: "var(--font-young-serif)" }}
        initial={prefersReduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      {/* Before/after image comparison — slides in from opposite sides after the title */}
      {/* overflow-hidden clips the translated images during animation, preventing scroll */}
      <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl">
        {/* Before image — slides in from the left */}
        <motion.div
          className="flex-1 relative aspect-[9/16]"
          initial={prefersReduced ? false : { opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {beforeImage ? (
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div
              className="h-full w-full bg-gradient-to-br from-blush/60 to-purple/20 flex items-end p-5"
              role="img"
              aria-label={beforeAlt}
            >
              <span className="text-xs uppercase tracking-widest text-primary/30">
                Before
              </span>
            </div>
          )}
        </motion.div>

        {/* Thin vertical divider — visible on desktop only; hidden on mobile where images stack */}
        <div
          aria-hidden="true"
          className="hidden sm:block w-px flex-shrink-0 bg-primary/10"
        />

        {/* After image — slides in from the right */}
        <motion.div
          className="flex-1 relative aspect-[9/16]"
          initial={prefersReduced ? false : { opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {afterImage ? (
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div
              className="h-full w-full bg-gradient-to-br from-purple/20 to-plum/60 flex items-end p-5"
              role="img"
              aria-label={afterAlt}
            >
              <span className="text-xs uppercase tracking-widest text-white/40">
                After
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
