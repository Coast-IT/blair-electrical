import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Blairelectrical",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blairelectrical/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/blair-data-electrical/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Zap size={22} className="text-accent" />
              <span className="text-lg font-bold text-white">
                Blair Data &amp; Electrical
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              When electrical safety is paramount.
            </p>
            <div className="mt-5 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <div className="mt-4 space-y-2">
              <a
                href="tel:0427015926"
                className="block text-sm text-white/60 hover:text-accent transition-colors"
              >
                0427 015 926
              </a>
              <a
                href="mailto:info@blairelectrical.com.au"
                className="block text-sm text-white/60 hover:text-accent transition-colors"
              >
                info@blairelectrical.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Servicing the Greater Brisbane &amp; Gold Coast Region
            </p>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} BDE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
