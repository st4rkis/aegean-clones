import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";

// --- 1. REAL-WORLD DATA CONFIGURATION ---
const AIRPORT_SEO_CONFIG: Record<string, { city: string; type: string }> = {
  // International
  ath: { city: "Athens", type: "International" },
  jmk: { city: "Mykonos", type: "International" },
  jtr: { city: "Santorini", type: "International" },
  her: { city: "Heraklion", type: "International" },
  cfu: { city: "Corfu", type: "International" },
  rho: { city: "Rhodes", type: "International" },
  skg: { city: "Thessaloniki", type: "International" },
  zth: { city: "Zakynthos", type: "International" },
  kgs: { city: "Kos", type: "International" },
  efl: { city: "Kefalonia", type: "International" },
  bjv: { city: "Bodrum", type: "International" },

  // National
  pas: { city: "Paros", type: "National" },
  jnx: { city: "Naxos", type: "National" },
  mlo: { city: "Milos", type: "National" },
};

type Props = {
  params: Promise<{ airport: string }>;
};

// --- 2. SEO METADATA GENERATION ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { airport } = await params;
  const slug = airport.toLowerCase();
  const code = slug.toUpperCase();

  // Fallback
  const data = AIRPORT_SEO_CONFIG[slug] || {
    city: code,
    type: "International",
  };
  const { city, type } = data;

  // Title: "Athens International Airport (ATH) - Frequently Asked Questions"
  const title = `${city} ${type} Airport - Frequently Asked Questions`;

  // Description: "Common questions about parking, baggage, security, and facilities at Athens International Airport. Find answers for a smooth journey."
  const description = `Common questions about parking, baggage, security, and facilities at ${city} ${type} Airport. Find answers for a smooth journey.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

// --- 3. FAQ SCHEMA DATA ---
// We define this here for the Server Component to inject into the head.
// This ensures Google gets a static, readable list of Q&As.
const SCHEMA_FAQS = [
  {
    question: "Is parking free for People of Determination?",
    answer:
      "Yes, parking is complimentary for People of Determination in all terminals. Please present your permit at the counter upon exit.",
  },
  {
    question: "Where do I park to drop-off or pick-up guests?",
    answer:
      "We have dedicated drop-off and pick-up zones in front of all terminals. Short-term parking is also available.",
  },
  {
    question: "What is the liquids limit for security?",
    answer:
      "Liquids must be in containers of 100ml or less, placed in a transparent, re-sealable plastic bag.",
  },
  {
    question: "What is the baggage allowance?",
    answer:
      "Baggage allowance depends on your airline and ticket class. Please check directly with your carrier.",
  },
];

// --- 4. RENDER THE PAGE ---
export default function FaqPage() {
  // Generate the JSON-LD object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SCHEMA_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Inject Schema into the Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Render the Client Component */}
      <FaqClient />
    </>
  );
}
