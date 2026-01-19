"use client";

import React, { useRef, useState } from "react";
import { useAirport } from "@/context/AirportContext";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modules & Icons
import { Navigation, Pagination } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Globe,
  Plane,
  BarChart3,
  MapPin,
} from "lucide-react";

// --- 1. REAL WORLD TRAFFIC DATA ---
type TrafficData = {
  total: string;
  growth: string;
  domestic: number;
  international: number;
  monthly?: { month: string; pax: number }[];
};

const TRAFFIC_DATABASE: Record<string, TrafficData> = {
  // --- MYKONOS (JMK) ---
  JMK: {
    total: "1.57M",
    growth: "-1.9%",
    domestic: 484095,
    international: 1090659,
    monthly: [
      { month: "Jan", pax: 6709 },
      { month: "Feb", pax: 4370 },
      { month: "Mar", pax: 12793 },
      { month: "Apr", pax: 46444 },
      { month: "May", pax: 127905 },
      { month: "Jun", pax: 254513 },
      { month: "Jul", pax: 382401 },
      { month: "Aug", pax: 396427 },
      { month: "Sep", pax: 244587 },
      { month: "Oct", pax: 86057 },
      { month: "Nov", pax: 12548 },
    ],
  },
  // --- SANTORINI (JTR) ---
  JTR: {
    total: "2.38M",
    growth: "-16.1%",
    domestic: 1050673,
    international: 1332219,
    monthly: [
      { month: "Apr", pax: 129260 },
      { month: "May", pax: 249937 },
      { month: "Jun", pax: 346946 },
      { month: "Jul", pax: 450624 },
      { month: "Aug", pax: 465850 },
      { month: "Sep", pax: 360515 },
      { month: "Oct", pax: 236881 },
    ],
  },
  // --- THESSALONIKI (SKG) ---
  SKG: {
    total: "7.40M",
    growth: "+8.0%",
    domestic: 2325947,
    international: 5076584,
    monthly: [
      { month: "May", pax: 712374 },
      { month: "Jun", pax: 771998 },
      { month: "Jul", pax: 883077 },
      { month: "Aug", pax: 910543 },
      { month: "Sep", pax: 836384 },
      { month: "Oct", pax: 756101 },
    ],
  },
  // --- KEFALONIA (EFL) ---
  EFL: {
    total: "0.89M",
    growth: "+2.2%",
    domestic: 120394,
    international: 769313,
    monthly: [
      { month: "May", pax: 84539 },
      { month: "Jun", pax: 159555 },
      { month: "Jul", pax: 208233 },
      { month: "Aug", pax: 211471 },
      { month: "Sep", pax: 156747 },
    ],
  },
  // --- YEARLY ONLY DATA ---
  ATH: {
    total: "28.1M",
    growth: "+24.0%",
    domestic: 8800000,
    international: 19374150,
  },
  RHO: {
    total: "6.89M",
    growth: "+2.3%",
    domestic: 808913,
    international: 6088348,
  },
  CFU: {
    total: "4.55M",
    growth: "+6.0%",
    domestic: 389914,
    international: 4165541,
  },
  HER: {
    total: "8.72M",
    growth: "+4.8%",
    domestic: 1900000,
    international: 6823000,
  },
  ZTH: {
    total: "2.27M",
    growth: "+2.6%",
    domestic: 90979,
    international: 2179987,
  },
  KGS: {
    total: "3.11M",
    growth: "+3.4%",
    domestic: 298121,
    international: 2814058,
  },
  PAS: {
    total: "365k",
    growth: "+18.2%",
    domestic: 295000,
    international: 70000,
  },
  JNX: {
    total: "155k",
    growth: "+15.5%",
    domestic: 152000,
    international: 3000,
  },
  MLO: {
    total: "115k",
    growth: "+12.0%",
    domestic: 112000,
    international: 3000,
  },
  BJV: {
    total: "4.37M",
    growth: "+8.0%",
    domestic: 2427891,
    international: 1947771,
  },
};

