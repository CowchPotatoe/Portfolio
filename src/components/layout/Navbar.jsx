import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

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
    className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur"
    >
      <nav className="relative container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">

        {/* Logo */}
        <a
          href="#top"
          className="text-lg font-bold hover:text-primary sm:text-xl"
        >
          CowchPotatoe<span className="text-primary">.</span>
        </a>

        {/* Name and degree: hidden on mobile */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 text-center lg:block">
          <p className="text-sm font-semibold">Ivan Chen</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Computer Science + Electrical Engineering
          </p>
        </div>

        {/* Contact and menu buttons */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button
            size="sm"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="gap-1 shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40"
          >
            Contact{" "}
            <span className="hidden items-center gap-1 sm:inline-flex">
                Me <ArrowUpRight size={16} />
            </span>
          </Button>

          <Button
            size="icon"
            variant="secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
            className="!flex !h-11 !w-11 !items-center !justify-center !p-0 border border-border"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div
            id="navbar-menu"
            className="absolute right-4 top-full mt-2 w-52 rounded-xl border border-border bg-background p-2 shadow-lg sm:right-6"
          >
            <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">
              EXPLORE
            </p>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
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