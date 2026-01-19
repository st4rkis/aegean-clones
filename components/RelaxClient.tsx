"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  ArrowLeft,
  Coffee,
  Sofa,
  Zap,
  Moon,
  Sparkles,
  ArrowRight,
  CreditCard,
  Wifi,
  Ticket,
  Armchair,
} from "lucide-react";

// --- DYNAMIC RELAX DATA (UNCHANGED) ---
const RELAX_DATA: Record<
  string,
  {
    description: string;
    lounges: string[];
    features: string[];
    bookingLink: string;
  }
> = {
  ATH: {
    description:
      "Athens International offers premium executive lounges and dedicated rest zones in both Terminal A and B.",
    lounges: [
      "Skyserv Melina Merkouri",
      "Goldair Handling Lounge",
      "Aegean Business Lounge",
    ],
    features: ["Showers", "Quiet Zones", "High-speed Wi-Fi", "Refreshments"],
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  JMK: {
    description:
      "Mykonos Airport is small, but the recently renovated terminal offers comfortable airside seating and a premium lounge for those looking to escape the summer heat.",
    lounges: ["Goldair Handling Lounge (Airside)"],
    features: ["Air Conditioning", "Charging Stations", "Light Snacks"],
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  BJV: {
    description:
      "Milas-Bodrum Airport (BJV) provides spacious lounge options in both International and Domestic terminals to ensure a calm start to your journey.",
    lounges: ["Primeclass Lounge", "Comfort Lounge"],
    features: ["Buffet Dining", "Workstations", "Comfortable Seating"],
    bookingLink: "https://www.aegeantaxi.com",
  },
  DEFAULT: {
    description:
      "While this airport has limited formal lounge facilities, there are comfortable seating areas and cafes airside to relax before your flight.",
    lounges: ["Standard Terminal Seating"],
    features: ["Basic Charging Points", "Cafe Access"],
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function RelaxClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = RELAX_DATA[code] || RELAX_DATA["DEFAULT"];
  const airportName = airport?.name || "the Airport";

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- 1. HERO HEADER --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href={`/experiences`}
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFD600] font-bold mb-8 transition-colors uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Experiences
          </Link>

          {/* SEO FIX: H1 Matches Title Keywords "Lounges" & "Relax" */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Lounges & <span className="text-white/40">Relaxing</span> <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              at {airportName}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            {info.description} Whether you need to relax before your flight,
            find a quiet space to work, or simply refresh away from the crowds.
          </p>
        </div>
      </div>

      {/* --- INTRO: THE SANCTUARY STRATEGY --- */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-1.5 bg-[#FFD600] mb-8 mx-auto rounded-full" />
        <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
          The Value of Calm
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Traveling through busy regional airports during the peak summer season
          can often be a chaotic experience. The general departure halls at{" "}
          {airportName} are designed to handle high volumes of passengers, which
          can result in limited seating and elevated noise levels. For travelers
          seeking a moment of respite before their flight, investing in lounge
          access or identifying quiet zones is a strategic move.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Beyond simple comfort, these dedicated relaxation areas provide a
          controlled environment with reliable climate control, which is
          essential during the hot Mediterranean summer. They also offer a
          secure place to charge your devices and catch up on work without the
          distractions of the main concourse.
        </p>
      </div>

      {/* --- 2. CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: INFORMATION CARDS */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lounges Card */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#F3F4FE] w-12 h-12 rounded-xl flex items-center justify-center text-[#0C1A47] mb-8">
                  <Sofa className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold mb-6 tracking-tight">
                  Available Spaces
                </h2>
                <ul className="space-y-4">
                  {info.lounges.map((lounge, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-600 font-medium text-lg"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
                      {lounge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities Card */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#F3F4FE] w-12 h-12 rounded-xl flex items-center justify-center text-[#0C1A47] mb-8">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold mb-6 tracking-tight">
                  Key Amenities
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {info.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-4 rounded-xl text-[#0C1A47] font-bold text-sm flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD600]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-[#F8F9FC] rounded-4xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-5 h-5 text-[#0C1A47]" />
                  <h3 className="font-bold text-lg">Quiet Areas</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Most terminals have quiet zones located furthest from the
                  duty-free shopping areas. Look for signage near the
                  higher-numbered gates for the best results.
                </p>
              </div>
              <div className="p-8 bg-[#F8F9FC] rounded-4xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Moon className="w-5 h-5 text-[#0C1A47]" />
                  <h3 className="font-bold text-lg">Sleep Pods</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  For long layovers at larger hubs like ATH or BJV, check for
                  designated sleep pods or nearby airport hotels linked via
                  complimentary shuttles.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: PREMIUM CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-[#0C1A47] rounded-[2.5rem] p-10 text-white overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="bg-white/10 p-4 rounded-2xl text-[#FFD600] w-fit mb-8">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">
                  Arrive Refreshed
                </h2>
                <p className="text-blue-100 leading-relaxed mb-10 text-lg font-light">
                  The best way to maintain that holiday relaxation is to skip
                  the taxi queues entirely. Pre-book a premium transfer from{" "}
                  {airport?.name} directly to your villa or hotel.
                </p>
                <a
                  href={info.bookingLink}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex items-center justify-between bg-[#FFD600] text-[#0C1A47] px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all w-full"
                >
                  Book Aegean Taxi
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER: LOUNGE ACCESS GUIDE --- */}
      <div className="bg-[#0C1A47] text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-xl">
              <Armchair className="w-8 h-8 text-[#FFD600]" />
            </div>
            <h2 className="text-3xl font-bold">Accessing VIP Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-blue-100 leading-relaxed">
            {/* Column 1: Eligibility */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-[#FFD600]" />
                  Who can enter?
                </h3>
                <p className="text-lg">
                  There is a common misconception that airport lounges are
                  reserved solely for First Class or Business Class passengers.
                  In reality, most lounges at {airportName} operate on an "open
                  access" basis. While business class tickets grant
                  complimentary entry, economy passengers can often access these
                  facilities through membership programs or by paying a one-time
                  fee at the door.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#FFD600]" />
                  Membership Programs
                </h3>
                <p className="text-lg">
                  If you hold a premium credit card (such as Amex Platinum) or
                  are a member of Priority Pass, LoungeKey, or DragonPass, you
                  likely have complimentary access included. We recommend
                  downloading your membership app before travel to ensure you
                  have your digital QR code ready, as physical cards are
                  sometimes required by older card readers.
                </p>
              </div>
            </div>

            {/* Column 2: Amenities */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-[#FFD600]" />
                  Digital Nomad Friendly
                </h3>
                <p className="text-lg">
                  For business travelers, the lounge offers a critical
                  advantage: reliable, high-speed Wi-Fi that is separate from
                  the often-congested public network. Desks with ample power
                  outlets allow you to work efficiently. Some lounges even offer
                  printing and scanning services upon request at the reception.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-[#FFD600]" />
                  Food & Beverage
                </h3>
                <p className="text-lg">
                  Entry typically includes unlimited complimentary food and
                  drinks. The spread usually features a buffet of cold snacks,
                  salads, and local pastries, along with a selection of
                  alcoholic and non-alcoholic beverages. Taking a bottle of
                  water from the lounge for your flight is generally permitted
                  and a good way to stay hydrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
