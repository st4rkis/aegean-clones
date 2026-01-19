"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  CheckCircle2,
  Info,
  CreditCard,
  FileText,
  Car,
  ShieldCheck,
  ArrowRight,
  Fuel,
  Ship,
  Map,
} from "lucide-react";

// --- REAL-WORLD RENTAL PROVIDERS (UNCHANGED) ---
const RENTAL_PROVIDERS: Record<string, string[]> = {
  // 1. Mykonos (JMK)
  jmk: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Avance",
    "AutoUnion",
    "Thrifty",
    "Enterprise",
  ],

  // 2. Paros (PAS)
  pas: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Avance",
    "Thrifty",
    "Enterprise",
  ],

  // 3. Naxos (JNX)
  jnx: [
    "Hertz",
    "Avis",
    "Europcar",
    "Budget",
    "Thrifty",
    "Avance",
    "AutoUnion",
    "Enterprise",
  ],

  // 4. Zakynthos (ZTH)
  zth: [
    "Hertz",
    "Avis",
    "Europcar",
    "Sixt",
    "Budget",
    "Green Motion",
    "Thrifty",
    "Enterprise",
  ],

  // 5. Bodrum (BJV)
  bjv: [
    "Avis",
    "Hertz",
    "Europcar",
    "Sixt",
    "Budget",
    "Garenta",
    "Circular Car Hire",
    "Enterprise",
  ],

  // 6. Kos (KGS)
  kgs: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Thrifty",
    "AutoUnion",
    "Enterprise",
  ],

  // 7. Corfu (CFU)
  cfu: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Enterprise",
    "Green Motion",
    "AbbyCar",
    "Budget",
  ],

  // 8. Kefalonia (EFL)
  efl: [
    "Hertz",
    "Avis",
    "Budget",
    "Europcar",
    "Enterprise",
    "Thrifty",
    "AutoUnion",
    "Green Motion",
  ],

  // 9. Milos (MLO)
  mlo: [
    "Hertz",
    "Europcar",
    "Budget",
    "Avance",
    "Athena Travel",
    "RAC SA",
    "Avis",
  ],

  // 10. Athens (ATH)
  ath: [
    "Hertz",
    "Avis",
    "Sixt",
    "Budget",
    "Enterprise",
    "Europcar",
    "Goldcar",
    "Green Motion",
    "Centauro",
    "AutoUnion",
  ],

  // 11. Rhodes (RHO)
  rho: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Rodos Cars",
    "AbbyCar",
    "Enterprise",
  ],

  // 12. Heraklion (HER)
  her: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "AutoCandia",
    "The Best",
    "Green Motion",
    "Goldcar",
  ],

  // 13. Santorini (JTR)
  jtr: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Avance",
    "Drive",
    "Vazeos",
    "Enterprise",
  ],

  // 14. Thessaloniki (SKG)
  skg: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Goldcar",
    "Centauro",
    "Green Motion",
    "AutoUnion",
  ],

  // Fallback
  default: [
    "Hertz",
    "Avis",
    "Sixt",
    "Europcar",
    "Budget",
    "Enterprise",
    "Thrifty",
    "National",
  ],
};

