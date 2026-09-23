import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";

import siteConfig from "@/data/site";
import RiseText from "@/components/animations/rise-text";
import StoreButtons from "@/components/site/store-buttons";
import { Button } from "@/components/ui/button";
import { AppleIcon, GooglePlayIcon, SparkleGlyph } from "@/components/icons";

const floatingWishes = [
  { label: "Financial success", position: "top-6 -left-4 sm:-left-10", delay: "0s" },
  { label: "Good health", position: "top-40 -right-2 sm:-right-12", delay: "1.4s" },
  { label: "Dream job", position: "bottom-24 -left-2 sm:-left-14", delay: "2.6s" },
];

/* The hero sits above the fold, so it animates with pure CSS keyframes — no
   observer, no JavaScript, nothing that can leave it empty on a slow phone. */
function entrance(delay) {
  return { style: { animationDelay: `${delay}ms` } };
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-14 lg:pt-20 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ------------------------------------------------------------ copy */}
        <div className="flex flex-col items-start">
         

          <h1 className="animate-rise mt-6 max-w-2xl text-4xl leading-[1.06] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <RiseText text="Change your luck." />
            <span className="mt-1 block">
              <span className="text-gold">
                <RiseText text="Energize" delay={420} />
              </span>{" "}
              <RiseText text="your luck." delay={640} />
            </span>
          </h1>

          <p {...entrance(220)} className="animate-rise mt-6 max-w-xl">
            <span className="text-script mr-2 text-2xl">
              Your wish deserves support.
            </span>
            <span className="block text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              Super Luck is a community-powered wish app. Create a personal sky
              lantern for yourself or someone you love, choose how you want to
              send it — Pray, Bless, Manifest or Evil Eye Protection — and let
              positive intentions from around the world gather around it.
            </span>
          </p>

          <div
            {...entrance(320)}
            className="animate-rise mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              className="group h-12 rounded-full bg-[linear-gradient(100deg,var(--gold-600),var(--gold-300)_45%,var(--gold-500))] px-7 text-sm font-semibold tracking-wide text-[#251a02] shadow-[0_20px_44px_-20px_rgba(248,201,79,0.95)] transition-transform duration-300 hover:scale-[1.03]"
            >
              <Link href="/download/">
                Download the app
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-12 rounded-full border border-foreground/15 px-6 text-sm text-parchment hover:border-gold/50 hover:bg-muted"
            >
              <Link href="#energies">
                <Sparkles className="size-4 text-gold" />
                Explore the energies
              </Link>
            </Button>
          </div>

          <div {...entrance(400)} className="animate-rise mt-8">
            <StoreButtons size="sm" />
          </div>


        </div>

        {/* --------------------------------------------------------- visual */}
        <div className="animate-rise relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem]">
          {/* halo + orbiting rings */}
          <div className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
            <div className="size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.22),transparent_65%)] blur-3xl" />
            <div className="ring-orbit absolute size-[22rem] animate-spin-slower" />
            <div className="ring-orbit absolute size-[17rem] animate-spin-slow [animation-direction:reverse]" />
            <div className="ring-orbit absolute size-[28rem] opacity-40" />
          </div>

          {/* lanterns */}
          <div className="pointer-events-none absolute inset-x-0 -z-10">
            {[
              "left-[6%] top-[4%] size-8 text-gold/70",
              "right-[10%] top-[18%] size-6 text-gold/50",
              "left-[14%] bottom-[12%] size-7 text-energy-pray/60",
              "right-[6%] bottom-[6%] size-9 text-gold/60",
            ].map((cls) => (
              <SparkleGlyph key={cls} className={`absolute animate-float ${cls}`} />
            ))}
          </div>

          <div className="relative mx-auto w-[16rem] rotate-[-2.5deg] transition-transform duration-700 hover:rotate-0 sm:w-[18rem] lg:w-[19rem]">
            <div className="rounded-[2.6rem] border border-gold/30 bg-[linear-gradient(160deg,rgba(248,201,79,0.22),rgba(255,255,255,0.03))] p-2 shadow-[0_40px_90px_-40px_rgba(248,201,79,0.7)]">
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-night-900">
                <Image
                  src="/images/hero.webp"
                  alt="A Super Luck sky lantern carrying a wish, surrounded by a supportive community"
                  width={720}
                  height={1280}
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 19rem"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* floating wish chips */}
          <ul className="pointer-events-none absolute inset-0 hidden sm:block">
            {floatingWishes.map((wish) => (
              <li
                key={wish.label}
                style={{ animationDelay: wish.delay }}
                className={`glass absolute animate-float rounded-full px-3 py-1.5 text-[0.7rem] text-parchment/90 ${wish.position}`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <SparkleGlyph className="size-3 text-gold" />
                  {wish.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
