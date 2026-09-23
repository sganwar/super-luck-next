import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Reveal from "@/components/animations/reveal";
import { SparkleGlyph, LanternIcon } from "@/components/icons";

/**
 * Shared hero for inner pages: eyebrow, title, lede, breadcrumbs and
 * optional right-hand slot.
 */
export default function PageHero({
  eyebrow,
  title,
  script,
  description,
  breadcrumbs = [],
  children,
  className,
}) {
  return (
    <section
      className={cn("relative overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16", className)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <span className="absolute -top-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.16),transparent_66%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {breadcrumbs.length > 0 && (
          <Reveal as="nav" anim="fade" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.72rem] text-muted-foreground">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {isLast ? (
                      <span className="text-gold" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-parchment"
                      >
                        {crumb.label}
                      </Link>
                    )}
                    {!isLast && (
                      <ChevronRight className="size-3 opacity-50" aria-hidden="true" />
                    )}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        )}

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            {eyebrow && (
              <Reveal as="p" anim="fade" className="eyebrow flex items-center gap-2">
                <SparkleGlyph className="size-3 text-gold" />
                {eyebrow}
              </Reveal>
            )}

            <Reveal
              as="h1"
              anim="blur"
              delay={80}
              className="mt-4 max-w-3xl text-3xl leading-[1.1] font-bold text-balance sm:text-4xl lg:text-5xl"
            >
              {title}
              {script && (
                <>
                  {" "}
                  <span className="text-script text-4xl sm:text-5xl lg:text-[3.4rem]">
                    {script}
                  </span>
                </>
              )}
            </Reveal>

            {description && (
              <Reveal
                as="p"
                anim="up"
                delay={160}
                className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base"
              >
                {description}
              </Reveal>
            )}

            <Reveal anim="fade" delay={220} className="hairline mt-7 w-32" />
          </div>

          {children && (
            <Reveal anim="right" delay={200} className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 right-0 -z-10 text-gold/10"
              >
                <LanternIcon className="size-40" />
              </span>
              {children}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
