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

// Phone mockup shape reused across decision block visuals
function PhoneMockup({ gradient, label }: { gradient: string; label: string }) {
  return (
    <div
      className={`aspect-[9/19] w-full max-w-[200px] mx-auto rounded-[2.5rem] border border-primary/10 ${gradient}`}
      role="img"
      aria-label={label}
    />
  );
}

const decisionBlocks = [
  {
    number: 1,
    title: "Social-First Home Feed",
    insight:
      "Users trust friend recommendations 4× more than algorithmic suggestions — but the friend activity feed requires three taps to reach from the home screen.",
    decision:
      "Redesign the home screen around social reading activity as the primary content stream, with algorithmic suggestions moved to a secondary, opt-in shelf.",
    rationale:
      "If the platform's most trusted discovery channel is the hardest to reach, the product is actively working against its users' primary motivation for opening the app.",
    visual: (
      <PhoneMockup
        gradient="bg-gradient-to-b from-blush/50 to-purple/30"
        label="Phone mockup: social-first home feed redesign placeholder"
      />
    ),
  },
  {
    number: 2,
    title: "One-Tap Shelving",
    insight:
      "Users frequently open the app intending to add a specific book but abandon the flow. The shelving action is buried below reviews, metadata, and ratings.",
    decision:
      "Promote the shelving CTA to the top of every book page — visible without scrolling, reachable in a single tap.",
    rationale:
      "Shelving intent is highest at the moment of discovery. Every additional tap required between intent and action is an opportunity to lose the user.",
    visual: (
      <PhoneMockup
        gradient="bg-gradient-to-b from-purple/30 to-plum/50"
        label="Phone mockup: one-tap shelving on book page placeholder"
      />
    ),
  },
  {
    number: 3,
    title: "Unified Book Page Hierarchy",
    insight:
      "The existing book page front-loads reviews, descriptions, and metadata before the primary action — forcing users to scroll past context they didn't ask for.",
    decision:
      "Reorganize the book page: action first (Add to shelf), then social proof (friend activity + ratings), then full metadata and reviews below.",
    rationale:
      "Users already know what book they're looking at. The interface should support the decision they're making, not delay it.",
    visual: (
      <PhoneMockup
        gradient="bg-gradient-to-b from-plum/50 to-purple/20"
        label="Phone mockup: unified book page hierarchy placeholder"
      />
    ),
  },
];

const researchCards = [
  {
    title: "The app buries what users actually want.",
    summary:
      "Users come to Goodreads primarily to track their reading and browse books — but accessing your own profile requires navigating into a hamburger menu, Search and Discover are redundantly separated into different tabs, and the home feed is cluttered with low-value notifications. The Power User put it plainly: \"Accessing my profile shouldn't be buried in the menu.\" The Casual Tracker noted that the menu was full of features she'd never once used: \"Giveaways? Who is using that?\"",
    quote:
      "I always check what my friends are reading, but I can never find that tab. I end up just Googling instead.",
    citeLabel: "The Casual Tracker",
  },
  {
    title: "Personal tracking is underpowered for what users actually want from it.",
    summary:
      "Users love data about themselves — streaks, monthly reading stats, personal notes on books. Goodreads has the raw material for this but surfaces almost none of it well on mobile. The Power User wanted \"a better section to take personal notes on books — the majority of users just want to read and track for personal means.\" The Discovery-Seeker drew a comparison that stuck with me: she wanted Goodreads to surface new releases by authors she already loves, the way Spotify's Fresh Finds surfaces new music from artists you follow. The insight was sharp — stop showing users a firehose of everything published this week and start showing them what's actually relevant to them.",
    quote:
      "StoryGraph actually shows me what my friends finished this week. That alone made me switch.",
    citeLabel: "The Genre Hopper",
  },
  {
    title: "The social features exist but feel unfinished.",
    summary:
      "Users don't want to abandon the social layer — they want it to work. Reviews are the most valuable social content on Goodreads, but they're hard to find per book and mixed in with low-signal feed noise like friend-of-friend activity. The Social Reader wanted to see friends' reviews surfaced prominently on each book's page. The Power User wanted granular control over what appeared in her feed — the ability to mute certain activity types entirely. The underlying frustration was consistent: Goodreads gestures toward being a social platform without committing to it.",
    quote:
      "I don't want a list of 'books you might like.' I want to know what people I respect are actually reading.",
    citeLabel: "The Devoted Re-Reader",
  },
];

export default function GoodreadsPage() {
  return (
    <>
      <Header />
      <CaseStudyLayout>
        <CaseStudyHero
          title="Goodreads Mobile Redesign"
          beforeAlt="Screenshot of the original Goodreads app home screen, showing a dense catalog layout with small text and limited social activity"
          afterAlt="Screenshot of the redesigned Goodreads app home screen, featuring a social-first feed with friend reading activity displayed prominently"
        />

        <ProjectMeta items={metaItems} />

        <ProblemSection>
          <p>
            Goodreads has a loyalty problem — not in the sense that users are
            leaving, but in the sense that they stay despite the app, not
            because of it. As an avid reader and long-time user myself, I knew
            this feeling firsthand: the app that's supposed to make reading more
            enjoyable was consistently getting in the way.
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
          prose="Prototype tested with five participants from the original interview pool. Task success rate for 'add a book based on a friend's recent review' improved from 33% → 87%. Average time-on-task dropped by 40%."
          quote="I didn't realize how much I was missing until I saw my friends' reading activity front and center. I opened it three times in a row just to check."
          citeLabel="The Casual Tracker"
        />

        <ReflectionSection
          paragraphs={[
            "The biggest lesson from this project was that the constraint wasn't the UI — it was information architecture. Early explorations focused on visual polish, but the real problem was structural: what content lives where, and how users navigate between contexts.",
            "If I returned to this project, I'd invest more time in IA research — card sorting and tree testing — before opening design tools. The interview data pointed clearly to the structural problem, but I still spent the first two weeks on surface-level explorations.",
            "This project also reinforced something I keep relearning: the most important design decisions aren't about what to add. They're about what to move, deprioritize, or make easier to find.",
          ]}
        />

        <NextProject
          title="Coming Soon"
          href="#"
          description="More case studies on the way."
        />
      </CaseStudyLayout>
      <Footer />
    </>
  );
}
