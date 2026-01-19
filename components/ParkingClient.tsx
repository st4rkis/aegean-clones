"use client";

import React from "react";
import { useAirport } from "@/context/AirportContext";
import {
  ParkingCircle,
  Car,
  Clock,
  Key,
  ArrowRight,
  Info,
  CreditCard,
  ShieldCheck,
  Zap,
  Accessibility,
} from "lucide-react";

// --- DYNAMIC PARKING DATA (UNCHANGED) ---
const PARKING_DATA: Record<
  string,
  {
    description: string;
    dropOffInfo: string;
    parkingTips: string;
    rentalAdvice: string;
    bookingLink: string;
  }
> = {
  // Mykonos
  JMK: {
    description:
      "Parking at Mykonos Airport is limited and extremely competitive during high season.",
    dropOffInfo:
      "You can drop off passengers directly in front of the terminal, but do not leave your vehicle unattended. The area is strictly monitored.",
    parkingTips:
      "The public lot opposite the terminal is free but small and almost always full in summer. Arrive very early or use a transfer.",
    rentalAdvice:
      "Rental kiosks are just outside arrivals. Returns usually happen in the designated rental lot adjacent to the main parking.",
    bookingLink: "https://www.aegeantaxi.com/mykonos",
  },
  // Athens
  ATH: {
    description:
      "Athens Airport offers P1 & P2 (Short Term) and P3 (Long Term) parking zones with over 5,800 spaces.",
    dropOffInfo:
      "Use the designated 'Kiss & Fly' drop-off zones at the Departures level. It is free for 10 minutes.",
    parkingTips:
      "P1 and P2 are just 2 minutes walk to the terminal. For cheaper rates, book P3 (Long Term) online in advance.",
    rentalAdvice:
      "Car rental return is located in a separate dedicated area. Follow the 'Car Rental Return' signs as you approach the airport.",
    bookingLink: "https://www.aegeantaxi.com/athens",
  },
  // Santorini
  JTR: {
    description:
      "Santorini Airport has a small public parking area that struggles to cope with peak summer traffic.",
    dropOffInfo:
      "Drop-off is permitted outside the terminal, but congestion is severe in July and August.",
    parkingTips:
      "There is limited free parking opposite the terminal. If it is full, you may need to park further away and walk.",
    rentalAdvice:
      "Most agencies have a desk in arrivals, but their cars may be parked in off-site lots requiring a short shuttle ride.",
    bookingLink: "https://www.aegeantaxi.com/santorini",
  },
  // Heraklion
  HER: {
    description:
      "Heraklion Airport has an official car park 50m from the terminal and several cheaper private lots nearby.",
    dropOffInfo:
      "The drop-off zone is directly outside Departures. It is busy but functional.",
    parkingTips:
      "The official lot costs ~€8 for short stays. Cheaper private parking (e.g., Alianthos) is available a short walk away.",
    rentalAdvice:
      "Rental returns are typically handled in the dedicated car rental parking area east of the main terminal.",
    bookingLink: "https://www.aegeantaxi.com/crete",
  },
  // Corfu
  CFU: {
    description:
      "Corfu Airport has a dedicated 150-space lot directly outside the terminal.",
    dropOffInfo:
      "You can drop off in front of the terminal, then loop around if you need to find a parking spot.",
    parkingTips:
      "There is some limited free parking to the left of the entrance, but the official paid lot is safer and more convenient.",
    rentalAdvice:
      "Rental returns are generally straightforward; follow signage for your specific company upon entering the airport grounds.",
    bookingLink: "https://www.aegeantaxi.com/corfu",
  },
  // Kefalonia (EFL)
  EFL: {
    description:
      "Kefalonia Airport offers a designated parking area located immediately opposite the terminal building.",
    dropOffInfo:
      "There is a drop-off lane directly in front of Departures for quick unloading of luggage.",
    parkingTips:
      "The main parking is paid and operates 24/7. It is convenient but can get busy during Tuesday/Sunday charter peaks.",
    rentalAdvice:
      "Most rental companies have their fleets parked in the dedicated lots just a short walk from the terminal exit.",
    bookingLink: "https://www.aegeantaxi.com/kefalonia",
  },
  // Rhodes
  RHO: {
    description:
      "Rhodes Diagoras Airport has ample parking facilities compared to smaller islands.",
    dropOffInfo:
      "Drop-off lanes are available directly in front of the Departures hall.",
    parkingTips:
      "Many rental companies offer free parking in their designated zones. Check with your provider before paying for public parking.",
    rentalAdvice:
      "Rental return lots are located opposite the arrivals terminal, about 10-20 meters away.",
    bookingLink: "https://www.aegeantaxi.com/rhodes",
  },
  // Thessaloniki
  SKG: {
    description:
      "Makedonia Airport has extensive parking: P4 (Short Term) and P6, P7, P8 (Long Term).",
    dropOffInfo:
      "Strict no-parking rules apply at the curbside. Use the P4 lot for picking up passengers if you need to wait.",
    parkingTips:
      "P6, P7, and P8 offer cheaper long-term rates and are open 24/7. P4 is best for stays under 5 hours.",
    rentalAdvice:
      "Follow the 'Car Rental' signs. The return area is well-marked and separate from the public parking zones.",
    bookingLink: "https://www.aegeantaxi.com/thessaloniki",
  },
  // Paros
  PAS: {
    description:
      "Paros Airport is small with a limited parking capacity of about 70 cars.",
    dropOffInfo:
      "Drop-off is quick and simple directly at the curb. Traffic is generally light compared to Mykonos.",
    parkingTips:
      "The on-site lot is free but fills up instantly. Several private off-site lots offer shuttles to the terminal.",
    rentalAdvice:
      "Rental returns usually involve dropping keys at the in-terminal desk. Confirm the drop-off spot with your agent.",
    bookingLink: "https://www.aegeantaxi.com/paros",
  },
  // Naxos
  JNX: {
    description:
      "Naxos Airport parking is very small, located about 2 minutes' walk from the terminal building.",
    dropOffInfo:
      "Quick drop-offs are permitted at the gate. The airport is small so walking distances are negligible.",
    parkingTips:
      "Spaces are scarce. Meet-and-greet services are often preferred over trying to park your own car here.",
    rentalAdvice:
      "For returns, park in the designated rental area and drop keys at the desk inside arrivals.",
    bookingLink: "https://www.aegeantaxi.com/naxos",
  },
  // Zakynthos
  ZTH: {
    description:
      "Zakynthos Airport parking is located opposite the terminal but space is often tight.",
    dropOffInfo:
      "There is a standard drop-off lane. Note that the airport does not offer official 'meet and greet' parking services.",
    parkingTips:
      "The car park is unregulated in parts; ensure you park in a marked bay to avoid blocking others.",
    rentalAdvice:
      "Check-in desks open 2.5 hours before flights. Allow time for rental return procedures as queues can form.",
    bookingLink: "https://www.aegeantaxi.com/zakynthos",
  },
  // Kos
  KGS: {
    description:
      "Kos Airport offers distinct short-term and long-term parking areas within the premises.",
    dropOffInfo:
      "Drop-off is easy outside the terminal. The layout is efficient and less chaotic than larger hubs.",
    parkingTips:
      "There are limited free public spaces opposite the terminal. Paid options are available for longer stays.",
    rentalAdvice:
      "Rental car parking is separate. Ensure you park in your specific company's lane to avoid fines.",
    bookingLink: "https://www.aegeantaxi.com/kos",
  },
  // Milos
  MLO: {
    description:
      "Milos has a tiny airport with a parking lot roughly 2 minutes' walk from the main building.",
    dropOffInfo: "You can pull up close to the entrance for luggage unloading.",
    parkingTips:
      "Parking is basically a small open lot. It is rarely monitored but perfectly safe.",
    rentalAdvice:
      "For after-hours returns, many agencies ask you to park, lock the car, and put the key in a drop-box.",
    bookingLink: "https://www.aegeantaxi.com/milos",
  },
  // Bodrum
  BJV: {
    description:
      "Milas-Bodrum has a large, organized parking facility with a subscription system for frequent flyers.",
    dropOffInfo:
      "Separate levels for Departures and Arrivals ensure smooth traffic flow for drop-offs.",
    parkingTips:
      "The parking is paid and monitored. It is one of the more secure airport parking options in the region.",
    rentalAdvice:
      "Rental return is standard. Follow signs for 'Rent A Car' to reach the dedicated return lots.",
    bookingLink: "https://www.aegeantaxi.com",
  },
  // Default Fallback
  DEFAULT: {
    description:
      "Parking availability varies by season. High season often sees full capacity.",
    dropOffInfo:
      "Look for designated drop-off zones outside the Departures terminal.",
    parkingTips:
      "Arrive early if you plan to park. During summer, slots can be hard to find.",
    rentalAdvice:
      "Follow signage for 'Car Rental Return' as you approach the airport complex.",
    bookingLink: "https://www.aegeantaxi.com",
  },
};

