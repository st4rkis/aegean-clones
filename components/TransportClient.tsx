"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  Car,
  Bus,
  Map,
  ParkingSquare,
  ArrowRight,
  AlertTriangle,
  Key,
  Navigation,
  Info,
} from "lucide-react";

export default function TransportClient() {
  const airport = useAirport();
  const airportName = airport?.name || "the Airport";
  const airportCode = airport?.key || "JMK";

  const TRANSPORT_SECTIONS = [
    {
      title: "Transport Overview",
      description: "Compare all available ways to reach your destination.",
      href: "/transport/overview",
      icon: Map,
    },
    {
      title: "Taxi & Transfers",
      description:
        "The fastest and most comfortable way to travel. Pre-booking recommended.",
      href: "/transport/taxi",
      icon: Car,
    },
    {
      title: "Car Rental",
      description:
        "Rent a car to explore at your own pace. Pickup and drop-off info.",
      href: "/transport/car-rental",
      icon: Key,
    },
    {
      title: "Bus Schedules",
      description:
        "Budget-friendly public transport connecting the terminal to the city.",
      href: "/transport/bus",
      icon: Bus,
    },
    {
      title: "Parking",
      description: "Short-term drop-off and long-term secure parking options.",
      href: "/transport/parking",
      icon: ParkingSquare,
    },
    {
      title: "Driving Directions",
      description: "GPS coordinates and maps for driving to the terminal.",
      href: "/transport/directions",
      icon: Navigation,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Transport & Access <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              at {airportName}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Navigate your arrival and departure at {airportName}. Choose the
            travel option that suits your schedule.
          </p>
        </div>
      </div>

      {/* --- INTRO TEXT BLOCK (Adds Volume & Context) --- */}
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-10 text-center">
        <div className="w-16 h-1.5 bg-[#FFD600] mb-8 mx-auto rounded-full" />
        <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
          Connecting {airportCode} to the Island
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          The transport infrastructure at {airportName} is designed to
          facilitate the smooth movement of passengers between the terminal and
          key island locations. Whether you prefer the independence of a rental
          car, the convenience of a pre-booked private transfer, or the
          affordability of the local bus network, multiple options are available
          upon arrival. We strongly advise travelers to review the seasonal
          schedules and traffic advisories below to plan their journey
          effectively.
        </p>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRANSPORT_SECTIONS.map((item, idx) => {
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
                  View Options
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}

          {/* --- TRAFFIC TIP CARD --- */}
          <div className="p-10 bg-[#F8F9FC] rounded-[2.5rem] border border-gray-100 flex flex-col justify-center lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD600]/20 text-[#FFD600]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0C1A47]">
                Seasonal Traffic Advisory
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-4xl">
              During the high summer season (July & August), road networks
              leading to the airport may experience increased congestion. This
              is particularly relevant during mid-day flight waves (11:00 -
              15:00). Passengers departing during these hours are advised to
              allow an additional 30-45 minutes of travel time to ensure a
              stress-free arrival at the check-in counters.
            </p>
          </div>
        </div>
      </div>

      {/* --- SEO FOOTER CONTENT (Bulk Text for Word Count) --- */}
      <div className="bg-[#0C1A47] text-white py-20 mt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/10 rounded-xl">
              <Map className="w-8 h-8 text-[#FFD600]" />
            </div>
            <h2 className="text-3xl font-bold">Transport Logistics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-blue-100 leading-relaxed">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Taxi & Transfer Services
              </h3>
              <p className="mb-6">
                The taxi station is located immediately outside the Arrivals
                Hall exit. Official vehicles operate on a metered basis or fixed
                tariff depending on the destination. During peak travel periods,
                demand may exceed supply, resulting in wait times at the taxi
                rank.
              </p>
              <p>
                For travelers prioritizing efficiency, private transfers booked
                in advance offer a seamless alternative. Drivers typically
                monitor flight status and meet passengers in the arrival hall,
                eliminating the need to queue at the public taxi stand.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                Public Bus & Car Rental
              </h3>
              <p className="mb-6">
                Public bus services connect the terminal to the main town and
                port. Ticket kiosks are situated at the bus stop, and schedules
                vary significantly between winter and summer seasons. Please
                consult the specific timetable for your date of travel.
              </p>
              <p>
                Car rental desks are housed within the Arrivals area or in
                dedicated structures nearby. While walk-up rentals may be
                available, availability is often limited during the summer.
                Securing a vehicle reservation prior to travel is highly
                recommended to guarantee your preferred model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
