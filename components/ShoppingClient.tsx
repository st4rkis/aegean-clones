"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { useEffect } from "react";
import {
  ShoppingBag,
  Gift,
  Info,
  CheckCircle2,
  ArrowRight,
  CreditCard,
  Clock,
  ShieldCheck,
  Plane,
} from "lucide-react";

// --- REAL WORLD SHOPPING DATA (UNCHANGED) ---
const SHOPPING_DATA: Record<
  string,
  {
    description: string;
    highlights: string[];
    spots: { name: string; type: string; location: string }[];
  }
> = {
  // Mykonos
  JMK: {
    description:
      "Mykonos Airport is boutique-focused, featuring high-end Greek fashion, jewelry, and exclusive beauty products.",
    highlights: ["Hellenic Duty Free", "Greek Designers", "Luxury Sunglasses"],
    spots: [
      {
        name: "Hellenic Duty Free Shops",
        type: "Perfumes, Spirits & Fashion",
        location: "Departures, Airside",
      },
      {
        name: "Greek Designers",
        type: "Local Boutique Fashion",
        location: "Departures, Airside",
      },
      {
        name: "Press Gate",
        type: "Books & Magazines",
        location: "Departures, All Users",
      },
      {
        name: "Apivita & Korres",
        type: "Natural Cosmetics",
        location: "Inside Duty Free",
      },
    ],
  },
  // Athens
  ATH: {
    description:
      "Athens Airport offers a premium shopping experience comparable to a high-end mall, with luxury brands and extensive local products.",
    highlights: ["Attica Selections", "Max Mara", "Swarovski", "Korres"],
    spots: [
      {
        name: "Attica Selections",
        type: "Designer Fashion (Boss, Armani)",
        location: "Departures, Intra-Schengen",
      },
      {
        name: "Hellenic Duty Free",
        type: "Mega Store",
        location: "All Departure Areas",
      },
      {
        name: "Max Mara",
        type: "Luxury Fashion",
        location: "Departures, Intra-Schengen",
      },
      {
        name: "Swarovski",
        type: "Jewelry",
        location: "Departures, Intra-Schengen",
      },
      {
        name: "Korres",
        type: "Greek Natural Beauty",
        location: "Departures, Intra-Schengen",
      },
      {
        name: "Presspoint",
        type: "Books, Electronics & Gifts",
        location: "Departures, Free Access",
      },
    ],
  },
  // Santorini
  JTR: {
    description:
      "Santorini's new terminal features a modern duty-free walk-through with a strong focus on local wines and volcanic products.",
    highlights: ["Hellenic Duty Free", "Local Wines", "Sunwear"],
    spots: [
      {
        name: "Hellenic Duty Free Shops",
        type: "Perfumes, Fashion & Spirits",
        location: "Departures, Airside",
      },
      {
        name: "Santorini Wines",
        type: "Local Cellar",
        location: "Inside Duty Free",
      },
      {
        name: "Sunwear",
        type: "Designer Sunglasses",
        location: "Departures, Airside",
      },
      {
        name: "Press Gate",
        type: "News & Souvenirs",
        location: "Departures, Landside",
      },
    ],
  },
  // Heraklion
  HER: {
    description:
      "Heraklion Airport offers a large duty-free section ideal for buying last-minute Cretan olive oil, raki, and souvenirs.",
    highlights: ["Cretan Products", "Folli Follie", "Electronics"],
    spots: [
      {
        name: "Hellenic Duty Free Shops",
        type: "Mega Store",
        location: "Departures, Intra & Extra Schengen",
      },
      {
        name: "Cretan Corner",
        type: "Olive Oil, Honey & Raki",
        location: "Inside Duty Free",
      },
      {
        name: "Folli Follie",
        type: "Jewelry & Accessories",
        location: "Departures, Airside",
      },
      {
        name: "Electronics",
        type: "Travel Gadgets",
        location: "Departures, Airside",
      },
    ],
  },
  // Thessaloniki
  SKG: {
    description:
      "Makedonia Airport features a revamped retail area with fashion brands, electronics, and famous local sweets.",
    highlights: ["Terkenlis", "Public", "Oro Vlo"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Department Store",
        location: "Departures, Airside",
      },
      {
        name: "Terkenlis",
        type: "Tsoureki & Sweets",
        location: "Departures, Landside & Airside",
      },
      {
        name: "Public",
        type: "Electronics & Books",
        location: "Departures, Airside",
      },
      {
        name: "Oro Vlo",
        type: "Watches & Jewelry",
        location: "Departures, Airside",
      },
    ],
  },
  // Rhodes
  RHO: {
    description:
      "Rhodes Airport provides a solid shopping experience with a focus on summer fashion, accessories, and local gifts.",
    highlights: ["Duty Free Walkthrough", "Sunglasses", "Toys"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Perfumes, Spirits & Tobacco",
        location: "Departures, Airside",
      },
      {
        name: "Press Gate",
        type: "Magazines & Books",
        location: "Departures, All Users",
      },
      {
        name: "Fashion Corner",
        type: "Summer Wear & Accessories",
        location: "Inside Duty Free",
      },
      {
        name: "Local Gifts",
        type: "Rhodes Souvenirs",
        location: "Departures, Airside",
      },
    ],
  },
  // Corfu
  CFU: {
    description:
      "Corfu Airport offers essential travel shopping with a good selection of Corfiot kumquat products and cosmetics.",
    highlights: ["Kumquat Liqueurs", "Cosmetics", "Travel Accessories"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Main Store",
        location: "Departures, Extra Schengen",
      },
      {
        name: "Hellenic Duty Free",
        type: "Express Store",
        location: "Departures, Schengen",
      },
      {
        name: "Press Gate",
        type: "Newsstand",
        location: "Departures, Landside",
      },
    ],
  },
  // Kefalonia (EFL)
  EFL: {
    description:
      "Kefalonia Airport offers a compact but well-curated shopping experience, featuring local Ionian products and travel essentials.",
    highlights: ["Duty Free", "Almyra Selections", "Local Wine"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Perfumes, Spirits & Gifts",
        location: "Departures, Airside",
      },
      {
        name: "Almyra Selections",
        type: "Souvenirs & Gifts",
        location: "Departures, All Users",
      },
      {
        name: "EFL Kiosk",
        type: "Convenience & Press",
        location: "Departures, Landside",
      },
    ],
  },
  // Zakynthos
  ZTH: {
    description:
      "Zakynthos Airport has a compact retail area focusing on duty-free basics and local turtle-themed souvenirs.",
    highlights: ["Duty Free", "Local Sweets"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Spirits & Perfumes",
        location: "Departures, Airside",
      },
      {
        name: "Press & Books",
        type: "Reading Material",
        location: "Departures, Landside",
      },
    ],
  },
  // Kos
  KGS: {
    description:
      "Kos Airport offers a modern walkthrough duty-free shop with a good range of international brands.",
    highlights: ["Duty Free Walkthrough", "Sunwear"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Cosmetics & Fashion",
        location: "Departures, Airside",
      },
      { name: "Press Gate", type: "Kiosk", location: "Departures, Landside" },
    ],
  },
  // Paros
  PAS: {
    description:
      "Paros Airport is very small. Shopping is limited to a basic duty-free section and a newsstand.",
    highlights: ["Essentials"],
    spots: [
      {
        name: "Hellenic Duty Free",
        type: "Small Kiosk",
        location: "Departures, Airside",
      },
      {
        name: "Press Corner",
        type: "Magazines",
        location: "Departures, Landside",
      },
    ],
  },
  // Naxos
  JNX: {
    description:
      "Naxos Airport has minimal retail facilities. Expect only the absolute essentials.",
    highlights: ["Newsstand"],
    spots: [
      {
        name: "Mini Kiosk",
        type: "Snacks & Magazines",
        location: "Departures Hall",
      },
    ],
  },
  // Milos
  MLO: {
    description:
      "Milos Airport has virtually no retail shops. It is best to buy your souvenirs in Adamas or Plaka.",
    highlights: ["None"],
    spots: [
      {
        name: "Small Kiosk",
        type: "Basic Essentials",
        location: "Check-in Area",
      },
    ],
  },
  // Bodrum
  BJV: {
    description:
      "Bodrum Airport offers an impressive shopping experience with a large bazaar-style area and luxury boutiques.",
    highlights: ["ATU Duty Free", "Old Bazaar", "Desa"],
    spots: [
      {
        name: "ATU Duty Free",
        type: "Mega Store",
        location: "International Departures",
      },
      {
        name: "Old Bazaar",
        type: "Local Souvenirs & Delights",
        location: "Airside",
      },
      { name: "Desa", type: "Leather Goods", location: "Airside" },
      { name: "Suba", type: "Gifts", location: "Airside" },
    ],
  },

  // Default Fallback
  DEFAULT: {
    description:
      "Shopping options include standard duty-free products, perfumes, and local souvenirs.",
    highlights: ["Duty Free", "Newsstand"],
    spots: [
      {
        name: "Duty Free Shop",
        type: "General Store",
        location: "Departures",
      },
      { name: "Press & More", type: "Magazines", location: "Landside" },
    ],
  },
};

