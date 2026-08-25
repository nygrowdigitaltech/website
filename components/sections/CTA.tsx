"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border bg-bg-primary p-10 sm:p-16 text-center shadow-soft-xl"
        >
          {/* ambient glow */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(22,163,74,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative">
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to build your
              <br />
              <span className="text-rainbow">digital future?</span>
            </h2>
            <p className="mt-5 text-fg-tertiary max-w-xl mx-auto">
              Book a free consultation and let's discuss how Nygrow can accelerate your business growth.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary group">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/#services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
