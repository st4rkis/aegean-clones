"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { useState, TouchEvent } from "react"; // 1. Import TouchEvent

export default function HappeningSection() {
  const airport = useAirport();
  const city = airport?.city || "Dubai";

  const happenings = [
    {
      id: 1,
      label: "Art & Culture",
      href: "/happening/art",
      bgColor: "bg-[#1E2C79]",
    },
    {
      id: 2,
      label: `${city} Shopping Festival`,
      href: "/happening/shopping",
      bgColor: "bg-[#0C1A47]",
    },
    {
      id: 3,
      label: "Global Village",
      href: "/happening/global-village",
      bgColor: "bg-[#2A3B90]",
    },
  ];

  // Mobile Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- SWIPE LOGIC START ---
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50; // Required distance (px) to register a swipe

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(); // Swiping Left -> Show Next
    }
    if (isRightSwipe) {
      prevSlide(); // Swiping Right -> Show Prev
    }
  };
  // --- SWIPE LOGIC END ---

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % happenings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? happenings.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#F3F4FE] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* TITLE */}
        <h2 className="text-[#0C1A47] text-2xl md:text-5xl font-semibold mb-8 md:mb-12 text-left">
          Happening in {city}
        </h2>

        {/* --- DESKTOP: GRID LAYOUT --- */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {happenings.map((item) => (
            <HappeningCard key={item.id} item={item} />
          ))}
        </div>

        {/* --- MOBILE: SLIDER LAYOUT --- */}
        <div className="md:hidden flex flex-col items-center">
          <div
            className="w-full relative overflow-hidden rounded-3xl mb-8 touch-pan-y" // Added touch-pan-y for better scrolling behavior
            // ADD HANDLERS HERE
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentSlide} * (100% + 24px)))`,
              }}
            >
              {happenings.map((item) => (
                <div key={item.id} className="w-full shrink-0">
                  <HappeningCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#DDE3FF] text-[#0C1A47] flex items-center justify-center hover:bg-[#c4cfff] transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="bg-[#DDE3FF] text-[#0C1A47] px-6 py-2 rounded-full font-bold text-sm tracking-widest">
              {currentSlide + 1} / {happenings.length}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#DDE3FF] text-[#0C1A47] flex items-center justify-center hover:bg-[#c4cfff] transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function HappeningCard({ item }: { item: any }) {
  return (
    <div
      className={`
        relative w-full aspect-3/4 md:aspect-3/4
        ${item.bgColor} rounded-3xl overflow-hidden shadow-lg
        group cursor-pointer select-none
      `}
    >
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

      <div className="absolute bottom-6 left-6 right-6">
        <Link
          href={item.href}
          className="
            inline-flex items-center gap-2
            bg-white text-[#0C1A47] 
            px-5 py-3 rounded-full 
            text-sm font-bold shadow-md
            hover:bg-gray-100 transition-colors
            max-w-full
          "
        >
          <span className="truncate">{item.label}</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
