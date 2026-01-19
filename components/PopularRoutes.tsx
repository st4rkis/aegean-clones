"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { ArrowRight, MapPin } from "lucide-react";

// --- DYNAMIC DATA: TOP 3 DESTINATIONS PER AIRPORT ---
const DESTINATIONS_DATA: Record<
  string,
  {
    title: string;
    subtitle: string; // NEW: Custom subtitle per airport
    seeAllText: string; // NEW: Custom button text per airport
    cards: Array<{
      title: string;
      priceEstimate?: string;
      link: string;
    }>;
  }
> = {
  // Mykonos (JMK)
  JMK: {
    title: "Most popular routes to and from Mykonos Airport",
    subtitle: "Book your taxi to and from Mykonos airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Mykonos Town (Chora)",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/mykonos",
      },
      {
        title: "Super Paradise Beach",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/mykonos",
      },
      {
        title: "Scorpios / Paraga",
        priceEstimate: "from €40",
        link: "https://www.aegeantaxi.com/mykonos",
      },
    ],
  },
  // Santorini (JTR)
  JTR: {
    title: "Most popular routes to and from Santorini Airport",
    subtitle: "Book your taxi to and from Santorini airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Oia Village",
        priceEstimate: "from €45",
        link: "https://www.aegeantaxi.com/santorini",
      },
      {
        title: "Fira Town",
        priceEstimate: "from €30",
        link: "https://www.aegeantaxi.com/santorini",
      },
      {
        title: "Imerovigli",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/santorini",
      },
    ],
  },
  // Athens (ATH)
  ATH: {
    title: "Most popular routes to and from Athens Airport",
    subtitle: "Book your taxi to and from Athens airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Athens City Center",
        priceEstimate: "from €40",
        link: "https://www.aegeantaxi.com/athens",
      },
      {
        title: "Piraeus Port",
        priceEstimate: "from €50",
        link: "https://www.aegeantaxi.com/athens",
      },
      {
        title: "Athens Riviera",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/athens",
      },
    ],
  },
  // Heraklion (HER)
  HER: {
    title: "Most popular routes to and from Heraklion Airport",
    subtitle: "Book your taxi to and from Heraklion airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Hersonissos",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/crete",
      },
      {
        title: "Elounda",
        priceEstimate: "from €80",
        link: "https://www.aegeantaxi.com/crete",
      },
      {
        title: "Heraklion Port",
        priceEstimate: "from €20",
        link: "https://www.aegeantaxi.com/crete",
      },
    ],
  },
  // Thessaloniki (SKG)
  SKG: {
    title: "Most popular routes to and from Thessaloniki Airport",
    subtitle: "Book your taxi to and from Thessaloniki airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "City Center (White Tower)",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/thessaloniki",
      },
      {
        title: "Halkidiki (Kassandra)",
        priceEstimate: "from €90",
        link: "https://www.aegeantaxi.com/thessaloniki",
      },
      {
        title: "Sani Resort",
        priceEstimate: "from €85",
        link: "https://www.aegeantaxi.com/thessaloniki",
      },
    ],
  },
  // Corfu (CFU)
  CFU: {
    title: "Most popular routes to and from Corfu Airport",
    subtitle: "Book your taxi to and from Corfu airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Corfu Old Town",
        priceEstimate: "from €20",
        link: "https://www.aegeantaxi.com/corfu",
      },
      {
        title: "Paleokastritsa",
        priceEstimate: "from €45",
        link: "https://www.aegeantaxi.com/corfu",
      },
      {
        title: "Glyfada Beach",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/corfu",
      },
    ],
  },
  // Rhodes (RHO)
  RHO: {
    title: "Most popular routes to and from Rhodes Airport",
    subtitle: "Book your taxi to and from Rhodes airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Rhodes Old Town",
        priceEstimate: "from €30",
        link: "https://www.aegeantaxi.com/rhodes",
      },
      {
        title: "Lindos",
        priceEstimate: "from €60",
        link: "https://www.aegeantaxi.com/rhodes",
      },
      {
        title: "Faliraki",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/rhodes",
      },
    ],
  },
  // Zakynthos (ZTH)
  ZTH: {
    title: "Most popular routes to and from Zakynthos Airport",
    subtitle: "Book your taxi to and from Zakynthos airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Laganas",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/zakynthos",
      },
      {
        title: "Tsilivi",
        priceEstimate: "from €30",
        link: "https://www.aegeantaxi.com/zakynthos",
      },
      {
        title: "Vasilikos",
        priceEstimate: "from €40",
        link: "https://www.aegeantaxi.com/zakynthos",
      },
    ],
  },
  // Kos (KGS)
  KGS: {
    title: "Most popular routes to and from Kos Airport",
    subtitle: "Book your taxi to and from Kos airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Kardamena",
        priceEstimate: "from €20",
        link: "https://www.aegeantaxi.com/kos",
      },
      {
        title: "Kos Town",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/kos",
      },
      {
        title: "Mastichari",
        priceEstimate: "from €20",
        link: "https://www.aegeantaxi.com/kos",
      },
    ],
  },
  // Kefalonia (EFL)
  EFL: {
    title: "Most popular routes to and from Kefalonia Airport",
    subtitle: "Book your taxi to and from Kefalonia airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Argostoli",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/kefalonia",
      },
      {
        title: "Skala",
        priceEstimate: "from €50",
        link: "https://www.aegeantaxi.com/kefalonia",
      },
      {
        title: "Fiskardo",
        priceEstimate: "from €75",
        link: "https://www.aegeantaxi.com/kefalonia",
      },
    ],
  },
  // Paros (PAS)
  PAS: {
    title: "Most popular routes to and from Paros Airport",
    subtitle: "Book your taxi to and from Paros airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Naoussa",
        priceEstimate: "from €35",
        link: "https://www.aegeantaxi.com/paros",
      },
      {
        title: "Parikia (Port)",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/paros",
      },
      {
        title: "Golden Beach",
        priceEstimate: "from €40",
        link: "https://www.aegeantaxi.com/paros",
      },
    ],
  },
  // Naxos (JNX)
  JNX: {
    title: "Most popular routes to and from Naxos Airport",
    subtitle: "Book your taxi to and from Naxos airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Naxos Chora",
        priceEstimate: "from €20",
        link: "https://www.aegeantaxi.com/naxos",
      },
      {
        title: "Agia Anna",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/naxos",
      },
      {
        title: "Plaka Beach",
        priceEstimate: "from €30",
        link: "https://www.aegeantaxi.com/naxos",
      },
    ],
  },
  // Milos (MLO)
  MLO: {
    title: "Most popular routes to and from Milos Airport",
    subtitle: "Book your taxi to and from Milos airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Adamas (Port)",
        priceEstimate: "from €20",
        link: "https://www.aegeantaxi.com/milos",
      },
      {
        title: "Pollonia",
        priceEstimate: "from €30",
        link: "https://www.aegeantaxi.com/milos",
      },
      {
        title: "Plaka",
        priceEstimate: "from €25",
        link: "https://www.aegeantaxi.com/milos",
      },
    ],
  },
  // Bodrum (BJV)
  BJV: {
    title: "Most popular routes to and from Bodrum Airport",
    subtitle: "Book your taxi to and from Bodrum airport",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "Bodrum City",
        priceEstimate: "from €40",
        link: "https://www.aegeantaxi.com",
      },
      {
        title: "Yalikavak",
        priceEstimate: "from €55",
        link: "https://www.aegeantaxi.com",
      },
      {
        title: "Gumbet",
        priceEstimate: "from €45",
        link: "https://www.aegeantaxi.com",
      },
    ],
  },
  // Default Fallback
  DEFAULT: {
    title: "Popular Destinations",
    subtitle: "Skip the wait. The fastest way to your holiday.",
    seeAllText: "Book your taxi instantly",
    cards: [
      {
        title: "City Center",
        priceEstimate: "Best Value",
        link: "https://www.aegeantaxi.com",
      },
      {
        title: "Port / Marina",
        priceEstimate: "Direct Ride",
        link: "https://www.aegeantaxi.com",
      },
      {
        title: "Luxury Hotels",
        priceEstimate: "Door-to-door",
        link: "https://www.aegeantaxi.com",
      },
    ],
  },
};

