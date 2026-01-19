"use client";

import React, { useState, useEffect } from "react";
import { useAirport } from "@/context/AirportContext";
import {
  Car,
  Bus,
  Train,
  Clock,
  MapPin,
  CreditCard,
  Star,
  AlertTriangle,
  Briefcase,
  Baby,
  Moon,
  Info,
} from "lucide-react";

// --- REAL HUMAN FACES (Copyright Free - Unsplash) ---
const avatarUrls = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&h=64&q=80",
];

// --- APP STORE ASSETS ---
const APP_STORE_BADGE =
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const PLAY_STORE_BADGE =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

// --- LINKS ---
const IOS_LINK =
  "https://apps.apple.com/gr/app/aegean-taxi-ride-app/id6447252101";
const ANDROID_LINK =
  "https://play.google.com/store/apps/details?id=aegean.taxi.ride.app.mykonos.santorini.athens.greece.passenger";

// --- DYNAMIC TRANSPORT DATA (Unchanged) ---
const TRANSPORT_DATA: Record<
  string,
  {
    regionName: string;
    aegeanLink: string;
    hasMetro: boolean;
    busInfo: { name: string; price: string; frequency: string; tip: string };
    taxiInfo: { priceEstimate: string; issue: string };
    rentalInfo: { popular: boolean; note: string };
  }
