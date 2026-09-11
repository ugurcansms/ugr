import { AboutSummary } from "@/components/about-summary";
import { BlogSection } from "@/components/blog-section";
import { Cta } from "@/components/cta";
import { Fgas } from "@/components/fgas";
import { Hero } from "@/components/hero";
import { MarqueeStrip } from "@/components/marquee-strip";
import { Process } from "@/components/process";
import { ServicesSummary } from "@/components/services-summary";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AboutSummary />
      <ServicesSummary />
      <Fgas />
      <Process />
      <BlogSection />
      <Cta />
    </>
  );
}
