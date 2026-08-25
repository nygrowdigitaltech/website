"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-px mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Core Clients Say?"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-border bg-bg-primary shadow-soft"
            >
              <Quote className="w-7 h-7 text-brand-500 mb-4" strokeWidth={1.5} />
              <blockquote className="text-fg-secondary leading-relaxed text-[15px]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-500/15 text-brand-500 grid place-items-center text-sm font-bold">
                  {t.role.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-fg-primary">{t.role}</div>
                  <div className="text-xs text-fg-muted mt-0.5">{t.company}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
