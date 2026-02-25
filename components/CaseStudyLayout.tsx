// CaseStudyLayout — inner page wrapper for case studies. Renders <main> with consistent
// max-width, padding, and vertical spacing between sections. Header/Footer stay in the page file.
import type { ReactNode } from "react";

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-20">
        {children}
      </div>
    </main>
  );
}
