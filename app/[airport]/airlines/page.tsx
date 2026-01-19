import type { Metadata } from "next";
import AirlinesClient from "@/components/AirlinesClient";

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

  // Title: "Athens International Airport (ATH) - Airlines Directory"
  const title = `${city} ${type} Airport (${code}) - Airlines Directory`;

  // Description: "Complete list of airlines flying to Athens International Airport. Find terminal information, check-in counters, and contact details for all carriers."
  const description = `Complete list of airlines flying to ${city} ${type} Airport. Find terminal information, check-in counters, and contact details for all carriers.`;

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
export default function AirlinesPage() {
  return <AirlinesClient />;
}
