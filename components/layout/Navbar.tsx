"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SERVICES, INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MenuKey = "services" | "solutions" | "resources" | "partners" | "company" | null;

const RESOURCES = [
  { title: "Blog", description: "Insights, guides, and tech deep-dives", href: "/blog" },
  { title: "Case Studies", description: "Real client success stories", href: "/case-studies" },
  { title: "Brochure", description: "Download our company profile", href: "/brochure" },
  { title: "FAQ", description: "Common questions, clear answers", href: "/faq" },
];

const PARTNER_LINKS = [
  { title: "Zoho Authorised Partner", description: "CRM setup, customization & automation", href: "/services/zoho", badge: "Authorized" },
  { title: "Odoo Partner", description: "End-to-end Odoo ERP implementation", href: "/services/odoo", badge: "Certified" },
  { title: "Become a Partner", description: "Join our agency partner program", href: "/contact" },
];

const COMPANY_LINKS = [
  { title: "About Us", description: "Our story, vision and mission", href: "/about" },
  { title: "Our Process", description: "How we deliver from idea to launch", href: "/#process" },
  { title: "Careers", description: "Join the Nygrow team", href: "/careers" },
  { title: "Contact", description: "Get in touch with our team", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItem = (key: MenuKey, label: string) => (
    <button
      onMouseEnter={() => setOpenMenu(key)}
      onClick={() => setOpenMenu(openMenu === key ? null : key)}
      className={cn(
        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full",
        openMenu === key
          ? "text-brand-600 dark:text-brand-400"
          : "text-fg-secondary hover:text-fg-primary"
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          "w-3.5 h-3.5 transition-transform duration-200",
          openMenu === key && "rotate-180"
        )}
      />
    </button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseLeave={() => setOpenMenu(null)}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-bg-primary/85 backdrop-blur-xl border-b border-border"
            : "py-4 bg-bg-primary/60 backdrop-blur-sm"
        )}
      >
        <div className="container-px mx-auto max-w-[88rem] flex items-center justify-between">
          <Logo variant="stack" />

          <nav className="hidden lg:flex items-center gap-1">
            {navItem("services", "Services")}
            {navItem("solutions", "Solutions")}
            {navItem("resources", "Resources")}
            {navItem("partners", "Partners")}
            {navItem("company", "Company")}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary text-sm">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-fg-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega-menu panels */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="hidden lg:block absolute top-full left-0 right-0 mt-2 px-4"
            >
              <div className="container-px mx-auto max-w-[88rem]">
                <div className="glass-strong rounded-2xl p-6 shadow-soft-xl">
                  {openMenu === "services" && <ServicesMenu />}
                  {openMenu === "solutions" && <SolutionsMenu />}
                  {openMenu === "resources" && <ResourcesMenu />}
                  {openMenu === "partners" && <PartnersMenu />}
                  {openMenu === "company" && <CompanyMenu />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-bg-primary border-l border-border p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <Logo variant="stack" />
                <button
                  className="p-2 text-fg-primary"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <MobileSection title="Services">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-bg-secondary transition-colors"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${s.color}1A`, color: s.color }}
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </div>
                      <span className="text-sm font-medium text-fg-primary">
                        {s.shortTitle}
                      </span>
                    </Link>
                  );
                })}
              </MobileSection>

              <MobileSection title="Partners">
                {PARTNER_LINKS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-xl hover:bg-bg-secondary transition-colors"
                  >
                    <div className="text-sm font-medium text-fg-primary">{p.title}</div>
                    <div className="text-xs text-fg-muted mt-0.5">{p.description}</div>
                  </Link>
                ))}
              </MobileSection>

              <MobileSection title="Company">
                {COMPANY_LINKS.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-xl hover:bg-bg-secondary transition-colors"
                  >
                    <div className="text-sm font-medium text-fg-primary">{c.title}</div>
                  </Link>
                ))}
              </MobileSection>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full mt-6 text-sm"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="text-[11px] uppercase tracking-[0.2em] text-fg-muted px-3 mb-2">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

/* ───────────────── Mega menu panels ───────────────── */

function ServicesMenu() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {SERVICES.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="flex items-start gap-3 p-4 rounded-xl hover:bg-bg-secondary transition-colors group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
              style={{ background: `${s.color}1A`, color: s.color }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-fg-primary">
                {s.shortTitle}
              </div>
              <div className="text-xs text-fg-tertiary mt-1 line-clamp-2">
                {s.description}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          Solutions
        </h4>
        <Link
          href="/solutions"
          className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
        >
          View all solutions →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h5 className="text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-3 px-3">
            By Industry
          </h5>
          <div className="grid grid-cols-2 gap-1">
            {INDUSTRIES.slice(0, 8).map((ind) => (
              <Link
                key={ind}
                href="/solutions#industries"
                className="px-3 py-2 rounded-lg text-sm text-fg-secondary hover:text-fg-primary hover:bg-bg-secondary transition-colors"
              >
                {ind}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-3 px-3">
            Signature Solutions
          </h5>
          <div className="grid grid-cols-1 gap-1">
            {[
              { title: "Predictive Demand & Forecasting", desc: "AI forecasting for inventory & sales" },
              { title: "GenAI Copilots", desc: "AI agents for ops, sales & support" },
              { title: "Zoho & Odoo ERP", desc: "Authorized partner — full implementation" },
              { title: "Cloud Migration", desc: "Zero-downtime AWS / Azure / GCP" },
            ].map((u) => (
              <Link
                key={u.title}
                href="/solutions#signature"
                className="block px-3 py-2 rounded-lg hover:bg-bg-secondary transition-colors"
              >
                <div className="text-sm font-medium text-fg-primary">{u.title}</div>
                <div className="text-xs text-fg-muted mt-0.5">{u.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {RESOURCES.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className="flex flex-col gap-1 p-4 rounded-xl hover:bg-bg-secondary transition-colors"
        >
          <div className="text-sm font-semibold text-fg-primary">{r.title}</div>
          <div className="text-xs text-fg-tertiary">{r.description}</div>
        </Link>
      ))}
    </div>
  );
}

function PartnersMenu() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {PARTNER_LINKS.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className="flex flex-col gap-2 p-4 rounded-xl hover:bg-bg-secondary transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-fg-primary">{p.title}</span>
            {p.badge && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                {p.badge}
              </span>
            )}
          </div>
          <div className="text-xs text-fg-tertiary">{p.description}</div>
        </Link>
      ))}
    </div>
  );
}

function CompanyMenu() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {COMPANY_LINKS.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="flex flex-col gap-1 p-4 rounded-xl hover:bg-bg-secondary transition-colors"
        >
          <div className="text-sm font-semibold text-fg-primary">{c.title}</div>
          <div className="text-xs text-fg-tertiary">{c.description}</div>
        </Link>
      ))}
    </div>
  );
}
