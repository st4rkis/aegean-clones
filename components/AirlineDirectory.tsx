"use client";

import React, { useState } from "react";
import {
  Search,
  Globe,
  Plane,
  Info,
  Briefcase,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

export interface Airline {
  id: string | number;
  name: string;
  code: string;
  website: string;
  logoUrl: string;
}

interface AirlineDirectoryProps {
  data: Airline[];
  tenantName?: string;
}

const AirlineDirectory = ({
  data,
  tenantName = "Airline Directory",
}: AirlineDirectoryProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAirlines = data.filter(
    (airline) =>
      airline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airline.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F3F4FE] font-sans pb-20">
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[50vh] min-h-[350px] bg-gray-900">
        <img
          src="/images/hero/airlines-hero.jpg"
          alt="Airport Tarmac"
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
      </div>

      {/* 2. FLOATING CONTROL BAR */}
      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto md:-mt-20 -mt-10 mb-12">
        <div className="bg-[#1E2C79] rounded-[6px] p-8 shadow-xl flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          {/* A. TITLE */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              {tenantName}
            </h1>
          </div>

          {/* B. CTA BUTTON */}
          <div className="w-full md:w-auto shrink-0 flex justify-center">
            <Link
              href="/flights/departures"
              className="
                w-full md:w-auto 
                bg-[#FFD600] hover:bg-[#e5c100]
                text-[#0C1A47] font-bold text-lg
                h-14 px-8 rounded-xl 
                flex items-center justify-center gap-3
                shadow-md
                transition-colors
              "
            >
              <Plane className="w-5 h-5 fill-current" />
              <span className="whitespace-nowrap">Book your flight</span>
            </Link>
          </div>
          {/* C. SEARCH INPUT */}
          <div className="w-full md:w-[400px]">
            <label
              htmlFor="airline-search"
              className="block text-white text-base font-semibold mb-3 pl-1"
            >
              Search airline:
            </label>
            <div className="relative">
              <input
                id="airline-search"
                type="text"
                placeholder="Search airline name"
                className="
                  w-full pl-11 pr-4 
                  h-14
                  rounded-xl bg-white text-[#0C1A47] font-semibold 
                  placeholder:text-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-[#FFD600] 
                  shadow-sm
                "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO INTRO: NETWORK OVERVIEW (New Text Block) --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="bg-white rounded-4xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3 shrink-0">
            <div className="flex items-center gap-3 mb-4 text-[#1E2C79]">
              <Globe className="w-6 h-6" />
              <h3 className="font-bold uppercase tracking-widest text-sm">
                Connectivity Profile
              </h3>
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47] leading-tight">
              Connecting the Region to the World
            </h2>
          </div>
          <div className="md:w-2/3 text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              The aviation network servicing this terminal is diverse, designed
              to meet the needs of both leisure travelers and commercial
              interests. The airport acts as a primary node for legacy flag
              carriers connecting to major European capitals, as well as
              specialized low-cost operators facilitating point-to-point
              seasonal travel. This mix ensures comprehensive connectivity,
              linking the region to key global hubs and domestic destinations
              alike.
            </p>
            <p>
              This directory consolidates the official digital presence of all
              scheduled carriers operating at the terminal. By providing direct
              access to airline portals, we enable passengers to manage
              bookings, verify schedules, and access loyalty programs
              efficiently. Whether you are flying on a transcontinental route or
              a short domestic hop, identifying the correct operating carrier is
              the first step in a seamless journey.
            </p>
          </div>
        </div>
      </div>

      {/* 3. AIRLINE CARDS GRID (Original Styles Preserved) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAirlines.map((airline) => (
            <div
              key={airline.id}
              className="bg-white rounded-lg p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-lg flex flex-col items-center text-center h-80"
            >
              {/* Logo Area */}
              <div className="w-full h-32 flex items-center justify-center mb-6 border-b border-gray-100 pb-6">
                <img
                  src={airline.logoUrl}
                  alt={`${airline.name} logo`}
                  className="h-16 w-auto max-w-[80%] object-contain"
                />
              </div>

              {/* Name */}
              <div
                className="text-[#0C1A47] text-xl font-bold mb-2 truncate w-full px-4"
                title={airline.name}
              >
                {airline.name}
              </div>

              {/* Visit Website Link (Re-added for utility/SEO internal link structure) */}
              <a
                href={
                  airline.website.startsWith("http")
                    ? airline.website
                    : `https://${airline.website}`
                }
                target="_blank"
                rel="nofollow noreferrer"
                className="mt-auto text-[#1E2C79] font-bold border-b-2 border-[#FFD600] pb-1 hover:text-[#FFD600] hover:border-[#1E2C79] transition-all"
              >
                Visit Official Site
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAirlines.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
              No airlines found
            </h3>
            <p className="text-gray-500">
              We couldn&apos;t find any airlines matching &quot;{searchTerm}
              &quot;
            </p>
          </div>
        )}
      </div>

      {/* --- SEO FOOTER: OPERATIONAL LOGISTICS (New Text Block) --- */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0C1A47] mb-6">
              Essential Passenger Logistics
            </h2>
            <p className="text-gray-600 text-lg">
              Understanding the operational framework of the airport can
              significantly reduce transit stress. Below are key protocols
              regarding airline management and check-in procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Topic 1: Ground Handling */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0C1A47]">
                <Users className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Ground Operations
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Ground Handling Agents
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A common point of confusion for travelers at regional airports
                is the absence of dedicated airline staff. Most carriers listed
                in this directory do not maintain their own station managers or
                check-in personnel at this facility. Instead, they contract
                certified Ground Handling Agents (such as Skyserv, Goldair
                Handling, or Swissport) to manage passenger services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you cannot locate a branded counter for your specific
                airline, look for your flight number and airline logo on the
                overhead monitors. The staff at these desks are fully authorized
                agents acting on behalf of your carrier, even if they are
                wearing the uniform of a handling company. They handle baggage
                acceptance, boarding pass issuance, and gate operations.
              </p>
            </div>

            {/* Topic 2: Check-in Timing */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0C1A47]">
                <Clock className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Time Management
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Counter Operating Hours
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Check-in counters typically open 2 to 2.5 hours prior to the
                scheduled departure time for domestic and European flights. For
                long-haul or non-Schengen services, counters may open 3 hours in
                advance. It is strictly advised to complete bag drop procedures
                at least 45 minutes before departure, as automated systems often
                close flights automatically after this window.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Passengers traveling with hand luggage only and holding a mobile
                boarding pass may proceed directly to security screening.
                However, if your airline requires a document check (common for
                non-EU citizens), you must present your passport at the check-in
                desk regardless of your baggage status.
              </p>
            </div>

            {/* Topic 3: Alliances */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0C1A47]">
                <Briefcase className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Flight Partnerships
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Codeshare Flights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Many flights operating from this terminal are part of global
                airline alliances such as Star Alliance, SkyTeam, or Oneworld.
                This results in "codeshare" arrangements where a single flight
                carries multiple flight numbers from different partner airlines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Always verify the "Operated by" information on your ticket
                confirmation. This determines which airline's baggage rules
                apply and which check-in counter you must approach. For example,
                a ticket purchased via United Airlines might be operated by
                Lufthansa; in this case, you must check in at the Lufthansa
                desk.
              </p>
            </div>

            {/* Topic 4: Security */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#0C1A47]">
                <ShieldCheck className="w-6 h-6 text-[#FFD600]" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Safety Protocols
                </h3>
              </div>
              <h2 className="text-2xl font-bold text-[#0C1A47] mb-4">
                Restricted Items
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Regardless of the airline you are flying with, all passengers
                must adhere to the standard security regulations enforced by the
                airport authority. Airlines may have additional restrictions
                regarding lithium batteries or smart bags, but the core list of
                prohibited items in hand luggage (such as liquids over 100ml and
                sharp objects) remains consistent across all carriers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We recommend reviewing the specific "Dangerous Goods" section on
                your airline's official website before packing. Items
                confiscated at security cannot be stored or returned, and
                airlines accept no liability for items removed by airport
                security personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineDirectory;
