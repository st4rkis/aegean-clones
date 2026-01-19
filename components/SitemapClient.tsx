"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  ArrowLeft,
  Plane,
  Car,
  Info,
  ShieldCheck,
  Utensils,
  ExternalLink,
  HelpCircle,
  Map,
  FileText,
  Compass,
} from "lucide-react";

// --- VARIATION ENGINE (Expanded for SEO) ---
const SITEMAP_VARIATIONS = [
  // VARIATION 1
  {
    introTitle: "Terminal Directory",
    introText: (name: string, code: string) =>
      `Welcome to the comprehensive index for ${code}. Whether you require real-time flight telemetry, ground transportation options, or luxury concierge services, this directory provides direct access to every resource available on our platform. The structure of this guide is designed to mirror the passenger journey, from arrival logistics to departure services.`,
    outroText: (name: string) =>
      `Our index is updated regularly to ensure you have the latest data regarding terminal facilities. From duty-free shopping hours to lounge access, we aim to cover every aspect of your journey through ${name}.`,
  },
  // VARIATION 2
  {
    introTitle: "Site Navigation",
    introText: (name: string, code: string) =>
      `Easily locate the services you need at ${name}. This page serves as a master map of our digital platform, linking you to flight schedules, transfer bookings, and essential passenger amenities. We have categorized all information into logical sections to help you find critical travel data in seconds.`,
    outroText: (name: string) =>
      `We strive to maintain accurate information for the entire facility. If you cannot find a specific service in this list, please check our FAQ section or contact the support team directly.`,
  },
  // VARIATION 3
  {
    introTitle: "Content Overview",
    introText: (name: string, code: string) =>
      `Access the full scope of operations for ${code} here. From checking-in to flying out, use this list to quickly find specific departments, regulatory information, and travel assistance tools. This index acts as a central hub for all operational data regarding the airport ecosystem.`,
    outroText: (name: string) =>
      `This navigational aid is synchronized with operational updates. We ensure that all links regarding transport, dining, and security reflect the current status of the infrastructure at ${name}.`,
  },
];

