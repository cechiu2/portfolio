// Root page — homepage composed of the sticky header, intro, work section, and footer.
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import WorkSection from "@/components/WorkSection";
import ProjectCard from "@/components/ProjectCard";

// Placeholder project data — replace titles, categories, and hrefs with real content
const projects = [
  {
    title: "Project One",
    company: "Freelance",
    category: "UX Design · Engineering",
    year: "2025",
    href: "#",
    placeholderGradient: "bg-gradient-to-br from-blush to-purple",
  },
  {
    title: "Project Two",
    company: "Concept",
    category: "UX Design · Engineering",
    year: "2024",
    href: "#",
    placeholderGradient: "bg-gradient-to-br from-purple to-plum",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        <IntroSection />

        {/* Work section — main focus of the homepage, starts above the fold on desktop */}
        <WorkSection>
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard {...project} />
            </li>
          ))}
        </WorkSection>
      </main>

      <Footer />
    </>
  );
}
