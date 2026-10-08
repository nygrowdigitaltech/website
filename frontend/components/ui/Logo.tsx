import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** "compact" → small navbar logo. "full" → larger version. "stack" → default for navbar/footer. */
  variant?: "compact" | "full" | "stack";
  /** force-hide the secondary text (icon-only "N" mark) */
  iconOnly?: boolean;
}

export function Logo({
  className,
  variant = "compact",
  iconOnly = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center group", className)}
        aria-label="Nygrow Digital Pvt Ltd — Home"
      >
        <LogoMark />
      </Link>
    );
  }

  if (variant === "stack") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center group", className)}
        aria-label="Nygrow Digital Pvt Ltd — Home"
      >
        <Image
          src="/nygrow-logo.png"
          alt="Nygrow Digital Pvt Ltd"
          width={1266}
          height={1284}
          priority
          className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
        />
      </Link>
    );
  }

  if (variant === "full") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center group", className)}
        aria-label="Nygrow Digital Pvt Ltd — Home"
      >
        <Image
          src="/nygrow-logo.png"
          alt="Nygrow Digital Pvt Ltd"
          width={1266}
          height={1284}
          priority
          className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
        />
      </Link>
    );
  }

  // default = compact
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center group", className)}
      aria-label="Nygrow Digital Pvt Ltd — Home"
    >
      <Image
        src="/nygrow-logo.png"
        alt="Nygrow Digital Pvt Ltd"
        width={1266}
        height={1284}
        priority
        className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
      />
    </Link>
  );
}

/**
 * Inline SVG logo mark — kept as a fallback for favicons / OG images / very small icon contexts.
 */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 transition-transform group-hover:scale-105"
    >
      <defs>
        <linearGradient id="nygrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="20%" stopColor="#FBBF24" />
          <stop offset="40%" stopColor="#F97316" />
          <stop offset="60%" stopColor="#EF4444" />
          <stop offset="80%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#nygrow-grad)" />
      <path
        d="M11 28V12h3.2l8.6 11V12H26v16h-3.2l-8.6-11v11H11z"
        fill="white"
      />
    </svg>
  );
}
