import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/Blairelectrical" },
  { label: "Instagram", href: "https://www.instagram.com/blairelectrical/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/blair-data-electrical/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="h-1 bg-gradient-to-r from-accent via-brand-blue to-accent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="Blair Data & Electrical"
              width={140}
              height={44}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-white/50">
              When electrical safety is paramount.
            </p>
            <div className="mt-5 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-white/40 hover:text-brand-blue transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/30">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/30">
              Contact
            </h4>
            <div className="mt-4 space-y-3">
              <a
                href="tel:0427015926"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
              >
                <Phone size={14} />
                0427 015 926
              </a>
              <a
                href="mailto:info@blairelectrical.com.au"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                info@blairelectrical.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Servicing the Greater Brisbane &amp; Gold Coast Region
            </p>
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} BDE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
