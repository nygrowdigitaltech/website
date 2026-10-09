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
              <span >
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            <Reveal className="lg:col-span-3 h-full">
              <div className="rounded-3xl p-8 sm:p-10 border border-border bg-bg-primary shadow-soft">
                <h2 className="text-2xl font-medium text-blue-600 mb-2">
                  Start a conversation
                </h2>
                <p className="text-sm text-fg-tertiary mb-8">
                  Fill out the form and we'll reach out within 24 hours.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <div className="lg:col-span-2 h-full">
              <Reveal delay={0.1}>
                <div className="rounded-2xl p-6 border border-border bg-bg-primary shadow-soft">
                  <h3 className="text-base font-medium text-blue-600 mb-4">
                    Corporate Office
                  </h3>
                  <p className="text-sm text-fg-secondary mb-4">
                    {CONTACT.info.address}
                  </p>

                  <h3 className="text-base font-medium text-blue-600 mb-2">
                    Our Branches
                  </h3>
                  <ul className="space-y-1 text-sm text-fg-secondary mb-6">
                    {BRAND.locations.map((branch) => (
                      <li key={branch} className="flex items-center gap-2">
                        <img src="/contact-icon/location.svg" alt="Location" className="w-4 h-4" />
                        {branch}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-base font-medium text-blue-600 mb-4">
                    Contact Info
                  </h3>
                  <ul className="space-y-2 text-sm text-fg-secondary">
                    <li className="flex items-center gap-2">
                      <img src={CONTACT.info.icon} alt="Email" className="w-5 h-5" />
                      <a href={`mailto:${CONTACT.info.email}`} className="hover:text-fg-primary">
                        {CONTACT.info.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src={CONTACT.info.phoneIcon} alt="Phone" className="w-5 h-5" />
                      <a href={`tel:${CONTACT.info.phone.replace(/\s+/g, "")}`} className="hover:text-fg-primary">
                        {CONTACT.info.phone}
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-base font-medium text-blue-600 mb-4 mt-6">
                    Stay Connected
                  </h3>
                  <div className="flex gap-4">
                    {CONTACT.social.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-90 transition-opacity duration-200"
                      >
                        <img src={social.icon} alt={social.label} className="w-5 h-5" />
                        {/* {social.label} */}
                      </a>
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
