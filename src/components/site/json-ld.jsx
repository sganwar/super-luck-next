/** Renders one or more JSON-LD payloads as escaped script tags. */
export default function JsonLd({ data }) {
  const payloads = Array.isArray(data) ? data : [data];

  return payloads.map((payload, index) => (
    <script
      key={index}
      type="application/ld+json"
      // JSON.stringify output is escaped before injection.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  ));
}
