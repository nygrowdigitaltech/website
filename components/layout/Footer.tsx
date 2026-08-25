import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { BRAND, CONTACT, SERVICES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-secondary border-t border-border overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-logo-gradient opacity-50" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full blur-3xl bg-logo-purple/10" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full blur-3xl bg-logo-green/10" />
      </div>

      <div className="relative container-px mx-auto max-w-[88rem] py-20">
        {/* Top — logo + social */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <Logo variant="stack" />
            <p className="mt-5 text-sm text-fg-tertiary leading-relaxed max-w-md">
              {BRAND.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href={CONTACT.social.instagram} label="Instagram">
              <Instagram className="w-4 h-4" />
            </SocialLink>
            <SocialLink href={CONTACT.social.linkedin} label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </SocialLink>
            <SocialLink href={CONTACT.social.twitter} label="Twitter">
              <Twitter className="w-4 h-4" />
            </SocialLink>
          </div>
        </div>

        {/* Main grid — 3 contact columns + quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Information */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-fg-muted mb-5">
              Information
            </h4>
            <div className="space-y-4">
              <ContactRow
                icon={<MapPin className="w-4 h-4" />}
                label={CONTACT.info.location}
              />
              <ContactRow
                icon={<Mail className="w-4 h-4" />}
                label={CONTACT.info.email}
                href={`mailto:${CONTACT.info.email}`}
              />
              <ContactRow
                icon={<Phone className="w-4 h-4" />}
                label={CONTACT.info.phone}
                href={`tel:${CONTACT.info.phone.replace(/\s/g, "")}`}
              />
            </div>
          </div>

          {/* Sales */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-fg-muted mb-5">
              Sales
            </h4>
            <div className="space-y-4">
              <ContactRow
                icon={<Mail className="w-4 h-4" />}
                label={CONTACT.sales.email}
                href={`mailto:${CONTACT.sales.email}`}
              />
              <ContactRow
                icon={<Phone className="w-4 h-4" />}
                label={CONTACT.sales.phone}
                href={`tel:${CONTACT.sales.phone.replace(/\s/g, "")}`}
              />
            </div>
          </div>

          {/* Career */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-fg-muted mb-5">
              Career
            </h4>
            <div className="space-y-4">
              <ContactRow
                icon={<Mail className="w-4 h-4" />}
                label={CONTACT.careers.email}
                href={`mailto:${CONTACT.careers.email}`}
              />
              <ContactRow
                icon={<Phone className="w-4 h-4" />}
                label={CONTACT.careers.phone}
                href={`tel:${CONTACT.careers.phone.replace(/\s/g, "")}`}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-fg-muted mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-fg-secondary hover:text-fg-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-fg-secondary hover:text-fg-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-fg-secondary hover:text-fg-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-fg-secondary hover:text-fg-primary transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stay in the Loop block */}
        <div className="rounded-2xl border border-border bg-bg-primary p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-md">
              <h4 className="text-base font-semibold text-fg-primary mb-1.5">
                Stay in the Loop
              </h4>
              <p className="text-sm text-fg-tertiary leading-relaxed">
                Subscribe to receive biweekly tips on creative automation and digital advertising.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-primary group shrink-0"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="h-px bg-logo-gradient opacity-30 mb-8" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-fg-muted">
            © {year} {BRAND.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-fg-muted hover:text-fg-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-fg-muted hover:text-fg-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-8 opacity-[0.03]">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[120px] sm:text-[180px] font-black tracking-tighter text-fg-primary mx-8 leading-none"
            >
              NYGROW
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 group">
      <div className="w-8 h-8 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-fg-tertiary shrink-0 group-hover:border-fg-muted transition-colors">
        {icon}
      </div>
      <span className="text-sm text-fg-secondary pt-1.5 group-hover:text-fg-primary transition-colors break-all">
        {label}
      </span>
    </div>
  );
  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-bg-tertiary border border-border flex items-center justify-center text-fg-secondary hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
    >
      {children}
    </a>
  );
}
