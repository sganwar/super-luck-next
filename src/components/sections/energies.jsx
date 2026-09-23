import Image from "next/image";

import siteConfig from "@/data/site";
import Reveal from "@/components/animations/reveal";
import SectionHeading from "@/components/site/section-heading";

const sparklePositions = [
  "top-5 left-7",
  "top-9 right-8",
  "bottom-8 left-10",
  "bottom-5 right-9",
];

export default function Energies() {
  return (
    <section
      id="energies"
      className="relative isolate overflow-hidden scroll-mt-28 py-20 lg:py-28"
    >
      {/* Soft ambient fantasy light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.13] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 68%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The four energies"
          title="Choose your"
          script="way to send"
          description="Every wish carries an energy. Choose the one that feels right and send something meaningful into the world."
        />

        <div className="relative mt-16 sm:mt-20">
          {/* Background orbit */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden aspect-square w-[min(75vw,800px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-parchment/[0.06] lg:block"
          />

          {/* Ambient sparkles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
          >
            {sparklePositions.map((position, index) => (
              <span
                key={index}
                className={`absolute ${position} text-xs text-parchment/30`}
              >
                {index % 2 === 0 ? "✦" : "✧"}
              </span>
            ))}
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.energies.map((energy, index) => (
              <Reveal
                key={energy.id}
                anim="up"
                delay={index * 80}
                className="h-full"
              >
                <article
                  className="group relative flex h-full min-h-[310px] flex-col items-center overflow-hidden rounded-[2rem] border border-parchment/10 bg-card/70 px-6 pb-8 pt-10 text-center shadow-[0_20px_50px_-32px_rgba(90,70,20,0.4)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_28px_60px_-32px_rgba(154,107,18,0.45)]"
                >
                  {/* Warm fairy-light glow inside each tile */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-25"
                    style={{ backgroundColor: energy.color }}
                  />

                  {/* Soft lower glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-3/4 -translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-2xl transition-all duration-700 group-hover:w-full group-hover:opacity-20"
                    style={{ backgroundColor: energy.color }}
                  />

                  {/* Tiny fairy lights around the tile */}
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-7 size-1 rounded-full opacity-50 shadow-[0_0_10px_currentColor] transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                    style={{ color: energy.color, backgroundColor: energy.color }}
                  />

                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-12 size-1 rounded-full opacity-40 shadow-[0_0_10px_currentColor] transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                    style={{ color: energy.color, backgroundColor: energy.color }}
                  />

                  <span
                    aria-hidden="true"
                    className="absolute bottom-14 left-8 size-1 rounded-full opacity-30 shadow-[0_0_10px_currentColor] transition-all duration-500 group-hover:scale-150 group-hover:opacity-90"
                    style={{ color: energy.color, backgroundColor: energy.color }}
                  />

                  <span
                    aria-hidden="true"
                    className="absolute bottom-8 right-7 size-1 rounded-full opacity-40 shadow-[0_0_10px_currentColor] transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                    style={{ color: energy.color, backgroundColor: energy.color }}
                  />

                  {/* Decorative energy halo */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-8 size-32 -translate-x-1/2 rounded-full border border-dashed opacity-15 transition-all duration-700 group-hover:rotate-180 group-hover:scale-110 group-hover:opacity-30"
                    style={{ borderColor: energy.color }}
                  />

                  {/* Energy image */}
                  <div className="relative z-10">
                    {/* Rotating fairy aura */}
                    <div
                      aria-hidden="true"
                      className="absolute -inset-4 rounded-full opacity-30 transition-transform duration-1000 group-hover:rotate-90"
                      style={{
                        background: `conic-gradient(
                          from 0deg,
                          transparent 0deg,
                          ${energy.color} 35deg,
                          transparent 70deg,
                          transparent 150deg,
                          ${energy.color} 190deg,
                          transparent 225deg,
                          transparent 300deg,
                          ${energy.color} 330deg,
                          transparent 360deg
                        )`,
                        filter: "blur(2px)",
                      }}
                    />

                    {/* Top sparkle */}
                    <span
                      aria-hidden="true"
                      className="absolute -right-5 -top-2 text-sm opacity-50 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-125 group-hover:opacity-100"
                      style={{
                        color: energy.color,
                        textShadow: `0 0 12px ${energy.color}`,
                      }}
                    >
                      ✦
                    </span>

                    {/* Bottom sparkle */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2 -left-5 text-xs opacity-40 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-125 group-hover:opacity-100"
                      style={{
                        color: energy.color,
                        textShadow: `0 0 12px ${energy.color}`,
                      }}
                    >
                      ✧
                    </span>

                    <div
                      className="relative size-24 overflow-hidden rounded-full border border-white/10"
                      style={{
                        boxShadow: `
                          0 0 0 2px ${energy.color}44,
                          0 0 25px -5px ${energy.color},
                          0 12px 30px -15px ${energy.color}
                        `,
                      }}
                    >
                      <Image
                        src={energy.image}
                        alt={`${energy.name} — ${energy.script} energy in Super Luck`}
                        width={512}
                        height={512}
                        sizes="96px"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image glass sheen */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-60"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7">
                    <div
                      className="mb-2 text-[9px] font-medium uppercase tracking-[0.35em] opacity-70"
                      style={{ color: energy.color }}
                    >
                      Energy 0{index + 1}
                    </div>

                    <h3 className="text-xl font-semibold leading-tight text-parchment">
                      {energy.name}
                    </h3>

                    <p
                      className="mt-1 font-display text-lg italic"
                      style={{
                        color: energy.color,
                        textShadow: `0 0 18px ${energy.color}33`,
                      }}
                    >
                      {energy.script}
                    </p>

                    <p className="mx-auto mt-4 max-w-[250px] text-sm leading-relaxed text-muted-foreground">
                      {energy.tagline}
                    </p>
                  </div>

                  {/* Enchanted bottom edge */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-px w-16 -translate-x-1/2 opacity-40 transition-all duration-500 group-hover:w-28 group-hover:opacity-80"
                    style={{
                      background: `linear-gradient(
                        90deg,
                        transparent,
                        ${energy.color},
                        transparent
                      )`,
                      boxShadow: `0 0 12px ${energy.color}`,
                    }}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}