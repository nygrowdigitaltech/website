"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-28 pb-16">
      {/* Ambient blobs (pure CSS gradients — no images) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-32 w-[520px] h-[520px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(22,163,74,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[-10%] w-[560px] h-[560px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-1/3 w-[480px] h-[480px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--fg-primary) 1px, transparent 1px), linear-gradient(90deg, var(--fg-primary) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative container-px mx-auto max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chip mb-7"
        >
          <span className="chip-dot" />
          {BRAND.locations.join(" · ").toUpperCase()}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
        >
          <span className="block">Crafting Tomorrow&rsquo;s</span>
          <span className="block">
            <span className="text-rainbow animate-gradient">Technology</span>, Today.
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-lg sm:text-xl lg:text-2xl font-semibold text-fg-secondary tracking-tight"
        >
          Reimagining IT Services with Purpose.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 mx-auto max-w-2xl text-sm sm:text-base text-fg-tertiary leading-relaxed"
        >
          Nygrow Digital Pvt Ltd is a leading IT services and technology solution
          provider, helping businesses digitally transform and scale. Trusted by
          enterprises in Chennai, Bangalore, and Coimbatore, we co-create with you,
          test rigorously, iterate fast, and deliver purpose-built results that fuel
          your growth today and tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="/contact" className="btn-primary group">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/#services" className="btn-outline">
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trusted-for chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-fg-muted mr-1">
            Trusted for
          </span>
          {SERVICES.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border text-fg-tertiary hover:text-fg-primary hover:border-fg-tertiary transition-colors"
            >
              {s.shortTitle}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
