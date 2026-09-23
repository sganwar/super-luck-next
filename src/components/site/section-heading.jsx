import { cn } from "@/lib/utils";
import { SparkleGlyph } from "@/components/icons";
import Reveal from "@/components/animations/reveal";

/**
 * Consistent section intro: eyebrow, display title and supporting copy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  script,
  description,
  align = "center",
  className,
  titleClassName,
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal as="p" anim="fade" className="eyebrow flex items-center gap-2">
          <SparkleGlyph className="size-3 text-gold" />
          {eyebrow}
        </Reveal>
      )}

      <Reveal
        as="h2"
        anim="blur"
        delay={80}
        className={cn(
          "max-w-4xl text-balance text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.9rem]",
          titleClassName,
        )}
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
          className={cn(
            "text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base",
            centered ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </Reveal>
      )}

      <Reveal
        anim="fade"
        delay={220}
        className={cn("hairline mt-2 w-28", centered ? "" : "self-start")}
      />
    </div>
  );
}
