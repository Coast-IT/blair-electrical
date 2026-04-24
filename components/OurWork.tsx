"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="our-work" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-brand-blue">
              <Zap size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">
                Our Team
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              The BDE Crew at Work
            </h2>
            <p className="mt-4 text-text-muted">
              Professional, efficient, and always on the tools.
            </p>
          </div>

          <div className="hidden sm:flex shrink-0 items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-text-muted"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-text-muted hover:border-brand-blue hover:text-brand-blue transition-colors disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-text-muted"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="mt-10 flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+2rem))] snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="shrink-0 snap-start"
          >
            <div className="relative h-[280px] w-[200px] sm:h-[340px] sm:w-[240px] overflow-hidden rounded-xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="240px"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
