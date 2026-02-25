"use client";

// Shared site footer — attribution text on the left, LinkedIn and Email links on the right.
// The bunny hops once when the footer first enters the viewport, and again on each click.
// Clicks while an animation is in progress are ignored.
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const HOP_FRAMES = [
  "/images/bunny.png",
  "/images/bunny2.png",
  "/images/bunny3.png",
  "/images/bunny.png",
];

export default function Footer() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const prefersReduced = useReducedMotion();
  const [src, setSrc] = useState("/images/bunny.png");
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!inView || prefersReduced) return;

    isAnimating.current = true;
    let frameIndex = 0;
    const timer = setInterval(() => {
      frameIndex += 1;
      setSrc(HOP_FRAMES[frameIndex]);
      if (frameIndex >= HOP_FRAMES.length - 1) {
        clearInterval(timer);
        isAnimating.current = false;
      }
    }, 150);

    return () => {
      clearInterval(timer);
      isAnimating.current = false;
    };
  }, [inView, prefersReduced]);

  function handleClick() {
    if (isAnimating.current || prefersReduced) return;

    isAnimating.current = true;
    let frameIndex = 0;
    const timer = setInterval(() => {
      frameIndex += 1;
      setSrc(HOP_FRAMES[frameIndex]);
      if (frameIndex >= HOP_FRAMES.length - 1) {
        clearInterval(timer);
        isAnimating.current = false;
      }
    }, 150);
  }

  return (
    <footer className="w-full border-t border-primary/10 bg-blush">
      <div className="flex items-center justify-between px-6 py-6">

        <p ref={ref} className="flex items-center gap-2 text-sm text-primary">
          This website was designed and coded by Claire
          <Image src={src} alt="A small bunny" width={20} height={20} className="-translate-y-[3px] cursor-pointer" onClick={handleClick} />
        </p>

        <nav aria-label="Footer links" className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/cechiu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-sm text-primary/60 transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2 rounded-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:claire.chiu1285@gmail.com"
            aria-label="Send email to Claire"
            className="text-sm text-primary/60 transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2 rounded-sm"
          >
            Email
          </a>
        </nav>

      </div>
    </footer>
  );
}
