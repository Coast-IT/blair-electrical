"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Shield, Home, FileCheck } from "lucide-react";

const stats = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Shield, label: "Master Electrician Certified" },
  { icon: Home, label: "Residential & Commercial" },
  { icon: FileCheck, label: "AS3000:2018 Compliant" },
];

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
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-accent p-6 shadow-xl lg:block">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm font-medium text-primary/80">
                Years of Experience
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About Blair Data & Electrical
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                BDE has been delivering quality electrical services across
                Brisbane and the Gold Coast for over a decade. As a master
                electrician-led business, we pride ourselves on reliability,
                safety compliance, and getting the job done without the
                runaround.
              </p>
              <p>
                Whether it&apos;s a residential emergency, a commercial fit-out,
                or a full data and communications install — we bring the same
                attention to detail to every job. We&apos;re the electricians our
                clients keep calling back.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-lg bg-light-bg p-4"
                >
                  <Icon size={22} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-text-main">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