export default function HighlightsCarousel() {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const airport = useAirport();

  // --- RESOLVE DATA ---
  const code = airport?.key?.toUpperCase() || "JMK";
  const stats = TRAFFIC_DATABASE[code] || TRAFFIC_DATABASE["JMK"];

  // Calculate Percentages
  const totalRaw = stats.domestic + stats.international;
  const domPct = Math.round((stats.domestic / totalRaw) * 100);
  const intPct = Math.round((stats.international / totalRaw) * 100);

  // --- SLIDE GENERATION ---
  const slides = [];

  // SLIDE 1: The Big Number
  slides.push(
    <div className="h-full w-full bg-linear-to-br from-[#0C1A47] to-[#1E2C79] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
        <Users size={180} />
      </div>
      <div>
        <div className="flex items-center gap-2 text-[#FFD600] font-bold uppercase tracking-widest text-sm mb-4">
          <BarChart3 size={16} /> Annual Traffic
        </div>
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-2">
          {stats.total}
        </h3>
        <p className="text-white/60 text-lg">Total Passengers</p>
      </div>
      <div className="mt-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 inline-block min-w-[200px]">
          <span className="text-white/60 text-sm font-medium">
            Growth vs Prev. Year
          </span>
          <div
            className={`text-3xl font-bold flex items-center gap-2 ${
              stats.growth.includes("-") ? "text-red-400" : "text-green-400"
            }`}
          >
            <TrendingUp size={24} />
            {stats.growth}
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 2: Domestic vs International
  slides.push(
    <div className="h-full w-full bg-linear-to-bl from-[#2E0F57] to-[#4c1d95] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute bottom-0 left-0 p-8 opacity-10">
        <Globe size={180} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-[#FFD600] font-bold uppercase tracking-widest text-sm mb-8">
          <MapPin size={16} /> Connectivity
        </div>
        <div className="w-full h-24 flex rounded-3xl overflow-hidden shadow-2xl mb-8">
          <div
            style={{ width: `${intPct}%` }}
            className="bg-[#FFD600] flex items-center justify-center relative group/bar"
          >
            <span className="text-[#0C1A47] font-bold text-2xl z-10">
              {intPct}%
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
          </div>
          <div
            style={{ width: `${domPct}%` }}
            className="bg-white flex items-center justify-center relative group/bar"
          >
            <span className="text-[#0C1A47] font-bold text-2xl z-10">
              {domPct}%
            </span>
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#FFD600]" />
              <span className="text-white/80 font-bold">International</span>
            </div>
            <p className="text-white/50 text-sm">
              {stats.international.toLocaleString()} travelers
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-white" />
              <span className="text-white/80 font-bold">Domestic</span>
            </div>
            <p className="text-white/50 text-sm">
              {stats.domestic.toLocaleString()} travelers
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // SLIDE 3: Monthly Breakdown (With Visible Numbers)
  if (stats.monthly && stats.monthly.length > 0) {
    const surgeMonths = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
    const displayData = stats.monthly.filter((m) =>
      surgeMonths.includes(m.month)
    );
    const chartData = displayData.length > 0 ? displayData : stats.monthly;
    const maxMonth = Math.max(...chartData.map((m) => m.pax));

    slides.push(
      <div className="h-full w-full bg-[#050B20] p-8 md:p-12 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 text-[#FFD600] font-bold uppercase tracking-widest text-sm">
            <Plane size={16} /> Peak Season
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mt-2">
            Summer Surge
          </h3>
          <p className="text-white/40 text-sm mt-1">
            Monthly passenger volume (Peak)
          </p>
        </div>

        {/* Chart Container */}
        <div className="flex items-end justify-between h-[200px] w-full gap-2 mt-12 z-10">
          {chartData.map((m, idx) => {
            // We use 85% as max height to leave headroom for the label on top
            const height = (m.pax / maxMonth) * 85;
            const label = (m.pax / 1000).toFixed(0) + "k"; // e.g., 382k

            return (
              <div
                key={idx}
                className="flex-1 h-full flex flex-col justify-end items-center gap-1 group/chart"
              >
                {/* VISIBLE NUMBER LABEL */}
                <span className="text-white/90 text-xs md:text-sm font-bold mb-1 tracking-tight">
                  {label}
                </span>

                {/* Bar */}
                <div
                  style={{ height: `${height}%` }}
                  className="w-full bg-white rounded-t-sm relative overflow-hidden transition-all duration-300 group-hover/chart:bg-[#FFD600]"
                >
                  <div className="absolute top-0 w-full h-full bg-linear-to-b from-white/20 to-transparent" />
                </div>

                {/* Month Label */}
                <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">
                  {m.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- NAV CONTROLS ---
  const NavControls = () => (
    <div className="flex items-center gap-4">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0C1A47] transition-colors"
        disabled={currentIndex === 0}
      >
        <ChevronLeft
          size={20}
          className={currentIndex === 0 ? "opacity-30" : ""}
        />
      </button>

      <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold min-w-14 text-center">
        {currentIndex + 1} / {slides.length}
      </span>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0C1A47] transition-colors"
        disabled={currentIndex === slides.length - 1}
      >
        <ChevronRight
          size={20}
          className={currentIndex === slides.length - 1 ? "opacity-30" : ""}
        />
      </button>
    </div>
  );

  return (
    <section className="relative w-full bg-[#020617] overflow-hidden border-t border-white/5">
      <div className="flex flex-col h-[calc(100dvh-5rem)] justify-center px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto">
        <div className="w-full flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pt-6 md:pt-0 shrink-0">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Statistics
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                Traffic statistics for {airport?.name || code}
              </p>
            </div>
            <div className="hidden md:block">
              <NavControls />
            </div>
          </div>

          <div className="w-full h-[450px] md:h-[500px] relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1.1}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              breakpoints={{
                640: { slidesPerView: 1.1, spaceBetween: 24 },
                768: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 2.2, spaceBetween: 32 },
              }}
              className="w-full h-full rounded-2xl"
            >
              {slides.map((content, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  <article className="h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative hover:scale-[1.01] transition-transform duration-500">
                    {content}
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:hidden flex justify-center shrink-0">
            <NavControls />
          </div>
        </div>
      </div>
    </section>
  );
}
