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
  Info,
  ShieldCheck,
  UserCheck,
  MapPin,
  ShieldAlert,
  Clock,
} from "lucide-react";

// --- LOUNGE DATA (UNCHANGED - With Features) ---
const LOUNGE_DATA: Record<string, any> = {
  ATH: {
    description:
      "Athens International offers premium executive lounges and dedicated rest zones in both Terminal A and B.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com/athens",
    features: ["Showers", "Quiet Zones", "High-speed Wi-Fi", "Hot Buffet"],
    lounges: [
      {
        name: "Aegean Business Lounge",
        access: "Star Alliance Gold / Business Class",
        location: "Intra-Schengen (Area B)",
      },
      {
        name: "Lufthansa Business Lounge",
        access: "Star Alliance / Priority Pass",
        location: "Intra-Schengen (Area B)",
      },
      {
        name: "Goldair Handling Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Intra-Schengen (Area B)",
      },
      {
        name: "Skyserv Aristotelis",
        access: "Priority Pass / Pay-per-use",
        location: "Extra-Schengen (Area A)",
      },
      {
        name: "Skyserv Melina",
        access: "Priority Pass / Pay-per-use",
        location: "Intra-Schengen (Area B)",
      },
    ],
  },
  SKG: {
    description:
      "Thessaloniki offers modern lounge options following its recent terminal renovation.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
    features: ["Workstations", "Snacks & Drinks", "Flight Monitors", "Wi-Fi"],
    lounges: [
      {
        name: "Aegean Business Lounge",
        access: "Star Alliance Gold / Business Class",
        location: "Departures A (Intra-Schengen)",
      },
      {
        name: "The Lounge (Skyserv)",
        access: "Priority Pass / Pay-per-use",
        location: "Airside, 2nd Floor",
      },
    ],
  },
  HER: {
    description:
      "Heraklion has two main lounges serving both Schengen and Non-Schengen flights.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com/crete",
    features: ["Air Conditioning", "Refreshments", "TV/News", "Wi-Fi"],
    lounges: [
      {
        name: "Filoxenia Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Departures, Intra-Schengen",
      },
      {
        name: "Goldair Handling Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Departures, Level 1",
      },
    ],
  },
  RHO: {
    description:
      "Rhodes Diagoras Airport offers comfortable lounge access for both domestic and international travelers.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com/rhodes",
    features: ["Snacks", "Beverages", "Comfort Seating", "Wi-Fi"],
    lounges: [
      {
        name: "Skyserv Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Departures, Airside",
      },
      {
        name: "Goldair Handling Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Departures, Airside",
      },
    ],
  },
  CFU: {
    description:
      "Corfu Airport features a Goldair lounge primarily for international (Extra-Schengen) passengers.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com/corfu",
    features: ["Cold Snacks", "Alcoholic Drinks", "Wi-Fi", "Newspapers"],
    lounges: [
      {
        name: "Goldair Handling Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Departures, Level 1",
      },
    ],
  },
  JMK: {
    description:
      "Mykonos has a single luxury lounge managed by Goldair. It is small and can get crowded in peak summer.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com/mykonos",
    features: ["Premium Design", "AC", "Espresso Bar", "Wi-Fi"],
    lounges: [
      {
        name: "Your Mykonian Luxury Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "Departures, Airside (1st Floor)",
      },
    ],
  },
  BJV: {
    description:
      "Bodrum Airport has spacious Primeclass lounges in both the Domestic and International terminals.",
    hasLounge: true,
    bookingLink: "https://www.aegeantaxi.com",
    features: ["Open Buffet", "Kids Area", "Bar", "Showers (Intl only)"],
    lounges: [
      {
        name: "Primeclass Lounge",
        access: "Priority Pass / Pay-per-use",
        location: "International Departures",
      },
      {
        name: "Comfort Lounge",
        access: "Pay-per-use",
        location: "Domestic Departures",
      },
    ],
  },
  JTR: {
    description:
      "Santorini Airport is a small terminal, so “lounge” options are limited. This page focuses on realistic comfort tips for travelers.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/santorini",
    features: ["Public Seating", "Cafes", "Charging Spots"],
    lounges: [],
  },
  EFL: {
    description:
      "Kefalonia Airport is a smaller regional terminal and currently does not have a dedicated business lounge.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
    features: ["Public Seating", "Cafes"],
    lounges: [],
  },
  ZTH: {
    description:
      "Zakynthos Airport currently does not have a dedicated business lounge.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/zakynthos",
    features: ["Public Seating", "Cafes"],
    lounges: [],
  },
  KGS: {
    description:
      "Kos Airport does not have a standard business lounge. Seating is available in the main airside area.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/kos",
    features: ["Public Seating", "Cafes"],
    lounges: [],
  },
  PAS: {
    description:
      "Paros Airport is a small regional facility with no business lounge.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/paros",
    features: ["Public Seating", "Small Cafe"],
    lounges: [],
  },
  JNX: {
    description: "Naxos Airport is a small facility with no business lounge.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/naxos",
    features: ["Public Seating"],
    lounges: [],
  },
  MLO: {
    description:
      "Milos Airport is a small domestic airfield with no business lounge.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com/milos",
    features: ["Public Seating"],
    lounges: [],
  },
  DEFAULT: {
    description: "Lounge availability depends on the specific terminal.",
    hasLounge: false,
    bookingLink: "https://www.aegeantaxi.com",
    features: ["Standard Amenities"],
    lounges: [],
  },
};

