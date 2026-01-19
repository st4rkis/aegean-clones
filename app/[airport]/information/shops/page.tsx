import type { Metadata } from "next";
import ShopsClient from "@/components/ShopsClient";

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

  // Title: "Athens International Airport (ATH) - Duty Free & Shopping"
  const title = `${city} ${type} Airport (${code}) - Duty Free & Shopping`;

  // Description: "Guide to shopping at Athens Airport. Browse duty-free brands, local Greek souvenirs, fashion boutiques, and travel essentials before your flight."
  const description = `Guide to shopping at ${city} ${type} Airport. Browse duty-free brands, local Greek souvenirs, fashion boutiques, and travel essentials before your flight.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

// --- 3. RENDER THE PAGE ---
export default function ShopsPage() {
  return <ShopsClient />;
}
