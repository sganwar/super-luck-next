import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import siteConfig from "@/data/site";

/**
 * Brand lockup: the gold lantern emblem plus the SUPER LUCK wordmark.
 */
export default function Logo({
  href = "/",
  className,
  emblemClassName,
  showWordmark = true,
  showTagline = false,
}) {
  const content = (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative inline-grid shrink-0 place-items-center rounded-full ring-1 ring-gold/35 transition-all duration-500 group-hover:ring-gold/70",
          emblemClassName ?? "size-10",
        )}
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(248,201,79,0.45),transparent_70%)] opacity-70 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <Image
          src="/images/logo.webp"
          alt={`${siteConfig.name} emblem`}
          width={256}
          height={256}
          priority
          className="relative size-full rounded-full object-cover"
        />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.95rem] font-bold tracking-[0.2em] text-gold uppercase sm:text-base">
            Super Luck
          </span>
          {showTagline && (
            <span className="mt-1 text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
              Wish · Pray · Manifest
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label={`${siteConfig.name} — home`} className="shrink-0">
      {content}
    </Link>
  );
}
