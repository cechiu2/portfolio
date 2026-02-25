// ProblemSection — case study section for the problem statement. Renders a section heading
// and accepts children for the problem narrative.
import type { ReactNode } from "react";

interface ProblemSectionProps {
  children: ReactNode;
}

export default function ProblemSection({ children }: ProblemSectionProps) {
  return (
    <section aria-labelledby="problem-heading">
      <h2
        id="problem-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-4"
      >
        The Problem
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-primary/80">
        {children}
      </div>
    </section>
  );
}
