// Root page — composes the homepage layout with header, hero section, and footer.
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        <section
          aria-labelledby="hero-heading"
          className="hero-bg flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 text-center"
        >
          <h1
            id="hero-heading"
            className="text-5xl leading-tight text-white lg:text-7xl"
            style={{ fontFamily: "var(--font-cyrene)" }}
          >
            Claire Chiu
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-blush">
            I design in Figma and build in code — with a focus on accessible,
            inclusive experiences.
          </p>
          <a
            href="/work"
            className="mt-10 inline-block rounded-full bg-purple px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-plum focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple"
          >
            See my work
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