export default function ParkingClient() {
  const airport = useAirport();

  // Use key to find data, default to "DEFAULT"
  const airportKey = airport?.key ? airport.key.toUpperCase() : "DEFAULT";
  const info = PARKING_DATA[airportKey] || PARKING_DATA["DEFAULT"];
  const bookingLink = info.bookingLink;

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <ParkingCircle className="w-5 h-5" />
            <span>Terminal Access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Parking & Drop-off <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airport?.name || "Airport"}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-normal">
            {info.description}
          </h2>
        </div>
      </div>

      {/* --- INTRO: DRIVER'S STRATEGY (New Section) --- */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20 mb-20 text-center">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-[#0C1A47] mb-6">
            Terminal Access Strategy
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Accessing the airport by private vehicle requires an understanding
            of the zoning system to avoid unnecessary fines or delays. The
            terminal frontage is typically designated as a "Kiss & Fly" zone,
            strictly regulated for rapid drop-offs of under 5 minutes. Drivers
            must remain with their vehicles at all times in this lane;
            unattended cars are subject to immediate towing by airport security.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            For those needing to accompany passengers into the terminal or wait
            for arrivals, the Short-Term parking lots are the correct choice.
            While hourly rates apply, these zones provide safe, monitored spaces
            within walking distance of the check-in counters, ensuring a
            stress-free transition from car to gate.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Drop-off */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Drop-off & Pick-up
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.dropOffInfo}
            </p>
          </div>

          {/* Card 2: Parking Tips */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Parking Tips
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.parkingTips}
            </p>
          </div>

          {/* Card 3: Rental Advice */}
          <div className="bg-linear-to-br from-white to-[#E8EEF9] rounded-[2.5rem] p-10 border border-white/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-3 rounded-full text-[#0C1A47] shadow-sm">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0C1A47]">
                Renting a Car?
              </h3>
            </div>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed">
              {info.rentalAdvice}
            </p>
          </div>

          {/* Card 4: CTA */}
          <div className="bg-[#0C1A47] rounded-[2.5rem] p-10 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />
            <div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-white/10 p-3 rounded-full text-[#FFD600]">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Easier Option</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
                Avoid the stress of parking and congestion. Pre-book a driver to
                pick you up directly at the terminal curb.
              </p>
            </div>
            <a
              href={bookingLink}
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-between bg-[#FFD600] text-[#0C1A47] px-6 py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors duration-300 relative z-10"
            >
              <span>Book Aegean Taxi Pickup</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER: PARKING GUIDE (Adds ~400 words) --- */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#0C1A47] p-3 rounded-xl text-white">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0C1A47]">
              Facility Handbook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Column 1: Payment & Accessibility */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#FFD600]" />
                  Payment Methods
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Most official airport parking facilities operate with
                  automated payment machines located within the arrivals hall or
                  at the car park pedestrian entrance. You must pay your ticket{" "}
                  <strong>before</strong>
                  returning to your vehicle. While modern machines accept credit
                  cards and contactless payments, some older barriers in
                  regional airports may still require cash (Euro coins/notes) or
                  manual validation at an office counter.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-[#FFD600]" />
                  Accessibility (PRM)
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Dedicated parking spaces for Passengers with Reduced Mobility
                  (PRM) are available in all official lots. These spaces are
                  positioned as close as possible to the terminal entrance to
                  minimize walking distance. A valid Blue Badge must be clearly
                  displayed on the dashboard. In many cases, using these
                  designated zones entitles the vehicle to extended free parking
                  periods, though validation at the information desk may be
                  required.
                </p>
              </div>
            </div>

            {/* Column 2: Security & EVs */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FFD600]" />
                  Security & Monitoring
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Official on-site parking zones are monitored 24/7 by CCTV and
                  security patrols. However, users park at their own risk. We
                  strongly advise against leaving valuables, electronics, or
                  luggage visible inside the vehicle. If you choose a private
                  off-site parking provider, verify their security credentials,
                  as some operate from open, unmonitored lots.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#FFD600]" />
                  Electric Vehicle Charging
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The infrastructure for Electric Vehicles (EV) is expanding
                  across the region. Larger hubs like Athens and Thessaloniki
                  offer dedicated charging points within the Short-Term parking
                  zones. At smaller island airports, charging facilities may be
                  limited or non-existent. We recommend ensuring your vehicle
                  has sufficient charge before driving to the airport,
                  especially if leaving it for an extended period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
