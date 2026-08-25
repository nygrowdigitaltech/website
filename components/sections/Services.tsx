"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container-px mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="What We Do"
          title="Built for outcomes, not output."
          subtitle="High-performance, conversion-focused digital services tailored to your business needs."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full p-7 rounded-2xl border border-border bg-bg-primary hover:bg-bg-secondary transition-all overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5"
                >
                  {/* Hover accent gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${service.color}10 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{ background: `${service.color}1A`, color: service.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-fg-primary mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-fg-tertiary leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-fg-secondary group-hover:text-fg-primary transition-colors">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