export default function PopularRoutes() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const data = DESTINATIONS_DATA[code] || DESTINATIONS_DATA["DEFAULT"];

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-[#0C1A47] text-3xl md:text-4xl font-bold mb-3">
              {data.title}
            </h2>
            <p className="text-[#0C1A47]/70 text-lg">{data.subtitle}</p>
          </div>
          <a
            href="https://www.aegeantaxi.com/book-online"
            rel="nofollow noreferrer"
            className="text-[#0C1A47] font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            {data.seeAllText} <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="
                group relative h-50 
                rounded-3xl overflow-hidden cursor-pointer shadow-lg 
                bg-linear-to-br from-[#050B20] to-[#1E2C79] 
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
              "
            >
              {/* Subtle Overlay Effect */}
              <div className="absolute inset-0 bg-[#0C1A47]/10 group-hover:bg-white/5 transition-colors" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[#FFD600] mb-2 text-sm font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    Popular Route
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2 leading-tight">
                    {card.title}
                  </h3>

                  {/* Footer Area: Price + Button */}
                  <div className="flex items-center justify-between mt-6 border-t border-white/10 pt-4">
                    <span className="text-white/90 font-medium text-lg">
                      {card.priceEstimate}
                    </span>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="
                        bg-white text-[#0C1A47] 
                        px-5 py-2.5 rounded-full 
                        text-sm font-bold 
                        hover:bg-[#FFD600] transition-colors
                        shadow-md
                      "
                    >
                      Book Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
