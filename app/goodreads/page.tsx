// Goodreads Redesign case study page — placeholder layout pending full case study content.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Goodreads Redesign — Claire Chiu",
  description: "Case study: Goodreads Redesign, by Claire Chiu.",
};

export default function GoodreadsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section
          aria-labelledby="goodreads-heading"
          className="mx-auto max-w-3xl px-6 py-24"
        >
          <h1
            id="goodreads-heading"
            className="text-5xl leading-tight text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Goodreads Redesign
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/70">
            Case study coming soon.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
