"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2"
        >
          <Shield size={18} className="text-accent" />
          <span className="text-sm font-semibold text-accent">
            Master Electrician Australia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          When Electrical Safety
          <br />
          Is Paramount
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          Data &amp; Electrical Services for Brisbane &amp; the Gold Coast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
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
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3"
        >
          {[
            "Friendly, reliable & efficient",
            "Prompt service & competitive rates",
            "No obligation quotes",
            "Master Electrician",
            "Complete electrical & lighting solutions",
            "All types of data & electrical projects",
          ].map((point) => (
            <div
              key={point}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center"
            >
              <p className="text-xs font-medium text-white/70 sm:text-sm">{point}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
