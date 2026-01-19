"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  Utensils,
  Coffee,
  Clock,
  Info,
  MapPin,
  ChefHat,
  ArrowRight,
  Wheat,
  Wine,
  Droplets,
  Baby,
} from "lucide-react";

// --- REAL WORLD DINING DATA (UNCHANGED) ---
const DINING_DATA: Record<
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
      "Mykonos Airport offers a select range of stylish cafes and snack bars, mostly renovated to match the island's chic aesthetic.",
    highlights: [
      "Everest for quick bites",
      "Starbucks for coffee",
      "Local Greek pastries",
    ],
    spots: [
      {
        name: "Everest",
        type: "Sandwiches & Coffee",
        location: "Departures, All Users",
      },
      {
        name: "Starbucks",
        type: "Coffee House",
        location: "Departures, Airside",
      },
      { name: "Elia", type: "Greek Bakery", location: "Departures, Landside" },
      {
        name: "Flocafe",
        type: "Espresso Room",
        location: "Departures, Airside",
      },
    ],
  },
  // Athens
  ATH: {
    description:
      "Athens Airport features a massive food court with options ranging from authentic Greek cuisine to major international chains.",
    highlights: [
      "Burger King",
      "Eat Greek Kouzina",
      "La Pasteria",
      "Venetis Bakery",
    ],
    spots: [
      {
        name: "Burger King",
        type: "Fast Food",
        location: "Departures Level 2",
      },
      {
        name: "Eat Greek",
        type: "Authentic Greek",
        location: "Departures, Airside",
      },
      { name: "La Pasteria", type: "Italian", location: "Departures, Airside" },
      {
        name: "Venetis",
        type: "Bakery & Coffee",
        location: "Departures, Landside",
      },
      {
        name: "Gregory's",
        type: "Greek Snacks",
        location: "Departures, Airside",
      },
      { name: "Starbucks", type: "Coffee", location: "Departures, Airside" },
    ],
  },
  // Santorini
  JTR: {
    description:
      "Santorini's renovated terminal offers modern dining spots with a focus on quick, quality options.",
    highlights: ["Bonheur", "Holy Burger", "So Very Greek"],
    spots: [
      {
        name: "Bonheur",
        type: "Snacks & Coffee",
        location: "Departures, Schengen",
      },
      { name: "Holy Burger", type: "Burgers", location: "Departures, Airside" },
      {
        name: "So Very Greek",
        type: "Local Cuisine",
        location: "Departures, Airside",
      },
      {
        name: "French Bakery",
        type: "Pastries",
        location: "Departures, All Users",
      },
      {
        name: "Summer Breeze",
        type: "Bar & Snacks",
        location: "Departures, Non-Schengen",
      },
    ],
  },
  // Heraklion
  HER: {
    description:
      "Heraklion Airport has busy food outlets serving the millions of tourists visiting Crete each year.",
    highlights: ["Goody's Burger House", "Flocafe", "Everest"],
    spots: [
      {
        name: "Goody's Burger House",
        type: "Burgers",
        location: "Departures, Airside",
      },
      { name: "Everest", type: "Sandwiches", location: "Departures, Airside" },
      {
        name: "Flocafe",
        type: "Coffee Chain",
        location: "Departures, Landside",
      },
      {
        name: "Forno Luca",
        type: "Pizza & Pasta",
        location: "Departures, Airside",
      },
    ],
  },
  // Corfu
  CFU: {
    description:
      "Corfu Airport offers a surprisingly diverse mix of international brands and local favorites.",
    highlights: ["Pret A Manger", "Bentley's", "Burger King"],
    spots: [
      {
        name: "Pret A Manger",
        type: "Organic Coffee & Food",
        location: "Departures, Schengen",
      },
      {
        name: "Burger King",
        type: "Fast Food",
        location: "Departures, Schengen",
      },
      {
        name: "Bentley's",
        type: "Bar & Lounge",
        location: "Departures, Non-Schengen",
      },
      {
        name: "Forno Luca",
        type: "Italian",
        location: "Departures, All Users",
      },
      {
        name: "Everest Exclusive",
        type: "Snacks",
        location: "Departures, All Users",
      },
    ],
  },
  // Rhodes
  RHO: {
    description:
      "Rhodes Diagoras Airport boasts one of the most complete dining selections among the islands.",
    highlights: ["Starbucks", "Gregory's", "Goody's"],
    spots: [
      { name: "Starbucks", type: "Coffee", location: "Departures, Schengen" },
      {
        name: "Gregory's",
        type: "Greek Pies & Coffee",
        location: "Departures, All Users",
      },
      {
        name: "Goody's Burger House",
        type: "Burgers",
        location: "Departures, Non-Schengen",
      },
      { name: "Cup&Plate", type: "Cafe", location: "Departures, Schengen" },
      {
        name: "Aircanteen",
        type: "Snack Bar",
        location: "Departures, Landside",
      },
    ],
  },
  // Thessaloniki
  SKG: {
    description:
      "Thessaloniki is a food capital, and its airport reflects that with excellent pastries and modern dining.",
    highlights: ["Terkenlis", "Pret A Manger", "Fabrica"],
    spots: [
      {
        name: "Terkenlis",
        type: "Famous Sweets (Tsoureki)",
        location: "Departures & Arrivals",
      },
      {
        name: "Pret A Manger",
        type: "Fresh Food",
        location: "Departures, Schengen",
      },
      {
        name: "Fabrica",
        type: "Modern Bakery",
        location: "Departures, Landside",
      },
      {
        name: "Bistro dei Cavalieri",
        type: "Italian",
        location: "Departures, Schengen",
      },
      {
        name: "Eatgreek Kouzina",
        type: "Greek Food",
        location: "Departures, Schengen",
      },
    ],
  },
  // Kefalonia (EFL)
  EFL: {
    description:
      "Kefalonia Airport offers a modern selection of dining, featuring a Greek-Italian bistro and a dedicated beer bar for travelers.",
    highlights: ["Grecale", "The Bakeair", "Sir Barley"],
    spots: [
      {
        name: "Grecale",
        type: "Greek & Italian",
        location: "Departures, Schengen",
      },
      {
        name: "The Bakeair",
        type: "Bakery & Coffee",
        location: "Departures, Landside",
      },
      {
        name: "Sir Barley",
        type: "Beer & Burgers",
        location: "Departures, Non-Schengen",
      },
      {
        name: "Ontime Coffee",
        type: "Cafe",
        location: "Departures, Extra Schengen",
      },
    ],
  },
  // Zakynthos
  ZTH: {
    description:
      "Zakynthos Airport has seen major upgrades, bringing international brands to its departures hall.",
    highlights: ["The Barrels", "Pret A Manger"],
    spots: [
      {
        name: "The Barrels GastroPub",
        type: "Pub Food & Drinks",
        location: "Departures, Non-Schengen",
      },
      {
        name: "Pret A Manger",
        type: "Sandwiches & Coffee",
        location: "Departures, Schengen",
      },
      { name: "Aircanteen", type: "Snacks", location: "Departures, All Users" },
      { name: "Inn & Hub", type: "Cafe", location: "Departures, Airside" },
    ],
  },
  // Kos
  KGS: {
    description:
      "Kos Airport offers a solid variety of dining spots, including several well-known international chains.",
    highlights: ["Burger King", "Starbucks", "Negroni"],
    spots: [
      {
        name: "Burger King",
        type: "Fast Food",
        location: "Departures, Schengen",
      },
      { name: "Starbucks", type: "Coffee", location: "Departures, Schengen" },
      {
        name: "Negroni",
        type: "Pizza & Aperitivo",
        location: "Departures, Non-Schengen",
      },
      { name: "Panopolis", type: "Bakery", location: "Departures, Landside" },
      {
        name: "Pub",
        type: "Beer & Snacks",
        location: "Departures, Non-Schengen",
      },
    ],
  },
  // Paros
  PAS: {
    description:
      "Paros Airport is small. Dining is limited to basic airside and landside cafes.",
    highlights: ["Airside Snack Bar", "Landside Cafe"],
    spots: [
      {
        name: "Flocafe",
        type: "Coffee & Snacks",
        location: "Departures, Airside",
      },
      {
        name: "Airport Cafe",
        type: "Beverages",
        location: "Departures, Landside",
      },
    ],
  },
  // Naxos
  JNX: {
    description: "Naxos Airport is tiny. Facilities are minimal.",
    highlights: ["Small Snack Bar"],
    spots: [
      { name: "Mini Bar", type: "Coffee & Toast", location: "Departures Hall" },
    ],
  },
  // Milos
  MLO: {
    description:
      "Milos Airport has very limited facilities. Plan to eat before you arrive.",
    highlights: ["Basic Kiosk"],
    spots: [
      {
        name: "Airport Kiosk",
        type: "Coffee & Packaged Snacks",
        location: "Check-in Area",
      },
    ],
  },
  // Bodrum
  BJV: {
    description:
      "Bodrum Airport offers expansive dining options across its international and domestic terminals.",
    highlights: ["Starbucks", "Tadinda Anadolu", "Burger King"],
    spots: [
      {
        name: "Starbucks",
        type: "Coffee",
        location: "International Departures",
      },
      {
        name: "Tadinda Anadolu",
        type: "Turkish Cuisine",
        location: "Domestic Departures",
      },
      { name: "Burger King", type: "Fast Food", location: "Food Court" },
      { name: "Cakes & Bakes", type: "Bakery", location: "Airside" },
    ],
  },

  // Default Fallback
  DEFAULT: {
    description:
      "Dining options vary by terminal. Most airports offer at least one cafe and snack bar.",
    highlights: ["Coffee Shop", "Snack Bar"],
    spots: [
      {
        name: "Airport Cafe",
        type: "Coffee & Snacks",
        location: "Main Terminal",
      },
    ],
  },
};

