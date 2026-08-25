"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POSTS = [
  {
    title: "How we engineer custom IT solutions that scale",
    excerpt:
      "A look inside our co-creation process — from discovery to deployment — and how we build future-ready architecture.",
    tag: "Engineering",
    href: "/about",
  },
  {
    title: "Digital transformation, done with purpose",
    excerpt:
      "Why transparent communication and a client-first mindset matter more than any single technology stack.",
    tag: "Strategy",
    href: "/solutions",
  },
  {
    title: "Migrating servers without the downtime drama",
    excerpt:
      "Lessons from seamless migrations and the ongoing support that keeps operations running smoothly.",
    tag: "Infrastructure",
    href: "/services",
  },
];

export function Blog() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-secondary">
      <div className="container-px mx-auto max-w-[88rem]">
        <SectionHeading eyebrow="Insights" title="Latest from Nygrow" />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border bg-bg-primary shadow-soft"
            >
              <Link href={post.href} className="block p-6">
                <span className="h-1 w-10 block rounded-full bg-brand-500 mb-5" />
                <span className="inline-block mb-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-500 border border-brand-500/20">
                  {post.tag}
                </span>
                <h3 className="text-lg font-semibold text-fg-primary leading-snug group-hover:text-brand-500 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-fg-tertiary leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