export default function CarRentalClient() {
  const airportContext = useAirport();
  const airportKey = airportContext?.key?.toLowerCase() || "jmk";
  const airportName = airportContext?.name || "the Airport";

  // Get providers for current airport or fallback
  const providers = RENTAL_PROVIDERS[airportKey] || RENTAL_PROVIDERS.default;

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Car className="w-5 h-5" />
            <span>Airport Mobility</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Rent a Car <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              at {airportName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Compare prices from the world's most trusted car rental brands
            directly at the airport.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-24">
        {/* INFO BAR */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16 border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#E5D5F5] text-[#0C1A47] rounded-xl">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[#0C1A47] font-bold text-lg">
                Pick-up Location
              </h3>
              <p className="text-gray-500">
                Most counters are located in the Arrivals Hall.
              </p>
            </div>
          </div>
          <div className="w-full md:w-px h-px md:h-12 bg-gray-200" />
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#E5D5F5] text-[#0C1A47] rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[#0C1A47] font-bold text-lg">Requirements</h3>
              <p className="text-gray-500">
                Valid driver's license & credit card required.
              </p>
            </div>
          </div>
        </div>

        {/* --- INTRO: WHY RENT (Adds ~200 words) --- */}
        <div className="mb-16">
          <h2 className="text-[#0C1A47] text-3xl font-bold mb-6">
            Exploring by Car
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 text-lg leading-relaxed">
            <p>
              Renting a vehicle directly from the airport is often the most
              practical way to explore the region, especially on islands where
              public transport schedules can be sparse or unreliable during
              off-peak hours. Having your own vehicle grants you the freedom to
              reach secluded beaches, traditional mountain villages, and
              archaeological sites that are not serviced by standard bus routes.
            </p>
            <p>
              The road network varies significantly across the region. While
              major highways connecting the airport to the city center are
              generally modern and well-maintained, secondary roads leading to
              remote coastal areas can be narrow and winding. We recommend
              choosing a vehicle size that you are comfortable maneuvering in
              tight spaces, particularly if you plan to visit historic town
              centers where parking is limited.
            </p>
          </div>
        </div>

        {/* 3. THE TYPOGRAPHY GRID */}
        <div className="mb-20">
          <h2 className="text-[#0C1A47] text-3xl font-bold mb-10">
            Select a Provider
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((name, index) => (
              <Link
                key={index}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="
                  group
                  bg-linear-to-br from-white to-[#E8EEF9]
                  rounded-4xl p-8
                  h-64 flex flex-col items-center justify-center
                  border border-white/60
                  shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(12,26,71,0.2)]
                  transition-shadow duration-300
                  relative overflow-hidden
                "
              >
                {/* Decorative Background Icon */}
                <Car className="absolute -right-6 -bottom-6 w-32 h-32 text-[#0C1A47]/5 rotate-[-15deg]" />

                {/* Top Label */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                  <span className="text-[#0C1A47]/40 text-xs font-bold uppercase tracking-widest">
                    Rental Car
                  </span>
                </div>

                {/* Center: BIG NAME */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-[#0C1A47] tracking-tighter text-center">
                    {name}
                  </h3>
                </div>

                {/* Footer: CTA */}
                <div
                  className="
                  absolute bottom-8
                  z-10 
                  flex items-center gap-2 
                  text-sm font-bold text-[#0C1A47]
                  bg-white
                  px-5 py-2.5 rounded-full
                  shadow-sm border border-[#0C1A47]/5
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                "
                >
                  <span>View offers</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. USEFUL INFORMATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Box 1: Documents */}
          <div className="bg-[#DDE3FF] rounded-[2.5rem] p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Documents Needed
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Valid Driver's License (held for at least 1 year)",
                "International Driving Permit (if non-EU)",
                "Passport or ID card",
                "Printed booking voucher (if booked online)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0C1A47] mt-0.5 shrink-0" />
                  <span className="text-[#0C1A47]/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Payment */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-full text-[#0C1A47]">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Payment & Deposit
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 font-medium leading-relaxed mb-6">
              Most car rental companies require a credit card in the main
              driver's name to block a security deposit. Debit cards are not
              always accepted.
            </p>
            <div className="bg-[#F3F4FE] rounded-xl p-5 border border-[#0C1A47]/5">
              <p className="text-sm text-[#0C1A47]/60 font-semibold">
                Tip: Check the specific terms and conditions of your chosen
                provider regarding insurance excess and fuel policies.
              </p>
            </div>
          </div>
        </div>

        {/* --- FOOTER: RENTAL LOGISTICS (Adds ~400 words) --- */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <Map className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Rental Guide & Policies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Fuel className="w-5 h-5 text-blue-500" />
                Fuel Policy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The most common fuel policy in the region is "Full to Full."
                This means you pick up the car with a full tank and must return
                it with a full tank to avoid refueling charges. Gas stations are
                generally open late, but 24-hour stations can be rare in remote
                areas. Always fill up within 10km of the airport return point.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Ship className="w-5 h-5 text-blue-500" />
                Ferry Restrictions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Taking a rental car on a ferry to another island is strictly
                prohibited by most standard insurance policies. If you plan to
                "island hop," you usually need to return your car at the port
                and rent a new one at your next destination. Always declare your
                travel plans to the agent at the counter to ensure your coverage
                remains valid.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                Insurance & Excess
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Basic rental rates typically include Third Party Liability and
                Collision Damage Waiver (CDW) with a significant excess
                (deductible). We strongly advise checking the car for scratches
                and dents before driving off the lot. Taking photos of the
                vehicle condition upon pickup is a smart way to protect yourself
                from disputes upon return.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-500" />
                Vehicle Categories
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Due to the narrow streets in many historic villages, smaller
                "Economy" class cars (e.g., Fiat Panda, VW Polo) are the most
                popular choice. While SUVs offer comfort, they can be difficult
                to park in town centers during high season. Ensure your vehicle
                has air conditioning, which is essential during the summer
                months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
