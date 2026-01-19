"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAirport } from "@/context/AirportContext";

// --- IMPORT THE NEW COMPONENT ---
import NetworkGrid from "@/components/NetworkGrid";

export default function AirportFooter() {
  const airport = useAirport();
  const year = new Date().getFullYear();

  // --- LOGIC TO HANDLE SLUG EXCEPTIONS (ZTH -> ZANTE) ---
  const getExternalSlug = () => {
    const key = airport?.key?.toUpperCase();

    // Exception mapping
    const exceptions: Record<string, string> = {
      ZTH: "zante",
      JMK: "mykonos",
      JTR: "santorini",
      // Add any other specific overrides here
    };

    if (key && exceptions[key]) return exceptions[key];

    // Default fallback to city name
    return (airport?.city || airport?.name || "athens")
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const locationSlug = getExternalSlug();

  // Mobile Accordion State
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full">
      {/* --- 1. NETWORK LINKS --- */}
      <NetworkGrid />

      {/* --- 2. MAIN FOOTER CONTENT --- */}
      <div className="bg-white pt-10 pb-10 md:pt-16 md:pb-8 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            {/* 1. OTHER LINKS */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="hidden md:block text-[#0C1A47] font-semibold text-sm md:text-lg mb-6">
                Other links
              </h3>
              <button
                onClick={() => toggleSection("other")}
                className="md:hidden w-full flex justify-between items-center py-4 border-b border-gray-100 text-[#0C1A47] font-semibold text-lg"
              >
                Other links
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openSection === "other" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 md:overflow-visible md:h-auto md:block ${
                  openSection === "other"
                    ? "max-h-[500px] mb-6"
                    : "max-h-0 md:max-h-none"
                }`}
              >
                <FooterLink href="/privacy" label="Privacy policy" />
                <FooterLink
                  href="/accessibility"
                  label="Accessibility statement"
                />
                <FooterLink href="/terms" label="Terms of use" />
                <FooterLink href="/sitemap-page" label="Sitemap" />
              </ul>
            </div>

            {/* 2. CONTACT & TRANSFERS */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="hidden md:block text-[#0C1A47] font-semibold text-sm md:text-lg mb-6">
                Contact us
              </h3>
              <button
                onClick={() => toggleSection("contact")}
                className="md:hidden w-full flex justify-between items-center py-4 border-b border-gray-100 text-[#0C1A47] font-semibold text-lg"
              >
                Contact us
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openSection === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 md:overflow-visible md:h-auto md:block ${
                  openSection === "contact"
                    ? "max-h-[600px] mb-6"
                    : "max-h-0 md:max-h-none"
                }`}
              >
                <FooterLink href="/contact" label="Contact information" />
                <FooterLink
                  href="/information/lost-and-found"
                  label="Lost & found"
                />
                <FooterLink href="/faqs" label="FAQs" />

                {/* DYNAMIC EXTERNAL LINKS WITH EXCEPTION HANDLING */}
                <FooterLink
                  href={`https://aegeantaxi.com/${locationSlug}/airport/`}
                  label="Airport Transfers"
                />
                <FooterLink
                  href={`https://aegeantaxi.com/${locationSlug}/port/`}
                  label="Port Transfers"
                />
              </ul>
            </div>
          </div>

          {/* --- BOTTOM SECTION --- */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-0">
            <div className="flex flex-col gap-6">
              <div className="text-[#0C1A47] text-6xl font-black tracking-tighter select-none">
                {airport?.key || "AIRPORT"}
                <span className="text-[#0C1A47]/40 text-4xl -mt-2 align-top">
                  +
                </span>
              </div>
              <div className="md:hidden">
                <p className="text-[#0C1A47] text-sm">
                  © {year} {airport?.name || "Airport"}, <br />
                  All Rights Reserved
                </p>
              </div>
            </div>

            <div className="hidden md:block text-right">
              <p className="text-[#0C1A47] text-sm">
                © {year} {airport?.name || "Airport"}, <br />
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- HELPER COMPONENTS ---
function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  const commonProps = {
    className:
      "flex items-center gap-2 text-[#4b4caa] font-medium md:font-semibold text-[16px] md:text-lg transition-colors py-1 md:py-0 hover:text-[#0C1A47]",
    children: (
      <>
        {label}
        <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
      </>
    ),
  };

  if (isExternal) {
    return (
      <li className="mb-3 md:mb-2 last:mb-0">
        <a
          href={href}
          rel="nofollow noreferrer"
          target="_blank"
          {...commonProps}
        />
      </li>
    );
  }

  return (
    <li className="mb-3 md:mb-2 last:mb-0">
      <Link href={href} {...commonProps} />
    </li>
  );
}
