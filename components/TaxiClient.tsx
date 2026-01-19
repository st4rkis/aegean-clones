"use client";

import React from "react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  Car,
  Smartphone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Banknote,
  Clock,
  ShieldCheck,
} from "lucide-react";

// --- DYNAMIC TAXI DATA (UNCHANGED) ---
const TAXI_DATA: Record<
  string,
  {
    availability: string;
    appInfo: string;
    routes: string[];
    bookingLink: string;
  }
> = {
  // Mykonos
  JMK: {
    availability:
      "Taxis operate on the island, but the number of vehicles (approx. 30) is extremely limited compared to demand. Queues can be long.",
    appInfo:
      "Uber operates in a limited capacity (often booking standard taxis or private vans at higher rates). It is not as reliable as in major cities.",
    routes: [
      "Airport → Mykonos Town (Chora): ~10 min",
      "Airport → New Port (Ferries): ~15 min",
      "Airport → Paradise/Super Paradise: ~15 min",
      "Airport → Elia Beach: ~20 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  // Athens
  ATH: {
    availability:
      "Yellow taxis are plentiful at the designated rank outside Arrivals (Exit 3).",
    appInfo:
      "Uber and FreeNow apps work well in Athens, but they typically hail standard licensed yellow taxis rather than private ride-shares.",
    routes: [
      "Airport → Syntagma (Center): ~40 min (Fixed fare ~€40-€55)",
      "Airport → Piraeus Port: ~50 min",
      "Airport → Glyfada: ~30 min",
      "Airport → Rafina Port: ~25 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  // Santorini
  JTR: {
    availability:
      "Taxis are very scarce relative to the number of tourists. Finding one without a booking in July/August is difficult.",
    appInfo:
      "Ride-hailing apps are generally unavailable or unreliable. Most transport is via traditional taxi or pre-booked private transfer.",
    routes: [
      "Airport → Fira: ~10 min",
      "Airport → Oia: ~25-30 min",
      "Airport → Kamari: ~10 min",
      "Airport → Athinios Port: ~20 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/santorini",
  },
  // Heraklion
  HER: {
    availability:
      "Standard grey taxis are generally available outside arrivals. Queues move reasonably fast.",
    appInfo:
      "Apps like Uber are not standard here. You generally rely on the taxi rank or pre-booked transfers.",
    routes: [
      "Airport → Heraklion Center: ~10 min",
      "Airport → Hersonissos: ~20 min",
      "Airport → Malia: ~30 min",
      "Airport → Ammoudara: ~15 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/crete",
  },
  // Corfu
  CFU: {
    availability:
      "Dark blue taxis are available at the rank. Demand peaks when international flights land simultaneously.",
    appInfo:
      "Uber is not available. Local radio taxis and private transfers are the main alternatives.",
    routes: [
      "Airport → Corfu Town: ~10 min",
      "Airport → Port: ~15 min",
      "Airport → Paleokastritsa: ~30 min",
      "Airport → Kavos: ~60 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/corfu",
  },
  // Kefalonia (EFL)
  EFL: {
    availability:
      "Taxis are available at the rank outside Arrivals, but during peak charter days (Tue/Sun), availability can be scarce.",
    appInfo:
      "No international ride-hailing apps operate here. You must rely on the rank or pre-booked private transfers.",
    routes: [
      "Airport → Argostoli: ~15 min",
      "Airport → Lassi: ~15 min",
      "Airport → Skala: ~50-60 min",
      "Airport → Fiskardo: ~1h 15min",
    ],
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
  },
  // Rhodes
  RHO: {
    availability:
      "Dark blue taxis serve the airport. The rank is located just outside the arrivals hall.",
    appInfo:
      "Uber is not active. Use the official taxi rank or book a private transfer in advance.",
    routes: [
      "Airport → Rhodes Town: ~20 min",
      "Airport → Faliraki: ~25 min",
      "Airport → Lindos: ~50 min",
      "Airport → Ialysos: ~15 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/rhodes",
  },
  // Thessaloniki
  SKG: {
    availability:
      "Blue/White taxis are widely available. The rank is directly outside arrivals.",
    appInfo:
      "FreeNow and Uber (hailing taxis) operate in the city and offer a convenient way to pay by card.",
    routes: [
      "Airport → City Center (White Tower): ~25 min",
      "Airport → Railway Station: ~35 min",
      "Airport → Halkidiki (Cassandra): ~45-60 min",
      "Airport → Bus Station (KTEL): ~40 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
  },
  // Paros
  PAS: {
    availability:
      "The taxi fleet is very small. Relying on finding a taxi upon arrival is risky in high season.",
    appInfo:
      "No ride-hailing apps. Pre-booking is highly recommended to ensure you reach your accommodation.",
    routes: [
      "Airport → Parikia: ~15 min",
      "Airport → Naoussa: ~25 min",
      "Airport → Pounta (Antiparos ferry): ~10 min",
      "Airport → Golden Beach: ~20 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/paros",
  },
  // Naxos
  JNX: {
    availability:
      "Extremely limited taxi availability. Most visitors pre-book transfers or rent cars.",
    appInfo:
      "No Uber/FreeNow. Local taxis must be called by phone if not found at the rank.",
    routes: [
      "Airport → Naxos Town (Chora): ~5 min",
      "Airport → Agia Anna/Plaka: ~5-10 min",
      "Airport → Agios Prokopios: ~5 min",
      "Airport → Halki: ~20 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/naxos",
  },
  // Zakynthos
  ZTH: {
    availability:
      "Taxis are available but queues can be long during the midday flight rush.",
    appInfo:
      "No major ride-hailing apps. Use the official rank or private transfer services.",
    routes: [
      "Airport → Zante Town: ~10 min",
      "Airport → Laganas: ~15 min",
      "Airport → Tsilivi: ~20 min",
      "Airport → Kalamaki: ~10 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/zante",
  },
  // Kos
  KGS: {
    availability:
      "Taxis are generally available, but waiting times increase significantly in July/August.",
    appInfo:
      "No international ride apps. Local taxi dispatch numbers are available.",
    routes: [
      "Airport → Kos Town: ~30 min",
      "Airport → Mastichari: ~10 min",
      "Airport → Kardamena: ~10 min",
      "Airport → Kefalos: ~20 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/kos",
  },
  // Milos
  MLO: {
    availability:
      "There are only about 15 taxis on the entire island. Pre-booking is virtually mandatory.",
    appInfo:
      "No apps. Without a booking, you may be left waiting for hours for a taxi to return.",
    routes: [
      "Airport → Adamas (Port): ~10 min",
      "Airport → Plaka: ~15 min",
      "Airport → Pollonia: ~20 min",
      "Airport → Sarakiniko: ~15 min",
    ],
    bookingLink: "https://www.aegeantaxi.com/milos",
  },
  // Bodrum
  BJV: {
    availability:
      "Yellow taxis are plentiful. They run on meters, but euro pricing can sometimes be negotiated.",
    appInfo:
      "Uber works in Turkey but has faced regulatory hurdles; often it just hails a yellow taxi.",
    routes: [
      "Airport → Bodrum Center: ~35 min",
      "Airport → Yalikavak: ~45 min",
      "Airport → Gumbet: ~40 min",
      "Airport → Turkbuku: ~40 min",
    ],
    bookingLink: "https://www.aegeantaxi.com",
  },

  // Default Fallback
  DEFAULT: {
    availability:
      "Taxi availability varies. In peak season, expect queues at the rank.",
    appInfo:
      "Check local regulations for ride-hailing apps. Official taxi ranks are the safest bet.",
    routes: [
      "Airport → City Center: Varies",
      "Airport → Port: Varies",
      "Airport → Main Resorts: Varies",
    ],
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function TaxiClient() {
  const airport = useAirport();

  // Use key to find data, default to "DEFAULT"
  const airportKey = airport?.key ? airport.key.toUpperCase() : "DEFAULT";
  const info = TAXI_DATA[airportKey] || TAXI_DATA["DEFAULT"];
  const bookingLink = info.bookingLink;

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Car className="w-5 h-5" />
            <span>Transfers & Mobility</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Taxi Services <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airport?.name || "Airport"}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            The fastest and most convenient way to reach your destination. Find
            availability, app info, and estimated times.
          </h2>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Availability */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Taxi Availability
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.availability}
            </p>
          </div>

          {/* Card 2: Ride Apps */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Ride Apps (Uber/FreeNow)
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.appInfo}
            </p>
          </div>

          {/* Card 3: Typical Routes */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Typical Routes
              </h3>
            </div>
            <ul className="space-y-4">
              {info.routes.map((route, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C1A47]/40 shrink-0" />
                  <span className="text-[#0C1A47]/80 font-medium text-lg leading-snug">
                    {route}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: CTA (PREMIUM HIGHLIGHT) */}
          <div className="bg-[#0C1A47] rounded-[2.5rem] p-10 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />

            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-white/10 p-3 rounded-full text-[#FFD600]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Recommended Option
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                Skip the queue. Aegean Taxi provides professional transfers with
                meet-and-greet pickup and fixed pricing.
              </p>

              <ul className="space-y-3 mb-8 relative z-10">
                {[
                  "Pre-book online in seconds",
                  "Driver waits at Arrivals",
                  "Fixed price (no meters)",
                  "Modern, clean vehicles",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600]" />
                    <span className="font-medium text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={bookingLink}
              target="_blank"
              rel="nofollow noreferrer"
              className="
                flex items-center justify-between 
                bg-[#FFD600] text-[#0C1A47] 
                px-6 py-4 rounded-xl 
                font-bold text-lg
                hover:bg-white transition-colors duration-300
                relative z-10
              "
            >
              <span>Book Aegean Taxi</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER: PASSENGER GUIDE (Adds ~400 words) --- */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Passenger's Guide to Taxis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Column 1: Meters & Payments */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-[#FFD600]" />
                  Meters & Payments
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In Greece, official taxis are required by law to use a
                  taximeter within city limits. However, at airports, specific
                  flat rates may apply to the city center (e.g., Athens Airport
                  to Syntagma). Always ask the driver for an estimated fare
                  before entering the vehicle. While card terminals (POS) are
                  mandatory, many drivers may claim they are "out of order," so
                  carrying cash is advisable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD600]" />
                  Night Tariffs
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Be aware that a double tariff (Tariff 2) applies between
                  midnight and 05:00 AM. During these hours, the cost per
                  kilometer increases significantly. Additionally, there are
                  standard surcharges for airport pickups, luggage weighing over
                  10kg, and port connections. Pre-booked transfers usually
                  include these costs in the final price, avoiding surprises.
                </p>
              </div>
            </div>

            {/* Column 2: Safety & Queues */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Avoiding Scams
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Official taxis will always be lined up at the designated rank.
                  Avoid individuals approaching you inside the arrivals hall
                  offering "cheap rides" or "direct shuttles." These are often
                  unlicensed illegal operators without insurance. Stick to the
                  official queue or your pre-booked driver holding a name sign.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#FFD600]" />
                  Peak Season Queues
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  During July and August, the number of arriving passengers
                  often exceeds the number of available taxis on islands like
                  Mykonos and Santorini. Waiting times at the rank can exceed 45
                  minutes under the hot sun. If you have not pre-booked a ride,
                  consider checking if the public bus is departing soon as an
                  alternative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
