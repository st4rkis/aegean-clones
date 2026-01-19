import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

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

  // Title: "About Athens International Airport (ATH) | Facts & Figures"
  const title = `About ${city} ${type} Airport (${code}) | Facts & Figures`;

  // Description: "Complete profile of Athens International Airport (ATH). Passenger statistics, management information, and operational history. Your guide to the region's aviation hub."
  const description = `Profile of ${city} ${type} Airport (${code}). Passenger statistics, management info, and history. Your guide to the region's aviation hub.`;

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
export default function AboutPage() {
  return <AboutClient />;
}
