"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import {
  Search,
  Plane,
  Building2,
  Phone,
  HelpCircle,
  ArrowRight,
  FileText,
  AlertCircle,
  ShieldAlert,
  Clock,
} from "lucide-react";

// --- REAL WORLD LOST & FOUND DATA (UNTOUCHED) ---
const LOST_FOUND_DATA: Record<
  string,
  {
    regionName: string;
    policePhone: string;
    handlers: { name: string; phone: string }[];
    bookingLink: string;
  }
> = {
  JMK: {
    regionName: "Mykonos",
    policePhone: "+30 22890 22482",
    handlers: [
      { name: "Skyserv", phone: "+30 22890 79000" },
      { name: "Goldair", phone: "+30 22890 22327" },
    ],
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  ATH: {
    regionName: "Athens",
    policePhone: "+30 210 3536919",
    handlers: [
      { name: "Skyserv", phone: "+30 210 3530560" },
      { name: "Goldair", phone: "+30 210 3530500" },
      { name: "Swissport", phone: "+30 210 3530700" },
    ],
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  JTR: {
    regionName: "Santorini",
    policePhone: "+30 22860 28451",
    handlers: [
      { name: "Skyserv", phone: "+30 22860 28400" },
      { name: "Goldair", phone: "+30 22860 30670" },
    ],
    bookingLink: "https://www.aegeantaxi.com/santorini",
  },
  HER: {
    regionName: "Heraklion",
    policePhone: "+30 2810 246720",
    handlers: [
      { name: "Skyserv", phone: "+30 2810 397375" },
      { name: "Goldair", phone: "+30 2810 337222" },
      { name: "Swissport", phone: "+30 2810 397440" },
    ],
    bookingLink: "https://www.aegeantaxi.com/crete",
  },
  RHO: {
    regionName: "Rhodes",
    policePhone: "+30 22410 88723",
    handlers: [
      { name: "Skyserv", phone: "+30 22410 83264" },
      { name: "Goldair", phone: "+30 22410 82221" },
    ],
    bookingLink: "https://www.aegeantaxi.com/rhodes",
  },
  CFU: {
    regionName: "Corfu",
    policePhone: "+30 26610 89603",
    handlers: [
      { name: "Skyserv", phone: "+30 26610 33413" },
      { name: "Goldair", phone: "+30 26610 39500" },
    ],
    bookingLink: "https://www.aegeantaxi.com/corfu",
  },
  EFL: {
    regionName: "Kefalonia",
    policePhone: "+30 26710 29870",
    handlers: [
      { name: "Skyserv", phone: "+30 26710 41511" },
      { name: "Goldair", phone: "+30 26710 29900" },
    ],
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
  },
  SKG: {
    regionName: "Thessaloniki",
    policePhone: "+30 2310 985156",
    handlers: [
      { name: "Skyserv", phone: "+30 2310 985222" },
      { name: "Goldair", phone: "+30 2310 489090" },
    ],
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
  },
  ZTH: {
    regionName: "Zakynthos",
    policePhone: "+30 26950 29530",
    handlers: [
      { name: "Skyserv", phone: "+30 26950 29500" },
      { name: "Goldair", phone: "+30 26950 25250" },
    ],
    bookingLink: "https://www.aegeantaxi.com/zakynthos",
  },
  KGS: {
    regionName: "Kos",
    policePhone: "+30 22420 56062",
    handlers: [
      { name: "Skyserv", phone: "+30 22420 56220" },
      { name: "Goldair", phone: "+30 22420 56121" },
    ],
    bookingLink: "https://www.aegeantaxi.com/kos",
  },
  PAS: {
    regionName: "Paros",
    policePhone: "+30 22840 91221",
    handlers: [{ name: "Airport Info", phone: "+30 22840 90510" }],
    bookingLink: "https://www.aegeantaxi.com/paros",
  },
  JNX: {
    regionName: "Naxos",
    policePhone: "+30 22850 22100",
    handlers: [{ name: "Airport Info", phone: "+30 22850 23969" }],
    bookingLink: "https://www.aegeantaxi.com/naxos",
  },
  MLO: {
    regionName: "Milos",
    policePhone: "+30 22870 21378",
    handlers: [{ name: "Airport Info", phone: "+30 22870 28410" }],
    bookingLink: "https://www.aegeantaxi.com/milos",
  },
  BJV: {
    regionName: "Bodrum",
    policePhone: "+90 252 511 1000",
    handlers: [
      { name: "TGS", phone: "+90 252 511 1000" },
      { name: "Havas", phone: "+90 444 0 487" },
    ],
    bookingLink: "https://www.aegeantaxi.com",
  },
  DEFAULT: {
    regionName: "the airport",
    policePhone: "",
    handlers: [],
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function LostFoundClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const name = airport?.name || "The Airport";
  const info = LOST_FOUND_DATA[code] || LOST_FOUND_DATA["DEFAULT"];

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Search className="w-5 h-5" />
            <span>Help & Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Lost & Found — <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airport?.name || "Airport"} ({code})
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            Quick contacts to help you retrieve lost items. Report issues early,
            as turnover in {info.regionName} is fast.
          </h2>
        </div>
      </div>

      {/* --- INTRO: UNDERSTANDING JURISDICTION (Adds ~200 words) --- */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-1.5 bg-[#0C1A47] mb-8 mx-auto rounded-full" />
        <h3 className="text-3xl font-bold text-[#0C1A47] mb-6">
          Understanding the Recovery Process
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The recovery of lost property within the terminal infrastructure
          follows a strict chain of custody that depends entirely on where the
          item was misplaced. It is crucial for passengers to distinguish
          between the jurisdiction of the airline handling agents and the
          airport facility management. Items left on the aircraft or during the
          check-in process are legally the responsibility of the airline and
          their ground partners (e.g., Goldair, Skyserv). The airport
          administration does not have access to these items.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Conversely, items lost in public areas such as security checkpoints,
          restrooms, or waiting lounges are handed over to the Airport Police or
          the central Information Desk. Identifying the correct department
          before making contact will significantly expedite your search and
          prevent unnecessary delays.
        </p>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Aircraft Issues */}
          <div className="bg-linear-to-br from-[#1B3168] to-[#12224A] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                On the Aircraft?
              </h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Items left onboard are handled by the airline's ground partner.
              Contact them directly:
            </p>
            {info.handlers.length > 0 && (
              <div className="space-y-3">
                {info.handlers.map((handler, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                  >
                    <span className="font-bold text-white">{handler.name}</span>
                    <a
                      href={`tel:${handler.phone}`}
                      className="flex items-center gap-2 text-[#FFD600] hover:text-white font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {handler.phone}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 2: Terminal Issues */}
          <div className="bg-linear-to-br from-[#5E2C91] to-[#3F1D65] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                In the Terminal?
              </h3>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed mb-6">
              For items lost at security, gates, or restrooms, contact the
              Airport Police or Info Desk.
            </p>
            {info.policePhone && (
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#FFD600] uppercase tracking-widest mb-2">
                  Airport Police / Info
                </p>
                <a
                  href={`tel:${info.policePhone}`}
                  className="flex items-center gap-3 text-2xl font-bold text-white hover:text-[#FFD600] transition-colors"
                >
                  <Phone className="w-6 h-6 text-[#FFD600]" />
                  {info.policePhone}
                </a>
              </div>
            )}
          </div>

          {/* Card 3: What to Provide */}
          <div className="bg-linear-to-br from-[#1E293B] to-[#0F172A] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Helpful Details</h3>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              To speed up the process, have these ready:
            </p>
            <ul className="space-y-3">
              {[
                "Date & approximate time",
                "Exact location (Gate, Security, etc.)",
                "Item description (Color, Brand)",
                "Serial number (for electronics)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD600] shrink-0 shadow-[0_0_8px_rgba(255,214,0,0.6)]" />
                  <span className="text-gray-200 font-medium text-lg leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: CTA */}
          <div className="bg-[#FFD600] rounded-[2.5rem] p-10 text-[#0C1A47] shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-[#0C1A47]/10 p-3 rounded-full text-[#0C1A47]">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Need a Ride?</h3>
              </div>
              <p className="text-[#0C1A47]/80 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                While you sort things out, don't get stuck at the airport.
                Pre-book a reliable transfer to your hotel or port.
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

      {/* --- FOOTER: PROCEDURES & GUIDELINES (Adds ~400 words) --- */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Procedures & Regulations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Lost Passports & ID
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Identity documents such as passports, national ID cards, and
                  driver's licenses found within the terminal are strictly
                  handled by the Airport Police Directorate. For security
                  reasons, these items are often not kept at the general Lost &
                  Found desk but are processed directly by law enforcement. If
                  you have lost a passport, your first point of contact should
                  be the on-site police station rather than the handling agents.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Retention Periods
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Facilities have limited storage capacity. Perishable items
                  (food) are disposed of immediately for health and safety
                  reasons. Low-value items (clothing, pillows) are typically
                  held for a period of 30 days. High-value items (electronics,
                  jewelry) may be retained for up to 3 months before being
                  transferred to central storage or auctioned according to local
                  regulations. Contacting the authorities within the first 48
                  hours is vital for successful retrieval.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3">
                  Unclaimed Baggage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  It is a common misconception that the airport manages lost
                  suitcases. Checked luggage is the sole responsibility of the
                  airline. If your bag did not arrive on the carousel, you must
                  file a Property Irregularity Report (PIR) at the Lost Luggage
                  counter in the Arrivals hall before leaving the airport. The
                  airport administration cannot track or locate checked baggage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3">
                  Shipping & Third-Party Collection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most regional airports do not offer shipping services for
                  found items. You will likely need to arrange for a courier
                  service to collect the item on your behalf or authorize a
                  representative to pick it up. This authorization usually
                  requires a signed letter and a copy of your identification.
                  Verify the specific collection requirements with the holding
                  agent before sending a courier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
