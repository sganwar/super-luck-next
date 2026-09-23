import terms from "@/data/terms";
import { buildBreadcrumbSchema } from "@/data/schema";
import JsonLd from "@/components/site/json-ld";
import LegalDoc from "@/components/site/legal-doc";

const description =
  "The Terms & Conditions governing your use of the Super Luck app and website — eligibility, wishes and user content, purchases, moderation, disclaimers and your rights.";

export const metadata = {
  title: "Terms & Conditions",
  description,
  alternates: { canonical: "/terms-and-conditions/" },
  openGraph: {
    title: "Terms & Conditions | Super Luck",
    description,
    url: "/terms-and-conditions/",
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions/" },
        ])}
      />

      <LegalDoc
        doc={terms}
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These Terms govern your access to and use of the Super Luck application, website, digital features, content and related services. Please read them before you wish."
      />
    </>
  );
}