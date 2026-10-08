"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-bg-secondary">
      <div className="container-px mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="The Nygrow Process"
          title="From strategy to scale."
          subtitle="A structured yet flexible framework that delivers measurable outcomes — across every service vertical."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-7 rounded-2xl border border-border bg-bg-primary shadow-soft"
            >
              <div className="text-rainbow text-5xl font-extrabold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-fg-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-fg-tertiary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
