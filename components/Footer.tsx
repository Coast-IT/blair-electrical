import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
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
                Blair Data & Electrical
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Quality electrical work. No excuses.
            </p>
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
                href="mailto:info@blairelectrical.com.au"
                className="block text-sm text-white/60 hover:text-accent transition-colors"
              >
                info@blairelectrical.com.au
              </a>
              <p className="text-sm text-white/60">
                Servicing Brisbane & Gold Coast
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Blair Data & Electrical. All
              rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Licensed & Insured Master Electricians — Brisbane & Gold Coast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
