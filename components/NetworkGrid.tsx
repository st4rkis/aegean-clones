"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import { Plane, Ship, ArrowRight } from "lucide-react";

// --- DATA: AIRPORTS ---
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

// --- DATA: PORTS (Updated with GR prefix UN/LOCODE) ---
const PORTS = [
  { code: "GRPIR", name: "Piraeus Port (Athens)", url: "/" },
  { code: "GRJMK", name: "Mykonos Port", url: "/" },
  { code: "GRJTR", name: "Santorini Port", url: "/" },
  { code: "GRCFU", name: "Corfu Port", url: "/" },
  { code: "GRRHO", name: "Rhodes Port", url: "/" },
  { code: "GRKGS", name: "Kos Port", url: "/" },
  { code: "GRMLO", name: "Milos Port", url: "/" },
  { code: "GRPAS", name: "Paros Port", url: "/" },
  { code: "GRHER", name: "Heraklion Port", url: "/" },
  { code: "GRJNX", name: "Naxos Port", url: "/" },
  { code: "GRTIN", name: "Tinos Port", url: "/" },
  { code: "GRSMI", name: "Kefalonia Port (Sami)", url: "/" },
  { code: "GRLEF", name: "Lefkada Port", url: "/" },
  { code: "GRKEA", name: "Kea-Tzia Port", url: "/" },
  { code: "GRNMA", name: "Chalkidiki (Moudania)", url: "/" },
  { code: "TRBXN", name: "Bodrum Port", url: "/" }, // TR prefix for Turkey
];

export default function NetworkGrid() {
  const currentAirport = useAirport();
  const currentCode = currentAirport?.key?.toUpperCase();

  // Filter out current location if it matches an airport code
  const otherAirports = AIRPORTS.filter((a) => a.code !== currentCode);

  return (
    <section className="w-full bg-[#0C1A47] text-white py-20 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN: AIRPORTS */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 text-white/60">
              <Plane className="w-6 h-6 text-[#FFD600]" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                Explore other Greek Airports
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherAirports.map((item) => (
                <NetworkCard
                  key={item.code}
                  item={item}
                  forceSameTab={true} // Airports open in same tab
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PORTS */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 text-white/60">
              <Ship className="w-6 h-6 text-[#FFD600]" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                Explore Greek Ports
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PORTS.map((item) => (
                <NetworkCard
                  key={item.code}
                  item={item}
                  // Ports link to "/" so they default to same tab anyway
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- REUSABLE CARD COMPONENT ---
function NetworkCard({
  item,
  forceSameTab = false,
}: {
  item: { code: string; name: string; url: string };
  forceSameTab?: boolean;
}) {
  const isPlaceholder = item.url === "/";
  const shouldOpenNewTab = !isPlaceholder && !forceSameTab;

  return (
    <a
      href={item.url}
      // Apply nofollow/noreferrer if it's a real external link (even if same tab)
      rel={!isPlaceholder ? "nofollow noreferrer" : undefined}
      target={shouldOpenNewTab ? "_blank" : undefined}
      className="
        group flex flex-col justify-between
        p-4 rounded-xl h-20
        bg-white/5 border border-white/5
        hover:bg-white/10 hover:border-[#FFD600]/30 hover:-translate-y-1
        transition-all duration-300 ease-out cursor-pointer
      "
    >
      <div className="flex justify-between items-start">
        <span className="text-xs font-black text-[#FFD600] tracking-wider">
          {item.code}
        </span>
        <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-[#FFD600] group-hover:translate-x-1 transition-all" />
      </div>
      <span className="text-sm font-bold text-gray-200 group-hover:text-white truncate">
        {item.name}
      </span>
    </a>
  );
}
