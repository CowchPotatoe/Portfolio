import { Button } from "@/components/Button";

export const Hero = () => {
  // Scroll to the section selected by each button
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Subtle purple glow in the background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* Introduction */}
        <div className="text-center lg:text-left">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            UNLV · Computer Science + Electrical Engineering
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I'm Ivan.
            <span className="mt-2 block text-primary light-flicker">
              CowchPotatoe
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
            I'm a computer science and electrical engineering student
            interested in embedded systems, programming, and software
            development. I enjoy building projects ranging from
            circuits, code, and real-world applications.
          </p>

          {/* Buttons that scroll to other sections */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View Projects <span aria-hidden="true">↗</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative mx-auto w-full max-w-sm px-3 pb-4">
          {/* Static glow behind the photo */}
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

          {/* Border and glow appear on hover */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-transparent bg-card p-3 shadow-2xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(139,140,255,0.45)]">
            <img
              src="/images/profile.jpeg"
              alt="Ivan Chen"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};