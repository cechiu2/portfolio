"use client";

// NextProject — teaser card at the end of a case study linking to the next project.
// On desktop, shows a thumbnail image on the right when provided. Fades in on scroll.
// Uses white focus ring per accessibility guidelines for dark surfaces.
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface NextProjectProps {
  title: string;
  href: string;
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
    <section aria-label="Next project">
      <motion.div
        className="border-t border-primary/10 pt-12"
        initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
      </motion.div>
    </section>
  );
}
