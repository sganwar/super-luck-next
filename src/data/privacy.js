/**
 * Privacy Policy — structured for rendering with a table of contents.
 *
 * Written to match the app's actual disclosed data practices (account
 * details, user content, location with permission, diagnostics, purchase
 * records) and the commitments already made in the Terms & Conditions.
 */

const privacy = {
  effectiveDate: "21 September 2026",
  lastUpdated: "21 September 2026",

  intro: [
    "Super Luck (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains what information we collect when you use the Super Luck mobile application, this website and related services (together, the “Services”), why we collect it, how we use and share it, and the choices you have.",
    "It should be read together with our Terms & Conditions. By using the Services, you confirm that you have read and understood this Privacy Policy.",
  ],

  sections: [
    {
      id: "scope",
      title: "Scope of This Policy",
      blocks: [
        {
          type: "p",
          text: "This Policy applies to personal information we process as the controller (or equivalent) of your data when you use Super Luck. It does not apply to third-party websites, app stores or services that we do not control, even where we link to them.",
        },
        {
          type: "p",
          text: "If you are in the European Economic Area, the United Kingdom, India or another region with its own privacy law, additional rights described in “Your Rights and Choices” may apply to you.",
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        { type: "p", text: "We collect the following categories of information." },
        {
          type: "ul",
          items: [
            "Account information — your name, mobile number, gender, profile photograph and any verification information you provide when you create or personalise an account.",
            "User content — wishes, intentions, lanterns, messages, photographs, videos, names of loved ones you choose to add, and any other content you create, upload or share through the Services.",
            "Activity information — your interactions with the Services, such as lanterns created, energies sent, wishes viewed or supported, and other product-interaction data used to run and improve the experience.",
            "Device and technical information — device type, operating system, app version, language, general technical identifiers and crash or diagnostic data.",
            "Location information — precise or approximate location, only where you grant permission and only where a feature you choose to use requires it.",
            "Purchase information — records that a purchase was made, and the product or feature purchased. Card and payment details are handled by the app store or payment provider and are not stored by us.",
            "Support information — messages you send us, including by email, and the information needed to resolve your request.",
          ],
        },
        {
          type: "note",
          text: "We do not process payment card numbers ourselves. Purchases made through Google Play or the Apple App Store are processed by those platforms under their own privacy policies.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Information",
      blocks: [
        { type: "p", text: "We use personal information to:" },
        {
          type: "ul",
          items: [
            "create and manage your account and profile",
            "provide the core experience — creating lanterns, wishes and energy experiences",
            "show publicly shared wishes to other users where you have chosen to share them",
            "personalise what you see and improve how the Services work",
            "process purchases of optional digital features",
            "send service messages, and notifications where you have enabled them",
            "keep the Services safe — moderation, fraud prevention, abuse prevention and security",
            "provide customer support and respond to your requests",
            "measure performance, fix bugs and understand aggregate usage",
            "comply with legal obligations and enforce our Terms & Conditions",
          ],
        },
        {
          type: "p",
          text: "We do not use your information to guarantee, predict or produce any specific real-world outcome, and we do not sell your personal information.",
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Our Legal Bases",
      blocks: [
        {
          type: "p",
          text: "Where a legal basis is required, we rely on: performance of our contract with you (providing the Services you request), your consent (for example for notifications, precise location or certain advertising identifiers), our legitimate interests (security, fraud prevention, service improvement and marketing that is proportionate), and compliance with legal obligations to which we are subject.",
        },
        {
          type: "p",
          text: "Where we rely on consent, you may withdraw it at any time — for example by turning off a permission in your device settings or contacting us.",
        },
      ],
    },
    {
      id: "sharing",
      title: "How We Share Information",
      blocks: [
        {
          type: "p",
          text: "We share information only as needed to run the Services, and only with categories of recipients such as:",
        },
        {
          type: "ul",
          items: [
            "cloud hosting and infrastructure providers",
            "app stores and payment providers that process purchases",
            "analytics providers that help us understand aggregate usage",
            "advertising providers, where advertising is shown in the Services",
            "authentication and notification providers",
            "crash reporting and performance monitoring providers",
            "customer support tooling",
            "professional advisers, and authorities where we are legally required to disclose",
          ],
        },
        {
          type: "p",
          text: "Other Super Luck users may see information you choose to make public, such as your username, profile photograph, shared wish or lantern. Content you keep private is handled according to the privacy controls presented to you.",
        },
        {
          type: "p",
          text: "If Super Luck is involved in a merger, acquisition or sale of assets, information may be transferred as part of that transaction, subject to this Policy and applicable law.",
        },
      ],
    },
    {
      id: "advertising",
      title: "Advertising and Identifiers",
      blocks: [
        {
          type: "p",
          text: "Super Luck may display advertising from us or from third-party advertising providers. Advertising may be based on contextual information, device information, general location or advertising identifiers where permitted by law and your device settings.",
        },
        {
          type: "p",
          text: "You can limit advertising personalisation through your device settings, such as by resetting or limiting your advertising identifier, and through the consent controls shown to you where required by law.",
        },
      ],
    },
    {
      id: "location",
      title: "Location Data",
      blocks: [
        {
          type: "p",
          text: "Certain features may request access to your device location. We use location only for the purposes disclosed to you at the point of permission, and only while the feature requires it.",
        },
        {
          type: "p",
          text: "You can grant, refuse or revoke location permission at any time in your device settings. Refusing location access does not prevent you from using features that do not depend on it.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifications and Permissions",
      blocks: [
        {
          type: "p",
          text: "Notifications (such as lantern activity, interactions, reminders and announcements) are sent only where you grant permission, and you can change this at any time in your device settings or in the app. Camera, photo library and microphone permissions are requested only when a feature you choose requires them.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Similar Technologies",
      blocks: [
        {
          type: "p",
          text: "This website uses only the storage needed to operate it and to understand aggregate, non-identifying usage. The mobile application uses local storage and similar technologies to keep you signed in, remember preferences and cache content for performance.",
        },
        {
          type: "p",
          text: "Where non-essential cookies or similar technologies are used, we ask for consent where the law requires it, and you can manage cookies in your browser settings.",
        },
      ],
    },
    {
      id: "retention",
      title: "How Long We Keep Information",
      blocks: [
        {
          type: "p",
          text: "We keep personal information for as long as your account is active and for as long as needed for the purposes described in this Policy. Retention periods depend on the type of information and the reason we hold it.",
        },
        {
          type: "p",
          text: "When you delete your account, we delete or anonymise your personal information within a reasonable period, except where we must retain specific records for legal compliance, tax and accounting, security, fraud prevention or the establishment or defence of legal claims.",
        },
      ],
    },
    {
      id: "security",
      title: "How We Protect Information",
      blocks: [
        {
          type: "p",
          text: "We use technical and organisational measures designed to protect personal information — including encryption in transit, access controls and monitoring for abuse. No method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.",
        },
        {
          type: "p",
          text: "If we become aware of a breach that affects your personal information, we will notify you and the relevant authorities where the law requires it.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      blocks: [
        {
          type: "p",
          text: "Depending on where you live, you may have the right to:",
        },
        {
          type: "ul",
          items: [
            "access the personal information we hold about you",
            "correct information that is inaccurate or incomplete",
            "delete your account and personal information",
            "withdraw consent you previously gave",
            "object to, or restrict, certain processing",
            "data portability, where applicable",
            "not be discriminated against for exercising your privacy rights",
          ],
        },
        {
          type: "p",
          text: "You can exercise many of these directly in the app — for example by editing your profile, changing your privacy settings or deleting your account. For anything else, contact us and we will respond in line with applicable law.",
        },
      ],
    },
    {
      id: "account-deletion",
      title: "Deleting Your Account and Data",
      blocks: [
        {
          type: "p",
          text: "You can request deletion of your Super Luck account through the account-deletion functionality in the application, or by contacting us using the details below and asking us to delete your account and associated data.",
        },
        {
          type: "p",
          text: "Please include the mobile number or account identifier linked to your profile so we can verify the request. Once verified, we delete or anonymise your information as described in “How Long We Keep Information”.",
        },
      ],
    },
    {
      id: "children",
      title: "Children’s Privacy",
      blocks: [
        {
          type: "p",
          text: "Super Luck is intended for users who are 18 years of age or older, unless a different minimum age is required by the law of your country or region. We do not knowingly collect personal information from children below the applicable minimum age.",
        },
        {
          type: "p",
          text: "If you believe a child has provided personal information to us, contact us and we will take reasonable steps to delete it.",
        },
      ],
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      blocks: [
        {
          type: "p",
          text: "We and our service providers may store and process information in countries other than your own. Where we transfer personal information internationally, we take steps designed to ensure it receives an adequate level of protection, using appropriate safeguards where required by applicable law.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. When we make material changes, we will notify you through the application, this website, email or another reasonable method, and we will update the effective date above.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "For privacy questions, data requests or complaints, contact us using the details on our Contact page. We will review and respond to legitimate requests in accordance with applicable law.",
        },
        {
          type: "note",
          text: "If you are not satisfied with our response, you may have the right to lodge a complaint with your local data protection authority.",
        },
      ],
    },
  ],

  acknowledgement:
    "This Privacy Policy is published for Super Luck and applies to the Super Luck mobile application and website. Please contact us with any questions before using the Services.",
};

export default privacy;
