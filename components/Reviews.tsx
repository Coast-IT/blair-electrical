"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Zap } from "lucide-react";

const reviews = [
  {
    name: "Nigel Smith",
    initials: "NS",
    rating: 5,
    timeAgo: "3 months ago",
    text: "Very professional team, installed ducted system to my 2 storey house. System was installed in a day, no mess, clear communication on location of outlets & very clear direction on using the system. Credit to Ryan who runs an excellent team. Would recommend this company to anyone wanting a great service.",
  },
  {
    name: "Rex P",
    initials: "RP",
    rating: 5,
    timeAgo: "2 months ago",
    text: "I have had the use of Blair Data Electrical — their service is second to none. Tried other electrical firms, all failed to give service or even turn up. True professional business. I will use this business again very soon. Ask for Blair, he is number one tradie.",
  },
  {
    name: "Shannon Geddes",
    initials: "SG",
    rating: 5,
    timeAgo: "6 months ago",
    text: "The team at Blair Data and Electrical were amazing. I rang to see if they could wire in my new oven. It was mid afternoon when I called — when no one else could come, they did. Same day service. Very friendly and professional. Would 100% recommend them. I will be using them again when I need work done.",
  },
  {
    name: "Mark Wilson",
    initials: "MW",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Very professional company, clear and accurate communication throughout. Completed the job promptly and as quoted. Very happy with the end product. Thank you guys.",
  },
  {
    name: "Peter Rackauskas",
    initials: "PR",
    rating: 5,
    timeAgo: "9 months ago",
    text: "Ryan and his team installed our ducted aircon system. The whole installation and decommissioning of the stand-alone split systems was done extremely professionally and we are absolutely so happy with the final outcome. Ryan was very engaging and friendly and clearly provided us with the info we needed to make the right decisions. We without any doubt recommend Ryan and Blair Data and Electrical for your ducted aircon design, advice and install.",
  },
  {
    name: "Michael S",
    initials: "MS",
    rating: 5,
    timeAgo: "2 months ago",
    text: "They did a great job with installing a new aircon and adapting to what I needed and wanted. Would definitely recommend. Update: Had a small issue with a supplied aircon unit fitting. They responded straight away and came out and fixed it the same day. Great workmanship and attitude. Outstanding support which is another 5 stars. Thankyou very much",
  },
];

const avatarColors = [
  "bg-brand-blue",
  "bg-accent",
  "bg-brand-blue",
  "bg-accent",
  "bg-brand-blue",
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-light-bg py-20 lg:py-28">
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
                Google Reviews
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-3 flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
              <span className="text-sm font-bold text-text-main">5.0</span>
              <span className="text-sm text-text-muted">
                · {reviews.length} reviews on Google
              </span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/Blair+Data+Electrical+Brisbane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border-2 border-primary/15 px-5 py-2.5 text-sm font-bold text-primary hover:border-brand-blue/40 hover:text-brand-blue transition-all"
          >
            See all on Google
            <ExternalLink size={14} />
          </a>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-xl bg-white p-6 shadow-sm ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[i]}`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main">
                      {review.name}
                    </p>
                    <p className="text-xs text-text-muted">{review.timeAgo}</p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  aria-label="Google"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>

              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
