"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";

type Status = "idle" | "loading" | "success";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    // Simulate API — wire to your endpoint (e.g. /api/subscribe)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");

    setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 4000);
  };

  return (
    <section className="relative py-20 bg-bg-secondary border-y border-border overflow-hidden">
      <div
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(22,163,74,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-px mx-auto max-w-4xl relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 mb-5">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Stay in the Loop
          </h2>
          <p className="text-base text-fg-tertiary max-w-xl mx-auto leading-relaxed">
            Subscribe to receive biweekly tips on creative automation, digital advertising, and tech insights from the Nygrow team.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 font-medium text-sm"
            >
              <Check className="w-4 h-4" strokeWidth={3} />
              You're subscribed. Welcome aboard!
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="flex-1 px-5 py-3 rounded-full bg-bg-primary border border-border text-sm text-fg-primary placeholder:text-fg-muted focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:opacity-60 shrink-0"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          <p className="mt-4 text-[11px] text-fg-muted">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
