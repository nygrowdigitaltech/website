import type { Metadata } from "next";
import { Mail, Phone, MapPin, Briefcase, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nygrow Digital. Sales, support, careers — we're here. Coimbatore, Chennai, Bangalore.",
};

const CONTACT_CHANNELS = [
  {
    icon: Briefcase,
    title: "Sales enquiries",
    description: "Pricing, scoping, or starting something new.",
    email: CONTACT.sales.email,
    phone: CONTACT.sales.phone,
    color: "#34D399",
  },
  {
    icon: Mail,
    title: "General questions",
    description: "Partnerships, press, or anything else.",
    email: CONTACT.info.email,
    phone: CONTACT.info.phone,
    color: "#FBBF24",
  },
  {
    icon: Users,
    title: "Careers",
    description: "Join a team that ships meaningful work.",
    email: CONTACT.careers.email,
    phone: CONTACT.careers.phone,
    color: "#A78BFA",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-0" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" />

        <div className="container-px mx-auto max-w-6xl relative text-center">
          <Reveal>
            <span className="chip mb-6"><span className="chip-dot" />CONTACT</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              Let's build something <br />
              <span className="text-rainbow">
                worth talking about.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-fg-tertiary max-w-xl mx-auto leading-relaxed">
              Tell us about your project, your timeline, or your wildest idea.
              We typically respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-20 overflow-hidden">
        <div className="container-px mx-auto max-w-[88rem]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="rounded-3xl p-8 sm:p-10 border border-border bg-bg-primary shadow-soft">
                <h2 className="text-2xl font-medium text-fg-primary mb-2">
                  Start a conversation
                </h2>
                <p className="text-sm text-fg-tertiary mb-8">
                  Fill out the form and we'll reach out within 24 hours.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <div className="lg:col-span-2 space-y-5">
              {CONTACT_CHANNELS.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <Reveal key={channel.title} delay={idx * 0.1}>
                    <div className="rounded-2xl p-6 border border-border bg-bg-primary shadow-soft hover:shadow-soft-lg transition-all">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          background: `${channel.color}20`,
                          border: `1px solid ${channel.color}40`,
                        }}
                      >
                        <Icon
                          className="w-[18px] h-[18px]"
                          style={{ color: channel.color }}
                        />
                      </div>
                      <h3 className="text-base font-medium text-fg-primary mb-1">
                        {channel.title}
                      </h3>
                      <p className="text-xs text-fg-muted mb-4">
                        {channel.description}
                      </p>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${channel.email}`}
                          className="flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-fg-muted" />
                          {channel.email}
                        </a>
                        <a
                          href={`tel:${channel.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-fg-muted" />
                          {channel.phone}
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              <Reveal delay={0.4}>
                <div className="rounded-2xl p-6 border border-border bg-bg-primary shadow-soft">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 "
                  >
                    <MapPin className="w-[18px] h-[18px] text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-base font-medium text-fg-primary mb-2">
                    We're based in
                  </h3>
                  <div className="space-y-1">
                    {BRAND.locations.map((loc) => (
                      <div key={loc} className="text-sm text-fg-secondary">
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
