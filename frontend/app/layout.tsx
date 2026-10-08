import type { Metadata } from "next";
import { Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

// Inter — main body text (same as LateShipment)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Inter Tight — display/heading font, tighter spacing (LateShipment-style)
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Instrument Serif — optional accent serif (kept for editorial moments)
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nygrow Digital Pvt Ltd — Crafting Tomorrow's Technology, Today",
    template: "%s | Nygrow Digital Pvt Ltd",
  },
  description:
    "Nygrow Digital is a leading IT services and technology partner — web, mobile, AI/ML, cloud, and digital marketing for enterprises in Chennai, Bangalore, and Coimbatore.",
  keywords: [
    "IT services Chennai",
    "Web development Coimbatore",
    "Mobile app development Bangalore",
    "AI ML solutions India",
    "Cloud infrastructure",
    "Digital marketing agency",
    "Nygrow Digital",
  ],
  authors: [{ name: "Nygrow Digital Pvt Ltd" }],
  openGraph: {
    title: "Nygrow Digital Pvt Ltd",
    description: "Crafting Tomorrow's Technology, Today.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inline script runs before React hydration to prevent dark/light flash
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('nygrow-theme');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (systemDark ? 'dark' : 'light');
        if (theme === 'dark') document.documentElement.classList.add('dark');
      } catch (e) {}
    })();
  `;
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg-primary text-fg-primary antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
