import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  GraduationCap,
  ShoppingBag,
  Factory,
  Truck,
  HeartPulse,
  Plane,
  Film,
  Building2,
  Fuel,
  Zap,
  TrendingUp,
  Sparkles,
  FileText,
  Eye,
  MessageSquare,
  Rocket,
  Settings,
  Boxes,
  Cloud,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry-specific solutions and signature offerings from Nygrow Digital — web, mobile, AI/ML, cloud, marketing, and ERP solutions for businesses across India and worldwide.",
};

const INDUSTRIES = [
  { name: "Fintech & Insurance", icon: Banknote, color: "#16A34A", description: "Secure platforms for banking, lending, payments, and insurance — built with enterprise-grade encryption and compliance." },
  { name: "Healthcare", icon: HeartPulse, color: "#EF4444", description: "Secure, user-friendly medical and telehealth platforms, hospital systems, and patient engagement apps." },
  { name: "Retail & E-commerce", icon: ShoppingBag, color: "#F97316", description: "Conversion-driven online stores, mobile shopping apps, and omnichannel commerce experiences." },
  { name: "Education", icon: GraduationCap, color: "#3B82F6", description: "LMS platforms, e-learning apps, and admin systems for schools, colleges, and EdTech." },
  { name: "Logistics & Distribution", icon: Truck, color: "#A78BFA", description: "Inventory, tracking, route optimization, and supply-chain automation across the delivery lifecycle." },
  { name: "Oil, Gas & Mining", icon: Fuel, color: "#475569", description: "Field-ops tools, compliance platforms, and predictive maintenance powered by AI." },
  { name: "Energy & Utilities", icon: Zap, color: "#FBBF24", description: "Grid analytics, customer portals, and smart-meter integrations for modern utilities." },
  { name: "Travel & Hospitality", icon: Plane, color: "#06B6D4", description: "Booking engines, loyalty apps, itinerary management, and revenue-optimization platforms." },
  { name: "Media & Entertainment", icon: Film, color: "#EC4899", description: "Streaming platforms, interactive content tools, and creator-economy applications." },
  { name: "Public Sector", icon: Building2, color: "#64748B", description: "E-governance, citizen portals, and secure data platforms for government services." },
  { name: "Manufacturing", icon: Factory, color: "#0EA5E9", description: "ERP, IIoT dashboards, and quality systems for modern factory operations." },
];

