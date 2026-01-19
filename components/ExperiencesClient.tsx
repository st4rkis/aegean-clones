"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  Utensils,
  ShoppingBag,
  Armchair,
  Moon,
  ArrowRight,
  PlaneTakeoff,
  Gem,
  ShoppingBasket,
  Gift,
  Coffee,
  CreditCard,
} from "lucide-react";

export default function ExperiencesClient() {
  const airport = useAirport();
  const airportName = airport?.name || "the Airport";
  const airportCode = airport?.key || "JMK";

  const EXPERIENCES_SECTIONS = [
    {
      title: "Dining & Restaurants",
      description:
        "From quick bites to sit-down meals. Explore cafes and food courts.",
      href: "/experiences/dining",
      icon: Utensils,
    },
    {
      title: "Shopping & Duty Free",
      description:
        "Luxury brands, local gifts, and travel essentials tax-free.",
      href: "/experiences/shopping",
      icon: ShoppingBag,
    },
    {
      title: "Airport Lounges",
      description:
        "Escape the crowds. Enjoy complimentary food, drinks, and Wi-Fi.",
      href: "/experiences/lounges",
      icon: Armchair,
    },
    {
      title: "Relax & Refresh",
      description:
        "Quiet zones and comfortable seating areas to recharge before flying.",
      href: "/experiences/relax",
      icon: Moon,
    },
    {
      title: "VIP Concierge",
      description:
        "Exclusive lifestyle management, luxury transfers, and bespoke services.",
      href: "/experiences/concierge",
      icon: Gem,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Airport Experiences <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              at {airportName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Make the most of your time at {airportName}. Discover world-class
            dining, exclusive lounges, and premium shopping avenues.
          </p>
        </div>
      </div>

      {/* --- INTRO TEXT BLOCK (Adds Context & Volume) --- */}
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-10 text-center">
        <div className="w-16 h-1.5 bg-[#FFD600] mb-8 mx-auto rounded-full" />
        <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
          Leisure at the Terminal
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Modern travel involves significant dwell time within the terminal
          environment. The infrastructure at {airportName} has been curated to
          transform this waiting period into a comfortable experience. Whether
          you are looking to purchase last-minute souvenirs from the local
          region, enjoy a meal before a long flight, or simply find a quiet
          corner to work, the facility offers a range of commercial and leisure
          zones designed to meet the needs of the contemporary traveler.
        </p>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_SECTIONS.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <Link
                key={idx}
                href={item.href}
                className="group flex flex-col justify-between p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 bg-[#F3F4FE] text-[#0C1A47] group-hover:bg-[#0C1A47] group-hover:text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#0C1A47]">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#0C1A47] font-bold text-lg">
                  Explore
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}

          {/* --- PRIORITY LANE CARD --- */}
          <div className="p-10 bg-[#F8F9FC] rounded-[2.5rem] border border-gray-100 flex flex-col justify-center lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD600]/20 text-[#FFD600]">
                <PlaneTakeoff className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0C1A47]">
                Priority Lane
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Traveling business class or holding a gold status card? Look for
              the dedicated Fast Track security lanes to bypass the main queues.
            </p>
          </div>
        </div>
      </div>

      {/* --- RETAIL & LEISURE GUIDE (New Section for Word Count) --- */}
      <div className="bg-[#F8F9FC] py-20 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Column 1: Shopping Guide */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0C1A47]">
                <Gift className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Retail Guide
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Authentic Greek Products
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The airport retail zone places a strong emphasis on promoting
                local heritage. Travelers can find dedicated sections within the
                Duty Free and Travel Value shops offering authentic regional
                products. This typically includes extra virgin olive oil, thyme
                honey, traditional spirits like Ouzo and Metaxa, and skincare
                products based on natural Greek flora.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                For those traveling within the EU, "Travel Value" shops offer
                products at prices similar to the duty-free rate, though alcohol
                and tobacco may still be subject to local taxes. If you are
                flying directly to a non-EU destination, you can access the full
                tax-free allowance on luxury goods, perfumes, and electronics.
              </p>
            </div>

            {/* Column 2: Lounge Access */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0C1A47]">
                <CreditCard className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Hospitality
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Accessing VIP Lounges
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Business lounges at {airportName} are not restricted solely to
                First Class passengers. Most facilities operate on an
                open-access basis, welcoming members of programs such as
                Priority Pass, DragonPass, and LoungeKey. If you do not hold a
                membership, walk-in entry can often be purchased at the
                reception desk, subject to capacity limits during peak hours.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Inside, passengers can expect comfortable seating, complimentary
                high-speed Wi-Fi, and a selection of hot and cold snacks. For
                business travelers, these quiet zones are essential for
                productivity, offering a distinct separation from the bustle of
                the main departure hall.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO FOOTER CONTENT (Bulk Text) --- */}
      <div className="bg-[#0C1A47] text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/10 rounded-xl">
              <ShoppingBasket className="w-8 h-8 text-[#FFD600]" />
            </div>
            <h2 className="text-3xl font-bold">Terminal Amenities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-blue-100 leading-relaxed">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Shopping Logistics
              </h3>
              <p className="mb-6 text-lg">
                Travelers departing from the facility have access to a variety
                of retail options. The core offering includes Duty Free shops
                which provide perfumes, cosmetics, tobacco, and local spirits at
                competitive prices. Passengers traveling outside the EU should
                enquire about tax-free purchasing limits at the cashier desk.
              </p>
              <p className="text-lg">
                Additionally, the terminal hosts a selection of kiosks featuring
                magazines, travel accessories, and authentic Greek products.
                Please note that all liquids purchased after security are sealed
                in secure tamper-evident bags (STEB). Do not open these bags
                before reaching your final destination, especially if you have a
                connecting flight, as this may void the security screening.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Dining & Comfort
              </h3>
              <p className="mb-6 text-lg">
                Food and beverage outlets are strategically located in both the
                public landside area and the airside departure lounges. Options
                range from grab-and-go coffee stations for passengers on a tight
                schedule to sit-down eateries offering Mediterranean cuisine.
              </p>
              <p className="text-lg">
                For those seeking relaxation, seating areas are available
                throughout the concourse. Charging stations for mobile devices
                are typically integrated into the seating rows or located near
                the dining areas, ensuring you remain connected throughout your
                journey. Most cafes also provide free Wi-Fi access to paying
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
