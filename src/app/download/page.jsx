import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "@/data/site";
import { buildBreadcrumbSchema } from "@/data/schema";
import JsonLd from "@/components/site/json-ld";
import Reveal from "@/components/animations/reveal";
import StoreButtons from "@/components/site/store-buttons";
import Showcase from "@/components/sections/showcase";
import { AppleIcon, GooglePlayIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const description =
  "Download Super Luck for Android or iPhone. Create your first wish and share it with the Super Luck community.";

export const metadata = {
  title: "Download",
  description,
  alternates: { canonical: "/download/" },
  openGraph: {
    title: "Download Super Luck",
    description,
    url: "/download/",
  },
};

const platforms = [
  {
    id: "android",
    name: "Android",
    caption: "Google Play",
    Icon: GooglePlayIcon,
    href: siteConfig.app.googlePlayUrl,
    steps: siteConfig.download.android,
  },
  {
    id: "ios",
    name: "iPhone & iPad",
    caption: "App Store",
    Icon: AppleIcon,
    href: siteConfig.app.appStoreUrl,
    steps: siteConfig.download.ios,
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Download", path: "/download/" },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-12 sm:pt-16 lg:pb-16 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/[0.08] blur-3xl"
        />

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="eyebrow">Download Super Luck</p>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-parchment sm:text-5xl lg:text-6xl">
            Your next wish
            <span className="block font-display font-normal italic text-gold">
              starts here.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose your platform, install Super Luck, and create your first
            wish.
          </p>

          {/* Store buttons immediately visible */}
          <div className="mt-8 flex justify-center">
            <StoreButtons size="sm" className="flex md:hidden"/>
            <StoreButtons size="lg" className="hidden md:flex"/>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Available free on Android and iOS.
          </p>
        </div>
      </section>

      {/* Platform details */}
      <section className="relative pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform, index) => (
              <Reveal
                key={platform.id}
                anim={index === 0 ? "left" : "right"}
                delay={index * 100}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/[0.04] sm:p-8">
                  {/* Subtle glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-gold/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-center gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/[0.08] text-gold">
                      <platform.Icon className="size-6" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        {platform.caption}
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-parchment">
                        {platform.name}
                      </h2>
                    </div>
                  </div>

                  <div className="relative mt-8 space-y-3">
                    {platform.steps.map((step) => (
                      <div
                        key={step.title}
                        className="flex items-start gap-3"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />

                        <div>
                          <p className="text-sm font-medium text-parchment">
                            {step.title}
                          </p>

                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="relative mt-8 h-11 w-full rounded-full bg-gold text-sm font-semibold text-background transition-all duration-300 hover:bg-gold/90 hover:shadow-[0_0_30px_-10px_rgba(248,201,79,0.8)]"
                  >
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <platform.Icon className="size-5" />
                      Get it on {platform.caption}
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* App preview */}
      <section className="border-y border-border py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow">Inside the app</p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-parchment sm:text-4xl">
                Make a wish.
                <span className="block font-display font-normal italic text-gold">
                  Let it travel.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Create a wish and choose how you want to send your energy.
                Everything else happens inside the community.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold/80"
              >
                Learn about Super Luck
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <Reveal anim="fade">
              <Showcase />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}