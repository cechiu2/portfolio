"use client";

// GatherDesignDecisionsSection — design decisions section for the Gather case study.
// Renders five GatherDecisionBlocks in a flowing vertical gallery. Blocks 02 and 04
// are reversed for visual rhythm.
import Image from "next/image";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { useReducedMotion, useInView } from "framer-motion";
import GatherDecisionBlock from "./GatherDecisionBlock";

// Onboarding video — autoplay loop with reduced-motion fallback to static poster
function OnboardingVideo() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return (
      <Image
        src="/images/onboarding.png"
        alt="Three-screen onboarding flow for the Gather app: splash, phone number entry, and SMS verification"
        width={0}
        height={0}
        sizes="50vw"
        className="w-full h-auto rounded-2xl"
      />
    );
  }
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/images/onboarding.png"
      className="w-full h-auto rounded-2xl"
    >
      <source src="/videos/onboarding.webm" type="video/webm" />
    </video>
  );
}

// Event Creation video — autoplay loop with reduced-motion fallback to static poster.
// playbackRate is explicitly enforced to 1 on load to prevent browser deviations.
function EventCreationVideo() {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  if (prefersReduced) {
    return (
      <Image
        src="/images/event-creation.png"
        alt="Event creation flow for the Gather app showing toggleable fields for event details and settings"
        width={0}
        height={0}
        sizes="50vw"
        className="w-full h-auto rounded-2xl"
      />
    );
  }
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      poster="/images/event-creation.png"
      className="w-full h-auto rounded-2xl"
      onLoadedMetadata={() => {
        if (videoRef.current) videoRef.current.playbackRate = 1;
      }}
    >
      <source src="/videos/event-creation.webm" type="video/webm" />
    </video>
  );
}

// RSVP Flow video — loops continuously whenever in view, with reduced-motion fallback to static poster.
function RSVPFlowVideo() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: false });

  useEffect(() => {
    if (!prefersReduced && isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isInView, prefersReduced]);

  if (prefersReduced) {
    return (
      <div className="relative w-full aspect-[1600/1200] rounded-2xl overflow-hidden bg-[#0A0A0A]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rsvpflow.png"
          alt="Event page and RSVP interaction for the Gather app: hero image, event details, and 'I'm there!' confirmation"
          width="100%"
          height="100%"
          loading="eager"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-[1600/1200] rounded-2xl overflow-hidden bg-[#0A0A0A]">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        poster="/images/rsvpflow.png"
        className="absolute inset-0 w-full h-full object-contain"
      >
        <source src="/videos/rsvpflow.webm" type="video/webm" />
        <source src="/videos/rsvpflow.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

// Map visual — plays map-comparison.webm once on scroll-in, crossfades to the static PNG on end.
// Container aspect ratio is locked to the PNG's natural dimensions (1576×1182) so video and
// image always share identical box dimensions. Plain <img> avoids Next.js Image sizing conflicts.
// Reduced-motion: video skipped, PNG shown immediately.
function MapComparisonVisual() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setVideoEnded(true);
      return;
    }
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isInView, prefersReduced]);

  return (
    <div ref={containerRef} className="relative w-full aspect-[1576/1182] rounded-2xl overflow-hidden">
      {/* Static PNG — always at full opacity underneath the video (z-0, no transition).
          TODO: add annotation overlays on top of this img later */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/map-comparison.png"
        alt="Two states of the Gather map: standard pin view on the left, heatmap overlay on the right"
        width="100%"
        height="100%"
        loading="eager"
        className="absolute inset-0 w-full h-full object-contain z-0"
      />
      {/* Video — sits above the PNG (z-10). Fades out on end, revealing the img beneath. */}
      {!prefersReduced && (
        <video
          ref={videoRef}
          muted
          playsInline
          poster="/images/map-comparison.png"
          onEnded={() => setVideoEnded(true)}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 z-10 ${
            videoEnded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <source src="/videos/map-comparison.webm" type="video/webm" />
          <source src="/videos/map-comparison.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

const decisions: { number: string; title: string; body: ReactNode; reverse: boolean; visuals?: ReactNode; centerVisual?: boolean }[] = [
  {
    number: "01",
    title: "Onboarding",
    visuals: <OnboardingVideo />,
    centerVisual: true,
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
    visuals: <RSVPFlowVideo />,
    centerVisual: true,
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
    visuals: <MapComparisonVisual />,
    centerVisual: true,
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
    visuals: <EventCreationVideo />,
    centerVisual: true,
    body: (
      <p>Creating an event is a high-friction flow in most apps. I worked to make it feel as fast and direct as possible. The create/edit view mirrors the attendee event view closely — same layout, same information hierarchy — so hosts are always designing for what attendees will see. Fields like "Unlimited spots," "Guests can bring +1s," "Cost per spot," and "Event privacy" are presented as toggleable buttons rather than dropdown menus or nested settings screens, which keeps the visual weight low and the interaction fast.</p>
    ),
    reverse: false,
  },
];

export default function GatherDesignDecisionsSection() {
  return (
    <section aria-labelledby="design-decisions-heading" className="mx-auto max-w-6xl">
      <h2
        id="design-decisions-heading"
        className="text-xs font-semibold uppercase tracking-widest text-purple mb-12"
      >
        Design Decisions
      </h2>

      <div className="space-y-24 sm:space-y-32">
        {decisions.map(({ number, title, body, reverse, visuals, centerVisual }) => (
          <GatherDecisionBlock
            key={number}
            number={number}
            title={title}
            body={body}
            reverse={reverse}
            visuals={visuals}
            centerVisual={centerVisual}
          />
        ))}
      </div>
    </section>
  );
}
