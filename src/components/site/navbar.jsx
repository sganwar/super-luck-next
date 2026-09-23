"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import siteConfig from "@/data/site";
import Logo from "@/components/site/logo";
import StoreButtons from "@/components/site/store-buttons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "Home", href: "/" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
  // { label: "Terms", href: "/terms-and-conditions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);

  // Frost the bar once the hero starts scrolling away + drive the read bar.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20"
      >
        <Logo showTagline />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                  isActive(link.href)
                    ? "text-gold"
                    : "text-muted-foreground hover:text-parchment",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-[linear-gradient(90deg,transparent,var(--gold-deep),transparent)]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-10 rounded-full bg-[linear-gradient(100deg,var(--gold-600),var(--gold-300)_45%,var(--gold-500))] px-5 text-[0.8rem] font-semibold tracking-wide text-[#251a02] shadow-[0_12px_30px_-14px_rgba(248,201,79,0.9)] transition-transform duration-300 hover:scale-[1.03] hover:brightness-105 sm:inline-flex"
          >
            <Link href="/download">
              Get the app
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="size-10 rounded-full border border-foreground/15 text-parchment lg:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86vw] max-w-sm border-l border-border bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="px-5 pt-5">
                <SheetTitle asChild>
                  <div>
                    <Logo showTagline />
                  </div>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation
                </SheetDescription>
              </SheetHeader>

              <ul className="flex flex-col gap-1 px-3 py-2">
                {siteConfig.nav.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors",
                          isActive(link.href)
                            ? "bg-gold/10 text-gold"
                            : "text-parchment/85 hover:bg-muted hover:text-parchment",
                        )}
                      >
                        {link.label}
                        <ArrowRight className="size-4 opacity-50" />
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4 border-t border-border p-5">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Download Super Luck
                </p>
                <StoreButtons size="sm" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* reading progress */}
      <span
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,var(--gold-deep),var(--gold-soft),var(--gold-deep))]"
      />
    </header>
  );
}
