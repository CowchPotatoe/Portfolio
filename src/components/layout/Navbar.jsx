import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-xl shadow-sm"
    >
      <nav className="relative container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#top"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          IC<span className="text-primary">.</span>
        </a>

        {/* Center tagline: visible on larger screens */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 text-center lg:block">
          <p className="text-sm font-semibold tracking-tight">
            Ivan Chen
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Computer Science + Electrical Engineering
          </p>
        </div>

        {/* Contact button and menu */}
        <div className="ml-auto flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Contact Me
            <span aria-hidden="true">↗</span>
          </a>

          {/* Hamburger menu */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface text-lg transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Dropdown links */}
        {isMenuOpen && (
          <div
            id="navbar-menu"
            className="absolute right-6 top-full mt-3 w-52 rounded-2xl border border-border/60 bg-background p-2 shadow-xl"
          >
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Explore
            </p>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
