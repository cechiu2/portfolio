"use client";

// Shared site header with primary navigation.
// Client component so usePathname can mark the current page with aria-current="page".
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact Me!" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/10 bg-background">
      <nav
        aria-label="Main navigation"
        className="flex flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="w-fit rounded text-sm font-medium text-primary transition-colors hover:text-purple hover:underline hover:decoration-purple hover:decoration-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
        >
          Claire Chiu
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className="rounded text-sm uppercase tracking-wide text-primary/70 transition-colors hover:text-purple hover:underline hover:decoration-purple hover:decoration-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
