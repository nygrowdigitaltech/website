"use client";

import { useCallback, useEffect, useState } from "react";
import { RECAPTCHA } from "@/lib/constants";

declare global {
  interface Window {
    // grecaptcha is only defined after the reCAPTCHA script has loaded,
    // so it must be optional — otherwise every optional-chain check on it
    // is flagged by TypeScript as "always defined" (TS2774).
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options?: { action?: string }) => Promise<string>;
    };
  }
}

/**
 * reCAPTCHA v3 hook.
 * Loads the invisible reCAPTCHA script (render=<siteKey>) and exposes an
 * `execute(action)` function that resolves to a fresh token. v3 has no
 * visible widget — tokens are generated programmatically and expire after
 * ~2 minutes, so execute() should be called at submit time.
 */
export function useReCaptcha() {
  const siteKey = RECAPTCHA.siteKey;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!siteKey) {
      setError("reCAPTCHA site key not configured");
      return;
    }

    // Already available (e.g. React StrictMode re-mount)
    if (window.grecaptcha?.execute) {
      setLoaded(true);
      return;
    }

    // Reuse an existing reCAPTCHA script tag if present
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="recaptcha/api.js"]'
    );
    if (existing) {
      if (window.grecaptcha?.execute) {
        setLoaded(true);
      } else {
        existing.addEventListener("load", () => setLoaded(true));
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setError("Failed to load reCAPTCHA");
    document.head.appendChild(script);

    // Script stays in the DOM so window.grecaptcha remains available
  }, [siteKey]);

  const execute = useCallback(
    async (action = "contact"): Promise<string> => {
      if (!siteKey) throw new Error("reCAPTCHA site key not configured");

      const grecaptcha = window.grecaptcha;
      if (!grecaptcha || !grecaptcha.execute) {
        throw new Error("reCAPTCHA not loaded");
      }

      await new Promise<void>((resolve) => grecaptcha.ready(() => resolve()));
      return grecaptcha.execute(siteKey, { action });
    },
    [siteKey]
  );

  return { loaded, error, execute };
}
