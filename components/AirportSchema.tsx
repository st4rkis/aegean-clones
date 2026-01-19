"use client";

import { useAirport } from "@/context/AirportContext";

export default function AirportSchema() {
  const airport = useAirport();

  if (!airport) return null;

  const name = airport.name;
  const code = airport.key;
  const domain = airport.domain;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Airport",
    name: name,
    alternateName: `${name} International Terminal`,
    iataCode: code,
    // SAFE DESCRIPTION: Describes utility, not ownership
    description: `Comprehensive digital monitor for ${name} (${code}). Providing real-time flight telemetry, terminal logistics, ground transport options, and passenger processing data.`,
    url: `https://${domain}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