> = {
  ATH: {
    regionName: "Athens",
    aegeanLink: "https://www.aegeantaxi.com/athens",
    hasMetro: true,
    busInfo: {
      name: "Express Bus (X95, X96)",
      price: "€5.50",
      frequency: "Every 20-30 min",
      tip: "Good for budget, but can get crowded and stuck in traffic.",
    },
    taxiInfo: {
      priceEstimate: "€40 (Day) / €55 (Night)",
      issue: "Flat rate applies. Queues can be long at Arrivals.",
    },
    rentalInfo: {
      popular: true,
      note: "Good for road trips to Peloponnese, but not needed for City Center.",
    },
  },
  JMK: {
    regionName: "Mykonos",
    aegeanLink: "https://www.aegeantaxi.com/mykonos",
    hasMetro: false,
    busInfo: {
      name: "KTEL Bus",
      price: "~€2.00",
      frequency: "Seasonal (Hourly)",
      tip: "Extremely crowded in July/Aug. Often standing room only.",
    },
    taxiInfo: {
      priceEstimate: "€30 - €45",
      issue:
        "Only ~30 taxis for the whole island. Wait times can exceed 1 hour.",
    },
    rentalInfo: {
      popular: true,
      note: "Parking in town is impossible. We recommend transfers instead.",
    },
  },
  JTR: {
    regionName: "Santorini",
    aegeanLink: "https://www.aegeantaxi.com/santorini",
    hasMetro: false,
    busInfo: {
      name: "KTEL Bus",
      price: "€1.80 - €2.50",
      frequency: "Every 30-60 min",
      tip: "Buses go to Fira hub first. You often need to change buses for Oia.",
    },
    taxiInfo: {
      priceEstimate: "€35 - €50",
      issue: "Severe shortage of taxis during sunset hours and flight waves.",
    },
    rentalInfo: {
      popular: true,
      note: "Roads are narrow and steep. ATV/Quad rentals are common but risky.",
    },
  },
  SKG: {
    regionName: "Thessaloniki",
    aegeanLink: "https://www.aegeantaxi.com/thessaloniki",
    hasMetro: false,
    busInfo: {
      name: "X1 / N1 (Night)",
      price: "€2.00",
      frequency: "Every 20-30 min",
      tip: "Reliable service to city center and train station.",
    },
    taxiInfo: {
      priceEstimate: "€25 - €35",
      issue: "Reasonable availability, but surge pricing applies on apps.",
    },
    rentalInfo: {
      popular: true,
      note: "Great gateway for driving to Halkidiki resorts.",
    },
  },
  HER: {
    regionName: "Crete",
    aegeanLink: "https://www.aegeantaxi.com/crete",
    hasMetro: false,
    busInfo: {
      name: "City Bus / KTEL",
      price: "€1.50 - €4.00",
      frequency: "Frequent",
      tip: "Two different bus stations (A & B). Verify your destination first.",
    },
    taxiInfo: {
      priceEstimate: "€20 (City) / €40+ (Resorts)",
      issue: "City taxis are blue/grey. Negotiate price for long distances.",
    },
    rentalInfo: {
      popular: true,
      note: "Almost essential for exploring Crete properly.",
    },
  },
  CFU: {
    regionName: "Corfu",
    aegeanLink: "https://www.aegeantaxi.com/corfu",
    hasMetro: false,
    busInfo: {
      name: "Blue Bus (Line 15)",
      price: "€1.70",
      frequency: "Every 30 min",
      tip: "Connects airport to Corfu Town & Port quickly.",
    },
    taxiInfo: {
      priceEstimate: "€15 - €25",
      issue: "Queues are common when UK charters land.",
    },
    rentalInfo: {
      popular: true,
      note: "Roads are winding. Small cars are recommended.",
    },
  },
  RHO: {
    regionName: "Rhodes",
    aegeanLink: "https://www.aegeantaxi.com/rhodes",
    hasMetro: false,
    busInfo: {
      name: "RODA Bus",
      price: "€2.50",
      frequency: "Every 20-30 min",
      tip: "Bus stop is outside the terminal to the left.",
    },
    taxiInfo: {
      priceEstimate: "€30 (Town) / €60+ (Lindos)",
      issue: "Fixed rates exist but verify before entering.",
    },
    rentalInfo: {
      popular: true,
      note: "Large island, car recommended for seeing the south.",
    },
  },
  PAS: {
    regionName: "Paros",
    aegeanLink: "https://www.aegeantaxi.com/paros",
    hasMetro: false,
    busInfo: {
      name: "KTEL Paros",
      price: "€3.00",
      frequency: "Varies by flight",
      tip: "Buses wait for flights but fill up instantly. Have cash ready.",
    },
    taxiInfo: {
      priceEstimate: "€35 - €50",
      issue: "Extremely scarce. Pre-booking is virtually mandatory in August.",
    },
    rentalInfo: {
      popular: true,
      note: "Good for exploring, but parking in Naoussa is difficult.",
    },
  },
  JNX: {
    regionName: "Naxos",
    aegeanLink: "https://www.aegeantaxi.com/naxos",
    hasMetro: false,
    busInfo: {
      name: "KTEL Naxos",
      price: "€2.00",
      frequency: "Limited",
      tip: "Airport is very close to town (3km), but walking is not safe with bags.",
    },
    taxiInfo: {
      priceEstimate: "€15 - €25",
      issue: "Very few taxis serve the airport loop.",
    },
    rentalInfo: {
      popular: true,
      note: "Recommended for reaching Plaka and Agia Anna beaches.",
    },
  },
  ZTH: {
    regionName: "Zakynthos",
    aegeanLink: "https://www.aegeantaxi.com/zakynthos",
    hasMetro: false,
    busInfo: {
      name: "KTEL Zakynthos",
      price: "€2.00",
      frequency: "Seasonal",
      tip: "Service to Laganas and Town exists but schedules are unreliable.",
    },
    taxiInfo: {
      priceEstimate: "€20 - €30",
      issue: "High demand during party season (July/Aug).",
    },
    rentalInfo: {
      popular: true,
      note: "Popular for visiting Shipwreck beach viewpoints.",
    },
  },
  KGS: {
    regionName: "Kos",
    aegeanLink: "https://www.aegeantaxi.com/kos",
    hasMetro: false,
    busInfo: {
      name: "KTEL Kos",
      price: "€3.20",
      frequency: "Frequent (Summer)",
      tip: "Connecting Airport to Kos Town and Mastichari port.",
    },
    taxiInfo: {
      priceEstimate: "€35 - €45",
      issue: "Airport is far (24km) from Kos Town. Meter usually used.",
    },
    rentalInfo: {
      popular: true,
      note: "Flat island, easy driving conditions.",
    },
  },
  EFL: {
    regionName: "Kefalonia",
    aegeanLink: "https://www.aegeantaxi.com/kefalonia",
    hasMetro: false,
    busInfo: {
      name: "KTEL Kefalonia",
      price: "€2.00",
      frequency: "Very Limited",
      tip: "Often only a few buses per day. Do not rely on it for late arrivals.",
    },
    taxiInfo: {
      priceEstimate: "€20 (Argostoli) / €50+ (Fiskardo)",
      issue: "Distances are huge. Taxi to Fiskardo is expensive.",
    },
    rentalInfo: {
      popular: true,
      note: "Essential. The island is massive and mountainous.",
    },
  },
  MLO: {
    regionName: "Milos",
    aegeanLink: "https://www.aegeantaxi.com/milos",
    hasMetro: false,
    busInfo: {
      name: "Milos Bus",
      price: "€2.00",
      frequency: "Sparse",
      tip: "Connects Airport to Adamas port. Schedule changes monthly.",
    },
    taxiInfo: {
      priceEstimate: "€20 - €30",
      issue: "Only ~15 taxis on the entire island. Impossible to find at rank.",
    },
    rentalInfo: {
      popular: true,
      note: "ATVs are very popular here for the dirt roads.",
    },
  },
  BJV: {
    regionName: "Bodrum",
    aegeanLink: "https://www.aegeantaxi.com",
    hasMetro: false,
    busInfo: {
      name: "Havas / Muttaş",
      price: "100-150 TRY",
      frequency: "Flight connected",
      tip: "Buses wait for domestic flights. Pay in Lira or Card.",
    },
    taxiInfo: {
      priceEstimate: "€35 - €50 (Equiv)",
      issue: "Yellow taxis. Ensure meter is on. Euro exchange rate varies.",
    },
    rentalInfo: {
      popular: true,
      note: "Traffic in Bodrum center is very heavy in summer.",
    },
  },
  DEFAULT: {
    regionName: "the area",
    aegeanLink: "https://www.aegeantaxi.com",
    hasMetro: false,
    busInfo: {
      name: "Public Bus",
      price: "€2.00 - €5.00",
      frequency: "Varies",
      tip: "Check schedules at the information desk.",
    },
    taxiInfo: {
      priceEstimate: "Metered",
      issue: "Availability varies by season.",
    },
    rentalInfo: { popular: true, note: "Available at arrivals." },
  },
};

