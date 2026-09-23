import Link from "next/link";
import { ArrowRight } from "lucide-react";

import siteConfig from "@/data/site";
import { Button } from "@/components/ui/button";

export default function LegalDoc({ doc, eyebrow, title, description }) {
  return (
    <main className="relative">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold/80">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-parchment sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>

          {/* Document details */}
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-xs text-muted-foreground">
            <span>
              Effective:{" "}
              <span className="text-parchment/80">
                {doc.effectiveDate}
              </span>
            </span>

            <span>
              Last updated:{" "}
              <span className="text-parchment/80">
                {doc.lastUpdated}
              </span>
            </span>

            <span>
              Governing law:{" "}
              <span className="text-parchment/80">
                {siteConfig.legal.governingLaw}
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Document */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Introduction */}
        <div className="space-y-4 text-[0.95rem] leading-relaxed text-parchment/85 sm:text-base">
          {doc.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
          {doc.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <h2 className="text-lg font-semibold leading-snug text-parchment sm:text-xl">
                {index + 1}. {section.title}
              </h2>

              <div className="mt-4 space-y-3.5 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                {section.blocks.map((block, blockIndex) => {
                  if (block.type === "ul") {
                    return (
                      <ul
                        key={blockIndex}
                        className="list-disc space-y-2 pl-5"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return <p key={blockIndex}>{block.text}</p>;
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Acknowledgement */}
        <div className="mt-14 border-t border-border pt-8 sm:mt-16">
          <p className="text-sm leading-relaxed text-parchment/85 sm:text-base">
            {doc.acknowledgement}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-10 rounded-full bg-gold px-5 text-sm font-semibold text-background transition-all duration-300 hover:bg-gold/90"
            >
              <Link href="/contact/">
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-10 rounded-full border border-border px-5 text-sm text-parchment hover:border-gold/40 hover:bg-muted"
            >
              <Link href="/privacy-policy/">
                Privacy Policy
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}