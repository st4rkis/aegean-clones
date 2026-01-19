"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import {
  Wifi,
  CreditCard,
  Briefcase,
  ArrowRight,
  Zap,
  Car,
  CheckCircle2,
  Globe,
  Smartphone,
  HeartPulse,
  Banknote,
} from "lucide-react";

// --- DYNAMIC SERVICES DATA (UNCHANGED) ---
const SERVICES_DATA: Record<
  string,
  {
    regionName: string;
    wifiInfo: string;
    atmInfo: string;
    baggageInfo: string;
    bookingLink: string;
  }
> = {
  // Mykonos (JMK)
  JMK: {
    regionName: "Mykonos",
    wifiInfo:
      "Free Wi-Fi (Fraport Network) is available throughout the terminal. Charging points are limited, so a power bank is a smart idea if you’re traveling in summer.",
    atmInfo:
      "ATMs (Euronet/Piraeus) are located in the Arrivals hall and Airside. Taxis often prefer cash, though most island vendors now accept cards.",
    baggageInfo:
      "For lost/delayed baggage, go straight to the Skyserv/Goldair desk in Arrivals. For special assistance, request it via your airline 48h before travel.",
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  // Athens (ATH)
  ATH: {
    regionName: "Athens",
    wifiInfo:
      "Select the 'ATH Free Wi-Fi' network for unlimited free access. Charging stations are plentiful in the Departures areas.",
    atmInfo:
      "ATMs from major banks (Alpha, Eurobank, Piraeus, NBG) are available in Arrivals and Departures. Currency exchange desks are open 24/7.",
    baggageInfo:
      "Baggage tracing offices are located in the Baggage Reclaim area. Porters are also available (paid service) to help with luggage.",
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  // Santorini (JTR)
  JTR: {
    regionName: "Santorini",
    wifiInfo:
      "Free Wi-Fi is available via the Fraport network. Signal can be congested during peak flight waves in July/August.",
    atmInfo:
      "ATMs are available in the public area and airside. It is highly recommended to carry some cash for small purchases in villages.",
    baggageInfo:
      "Lost luggage counters are in the Arrivals hall. Space is tight, so report missing bags immediately before leaving the secure area.",
    bookingLink: "https://www.aegeantaxi.com/santorini",
  },
  // Heraklion (HER)
  HER: {
    regionName: "Heraklion",
    wifiInfo:
      "Free Wi-Fi is available. The terminal gets very crowded, so connection speeds may vary.",
    atmInfo:
      "Multiple ATMs are located in the Arrivals hall. Currency exchange is also available near the baggage claim exit.",
    baggageInfo:
      "Baggage services are handled by Goldair/Skyserv/Swissport. Look for their counters in the Baggage Reclaim hall.",
    bookingLink: "https://www.aegeantaxi.com/crete",
  },
  // Corfu (CFU)
  CFU: {
    regionName: "Corfu",
    wifiInfo:
      "Connect to 'Fraport Free Wi-Fi'. Mobile data reception is generally good throughout the airport.",
    atmInfo:
      "ATMs are located in the Arrivals hall (Landside) and Departures (Airside).",
    baggageInfo:
      "The baggage reclaim hall has dedicated desks for lost property. Check the monitors to see which handler serves your flight.",
    bookingLink: "https://www.aegeantaxi.com/corfu",
  },
  // Kefalonia (EFL)
  EFL: {
    regionName: "Kefalonia",
    wifiInfo:
      "Unlimited free Wi-Fi is available via the 'Fraport Free Wi-Fi' network throughout the terminal.",
    atmInfo:
      "ATMs (Euronet/Eurobank) are located in the Check-in area and Arrivals. Having cash is useful for small tavernas across the island.",
    baggageInfo:
      "Baggage issues are handled by Skyserv or Goldair. Their desks are located immediately within the Baggage Reclaim area.",
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
  },
  // Rhodes (RHO)
  RHO: {
    regionName: "Rhodes",
    wifiInfo:
      "Free unlimited Wi-Fi is available. Charging spots can be found near the boarding gates.",
    atmInfo:
      "ATMs from Piraeus Bank and Euronet are available landside and airside.",
    baggageInfo:
      "For missing items, visit the Lost & Found office in Arrivals. Lockers for luggage storage are not available at the airport.",
    bookingLink: "https://www.aegeantaxi.com/rhodes",
  },
  // Thessaloniki (SKG)
  SKG: {
    regionName: "Thessaloniki",
    wifiInfo:
      "High-speed free Wi-Fi is available throughout the renovated terminal.",
    atmInfo:
      "A wide range of ATMs and a currency exchange office are available in the Arrivals area.",
    baggageInfo:
      "Baggage tracing is located in the Arrivals hall. For left luggage (storage), verify availability at the info desk.",
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
  },
  // Paros (PAS)
  PAS: {
    regionName: "Paros",
    wifiInfo:
      "Basic free Wi-Fi is available. The terminal is small, so coverage is consistent.",
    atmInfo:
      "There is one ATM located in the Arrivals area. It is wise to have cash before heading to remote beaches.",
    baggageInfo:
      "Baggage claim is a single belt. If your bag is missing, speak to the ground staff immediately in the small arrivals hall.",
    bookingLink: "https://www.aegeantaxi.com/paros",
  },
  // Naxos (JNX)
  JNX: {
    regionName: "Naxos",
    wifiInfo:
      "Wi-Fi availability is intermittent. It is best to rely on your mobile data.",
    atmInfo: "An ATM is usually available outside the terminal building.",
    baggageInfo:
      "The airport is tiny. Lost baggage issues are handled directly by the airport operations staff on site.",
    bookingLink: "https://www.aegeantaxi.com/naxos",
  },
  // Zakynthos (ZTH)
  ZTH: {
    regionName: "Zakynthos",
    wifiInfo:
      "Free Wi-Fi is available. Charging points are scarce in the older parts of the terminal.",
    atmInfo:
      "ATMs are available in the Arrivals. Taxis to Laganas/Zante Town generally accept cash.",
    baggageInfo:
      "Lost property desks are in the Arrivals hall. turnover is fast in summer, so report issues immediately.",
    bookingLink: "https://www.aegeantaxi.com/zakynthos",
  },
  // Kos (KGS)
  KGS: {
    regionName: "Kos",
    wifiInfo:
      "Fraport Free Wi-Fi is available. Several charging spots are located near the departure gates.",
    atmInfo:
      "ATMs are located in the check-in area and arrivals. Currency exchange is seasonal.",
    baggageInfo:
      "Baggage services are located in the reclaim area. Check your airline's handling agent logo for the correct desk.",
    bookingLink: "https://www.aegeantaxi.com/kos",
  },
  // Milos (MLO)
  MLO: {
    regionName: "Milos",
    wifiInfo:
      "Wi-Fi is limited. Do not rely on it for video calls or heavy downloads.",
    atmInfo:
      "There is limited ATM availability. It is highly recommended to bring cash for taxis and small shops.",
    baggageInfo:
      "Baggage is handed out by hand or on a small belt. Report issues directly to the airport staff visible in the room.",
    bookingLink: "https://www.aegeantaxi.com/milos",
  },
  // Bodrum (BJV)
  BJV: {
    regionName: "Bodrum",
    wifiInfo:
      "Free Wi-Fi is available (often requires SMS verification). Charging kiosks are available.",
    atmInfo:
      "Multiple ATMs and currency exchange offices (Döviz) are available in International Arrivals.",
    baggageInfo:
      "Lost luggage offices for Havas and TGS are located in the baggage reclaim hall.",
    bookingLink: "https://www.aegeantaxi.com",
  },
  // Fallback
  DEFAULT: {
    regionName: "the area",
    wifiInfo:
      "Free Wi-Fi is typically available. Charging points may be limited.",
    atmInfo:
      "ATMs are available in the terminal. Having some cash is recommended for local transport.",
    baggageInfo:
      "For lost/delayed baggage, go straight to your airline/handling desk in Arrivals.",
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function ServicesClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = SERVICES_DATA[code] || SERVICES_DATA["DEFAULT"];

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Zap className="w-5 h-5" />
            <span>Passenger Amenities</span>
          </div>

          {/* SEO FIX: H1 now explicitly mentions "Services", "Facilities", and "Amenities" */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Airport Services <span className="text-white/40">&</span> Facilities
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              at {airport?.name || "Airport"} ({code})
            </span>
          </h1>

          {/* SEO FIX: Subtitle reinforces the content map */}
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            A complete guide to essential amenities including Wi-Fi, ATMs,
            Baggage Services, and passenger assistance.
          </h2>
        </div>
      </div>

      {/* --- INTRO: TERMINAL ECOLOGY --- */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="w-16 h-1.5 bg-[#0C1A47] mb-8 mx-auto rounded-full" />
        <h3 className="text-3xl font-bold text-[#0C1A47] mb-6">
          Understanding Terminal Services
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The passenger experience at {airport?.name} relies on a network of
          integrated services designed to ensure comfort and efficiency. The
          facility operates with two distinct zones: the landside area (before
          security), which is open to the public and houses ticket counters and
          meeting points; and the airside zone (after security), which contains
          duty-free shopping, dining, and boarding gates.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          While major hubs like Athens offer extensive amenities resembling a
          shopping mall, regional island airports often focus on the essentials.
          Understanding what is available before you arrive—such as whether you
          can withdraw cash or charge your phone—can significantly reduce travel
          stress, especially during the peak summer season.
        </p>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: WiFi */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Wi‑Fi & Charging
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.wifiInfo}
            </p>
          </div>

          {/* Card 2: ATMs */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                ATMs & Finance
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.atmInfo}
            </p>
          </div>

          {/* Card 3: Baggage */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Baggage Help
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.baggageInfo}
            </p>
          </div>

          {/* Card 4: CTA */}
          <div className="bg-[#0C1A47] rounded-[2.5rem] p-10 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-white/10 p-3 rounded-full text-[#FFD600]">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Smooth Arrival?
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                If you’re landing during peak hours, queues for taxis can be
                long. Pre‑booking a transfer is the easiest way to reach{" "}
                {info.regionName}.
              </p>
              <div className="flex items-center gap-2 text-[#FFD600] font-medium mb-8 relative z-10">
                <CheckCircle2 className="w-5 h-5" />
                <span>Skip the taxi queue</span>
              </div>
            </div>
            <a
              href={info.bookingLink}
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-between bg-[#FFD600] text-[#0C1A47] px-6 py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors duration-300 relative z-10"
            >
              <span>Book Aegean Taxi</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER: TRAVELER'S TOOLKIT --- */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Traveler's Toolkit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Column 1: Digital & Health */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#FFD600]" />
                  Digital Connectivity
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  While most airports offer free public Wi-Fi, the connection
                  process often requires authentication via an SMS code. If your
                  mobile plan does not include roaming in the EU/Turkey, you may
                  struggle to receive this message. It is advisable to
                  screenshot important documents (boarding passes, hotel
                  bookings) before arriving at the terminal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-[#FFD600]" />
                  Health & First Aid
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  First aid stations are mandatory in all international
                  terminals and are equipped to handle minor medical
                  emergencies. However, they are not full clinics. For
                  prescription medications, ensure you carry a sufficient supply
                  in your carry-on luggage, along with a copy of your
                  prescription to avoid issues at security or customs.
                </p>
              </div>
            </div>

            {/* Column 2: Finance & Logistics */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-[#FFD600]" />
                  Financial Logistics
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Greece and the EU rely heavily on electronic payments, but
                  cash remains essential for specific transactions. Many public
                  bus operators and older taxi meters still require cash
                  payment. ATMs are plentiful in the arrivals hall, but exchange
                  rates at airport bureaus can be unfavorable. We recommend
                  withdrawing Euros from a bank ATM rather than using currency
                  exchange desks if possible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#FFD600]" />
                  Lost & Found Protocol
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  If you lose personal property within the terminal (e.g.,
                  leaving a phone at security), this is handled by the Airport
                  Police or the central Airport Info desk. However, if your
                  checked luggage fails to arrive on the carousel, this is an
                  airline responsibility. You must file a Property Irregularity
                  Report (PIR) with the ground handler (Goldair/Skyserv) before
                  leaving the baggage hall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
