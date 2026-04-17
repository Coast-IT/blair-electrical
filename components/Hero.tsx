"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/van.jpg'), url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent via-brand-blue to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5"
          >
            <Shield size={16} className="text-brand-blue" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Master Electrician Australia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
          >
            When Electrical
            <br />
            Safety Is{" "}
            <span className="text-brand-blue">Paramount</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-lg text-white/70"
          >
            Data &amp; Electrical services across Brisbane &amp; the Gold Coast.
            Friendly, reliable, and efficient — with no obligation quotes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all"
            >
              Get a Free Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-7 py-4 text-base font-semibold text-white hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              "Prompt Service",
              "Competitive Rates",
              "Fully Insured",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm text-white/50"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
