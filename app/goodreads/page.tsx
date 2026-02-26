// Goodreads Redesign case study page — full case study structure with placeholder content.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyHero from "@/components/CaseStudyHero";
import ProjectMeta from "@/components/ProjectMeta";
import ProblemSection from "@/components/ProblemSection";
import ResearchSection from "@/components/ResearchSection";
import DesignDecisionsSection from "@/components/DesignDecisionsSection";
import NavigationVideoMockup from "@/components/NavigationVideoMockup";
import TrackingVideoMockup from "@/components/TrackingVideoMockup";
import SocialVideoMockup from "@/components/SocialVideoMockup";
import OutcomeSection from "@/components/OutcomeSection";
import ReflectionSection from "@/components/ReflectionSection";
import NextProject from "@/components/NextProject";

export const metadata: Metadata = {
  title: "Goodreads Redesign — Claire Chiu",
  description:
    "Case study: A concept redesign of Goodreads, reimagining book discovery and social reading for 150M+ users.",
};

const metaItems = [
  { label: "Role", value: "UX Designer" },
  { label: "Timeline", value: "1 week" },
  { label: "Platform", value: "iOS" },
  { label: "Type", value: "Concept" },
];

const decisionBlocks = [
  {
    number: 1,
    title: "Navigation restructure",
    insight:
      "Users' most-accessed destinations — their profile, their books, discovery — were either buried in a menu or split across redundant tabs.",
    decision:
      "I replaced the existing navigation with a persistent bottom nav bar with four tabs: Home, My Books, Explore, and Profile. This promotes the destinations users visit most to always-visible, one-tap access. The hamburger menu was retained but deprioritized — stripped of low-value items and reserved for secondary settings and customization. Search was consolidated into Explore, reflecting how users actually think about discovery rather than how Goodreads had historically organized it.",
    rationale:
      "Navigation is the skeleton of any app. Getting it wrong taxes every single interaction; getting it right makes everything else feel easier. It was also the most consistently mentioned pain point across all five users.",
    visual: <NavigationVideoMockup />,
  },
  {
    number: 2,
    title: "Personal tracking",
    insight:
      "Users think of Goodreads as their personal reading record first and a social platform second — but the app doesn't reflect that priority.",
    decision:
      "I redesigned the My Books and Profile screens to front-load the data users care about: reading streaks, monthly snapshots, currently-reading progress at a glance. I added a personal notes feature to the book detail view — a frequently requested but entirely absent capability. I also introduced a tag-based shelving system that lets users organize and filter books across multiple categories simultaneously, replacing the more rigid existing shelf structure.",
    rationale:
      "The most beloved tracking apps — Letterboxd, Strava, even Spotify Wrapped — succeed because they make users feel seen by their own data. Goodreads has years of rich reading data per user and largely fails to surface it in ways that feel personal or satisfying.",
    visual: <TrackingVideoMockup />,
  },
  {
    number: 3,
    title: "Social feed",
    insight:
      "The home feed was mixing high-value content (friends' reviews, ratings) with low-value noise (friend-of-friend activity, generic recommendations), making the whole feed feel cluttered and easy to ignore.",
    decision:
      "Rather than overhauling the social layer entirely, I streamlined it. The home feed was refocused on high-signal activity from people users actually follow. A monthly snapshot header was added at the top of the home screen — a personal check-in that grounds the social feed in your own reading context before showing you what friends are doing. The book detail page now surfaces friend reviews prominently alongside community reviews, making the social layer feel useful rather than ambient.",
    rationale:
      "A full social redesign was out of scope for one week, and overbuilding social features that users hadn't explicitly asked for would have been solving the wrong problem. The feedback was clear: users didn't want more social features, they wanted the existing ones to work better.",
    visual: <SocialVideoMockup />,
  },
];

const researchCards = [
  {
    title: "The app buries what users actually want.",
    summary: (
      <p>
        Users come to Goodreads primarily to track their reading and browse
        books, but accessing your own profile requires navigating into a
        hamburger menu, Search and Discover are redundantly separated into
        different tabs, and the home feed is cluttered with low-value
        notifications. The Power User put it plainly: &ldquo;
        <em>Accessing my profile shouldn&rsquo;t be buried in the menu.</em>
        &rdquo; The Casual Tracker noted that the menu was full of features
        she&rsquo;d never once used: &ldquo;
        <em>Giveaways? Who is using that?</em>&rdquo;
      </p>
    ),
    quote:
      "I always check what my friends are reading, but I can never find that tab. I end up just Googling instead.",
    citeLabel: "The Casual Tracker",
  },
  {
    title:
      "Personal tracking is underpowered for what users actually want from it.",
    summary: (
      <p>
        Users love data about themselves, such as streaks, monthly reading stats,
        personal notes on books. Goodreads has the raw material for this but
        surfaces almost none of it well on mobile. Additionally, users want to
        be seen and understood through what they read. The Discovery-Seeker drew
        a comparison that stuck with me: she wanted Goodreads to surface new
        releases by authors she already loves, the way Spotify&rsquo;s Fresh
        Finds surfaces new music from artists you follow. The insight was sharp:
        stop showing users a firehose of everything published this week and
        start showing them what&rsquo;s actually relevant to them.
      </p>
    ),
    quote:
      "I wish there were a section to take personal notes on books. The majority of users on Goodreads just want to read and track for personal means.",
    citeLabel: "The Power User",
  },
  {
    title: "The social features exist but feel unfinished.",
    summary: (
      <p>
        Users don&rsquo;t want to abandon the social layer, they want it to
        work. Reviews are the most valuable social content on Goodreads, but
        they&rsquo;re hard to find per book and mixed in with low-signal feed
        noise like friend-of-friend activity. The Social Reader wanted to see
        friends&rsquo; reviews surfaced prominently on each book&rsquo;s page.
        Meanwhile, The Power User wanted granular control over what appeared in
        her feed, like the ability to mute certain activity types entirely. The
        underlying frustration was consistent: Goodreads gestures toward being a
        social platform without committing to it.
      </p>
    ),
    quote:
      "I don't want a list of 'books you might like.' I want to know what people I know are actually reading.",
    citeLabel: "The Social Reader",
  },
];

