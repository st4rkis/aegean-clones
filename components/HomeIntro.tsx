"use client";

import { useAirport } from "@/context/AirportContext";

// --- DATA FROM BOSS ---
const AIRPORT_EDITORIAL_DATA: Record<string, string[]> = {
  JMK: [
    "With thousands of travellers arriving daily during the summer season, Mykonos Airport (JMK) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  ATH: [
    "With thousands of travellers arriving daily during the summer season, Athens International Airport (ATH) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  JTR: [
    "With thousands of travellers arriving daily during the summer season, Santorini Airport (JTR) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  HER: [
    "With thousands of travellers arriving daily during the summer season, Heraklion Airport (HER) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  RHO: [
    "With thousands of travellers arriving daily during the summer season, Rhodes Diagoras Airport (RHO) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  CFU: [
    "With thousands of travellers arriving daily during the summer season, Corfu Airport (CFU) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  SKG: [
    "With thousands of travellers arriving daily during the summer season, Makedonia Airport (SKG) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  ZTH: [
    "With thousands of travellers arriving daily during the summer season, Zakynthos Airport (ZTH) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  KGS: [
    "With thousands of travellers arriving daily during the summer season, Kos Airport (KGS) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  EFL: [
    "With thousands of travellers arriving daily during the summer season, Kefalonia Airport (EFL) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  PAS: [
    "With thousands of travellers arriving daily during the summer season, Paros Airport (PAS) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  JNX: [
    "With thousands of travellers arriving daily during the summer season, Naxos Airport (JNX) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  MLO: [
    "With thousands of travellers arriving daily during the summer season, Milos Airport (MLO) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  BJV: [
    "With thousands of travellers arriving daily during the summer season, Milas-Bodrum Airport (BJV) experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
  // Fallback
  DEFAULT: [
    "With thousands of travellers arriving daily during the summer season, the airport experiences frequent schedule changes, high demand for transport, and limited parking availability.",
    "This page provides real-time flight updates, essential terminal information, and practical tips to help passengers move smoothly through the airport.",
  ],
};

export default function HomeIntro() {
  const airport = useAirport();
  const name = airport?.name || "The Airport";
  // Safely handle code uppercase to match keys
  const code = (airport?.key || "DEFAULT").toUpperCase();

  // Pick the specific text for this airport, or fallback to default
  const content =
    AIRPORT_EDITORIAL_DATA[code] || AIRPORT_EDITORIAL_DATA["DEFAULT"];

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center md:text-left">
        {/* Simple Gold Line */}
        <div className="w-12 h-1 bg-[#FFD600] mb-6 mx-auto md:mx-0" />

        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
          Terminal Overview
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0C1A47] mb-6">
          Essential Data for {name} ({code})
        </h2>

        {/* Map through the paragraphs from the data array */}
        <div className="space-y-4">
          {content.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-gray-600 leading-relaxed text-lg md:text-xl font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
