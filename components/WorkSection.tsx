// Work section — structural shell for the homepage project list.
// Renders the "Work" heading and a vertical list container; card content is passed as children.
import { ReactNode } from "react";

interface WorkSectionProps {
  children: ReactNode;
}

export default function WorkSection({ children }: WorkSectionProps) {
  return (
    <section
      aria-labelledby="work-heading"
      className="w-full border-t border-primary/10 px-6 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="work-heading"
          className="mb-8 text-xs font-semibold uppercase tracking-widest text-purple"
        >
          Work
        </h2>
        <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12" role="list">
          {children}
        </ul>
      </div>
    </section>
  );
}
