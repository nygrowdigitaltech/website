"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const POINTS = [
  "Complete in-house expertise from concept to deployment",
  "Transparent communication, client-first mindset",
  "Future-ready architecture built for growth",
  "99% client retention through trust and results",
];

export function AboutSnippet() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-secondary">
      <div className="container-px mx-auto max-w-[88rem] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="chip mb-6">
            <span className="chip-dot" />
            WHO WE ARE
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Your Trusted
            <br />
            <span className="text-rainbow">IT Services Partner.</span>
          </h2>
          <p className="mt-6 text-fg-tertiary leading-relaxed">
            We're a team of problem-solvers, tech enthusiasts, and digital thinkers passionate about making technology feel easy, effective, and impactful. Clients know us not just for our delivery, but for how we genuinely care about their success. We've been recognized among the best IT services companies, but what matters more to us is being the best partner for your growth.
          </p>

          <Link href="/about" className="btn-primary mt-9 group">
            Learn More About Us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* RIGHT — why-us checklist card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-3xl border border-border bg-bg-primary shadow-soft p-8 sm:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
              Why teams choose us
            </div>
            <div className="mt-7 space-y-5">
              {POINTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-fg-secondary leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
