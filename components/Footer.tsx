import { site, nav } from "@/lib/data";
import { LinkedInIcon, DribbbleIcon, MailIcon } from "./ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
    { label: "Dribbble", href: site.socials.dribbble, Icon: DribbbleIcon },
    { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
  ];

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-px py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-2xl font-medium tracking-tightish text-ink"
            >
              {site.name}
              <span className="text-gold">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Designing calm, human interfaces — one thoughtful detail at a time.
              Currently open to select projects and full-time roles.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider2 text-muted/70">
              Explore
            </span>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline w-fit text-sm text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider2 text-muted/70">
              Elsewhere
            </span>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. Crafted with care.
          </p>
          <p>Designed &amp; built in Figma and Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
