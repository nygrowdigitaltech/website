"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RECAPTCHA } from "@/lib/constants";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        params: {
          sitekey: string;
          size: "normal";
          theme?: "light" | "dark";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
  if (
    window.grecaptcha &&
    typeof window.grecaptcha.ready === "function" &&
    typeof window.grecaptcha.render === "function"
  ) {
    return Promise.resolve();
  }

  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(
      'script[src*="google.com/recaptcha/api.js"]'
    );

    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    let finished = false;

    const cleanup = () => {
      if (intervalId !== undefined) window.clearInterval(intervalId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);

      script?.removeEventListener("error", handleError);
    };

    const finish = (error?: Error) => {
      if (finished) return;
      finished = true;
      cleanup();

      if (error) {
        scriptPromise = null;
        reject(error);
      } else {
        resolve();
      }
    };

    const handleError = () => {
      finish(new Error("Failed to load the Google reCAPTCHA script."));
    };

    const checkApi = () => {
      if (
        window.grecaptcha &&
        typeof window.grecaptcha.ready === "function" &&
        typeof window.grecaptcha.render === "function"
      ) {
        finish();
      }
    };

    if (script) {
      const url = new URL(script.src);

      if (
        url.searchParams.has("render") &&
        url.searchParams.get("render") !== "explicit"
      ) {
        finish(
          new Error(
            "An incompatible reCAPTCHA script may already be loaded. Check for v3 scripts."
          )
        );
        return;
      }
    } else {
      script = document.createElement("script");
      script.src =
        "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    script.addEventListener("error", handleError, { once: true });

    // The script may already have loaded before this component mounted.
    checkApi();

    // Wait for the API to become available instead of rejecting immediately
    // when the script's load event fires.
    if (!finished) {
      intervalId = window.setInterval(checkApi, 100);

      timeoutId = window.setTimeout(() => {
        finish(
          new Error(
            "The reCAPTCHA v2 API did not become ready. Check the site key, script configuration, and browser network errors."
          )
        );
      }, 15000);
    }
  });

  return scriptPromise;
}

export function useReCaptcha() {
  const siteKey = RECAPTCHA.siteKey;
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState("");

  const handleToken = useCallback((value: string) => {
    setToken(value);
    setError(null);
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (!siteKey) {
      setError("reCAPTCHA site key is missing.");
      return;
    }

    loadRecaptchaScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;

        const captcha = window.grecaptcha;

        if (!captcha || typeof captcha.ready !== "function") {
          throw new Error("The reCAPTCHA API is unavailable.");
        }

        captcha.ready(() => {
          if (cancelled || !containerRef.current) return;

          if (typeof captcha.render !== "function") {
            setError(
              "The reCAPTCHA v2 Checkbox API is unavailable. Verify that the configured site key is for v2 Checkbox."
            );
            return;
          }

          if (widgetIdRef.current !== null) return;

          try {
            const widgetId = captcha.render(containerRef.current, {
              sitekey: siteKey,
              size: "normal",
              theme: "light",
              callback: handleToken,
              "expired-callback": () => setToken(""),
              "error-callback": () => {
                setToken("");
                setError("Verification failed. Please try again.");
              },
            });

            widgetIdRef.current = widgetId;
            setLoaded(true);
            setError(null);
          } catch (err) {
            console.error("reCAPTCHA render error:", err);
            setError(
              "Unable to display reCAPTCHA. Check your site key and script configuration."
            );
          }
        });
      })
      .catch((err: unknown) => {
        console.error("reCAPTCHA initialization error:", err);

        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Failed to initialize reCAPTCHA."
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [siteKey, handleToken]);

  const reset = useCallback(() => {
    setToken("");
    setError(null);

    const captcha = window.grecaptcha;

    if (widgetIdRef.current !== null && captcha?.reset) {
      captcha.reset(widgetIdRef.current);
    }
  }, []);

  return { containerRef, loaded, error, token, reset };
}