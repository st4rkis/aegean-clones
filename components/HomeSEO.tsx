"use client";

import { useAirport } from "@/context/AirportContext";
import { ShieldCheck, Wifi, MapPin, HelpCircle } from "lucide-react";

// --- VARIATION ENGINE (SAFETY PATCHED) ---
const SEO_CONTENT_VARIATIONS = [
  // VARIATION 1
  {
    header: "Terminal Procedures",
    securityTitle: "Security Standards",
    securityText: (name: string) =>
      `${name} operates in compliance with EU aviation security regulations. Screening checkpoints may experience varying throughput. We advise all travelers to review the latest regulatory information regarding prohibited items.`,

    wifiTitle: "Digital Network",
    wifiText:
      "The terminal provides WiFi connectivity in public zones. Passengers should authenticate via the available portal to access digital tools and airline applications.",

    transportTitle: "Ground Logistics",
    transportText:
      "The transport interface is located outside the Arrivals exit. Taxis are generally available during operational hours. For guaranteed availability, pre-booked transfers are recommended.",

    faqCheckin:
      "Check-in counters open according to airline schedules. Please consult your carrier for specific drop-off times.",
    faqParking:
      "Parking facilities are available near the terminal. Capacity varies by season; drop-off zones are recommended for quick stops.",
    faqMobility:
      "Assistance is available for passengers with reduced mobility. Please notify your airline 48 hours in advance.",
    faqTracking:
      "Real-time screens located in the terminal display live updates for all scheduled arrivals and departures.",
  },

  // VARIATION 2
  {
    header: "Passenger Facilities",
    securityTitle: "Screening Protocols",
    securityText: (name: string) =>
      `To ensure safety at ${name}, passengers undergo standard screening. Please divest metal items and liquids. Specialized assistance is available for mobility-impaired travelers requiring support.`,

    wifiTitle: "Connectivity",
    wifiText:
      "Stay connected with the terminal WiFi network. Connect your device to unlock access for work or leisure while waiting for your flight.",

    transportTitle: "Onward Travel",
    transportText:
      "Upon exiting the baggage reclaim hall, travelers will find the taxi rank and bus connections (where applicable). Car rental agencies are situated nearby.",

    faqCheckin:
      "We recommend arriving at the terminal well in advance of your scheduled departure time to ensure adequate processing.",
    faqParking:
      "Designated parking areas are provided. During peak season, alternative transport is suggested to avoid congestion.",
    faqMobility:
      "The terminal infrastructure supports accessibility. Ramps and dedicated facilities are provided for passengers with specific needs.",
    faqTracking:
      "Passengers can monitor the status of their aircraft via the information displays. Data regarding gate changes is updated instantly.",
  },

  // VARIATION 3
  {
    header: "Operational Logistics",
    securityTitle: "Safety Measures",
    securityText: (name: string) =>
      `Security processing at ${name} is optimized for efficiency. Passengers are advised to have boarding passes and identification ready. Electronic devices must be removed from hand luggage for scanning.`,

    wifiTitle: "Internet Access",
    wifiText:
      "Wireless internet is provided within the facility. Users can connect in both Arrivals and Departures halls to monitor live flight status updates.",

    transportTitle: "Transport Hub",
    transportText:
      "The ground transportation area facilitates taxi services and shuttle connections. Official tariff information is typically displayed at the station.",

    faqCheckin:
      "Baggage acceptance desks close strictly before departure. Late arrival may result in denied boarding as per airline policy.",
    faqParking:
      "Short-term parking zones are located adjacent to the terminal for convenient pick-up and drop-off.",
    faqMobility:
      "Wheelchair assistance must be pre-arranged through your carrier. Personnel will assist you from check-in to the aircraft.",
    faqTracking:
      "Live telemetry for all inbound and outbound traffic is visible on concourse screens.",
  },

  // VARIATION 4
  {
    header: "Terminal Guide",
    securityTitle: "Control Points",
    securityText: (name: string) =>
      `Access to the airside zone at ${name} is controlled via centralized security checkpoints. Peak operational windows may result in queues; please plan your arrival accordingly.`,

    wifiTitle: "WiFi Service",
    wifiText:
      "Public WiFi is enabled across the terminal infrastructure. Users must simply accept the terms of service to connect.",

    transportTitle: "City Connections",
    transportText:
      "Connectivity to the city is provided via the adjacent transport plaza. Options include taxis, pre-arranged shuttles, and rental car pick-up zones.",

    faqCheckin:
      "Please consult the flight information screens for your specific check-in counter assignment upon entering the departure hall.",
    faqParking:
      "Public parking is available on a first-come, first-served basis. We advise passengers to allow extra time during high season.",
    faqMobility:
      "The airport facilitates travel for all. Assistance points are available for those requiring help reaching check-in.",
    faqTracking:
      "Up-to-the-minute data on aircraft movements is broadcast on terminal displays.",
  },
];

export default function HomeSEO() {
  const airport = useAirport();
  const name = airport?.name || "The Airport";
  const code = airport?.key || "JMK";

  const codeSum = code
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const content =
    SEO_CONTENT_VARIATIONS[codeSum % SEO_CONTENT_VARIATIONS.length];

  return (
    <section className="bg-[#0C1A47] text-white py-20 mt-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#FFD600] font-bold tracking-widest uppercase text-sm mb-2 block">
            {content.header}
          </span>
          <h2 className="text-3xl font-bold">
            Terminal Procedures & Facilities
          </h2>
        </div>

        {/* FACILITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#FFD600] rounded-xl flex items-center justify-center text-[#0C1A47] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{content.securityTitle}</h3>
            <p className="text-blue-200 leading-relaxed text-sm">
              {content.securityText(name)}
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#FFD600] rounded-xl flex items-center justify-center text-[#0C1A47] mb-6">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{content.wifiTitle}</h3>
            <p className="text-blue-200 leading-relaxed text-sm">
              {content.wifiText}
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#FFD600] rounded-xl flex items-center justify-center text-[#0C1A47] mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{content.transportTitle}</h3>
            <p className="text-blue-200 leading-relaxed text-sm">
              {content.transportText}
            </p>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white/5 rounded-[2.5rem] p-8 md:p-12 border border-white/10">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#FFD600]" />
            Operational FAQs
          </h3>
          <div className="space-y-8">
            {/* Check-in */}
            <div>
              <h4 className="font-bold text-lg text-white mb-2">
                Check-in Requirements
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                {content.faqCheckin}
              </p>
            </div>
            <div className="w-full h-px bg-white/10" />

            {/* Flight Tracking */}
            <div>
              <h4 className="font-bold text-lg text-white mb-2">
                Live Flight Updates
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                {content.faqTracking}
              </p>
            </div>
            <div className="w-full h-px bg-white/10" />

            {/* Parking */}
            <div>
              <h4 className="font-bold text-lg text-white mb-2">
                Terminal Parking
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                {content.faqParking}
              </p>
            </div>
            <div className="w-full h-px bg-white/10" />

            {/* Mobility */}
            <div>
              <h4 className="font-bold text-lg text-white mb-2">
                Special Assistance
              </h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                {content.faqMobility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
