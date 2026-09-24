import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import packageInfo from "@/../package.json";

import siteConfig from "@/data/site";
import Logo from "@/components/site/logo";
import StoreButtons from "@/components/site/store-buttons";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/icons";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Download", href: "/download/" },
  { label: "Contact", href: "/contact/" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

const socialIcons = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden sm:mt-24 lg:mt-28">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/25 to-transparent"
      />

      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-14 lg:py-16">
        {/* Main footer content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo showTagline />

            <p className="text-script mt-4 text-xl text-gold/90">
              {siteConfig.tagline}
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.shortDescription}
            </p>

            <div className="mt-6">
              <StoreButtons size="sm" />
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2">
              {siteConfig.socials.map((social) => {
                const Glyph = socialIcons[social.id];

                if (!Glyph) return null;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-gold/40 hover:bg-gold/[0.07] hover:text-gold"
                  >
                    <Glyph className="size-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            {/* Explore */}
            <nav aria-label="Explore">
              <h2 className="eyebrow">Explore</h2>

              <ul className="mt-5 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal */}
            <nav aria-label="Legal">
              <h2 className="eyebrow">Legal</h2>

              <ul className="mt-5 space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow">Contact</h2>

              <ul className="mt-5 space-y-3.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                  >
                    <Mail className="mt-0.5 size-3.5 shrink-0 text-gold/60 transition-colors group-hover:text-gold" />

                    <span className="min-w-0 break-all">
                      {siteConfig.contact.email}
                    </span>
                  </a>
                </li>

<li>
  <a
    href={`https://wa.me/${siteConfig.contact.phoneHref}`}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
  >
    <FaWhatsapp className="mt-0.5 size-3.5 shrink-0 text-gold/60 transition-colors group-hover:text-gold" />

    <span>{siteConfig.contact.phone}</span>
  </a>
</li>

                <li>
                  <div className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold/60" />

                    <span>{siteConfig.contact.location}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

{/* Bottom row */}
<div className="mt-12 border-t border-border pt-6">
  <div className="relative flex flex-col gap-3 sm:min-h-5 sm:flex-row sm:items-center">
    {/* Copyright */}
    <p className="text-center text-xs text-muted-foreground sm:text-left">
      © {year} {siteConfig.name}. All rights reserved.
    </p>

    {/* Developer credit */}
    <a
      href={siteConfig.developer.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center text-xs text-muted-foreground transition-colors duration-200 hover:text-gold sm:absolute sm:left-1/2 sm:-translate-x-1/2"
    >
      {siteConfig.developer.creditPrefix}{" "}
      {siteConfig.developer.name}
    </a>

    {/* Version */}
    <span className="text-center text-xs text-muted-foreground sm:ml-auto">
      v{packageInfo.version}
    </span>
  </div>
</div>
      </div>
    </footer>
  );
}