// Nygrow's signature solutions — pulled directly from doc content (AI/ML section)
const SIGNATURE_SOLUTIONS = [
  {
    title: "Predictive Demand & Forecasting",
    icon: TrendingUp,
    color: "#16A34A",
    description: "AI-powered models that forecast demand, sales, and inventory needs — helping you plan smarter and reduce overhead.",
    fromService: "AI / ML Solutions",
    serviceSlug: "ai-ml",
  },
  {
    title: "Recommendation & Personalization Engines",
    icon: Sparkles,
    color: "#A78BFA",
    description: "Custom recommendation engines that personalize user experiences across e-commerce, content, and SaaS platforms.",
    fromService: "AI / ML Solutions",
    serviceSlug: "ai-ml",
  },
  {
    title: "Intelligent Document Processing & RPA",
    icon: FileText,
    color: "#F97316",
    description: "Automate document workflows, extraction, and back-office tasks with robotic process automation and AI agents.",
    fromService: "AI / ML Solutions",
    serviceSlug: "ai-ml",
  },
  {
    title: "Computer Vision for QC & Analytics",
    icon: Eye,
    color: "#EF4444",
    description: "Image recognition, object detection, and quality inspection systems for manufacturing, retail, and healthcare.",
    fromService: "AI / ML Solutions",
    serviceSlug: "ai-ml",
  },
  {
    title: "NLP Chatbots & Knowledge Assistants",
    icon: MessageSquare,
    color: "#3B82F6",
    description: "Sentiment analysis, voice assistants, intelligent search, and chatbots that scale customer support 24/7.",
    fromService: "AI / ML Solutions",
    serviceSlug: "ai-ml",
  },
  {
    title: "GenAI Copilots for Ops, Sales & Support",
    icon: Rocket,
    color: "#EC4899",
    description: "Generative AI copilots that augment your team — drafting content, automating responses, and accelerating decisions.",
    fromService: "AI / ML Solutions",
    serviceSlug: "ai-ml",
  },
  {
    title: "Zoho Workflow Automation",
    icon: Settings,
    color: "#DC2626",
    description: "Authorized Zoho partner — CRM implementation, business process automation, and seamless app integrations.",
    fromService: "Zoho Setup",
    serviceSlug: "zoho",
  },
  {
    title: "Odoo ERP Implementation",
    icon: Boxes,
    color: "#7C3AED",
    description: "Certified Odoo partner — unify finance, inventory, HR, sales, and manufacturing into one platform.",
    fromService: "Odoo Partner",
    serviceSlug: "odoo",
  },
  {
    title: "Cloud Migration & Hosting",
    icon: Cloud,
    color: "#06B6D4",
    description: "AWS, Azure, GCP setup with zero-downtime migrations, 24/7 monitoring, and 99.99% uptime guarantee.",
    fromService: "Cloud & Server",
    serviceSlug: "cloud-server",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
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
              SOLUTIONS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Built for your
              <br />
              <span className="text-rainbow">industry. Built for outcomes.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-fg-tertiary max-w-2xl mx-auto leading-relaxed">
              From digital transformation to AI automation — Nygrow delivers signature solutions tailored to your industry. Trusted by customers across India and worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="#industries" className="btn-primary group">
                Explore by Industry
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="#signature" className="btn-outline">
                Signature Solutions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative pb-4">
        <div className="container-px mx-auto max-w-7xl grid sm:grid-cols-3 gap-4">
          {[
            { icon: Sparkles, label: "Collaborative delivery", desc: "We co-create with your team from discovery to launch." },
            { icon: MessageSquare, label: "Dedicated support", desc: "Responsive, always-on support that keeps you moving." },
            { icon: Rocket, label: "Built for scale", desc: "Future-ready architecture engineered to grow with you." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-bg-secondary shadow-soft p-6"
              >
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-brand-500/12 text-brand-500 mb-4">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="block text-base font-semibold text-fg-primary">
                  {item.label}
                </span>
                <p className="mt-2 text-sm text-fg-tertiary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BY INDUSTRY */}
      <section id="industries" className="relative py-24 lg:py-32">
        <div className="container-px mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="By Industry"
            title="Solutions for every sector."
            subtitle="Deep domain expertise across a wide range of industries — delivered worldwide."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.name} delay={i * 0.04}>
                  <Link
                    href="/contact"
                    className="group block p-7 rounded-2xl border border-border bg-bg-primary shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all h-full"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{ background: `${ind.color}1A`, color: ind.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-fg-tertiary leading-relaxed">
                      {ind.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-fg-secondary group-hover:text-fg-primary transition-colors">
                      Discuss your project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNATURE SOLUTIONS — from doc */}
      <section id="signature" className="relative py-24 lg:py-32 bg-bg-secondary border-y border-border">
        <div className="container-px mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Signature Solutions"
            title="What we're known for."
            subtitle="Battle-tested solutions powering operations, intelligence, and growth for businesses around the world."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIGNATURE_SOLUTIONS.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <Reveal key={sol.title} delay={i * 0.05}>
                  <Link
                    href={`/services/${sol.serviceSlug}`}
                    className="group block p-7 rounded-2xl border border-border bg-bg-primary shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all h-full"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${sol.color}1A`, color: sol.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-fg-primary mb-2">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-fg-tertiary leading-relaxed mb-5">
                      {sol.description}
                    </p>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                        style={{ color: sol.color }}
                      >
                        From: {sol.fromService}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                        style={{ color: sol.color }}
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALL SERVICES CATALOG */}
      <section className="relative py-24 lg:py-32">
        <div className="container-px mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Full Service Catalog"
            title="Everything Nygrow delivers."
            subtitle="Browse our complete service offerings — each one a deep specialty backed by certified expertise."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 0.04}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block p-7 rounded-2xl border border-border bg-bg-primary shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all h-full"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${s.color}1A`, color: s.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-fg-primary mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-fg-tertiary leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-fg-primary">
                      Explore service
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                        style={{ color: s.color }}
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENTERPRISE / STARTUP CALLOUT */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary border-y border-border">
        <div className="container-px mx-auto max-w-[88rem]">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-10 rounded-3xl border border-border bg-bg-primary shadow-soft h-full">
                <span className="chip mb-5">
                  <span className="chip-dot" />
                  FOR ENTERPRISE
                </span>
                <h3 className="heading-display text-2xl sm:text-3xl font-bold mb-4">
                  Scale safely.
                </h3>
                <p className="text-fg-tertiary leading-relaxed mb-6">
                  Strategic engagements for enterprises — multi-region cloud, custom platforms, AI/ML at scale, and dedicated delivery teams with SLA guarantees.
                </p>
                <Link href="/contact" className="btn-primary group">
                  Talk to Sales
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-10 rounded-3xl border border-border bg-bg-primary shadow-soft h-full">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-5"
                  style={{
                    background: "rgba(249, 115, 22, 0.08)",
                    color: "#F97316",
                    border: "1px solid rgba(249, 115, 22, 0.2)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#F97316" }}
                  />
                  FOR STARTUPS
                </span>
                <h3 className="heading-display text-2xl sm:text-3xl font-bold mb-4">
                  Ship faster.
                </h3>
                <p className="text-fg-tertiary leading-relaxed mb-6">
                  MVP builds, growth-stage scaling, and full-stack engineering pods — flexible engagements designed for startups moving fast.
                </p>
                <Link href="/contact" className="btn-outline">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
