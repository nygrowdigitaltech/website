"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call — replace with real endpoint (e.g. /api/contact)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");

    setTimeout(() => {
      setStatus("idle");
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 4000);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-300 dark:border-brand-700 mb-6">
          <Check className="w-7 h-7 text-brand-600 dark:text-brand-400" strokeWidth={3} />
        </div>
        <h3 className="text-xl font-medium text-fg-primary mb-2">Message received</h3>
        <p className="text-sm text-fg-secondary max-w-sm mx-auto">
          Thank you. We'll reach out within one business day with next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Jane Doe"
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jane@company.com"
        />
      </div>

      <Field
        label="Company"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Your company name"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField
          label="Service interested in"
          name="service"
          value={form.service}
          onChange={handleChange}
          options={[
            "Web Development",
            "Mobile App",
            "AI / ML",
            "Cloud Infrastructure",
            "Digital Marketing",
            "Not sure yet",
          ]}
        />
        <SelectField
          label="Estimated budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          options={[
            "< ₹5 Lakh",
            "₹5 Lakh – ₹15 Lakh",
            "₹15 Lakh – ₹50 Lakh",
            "₹50 Lakh+",
            "Let's discuss",
          ]}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.15em] text-fg-secondary mb-2"
        >
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project, goals, and timeline..."
          className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-sm text-fg-primary placeholder:text-fg-muted focus:outline-none focus:border-brand-500 focus:bg-bg-tertiary transition-all resize-none"
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        <AnimatePresence mode="wait">
          {status === "loading" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              Send message
              <Send className="w-4 h-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.15em] text-fg-secondary mb-2"
      >
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-sm text-fg-primary placeholder:text-fg-muted focus:outline-none focus:border-brand-500 focus:bg-bg-tertiary transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.15em] text-fg-secondary mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-sm text-white focus:outline-none focus:border-brand-500 focus:bg-bg-tertiary transition-all appearance-none cursor-pointer"
      >
        <option value="" className="">
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
