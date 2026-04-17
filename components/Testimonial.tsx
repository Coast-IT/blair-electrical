"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="relative bg-primary py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>

          <blockquote className="mt-8 text-xl leading-relaxed text-white/90 sm:text-2xl font-medium">
            &ldquo;I engage BDE on a regular basis for a range of electrical
            services and upgrades at our Carole Park premises. BDE is reliable
            and quite simply – I just wouldn&apos;t use anyone else.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="text-base font-bold text-white">
              Stephanie Wulff
            </p>
            <p className="text-sm text-white/50">
              Head Office Manager, Satintouch
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
