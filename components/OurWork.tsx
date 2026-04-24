"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const photos = [
  {
    src: "/BWBris25-Day4-110.jpg",
    alt: "Team installing air conditioning unit",
  },
  {
    src: "/BWBris25-Day4-106.jpg",
    alt: "Split system air conditioning install",
  },
  {
    src: "/BWBris25-Day4-153.jpg",
    alt: "Electrician ready for the job",
  },
  {
    src: "/BWBris25-Day4-174.jpg",
    alt: "Kitchen oven installation",
  },
  {
    src: "/BWBris25-Day4-183.jpg",
    alt: "Downlight installation",
  },
  {
    src: "/BWBris25-Day4-184.jpg",
    alt: "Switchboard maintenance",
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-brand-blue">
            <Zap size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-text-muted">
            From air conditioning installs to switchboard upgrades — here&apos;s
            a look at our team in action.
          </p>
        </motion.div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:gap-5">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mb-4 lg:mb-5 break-inside-avoid"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={600}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
