"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import {
  ShoppingBag,
  Gift,
  Coffee,
  Lightbulb,
  Car,
  ArrowRight,
  Wine,
  Percent,
  ShieldCheck,
  Clock,
  CreditCard,
} from "lucide-react";

// --- DYNAMIC SHOPS DATA (UNCHANGED) ---
const SHOPS_INFO_DATA: Record<
  string,
  {
    regionName: string;
    description: string;
    dutyFreeText: string;
    essentialsText: string;
    localTip: string;
    bookingLink: string;
  }
> = {
  // Mykonos (JMK)
  JMK: {
    regionName: "Mykonos",
    description:
      "Mykonos Airport has a curated selection of luxury boutiques and seasonal duty‑free. Here’s what travelers typically find and how to plan around busy summer waves.",
    dutyFreeText:
      "In summer, duty‑free shopping is extensive, featuring luxury brands, fragrances, and Greek spirits. Opening hours align with flight schedules.",
    essentialsText:
      "You’ll find convenience options for water, snacks, and last‑minute travel items. The terminal is boutique-focused, so prices reflect the premium location.",
    localTip:
      "If you’re heading straight to the beach or a villa, plan your transport first—then browse. During peak hours, getting out of the airport is usually the priority.",
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  // Athens (ATH)
  ATH: {
    regionName: "Athens",
    description:
      "Athens Airport functions like a high-end shopping mall. It offers a vast array of international brands, Greek designers, and travel essentials year-round.",
    dutyFreeText:
      "The 'Hellenic Duty Free' area is massive and open 24/7. It covers everything from high fashion (Armani, Max Mara) to extensive liquor and cosmetic sections.",
    essentialsText:
      "Travel essentials are easy to find at 'Presspoint' and 'WHSmith' stores located both landside and airside, stocking books, electronics, and snacks.",
    localTip:
      "You can buy olive oil and honey here in 'security-approved' sealed bags, allowing you to carry them on board even if they exceed 100ml limits.",
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  // Santorini (JTR)
  JTR: {
    regionName: "Santorini",
    description:
      "Santorini's renovated terminal offers a modern duty-free walkthrough. It’s perfect for picking up local wines and volcanic products before you fly.",
    dutyFreeText:
      "The walkthrough duty-free shop is modern and well-stocked with local Santo Wines, cosmetics, and international spirits. It is open for all departing flights.",
    essentialsText:
      "Basic convenience stores are available airside for water and magazines. Selection is good but geared towards the summer tourist crowd.",
    localTip:
      "This is a great place to buy Vin Santo (sweet wine) if you didn't want to carry heavy bottles in your luggage during your stay.",
    bookingLink: "https://www.aegeantaxi.com/santorini",
  },
  // Heraklion (HER)
  HER: {
    regionName: "Heraklion",
    description:
      "Heraklion Airport has a busy retail area focusing on Cretan souvenirs. It’s functional and serves the high volume of summer tourists.",
    dutyFreeText:
      "Duty-free is available in both Schengen and Non-Schengen departures. Expect a strong focus on Cretan products like raki, olive oil, and herbs.",
    essentialsText:
      "Several kiosks sell newspapers, cigarettes, and snacks. They are busy but efficient.",
    localTip:
      "If you forgot to buy souvenirs, the airport shops have a decent selection of Cretan crafts, though prices are slightly higher than in the city.",
    bookingLink: "https://www.aegeantaxi.com/crete",
  },
  // Corfu (CFU)
  CFU: {
    regionName: "Corfu",
    description:
      "Corfu Airport offers a standard range of travel retail, with a special focus on local Kumquat products and cosmetics.",
    dutyFreeText:
      "The main duty-free shop is located after security. It offers the usual international brands plus a section dedicated to Corfiot specialties.",
    essentialsText:
      "Newsstands and small markets are available for last-minute snacks and reading material.",
    localTip:
      "Look for the 'Kumquat Liqueur' bottles—they are the signature souvenir of Corfu and make for excellent gifts.",
    bookingLink: "https://www.aegeantaxi.com/corfu",
  },
  // Rhodes (RHO)
  RHO: {
    regionName: "Rhodes",
    description:
      "Rhodes Airport provides a solid shopping experience. You will find a mix of international duty-free items and local Rhodian gifts.",
    dutyFreeText:
      "The duty-free walkthrough is spacious. It stocks perfumes, tobacco, and a good selection of toys and summer accessories.",
    essentialsText:
      "Kiosks for water, soft drinks, and magazines are easy to find near the gates.",
    localTip:
      "The airport shops often stock 'Umbrella' chocolates and local honey, which are popular last-minute buys.",
    bookingLink: "https://www.aegeantaxi.com/rhodes",
  },
  // Kefalonia (EFL)
  EFL: {
    regionName: "Kefalonia",
    description:
      "Kefalonia Airport offers a relaxed shopping environment in its new terminal. You can find standard duty-free items and a selection of Ionian local products.",
    dutyFreeText:
      "The Hellenic Duty Free shop covers all the basics: international perfumes, cosmetics, and a good section for Greek spirits and chocolates.",
    essentialsText:
      "A convenience store and newsstand are available airside for last-minute snacks, reading material, and beach accessories.",
    localTip:
      "Look for 'Robola' wine and 'Mandoles' (red glazed almonds)—these are the signature treats of Kefalonia and are great gifts.",
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
  },
  // Thessaloniki (SKG)
  SKG: {
    regionName: "Thessaloniki",
    description:
      "Makedonia Airport features a modern retail area. It is known for its excellent local sweet shops and fashion boutiques.",
    dutyFreeText:
      "A large, modern duty-free area awaits after security. Fashion brands and electronics (Public) are also available.",
    essentialsText:
      "You can find almost anything you need, from chargers to books. The 'Terkenlis' shop is famous for its brioche (tsoureki).",
    localTip:
      "Definitely buy a box of 'Tsoureki' (sweet bread) from Terkenlis before you board—it’s a Thessaloniki tradition.",
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
  },
  // Paros (PAS)
  PAS: {
    regionName: "Paros",
    description:
      "Paros Airport is small. Shopping is limited to the absolute essentials, so don't plan your shopping spree here.",
    dutyFreeText:
      "There is a small duty-free shelf/corner for basic perfumes and spirits, but the range is very limited compared to larger islands.",
    essentialsText:
      "A small kiosk sells water, coffee, and packaged snacks. Don't expect extensive travel gear.",
    localTip:
      "Do your main souvenir shopping in Naoussa or Parikia. The airport selection is minimal.",
    bookingLink: "https://www.aegeantaxi.com/paros",
  },
  // Naxos (JNX)
  JNX: {
    regionName: "Naxos",
    description:
      "Naxos Airport is tiny. Retail facilities are virtually non-existent beyond a basic snack bar.",
    dutyFreeText:
      "There is no significant duty-free shopping. You might find a small display of local spirits.",
    essentialsText:
      "A small counter offers coffee and basic snacks. Bring what you need with you.",
    localTip:
      "Buy your Naxos cheese (Graviera) and Kitron liqueur in town. You won't find them at the airport.",
    bookingLink: "https://www.aegeantaxi.com/naxos",
  },
  // Zakynthos (ZTH)
  ZTH: {
    regionName: "Zakynthos",
    description:
      "Zakynthos Airport has a compact retail area. It covers the basics for the thousands of tourists departing each summer.",
    dutyFreeText:
      "Standard duty-free is available for perfumes, alcohol, and tobacco.",
    essentialsText:
      "Convenience shops offer snacks and turtle-themed souvenirs.",
    localTip:
      "If you want authentic local nougat (Mandolato), buy it in Zante Town. The airport versions are more generic.",
    bookingLink: "https://www.aegeantaxi.com/zakynthos",
  },
  // Kos (KGS)
  KGS: {
    regionName: "Kos",
    description:
      "Kos Airport offers a modern walkthrough shop. It’s convenient for grabbing last-minute gifts.",
    dutyFreeText:
      "The duty-free area is well-organized with a good selection of cosmetics and local honey.",
    essentialsText:
      "Several shops provide books, sunscreen, and beach accessories if you missed them.",
    localTip:
      "Look for 'Cinnamon drink' (Kanelada) syrup—a local favorite that is sometimes stocked here.",
    bookingLink: "https://www.aegeantaxi.com/kos",
  },
  // Milos (MLO)
  MLO: {
    regionName: "Milos",
    description:
      "Milos Airport is extremely limited. There are virtually no shops, so arrive prepared.",
    dutyFreeText: "No major duty-free facilities exist.",
    essentialsText:
      "A small canteen/kiosk is the extent of the retail offering.",
    localTip:
      "Buy all your obsidian souvenirs and local sweets in Plaka or Adamas before coming to the airport.",
    bookingLink: "https://www.aegeantaxi.com/milos",
  },
  // Bodrum (BJV)
  BJV: {
    regionName: "Bodrum",
    description:
      "Bodrum Airport offers a rich shopping experience with a 'Grand Bazaar' feel in the international terminal.",
    dutyFreeText:
      "The ATU Duty Free is massive, offering luxury brands and a huge selection of Turkish delights and raki.",
    essentialsText:
      "Numerous shops sell everything from leather goods to high-end fashion and travel accessories.",
    localTip:
      "You can find high-quality Turkish delight here that is packaged specifically for travel.",
    bookingLink: "https://www.aegeantaxi.com",
  },
  // Fallback
  DEFAULT: {
    regionName: "the area",
    description:
      "The airport has a selection of shops and travel retail options.",
    dutyFreeText:
      "Duty-free shopping is available for international passengers.",
    essentialsText: "Convenience stores offer snacks and travel necessities.",
    localTip: "Arrive early to browse the shops before your flight.",
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function ShopsClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = SHOPS_INFO_DATA[code] || SHOPS_INFO_DATA["DEFAULT"];

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
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
              {airport?.name || "Airport"} ({code})
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            {info.description}
          </h2>
        </div>
      </div>

      {/* --- INTRO: THE RETAIL EXPERIENCE (New Section for Word Count) --- */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20 mb-16 text-center">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100">
          <div className="w-16 h-1.5 bg-[#0C1A47] mb-8 mx-auto rounded-full" />
          <h3 className="text-3xl font-bold text-[#0C1A47] mb-6">
            Curated Local & Global Brands
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            The shopping experience at {airport?.name} is designed to be more
            than just a transit necessity; it is a final opportunity to taste
            and purchase the region's heritage. The retail zones feature a blend
            of international luxury houses—offering perfumes, spirits, and
            fashion—alongside dedicated corners for authentic Greek products.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Travelers can expect to find premium extra virgin olive oil, thyme
            honey, traditional sweets like Loukoumi, and award-winning local
            wines. For those seeking wellness products, Greek natural cosmetics
            brands such as Korres and Apivita have a strong presence, offering
            travel-sized kits perfect for gifts or personal use during your
            journey.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Duty Free */}
          <div className="bg-linear-to-br from-[#1B3168] to-[#12224A] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Duty Free</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              {info.dutyFreeText}
            </p>
          </div>

          {/* Card 2: Essentials */}
          <div className="bg-linear-to-br from-[#5E2C91] to-[#3F1D65] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Travel Essentials
              </h3>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              {info.essentialsText}
            </p>
          </div>

          {/* Card 3: Local Tip */}
          <div className="bg-linear-to-br from-[#1E293B] to-[#0F172A] rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 p-3 rounded-full text-[#FFD600] shadow-sm backdrop-blur-sm">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Local Tip</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed italic">
              “{info.localTip}”
            </p>
          </div>

          {/* Card 4: CTA */}
          <div className="bg-[#FFD600] rounded-[2.5rem] p-10 text-[#0C1A47] shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10 blur-2xl" />
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-[#0C1A47]/10 p-3 rounded-full text-[#0C1A47]">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Shopping Haul?</h3>
              </div>
              <p className="text-[#0C1A47]/80 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                Need extra luggage space for your purchases? Book a spacious van
                transfer to your hotel.
              </p>
            </div>
            <a
              href={info.bookingLink}
              target="_blank"
              rel="nofollow noreferrer"
              className="
                flex items-center justify-between 
                bg-[#0C1A47] text-white
                px-6 py-4 rounded-xl 
                font-bold text-lg
                hover:bg-[#1E2C79] transition-colors duration-300
                relative z-10
              "
            >
              <span>Book Spacious Transfer</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER: SMART SHOPPER'S GUIDE (Adds ~400 words) --- */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <CreditCard className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Smart Shopper's Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Regulations */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FFD600]" />
                  Liquids & Security (STEB)
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A common concern for travelers is buying olive oil, wine, or
                  spirits at the airport. Items purchased in the airside Duty
                  Free shops are exempt from the 100ml liquid restriction. The
                  cashier will place your bottles in a Sealed Tamper-Evident Bag
                  (STEB) along with the receipt.
                  <strong>Do not open this bag</strong> until you reach your
                  final destination, especially if you have a connecting flight,
                  as security at transfer airports will confiscate unsealed
                  liquids.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Percent className="w-5 h-5 text-[#FFD600]" />
                  Tax Free vs. Travel Value
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "Duty Free" prices (no VAT/excise) apply only if you are
                  flying to a non-EU destination (e.g., UK, USA, UAE). However,
                  most shops in Greek airports operate as "Travel Value" stores
                  for EU passengers, often absorbing the VAT to offer prices
                  that are still 15-20% lower than the high street for perfumes,
                  cosmetics, and sunglasses. Tobacco and alcohol, however,
                  remain at full price for EU travelers.
                </p>
              </div>
            </div>

            {/* Logistics */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD600]" />
                  Opening Hours
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Airport retail hours are strictly aligned with the flight
                  schedule. In major hubs like Athens, the main shops operate
                  24/7. In regional airports like Mykonos or Santorini, shops
                  open approximately 2 hours before the first flight of the day
                  and remain open until the final departure boards. You will
                  generally find essential shops open regardless of your flight
                  time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Wine className="w-5 h-5 text-[#FFD600]" />
                  What to Bring Home
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The best value items to purchase at Greek airports are
                  typically local spirits (Ouzo, Tsipouro, Mastic), Greek
                  gourmet food sets (perfectly packaged for travel), and
                  pharmacy-brand cosmetics (Korres, Apivita) which are
                  significantly cheaper in Greece than abroad. International
                  cigarettes and tobacco also offer substantial savings for
                  non-EU residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
