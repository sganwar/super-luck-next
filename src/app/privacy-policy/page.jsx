import privacy from "@/data/privacy";
import { buildBreadcrumbSchema } from "@/data/schema";
import JsonLd from "@/components/site/json-ld";
import LegalDoc from "@/components/site/legal-doc";

const description =
  "How Super Luck collects, uses, shares and protects your information — including account details, wishes and user content, location permissions, diagnostics, retention and how to delete your account.";

export const metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | Super Luck",
    description,
    url: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ])}
      />
      <LegalDoc
        doc={privacy}
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters. This policy explains exactly what Super Luck collects, why we collect it, and the control you have over your information."
      />
    </>
  );
}
