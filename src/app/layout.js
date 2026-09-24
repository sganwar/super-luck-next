import { Cinzel, Great_Vibes, Outfit } from "next/font/google";

import "./globals.css";

import siteConfig from "@/data/site";
import { buildSchemaGraph } from "@/data/schema";
import CosmicBackground from "@/components/site/cosmic-background";
import TopBar from "@/components/site/top-bar";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import BackToTop from "@/components/site/back-to-top";
import JsonLd from "@/components/site/json-ld";

/* --- typography: an engraved display face, a modern geometric sans and a
   calligraphic accent for "wish" moments. -------------------------------- */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-hand",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  category: "Lifestyle",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.developer.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
};

export const viewport = {
  colorScheme: "light",
  themeColor: "#faf7f0",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cinzel.variable} ${greatVibes.variable}`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden antialiased">
        <JsonLd data={buildSchemaGraph()} />
        <CosmicBackground />

        {/* Without JS the reveals never fire — force everything visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}.word-rise{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>

        <TopBar />
        <Navbar />

        <main id="main" className="flex-1">
          {children}
        </main>

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
