"use client";

import { useEffect, useRef, useState } from "react";

import siteConfig from "@/data/site";
import { SparkleGlyph } from "@/components/icons";

/**
 * Formats a raw numeric value the same way regardless of whether it's an
 * in-progress animation frame or the final settled value. That's the fix
 * for the old bug: the previous version picked its format branch by
 * comparing `value` against a threshold derived from `target`, so the very
 * last frame could land in a different branch than the one before it and
 * visibly jump (the "0M -> 1M" problem). Here the same rule always applies,
 * so however far into the animation you look, the format is continuous.
 */
function formatNumber(n) {
  const value = Math.max(0, n);
  return Math.round(value).toLocaleString();
}

function AnimatedNumber({ value, suffix = "", duration = 2400, onProgress }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const target = Number(value);
    if (!Number.isFinite(target)) return undefined;

    let animationFrame = null;
    let startTime = null;
    let started = false;

    const animate = (time) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      /*
       * Ease-IN on purpose, not ease-out: we want it to genuinely read as
       * counting at the start — 0, 1, 2, 3 — and then accelerate hard
       * through the middle, so for something like 1,000,000 you're never
       * sitting there watching it tick past every value between 40,000
       * and 999,000. It just rushes there.
       */
      const eased = progress * progress * progress;
      const next = target * eased;

      setDisplay(next);
      onProgress?.(progress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplay(target);
        onProgress?.(1);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        setDisplay(0);
        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    };
  }, [value, duration, onProgress]);

  return (
    <span ref={ref} className="inline-flex items-baseline tabular-nums">
      <span>{formatNumber(display)}</span>
      {suffix && (
        <span className="ml-0.5 text-[0.65em] font-semibold text-gold/80">
          {suffix}
        </span>
      )}
    </span>
  );
}

function StatCard({ stat, index, total }) {
  const [progress, setProgress] = useState(0);

  return (
    <div
      className="group relative flex flex-col items-center gap-2.5 px-3 py-2 text-center sm:gap-3 sm:px-4 lg:border-r lg:border-border lg:last:border-r-0"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 -top-2 h-14 rounded-full bg-gold/[0.08] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 sm:inset-x-6 sm:h-16"
      />

      <dd className="relative font-display text-2xl font-bold tracking-tight text-gold xs:text-3xl sm:text-4xl">
        <AnimatedNumber
          value={stat.value}
          suffix={stat.suffix}
          duration={2400}
          onProgress={setProgress}
        />
      </dd>

      {/* fills in perfect sync with the count above — number and bar always
          finish at the exact same instant, since they share one progress value */}
      <span className="h-[3px] w-10 overflow-hidden rounded-full bg-foreground/12 sm:w-14">
        <span
          className="block h-full rounded-full bg-gradient-to-r from-gold/60 to-gold transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </span>

      <dt className="flex items-center justify-center gap-1.5 text-[0.7rem] leading-snug text-muted-foreground sm:gap-2 sm:text-xs sm:leading-relaxed sm:text-[0.8rem]">
        {/* Sparkle glyph eats up scarce width on small screens where the
            label already has to wrap inside a 2-col grid, so it's only
            shown from sm and up. */}
        <SparkleGlyph
          aria-hidden="true"
          className="hidden size-3 shrink-0 text-gold/70 sm:inline-block"
        />
        <span className="max-w-[9rem] sm:max-w-none">{stat.label}</span>
      </dt>

      {index < total - 1 && (
        <span
          aria-hidden="true"
          className="mt-1.5 h-px w-14 bg-foreground/12 sm:mt-2 sm:w-16 lg:hidden"
        />
      )}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass relative overflow-hidden rounded-2xl px-4 py-8 sm:rounded-3xl sm:px-10 sm:py-10">
          <span
            aria-hidden="true"
            className="absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.2),transparent_68%)] blur-3xl sm:-top-24 sm:size-72"
          />
          <span aria-hidden="true" className="hairline absolute inset-x-6 top-0 sm:inset-x-10" />

          <dl className="relative grid grid-cols-2 gap-y-8 sm:gap-y-10 lg:grid-cols-4">
            {siteConfig.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                total={siteConfig.stats.length}
              />
            ))}
          </dl>

          <p className="relative mt-7 text-center text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground/80 sm:mt-9 sm:text-[0.68rem] sm:tracking-[0.16em]">
            Figures reflect activity shown within the app · not a promise of
            any outcome
          </p>
        </div>
      </div>
    </section>
  );
}