export default function GoodreadsPage() {
  return (
    <>
      <Header />
      <CaseStudyLayout>
        <CaseStudyHero
          title="Goodreads iOS Redesign"
          videoSrc="/videos/scrollthrough.webm"
          videoPoster="/images/scrollthrough.png"
          videoAlt="Full scrollthrough of the Goodreads mobile redesign"
        />

        <ProjectMeta items={metaItems} />

        <ProblemSection>
          <p>
            Goodreads has a loyalty problem. Not in the sense that users are
            leaving, but in the sense that they stay <em>despite</em> the app,
            not 
            <em>because</em> of it. As an avid reader and long-time user myself,
            I knew this feeling firsthand: the app that's supposed to make
            reading more enjoyable was consistently getting in the way.
          </p>
          <p>
            The core tension I identified:{" "}
            <strong>
              Goodreads is trying to be both a personal reading tracker and a
              social platform, and its mobile app does justice to neither.
            </strong>{" "}
            Features users rely on daily are buried while rarely-used ones take
            up prime real estate. The visual design hasn't meaningfully evolved
            in years. And a quiet but significant gap between desktop and mobile
            functionality forces dedicated users to context-switch between
            platforms just to do basic things.
          </p>
        </ProblemSection>

        <ResearchSection cards={researchCards}>
          <p>
            With one week to work, I kept my research focused: I gathered
            feedback from five dedicated Goodreads users — myself and four
            friends who use the app regularly. My goal was directional clarity.
            Where does the app consistently fail its most committed users?
          </p>
          <p>
            I spoke with a range of user types:{" "}
            <strong>The Casual Tracker</strong> (reads regularly, uses Goodreads
            mainly to log finished books), <strong>The Power User</strong>{" "}
            (maintains detailed shelves, tags, and reading statistics),{" "}
            <strong>The Social Reader</strong> (most interested in friends'
            reviews and community features), and{" "}
            <strong>The Discovery-Seeker</strong> (primarily uses Goodreads to
            find new books).
          </p>
          <p>The feedback fell into three clear clusters:</p>
        </ResearchSection>

        <DesignDecisionsSection blocks={decisionBlocks} />

        <OutcomeSection
          prose="Users who walked through the prototype responded most positively to three things: the modernized aesthetic, the clearer navigation, and the shift in feature prioritization. The consistent theme was that it felt more obvious how to get where they wanted to go, which, given that navigation was the loudest pain point in research, felt like exactly the right signal."
          quote="It's so much clearer how to navigate around and find what I want."
          citeLabel="The Casual Tracker"
        />

        <ReflectionSection
          paragraphs={[
            "This was my first UX project, built in one week as part of an application for Pinterest's Product Design Apprenticeship. The constraint was real, and it shaped the work. I made tradeoffs I'd revisit with more time.",
            "With a longer runway, I'd want to explore the desktop/mobile feature parity gap more deeply. Users are quietly doing workarounds between platforms that they shouldn't have to, like responding to comments on reviews, accessing genre clusters, and managing shelves fully. That represents a whole layer of friction I only scratched the surface of. I'd also conduct structured usability testing rather than informal walkthroughs, and design out the deeper flows I scoped but didn't build: reading calendar, community groups, and menu customization among them.",
            "I'd also approach it with accessibility as a foundation rather than an afterthought. This project taught me a lot about what it means to design for real users, and as I've continued learning, designing inclusively has become a core part of how I think about UX. You'll see that reflected in my more recent work. Design is never done, and neither am I. :)",
          ]}
        />

        {/* TODO: add thumbnailImage once Gather poster asset is ready */}
        <NextProject
          title="Gather"
          href="/gather"
          description="Freelance mobile app design for an event discovery startup — 36 screens, end to end."
        />
      </CaseStudyLayout>
      <Footer />
    </>
  );
}
