"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const desc = subtitle ?? description;
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <span className="w-8 h-px bg-logo-gradient" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-rainbow font-bold">
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-logo-gradient" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="heading-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-rainbow">{highlight}</span>
          </>
        )}
      </motion.h2>

      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-base sm:text-lg text-fg-tertiary leading-relaxed"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