export default function TransportOverviewClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const data = TRANSPORT_DATA[code] || TRANSPORT_DATA["DEFAULT"];

  // --- DEVICE DETECTION ---
  const [os, setOs] = useState<"ios" | "android" | "other">("other");

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setOs("android");
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      setOs("ios");
    } else {
      setOs("other");
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER (Deep Navy) */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Car className="w-5 h-5" />
            <span>Getting Around</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Transport Overview <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airport?.name || "Airport"}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Comparing the best ways to get to and from the airport. From luxury
            transfers to budget buses, here is what you need to know.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 -mt-16 relative z-20 pb-20">
        {/* --- INTRO: CHOOSING THE RIGHT MODE (New Section) --- */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg mb-16 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Choosing Your Transfer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Navigating the transport options at {airport?.name} depends
                heavily on your priorities. If speed and comfort are paramount,
                especially after a long flight, private transfers or taxi apps
                are the superior choice. They eliminate the need to haul luggage
                to bus stops or negotiate with drivers at the rank.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Budget Considerations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For budget-conscious travelers, the public bus network provides
                a reliable connection to the main town centers. However, this
                option requires patience, as frequencies vary by season and
                buses often fill up quickly during peak arrival waves. Rental
                cars offer freedom but come with parking challenges in the
                historic centers.
              </p>
            </div>
          </div>
        </div>

        {/* --- 1. FEATURED OPTION (Deep Blue Gradient) --- */}
        <div className="bg-linear-to-br from-[#1B3168] to-[#12224A] rounded-[2.5rem] shadow-2xl overflow-hidden mb-16 text-white border border-white/10">
          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#FFD600] text-[#0C1A47] px-4 py-1.5 rounded-full text-sm font-bold w-fit mb-6 shadow-md">
                <Star className="w-4 h-4 fill-[#0C1A47]" />
                Recommended Choice
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Aegean Taxi App
              </h2>

              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
                Skip the stress of {data.regionName}’s taxi queues. Book a
                professional driver instantly via the app.
              </p>

              {/* DYNAMIC APP BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-6 md:items-center items-start">
                <div className="flex items-center gap-4">
                  {/* Show Apple Button if iOS or Desktop */}
                  {(os === "ios" || os === "other") && (
                    <a
                      href={IOS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={APP_STORE_BADGE}
                        alt="Download on the App Store"
                        className="h-10 w-auto"
                      />
                    </a>
                  )}

                  {/* Show Google Button if Android or Desktop */}
                  {(os === "android" || os === "other") && (
                    <a
                      href={ANDROID_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={PLAY_STORE_BADGE}
                        alt="Get it on Google Play"
                        className="h-10 w-auto"
                      />
                    </a>
                  )}
                </div>

                {/* REAL FACES */}
                <div className="flex items-center gap-3 px-2 py-1">
                  <div className="flex -space-x-3">
                    {avatarUrls.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt={`Rider ${i + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-[#1B3168] object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-blue-200 md:pl-2">
                    500k+ Riders
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual / Benefits Side (Deep Purple Gradient) */}
            <div className="bg-linear-to-br from-[#5E2C91] to-[#3F1D65] p-8 md:p-14 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Why choose us in {data.regionName}?
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Zero Wait Time",
                    desc: "Driver meets you at Arrivals.",
                  },
                  {
                    icon: CreditCard,
                    title: "Fixed Pricing",
                    desc: "Know the cost upfront. No meters.",
                  },
                  {
                    icon: MapPin,
                    title: "Door-to-Door",
                    desc: "Direct to your hotel or villa.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl text-[#FFD600]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold block text-lg text-white">
                        {item.title}
                      </span>
                      <span className="text-purple-200 text-base">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- 2. STANDARD OPTIONS GRID --- */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* OPTION A: PUBLIC BUS */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#F3F4FE] rounded-2xl flex items-center justify-center text-[#0C1A47] mb-6">
              <Bus className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0C1A47] mb-2">
              {data.busInfo.name}
            </h3>
            <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
              {data.busInfo.frequency}
            </p>
            <div className="text-3xl font-bold text-[#0C1A47] mb-6">
              {data.busInfo.price}
            </div>
            <div className="bg-[#F3F4FE] p-5 rounded-2xl border border-[#0C1A47]/5">
              <p className="text-sm text-[#0C1A47] font-bold flex gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#FFD600]" />
                Note
              </p>
              <p className="text-sm text-[#0C1A47]/70 leading-relaxed">
                {data.busInfo.tip}
              </p>
            </div>
          </div>

          {/* OPTION B: STANDARD TAXI */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-[#FFF9CC] rounded-2xl flex items-center justify-center text-[#B39200] mb-6">
              <Car className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0C1A47] mb-2">
              Standard Taxi
            </h3>
            <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
              Metered / Rank
            </p>
            <div className="text-3xl font-bold text-[#0C1A47] mb-6">
              {data.taxiInfo.priceEstimate}
            </div>
            <div className="bg-[#FFF9CC]/30 p-5 rounded-2xl border border-[#FFF9CC]">
              <p className="text-sm text-[#8A7000] font-bold flex gap-2 mb-2">
                <AlertTriangle className="w-4 h-4" />
                Warning
              </p>
              <p className="text-sm text-[#8A7000]/80 leading-relaxed">
                {data.taxiInfo.issue}
              </p>
            </div>
          </div>

          {/* OPTION C: METRO or RENTAL */}
          {data.hasMetro ? (
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <Train className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47] mb-2">
                Metro Line 3
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
                Every 30 mins
              </p>
              <div className="text-3xl font-bold text-[#0C1A47] mb-6">
                €9.00
              </div>
              <p className="text-[#0C1A47]/70 text-sm leading-relaxed">
                Fastest way to Syntagma Square during rush hour traffic.
                Operates 06:30 - 23:30.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 mb-6">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47] mb-2">
                Car Rental
              </h3>
              <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
                Self-drive
              </p>
              <div className="text-3xl font-bold text-[#0C1A47] mb-6">
                €40+/day
              </div>
              <p className="text-[#0C1A47]/70 text-sm leading-relaxed">
                {data.rentalInfo.note}
              </p>
            </div>
          )}
        </div>

        {/* --- 3. LOGISTICS FAQ (New Section) --- */}
        <div className="mt-16 bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Essential Travel Logistics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Moon className="w-5 h-5 text-[#FFD600]" />
                Night Rates
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Standard taxis in Greece operate with a double tariff system.
                From <strong>midnight to 05:00 AM</strong>, meter rates increase
                significantly (Tariff 2). If you choose a pre-booked transfer
                via the Aegean Taxi app, the price is fixed regardless of the
                time of day, protecting you from unexpected night surcharges.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Baby className="w-5 h-5 text-[#FFD600]" />
                Child Seats
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Standard metered taxis are rarely equipped with child seats and
                are not legally required to carry them for impromptu rides. If
                you are traveling with infants or young children, booking a
                private transfer in advance allows you to request appropriate
                safety seats, ensuring a secure journey to your destination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#FFD600]" />
                Luggage Capacity
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                The average sedan taxi has limited trunk space, typically
                fitting 2 large suitcases. If you are traveling with sports
                equipment (like golf clubs or surfboards) or excess luggage, it
                is advisable to book a Van class vehicle. Public buses have
                underbelly storage but require you to load and unload your own
                bags.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFD600]" />
                Wait Times
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                During peak summer months (July-August), taxi queues at island
                airports can exceed 45 minutes. Bus schedules are generally
                reliable but frequencies may drop on weekends. Pre-booking a
                transfer guarantees a driver will be waiting for you at the
                arrivals hall, bypassing the public queue entirely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
