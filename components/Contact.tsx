"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, User, CheckCircle, Zap } from "lucide-react";

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
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-text-main placeholder:text-text-muted/60 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-colors";
  const errorClasses = "mt-1 text-xs text-accent";

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
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
              Get in Touch
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-text-muted">
            Simply call or fill in the form and we&apos;ll get back to you as
            soon as we can.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <User size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">Contact</p>
                  <p className="text-sm text-text-muted">Ryan Blair</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">Phone</p>
                  <a
                    href="tel:0427015926"
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    0427 015 926
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <Mail size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">Enquiries</p>
                  <a
                    href="mailto:info@blairelectrical.com.au"
                    className="text-sm text-text-muted hover:text-brand-blue transition-colors"
                  >
                    info@blairelectrical.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <Mail size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">Accounts</p>
                  <a
                    href="mailto:accounts@blairelectrical.com.au"
                    className="text-sm text-text-muted hover:text-brand-blue transition-colors"
                  >
                    accounts@blairelectrical.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">
                    Service Area
                  </p>
                  <p className="text-sm text-text-muted">
                    Greater Brisbane &amp; Gold Coast
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-primary p-6">
              <div className="text-center">
                <MapPin size={28} className="mx-auto text-brand-blue" />
                <p className="mt-3 text-sm font-bold text-white">
                  Brisbane &amp; Gold Coast
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Covering all suburbs across SEQ
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
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
              className="rounded-xl border border-gray-100 bg-light-bg p-6 sm:p-8 space-y-4"
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
                    {...register("phone", { required: "Phone is required" })}
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
                <legend className="mb-3 text-sm font-bold text-text-main">
                  Service Required
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-text-main cursor-pointer hover:border-brand-blue/50 transition-colors has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/5"
                    >
                      <input
                        {...register("service")}
                        type="radio"
                        value={opt}
                        className="accent-brand-blue"
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
                className="w-full rounded-lg bg-accent px-8 py-4 text-base font-bold text-white shadow-sm shadow-accent/20 hover:bg-accent/90 transition-all hover:shadow-md"
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
