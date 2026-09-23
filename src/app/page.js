import siteConfig from "@/data/site";
import { buildFaqSchema } from "@/data/schema";
import JsonLd from "@/components/site/json-ld";
import Hero from "@/components/sections/hero";
import Energies from "@/components/sections/energies";
import HowItWorks from "@/components/sections/how-it-works";
import Showcase from "@/components/sections/showcase";
import Stats from "@/components/sections/stats";
import WishesWall from "@/components/sections/wishes-wall";
import Features from "@/components/sections/features";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export const metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema()} />
      <Hero />
      <Energies />
      <HowItWorks />
      <Showcase />
      <Stats />
      <WishesWall />
      <Features />
      <Faq />
      <FinalCta />
    </>
  );
}
