// Work page — showcases selected projects. Content is placeholder pending final copy.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work — Claire Chiu",
  description: "Selected projects by Claire Chiu, product designer and engineer.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section
          aria-labelledby="work-heading"
          className="mx-auto max-w-3xl px-6 py-24"
        >
          <h1
            id="work-heading"
            className="text-5xl leading-tight text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Work
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/70">
            Placeholder — selected projects will go here.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
