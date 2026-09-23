import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import siteConfig from "@/data/site";
import Reveal from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

import ctaImage from "@/assets/images/cta-image.png";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal anim="zoom">
          <div className="group relative overflow-hidden rounded-[2rem] border border-gold/30 bg-card">
            {/* Atmospheric background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-gold/[0.14] blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-32 size-[30rem] rounded-full bg-energy-manifest/[0.1] blur-3xl"
            />

            {/* Very subtle gold light behind artwork */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[8%] top-1/2 hidden size-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.14),transparent_65%)] blur-2xl lg:block"
            />

            {/* Fine top highlight */}
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
            />

            <div className="relative grid items-center lg:grid-cols-[0.9fr_1.1fr]">
              {/* Content */}
              <div className="relative z-20 px-7 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-12 lg:px-14 lg:py-16">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold/80">
                  Make a wish
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-bold leading-[1.05] tracking-tight text-parchment sm:text-4xl lg:text-[3.25rem]">
                  Your wish
                  <span className="block font-display font-normal italic text-gold">
                    is waiting.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Download {siteConfig.name} and send your first wish into the
                  universe.
                </p>

                <div className="mt-7">
                  <Button
                    asChild
                    className="group/button h-11 rounded-full bg-gold px-6 font-semibold text-background shadow-[0_0_30px_-10px_rgba(248,201,79,0.7)] transition-all duration-300 hover:bg-gold/90 hover:shadow-[0_0_40px_-8px_rgba(248,201,79,0.85)]"
                  >
                    <Link href="/download/">
                      Download the app
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/75">
                  Available on Android &amp; iOS
                </p>
              </div>

              {/* Artwork */}
              <div className="relative min-h-[330px] overflow-hidden sm:min-h-[420px] lg:min-h-[500px]">
                {/* Image atmosphere */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.1] blur-3xl sm:size-[28rem]"
                />

                {/* Artwork */}
                <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-4">
                  <Image
                    src={ctaImage}
                    alt="Super Luck app surrounded by golden lights and clouds"
                    width={1200}
                    height={900}
                    sizes="
                      (max-width: 640px) 92vw,
                      (max-width: 1024px) 80vw,
                      55vw
                    "
                    className="
                      relative z-10
                      w-[110%]
                      max-w-[620px]
                      object-contain
                      drop-shadow-[0_30px_55px_rgba(90,70,20,0.35)]
                      animate-[cta-float_7s_ease-in-out_infinite]
                      transition-transform duration-700
                      group-hover:scale-[1.025]
                    "
                  />
                </div>

                {/* Fade artwork naturally into the panel on the left */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-32 bg-linear-to-r from-card to-transparent lg:block"
                />

                {/* Mobile bottom fade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-card to-transparent lg:hidden"
                />
              </div>
            </div>

            {/* Bottom light */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-linear-to-r from-transparent via-gold/50 to-transparent transition-all duration-700 group-hover:w-56"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}