"use client";

// ProjectCard — editorial two-column grid card for portfolio case studies.
// Layout: image on top (3:2 aspect ratio), title below, meta row at the bottom.
// The entire card is a single accessible block link.
// Framer Motion provides a subtle scale on hover; respects prefers-reduced-motion.
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  /** Client or project context shown bottom-left, e.g. "Freelance" */
  company: string;
  /** Project type shown bottom-right, e.g. "Concept" */
  category: string;
  year: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Tailwind gradient classes for the placeholder div, e.g. "bg-gradient-to-br from-blush to-purple" */
  placeholderGradient?: string;
}

export default function ProjectCard({
  title,
  company,
  category,
  year,
  href,
  imageSrc,
  imageAlt = "",
  placeholderGradient = "bg-gradient-to-br from-blush to-purple",
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    // Outer element is the link; rounded-xl shapes the focus ring.
    // No overflow-hidden here — text block sits outside the image corners naturally.
    <motion.a
      href={href}
      aria-label={`View case study for ${title}`}
      data-cursor-project=""
      whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
      transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
    >
      {/* ── Image area — overflow-hidden clips the gradient/photo to rounded corners ── */}
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className={`h-full w-full ${placeholderGradient}`} aria-hidden="true" />
        )}
      </div>

      {/* ── Text block — sits below the image, left-aligned ── */}
      <div className="pt-5">
        {/* Project title */}
        <h3
          className="text-xl leading-snug text-primary"
          style={{ fontFamily: "var(--font-young-serif)" }}
        >
          {title}
        </h3>

        {/* Meta row — company on the left, category · year on the right */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-primary">
            {company}
          </p>
          <p className="text-xs uppercase tracking-wide text-primary">
            {category} · {year}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
