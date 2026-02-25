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
  { label: "Timeline", value: "8 weeks" },
  { label: "Platform", value: "iOS & Web" },
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
    title: "User Interviews",
    summary:
      "Six 45-minute sessions with avid readers (3–10 books per year). Sessions were recorded, transcribed, and clustered into themes via affinity mapping.",
    quote:
      "I always check what my friends are reading, but I can never find that tab. I end up just Googling instead.",
    citeLabel: "The Casual Tracker",
  },
  {
    title: "Competitive Audit",
    summary:
      "Reviewed StoryGraph and Literal to understand where Goodreads is losing ground. Both competitors lead with social signals and mood-based filtering.",
    quote:
      "StoryGraph actually shows me what my friends finished this week. That alone made me switch.",
    citeLabel: "The Genre Hopper",
  },
  {
    title: "Key Insight",
    summary:
      "Users trust peer recommendations 4× more than algorithmic suggestions — yet Goodreads buries friend activity three taps deep behind catalog browsing.",
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
            Goodreads has over 150 million registered users, but its interface
            has barely changed since the early 2010s. Discovering what to read
            next is buried under an overwhelming catalog, social features are
            nearly invisible, and shelving actions — the core user behavior —
            require navigating three levels deep.
          </p>
          <p>
            Readers abandon the platform mid-session not because they lack
            interest, but because the product fails to surface the right book at
            the right moment. Newer competitors like StoryGraph and Literal have
            begun to capture the audience Goodreads is losing.
          </p>
        </ProblemSection>

        <ResearchSection
          intro="Six user interviews and a competitive audit across StoryGraph and Literal revealed a consistent pattern: readers want social discovery, not algorithmic noise."
          cards={researchCards}
        />

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
