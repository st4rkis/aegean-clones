"use client";

import React from "react";
import Link from "next/link";
import FlightsTabs from "@/components/FlightsTabs";
import { useAirport } from "@/context/AirportContext";
import {
  PlaneTakeoff,
  ArrowRight,
  Globe,
  Info,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Luggage,
  UserCheck, // <--- CHANGED FROM Passport
} from "lucide-react";

// Import the Type and Data
import { Airline } from "@/components/AirlineDirectory";
import { AIRLINES } from "@/data/airlines";

export default function DeparturesClient() {
  const airport = useAirport();
  const airportName = airport?.name || "the airport";

  return (
    <main className="min-h-screen bg-[#F3F4FE] pb-24">
      {/* --- 1. HERO SECTION --- */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E2C79] rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#FFD600] font-bold uppercase tracking-widest text-sm">
                <PlaneTakeoff className="w-5 h-5" />
                <span>Real-Time Telemetry</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Live Departures at {airportName}
              </h1>
              <h2 className="text-blue-100 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                Track status updates, gate assignments, and delays for all
                outgoing flights scheduled for today.
              </h2>
            </div>

            {/* CTA BUTTON */}
          </div>
        </div>
      </div>

      {/* --- 2. FLIGHT WIDGET (The Core Utility) --- */}
      <div className="relative z-20">
        <FlightsTabs initial="departures" />
      </div>

      {/* --- 3. COMPREHENSIVE DEPARTURE GUIDE (New SEO Content) --- */}
      <div className="mx-auto max-w-6xl px-6 mt-20 mb-20">
        <div className="mb-12">
          <h2 className="text-[#0C1A47] text-3xl font-bold mb-6">
            Departure Process & Guidelines
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Navigating a busy terminal requires awareness of the specific
            protocols in place. From the moment you enter the check-in hall to
            the final boarding call, adhering to these timelines ensures a
            stress-free journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CARD 1: Check-in */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <Luggage className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Check-in Logistics
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Check-in counters generally open 2.5 hours before the scheduled
                departure time for most European flights. For long-haul
                international routes, counters may open up to 3 hours prior. It
                is important to note that automated baggage systems strictly
                close 40 to 60 minutes before takeoff. Late arrival usually
                results in denied boarding as airlines cannot reopen the flight
                manifest.
              </p>
              <p>
                Travelers with hand luggage only who have checked in online can
                bypass the physical counters and proceed directly to security
                screening. However, if your airline requires a document check
                (common for non-EU passport holders), you must visit the desk
                regardless of your luggage status.
              </p>
            </div>
          </div>

          {/* CARD 2: Security */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Security Screening
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                All passengers must pass through centralized security screening
                before entering the airside zone. Current regulations restrict
                liquids, aerosols, and gels in hand luggage to containers of
                100ml or less, which must fit comfortably in a single,
                transparent, re-sealable plastic bag.
              </p>
              <p>
                Laptops, tablets, and large electronic devices must be removed
                from your bag and placed in a separate tray. Outerwear such as
                coats, jackets, and belts containing metal must also be removed.
                Wearing easy-to-remove footwear can expedite your passage
                through this checkpoint.
              </p>
            </div>
          </div>

          {/* CARD 3: Passport Control */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <UserCheck className="w-6 h-6" /> {/* <--- CHANGED HERE */}
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Passport Control
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The airport is divided into Schengen and Non-Schengen zones. If
                you are flying to a Non-Schengen destination (such as the UK,
                USA, or Ireland), you must pass through Passport Control after
                security. Queue times here can vary significantly depending on
                the number of concurrent departures.
              </p>
              <p>
                EU citizens holding biometric passports are advised to use the
                automated e-gates for faster processing. Non-EU citizens must
                use the manned border police booths. Always allow an extra 20
                minutes for this step if your destination is outside the
                Schengen zone.
              </p>
            </div>
          </div>

          {/* CARD 4: Boarding */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <PlaneTakeoff className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Gate & Boarding
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Gate information is displayed on the main monitors in the
                departure lounge. Gates are typically assigned 45 to 60 minutes
                before departure. Please do not rely solely on the gate number
                printed on your boarding pass, as operational changes frequently
                occur.
              </p>
              <p>
                Boarding gates close strictly 20 to 30 minutes before the flight
                departure time. Once the doors are closed, ground staff cannot
                reopen them for late passengers, as this would cause the
                aircraft to miss its takeoff slot. We recommend being at the
                gate at least 40 minutes before departure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- 4. AIRLINE GRID SECTION --- */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-[#0C1A47] text-3xl font-bold tracking-tight">
              Airlines serving {airportName}
            </h2>
            <p className="text-[#0C1A47]/60 mt-2 text-lg">
              Contact details and terminal information for major carriers.
            </p>
          </div>

          <Link
            href="/airlines"
            className="text-[#1E2C79] font-bold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View full directory <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Using AIRLINES from data file, limiting to 6 for the preview */}
          {AIRLINES.slice(0, 6).map((airline: Airline) => (
            <div
              key={airline.id}
              className="
                bg-white rounded-xl p-8 
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] 
                hover:shadow-lg transition-shadow 
                flex flex-col items-center text-center h-80 group
                border border-transparent hover:border-gray-100
              "
            >
              {/* Logo Area */}
              <div className="w-full h-32 flex items-center justify-center mb-6 border-b border-gray-100 pb-6">
                <img
                  src={airline.logoUrl}
                  alt={`${airline.name} logo`}
                  className="h-16 w-auto max-w-[80%] object-contain transition-all duration-500"
                />
              </div>

              {/* Name */}
              <div
                className="text-[#0C1A47] text-xl font-bold mb-2 truncate w-full px-4"
                title={airline.name}
              >
                {airline.name}
              </div>

              <Link
                href="/airlines"
                className="mt-auto text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/airlines"
            className="inline-flex items-center justify-center w-full bg-white border border-gray-200 text-[#0C1A47] font-bold py-4 rounded-xl shadow-sm"
          >
            View all airlines
          </Link>
        </div>
      </section>
    </main>
  );
}
