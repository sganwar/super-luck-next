"use client";

import { useEffect, useState } from "react";

import siteConfig from "@/data/site";
import Reveal from "@/components/animations/reveal";
import SectionHeading from "@/components/site/section-heading";
import Icon from "@/components/icon";

const AUTOPLAY_MS = 4500;

function FeatureCard({ feature }) {
  return (
    <article className="card-lux flex h-full flex-col p-7">
      <Icon name={feature.icon} className="size-7 text-gold" />
      <h3 className="mt-5 text-base font-semibold text-parchment">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </article>
  );
}

function MobileCarousel({ features }) {
  const total = features.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Re-running this effect on every index change — including a manual
  // click — is what makes the timer "reset" on manual navigation for free.
  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, total, paused]);

  const go = (next) => setIndex(((next % total) + total) % total);

  /*
   * Pause-on-hover only makes sense for an actual mouse. Touch has no
   * concept of "hover" — a tap fires pointerenter with no matching
   * pointerleave afterward, so if we paused on any pointer at all,
   * `paused` would get stuck true forever after the very first tap on a
   * phone (which is exactly the bug: everything stops after tapping the
   * card or the prev/next buttons, only on mobile). Checking pointerType
   * keeps this desktop-only.
   */
  const handlePointerEnter = (event) => {
    if (event.pointerType === "mouse") setPaused(true);
  };
  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse") setPaused(false);
  };

  return (
    <div
      className="mt-12 lg:hidden"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="mx-auto w-full max-w-md sm:max-w-lg">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {features.map((feature) => (
              <div key={feature.title} className="w-full shrink-0">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous feature"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/25 text-gold transition-colors duration-300 hover:border-gold/55 hover:bg-gold/[0.08]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* a literal timer, not decorative dots — it's showing you exactly
              what's driving the autoplay, and restarts whenever you navigate */}
          <div className="h-px flex-1 overflow-hidden bg-gold/15">
            <div
              key={index}
              className="h-full bg-gold/70"
              style={{
                animation: `feature-timer ${AUTOPLAY_MS}ms linear forwards`,
                animationPlayState: paused ? "paused" : "running",
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next feature"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/25 text-gold transition-colors duration-300 hover:border-gold/55 hover:bg-gold/[0.08]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes feature-timer {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-28 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What you get"
          title="Everything a wish needs, and"
          script="nothing it doesn't"
          description="Small details that make the ritual feel special — and controls that keep you in charge of what you share."
        />

        <MobileCarousel features={siteConfig.features} />

        {/* Desktop: one unified panel with internal dividers, not four
            separate cards each carrying their own border/radius/shadow. */}
        <Reveal anim="up" className="mt-14 hidden lg:block">
          <div className="card-lux grid grid-cols-4 divide-x divide-gold/15 overflow-hidden p-0">
            {siteConfig.features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col p-8 transition-colors duration-500 hover:bg-gold/[0.035]"
              >
                <Icon
                  name={feature.icon}
                  className="size-7 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                />
                <h3 className="mt-6 text-base font-semibold text-parchment">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}