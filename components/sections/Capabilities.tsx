"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Headset,
  Lightbulb,
  Handshake,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ITEMS = [
  {
    icon: Users,
    kicker: "Culture",
    title: "Collaborative teams that ship",
    desc: "Cross-functional pods that co-create with you and move from idea to release together.",
  },
  {
    icon: Award,
    kicker: "People",
    title: "Expert leadership",
    desc: "Seasoned engineers and strategists who have delivered across industries and scale.",
  },
  {
    icon: Headset,
    kicker: "Service",
    title: "24/7 client support",
    desc: "Responsive, always-on support so your operations never skip a beat.",
  },
  {
    icon: Lightbulb,
    kicker: "Process",
    title: "Strategy sessions",
    desc: "Discovery-led planning that aligns technology to real business outcomes.",
  },
  {
    icon: Handshake,
    kicker: "Partnership",
    title: "Built together",
    desc: "Transparent, client-first relationships founded on trust and shared goals.",
  },
  {
    icon: Wrench,
    kicker: "Craft",
    title: "Hands-on delivery",
    desc: "Rigorous testing and fast iteration to ship purpose-built, future-ready solutions.",
  },
];

export function Capabilities() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-1/4 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="container-px mx-auto max-w-[88rem] relative">
        <SectionHeading
          eyebrow="Inside Nygrow"
          title="People, process, and partnership."
          subtitle="A closer look at how we work — and the team that makes it happen."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-border bg-bg-secondary shadow-soft p-7 hover:border-brand-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl grid place-items-center bg-brand-500/12 text-brand-500">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <span className="mt-6 block text-[10px] font-semibold uppercase tracking-[0.24em] text-fg-muted">
                  {item.kicker}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold text-fg-primary leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-fg-tertiary leading-relaxed">
                  {item.desc}
                </p>
                <span className="mt-5 block h-[2px] w-8 bg-brand-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
