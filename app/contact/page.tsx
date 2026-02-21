// Contact page — lets visitors get in touch. Content is placeholder pending final copy.
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Claire Chiu",
  description: "Get in touch with Claire Chiu.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section
          aria-labelledby="contact-heading"
          className="mx-auto max-w-3xl px-6 py-24"
        >
          <h1
            id="contact-heading"
            className="text-5xl leading-tight text-primary"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            Contact
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/70">
            Placeholder — contact form or details will go here.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
