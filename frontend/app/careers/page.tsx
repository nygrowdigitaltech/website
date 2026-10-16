import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Nygrow Digital team — explore open positions and build impactful technology with us.",
};

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" />
        <div className="container-px mx-auto max-w-6xl relative text-center">
          <Reveal>
            <span className="chip mb-6">
              <span className="chip-dot" />
              {BRAND.locations.join(" · ").toUpperCase()}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Careers
              <br />
              <span>Build What Matters.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-fg-tertiary max-w-xl mx-auto leading-relaxed">
              We're always looking for curious engineers, designers, and problem-solvers.
              Open roles will be posted here soon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEMPORARY PLACEHOLDER */}
      <section className="relative section-spacing">
        <div className="container-px mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-3xl p-10 sm:p-14 border border-border bg-bg-primary shadow-soft text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-300 dark:border-brand-700 mb-6">
                <Briefcase className="w-7 h-7 text-brand-600 dark:text-brand-400" strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-medium text-fg-primary mb-3">
                Careers page coming soon
              </h2>
              <p className="text-sm text-fg-secondary max-w-md mx-auto mb-8">
                This is a temporary placeholder page. Our careers section with open
                positions, culture details, and application process will be published shortly.
              </p>
              <Link href="/contact" className="btn-primary group inline-flex">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}