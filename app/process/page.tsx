// Process page — editorial overview of Claire's design and engineering process.
// Static server component: no interactivity needed, no "use client".
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Process — Claire Chiu",
  description: "How Claire Chiu approaches design and engineering problems.",
};

export default function ProcessPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <div className="mx-auto max-w-[680px] px-6 py-24">
          {/* Page title */}
          <h1
            className="text-4xl leading-tight text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Process
          </h1>

          {/* Intro paragraph — Young Serif, larger, sets the tone for the page */}
          <p
            className="mt-6 text-2xl leading-snug text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            I&rsquo;m a designer who codes, and a coder who designs. I
            don&rsquo;t think those are two separate things, I think the best
            digital products happen when the person thinking about the
            experience is also the person who understands how it gets built.
            That&rsquo;s the space I&rsquo;ve always lived in, and it&rsquo;s
            where I do my best work.
          </p>

          {/* Four process sections */}
          <div className="mt-20 space-y-16">
            {/* Section 1 — Design & Engineering */}
            <section aria-labelledby="process-design-engineering">
              <h2
                id="process-design-engineering"
                className="text-2xl leading-snug text-plum"
                style={{ fontFamily: "var(--font-young-serif)" }}
              >
                Design &amp; Engineering
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-primary">
                <p>
                  Most designers hand off to engineers. Most engineers implement
                  what they&rsquo;re handed. I&rsquo;ve always been suspicious
                  of that gap &mdash; it&rsquo;s where nuance gets lost, where
                  accessibility gets deprioritized, where the thing that ships
                  looks a little less like the thing that was designed.
                </p>
                <p>
                  Having both skill sets doesn&rsquo;t mean I do everything
                  alone. It means I speak both languages fluently. I can design
                  something in Figma knowing exactly how it might be built, and
                  I can build something knowing exactly what the designer
                  intended. That fluency makes me a better collaborator, a
                  faster executor, and a more honest advocate for the user.
                </p>
              </div>
            </section>

            {/* Section 2 — Accessibility & Inclusive Design */}
            <section aria-labelledby="process-accessibility">
              <h2
                id="process-accessibility"
                className="text-2xl leading-snug text-plum"
                style={{ fontFamily: "var(--font-young-serif)" }}
              >
                Accessibility &amp; Inclusive Design
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-primary">
                <p>Accessibility has been important to me for a long time.</p>
                <p>
                  In college, I sat on the boards of organizations working to
                  lower barriers to earning a CS degree for women, people of
                  color, and people with disabilities. At Microsoft I owned
                  accessibility for my team, which in practice meant I was the
                  one in the bug queue, fixing the issues that made our product
                  unusable for people relying on screen readers, keyboard
                  navigation, and other assistive technologies.
                </p>
                <p>
                  That experience changed how I design. I don&rsquo;t think
                  about accessibility as a checklist you run at the end, but as
                  a constraint that makes everything better, the same way
                  designing for mobile first makes desktop layouts stronger. If
                  you can&rsquo;t navigate your product with a keyboard, your
                  interaction design has a hole in it. If your contrast fails,
                  your visual hierarchy was never as strong as you thought.
                </p>
                <p>
                  This website was built with WCAG 2.1 AA as a baseline. Skip
                  navigation, visible focus states, semantic HTML, aria labels,
                  prefers-reduced-motion support were my first principles. I
                  hope you can see the care I put into building this website :)
                </p>
              </div>
            </section>

            {/* Section 3 — AI & The Changing Landscape */}
            <section aria-labelledby="process-ai">
              <h2
                id="process-ai"
                className="text-2xl leading-snug text-plum"
                style={{ fontFamily: "var(--font-young-serif)" }}
              >
                AI &amp; The Changing Landscape
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-primary">
                <p>
                  I admit I used to be a luddite when it comes to AI for many
                  reasons, but one of them was also because I was worried about
                  what it meant for work I cared about.
                </p>
                <p>
                  I&rsquo;ve watched the job market shift dramatically in the
                  past year. Both software engineering and product design roles
                  are changing faster than anyone predicted, and honestly for a
                  while I was worried about if my previous experience was even
                  useful or sought after anymore. I thought the answer was to
                  resist that change, to prove I could still do things the old
                  way.
                </p>
                <p>
                  Building this website with Claude Code changed my perspective.
                  I worked faster than I ever have on a front-end project. I
                  wasn&rsquo;t writing every line of code myself, but my
                  engineering background meant I understood everything being
                  written, could catch mistakes, push back on bad
                  implementations, and make real decisions rather than just
                  accepting whatever the model produced. My design eye meant I
                  could direct Claude Code the way you&rsquo;d direct a skilled
                  collaborator: with intent, with taste, with specific feedback.
                </p>
                <p>
                  What I realized is that AI doesn&rsquo;t replace design
                  thinking, it accelerates it. The structured problem solving,
                  the user empathy, and the judgment calls still have to come
                  from a designer. Frameworks evolve, methods evolve, tools
                  evolve, but the need for structured problem solving will never
                  disappear. We&rsquo;re just able to move a lot faster now,
                  which means the thinking matters more, not less.
                </p>
                <p>
                  I&rsquo;d rather be better than stay bitter. And I think this
                  is a genuinely exciting moment to be jumping into product
                  design.
                </p>
              </div>
            </section>

            {/* Section 4 — How I Work */}
            <section aria-labelledby="process-how-i-work">
              <h2
                id="process-how-i-work"
                className="text-2xl leading-snug text-plum"
                style={{ fontFamily: "var(--font-young-serif)" }}
              >
                My Process
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-primary">
                <p>
                  Every project starts with the problem, not the solution. I
                  research, I talk to users when I can, and I write things down
                  before I open Figma. I prototype early and test with real
                  people. I care about what ships, not just what&rsquo;s in the
                  deck.
                </p>
                <p>
                  I work best on cross-functional teams where design and
                  engineering are in conversation from day one, not handed off
                  at the end.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
