import { airportByKey } from "@/lib/airports.config";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HighlightsCarousel from "@/components/HighlightsCarousel";
import ExperiencesSection from "@/components/ExperiencesSection";
// import VipLoungeSection from "@/components/VipLoungeSection";
// import HappeningSection from "@/components/HappeningSection";
import PopularRoutes from "@/components/PopularRoutes";
// --- IMPORT THE NEW SEO COMPONENTS ---
import HomeIntro from "@/components/HomeIntro";
import HomeSEO from "@/components/HomeSEO";
import AirportSchema from "@/components/AirportSchema";
import type { Metadata } from "next";

// --- SEO: REAL-WORLD DATA CONFIGURATION ---
// Source: Official AIP Greece & airport designations
const AIRPORT_SEO_CONFIG: Record<string, { city: string; type: string }> = {
  // International Airports
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

  // National Airports (Domestic/Charters)
  pas: { city: "Paros", type: "National" },
  jnx: { city: "Naxos", type: "National" },
  mlo: { city: "Milos", type: "National" },
};

// --- SEO: DYNAMIC METADATA GENERATOR ---
type Props = {
  params: Promise<{ airport: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { airport } = await params;
  const slug = airport.toLowerCase();
  const code = slug.toUpperCase();

  // 1. Get Real-World Data (Fallback to "International" if unknown)
  const data = AIRPORT_SEO_CONFIG[slug] || {
    city: code,
    type: "International",
  };
  const { city, type } = data;

  // 2. SEO TITLE FORMULA (55-65 chars)
  // Ex: "Naxos National Airport (JNX): Official Travel Guide"
  // Ex: "Athens International Airport (ATH): Official Travel Guide"
  const title = `${city} ${type} Airport (${code}): Official Travel Guide`;

  // 3. SEO DESCRIPTION FORMULA (52-127 chars)
  const description = `Track ${city} (${code}) flights, book taxis, and find terminal info. Your complete guide to ${city} ${type.toLowerCase()} airport services.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

// --- MAIN PAGE COMPONENT (Untouched) ---
export default async function AirportHome({
  params,
}: {
  params: Promise<{ airport: string }>;
}) {
  const { airport } = await params;
  const code = airport.toUpperCase();
  const airportConfig = airportByKey[code];

  return (
    <main>
      <AirportSchema />
      <Hero />
      <HomeIntro />
      <ServicesSection />
      <HighlightsCarousel />
      <ExperiencesSection />
      <PopularRoutes />
      <HomeSEO />
    </main>
  );
}
