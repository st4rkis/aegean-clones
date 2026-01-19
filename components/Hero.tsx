"use client";

import {
  Search,
  ArrowRight,
  Flower2,
  Star,
  Utensils,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Hero() {
  const airport = useAirport();
  const router = useRouter();

  const name = airport?.name || "Airport";
  const rawCode = airport?.key || "";
  const code = rawCode.toUpperCase();

  // --- SMART IMAGE LOGIC ---
  const imagePath = `/images/hero/${code}.jpg`;
  const [bgStatus, setBgStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    setBgStatus("loading");
    if (!code || code.length <= 2) {
      setBgStatus("error");
      return;
    }
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setBgStatus("success");
    img.onerror = () => setBgStatus("error");
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [code, imagePath]);

  return (
    <section className="relative w-full">
      {/* BACKGROUND WRAPPER */}
      <div className="w-full relative bg-[#0C1A47] overflow-hidden">
        {/* --- LAYER 1: IMAGE --- */}
        {bgStatus === "success" && (
          <div className="absolute inset-0 z-0">
            <img
              src={imagePath}
              alt={`${name} Hero`}
              className="w-full h-full object-cover opacity-80 animate-in fade-in duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0C1A47]/40 via-transparent to-[#0C1A47]/90" />
          </div>
        )}

        {/* --- LAYER 1B: FALLBACK --- */}
        {bgStatus !== "success" && (
          <div className="absolute inset-0 z-0 bg-linear-to-b from-[#0C1A47] to-[#050B20]" />
        )}

        {/* --- LAYER 2: CONTENT --- */}
        <div
          className="
            relative z-10
            mx-auto max-w-6xl w-full px-6 pt-20
            flex flex-col justify-between 
            min-h-[calc(100dvh-53px)] pb-8
            md:min-h-[calc(100dvh-74px)] md:pb-16
          "
        >
          {/* A. TITLE SECTION */}
          <div className="flex-1 flex flex-col items-center justify-center text-center mb-8 animate-in fade-in zoom-in-95 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6 max-w-6xl">
              {name}
              <span className="block text-2xl md:text-4xl mt-4 font-medium text-white/90">
                Flights, Arrivals, Departures & Passenger Information
              </span>
            </h1>

            <h2 className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl drop-shadow-md hidden md:block mb-8">
              Live flight status, terminal services, parking, and transport to &
              from {name} Airport
            </h2>
          </div>

          {/* B. WIDGETS SECTION */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-12 w-full animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-150">
            {/* 1. FLIGHT STATUS WIDGET */}
            <div
              onClick={() => router.push("/flights/departures")}
              className="
                w-full md:flex-1 bg-[#DDE3FF]/95 backdrop-blur-md 
                rounded-2xl p-6 md:p-8 shadow-2xl 
                flex flex-col justify-between
                cursor-pointer 
                hover:bg-[#d4dbff] transition-colors
                group border border-white/20
              "
            >
              <h2 className="text-[#0C1A47] text-2xl md:text-4xl font-medium mb-6">
                Check your flight status
              </h2>

              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  readOnly
                  placeholder="Search airline, city or flight number"
                  className="
                    w-full h-12 md:h-14 pl-12 pr-4 rounded-xl 
                    text-[#0C1A47] placeholder:text-gray-400 bg-white
                    focus:outline-none focus:ring-2 focus:ring-[#0C1A47]/20
                    cursor-pointer pointer-events-none md:pointer-events-auto
                  "
                />
              </div>

              <div className="flex gap-6 text-[#0C1A47] font-semibold text-lg">
                <div className="flex items-center hover:opacity-70 transition">
                  Departures <ArrowRight className="ml-1 h-4 w-4" />
                </div>

                <div onClick={(e) => e.stopPropagation()} className="z-10">
                  <Link
                    href="/flights/arrivals"
                    className="flex items-center hover:opacity-70 transition"
                  >
                    Arrivals <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. QUICK ACTIONS */}
            <div className="w-full md:w-auto shrink-0 grid grid-cols-2 gap-3 md:gap-4 md:flex md:flex-col">
              <div className="contents md:grid md:grid-cols-2 md:gap-4">
                <QuickAction
                  icon={<Flower2 />}
                  label="Information"
                  href={`/information`}
                />
                <QuickAction
                  icon={<Star />}
                  label="Transfers"
                  href={`/transport/overview`}
                />
              </div>

              <div className="contents md:grid md:grid-cols-2 md:gap-4">
                <QuickAction
                  icon={<Utensils />}
                  label="Dine"
                  href={`/experiences/dining`}
                />
                <QuickAction
                  icon={<ShoppingBag />}
                  label="Shop"
                  href={`/experiences/shopping`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickAction({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        bg-white rounded-2xl w-full aspect-4/3 md:w-[140px] md:h-[120px] md:aspect-auto
        flex flex-col items-center justify-center gap-2
        text-[#0C1A47] font-bold shadow-lg
        hover:bg-gray-50 transition-colors
      "
    >
      <div className="[&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
        {icon}
      </div>
      <span className="text-lg">{label}</span>
    </Link>
  );
}
