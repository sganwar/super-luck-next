import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import Reveal from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { LanternIcon, SparkleGlyph } from "@/components/icons";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const helpfulLinks = [
  { label: "Home", href: "/" },
  { label: "Download the app", href: "/download/" },
  { label: "Contact us", href: "/contact/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal anim="zoom" className="relative grid place-items-center">
          <span className="absolute size-40 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.28),transparent_70%)] blur-2xl" />
          <LanternIcon className="size-16 animate-float text-gold" />
        </Reveal>

        <Reveal as="p" anim="fade" delay={100} className="eyebrow mt-8 flex items-center gap-2">
          <SparkleGlyph className="size-3 text-gold" />
          Error 404
        </Reveal>

        <Reveal
          as="h1"
          anim="up"
          delay={160}
          className="mt-4 text-4xl font-bold sm:text-5xl"
        >
          This wish drifted away.
        </Reveal>

        <Reveal
          as="p"
          anim="up"
          delay={220}
          className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground"
        >
          The page you were looking for is not here. It may have been moved or
          never existed — but your luck is still waiting on the home page.
        </Reveal>

        <Reveal anim="up" delay={300} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="h-12 rounded-full bg-[linear-gradient(100deg,var(--gold-600),var(--gold-300)_45%,var(--gold-500))] px-7 text-sm font-semibold text-[#251a02] transition-transform duration-300 hover:scale-[1.03]"
          >
            <Link href="/">
              <Home className="size-4" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-12 rounded-full border border-foreground/15 px-6 text-sm text-parchment hover:border-gold/50 hover:bg-muted"
          >
            <Link href="/download/">
              Download the app
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal
          as="ul"
          anim="fade"
          delay={380}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
        >
          {helpfulLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold/50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
