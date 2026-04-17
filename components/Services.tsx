"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Wrench,
  Wind,
  Network,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Electrical Services",
    subtitle: "New installations — power, lighting, appliances & smoke alarms",
    description:
      "Have the one company assist with all your electrical needs. BDE offers all electrical services from exterior lighting to underground cabling and everything in between! End to end electrical solutions.",
    items: [
      "Downlights, interior and exterior lighting",
      "Electrical appliances — ovens, rangehoods, dryers, dishwashers, washing machines",
      "Power points",
      "Ceiling fans",
      "Rough ins for new builds",
      "Smoke alarm installations",
      "Switchboard or sub board installation",
      "Underground cabling",
    ],
  },
  {
    icon: Wrench,
    title: "Repairs, Renovations & Make Safes",
    subtitle: "Residential & commercial",
    description:
      "Whether it's an electrical emergency or for a renovation, BDE will ensure electrical safety in the home, office or workplace — and we'll undertake your upgrade or new install as well!",
    items: [
      "All standard & emergency maintenance and testing",
      "Disconnections and make safes for renovations or electrical emergencies",
      "Rough in and fit of power and lighting",
      "Fault finding",
      "Install and maintenance of emergency lighting",
      "Replacement of damaged or old electrical items",
      "Switchboard upgrades to include RCD safety switches",
      "Test and tag of equipment",
      "Smoke alarm testing & repair",
      "RCD testing",
    ],
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    subtitle: "BDE makes summer a breeze",
    description:
      "Let BDE assist with all of your home or workplace air conditioning installation, upgrade and maintenance needs.",
    items: [
      "Ceiling fans & air conditioning units",
      "New installations of Mitsubishi Heavy Split system/ducted AC units up to 18kW",
      "Replacement, removal and disposal of old units",
      "AC servicing and maintenance",
      "Installation of new ceiling fans or upgrades",
    ],
  },
  {
    icon: Network,
    title: "Data & TV Services",
    subtitle: "Home theatre, Wi-Fi, phone & antenna",
    description:
      "Looking for a home theatre set up, Wi-Fi extensions, extra phone points or antenna points? Engage us for data & electrical services for new residential or commercial builds — or upgrades to existing premises.",
    items: [
      "Installation of new data or phone points",
      "Repair of existing data or phone cables/points",
      "Installation or repair of aerial TV points, cable or antenna",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Certification",
    subtitle:
      "Certified testing compliant with AS3000:2018 & AS3018:2001",
    description:
      "Certified testing compliant with AS3000:2018 Wiring Rules and AS3018:2001 Electrical Installations.",
    items: [
      "Domestic — Owners, builders, new builds and renovation upgrades",
      "Commercial — Industrial and commercial builds and upgrades",
      "Retail — Shop fitouts, upgrades and maintenance",
      "Public — Available to local councils for new installations or upgrades",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
          <Icon size={24} className="text-accent" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-text-main">
          {service.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{service.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          {service.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          {expanded ? "Hide details" : "View details"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="border-t border-gray-100 px-6 pb-6 pt-4 space-y-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

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
            Electrical &amp; Lighting Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            End-to-end electrical services for homes, businesses, and everything
            in between.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
