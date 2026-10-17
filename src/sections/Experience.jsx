import {
  Code2,
  Cpu,
  Wrench,
  Monitor,
  GraduationCap,
} from "lucide-react";


const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "GDScript", "SQL"],
  },
  {
    icon: Cpu,
    title: "Architecture & Hardware",
    skills: [
      "MIPS",
      "x86-64",
      "RISC-V",
      "AVR",
      "Verilog",
      "SystemVerilog",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Qt6",
      "Quartus",
      "ModelSim",
      "Microchip Studio",
      "LTspice",
      "TinkerCad",
      "Visual Studio",
      "Linux",
      "Windows",
    ],
  },
];

const experiences = [
  {
    period: "August 2025 – Present",
    role: "Undergraduate Teaching Assistant",
    company: "UNLV College of Engineering · Computer Science Department",
    description:
      "I’m currently a C++ TA, helping students with assignments, answering questions, and working through concepts they find challenging. I also help explain topics ranging from C++ basics to object-oriented programming and give students feedback on their code to help them improve.",
    highlights: [
      "Helped improve student performance by approximately 20%.",
      "Reviewed and validated 500+ submissions for AI usage in accordance with ABET standards.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            My Background
          </p>

          <div className="mb-5 mt-4 h-1 w-16 rounded-full bg-primary" />

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Skills & Experience
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            The tools I use, the systems I build, and the experience
            I've gained along the way.
          </p>
        </div>

        {/* Technical skills */}
        <div className="mb-20">
          <h3 className="mb-6 text-xl font-semibold">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="glass rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,140,255,0.15)]"
                >
                  {/* Category heading */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h4 className="font-semibold">{group.title}</h4>
                  </div>

                  {/* Scrollable skills */}
                  <div className="skills-scrollbar max-h-[132px] space-y-1 overflow-y-auto pr-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 transition-all duration-200 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(139,140,255,0.9)]" />

                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Scroll hint */}
                  {group.skills.length > 3 && (
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      Scroll for more ↓
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Work experience */}
        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Work Experience
          </h3>

          <div className="relative border-l border-primary/40 pl-6 sm:pl-8">
            {experiences.map((exp) => (
              <div key={exp.role} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background sm:-left-[38px]" />

                {/* Experience card */}
                <div className="glass rounded-2xl p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_18px_rgba(139,140,255,0.12)] sm:p-7">
                  <p className="text-sm font-medium text-primary">
                    {exp.period}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold sm:text-xl">
                    {exp.role}
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.company}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="glass mt-12 flex items-start gap-4 rounded-2xl p-5 sm:p-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Education</h3>

            <p className="mt-1 text-muted-foreground">
              University of Nevada, Las Vegas
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              B.S. in Computer Science & B.S. in Electrical Engineering
              <br />
              Expected 2028 · GPA: 3.74
              <br />
              Dean's List: Spring 2025, Fall 2025, Spring 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