export default function DiningClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = DINING_DATA[code] || DINING_DATA["DEFAULT"];

  return (
    <section className="min-h-screen bg-[#F8F9FC] font-sans">
      {/* 1. STUNNING HERO SECTION */}
      <div className="relative w-full bg-[#0C1A47] pt-32 pb-24 px-6 overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E2C79] rounded-full blur-3xl opacity-50 -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD600] rounded-full blur-3xl opacity-10 -ml-20 -mb-20 pointer-events-none" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-widest text-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Utensils className="w-5 h-5" />
            <span>Taste of the Terminal</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Dining at {airport?.name || "Airport"}
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {info.description}
          </p>

          {/* Highlights Badges */}
          <div className="mt-10 flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            {info.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-md"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 -mt-10 relative z-20">
        {/* --- INTRO: CULINARY LANDSCAPE --- */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#F3F4FE] rounded-full text-[#0C1A47]">
              <ChefHat className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0C1A47]">
              Terminal Gastronomy
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 leading-relaxed text-lg">
            <p>
              Travelers moving through the terminal will find a curated
              selection of food and beverage outlets designed to cater to both
              the leisure tourist and the business commuter. The commercial
              zones feature a blend of well-known international chains, offering
              familiar comfort foods and reliable coffee standards, alongside
              local Greek brands that provide a final taste of the region's
              culinary heritage.
            </p>
            <p>
              Whether you require a substantial meal before a long-haul flight
              or a quick grab-and-go snack while rushing to the gate, the
              facility is structured to provide efficient service without
              compromising on quality. Most outlets are strategically located
              airside (after security) to allow passengers to relax near their
              boarding gates.
            </p>
          </div>
        </div>

        {/* --- RESTAURANT GRID --- */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-[#0C1A47] text-3xl font-bold tracking-tight">
              Restaurants & Cafes
            </h2>
            <div className="hidden md:block h-px flex-1 bg-gray-200 ml-8 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.spots.map((spot, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FFD600]/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-[#F3F4FE] group-hover:bg-[#0C1A47] group-hover:text-[#FFD600] transition-colors duration-300 text-[#0C1A47]">
                    {spot.type.includes("Coffee") ? (
                      <Coffee className="w-6 h-6" />
                    ) : (
                      <Utensils className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {spot.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0C1A47] mb-2 group-hover:text-[#1E2C79]">
                  {spot.name}
                </h3>
                <p className="text-gray-500 font-medium text-sm mb-6 flex-1">
                  {spot.type}
                </p>

                <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-sm font-bold text-[#0C1A47] opacity-60 group-hover:opacity-100 transition-opacity">
                  <MapPin className="w-4 h-4" />
                  View Location
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- FOOD GUIDE: GREEK SPECIALTIES (New Section for Word Count) --- */}
        <div className="bg-[#F8F9FC] py-16 border-t border-gray-200 mb-20">
          <div className="mb-10">
            <h2 className="text-[#0C1A47] text-3xl font-bold tracking-tight mb-6">
              A Guide to Local Flavors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Greek airports are excellent places to try authentic local snacks.
              If you see these items on the menu, here is what to expect:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#0C1A47]">
                <Coffee className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold text-xl">The Coffee Culture</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                In Greece, coffee is a ritual. The most popular choice during
                summer is the <strong>Freddo Espresso</strong> (double espresso
                blended with ice) or the <strong>Freddo Cappuccino</strong>{" "}
                (topped with cold milk foam). These are not just iced coffees;
                they are a staple of the lifestyle. For a more traditional
                experience, ask for a Greek Coffee (Ellinikos), usually served
                hot and accompanied by a small glass of water.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 text-[#0C1A47]">
                <Wheat className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold text-xl">Signature Snacks</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Bakery counters (often found at Everest or Venetis) feature
                savory pies known as "Pitas".
                <strong>Spanakopita</strong> (spinach and feta pie) and{" "}
                <strong>Tiropita</strong> (cheese pie) are the most common. For
                a lighter snack, try a <strong>Koulouri</strong>, a
                sesame-covered bread ring that is healthy, vegan-friendly, and
                perfect for travel.
              </p>
            </div>
          </div>
        </div>

        {/* --- FOOTER: OPERATIONAL DETAILS (Expanded) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0C1A47] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD600] rounded-full blur-3xl opacity-20 -mr-10 -mt-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
                <Clock className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Opening Hours
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                Dining outlets within the terminal generally operate in
                alignment with the flight schedule. During the high summer
                season, key locations such as the main coffee shops and burger
                restaurants remain open to serve the first wave of morning
                departures and stay active until the final flight boards.
                However, landside cafes may close earlier in winter.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#0C1A47]">
                <Droplets className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold text-lg">Water & Alcohol Rules</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In most Greek island airports (like Mykonos or Santorini), tap
                water is not potable. It is advisable to purchase bottled water
                after security. Regarding alcohol, while it is available at
                airport bars, excessive consumption may lead to denied boarding.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4 text-[#0C1A47]">
                <Baby className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold text-lg">Family Facilities</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Most food courts provide high chairs for infants. If you need to
                warm a baby bottle, staff at any of the coffee chains are
                generally happy to assist by providing a cup of hot water.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#FFD600] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-yellow-500/20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0C1A47] mb-2">
              In a rush?
            </h3>
            <p className="text-[#0C1A47]/80 text-lg max-w-xl font-medium">
              Most of these locations offer "Grab & Go" options perfect for
              taking onto your flight.
            </p>
          </div>
          <div className="bg-[#0C1A47] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg cursor-default">
            View Departures
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
