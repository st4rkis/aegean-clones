"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import { Plane, ArrowRight } from "lucide-react";

// --- FULL AIRPORT LIST ---
const AIRPORTS = [
  { code: "ATH", name: "Athens", url: "https://athensairport-ath.com" },
  { code: "JMK", name: "Mykonos", url: "https://mykonosairport-jmk.com" },
  { code: "JTR", name: "Santorini", url: "https://santoriniairport-jtr.com" },
  { code: "HER", name: "Heraklion", url: "https://heraklionairport-her.com" },
  { code: "CFU", name: "Corfu", url: "https://corfuairport-cfu.com" },
  { code: "RHO", name: "Rhodes", url: "https://rhodesairport-rho.com" },
  {
    code: "SKG",
    name: "Thessaloniki",
    url: "https://thessalonikiairport-skg.com",
  },
  { code: "ZTH", name: "Zakynthos", url: "https://zanteairport.com" },
  { code: "KGS", name: "Kos", url: "https://kosairport-kgs.com" },
  { code: "PAS", name: "Paros", url: "https://airportparos.com" },
  { code: "JNX", name: "Naxos", url: "https://naxosairport.com" },
  { code: "MLO", name: "Milos", url: "https://milosairport-mlo.com" },
  { code: "EFL", name: "Kefalonia", url: "https://kefaloniaairport.com" },
  { code: "BJV", name: "Bodrum", url: "https://bodrum-airport.org" },
];

export default function AirportNetworkLinks() {
  const currentAirport = useAirport();
  // Ensure we compare uppercase codes to match the data
  const currentCode = currentAirport?.key?.toUpperCase();

  // FILTER: Exclude the airport the user is currently viewing
  const otherAirports = AIRPORTS.filter((a) => a.code !== currentCode);

  return (
    <div className="w-full bg-[#0C1A47] border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10 text-white/60">
          <Plane className="w-5 h-5" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Explore Our Network
          </span>
        </div>

        {/* Grid of Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {otherAirports.map((airport) => (
            <a
              key={airport.code}
              href={airport.url}
              // --- SAFETY & SEO ATTRIBUTES ---
              rel="nofollow noreferrer noopener"
              target="_blank"
              // -------------------------------
              className="
                group flex items-center justify-between
                p-4 rounded-xl
                bg-white/5 border border-white/5
                hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]
                transition-all duration-300 ease-out
              "
            >
              <div>
                <span className="block text-xs font-bold text-[#FFD600] mb-0.5">
                  {airport.code}
                </span>
                <span className="block text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {airport.name}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#FFD600] group-hover:translate-x-1 transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
