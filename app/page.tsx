// Root page — composes the homepage layout with header, hero section, and footer.
export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-primary/10 bg-background">
        <nav
          aria-label="Main navigation"
          className="flex flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
        >
          <a
            href="/"
            className="w-fit rounded text-sm font-medium text-primary transition-colors hover:text-purple hover:underline hover:decoration-purple hover:decoration-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
          >
            Claire Chiu
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
            <li>
              <a
                href="#work"
                className="rounded text-sm uppercase tracking-wide text-primary/70 transition-colors hover:text-purple hover:underline hover:decoration-purple hover:decoration-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="rounded text-sm uppercase tracking-wide text-primary/70 transition-colors hover:text-purple hover:underline hover:decoration-purple hover:decoration-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded text-sm uppercase tracking-wide text-primary/70 transition-colors hover:text-purple hover:underline hover:decoration-purple hover:decoration-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
              >
                Contact Me!
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section
          aria-labelledby="hero-heading"
          className="hero-bg flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center"
        >
          <h1
            id="hero-heading"
            className="text-5xl leading-tight text-white lg:text-7xl"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Claire Chiu
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-blush">
            I design in Figma and build in code — with a focus on accessible,
            inclusive experiences.
          </p>
          <a
            href="#work"
            className="mt-10 inline-block rounded-full bg-purple px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-plum focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple"
          >
            See my work
          </a>
        </section>
      </main>

      <footer className="w-full border-t border-primary/10 bg-blush">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <p className="text-base leading-relaxed text-primary">
            Footer placeholder
          </p>
        </div>
      </footer>
    </>
  );
}
