"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all border ${
        isDark
          ? "bg-white/5 border-white/10 hover:bg-white/10"
          : "bg-white border-black/10 hover:border-black/20 shadow-soft"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Moon className="w-[18px] h-[18px] text-amber-300" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Sun className="w-[18px] h-[18px] text-amber-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
