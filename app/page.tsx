import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Newsletter } from "@/components/sections/Newsletter";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSnippet />
      <Capabilities />
      <Process />
      <Testimonials />
      <Blog />
      <Newsletter />
      <CTA />
    </>
  );
}
