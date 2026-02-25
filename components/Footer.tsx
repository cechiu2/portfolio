// Shared site footer — attribution text on the left, LinkedIn and Email links on the right.
export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 bg-blush">
      <div className="flex items-center justify-between px-6 py-6">

        <p className="text-sm text-primary">
          This website was designed and coded by Claire :)
        </p>

        <nav aria-label="Footer links" className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/cechiu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-sm text-primary/60 transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2 rounded-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:claire.chiu1285@gmail.com"
            aria-label="Send email to Claire"
            className="text-sm text-primary/60 transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2 rounded-sm"
          >
            Email
          </a>
        </nav>

      </div>
    </footer>
  );
}
