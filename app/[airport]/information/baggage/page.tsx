"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { Briefcase, AlertCircle, Phone, Lock } from "lucide-react";

// --- BAGGAGE HANDLER DATA ---
const BAGGAGE_DATA: Record<
  string,
  {
    regionName: string;
    storageAvailable: boolean;
    handlers: { name: string; phone: string }[];
  }
> = {
  // Athens (ATH) - Has storage
  ATH: {
    regionName: "Athens",
    storageAvailable: true,
    handlers: [
      { name: "Skyserv", phone: "+30 210 3530560" },
      { name: "Goldair", phone: "+30 210 3530500" },
      { name: "Swissport", phone: "+30 210 3530700" },
    ],
  },
  // Mykonos (JMK) - No storage
  JMK: {
    regionName: "Mykonos",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 22890 79000" },
      { name: "Goldair", phone: "+30 22890 22327" },
    ],
  },
  // Santorini (JTR) - No storage
  JTR: {
    regionName: "Santorini",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 22860 28400" },
      { name: "Goldair", phone: "+30 22860 30670" },
    ],
  },
  // Heraklion (HER) - Has lockers nearby usually
  HER: {
    regionName: "Heraklion",
    storageAvailable: true,
    handlers: [
      { name: "Skyserv", phone: "+30 2810 397375" },
      { name: "Goldair", phone: "+30 2810 337222" },
      { name: "Swissport", phone: "+30 2810 397440" },
    ],
  },
  // Thessaloniki (SKG) - Has storage
  SKG: {
    regionName: "Thessaloniki",
    storageAvailable: true,
    handlers: [
      { name: "Skyserv", phone: "+30 2310 985222" },
      { name: "Goldair", phone: "+30 2310 489090" },
    ],
  },
  // Rhodes (RHO) - No storage
  RHO: {
    regionName: "Rhodes",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 22410 83264" },
      { name: "Goldair", phone: "+30 22410 82221" },
    ],
  },
  // Corfu (CFU)
  CFU: {
    regionName: "Corfu",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 26610 33413" },
      { name: "Goldair", phone: "+30 26610 39500" },
    ],
  },
  // Kefalonia (EFL)
  EFL: {
    regionName: "Kefalonia",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 26710 41511" },
      { name: "Goldair", phone: "+30 26710 29900" },
    ],
  },
  // Zakynthos (ZTH)
  ZTH: {
    regionName: "Zakynthos",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 26950 29500" },
      { name: "Goldair", phone: "+30 26950 25250" },
    ],
  },
  // Kos (KGS)
  KGS: {
    regionName: "Kos",
    storageAvailable: false,
    handlers: [
      { name: "Skyserv", phone: "+30 22420 56220" },
      { name: "Goldair", phone: "+30 22420 56121" },
    ],
  },
  // Paros (PAS)
  PAS: {
    regionName: "Paros",
    storageAvailable: false,
    handlers: [
      { name: "Airport Info", phone: "+30 22840 90500" },
      { name: "Goldair", phone: "+30 22840 90510" },
    ],
  },
  // Naxos (JNX)
  JNX: {
    regionName: "Naxos",
    storageAvailable: false,
    handlers: [{ name: "Airport Info", phone: "+30 22850 23969" }],
  },
  // Milos (MLO)
  MLO: {
    regionName: "Milos",
    storageAvailable: false,
    handlers: [{ name: "Airport Info", phone: "+30 22870 28410" }],
  },
  // Bodrum (BJV)
  BJV: {
    regionName: "Bodrum",
    storageAvailable: true, // Lockers available
    handlers: [
      { name: "Havas", phone: "+90 444 0 487" },
      { name: "TGS", phone: "+90 252 511 1000" },
    ],
  },

  // Default
  DEFAULT: {
    regionName: "the airport",
    storageAvailable: false,
    handlers: [],
  },
};

