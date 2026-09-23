import { cn } from "@/lib/utils";
import siteConfig from "@/data/site";
import { AppleIcon, GooglePlayIcon } from "@/components/icons";

const stores = [
  {
    id: "android",
    href: siteConfig.app.googlePlayUrl,
    caption: "Get it on",
    name: "Google Play",
    Icon: GooglePlayIcon,
  },
  {
    id: "ios",
    href: siteConfig.app.appStoreUrl,
    caption: "Download on the",
    name: "App Store",
    Icon: AppleIcon,
  },
];

/**
 * Custom store buttons — matched to the brand rather than pasting the
 * official badges, which clash with a dark cosmic layout.
 */
export default function StoreButtons({ size = "lg", className }) {
  const large = size === "lg";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {stores.map(({ id, href, caption, name, Icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${caption} ${name}`}
          className={cn(
            "group relative isolate inline-flex items-center overflow-hidden rounded-full border border-foreground/15 bg-card/70 backdrop-blur-sm transition-all duration-500",
            "hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/[0.07] hover:shadow-[0_18px_40px_-20px_rgba(248,201,79,0.65)]",
            large ? "gap-3 px-5 py-3" : "gap-2.5 px-3.5 py-2",
          )}
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 -z-10 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(248,201,79,0.45),transparent)] animate-sheen" />
          <Icon
            className={cn(
              "shrink-0 text-gold transition-transform duration-500 group-hover:scale-110",
              large ? "size-7" : "size-5",
            )}
          />
          <span className="flex flex-col leading-tight text-left whitespace-nowrap">
            <span
              className={cn(
                "font-medium tracking-[0.14em] text-muted-foreground uppercase whitespace-nowrap",
                large ? "text-[0.6rem]" : "text-[0.55rem]",
              )}
            >
              {caption}
            </span>
            <span
              className={cn(
                "font-display font-semibold tracking-wide text-foreground whitespace-nowrap",
                large ? "text-sm" : "text-xs",
              )}
            >
              {name}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
