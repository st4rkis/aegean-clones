"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  Info,
  Plane,
  Wifi,
  ShoppingBag,
  HelpCircle,
  ArrowRight,
  Clock,
  Accessibility,
  ShieldCheck,
  HeartPulse,
  Users,
} from "lucide-react";

export default function InformationClient() {
  const airport = useAirport();
  const airportName = airport?.name || "The Airport";
  const airportCode = airport?.key || "JMK";

  const INFO_SECTIONS = [
    {
      title: "Airport Info",
      description:
        "Comprehensive guide to terminals, facilities, and general infrastructure.",
      href: "/information",
      icon: Info,
    },
    {
      title: "Airlines Directory",
      description:
        "Contact details, terminal locations, and ground handling agents.",
      href: "/airlines",
      icon: Plane,
    },
    {
      title: "Passenger Services",
      description:
        "Wi-Fi connectivity, banking (ATMs), medical aid, and currency exchange.",
      href: "/information/services",
      icon: Wifi,
    },
    {
      title: "Retail & Dining",
      description:
        "Duty-free shopping, local souvenirs, and restaurant directory.",
      href: "/experiences/shopping",
      icon: ShoppingBag,
    },
    {
      title: "Special Assistance",
      description:
        "Mobility aid, PRM support services, and accessibility facilities.",
      href: "/information/special-assistance",
      icon: Accessibility,
    },
    {
      title: "Lost & Found",
      description:
        "Procedures for recovering lost personal items and baggage assistance.",
      href: "/information/lost-and-found",
      icon: HelpCircle,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Information <span className="text-white/40">&</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Essential details for a smooth journey through {airportName}. From
            airline contacts to vital passenger services.
          </p>
        </div>
      </div>

      {/* --- INTRO TEXT BLOCK (Expanded for Word Count) --- */}
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-10 text-center">
        <div className="w-16 h-1.5 bg-[#FFD600] mb-8 mx-auto rounded-full" />
        <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
          Navigating the {airportCode} Terminal
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Navigating a modern regional airport efficiently requires a clear
          understanding of its layout and the services provided. This
          centralized information hub is designed to offer travelers a
          comprehensive overview of the terminal's infrastructure, ensuring that
          every stage of the journey—from arrival at the curbside to boarding
          the aircraft—is managed with ease. Whether you are a first-time
          visitor looking for orientation or a frequent flyer seeking specific
          operational details, this directory serves as your primary resource
          for all facility-related inquiries.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Beyond basic navigation, this platform connects you to vital passenger
          services that enhance the travel experience. We provide up-to-date
          details on essential amenities such as banking facilities, currency
          exchange counters, and digital connectivity zones. For travelers with
          specific requirements, including those traveling with young children
          or needing mobility assistance, we outline the dedicated support
          protocols established by the airport authority and ground handling
          agents.
        </p>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INFO_SECTIONS.map((item, idx) => {
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
                  View Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            );
          })}

          {/* --- OPERATING HOURS CARD --- */}
          <div className="p-10 bg-[#F8F9FC] rounded-[2.5rem] border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD600]/20 text-[#FFD600]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0C1A47]">
                Terminal Hours
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The terminal building remains accessible during all scheduled
              flight operations. Please verify specific check-in counter opening
              times directly with your airline carrier.
            </p>
          </div>
        </div>
      </div>

      {/* --- SEO FOOTER CONTENT (Massive Expansion) --- */}
      <div className="bg-[#0C1A47] text-white py-20 mt-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-[#FFD600]" />
            </div>
            <h2 className="text-3xl font-bold">Passenger Operations Manual</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-blue-100 leading-relaxed">
            {/* Column 1: Logistics & Connectivity */}
            <div className="space-y-10">
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FFD600]" />
                  Security & Screening
                </h3>

                <p className="mb-4">
                  The terminal operates under strict international aviation
                  security standards. All passengers entering the airside zone
                  must undergo screening. To expedite this process, travelers
                  should be prepared to divest metallic items, outer garments,
                  and large electronic devices like laptops and tablets for
                  separate scanning.
                </p>
                <p>
                  The restriction on liquids, aerosols, and gels remains in
                  effect; these must be in containers of 100ml or less and
                  placed in a single, transparent, resealable plastic bag.
                  During peak seasonal operations, passenger volumes increase
                  significantly, so we advise allowing extra time for these
                  checks.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-[#FFD600]" />
                  Connectivity & Business
                </h3>
                <p>
                  Understanding the needs of the modern traveler, the facility
                  offers various amenities to stay connected and productive.
                  Public Wi-Fi networks are generally available throughout the
                  departures hall, allowing passengers to check emails or stream
                  content. Charging stations for mobile devices are typically
                  located near seating areas or within specific dining outlets.
                </p>
              </div>
            </div>

            {/* Column 2: Health & Family */}
            <div className="space-y-10">
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-[#FFD600]" />
                  Health & Essential Services
                </h3>
                <p className="mb-4">
                  The wellbeing of passengers is a top priority. First aid
                  stations are available to handle minor medical emergencies,
                  and automated external defibrillators (AEDs) are deployed at
                  strategic points within the terminal. Pharmacies or vending
                  machines dispensing basic health supplies are often located
                  landside.
                </p>
                <p>
                  Travelers are encouraged to maintain hydration, especially
                  during the summer months. Water fountains are provided in the
                  airside waiting areas. If you require specific medication
                  during your flight, please ensure you have a valid
                  prescription on hand.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#FFD600]" />
                  Family & Accessibility
                </h3>
                <p>
                  We are committed to making travel accessible for everyone. The
                  terminal is equipped with ramps, elevators, and accessible
                  restrooms. Dedicated assistance services (PRM) are available
                  from the moment of arrival but must be pre-arranged with your
                  airline at least 48 hours in advance. For families traveling
                  with infants, baby changing facilities are situated within the
                  main restrooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
