"use client";

// NextProject — teaser card at the end of a case study.
// When href is provided, renders a clickable link card (dark plum bg, hover state).
// When href is absent, renders a non-interactive "coming soon" card with a dashed
// border and muted text — WCAG 1.4.3 inactive component exception applies.
// On desktop, shows a thumbnail image on the right when provided. Fades in on scroll.
// Uses white focus ring per accessibility guidelines for dark surfaces.
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface NextProjectProps {
  title: string;
  /** Omit or pass null to render the non-linkable "coming soon" state. */
  href?: string | null;
  description?: string;
  thumbnailImage?: string;
}

export default function NextProject({
  title,
  href,
  description,
  thumbnailImage,
}: NextProjectProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section aria-label="Next project" className="mx-auto max-w-3xl">
      <motion.div
        className="border-t border-primary/10 pt-12"
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {href ? (
          <Link
            href={href}
            aria-label={`Next project: ${title}`}
            className="group block overflow-hidden rounded-2xl bg-plum transition-colors hover:bg-purple focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              {/* Text */}
              <div className="flex-1 px-8 py-10 sm:px-10 sm:py-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Next Project →
                </p>
                <p
                  className="mt-3 text-3xl leading-snug text-white"
                  style={{ fontFamily: "var(--font-young-serif)" }}
                >
                  {title}
                </p>
                {description && (
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                )}
              </div>

              {/* Thumbnail — desktop only; gradient placeholder if no image provided */}
              <div className="relative hidden sm:block w-[40%] shrink-0 min-h-[200px]">
                {thumbnailImage ? (
                  <>
                    <Image
                      src={thumbnailImage}
                      alt={`${title} preview`}
                      fill
                      className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
                    />
                    {/* Fade left edge into card background */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-plum/80 via-transparent to-transparent group-hover:from-purple/80 transition-colors"
                    />
                  </>
                ) : (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple/40 to-plum/20"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
          </Link>
        ) : (
          /* Coming soon state — non-interactive, dashed border, muted text */
          <div className="overflow-hidden rounded-2xl border border-dashed border-primary/20">
            <div className="px-8 py-10 sm:px-10 sm:py-12">
              <span className="inline-block rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary/50">
                Coming Soon
              </span>
              <p
                className="mt-3 text-3xl leading-snug text-primary/50"
                style={{ fontFamily: "var(--font-young-serif)" }}
              >
                {title}
              </p>
              {description && (
                <p className="mt-3 text-sm leading-relaxed text-primary/50">
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
