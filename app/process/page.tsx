// Process page — describes design and development approach. Content is placeholder pending final copy.
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
        <section
          aria-labelledby="process-heading"
          className="mx-auto max-w-3xl px-6 py-24"
        >
          <h1
            id="process-heading"
            className="text-5xl leading-tight text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Process
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/70">
            Under construction! Come back soon to see what I've built here.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
