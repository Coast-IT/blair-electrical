"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

const serviceOptions = [
  "Residential",
  "Commercial",
  "Air Conditioning",
  "Data & Comms",
  "Testing & Compliance",
  "Other",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (_data: FormData) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-text-main placeholder:text-text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";
  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <section id="contact" className="bg-light-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Ready to get started? Send us your details and we&apos;ll be in
            touch with a quote.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <motion.div {...fadeInUp}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={22} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-text-main">Email</p>
                  <a
                    href="mailto:info@blairelectrical.com.au"
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    info@blairelectrical.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={22} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    Accounts Enquiries
                  </p>
                  <a
                    href="mailto:accounts@blairelectrical.com.au"
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    accounts@blairelectrical.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    Service Area
                  </p>
                  <p className="text-sm text-text-muted">
                    Servicing Brisbane & Gold Coast
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex h-64 items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-accent" />
                  <p className="mt-3 text-sm font-semibold text-primary">
                    Brisbane & Gold Coast Service Area
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Covering all suburbs across SEQ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4">
                <CheckCircle size={20} className="shrink-0 text-green-600" />
                <p className="text-sm font-medium text-green-800">
                  Thanks! We&apos;ll be in touch shortly.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name *"
                  className={inputClasses}
                />
                {errors.name && (
                  <p className={errorClasses}>{errors.name.message}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("phone", {
                      required: "Phone is required",
                    })}
                    type="tel"
                    placeholder="Phone *"
                    className={inputClasses}
                  />
                  {errors.phone && (
                    <p className={errorClasses}>{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email *"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className={errorClasses}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <select
                  {...register("serviceType")}
                  className={inputClasses}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Service Type
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Message / Job Description"
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary shadow-sm hover:bg-accent/90 transition-all hover:shadow-md"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
