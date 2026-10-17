import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/Button";

const contactLinks = [
  { label: "Email", href: "mailto:chenivanj@gmail.com", icon: Mail },
  {
    label: "GitHub",
    href: "https://github.com/CowchPotatoe",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ivanjfchen",
    icon: FaLinkedin,
  },
];

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Get In Touch
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Have a question or want to work together? Send me a message.
          </p>
        </div>

        {/* Compact form */}
        <form
          action="mailto:chenj@gmail.com"
          method="POST"
          encType="text/plain"
          className="glass mx-auto max-w-2xl space-y-4 rounded-2xl p-5 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Name
              </label>
              <input
                id="name"
                name="Name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows={4}
              required
              placeholder="Write your message..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-5 pt-2 sm:flex-row">
            {/* Social icon buttons */}
            <div className="flex items-center gap-3">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_18px_rgba(139,140,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>

            <Button type="submit" size="default" className="w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Send Message <Send size={16} />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};