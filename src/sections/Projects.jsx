import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Radar,
  Rocket,
  NotebookText,
} from "lucide-react";

const projects = [
  {
    title: "Numdle",
    description:
      "An equation puzzle game built with an ATmega328PB, LCD, keypad, LEDs, and buzzer.",
    image: "/images/projects/numdle.png",
    icon: Gamepad2,
    github: "https://github.com/CowchPotatoe/Numdle",
  },
  {
    title: "Sonar Telemetry",
    description:
      "An ultrasonic sensor and servo system with a Python application to visualize measurements.",
    image: "/images/projects/sonar-telemetry.png",
    icon: Radar,
    github: "https://github.com/CowchPotatoe/Sonar-Telemetry",
  },
  {
    title: "Bambuu",
    description:
      "A Markdown editor built with C++ and Qt with live preview and PDF export.",
    image: "/images/bambuu.png",
    icon: NotebookText,
    github: "https://github.com/CowchPotatoe/Bambuu",
  },
  {
    title: "Coming Soon",
    description: "Something new is in the works. Stay tuned!",
    icon: Rocket,
    comingSoon: true,
  },
];

export const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const showNext = () => {
    setStartIndex((current) => (current + 1) % projects.length);
  };

  const showPrevious = () => {
    setStartIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const visibleProjects = [0, 1, 2].map(
    (offset) => projects[(startIndex + offset) % projects.length]
  );

  const cardStyle =
    "group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_22px_rgba(139,140,255,0.3)]";

  const iconStyle =
    "h-16 w-16 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(139,140,255,0.9)]";

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading and carousel arrows */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What I've Built
            </p>
            <div className="mb-4 mt-4 h-1 w-16 rounded-full bg-primary" />
            <h2 className="text-3xl font-bold sm:text-4xl">
              My Projects
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Things I've built, explored, and learned along the way.
            </p>
          </div>

          <div className="flex gap-2 self-end">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* One card on mobile, two on tablet, three on desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const hidden =
              index === 1
                ? "hidden sm:block"
                : index === 2
                  ? "hidden lg:block"
                  : "";

            const Icon = project.icon;

            return (
              <div key={project.title} className={hidden}>
                {project.comingSoon ? (
                  <div className={`${cardStyle} cursor-default border-dashed`}>
                    <div className="flex aspect-video flex-col items-center justify-center gap-3 bg-gradient-to-br from-card to-surface transition-colors group-hover:from-primary/10">
                      <Rocket className={iconStyle} />

                      <p className="text-sm font-semibold text-primary">
                        COMING SOON
                      </p>
                    </div>

                    <div className="min-h-32 p-4 sm:p-5">
                      <h3 className="font-semibold sm:text-lg">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className={cardStyle}
                  >
                    <div className="relative aspect-video overflow-hidden bg-surface">
                      {/* Show the icon only if the image fails to load */}
                      <img
                        src={project.image}
                        alt={`${project.title} project`}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                          event.currentTarget.nextElementSibling.style.display =
                            "flex";
                        }}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 hidden flex-col items-center justify-center gap-2">
                        <Icon className={iconStyle} />
                        <span className="text-sm text-muted-foreground">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex min-h-32 items-start justify-between gap-3 p-4 sm:p-5">
                      <div>
                        <h3 className="font-semibold transition-colors group-hover:text-primary sm:text-lg">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_12px_rgba(139,140,255,0.9)]"
                      />
                    </div>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};