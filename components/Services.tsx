"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Wind,
  Network,
  Lightbulb,
  Cable,
  ClipboardCheck,
  HardHat,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description:
      "Lighting, power points, switchboard upgrades, safety switches, smoke alarms, and general home electrical work.",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description:
      "Office fit-outs, industrial installations, three-phase power, and ongoing maintenance for businesses.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description:
      "Supply and installation of Mitsubishi Heavy split system and ducted units up to 18kW.",
  },
  {
    icon: Network,
    title: "Data & Communications",
    description:
      "Cat6 data cabling, TV points, phone lines, and full data infrastructure for new builds and upgrades.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Outdoor",
    description:
      "Exterior lighting, landscape lighting, energy-efficient LED upgrades, and decorative installs.",
  },
  {
    icon: Cable,
    title: "Underground & Cabling",
    description:
      "Underground cabling, disconnections, make-safes for renovations, and emergency electrical work.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Compliance",
    description:
      "Certified testing compliant with AS3000:2018 Wiring Rules and AS3018:2001 Domestic Installations.",
  },
  {
    icon: HardHat,
    title: "New Builds",
    description:
      "Full electrical and data packages for new residential and commercial builds.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-light-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            End-to-end electrical services for homes, businesses, and everything
            in between.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-main">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
