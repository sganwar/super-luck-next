"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import siteConfig from "@/data/site";
import { cn } from "@/lib/utils";
import Reveal from "@/components/animations/reveal";
import SectionHeading from "@/components/site/section-heading";
import Icon from "@/components/icon";

const STEP_MS = 4200;

function StepCard({ step, className }) {
  return (
    <div className={cn("bg-card card-lux group relative flex h-full flex-col p-6", className)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 right-4 font-display text-5xl font-bold text-foreground/[0.07] transition-colors duration-500 group-hover:text-gold/25"
      >
        {step.step}
      </span>

      <span className="relative grid size-12 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-105">
        <Icon name={step.icon} className="size-5" />
      </span>

      <p className="mt-5 text-[0.62rem] tracking-[0.24em] text-gold/80 uppercase">
        Step {step.step}
      </p>
      <h3 className="mt-1.5 text-lg font-semibold text-parchment">{step.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  const steps = siteConfig.steps;
  const [index, setIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const [inView, setInView] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  /* Move manually — and restart the autoplay timer so the user keeps control. */
  const go = useCallback(
    (next) => {
      setIndex(((next % steps.length) + steps.length) % steps.length);
      setAutoplayKey((key) => key + 1);
    },
    [steps.length],
  );

  /* Autoplay only while the carousel is on screen and motion is welcome. */
  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % steps.length);
    }, STEP_MS);

    return () => window.clearInterval(timer);
  }, [inView, autoplayKey, steps.length]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <section id="how-it-works" className="relative scroll-mt-28 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From a quiet hope to"
          script="a shared lantern"
          description="Four steps, about a minute. No ceremony required — although a little ceremony never hurts."
        />

        {/* desktop: four-up grid */}
        <div className="relative mt-14 hidden lg:block">
          <span
            aria-hidden="true"
            className="absolute top-[3rem] right-[10%] left-[10%] h-px bg-[linear-gradient(90deg,transparent,rgba(154,107,18,0.45),transparent)]"
          />

          <ol className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, stepIndex) => (
              <Reveal
                key={step.step}
                as="li"
                anim="up"
                delay={stepIndex * 120}
                className="h-full"
              >
                <StepCard step={step} />
              </Reveal>
            ))}
          </ol>
        </div>

        {/* mobile + tablet: auto-advancing carousel with manual controls */}
        <div className="mt-12 lg:hidden">
          <div
            ref={trackRef}
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {steps.map((step, stepIndex) => (
                <div
                  key={step.step}
                  className="w-full shrink-0 px-0.5"
                  aria-hidden={stepIndex === index ? undefined : "true"}
                >
                  <StepCard step={step} className="min-h-[15.5rem]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous step"
              className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-card/70 text-parchment transition-colors active:border-gold/50 active:text-gold"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {steps.map((step, dotIndex) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => go(dotIndex)}
                  aria-label={`Go to step ${dotIndex + 1}`}
                  aria-current={dotIndex === index ? "true" : undefined}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    dotIndex === index
                      ? "w-7 bg-gold"
                      : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next step"
              className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-card/70 text-parchment transition-colors active:border-gold/50 active:text-gold"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