export default function ShoppingClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = SHOPPING_DATA[code] || SHOPPING_DATA["DEFAULT"];
  const airportName = airport?.name || "the Airport";

  useEffect(() => {
    if (airport?.name) {
      document.title = `Shopping at ${airport.name} | Airport Retail Guide`;
    }
  }, [airport]);

  return (
    <section className="min-h-screen bg-[#F3F4FE] font-sans pb-24">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <ShoppingBag className="w-5 h-5" />
            <span>Retail & Duty Free</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Shopping at <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airportName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            {info.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        {/* --- 2. SHOPPING GUIDE (Expanded) --- */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 mb-12">
          <div className="flex items-start gap-5">
            <div className="bg-[#F3F4FE] p-3 rounded-full hidden md:block text-[#0C1A47]">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Shopping Guide & Tips
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Enhance your travel experience by exploring the diverse
                  shopping options available at {airportName}. Whether you are
                  looking for last-minute gifts, luxury fashion, or local
                  souvenirs, the airport retail area offers something for
                  everyone. From authentic Greek olive oil and honey to
                  international designer brands, the selection is curated to
                  reflect both global trends and regional heritage.
                </p>
                <p>
                  Travelers can take advantage of Duty Free prices on perfumes,
                  cosmetics, and spirits. If you are traveling outside the EU,
                  you can benefit from tax-free shopping on luxury items and
                  tobacco. For flights within the EU, "Travel Value" prices
                  typically apply to fragrances and skincare, offering
                  significant savings compared to high street prices.
                </p>
                <p>
                  We recommend arriving at least 2 hours before your flight to
                  have ample time to browse the shops without rushing. Most
                  stores accept major credit cards (Visa, Mastercard, Amex) and
                  contactless payments.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="flex gap-2 items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600]" />
                    <span className="text-sm font-medium">
                      Authentic Local Products
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600]" />
                    <span className="text-sm font-medium">
                      International Brands
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. HIGHLIGHTS & SPOTS */}
        <div className="space-y-12">
          {/* Highlights Pills */}
          <div className="flex flex-wrap gap-3">
            {info.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 rounded-full bg-[#0C1A47] border border-gray-200 px-5 py-2.5 text-sm font-bold text-white shadow-sm"
              >
                <Gift className="w-4 h-4 text-[#FFD600]" />
                {highlight}
              </span>
            ))}
          </div>

          {/* Spots Grid */}
          <div>
            <h2 className="text-[#0C1A47] text-3xl font-bold mb-8 tracking-tight">
              Shops & Boutiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {info.spots.map((spot, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white rounded-3xl p-8 
                    border border-gray-100 
                    shadow-sm hover:shadow-xl hover:-translate-y-1 
                    transition-all duration-300
                    flex flex-col justify-between
                    min-h-[200px]
                  "
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-[#0C1A47]/60 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                        {spot.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                      {spot.name}
                    </h3>
                    <p className="text-gray-500 font-medium">{spot.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- FOOTER: REGULATIONS & LOGISTICS (Adds ~400 words) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0C1A47] rounded-lg text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0C1A47]">
                  Liquid Restrictions
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                While security restrictions on liquids (100ml limit) apply to
                items brought from home, liquids purchased{" "}
                <strong>after</strong> the security checkpoint in Duty Free
                shops are exempt. These items (such as perfumes or spirits) will
                be placed in a special Sealed Tamper-Evident Bag (STEB) along
                with the receipt. Do not open this bag until you reach your
                final destination, especially if you have a connecting flight,
                as security at transfer airports may confiscate unsealed
                liquids.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0C1A47] rounded-lg text-white">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0C1A47]">
                  VAT Refunds
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Non-EU residents leaving the European Union may be eligible for
                a VAT refund on goods purchased in Greece (minimum spend usually
                applies, typically €50 in a single receipt). To claim this, you
                must present your passport and the tax-free form at the Customs
                desk <strong>before</strong>
                you check your luggage (if the items are in your suitcase) or
                after security (if items are in hand luggage).
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[2.5rem] bg-[#0C1A47] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Don't forget Duty Free
                </h3>
                <p className="text-blue-200 max-w-xl leading-relaxed">
                  Even on domestic flights, you can shop at Hellenic Duty Free
                  for perfumes, cosmetics, and fashion at competitive prices.
                </p>
              </div>
              <Link
                href="/flights/departures"
                className="
                  inline-flex items-center gap-2 
                  bg-[#FFD600] text-[#0C1A47] 
                  px-6 py-4 rounded-xl 
                  font-bold hover:bg-white 
                  transition-colors whitespace-nowrap
                "
              >
                Check Flight Times <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
