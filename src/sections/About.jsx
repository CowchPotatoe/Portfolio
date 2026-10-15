import { Code2, Cpu, Lightbulb, Users } from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Writing clean code, solving problems, and building useful tools.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Working with microcontrollers, sensors, and hardware programming.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Exploring ideas, learning new technologies, and finding solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Sharing ideas and working with others to bring projects to life.",
  },
];

export const About = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* About Me and quote */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Me
          </p>
          <div className="mb-5 mt-4 h-1 w-16 rounded-full bg-primary" />

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            I love building things!
            <span className="mt-2 block font-serif font-normal italic text-primary">
              From circuits to code.
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              I'm a Computer Science and Electrical Engineering student
              at UNLV who enjoys exploring how hardware and software work
              together. I'm interested in everything from the circuits
              inside a device to the code that brings it to life.
            </p>
            <p>
              Through hands-on projects, I've explored microcontrollers,
              sensors, embedded programming, and software development.
              I enjoy learning new technologies and turning ideas into
              projects I can build, test, and improve.
            </p>
            <p>
              I'm always looking for opportunities to learn, take on new
              challenges, and build meaningful projects. Interested in
              collaborating? Let's connect!
            </p>
          </div>

          {/* Compact quote below the introduction */}
          <div className="glass glow-border mt-6 rounded-2xl p-4">
            <p className="text-sm italic leading-6 text-foreground sm:text-base">
              "I enjoy understanding how things work and bringing ideas
              to life through code, circuits, and experimentation."
            </p>
          </div>
        </div>

        {/* Areas of interest */}
        <div className="glass rounded-2xl p-4 sm:p-5">
          <h3 className="mb-4 text-lg font-semibold">
            What I'm interested in
          </h3>

          <div className="space-y-2">
            {interests.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_18px_rgba(139,140,255,0.2)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
