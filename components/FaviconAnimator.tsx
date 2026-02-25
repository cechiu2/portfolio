"use client";

// FaviconAnimator — cycles through an array of favicon paths on mount,
// updating the <link rel="icon"> element once per interval.
// Sequence: frame1 → frame2 → ... → frameN → frame1, then stops.
// Returning to frame1 matches the static <link rel="icon"> default set in layout.tsx.
// Returns null — purely a side-effect component.
import { useEffect } from "react";

interface FaviconAnimatorProps {
  frames: string[];
  interval?: number;
}

export default function FaviconAnimator({
  frames,
  interval = 150,
}: FaviconAnimatorProps) {
  useEffect(() => {
    if (frames.length === 0) return;

    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    // Append frames[0] so the sequence always returns to the starting favicon.
    const cycle = [...frames, frames[0]];
    let currentFrame = 0;

    const timer = setInterval(() => {
      link!.href = cycle[currentFrame];
      currentFrame += 1;
      if (currentFrame >= cycle.length) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [frames, interval]);

  return null;
}
