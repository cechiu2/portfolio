// Gather case study page — full case study structure, content TBD.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyHero from "@/components/CaseStudyHero";
import ProjectMeta from "@/components/ProjectMeta";
import ReflectionSection from "@/components/ReflectionSection";
import NextProject from "@/components/NextProject";
import GatherBriefSection from "@/components/gather/GatherBriefSection";
import GatherProblemSection from "@/components/gather/GatherProblemSection";
import GatherApproachSection from "@/components/gather/GatherApproachSection";
import GatherVisualDirectionSection from "@/components/gather/GatherVisualDirectionSection";
import GatherDesignDecisionsSection from "@/components/gather/GatherDesignDecisionsSection";
import GatherScopeSection from "@/components/gather/GatherScopeSection";
import GatherOutcomeSection from "@/components/gather/GatherOutcomeSection";

export const metadata: Metadata = {
  title: "Gather — Claire Chiu",
  description: "Case study: Gather, by Claire Chiu.",
};

const metaItems = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2 months (ongoing)" },
  { label: "Type", value: "Freelance client work" },
  { label: "Tools", value: "Figma" },
];

export default function GatherPage() {
  return (
    <>
      <Header />
      <CaseStudyLayout>
        {/* TODO: replace placeholder video with /videos/gather-hero.webm + /videos/gather-hero.mp4
            and poster with /images/gather-poster.png once assets are ready */}
        <CaseStudyHero
          title="Gather"
          subtitle="Designing a full mobile event discovery app for a startup — from onboarding to heatmap."
          videoSrc="/videos/scrollthrough.webm"
          videoSrcMp4="/videos/gather-hero.mp4"
          videoPoster="/images/gather-poster.png"
          videoAlt="Scrollthrough of the Gather mobile app design"
        />

        <ProjectMeta items={metaItems} />

        <GatherProblemSection />

        <GatherBriefSection />

        <GatherApproachSection />

        <GatherVisualDirectionSection />

        <GatherDesignDecisionsSection />

        <GatherScopeSection />

        <GatherOutcomeSection />

        <ReflectionSection
          paragraphs={[
            "Gather was my first professional design engagement and the project that showed me how well my engineering background translates into design practice. Understanding component reusability, implementation complexity, and system thinking didn't just make me easier to work with — it made my designs better.",
            "With more time I'd want to conduct user research beyond the founder's user stories, especially around the map interaction which is novel enough to benefit from real usability testing. I'd also want to design out the AI planning assistant flow, which I think has the potential to be one of the most distinctive features in the product.",
            "Accessibility is something I'd approach more intentionally on future projects — contrast ratios on dark backgrounds require extra care, and designing for one-handed use is especially relevant for an app people will use while out at events.",
          ]}
        />

        {/* href omitted — renders non-linkable coming soon state */}
        <NextProject
          title="More coming soon"
          description="The next case study is currently in progress. Check back soon."
        />
      </CaseStudyLayout>
      <Footer />
    </>
  );
}
