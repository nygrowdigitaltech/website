"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChoose() {
  const stats = [
    { title: "Clients Served", value: "701+", info: "(2020–2025, CRM Data)" },
    { title: "Projects Delivered", value: "950+", info: "(2019–2025, Internal Records)" },
    { title: "Global Clients", value: "150+", info: "(36+ Countries, 2025)" },
    { title: "Lower CAC", value: "42%", info: "(Avg. 2023–2025, Marketing Analytics)\n96% Client Satisfaction (Survey 2024)" },
  ];

  return (
    <section className="py-20 bg-bg-secondary text-fg-primary">
      <div className="container mx-auto max-w-[88rem] text-center">
        <SectionHeading
          eyebrow="Why Choose Nygrow"
          title="We don’t just build projects; we build growth."
        />

        {/* Stats Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-bg-primary rounded-xl border border-border shadow transition-transform hover:shadow-lg hover:bg-bg-tertiary text-center"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wide text-fg-muted mb-2">
                {stat.title}
              </h4>
              <div className="text-2xl font-extrabold text-fg-primary mb-2">{stat.value}</div>
              <p className="text-sm text-fg-secondary whitespace-pre-line">{stat.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
