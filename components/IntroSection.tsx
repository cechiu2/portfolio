// IntroSection — split two-column editorial homepage intro.
// Left column (60% desktop): statement heading + animated descriptors + Currently/Previously.
// Right column (40% desktop): portrait photo + short bio + LinkedIn link.
// On mobile both columns stack vertically, left (text) on top.
import Image from "next/image";
import AnimatedTagline from "@/components/AnimatedTagline";

export default function IntroSection() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full px-6 py-10 sm:py-14"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:gap-16">

        {/* ── Left column — statement + animated text + status ── */}
        <div className="flex flex-col gap-6 md:w-[60%]">

          {/* Main statement — Young Serif, plum on white = 14:1 AAA */}
          <h1
            id="intro-heading"
            className="text-4xl leading-tight text-plum sm:text-5xl"
            style={{ fontFamily: "var(--font-young-serif)" }}
          >
            I&apos;m Claire, a designer who codes.
          </h1>

          {/* Rotating descriptors */}
          <AnimatedTagline />

          {/* Currently / Previously — border-top creates visual separation */}
          <div className="grid grid-cols-2 gap-x-8 border-t border-primary/10 pt-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Currently
              </p>
              <p className="mt-1 text-sm leading-snug text-primary/70">
                Freelance UX Designer
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Previously
              </p>
              <p className="mt-1 text-sm leading-snug text-primary/70">
                Microsoft Software Engineer
              </p>
            </div>
          </div>

        </div>

        {/* ── Right column — photo + bio + LinkedIn ── */}
        {/* items-center centers photo on mobile; self-center on image handles desktop centering */}
        <div className="flex flex-col items-center gap-5 md:w-[40%] md:items-start">

          {/* Portrait photo — vintage photo booth, rectangular, ~300px tall */}
          <Image
            src="/images/IMG_0232.jpg"
            alt="Claire Chiu, product designer and software engineer, in a vintage photo booth portrait."
            width={225}
            height={300}
            className="h-[300px] w-auto self-center object-cover"
            priority
          />

          {/* Short bio — Geist Sans (font-sans via body default) */}
          <p className="text-center text-sm leading-relaxed text-primary/70 sm:text-base md:text-left">
            Product designer and software engineer based in Seattle. I build
            things that are beautiful, functional, and accessible to everyone.
          </p>

          {/* Social links — plum focus ring on white background */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/cechiu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Claire's LinkedIn profile (opens in new tab)"
              className="inline-flex items-center gap-2 rounded-sm text-primary/60 transition-colors hover:text-plum focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
            >
              {/* LinkedIn logo mark */}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="mailto:claire.chiu1285@gmail.com"
              aria-label="Send email to Claire"
              className="inline-flex items-center gap-2 rounded-sm text-primary/60 transition-colors hover:text-plum focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
