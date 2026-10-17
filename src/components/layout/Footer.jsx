const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8">
      <nav className="flex flex-wrap justify-center gap-6">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ivan Chen. All rights reserved.
      </p>
    </footer>
  );
};