export default function Page() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = BAGGAGE_DATA[code] || BAGGAGE_DATA["DEFAULT"];

  return (
    <section className="w-full bg-white font-sans">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <h1 className="text-[#0C1A47] text-3xl md:text-5xl font-semibold">
          Baggage Services — {airport?.name || "Airport"} ({code})
        </h1>

        {/* Intro */}
        <p className="mt-4 text-[#0C1A47]/80 text-base md:text-lg max-w-3xl">
          Essential information on lost luggage contacts, wrapping services, and
          storage facilities at {info.regionName} Airport.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Lost Luggage */}
          <div className="rounded-2xl border border-[#E6E8F5] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-[#F3F4FF] rounded-lg text-[#0C1A47]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-[#0C1A47] text-xl font-semibold">
                Delayed or Lost Baggage
              </h2>
            </div>
            <p className="text-[#0C1A47]/80 mb-4">
              If your bag didn't arrive, do not leave the Arrivals hall. Go
              immediately to the "Lost & Found" desk of your handling agent to
              file a report (PIR).
            </p>
            {info.handlers.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#0C1A47]">
                  Direct Handler Contacts:
                </p>
                {info.handlers.map((handler, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <span className="text-[#0C1A47]/80">{handler.name}</span>
                    <a
                      href={`tel:${handler.phone}`}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      {handler.phone}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 italic text-[#0C1A47]/70">
                Contact your airline directly.
              </div>
            )}
          </div>

          {/* Card 2: Luggage Storage */}
          <div className="rounded-2xl border border-[#E6E8F5] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-[#F3F4FF] rounded-lg text-[#0C1A47]">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-[#0C1A47] text-xl font-semibold">
                Luggage Storage / Lockers
              </h2>
            </div>
            {info.storageAvailable ? (
              <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <p className="text-green-800 font-medium">✅ Available</p>
                <p className="text-green-800/80 text-sm mt-1">
                  Luggage storage facilities are available at this airport. Look
                  for the "Left Luggage" or "Care4Bag" signs in the terminal.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl">
                <p className="text-orange-800 font-medium">
                  ❌ Not Available inside terminal
                </p>
                <p className="text-orange-800/80 text-sm mt-1">
                  For security reasons, this airport does not have luggage
                  lockers. You may find private storage services at the local
                  port or city center.
                </p>
              </div>
            )}
            <p className="mt-4 text-[#0C1A47]/80 text-sm">
              <strong>Tip:</strong> If you have a late flight, ask your hotel if
              they can hold your bags, or check for private lockers in{" "}
              {info.regionName} town.
            </p>
          </div>

          {/* Card 3: Baggage Wrapping */}
          <div className="rounded-2xl border border-[#E6E8F5] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-[#F3F4FF] rounded-lg text-[#0C1A47]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-[#0C1A47] text-xl font-semibold">
                Baggage Wrapping
              </h2>
            </div>
            <p className="text-[#0C1A47]/80">
              Protective wrapping machines (Safe Bag / Care4Bag) are available
              in the Departures area before security.
            </p>
            <p className="mt-2 text-[#0C1A47]/80">
              <strong>Cost:</strong> Typically €10–€15 per bag depending on
              size.
            </p>
          </div>

          {/* Card 4: Cabin Baggage Rules */}
          <div className="rounded-2xl border border-[#E6E8F5] p-6 bg-[#F3F4FF]">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white rounded-lg text-[#0C1A47]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-[#0C1A47] text-xl font-semibold">
                Liquid Rules
              </h2>
            </div>
            <p className="text-[#0C1A47]/80">
              Standard EU security rules apply:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#0C1A47]/80 text-sm">
              <li>Liquids max 100ml per container.</li>
              <li>All containers must fit in one transparent 1-liter bag.</li>
              <li>
                Laptops and large electronics must be removed from bags (unless
                using new CT scanners at select lanes in Athens/Thessaloniki).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
