import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="relative text-center max-w-lg">
        <div className="text-[120px] sm:text-[180px] font-extrabold leading-none text-rainbow mb-4">
          404
        </div>
        <h1 className="heading-display text-2xl sm:text-3xl font-bold mb-4">
          This page got lost in cyberspace.
        </h1>
        <p className="text-fg-tertiary mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
