"use client";

// CaseStudyHero — hero section for case studies. Shows the project title, an optional
// subtitle, and a full-width autoplay looping video. Falls back to a static Image when
// prefers-reduced-motion is set. Framer Motion fades the content in on load.
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyHeroProps {
  title: string;
  /** Optional subtitle rendered below the title */
  subtitle?: string;
  /** Path to the hero video (webm) */
  videoSrc: string;
  /** Optional mp4 fallback source for browsers that don't support webm */
  videoSrcMp4?: string;
  /** Poster image shown before the video plays / as the reduced-motion fallback */
  videoPoster: string;
  /** Alt text for the poster image (used as the reduced-motion fallback) */
  videoAlt: string;
}

export default function CaseStudyHero({
  title,
  subtitle,
  videoSrc,
  videoSrcMp4,
  videoPoster,
  videoAlt,
}: CaseStudyHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      {/* Title — fades in on load */}
      <motion.h1
        className="text-5xl leading-tight text-primary"
        style={{ fontFamily: "var(--font-young-serif)" }}
        initial={prefersReduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      {/* Optional subtitle */}
      {subtitle && (
        <motion.p
          className="mt-4 mb-10 max-w-xl text-base leading-relaxed text-primary/60"
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Hero media — full-width video or static image fallback */}
      <motion.div
        className={`w-full overflow-hidden rounded-2xl ${subtitle ? "" : "mt-10"}`}
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: subtitle ? 0.25 : 0.2 }}
      >
        {prefersReduced ? (
          <Image
            src={videoPoster}
            alt={videoAlt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster}
            className="w-full h-auto object-cover rounded-2xl"
          >
            <source src={videoSrc} type="video/webm" />
            {videoSrcMp4 && <source src={videoSrcMp4} type="video/mp4" />}
          </video>
        )}
      </motion.div>
    </div>
  );
}
