"use client";

// CustomCursor — replaces the browser cursor with a branded dot that morphs on interaction.
// Three states:
//   default  → 12px filled circle in plum
//   link     → slightly larger circle in purple (on <a> and <button>)
//   project  → horizontal pill reading "View Case Study" in plum (on data-cursor-project elements)
//
// Position uses raw useMotionValue — .set() updates the DOM directly with zero delay.
// No spring or physics; the cursor tracks the mouse at 1:1 speed.
// State transitions (size, color, shape) use Framer Motion variants and stay smooth.
// Cursor is hidden off-screen at (-100, -100) until the first mousemove.
// On mobile / touch-only devices this component renders but never receives
// mousemove events, so it stays invisible and doesn't interfere.

import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

type CursorState = "default" | "link" | "project";

// Variant definitions — width/height/radius/color per state.
// Text opacity is handled separately on the inner span.
const variants = {
  default: {
    width: 12,
    height: 12,
    borderRadius: 9999,
    backgroundColor: "#412234",
  },
  link: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: "#6d466b",
  },
  project: {
    width: 160,
    height: 40,
    borderRadius: 9999,
    backgroundColor: "#412234",
  },
} satisfies Record<CursorState, object>;

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");

  // Raw MotionValues — .set() writes directly to the DOM transform, no physics.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      // Walk up from the event target to detect context.
      const target = e.target as Element;
      if (target.closest("[data-cursor-project]")) {
        setState("project");
      } else if (target.closest("a, button")) {
        setState("link");
      } else {
        setState("default");
      }
    };

    // Park the cursor off-screen when the pointer leaves the document.
    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    // pointer-events: none so the cursor element never blocks clicks.
    // overflow: hidden clips the pill text while the circle is small.
    // x/y "-50%" keeps the centre of the element anchored at the hot-spot
    // regardless of whether it's a 12px dot or a 160px pill.
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] flex items-center justify-center overflow-hidden"
      style={{ left: x, top: y, x: "-50%", y: "-50%" }}
      animate={state}
      variants={variants}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
    >
      {/* Text fades in only in the project state */}
      <motion.span
        animate={{ opacity: state === "project" ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="select-none whitespace-nowrap font-sans text-[11px] font-semibold uppercase tracking-wider text-white"
      >
        View Case Study
      </motion.span>
    </motion.div>
  );
}
