"use client";

// CaseStudyHero — hero section for case studies. Shows the project title and a full-width
// autoplay looping video. Falls back to a static Image when prefers-reduced-motion is set.
// Framer Motion fades the video container in on load.
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyHeroProps {
  title: string;
  /** Path to the hero video (webm) */
  videoSrc: string;
  /** Poster image shown before the video plays / as the reduced-motion fallback */
  videoPoster: string;
  /** Alt text for the poster image (used as the reduced-motion fallback) */
  videoAlt: string;
}

export default function CaseStudyHero({
  title,
  videoSrc,
  videoPoster,
  videoAlt,
}: CaseStudyHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div>
      {/* Title — fades in on load */}
      <motion.h1
        className="mb-10 text-5xl leading-tight text-primary"
        style={{ fontFamily: "var(--font-young-serif)" }}
        initial={prefersReduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      {/* Hero media — full-width video or static image fallback */}
      <motion.div
        className="w-full overflow-hidden rounded-2xl"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
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
          </video>
        )}
      </motion.div>
    </div>
  );
}
