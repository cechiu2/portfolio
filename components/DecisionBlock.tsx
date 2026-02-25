// DecisionBlock — text content for a single design decision in a case study.
// Renders a numbered title header and three labeled fields: The Insight, The Decision,
// and Why This. The visual prop is layout-managed by the parent DesignDecisionsSection.
import type { ReactNode } from "react";

export interface DecisionBlockProps {
  number: number;
  title: string;
  insight: string;
  decision: string;
  rationale: string;
  visual: ReactNode;
}

const FIELDS = [
  { label: "The Insight", key: "insight" as const },
  { label: "The Decision", key: "decision" as const },
  { label: "Why This", key: "rationale" as const },
];

export default function DecisionBlock({
  number,
  title,
  insight,
  decision,
  rationale,
}: DecisionBlockProps) {
  const content = { insight, decision, rationale };

  return (
    <div className="space-y-8">
      {/* Numbered header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-purple">
          {String(number).padStart(2, "0")}
        </span>
        <h3
          className="mt-1 text-2xl leading-snug text-primary"
          style={{ fontFamily: "var(--font-young-serif)" }}
        >
          {title}
        </h3>
      </div>

      {/* Labeled fields */}
      <div className="space-y-6">
        {FIELDS.map(({ label, key }) => (
          <div key={label}>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary/40">
              {label}
            </p>
            <p className="text-base leading-relaxed text-primary/80">
              {content[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
