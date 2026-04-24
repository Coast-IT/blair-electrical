"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Zap, CheckCircle } from "lucide-react";

const highlights = [
  "Friendly, reliable and efficient",
  "Prompt service and competitive rates",
  "No obligation quotes",
  "Complete range of electrical & lighting solutions",
  "All types of data & electrical projects",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 text-brand-blue">
              <Zap size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">
                About BDE
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Blair Data &amp; Electrical
            </h2>

            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Established in 2020, BDE is a family owned business servicing the
              domestic and commercial markets across the greater Brisbane and
              Gold Coast regions. With a decade of experience in residential,
              construction and heavy industry, BDE is the trusted name in Data
              &amp; Electrical services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2">
                <Award size={18} className="text-brand-blue" />
                <span className="text-sm font-semibold text-primary">
                  Master Electrician
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                <ShieldCheck size={18} className="text-accent" />
                <span className="text-sm font-semibold text-primary">
                  Fully Insured
                </span>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-main"
                >
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/team.jpg"
                alt="The Blair Data & Electrical team"
                width={600}
                height={700}
                className="h-[350px] w-full object-cover lg:h-[450px]"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