export default function SitemapClient() {
  const airport = useAirport();
  const airportName = airport?.name || "Airport";
  const airportCode = airport?.key || "JMK";

  // --- DETERMINISTIC SELECTION ---
  const codeSum = airportCode
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const content = SITEMAP_VARIATIONS[codeSum % SITEMAP_VARIATIONS.length];

  // --- LOGIC TO HANDLE SLUG EXCEPTIONS ---
  const getExternalSlug = () => {
    const key = airport?.key?.toUpperCase();
    const exceptions: Record<string, string> = {
      ZTH: "zante",
      JMK: "mykonos",
      JTR: "santorini",
    };

    if (key && exceptions[key]) return exceptions[key];
    return (airport?.city || airport?.name || "athens")
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const locationSlug = getExternalSlug();

  const SECTIONS = [
    {
      title: "Flight Information",
      icon: <Plane className="w-5 h-5 text-[#FFD600]" />,
      links: [
        { label: "Live Arrivals", href: "/flights/arrivals" },
        { label: "Live Departures", href: "/flights/departures" },
        { label: "Airlines Directory", href: "/airlines" },
      ],
    },
    {
      title: "Transport & Parking",
      icon: <Car className="w-5 h-5 text-[#FFD600]" />,
      links: [
        { label: "Transport Overview", href: "/transport/overview" },
        { label: "Book a Taxi/Transfer", href: "/transport/taxi" },
        { label: "Bus Schedules", href: "/transport/bus" },
        { label: "Car Rental", href: "/transport/car-rental" },
        { label: "Parking Info", href: "/transport/parking" },
        { label: "Driving Directions", href: "/transport/directions" },
        {
          label: "Book Airport Transfer",
          href: `https://aegeantaxi.com/${locationSlug}/airport/`,
          isExternal: true,
        },
        {
          label: "Book Port Transfer",
          href: `https://aegeantaxi.com/${locationSlug}/port/`,
          isExternal: true,
        },
      ],
    },
    {
      title: "Airport Experience",
      icon: <Utensils className="w-5 h-5 text-[#FFD600]" />,
      links: [
        { label: "Dining & Restaurants", href: "/experiences/dining" },
        { label: "Shopping & Duty Free", href: "/experiences/shopping" },
        { label: "Airport Lounges", href: "/experiences/lounges" },
        { label: "Relaxation Areas", href: "/experiences/relax" },
        { label: "Concierge Services", href: "/experiences/concierge" },
      ],
    },
    {
      title: "Passenger Services",
      icon: <Info className="w-5 h-5 text-[#FFD600]" />,
      links: [
        { label: "General Services", href: "/information/services" },
        {
          label: "Special Assistance",
          href: "/information/special-assistance",
        },
        { label: "Lost and Found", href: "/information/lost-and-found" },
        { label: "Frequently Asked Questions", href: "/faqs" },
        { label: "Help & Support", href: "/contact" },
      ],
    },
    {
      title: "Legal & Corporate",
      icon: <ShieldCheck className="w-5 h-5 text-[#FFD600]" />,
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFD600] font-bold mb-8 transition-colors uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Sitemap <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              for {airportName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            All pages and services available at the{" "}
            <span className="text-white font-bold">
              {airportCode} Digital Platform
            </span>
            .
          </p>
        </div>
      </div>

      {/* --- SEO INTRO --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Gold Accent Line */}
          <div className="w-16 h-1.5 bg-[#FFD600] mb-6 rounded-full" />

          <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
            {content.introTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {content.introText(airportName, airportCode)}
          </p>
        </div>
      </div>

      {/* --- SITEMAP GRID --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="bg-[#0C1A47] p-2 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        rel="nofollow noreferrer"
                        target="_blank"
                        className="text-lg text-gray-500 hover:text-[#0C1A47] hover:font-bold transition-all flex items-center group"
                      >
                        <span className="w-0 group-hover:w-4 group-hover:mr-2 h-0.5 bg-[#FFD600] transition-all duration-300"></span>
                        {link.label}
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-lg text-gray-500 hover:text-[#0C1A47] hover:font-bold transition-all flex items-center group"
                      >
                        <span className="w-0 group-hover:w-4 group-hover:mr-2 h-0.5 bg-[#FFD600] transition-all duration-300"></span>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION DESCRIPTIONS (Adds ~400 words) --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="bg-[#F8F9FC] rounded-[3rem] p-10 lg:p-16 border border-gray-100">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0C1A47] mb-6">
              Category Definitions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              To assist with your navigation, we have detailed the scope of
              information contained within each major section of our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Flight Operations */}
            <div className="flex gap-5">
              <div className="p-3 bg-white rounded-xl h-fit text-[#0C1A47] shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3">
                  Aviation & Schedules
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  The <strong>Flight Information</strong> section is powered by
                  direct data feeds from the air traffic control systems. This
                  includes real-time status updates for all arrivals and
                  departures, gate assignments, and delay notifications. The
                  Airlines Directory offers contact details for every carrier
                  operating at the airport, which is crucial for resolving
                  baggage disputes or rebooking flights.
                </p>
              </div>
            </div>

            {/* Transport Logistics */}
            <div className="flex gap-5">
              <div className="p-3 bg-white rounded-xl h-fit text-[#0C1A47] shadow-sm">
                <Map className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3">
                  Ground Connectivity
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  The <strong>Transport & Parking</strong> section provides a
                  complete logistical breakdown of how to enter and exit the
                  airport precinct. This includes tariffs for long-term parking,
                  schedules for public bus routes connecting to the city center,
                  and availability of car rental agencies. We also provide
                  direct booking links for private transfers to ensure seamless
                  door-to-door travel.
                </p>
              </div>
            </div>

            {/* Passenger Facilities */}
            <div className="flex gap-5">
              <div className="p-3 bg-white rounded-xl h-fit text-[#0C1A47] shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3">
                  Terminal Services
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Under <strong>Passenger Services</strong>, travelers can find
                  essential regulatory and support information. This covers
                  security protocols regarding liquids and electronics,
                  locations of ATMs and currency exchanges, and procedures for
                  reclaiming lost property. Specific guidance for passengers
                  with reduced mobility (PRM) is also detailed here to ensure an
                  accessible journey for all.
                </p>
              </div>
            </div>

            {/* Lifestyle & Leisure */}
            <div className="flex gap-5">
              <div className="p-3 bg-white rounded-xl h-fit text-[#0C1A47] shadow-sm">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3">
                  Commercial & Leisure
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  The <strong>Airport Experience</strong> category highlights
                  the amenities available during your dwell time. This includes
                  a directory of duty-free shops for tax-free purchasing, a
                  guide to dining outlets ranging from quick snacks to sit-down
                  meals, and information on access to VIP lounges for business
                  travelers seeking a quiet environment before their flight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO OUTRO --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="bg-[#0C1A47] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD600]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="p-4 bg-white/10 rounded-2xl text-[#FFD600]">
              <HelpCircle className="w-8 h-8" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Keeping You Updated
              </h3>
              <p className="text-blue-100 leading-relaxed max-w-2xl">
                {content.outroText(airportName)}
              </p>
            </div>

            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FFD600] text-[#0C1A47] font-bold rounded-xl hover:bg-white transition-colors whitespace-nowrap"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
