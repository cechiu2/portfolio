// ResearchCard — individual research finding card for case studies. Displays a titled
// finding, summary, and a supporting quote with citation. Rendered as <article> for semantics.
export interface ResearchCardProps {
  title: string;
  summary: string;
  quote: string;
  citeLabel: string;
}

export default function ResearchCard({
  title,
  summary,
  quote,
  citeLabel,
}: ResearchCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-primary/70">{summary}</p>
      <blockquote className="border-l-[3px] border-purple pl-4">
        <p className="text-lg italic leading-relaxed text-primary/80">{quote}</p>
        <footer className="mt-3">
          <cite className="not-italic text-xs font-semibold uppercase tracking-widest text-purple">
            {citeLabel}
          </cite>
        </footer>
      </blockquote>
    </article>
  );
}
