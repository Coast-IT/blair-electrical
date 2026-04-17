"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div {...fadeInUp} className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Electrician at work"
                width={800}
                height={500}
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About Blair Data &amp; Electrical
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Established in 2020, BDE is a family owned business servicing the
              domestic and commercial markets across the greater Brisbane and
              Gold Coast regions. With a decade of experience in residential,
              construction and heavy industry, BDE is the trusted name in Data
              &amp; Electrical services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-light-bg px-5 py-3">
                <Award size={22} className="shrink-0 text-accent" />
                <span className="text-sm font-semibold text-text-main">
                  Master Electrician
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-light-bg px-5 py-3">
                <ShieldCheck size={22} className="shrink-0 text-accent" />
                <span className="text-sm font-semibold text-text-main">
                  Fully Insured
                </span>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6">
              <p className="text-base italic leading-relaxed text-text-muted">
                &ldquo;I engage BDE on a regular basis for a range of electrical
                services and upgrades at our Carole Park premises. BDE is
                reliable and quite simply – I just wouldn&apos;t use anyone
                else.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">SW</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    Stephanie Wulff
                  </p>
                  <p className="text-xs text-text-muted">
                    Head Office Manager, Satintouch
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
