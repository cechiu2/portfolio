"use client";

// Shared site header with primary navigation.
// The homepage (/) is the work page — the Work nav link points to /.
// usePathname drives aria-current and active link styles.
// Logo links to / but carries no aria-current — that role belongs to the Work nav item.
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact Me :)" },
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
          className="w-fit rounded text-2xl font-medium text-primary transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2"
          style={{ fontFamily: "var(--font-young-serif)" }}
        >
          Claire Chiu
        </Link>

        <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "rounded text-sm uppercase tracking-wide focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-plum focus-visible:ring-offset-2 " +
                    (isActive
                      ? "text-purple"
                      : "text-primary transition-colors hover:text-purple")
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
