"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

interface Review {
  text: string;
  author: string;
  location: string;
  rating: number;
}

const staticReviews: Review[] = [
  {
    text: "Ryan and his team are professional, punctual, and competitively priced. Highly recommend BDE for any electrical work.",
    author: "James T.",
    location: "Brisbane",
    rating: 5,
  },
  {
    text: "Used BDE for a full office fit-out. Communication was excellent and the work was done on time and on budget.",
    author: "Sarah M.",
    location: "Gold Coast",
    rating: 5,
  },
  {
    text: "Fast response for an emergency callout. Fixed the issue quickly and explained everything clearly. Will use again.",
    author: "Mark R.",
    location: "Gold Coast",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className="fill-accent text-accent"
        />
      ))}
    </div>
  );
}

interface GoogleReviewsProps {
  placeId?: string;
  staticFallback?: Review[];
}

export default function GoogleReviews({
  placeId: _placeId = "PLACE_ID_HERE",
  staticFallback = staticReviews,
}: GoogleReviewsProps) {
  const reviews = staticFallback;

  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Don&apos;t just take our word for it — hear from the homes and
            businesses we&apos;ve helped.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl bg-light-bg p-6 shadow-sm"
            >
              <div className="absolute right-4 top-4 text-xs font-semibold text-text-muted/50">
                Google
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-text-main">
                  {review.author}
                </p>
                <p className="text-xs text-text-muted">{review.location}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/Blair+Data+Electrical+Brisbane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            See All Reviews on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
