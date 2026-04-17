"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustBadges = [
  "Licensed & Insured",
  "10+ Years Experience",
  "Brisbane & Gold Coast",
  "Master Electricians",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Brisbane & Gold Coast&apos;s Trusted Master Electricians
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          Residential, commercial, and industrial electrical services — done
          right, every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-accent/90 transition-all hover:shadow-xl"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-all"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <CheckCircle size={16} className="text-accent" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
