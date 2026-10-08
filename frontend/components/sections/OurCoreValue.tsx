"use client";

import { motion } from "framer-motion";
import { Lightbulb, Handshake, Shield, Rocket, Settings, Users, Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CORE_VALUES = [
  { title: "We solve real problems, not just deliver technology", icon: Rocket, color: "text-red-500 bg-red-500/15" },
  { title: "We design with users in mind, always", icon: Lightbulb, color: "text-yellow-500 bg-yellow-500/15" },
  { title: "We build systems that grow with your business", icon: Settings, color: "text-blue-500 bg-blue-500/15" },
  { title: "We collaborate openly and transparently", icon: Handshake, color: "text-green-500 bg-green-500/15" },
  { title: "We stay curious and practical", icon: Compass, color: "text-purple-500 bg-purple-500/15" },
  { title: "We optimize beyond launch day", icon: Users, color: "text-pink-500 bg-pink-500/15" },
  { title: "We keep ethics and inclusivity at the core", icon: Shield, color: "text-teal-500 bg-teal-500/15" },
];

export function CoreValues() {
  return (
    <section className="py-24 bg-bg-secondary text-fg-primary">
      <div className="container mx-auto text-center">
        <SectionHeading
          eyebrow="Our Core Values"
          title="Principles That Guide Us"
          subtitle="These values shape how we work, build, and grow with our clients."
        />

        {/* Grid with 4 on top, 3 below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
          {CORE_VALUES.slice(0, 4).map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center max-w-[200px]"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md ${val.color}`}>
                <val.icon className="w-10 h-10" />
              </div>

              <p className="font-semibold text-sm text-fg-primary">{val.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {CORE_VALUES.slice(4).map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center max-w-[200px]"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md ${val.color}`}>
                <val.icon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-sm text-fg-primary">{val.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
