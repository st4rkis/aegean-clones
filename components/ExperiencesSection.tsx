"use client";

import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { useState } from "react";

export default function ExperiencesSection() {
  const airport = useAirport();
  const name = airport?.key || "DXB";
  const [isExpanded, setIsExpanded] = useState(false);

  // PLACEHOLDER IMAGE - Replace this with your actual image paths later
  const PLACEHOLDER_IMG = "/images/experiences/placeholder.jpg";

  return (
    <section className="w-full bg-[#F3F4FE] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* TITLE */}
        <h2 className="text-[#0C1A47] text-2xl md:text-5xl font-semibold mb-8 md:mb-12">
          Experiences at {name}
        </h2>

        {/* MASONRY GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* --- LEFT COLUMN (Items 1 & 2) --- */}
          <div className="flex flex-col gap-6 w-full">
            <ExperienceCard
              label="Discover shops"
              href="/information/shops"
              height="h-[400px] md:h-[600px]"
              imageSrc="/images/services/airport-shops.jpg"
            />
            <ExperienceCard
              label="Find restaurants"
              href="/experiences/dining"
              height="h-[400px] md:h-[500px]"
              imageSrc="/images/services/airport-restaurants.jpg"
            />
          </div>

          {/* --- RIGHT COLUMN (Items 3, 4, 5) --- */}
          <div className="flex flex-col gap-6 w-full">
            <ExperienceCard
              label="Explore Hotels nearby"
              href="https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwiUqL2R1-eRAxXnmYMHHW6HL2kYACICCAEQABoCZWY&co=1&ase=2&gclid=Cj0KCQiAsNPKBhCqARIsACm01fTMo0qW5X7edMJlx8HYf0qj3GD5Ob1Pex20hdnsyKtqRfmL_-IMYOEaAmCIEALw_wcB&cid=CAASJeRoz8EJlxLfe5m81J9kgkRgvYQLJK6QQ_pG-ZJPT_zc9x4mxaE&cce=2&category=acrcp_v1_32&sig=AOD64_0Gn9WEq0uOh806FPWTdoc_ubIDUQ&q&nis=4&adurl=https://www.booking.com/region/gr/mykonos.el.html?aid%3D1610841;label%3Dmykonos-NA*Go6M9IGAnLurW3Br2aQS502721022609:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-2911711957:lp9061576:li:dec:dm:ppccp%3DUmFuZG9tSVYkc2RlIyh9YTiRJUvwM0AZdGs-9RnVI9A;ws%3D%26gad_source%3D1%26gad_campaignid%3D1576598080%26gbraid%3D0AAAAAD_Ls1LVAEVqkkK1Awm40T8V4w9sy%26gclid%3DCj0KCQiAsNPKBhCqARIsACm01fTMo0qW5X7edMJlx8HYf0qj3GD5Ob1Pex20hdnsyKtqRfmL_-IMYOEaAmCIEALw_wcB&ved=2ahUKEwiXnbiR1-eRAxXcVPEDHdDWDJ8Q0Qx6BAgNEAE"
              height="h-[400px] md:h-[280px]"
              imageSrc="/images/services/airport-hotels.jpg"
              isExternal={true}
            />
            {/* HIDDEN ITEMS WRAPPER */}
            <div
              className={`${
                isExpanded ? "flex" : "hidden"
              } md:flex flex-col gap-6 w-full`}
            >
              <ExperienceCard
                label="Relax & refresh"
                href="/experiences/relax"
                height="h-[400px] md:h-[516px]"
                imageSrc="/images/services/airport-relax.jpg"
              />
              <ExperienceCard
                label="Browse services"
                href="/information/services"
                height="h-[400px] md:h-[280px]"
                imageSrc="/images/services/airport-services.jpg"
              />
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            {!isExpanded && (
              <div className="md:hidden w-full flex justify-center mt-2">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="
                    bg-[#0C1A47] text-white 
                    px-8 py-3 rounded-full 
                    text-[15px] font-bold 
                    flex items-center gap-2 
                    hover:bg-[#0C1A47]/90 transition-colors
                    shadow-lg
                  "
                >
                  Show more experiences <Plus className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- UPDATED CARD COMPONENT ---
function ExperienceCard({
  label,
  href,
  height,
  imageSrc,
  isExternal, // New optional prop
}: {
  label: string;
  href: string;
  height: string;
  imageSrc: string;
  isExternal?: boolean; // Type definition
}) {
  return (
    <div
      className={`
        relative w-full ${height}
        bg-[#0C1A47] rounded-2xl overflow-hidden shadow-sm group
      `}
    >
      {/* 1. BACKGROUND IMAGE */}
      <img
        src={imageSrc}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* 2. DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

      {/* 3. BUTTON */}
      <div className="absolute bottom-6 left-6 z-10">
        <Link
          href={href}
          // CONDITIONAL ATTRIBUTES FOR EXTERNAL LINKS
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="
            bg-white text-[#0C1A47] 
            px-6 py-3 rounded-full 
            text-[15px] font-bold 
            flex items-center gap-2 
            hover:bg-gray-100 transition-colors
            shadow-md
          "
        >
          {label} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
