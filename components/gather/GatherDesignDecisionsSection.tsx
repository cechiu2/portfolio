"use client";

// GatherDesignDecisionsSection — design decisions section for the Gather case study.
// Renders five GatherDecisionBlocks in a flowing vertical gallery. Blocks 02 and 04
// are reversed for visual rhythm.
import type { ReactNode } from "react";
import GatherDecisionBlock from "./GatherDecisionBlock";

const decisions: { number: string; title: string; body: ReactNode; reverse: boolean }[] = [
  {
    number: "01",
    title: "Onboarding",
    body: (
      <>
        <p>One of the first flows I designed was onboarding, and one of the most important decisions happened before a single screen was drawn. Most apps force a fork at the door: "Log in" or "Create account." This is friction that serves the app, not the user.</p>
        <p>We took inspiration from how Partiful handles authentication: a single phone number field, a one-time SMS code, and the app handles everything else in the background. New user? Account gets created. Returning user? You're logged in. The user never has to make a decision they don't care about.</p>
        <p>The result is a three-screen onboarding flow: a full-bleed splash screen with Gather's tagline ("Your Guide to What's Happening"), a phone number entry screen, and a verification code screen. That's it. From cold open to inside the app in under a minute.</p>
      </>
    ),
    reverse: false,
  },
  {
    number: "02",
    title: "The Event Page",
    body: (
      <>
        <p>The event page is the heart of the app — it's where a user decides whether to show up. I thought about it less as a data display and more as a conversation: what does someone need to know, and in what order?</p>
        <p>The answer I landed on: hero image first (set the vibe), then the essentials — name, location, date and time — followed by a countdown to create urgency, then the social proof of who else is going, then the full description for the committed reader, then a map for the logistical planner, then host information for the trust-builders. The persistent RSVP button at the bottom means the call to action is always available without interrupting the reading flow.</p>
        <p>The RSVP interaction itself — "I'm there!", "No way!", "Maybe..." — was an opportunity to inject personality. The patterned button backgrounds (checkerboard, stripes) feel deliberately playful and on-brand for a nightlife context. The options are binary enough to be decisive but human enough to not feel clinical.</p>
      </>
    ),
    reverse: true,
  },
  {
    number: "03",
    title: "The Map",
    body: (
      <>
        <p>The map was the most technically ambitious feature and the one that required the most design thought. A map full of events could easily feel overwhelming — or worse, surveillance-y. I made two key decisions to prevent that.</p>
        <p>First, the heatmap is <strong>opt-in and toggleable</strong>. Users who want to see where the energy is concentrated can turn it on; users who just want to browse individual events can leave it off. This respects different use cases without forcing everyone into the same mode.</p>
        <p>Second, the map has a <strong>persistent bottom drawer</strong> that surfaces the most relevant event as you pan around. You don't have to tap individual pins to find out what's nearby — the drawer does that work for you, updating as you move. This keeps the interaction feel light rather than finicky.</p>
      </>
    ),
    reverse: false,
  },
  {
    number: "04",
    title: "The Profile",
    body: (
      <>
        <p>Social app profiles are usually built around self-presentation — carefully curated, follower-count-forward, designed to be seen. I made a deliberate choice to design Gather's profile differently: as a <strong>personal dashboard</strong> first.</p>
        <p>Your profile shows your upcoming events (because people constantly recheck event details), your attended history (because people love their own data), and what you're hosting. The social stats are there — followers, following, attended count — but they're not the hero. When you view someone else's profile, the first section you see is <strong>Shared Events</strong>: events you've both attended or both plan to attend. This reframes the profile as a tool for understanding your relationship with someone, not just broadcasting your activity.</p>
        <p>This decision was a direct response to the product's core philosophy: Gather is not a social media app. It borrows social mechanics to make event discovery better, but the event is always the point — not the person.</p>
      </>
    ),
    reverse: true,
  },
  {
    number: "05",
    title: "Event Creation",
    body: (
      <p>Creating an event is a high-friction flow in most apps. I worked to make it feel as fast and direct as possible. The create/edit view mirrors the attendee event view closely — same layout, same information hierarchy — so hosts are always designing for what attendees will see. Fields like "Unlimited spots," "Guests can bring +1s," "Cost per spot," and "Event privacy" are presented as toggleable buttons rather than dropdown menus or nested settings screens, which keeps the visual weight low and the interaction fast.</p>
    ),
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
