"use client";

import Link from "next/link";
import {
  Plane,
  Ship,
  Gem,
  ShieldCheck,
  UtensilsCrossed,
  PartyPopper,
  Building2,
  ArrowRight,
  Star,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useAirport } from "@/context/AirportContext";

const SERVICES = [
  {
    title: "VIP Transfers & Aviation",
    description:
      "From tarmac to villa in seamless luxury. Helicopter charters, private jets, and chauffeured limousines.",
    icon: <Plane className="w-8 h-8 text-[#FFD600]" />,
  },
  {
    title: "Yacht Charters",
    description:
      "Explore the Aegean secret coves. Day cruises and weekly charters on the finest vessels.",
    icon: <Ship className="w-8 h-8 text-[#FFD600]" />,
  },
  {
    title: "Luxury Accommodation",
    description:
      "Access to off-market villas and presidential hotel suites that strictly define exclusivity.",
    icon: <Building2 className="w-8 h-8 text-[#FFD600]" />,
  },
  {
    title: "Private Dining & Chefs",
    description:
      "Michelin-star experiences in the privacy of your villa, or reservations at fully-booked venues.",
    icon: <UtensilsCrossed className="w-8 h-8 text-[#FFD600]" />,
  },
  {
    title: "Event Planning",
    description:
      "From intimate sunset gatherings to lavish weddings and world-class parties.",
    icon: <PartyPopper className="w-8 h-8 text-[#FFD600]" />,
  },
  {
    title: "Security & Protection",
    description:
      "Discrete, professional close protection services ensuring your peace of mind 24/7.",
    icon: <ShieldCheck className="w-8 h-8 text-[#FFD600]" />,
  },
];

export default function ConciergeClient() {
  const airport = useAirport();
  const airportName = airport?.name || "The Airport";

  return (
    <main className="min-h-screen bg-[#F3F4FE] font-sans">
      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#0C1A47] text-white overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFD600]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-[#FFD600]/30 text-[#FFD600] text-sm font-bold tracking-wider uppercase mb-8">
            <Gem className="w-4 h-4" />
            <span>Premium Lifestyle Management</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Beyond the <span className="text-[#FFD600]">Arrival:</span> <br />
            <span className="text-3xl md:text-5xl text-blue-100 block mt-2">
              Exclusive VIP Concierge & Luxury Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light leading-relaxed">
            Your journey doesn't end at {airportName}. It evolves into an
            experience. Unlock a world of bespoke luxury, where your only limit
            is your imagination.
          </p>
        </div>
      </div>

      {/* --- INTRO: THE PHILOSOPHY (New Section) --- */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1.5 bg-[#0C1A47] mb-8 mx-auto rounded-full" />
          <h2 className="text-3xl font-bold text-[#0C1A47] mb-6">
            The Art of Greek Hospitality
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Arriving at the airport is merely the first chapter of your journey.
            To truly experience the magic of the region, specifically tailored
            support is often required. From securing a last-minute table at a
            world-renowned beach club to arranging a private helicopter transfer
            to a secluded island, our concierge partner specializes in making
            the impossible happen. We understand that time is your most valuable
            asset, and our goal is to ensure every moment of your stay is
            effortless.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our approach goes beyond standard bookings. We provide exclusive VIP
            concierge services that anticipate your needs before you even
            express them. Whether you are traveling for a high-stakes business
            meeting or a leisurely family retreat, our local expertise ensures
            that you bypass the queues, avoid the crowds, and access the hidden
            gems that define the luxury lifestyle in Greece.
          </p>
        </div>
      </div>

      {/* --- PARTNER SPOTLIGHT --- */}
      <div className="bg-[#F8F9FC] py-16 px-6 relative z-10 border-y border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1A47]">
              Powered by{" "}
              <span className="underline decoration-[#FFD600] underline-offset-4">
                Fine Living Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We have partnered with Greece's premier lifestyle management firm
              to ensure your time here is nothing short of extraordinary.
              Whether you require a last-minute helicopter to Mykonos, a table
              at Scorpios, or a private villa with 24/7 staff, Fine Living
              Services makes the impossible, possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://fineliving-services.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0C1A47] text-white rounded-xl font-bold hover:bg-[#1a2b6b] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
              >
                <span>Visit Fine Living Services</span>
                <ArrowRight className="w-5 h-5 text-[#FFD600]" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0C1A47] border-2 border-[#0C1A47]/10 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Contact Airport Team
              </Link>
            </div>
          </div>

          {/* Decor/Badge */}
          <div className="relative hidden md:block">
            <div className="w-64 h-64 rounded-full bg-[#FFD600] flex items-center justify-center relative animate-pulse-slow">
              <div className="absolute inset-4 border-2 border-[#0C1A47] rounded-full border-dashed animate-spin-slow" />
              <div className="text-center">
                <Star className="w-12 h-12 text-[#0C1A47] mx-auto mb-2" />
                <span className="block text-[#0C1A47] font-bold text-xl">
                  Voted #1
                </span>
                <span className="block text-[#0C1A47] text-sm uppercase tracking-widest">
                  Concierge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h3 className="text-[#0C1A47] text-3xl font-bold mb-4">
            Curated Experiences
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Everything you need to elevate your stay, managed with absolute
            discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-3xl shadow-lg border border-transparent hover:border-[#FFD600]/50 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#F3F4FE] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0C1A47] transition-colors duration-300">
                <div className="text-[#FFD600] group-hover:text-[#FFD600]">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#0C1A47] mb-3">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER: HOW IT WORKS (New Section) --- */}
      <div className="bg-[#0C1A47] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-white/10 rounded-xl">
              <Users className="w-8 h-8 text-[#FFD600]" />
            </div>
            <h2 className="text-3xl font-bold">How the Service Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-blue-100">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#FFD600]">
                <Clock className="w-6 h-6" />
                <h3 className="font-bold text-xl text-white">Consultation</h3>
              </div>
              <p className="leading-relaxed">
                Engaging a lifestyle management service begins with a simple
                consultation. Whether you need a single VIP transfer or a
                comprehensive itinerary for a two-week yacht charter, the
                process is designed to be seamless. We discuss your preferences,
                dietary requirements, and privacy needs to build a profile that
                guides our service.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#FFD600]">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="font-bold text-xl text-white">Execution</h3>
              </div>
              <p className="leading-relaxed">
                Upon submitting your request, a dedicated lifestyle manager will
                be assigned to your case. This local expert acts as your single
                point of contact, handling all logistics, payments, and
                reservations. This ensures that you never have to deal with
                multiple vendors, language barriers, or sold-out notifications.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#FFD600]">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-bold text-xl text-white">
                  On-Site Support
                </h3>
              </div>
              <p className="leading-relaxed">
                Greece, particularly during the high summer season, operates at
                full capacity. The most desirable villas and venues are often
                booked months in advance. By engaging our luxury services early,
                you gain access to an exclusive inventory. Should plans change,
                your manager is available 24/7 to restructure your itinerary
                instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
