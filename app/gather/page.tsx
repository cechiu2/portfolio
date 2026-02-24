// Gather case study page — placeholder layout pending full case study content.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gather — Claire Chiu",
  description: "Case study: Gather, by Claire Chiu.",
};

export default function GatherPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section
          aria-labelledby="gather-heading"
          className="mx-auto max-w-3xl px-6 py-24"
        >
          <h1
            id="gather-heading"
            className="text-5xl leading-tight text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Gather
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
