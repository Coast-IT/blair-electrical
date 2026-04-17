"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, User, CheckCircle } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  securityType: string;
  service: string;
  message: string;
}

const securityTypes = ["Domestic", "Commercial", "Retail", "Public"];
const serviceOptions = [
  "Electrical Services",
  "Data and Cameras",
  "Airconditioning",
  "Testing & Certification",
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
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Simply call or fill in the form and we&apos;ll get back to you as
            soon as we can.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <motion.div {...fadeInUp}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User size={22} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    Contact
                  </p>
                  <p className="text-sm text-text-muted">Ryan Blair</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={22} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-text-main">Phone</p>
                  <a
                    href="tel:0427015926"
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    0427 015 926
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={22} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    Enquiries
                  </p>
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
                    Accounts
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
                    Servicing the Greater Brisbane &amp; Gold Coast Region
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex h-64 items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-accent" />
                  <p className="mt-3 text-sm font-semibold text-primary">
                    Brisbane &amp; Gold Coast Service Area
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
                  Thanks! We&apos;ll get back to you as soon as we can.
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
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Full Name *"
                  className={inputClasses}
                />
                {errors.fullName && (
                  <p className={errorClasses}>{errors.fullName.message}</p>
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
                  {...register("securityType")}
                  className={inputClasses}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  {securityTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-medium text-text-muted">
                  Service Required
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-text-main cursor-pointer hover:border-accent/50 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5"
                    >
                      <input
                        {...register("service")}
                        type="radio"
                        value={opt}
                        className="accent-accent"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Message"
                  className={inputClasses}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-8 py-4 text-base font-semibold text-primary shadow-sm hover:bg-accent/90 transition-all hover:shadow-md"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