export default function LoungesClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = LOUNGE_DATA[code] || LOUNGE_DATA["DEFAULT"];
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

      {/* --- INTRO: THE SANCTUARY STRATEGY (High Word Count Block) --- */}
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
                  {info.lounges && info.lounges.length > 0 ? (
                    info.lounges.map((lounge: any, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-600 font-medium text-lg"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
                        {lounge.name}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 italic">
                      No dedicated lounges available.
                    </li>
                  )}
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
                  {info.features?.map((feature: string, idx: number) => (
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

            {/* Detailed Lounge List (If Available) */}
            {info.hasLounge && (
              <div className="space-y-6">
                {info.lounges.map((lounge: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-[#F3F4FE] w-12 h-12 rounded-xl flex items-center justify-center text-[#0C1A47]">
                        <Coffee className="w-6 h-6" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-6 tracking-tight">
                      {lounge.name}
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#FFD600] shrink-0" />
                        <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                            Location
                          </p>
                          <p className="text-gray-700 font-medium">
                            {lounge.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <UserCheck className="w-5 h-5 text-[#FFD600] shrink-0" />
                        <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                            Access Policy
                          </p>
                          <p className="text-gray-700 font-medium">
                            {lounge.access}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* If No Lounge (Tips) */}
            {!info.hasLounge && (
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-50 p-8 rounded-4xl border border-gray-100">
                  <ShieldAlert className="w-10 h-10 text-[#0C1A47] mb-6" />
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">
                    What to expect
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Seating is available throughout the airside areas, but it
                    can get crowded during peak summer waves. Arrive early to
                    find a spot near the quieter gates.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-4xl border border-gray-100">
                  <Zap className="w-10 h-10 text-[#FFD600] mb-6" />
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">
                    Best relaxation tips
                  </h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2">
                      <span>•</span> Travel with a power bank
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> Use noise-cancelling headphones
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> Plan extra time for security lines
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: SIDEBAR ACTION CARDS */}
          <div className="lg:col-span-4 space-y-8">
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

            <div className="bg-[#F8F9FC] rounded-[2.5rem] p-8 border border-gray-100">
              <Clock className="w-8 h-8 text-[#0C1A47] mb-6" />
              <h3 className="text-xl font-bold mb-2">Need help with timing?</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                If you’re unsure when to leave your hotel, allow extra buffer
                time in summer. Roads and airport access can slow down
                significantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER: LOUNGE ACCESS GUIDE (High Word Count Block) --- */}
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
