"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Blair Data & Electrical"
              width={160}
              height={50}
              className="h-12 w-auto"
              priority
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget.nextSibling as HTMLElement)?.removeAttribute("hidden");
              }}
            />
            <span hidden className="flex items-center gap-2 text-lg font-extrabold text-white">
              <Zap size={20} className="text-accent" />
              Blair Data &amp; Electrical
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0427015926"
              className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white hover:bg-accent/90 transition-colors"
            >
              <Phone size={16} />
              0427 015 926
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-primary/95 backdrop-blur-md"
          >
            <div className="px-4 pb-6 pt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0427015926"
                onClick={handleLinkClick}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-bold text-white hover:bg-accent/90 transition-colors"
              >
                <Phone size={18} />
                0427 015 926
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
