import { Hero } from "@/components/sections/Hero";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Newsletter } from "@/components/sections/Newsletter";
import { CTA } from "@/components/sections/CTA";
import { CoreValues } from "@/components/sections/OurCoreValue";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services></Services>
      <AboutSnippet />
      <WhyChoose></WhyChoose>
      <Capabilities />
      <Process />
      <Testimonials />
      <Blog />
      <Newsletter />
      <CoreValues></CoreValues>
      <CTA />
    </>
  );
}
