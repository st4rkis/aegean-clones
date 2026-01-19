"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import {
  Bus,
  MapPin,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Car,
  Ticket,
  Clock,
  Briefcase,
  AlertTriangle,
} from "lucide-react";

// --- DYNAMIC BUS DATA (UNTOUCHED) ---
const BUS_DATA: Record<
  string,
  { description: string; routeInfo: string; bookingLink: string }
> = {
  // Mykonos
  JMK: {
    description:
      "Mykonos has seasonal KTEL bus links. It is a budget option, but queues can be long during peak summer.",
    routeInfo:
      "Buses connect the airport primarily with the Fabrika or Old Port stations in Mykonos Town (Chora). From there, you can transfer to beaches like Paradise or Super Paradise.",
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  // Athens
  ATH: {
    description:
      "Athens Airport is well-connected by Express Buses (X93, X95, X96, X97) operating 24/7.",
    routeInfo:
      "The most popular route is the X95 to Syntagma Square (City Center) and the X96 to Piraeus Port. Tickets must be purchased from kiosks before boarding.",
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  // Santorini
  JTR: {
    description:
      "Santorini public buses (KTEL) are the main budget transport, though they can get extremely crowded.",
    routeInfo:
      "All airport buses go directly to the central station in Fira. To go anywhere else (Oia, Kamari, Perissa), you must change buses in Fira.",
    bookingLink: "https://www.aegeantaxi.com/santorini",
  },
  // Heraklion
  HER: {
    description:
      "Heraklion city buses serve the airport frequently, offering a cheap way to reach the city center.",
    routeInfo:
      "Blue city buses run from the airport to Eleftherias Square and the KTEL bus station near the port.",
    bookingLink: "https://www.aegeantaxi.com/crete",
  },
  // Corfu
  CFU: {
    description:
      "The Blue Bus No. 15 connects Corfu Airport with the city center and the port.",
    routeInfo:
      "The bus stop is just outside arrivals. It takes you to San Rocco Square in Corfu Town or the Intercity Bus Station (Green Buses).",
    bookingLink: "https://www.aegeantaxi.com/corfu",
  },
  // Kefalonia (EFL)
  EFL: {
    description:
      "KTEL Kefalonia operates a bus service connecting the airport with Argostoli, the island's capital.",
    routeInfo:
      "The bus stop is located directly outside the terminal. The route goes to the main bus station in Argostoli, where you can transfer to other towns like Skala or Sami.",
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
  },
  // Rhodes
  RHO: {
    description:
      "Public buses connect Diagoras Airport with Rhodes Town and other resorts on the west coast.",
    routeInfo:
      "The bus stop is located roughly 300m from the terminal. Services run frequently to the main Rimini Square station in Rhodes Town.",
    bookingLink: "https://www.aegeantaxi.com/rhodes",
  },
  // Thessaloniki
  SKG: {
    description:
      "OASTH buses connect Macedonia Airport with the city center and the railway station.",
    routeInfo:
      "Line 01X (or 01N at night) runs directly to the city center (Aristotelous) and the Macedonia Intercity Bus Station (KTEL).",
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
  },
  // Paros
  PAS: {
    description:
      "Paros KTEL buses link the airport to the main port of Parikia.",
    routeInfo:
      "The bus runs to Parikia. If you are heading to Naoussa or other villages, you usually need to transfer at the main station in Parikia.",
    bookingLink: "https://www.aegeantaxi.com/paros",
  },
  // Naxos
  JNX: {
    description:
      "Naxos has a local bus service connecting the airport to Naxos Town (Chora) and the beaches.",
    routeInfo:
      "The bus stop is just outside the gate. Routes go to Chora (Port) and popular beaches like Agia Anna and Plaka.",
    bookingLink: "https://www.aegeantaxi.com/naxos",
  },
  // Zakynthos
  ZTH: {
    description:
      "Public transport from Zakynthos airport is limited compared to other islands.",
    routeInfo:
      "There is a bus connection to Zakynthos Town bus station, but frequencies can be low. Check the schedule upon arrival.",
    bookingLink: "https://www.aegeantaxi.com/zakynthos",
  },
  // Kos
  KGS: {
    description:
      "KTEL Kos connects the airport to Kos Town, Mastichari, and Kardamena.",
    routeInfo:
      "The bus stop is located outside the terminal. The main route heads to the central bus station in Kos Town.",
    bookingLink: "https://www.aegeantaxi.com/kos",
  },
  // Milos
  MLO: {
    description:
      "Milos has a small bus network connecting the airport to Adamas (the port).",
    routeInfo:
      "Buses run from the airport to Adamas. From there, you can connect to Plaka, Pollonia, and Paliochori.",
    bookingLink: "https://www.aegeantaxi.com/milos",
  },
  // Bodrum (BJV)
  BJV: {
    description:
      "MUTTAS and HAVAS shuttle buses connect Milas-Bodrum Airport to the city center.",
    routeInfo:
      "Shuttles run to the Bodrum Bus Terminal (Otogar) generally timed with domestic flight arrivals.",
    bookingLink: "https://www.aegeantaxi.com",
  },

  // Default Fallback
  DEFAULT: {
    description:
      "Public transport options may be available depending on the season.",
    routeInfo:
      "Look for the designated public bus stop outside the arrivals hall. Schedules often align with flight arrivals.",
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function BusClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = BUS_DATA[code] || BUS_DATA["DEFAULT"];

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Bus className="w-5 h-5" />
            <span>Public Transport</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Bus Services — <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airport?.name || "Airport"} ({code})
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            {info.description}
          </h2>
        </div>
      </div>

      {/* --- INTRO: THE REALITY OF BUS TRAVEL (Adds ~200 words) --- */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-1.5 bg-[#0C1A47] mb-8 mx-auto rounded-full" />
        <h3 className="text-3xl font-bold text-[#0C1A47] mb-6">
          Understanding the Network
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Public transportation in this region is primarily served by the KTEL
          network (for Greece) or municipal shuttles. While this is often the
          most economical method to reach the city center or port, travelers
          should be aware that service frequency varies significantly between
          the high summer season and the winter months. The infrastructure is
          designed to handle mass transit, meaning buses are large coaches
          capable of storing heavy luggage in the underbelly compartments.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          However, these services operate on fixed schedules that may not always
          align perfectly with late-night flight arrivals. It is essential to
          check the latest timetable posted at the station upon arrival, as
          online schedules can sometimes be outdated or subject to last-minute
          operational changes.
        </p>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-[#1B3168] to-[#12224A] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">How it Works</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              {info.routeInfo}
            </p>
          </div>

          {/* Card 2: Pros */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                When it's Great
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "You’re traveling light (carry-on)",
                "You don’t mind waiting for schedule",
                "You’re staying near the central bus hub",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C1A47]/40 shrink-0" />
                  <span className="text-[#0C1A47]/80 font-medium text-lg leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Cons */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                When to Avoid
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Late-night arrivals (service stops)",
                "Large luggage or kids",
                "Direct hotel/villa transfers needed",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C1A47]/40 shrink-0" />
                  <span className="text-[#0C1A47]/80 font-medium text-lg leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: CTA */}
          <div className="bg-[#FFD600] rounded-[2.5rem] p-10 text-[#0C1A47] shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10 blur-2xl" />
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-[#0C1A47]/10 p-3 rounded-full text-[#0C1A47]">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Door-to-Door?</h3>
              </div>
              <p className="text-[#0C1A47]/80 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                Skip the bus transfer. A pre-booked ride gets you straight to
                your accommodation or the port without changing vehicles.
              </p>
            </div>
            <a
              href={info.bookingLink}
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-between bg-[#0C1A47] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#1E2C79] transition-colors duration-300 relative z-10"
            >
              <span>Book Aegean Taxi</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER: LOGISTICS & TIPS (Adds ~400 words) --- */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <Ticket className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Essential Travel Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Tickets & Payment */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-[#FFD600]" />
                  Ticketing Rules
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  For most regional bus services, tickets are purchased directly
                  from the driver upon boarding. It is highly recommended to
                  carry cash, specifically small notes (5 or 10 Euro), as card
                  terminals on buses are often unavailable or unreliable due to
                  connectivity issues. In larger hubs like Athens or
                  Thessaloniki, you must purchase tickets from kiosks or metro
                  stations <em>before</em> boarding and validate them
                  immediately inside the vehicle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#FFD600]" />
                  Luggage Handling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Standard bus coaches have ample storage in the lower
                  compartments for large suitcases. You are generally expected
                  to load your own bags. Keep valuable items, electronics, and
                  travel documents in a smaller carry-on bag with you in the
                  cabin. Unlike private transfers, the driver is not responsible
                  for loading your luggage, though they will open the bays for
                  you.
                </p>
              </div>
            </div>

            {/* Schedules & Strikes */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD600]" />
                  Seasonal Frequency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bus frequencies are heavily dependent on the tourist season.
                  From May to September, services are frequent to align with the
                  high volume of flights. However, in the shoulder season
                  (April/October) and winter, routes may be reduced
                  significantly or operate on a "school schedule" basis. Always
                  have a backup plan if you are arriving late in the evening or
                  during the off-peak months.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Strikes & Delays
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Public transport strikes can occur, sometimes with short
                  notice. In such events, the bus service may be suspended
                  entirely for 24 hours. During peak summer traffic, buses are
                  also subject to the same congestion as cars, meaning the
                  scheduled travel time to the port or city center should be
                  treated as an estimate rather than a guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
