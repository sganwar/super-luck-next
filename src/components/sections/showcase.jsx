"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Reveal from "@/components/animations/reveal";
import SectionHeading from "@/components/site/section-heading";

const shots = [
  {
    src: "/images/snap-1.webp",
    title: "Write the wish that matters most",
    description:
      "Name what you are hoping for and release it as a lantern into the night sky.",
  },
  {
    src: "/images/snap-2.webp",
    title: "Create luck for someone you love",
    description:
      "Birthdays, exams, weddings, hospital visits — send a wish to the person who needs it.",
  },
  {
    src: "/images/snap-3.webp",
    title: "Watch support arrive",
    description:
      "Prayers and blessings flow in from strangers and friends, one positive intention at a time.",
  },
];

function PhoneFrame({ src, alt, priority = false, className }) {
  return (
    <div
      className={cn(
        "rounded-[2.2rem] border border-gold/35 bg-[linear-gradient(160deg,rgba(248,201,79,0.22),rgba(255,255,255,0.75))] p-1.5 shadow-[0_36px_70px_-40px_rgba(90,70,20,0.55)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-night-900">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1280}
          priority={priority}
          sizes="(max-width: 640px) 12rem, (max-width: 1024px) 13.5rem, 15rem"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

/* Position of each card in the mobile stack, keyed by its distance from the
   active snapshot — 0 sits in front, 1 fans to the right, 2 to the left. */
const stackPosition = {
  0: "z-30 rotate-0 scale-100 opacity-100",
  1: "z-20 translate-x-[28%] translate-y-[7%] rotate-[8deg] scale-[0.86] opacity-90",
  2: "z-10 -translate-x-[28%] translate-y-[3%] -rotate-[9deg] scale-[0.86] opacity-90",
};

export default function Showcase() {
  const [active, setActive] = useState(1);
  const touchStartX = useRef(null);

  const go = useCallback((next) => {
    setActive(((next % shots.length) + shots.length) % shots.length);
  }, []);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta =
      (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    go(delta < 0 ? active + 1 : active - 1);
  };

  const activeShot = shots[active];

  return (
    <section id="showcase" className="relative scroll-mt-28 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Inside the app"
          title="A calm, beautiful place to"
          script="keep your hopes"
          description="Premium lantern designs, gentle animations and a community stream — designed to feel peaceful rather than demanding."
        />
      </div>

      {/* mobile + tablet: stacked swipeable snapshot viewer */}
      <div className="lg:hidden">
        <div
          className="relative mx-auto mt-12 h-[23rem] max-w-md px-6 sm:h-[27rem]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-10 top-16 bottom-16 -z-10 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.3),transparent_70%)] blur-3xl"
          />
          {shots.map((shot, index) => {
            const offset = (index - active + shots.length) % shots.length;
            return (
              <button
                key={shot.src}
                type="button"
                onClick={() => go(index)}
                disabled={offset === 0}
                aria-label={`Show snapshot ${index + 1}: ${shot.title}`}
                className={cn(
                  "absolute inset-x-0 top-0 mx-auto w-[11rem] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[13rem]",
                  stackPosition[offset],
                )}
              >
                <PhoneFrame
                  src={shot.src}
                  alt={shot.title}
                  priority={offset === 0}
                />
              </button>
            );
          })}
        </div>

        {/* controls sit straight under the snapshots, caption follows */}
        <div className="mt-5 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous snapshot"
            className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-card/70 text-parchment transition-colors active:border-gold/50 active:text-gold"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {shots.map((shot, dotIndex) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => go(dotIndex)}
                aria-label={`Show snapshot ${dotIndex + 1}`}
                aria-current={dotIndex === active ? "true" : undefined}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  dotIndex === active ? "w-7 bg-gold" : "w-1.5 bg-foreground/20",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next snapshot"
            className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-card/70 text-parchment transition-colors active:border-gold/50 active:text-gold"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div
          key={active}
          className="animate-rise mx-auto mt-6 max-w-[21rem] px-6 text-center"
        >
          <h3 className="font-display text-base font-semibold text-parchment">
            {activeShot.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {activeShot.description}
          </p>
        </div>
      </div>

      {/* desktop: three phones in a composed row, captions aligned beneath */}
      <Reveal anim="up" delay={150} className="mx-auto mt-14 hidden max-w-5xl lg:block">
        <div className="grid grid-cols-3 items-end gap-8 px-6">
          {shots.map((shot, index) => (
            <div key={shot.src} className="group relative">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-4 top-6 bottom-20 -z-10 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.28),transparent_70%)] blur-3xl",
                  index === 1 ? "opacity-90" : "opacity-50 group-hover:opacity-80",
                )}
              />
              <PhoneFrame
                src={shot.src}
                alt={shot.title}
                priority={index === 1}
                className={cn(
                  "mx-auto w-[15rem] max-w-full transition-transform duration-700",
                  index === 0 && "rotate-[-4deg] group-hover:rotate-[-1deg]",
                  index === 2 && "rotate-[4deg] group-hover:rotate-[1deg]",
                  index === 1 && "translate-y-[-1.25rem]",
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-3 items-start gap-8 px-6">
          {shots.map((shot) => (
            <div key={shot.src} className="mx-auto max-w-[16rem] text-center">
              <h3 className="font-display text-base font-semibold text-parchment">
                {shot.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {shot.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
