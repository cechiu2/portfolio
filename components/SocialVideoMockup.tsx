"use client";

// SocialVideoMockup — phone mockup for the Social Feed decision block.
// Plays a looping webm demo when scrolled into view, triggered via useInView.
// Falls back to a static placeholder if the user prefers reduced motion.
import { useRef, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const PHONE_FRAME =
  "w-[260px] lg:w-[280px] aspect-[1206/2622] mx-auto rounded-[48px] ring-1 ring-inset ring-primary/10 overflow-hidden";

export default function SocialVideoMockup() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start playback when the mockup enters the viewport.
  const inView = useInView(containerRef, { amount: 0.2 });

  useEffect(() => {
    if (inView && !prefersReduced && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [inView, prefersReduced]);

  return (
    <div ref={containerRef} className={PHONE_FRAME}>
      {prefersReduced ? (
        // Static placeholder for reduced-motion users — swap src for a screenshot later.
        <div
          className="h-full w-full bg-gradient-to-b from-plum/50 to-purple/20"
          role="img"
          aria-label="Social feed redesign demo"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="h-full w-full object-contain bg-black"
        >
          <source src="/videos/social.webm" type="video/webm" />
          {/* Fallback shown by browsers that cannot play video */}
          <img
            src="/images/social-poster.png"
            alt="Social feed redesign demo"
            className="h-full w-full object-cover"
          />
        </video>
      )}
    </div>
  );
}
