"use client";

// GatherDesignDecisionsSection — design decisions section for the Gather case study.
// Renders five GatherDecisionBlocks in a flowing vertical gallery. Blocks 02 and 04
// are reversed for visual rhythm. Body copy and visuals are placeholder for now.
import GatherDecisionBlock from "./GatherDecisionBlock";

// TODO: fill in body copy for each block once case study copy is finalized.
const decisions = [
  {
    number: "01",
    title: "Onboarding",
    body: "",
    reverse: false,
  },
  {
    number: "02",
    title: "The Event Page",
    body: "",
    reverse: true,
  },
  {
    number: "03",
    title: "The Map",
    body: "",
    reverse: false,
  },
  {
    number: "04",
    title: "The Profile",
    body: "",
    reverse: true,
  },
  {
    number: "05",
    title: "Event Creation",
    body: "",
    reverse: false,
  },
];

export default function GatherDesignDecisionsSection() {
  return (
    <section aria-labelledby="design-decisions-heading">
      <h2
        id="design-decisions-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-12"
      >
        Design Decisions
      </h2>

      <div className="space-y-24 sm:space-y-32">
        {decisions.map(({ number, title, body, reverse }) => (
          <GatherDecisionBlock
            key={number}
            number={number}
            title={title}
            body={body}
            reverse={reverse}
          />
        ))}
      </div>
    </section>
  );
}
