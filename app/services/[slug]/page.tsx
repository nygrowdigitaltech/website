import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { SERVICES } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
          style={{
            background: `radial-gradient(circle, ${service.color}25 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        <div className="container-px mx-auto max-w-6xl relative text-center flex flex-col items-center">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-fg-tertiary hover:text-fg-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              All services
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
              style={{ background: `${service.color}1A`, color: service.color }}
            >
              <Icon className="w-7 h-7" />
            </div>
          </Reveal>

          {service.tagline && (
            <Reveal delay={0.15}>
              <p className="text-sm uppercase tracking-[0.2em] text-fg-muted font-semibold mb-4">
                {service.tagline}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-7">
              {service.title}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base sm:text-lg text-fg-tertiary max-w-2xl mx-auto leading-relaxed">
              {service.longDescription}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary group">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#offerings" className="btn-outline">
                What we offer
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE NYGROW (features) */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary border-y border-border">
        <div className="container-px mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Why Choose Nygrow"
            title="The Nygrow advantage."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-6 rounded-2xl border border-border bg-bg-primary shadow-soft h-full">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${service.color}1A`, color: service.color }}
                  >
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <p className="text-sm text-fg-secondary leading-relaxed pt-1">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-SERVICES / OFFERINGS */}
      {service.subServices && service.subServices.length > 0 && (
        <section id="offerings" className="relative py-24 lg:py-32">
          <div className="container-px mx-auto max-w-[88rem]">
            <SectionHeading
              eyebrow="What We Offer"
              title="Our comprehensive solutions."
              subtitle="A full-spectrum service tailored to your goals — from strategy to execution."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.subServices.map((sub, i) => (
                <Reveal key={sub.title} delay={i * 0.05}>
                  <div className="p-7 rounded-2xl border border-border bg-bg-primary shadow-soft hover:shadow-soft-lg transition-all h-full">
                    <Sparkles
                      className="w-5 h-5 mb-4"
                      style={{ color: service.color }}
                    />
                    <h3 className="text-base font-semibold text-fg-primary mb-2">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-fg-tertiary leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TECHNOLOGIES */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="relative py-24 lg:py-32 bg-bg-secondary border-y border-border">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Technology Stack"
              title="Tools & frameworks we use."
            />
            <div className="flex flex-wrap gap-3 justify-center">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-full text-sm border border-border bg-bg-primary text-fg-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INDUSTRIES */}
      {service.industries && service.industries.length > 0 && (
        <section className="relative py-24 lg:py-32">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Across every sector."
            />
            <div className="flex flex-wrap gap-3 justify-center">
              {service.industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-full text-sm border border-border bg-bg-primary text-fg-secondary"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary border-y border-border">
        <div className="container-px mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Continue Exploring"
            title="More from Nygrow."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {otherServices.map((s, i) => {
              const OIcon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block p-7 rounded-2xl border border-border bg-bg-primary shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all group h-full"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${s.color}1A`, color: s.color }}
                    >
                      <OIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-fg-primary mb-2">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-fg-tertiary leading-relaxed mb-5 line-clamp-2">
                      {s.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-fg-primary">
                      Explore
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

      <CTA />
    </>
  );
}
