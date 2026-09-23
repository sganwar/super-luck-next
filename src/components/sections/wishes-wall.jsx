import siteConfig from "@/data/site";
import Marquee from "@/components/animations/marquee";
import Reveal from "@/components/animations/reveal";
import { SparkleGlyph } from "@/components/icons";

function WishChip({ label }) {
  return (
    <span className="mx-2.5 inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-parchment/85 transition-colors duration-500 hover:border-gold/45 hover:text-gold">
      <SparkleGlyph className="size-3 text-gold/70" />
      {label}
    </span>
  );
}

export default function WishesWall() {
  const halfway = Math.ceil(siteConfig.wishes.length / 2);
  const firstRow = siteConfig.wishes.slice(0, halfway);
  const secondRow = siteConfig.wishes.slice(halfway);

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <Reveal anim="fade" className="mx-auto mb-10 max-w-2xl px-4 text-center sm:px-6">
        <p className="eyebrow">A wall of wishes</p>
        <h2 className="mt-3 text-2xl leading-snug font-semibold sm:text-3xl">
          Somewhere right now, someone is wishing for{" "}
          <span className="text-gold">exactly what you are.</span>
        </h2>
      </Reveal>

      <div className="flex flex-col gap-3">
        <Marquee duration={30} itemClassName="py-0.5">
          {firstRow.map((wish) => (
            <WishChip key={wish} label={wish} />
          ))}
        </Marquee>
        <Marquee duration={34} reverse>
          {secondRow.map((wish) => (
            <WishChip key={wish} label={wish} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
