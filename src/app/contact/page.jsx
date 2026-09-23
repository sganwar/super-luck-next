import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import siteConfig from "@/data/site";
import { buildBreadcrumbSchema } from "@/data/schema";
import JsonLd from "@/components/site/json-ld";
import Reveal from "@/components/animations/reveal";

import contactVector from "@/assets/images/contact-vector.png";

const description =
  "Get in touch with the Super Luck team for account help, privacy requests, purchases, or general questions.";

export const metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Super Luck",
    description,
    url: "/contact/",
  },
};

const contactItems = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    Icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneHref}`,
    Icon: Phone,
  },
  {
    id: "location",
    label: "Location",
    value: siteConfig.contact.location,
    href: null,
    Icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-10 pt-14 sm:pb-14 sm:pt-20 lg:pt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/[0.07] blur-3xl"
          />

          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <p className="eyebrow">Contact</p>

            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-parchment sm:text-5xl lg:text-6xl">
              Let&apos;s talk.
              <span className="block font-display font-normal italic text-gold">
                We&apos;re listening.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have a question, need help, or simply want to reach the Super
              Luck team? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact panel */}
        <section className="relative pb-20 lg:pb-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Reveal anim="zoom">
              <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-card">
                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-gold/[0.07] blur-3xl transition-opacity duration-700 group-hover:opacity-90"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-energy-manifest/[0.05] blur-3xl"
                />

                <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
                  {/* Contact information */}
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold/80">
                      Get in touch
                    </p>

                    <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-parchment sm:text-3xl">
                      We&apos;re only a message away.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                      Reach us directly for questions, account help, privacy
                      requests, or anything else you need.
                    </p>

                    <div className="mt-8 flex flex-col gap-3">
                      {contactItems.map((item) => {
                        const content = (
                          <>
                            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold transition-all duration-300 group-hover/item:border-gold/35 group-hover/item:bg-gold/[0.1]">
                              <item.Icon className="size-4" />
                            </span>

                            <span className="min-w-0">
                              <span className="block text-xs text-muted-foreground">
                                {item.label}
                              </span>

                              <span className="mt-1 block truncate text-sm font-medium text-parchment">
                                {item.value}
                              </span>
                            </span>

                            {item.href && (
                              <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-gold" />
                            )}
                          </>
                        );

                        if (!item.href) {
                          return (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4"
                            >
                              {content}
                            </div>
                          );
                        }

                        return (
                          <a
                            key={item.id}
                            href={item.href}
                            className="group/item flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4 transition-all duration-300 hover:border-gold/40 hover:bg-gold/[0.05]"
                          >
                            {content}
                          </a>
                        );
                      })}
                    </div>

                    <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                      {siteConfig.contact.supportHours}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div className="relative min-h-[360px] overflow-hidden border-t border-border lg:min-h-[500px] lg:border-l lg:border-t-0">
                    {/* Illustration glow */}
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-3xl"
                    />

                    {/* Decorative orbit */}
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/[0.09] transition-transform duration-1000 group-hover:rotate-12"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.05]"
                    />

                    {/* Floating decorative particles */}
                    <span
                      aria-hidden="true"
                      className="absolute left-[18%] top-[25%] text-sm text-gold/50 transition-transform duration-700 group-hover:-translate-y-2"
                    >
                      ✦
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute right-[20%] top-[20%] text-lg text-gold/40 transition-transform duration-700 group-hover:translate-y-2"
                    >
                      ✧
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-[22%] left-[24%] size-1 rounded-full bg-gold/50 shadow-[0_0_12px_rgba(248,201,79,0.7)]"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute bottom-[25%] right-[18%] size-1.5 rounded-full bg-gold/40 shadow-[0_0_14px_rgba(248,201,79,0.7)]"
                    />

                    {/* Floating illustration */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                      <div className="relative animate-[contact-float_6s_ease-in-out_infinite]">
                        <Image
                          src={contactVector}
                          alt="Contact Super Luck support"
                          width={500}
                          height={500}
                          priority
                          className="relative z-10 max-h-[330px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(90,70,20,0.3)] sm:max-h-[380px]"
                        />

                        {/* Small orbiting dots */}
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1/3 size-2 rounded-full bg-gold/60 shadow-[0_0_15px_rgba(248,201,79,0.8)]"
                        />

                        <span
                          aria-hidden="true"
                          className="absolute right-1 top-1/4 size-1.5 rounded-full bg-gold/50 shadow-[0_0_12px_rgba(248,201,79,0.8)]"
                        />
                      </div>
                    </div>

                    {/* Bottom glow */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-linear-to-r from-transparent via-gold/50 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}