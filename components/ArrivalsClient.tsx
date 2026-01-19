"use client";

import React from "react";
import Link from "next/link";
import FlightsTabs from "@/components/FlightsTabs";
import { useAirport } from "@/context/AirportContext";
import {
  PlaneLanding,
  ArrowRight,
  Globe,
  Info,
  UserCheck, // Valid replacement for Passport icon
  Luggage,
  ShieldCheck,
  MapPin,
  Clock,
  Users,
} from "lucide-react";

// Import the Type and Data
import { Airline } from "@/components/AirlineDirectory";
import { AIRLINES } from "@/data/airlines";

export default function ArrivalsClient() {
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
                <PlaneLanding className="w-5 h-5" />
                <span>Real-Time Status</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Live Arrivals at {airportName}
              </h1>
              <h2 className="text-blue-100 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                Track landing times, baggage reclaim belts, and gate arrivals
                for all incoming flights today.
              </h2>
            </div>

            {/* CTA BUTTON */}
          </div>
        </div>
      </div>

      {/* --- 2. FLIGHT WIDGET (Core Utility) --- */}
      <div className=" relative z-20">
        <FlightsTabs initial="arrivals" />
      </div>

      {/* --- 3. ARRIVAL PROCESS GUIDE (New SEO Content) --- */}
      <div className="mx-auto max-w-6xl px-6 mt-20 mb-20">
        <div className="mb-12">
          <h2 className="text-[#0C1A47] text-3xl font-bold mb-6">
            Arrival Logistics & Procedures
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Upon landing, passengers must navigate several procedural
            checkpoints before reaching the public arrivals hall. Understanding
            these steps in advance can help you estimate your total transit time
            through the terminal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CARD 1: Passport Control */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Passport Control
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Passengers arriving from Schengen Area countries generally
                proceed directly to baggage reclaim without an immigration
                check. However, random identity checks by border police may
                occur at the gate bridge depending on current security alert
                levels.
              </p>
              <p>
                Travelers arriving from Non-Schengen origins (such as the UK,
                USA, or Middle East) must pass through passport control. EU
                citizens carrying biometric passports should utilize the
                automated e-gates to expedite this process. Non-EU citizens must
                fill out any required entry forms and queue for manual
                processing by border officers.
              </p>
            </div>
          </div>

          {/* CARD 2: Baggage Reclaim */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <Luggage className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Baggage Reclaim
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Carousel assignments are displayed on monitors immediately after
                passport control. Standard luggage delivery typically commences
                20 to 45 minutes after the aircraft has blocked at the gate,
                depending on the parking position and ground handling load.
              </p>
              <p>
                If you are traveling with oversized items such as strollers,
                surfboards, or golf clubs, these will not appear on the main
                carousel. Please look for the dedicated "Bulky Items" counter or
                door, usually located at the end of the reclaim hall. Lost
                luggage inquiries should be directed to the ground handling
                agent's desk within the reclaim area before exiting.
              </p>
            </div>
          </div>

          {/* CARD 3: Customs */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Customs Clearance
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                After collecting your bags, you will pass through Customs. The
                Green Channel is for passengers who have nothing to declare
                (within duty-free limits). The Red Channel is for those carrying
                commercial goods, cash exceeding 10,000 Euros, or restricted
                items.
              </p>
              <p>
                Random spot checks are conducted on passengers in the Green
                Channel. Please ensure you are aware of the import restrictions
                for tobacco and alcohol, especially if arriving from outside the
                European Union, to avoid fines or confiscation of goods.
              </p>
            </div>
          </div>

          {/* CARD 4: Meeting Point */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#F3F4FE] p-3 rounded-xl text-[#0C1A47]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Meeting Points
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                The primary meeting point for friends and family is located in
                the public Arrivals Hall, immediately after the Customs exit.
                Due to security regulations, non-passengers are not permitted to
                enter the baggage reclaim area or airside zones.
              </p>
              <p>
                If you have booked a private transfer or taxi, your driver will
                typically be waiting in this area holding a sign with your name.
                For app-based ride pickups, you may need to exit the terminal
                building and proceed to the designated parking zone, as curbside
                stopping is often restricted to licensed taxis only.
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
              Contact details for lost luggage and flight inquiries.
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
                className="mt-auto text-base font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Contact Info
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
