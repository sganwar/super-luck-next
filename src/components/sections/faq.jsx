import siteConfig from "@/data/site";
import Reveal from "@/components/animations/reveal";
import SectionHeading from "@/components/site/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const featuredFaqs = siteConfig.faqs.slice(0, 4);

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="A few things"
          script="worth knowing"
          description="Simple answers to the questions you may have before getting started."
        />

        <Reveal anim="up" className="mt-12 sm:mt-14">
          <Accordion
            type="single"
            collapsible
            className="w-full overflow-hidden rounded-2xl border border-border bg-card/70 shadow-xl backdrop-blur-sm"
          >
            {featuredFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="group relative border-b border-border bg-transparent px-6 last:border-b-0 transition-colors duration-300 data-[state=open]:bg-gold/[0.06]"
              >
                {/* Gold open-state bar */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-[3px] bg-gold opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100"
                />

                {/* Subtle glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 size-40 rounded-full bg-gold/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-data-[state=open]:opacity-100"
                />

                <AccordionTrigger
                  className="
                    relative
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-4
                    py-5
                    text-left
                    text-[0.95rem]
                    font-medium
                    leading-snug
                    text-parchment
                    hover:no-underline
                    hover:text-gold

                    [&>svg]:!hidden
                  "
                >
                  <span className="pr-4">
                    {faq.question}
                  </span>

                  {/* Single FAQ arrow */}
                  <span
                    aria-hidden="true"
                    className="
                      relative
                      ml-auto
                      grid
                      size-8
                      shrink-0
                      place-items-center
                      rounded-xl
                      border
                      border-border
                      bg-foreground/5
                      transition-all
                      duration-300
                      group-hover:border-gold/30
                      group-hover:bg-gold/[0.06]
                      group-data-[state=open]:border-gold/40
                      group-data-[state=open]:bg-gold/10
                    "
                  >
                    <span
                      className="
                        absolute
                        left-1/2
                        top-[42%]
                        size-2
                        -translate-x-1/2
                        -translate-y-1/2
                        rotate-45
                        border-b
                        border-r
                        border-muted-foreground
                        transition-all
                        duration-300
                        group-hover:border-gold
                        group-data-[state=open]:top-[58%]
                        group-data-[state=open]:rotate-[225deg]
                        group-data-[state=open]:border-gold
                      "
                    />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="relative pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}