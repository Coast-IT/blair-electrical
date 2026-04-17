"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} className="fill-accent text-accent" />
            ))}
          </div>

          <Quote
            size={40}
            className="mx-auto mt-8 text-accent/30"
          />

          <blockquote className="mt-6 text-xl leading-relaxed text-white/90 sm:text-2xl">
            &ldquo;I engage BDE on a regular basis for a range of electrical
            services and upgrades at our Carole Park premises. BDE is reliable
            and quite simply – I just wouldn&apos;t use anyone else.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-base font-bold text-accent">SW</span>
            </div>
            <div>
              <p className="text-base font-semibold text-white">
                Stephanie Wulff
              </p>
              <p className="text-sm text-white/60">
                Head Office Manager, Satintouch
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
