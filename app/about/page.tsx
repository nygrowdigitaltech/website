import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Compass, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import {
  BRAND,
  CORE_VALUES,
  NYGROW_DIFFERENCE,
  INDUSTRIES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nygrow Digital — a team of problem-solvers, tech enthusiasts, and digital thinkers building impactful IT solutions across India.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Ambient gradient blobs (no images) */}
        <div
          className="absolute -top-32 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(22,163,74,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="container-px mx-auto max-w-6xl relative text-center">
          <Reveal>
            <span className="chip mb-6">
              <span className="chip-dot" />
              ABOUT NYGROW
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Reimagining IT services
              <br />
              <span className="text-rainbow">with purpose.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-fg-tertiary max-w-2xl mx-auto leading-relaxed">
              At Nygrow, we believe technology should do more than just support; it should accelerate. Founded with a vision to empower brands through design, innovation, and technology, we help businesses transform their digital presence into a true growth engine.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-base text-fg-tertiary max-w-2xl mx-auto leading-relaxed">
              Headquartered in {BRAND.hq}, with clients across {BRAND.locations.filter(l => l !== BRAND.hq).join(", ")} and worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="relative py-24 lg:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-8 sm:p-10 rounded-2xl border border-border bg-bg-primary shadow-soft h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-fg-primary mb-3">Our Vision</h3>
                <p className="text-fg-tertiary leading-relaxed">{BRAND.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 sm:p-10 rounded-2xl border border-border bg-bg-primary shadow-soft h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(249,115,22,0.12)", color: "#F97316" }}
                >
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-fg-primary mb-3">Our Mission</h3>
                <p className="text-fg-tertiary leading-relaxed">{BRAND.mission}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE NYGROW DIFFERENCE */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary">
        <div className="container-px mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="The Nygrow Difference"
            title="Why teams choose us."
            subtitle="What sets Nygrow apart isn't just our delivery — it's how genuinely we care about your success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {NYGROW_DIFFERENCE.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-border bg-bg-primary shadow-soft h-full">
                  <div className="text-rainbow text-3xl font-extrabold mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm text-fg-secondary leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-24 lg:py-32">
        <div className="container-px mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Core Values"
            title="What we stand for."
          />
          <div className="grid md:grid-cols-2 gap-3">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={value} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-bg-primary">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-fg-secondary">{value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* INDUSTRIES */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Digital innovation across sectors."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 rounded-full text-sm border border-border bg-bg-primary text-fg-secondary"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="relative py-24 lg:py-32">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal>
            <div className="relative rounded-3xl border border-border bg-bg-primary p-10 sm:p-14 overflow-hidden shadow-soft-lg">
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
              <div className="relative">
                <div className="text-rainbow text-6xl font-display leading-none mb-4">"</div>
                <p className="heading-display text-2xl sm:text-3xl font-bold leading-snug tracking-tight mb-8 max-w-3xl">
                  {BRAND.promise}
                </p>
                <Link href="/contact" className="btn-primary group">
                  Work with us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
