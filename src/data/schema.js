import siteConfig from "@/data/site";

/**
 * A single connected schema.org @graph for the whole site:
 * Organization → WebSite → MobileApplication, plus WebPage, Breadcrumbs
 * and the FAQ set. Emitted from the root layout.
 */
export function buildSchemaGraph() {
  const base = siteConfig.url.replace(/\/$/, "");

  const organization = {
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: siteConfig.name,
    url: `${base}/`,
    logo: {
      "@type": "ImageObject",
      url: `${base}/images/logo.webp`,
      width: 256,
      height: 256,
    },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    sameAs: [siteConfig.app.googlePlayUrl, siteConfig.app.appStoreUrl],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: `${base}/`,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${base}/#organization` },
    inLanguage: "en",
  };

  const application = {
    "@type": "MobileApplication",
    "@id": `${base}/#app`,
    name: siteConfig.name,
    alternateName: "Super Luck — Wish App",
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Social networking",
    operatingSystem: siteConfig.app.operatingSystem,
    url: `${base}/download`,
    isAccessibleForFree: true,
    description: siteConfig.description,
    publisher: { "@id": `${base}/#organization` },
    downloadUrl: [siteConfig.app.googlePlayUrl, siteConfig.app.appStoreUrl],
    installUrl: [siteConfig.app.googlePlayUrl, siteConfig.app.appStoreUrl],
    softwareVersion: "4.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free to download with optional in-app purchases.",
    },
    featureList: [
      "Create personal sky lanterns for your wishes",
      "Create luck and wishes for loved ones",
      "Send Pray, Bless, Manifest and Evil Eye Protection energy",
      "Public and private wish sharing",
      "Community wishes and support",
      "Profile personalisation",
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      application,
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: siteConfig.title,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#app` },
        description: siteConfig.description,
        inLanguage: "en",
      },
    ],
  };
}

/** FAQPage graph — only include on the page that renders the questions. */
export function buildFaqSchema() {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** BreadcrumbList for an inner page. */
export function buildBreadcrumbSchema(items) {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}
