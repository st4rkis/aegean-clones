"use client";

import { useState } from "react";
import {
  ChevronDown,
  ParkingSquare,
  Info,
  Briefcase,
  ShieldAlert,
  Coffee,
  Plane,
  Backpack,
  Globe,
  Accessibility,
  ArrowRight,
  HelpCircle,
  MessageCircle,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAirport } from "@/context/AirportContext";

// --- CATEGORIES (UNCHANGED) ---
const CATEGORIES = [
  {
    id: "car-park",
    label: "Car park",
    icon: <ParkingSquare className="w-5 h-5" />,
  },
  {
    id: "about",
    label: "About the airport",
    icon: <Info className="w-5 h-5" />,
  },
  {
    id: "baggage",
    label: "Checked-in baggage",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "security",
    label: "Security",
    icon: <ShieldAlert className="w-5 h-5" />,
  },
  {
    id: "facilities",
    label: "Facilities and services",
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    id: "flight-status",
    label: "Flight status",
    icon: <Plane className="w-5 h-5" />,
  },
  { id: "carry-on", label: "Carry-on", icon: <Backpack className="w-5 h-5" /> },
  { id: "customs", label: "Customs", icon: <Globe className="w-5 h-5" /> },
  {
    id: "assistance",
    label: "Special assistance",
    icon: <Accessibility className="w-5 h-5" />,
  },
];

// --- FALLBACK DATA (UNCHANGED) ---
const DEFAULT_FAQ_DATA: Record<string, { question: string; answer: string }[]> =
  {
    "car-park": [
      {
        question: "Is parking free for People of Determination?",
        answer:
          "Yes, parking is complimentary for People of Determination in all terminals. Please present your permit at the counter upon exit.",
      },
      {
        question: "Where do I park to drop-off or pick-up guests?",
        answer:
          "We have dedicated drop-off and pick-up zones in front of all terminals. Short-term parking is also available for longer goodbyes.",
      },
    ],
    about: [
      {
        question: "Where is the airport located?",
        answer: "The airport is located 5km from the city center.",
      },
    ],
    baggage: [
      { question: "Baggage allowance?", answer: "Check with your airline." },
    ],
    security: [{ question: "Liquids limit?", answer: "100ml per container." }],
  };

export default function FaqClient() {
  const airport = useAirport();
  const airportName = airport?.name || "the Airport";
  const [activeCategory, setActiveCategory] = useState("car-park");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory);
  const airportFaqs = airport?.faqs?.[activeCategory];
  const defaultFaqs = DEFAULT_FAQ_DATA[activeCategory];
  const questions = airportFaqs || defaultFaqs || [];

  return (
    <main className="bg-[#F3F4FE] min-h-screen pb-24 font-sans text-[#0C1A47]">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[45vh] bg-[#0C1A47] overflow-hidden">
        {/* Visual Fluff: Gradient Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -mr-64 -mt-64" />

        <div className="absolute inset-0 z-10 flex flex-col justify-center">
          <div className="mx-auto max-w-7xl w-full px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#FFD600] font-bold uppercase tracking-widest text-sm mb-4">
                <HelpCircleIcon className="w-5 h-5" />
                <span>Help Center</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Frequently Asked <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                  Questions
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. FLOATING HEADER INFO (Expanded) --- */}
      <div className="mx-auto max-w-7xl px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-4xl p-8 md:p-12 shadow-xl border border-white">
          <h2 className="text-2xl font-bold mb-4 text-[#0C1A47]">
            Operational Support & Guidelines
          </h2>
          <p className="text-[#0C1A47]/70 text-lg leading-relaxed max-w-4xl mb-6">
            Welcome to the centralized Frequently Asked Questions repository for{" "}
            {airportName}. This section is designed to address common inquiries
            regarding terminal operations, security protocols, and passenger
            services. Whether you are looking for details on baggage allowances
            or parking logistics, we have consolidated the most relevant data to
            assist you in planning your journey.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Info className="w-4 h-4" />
            <span>Cannot find your answer?</span>
            <Link
              href="/contact"
              className="text-[#0C1A47] font-bold border-b border-[#FFD600] inline-flex items-center gap-1 hover:text-[#FFD600] transition-colors"
            >
              Contact our Support Team <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* --- 3. INTRO: AIRPORT VS AIRLINE (New Section for Word Count) --- */}
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#0C1A47] mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#FFD600]" />
                Who handles what?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                A common source of confusion for travelers lies in the division
                of responsibilities between the Airport Authority and the
                Airlines. The Airport Authority manages the infrastructure,
                security screening, cleaning, and parking facilities. If your
                query relates to the terminal building itself, we are here to
                help.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                However, matters regarding flight tickets, baggage allowances,
                check-in procedures, and lost luggage are exclusively the domain
                of your airline and their appointed ground handling agents. For
                these issues, you will get the fastest resolution by contacting
                the carrier directly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0C1A47] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFD600]" />
                Arrival & Timing
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Time management is critical for a stress-free departure. We
                strongly advise all passengers to arrive at the terminal at
                least 2 hours before a domestic flight and 3 hours before an
                international departure. This buffer accounts for potential
                queues at check-in counters and security checkpoints during peak
                hours.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Please note that boarding gates strictly close 20 to 30 minutes
                before the scheduled takeoff time. Airlines cannot reopen
                flights for late passengers once the manifest is finalized.
              </p>
            </div>
          </div>
        </div>

        {/* --- 4. ACCORDION LAYOUT --- */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT: SIDEBAR NAVIGATION */}
          <aside className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-col gap-1 sticky top-32">
              <h3 className="text-xs font-black text-[#0C1A47]/40 uppercase tracking-[0.2em] mb-4 px-4">
                Categories
              </h3>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300
                    ${
                      activeCategory === cat.id
                        ? "bg-[#0C1A47] text-white shadow-lg shadow-blue-900/20 font-bold translate-x-2"
                        : "text-[#0C1A47]/60 hover:bg-white hover:text-[#0C1A47] font-semibold"
                    }
                  `}
                >
                  <span
                    className={`${
                      activeCategory === cat.id
                        ? "text-[#FFD600]"
                        : "text-[#0C1A47]/40"
                    }`}
                  >
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full bg-white text-[#0C1A47] font-bold px-6 py-5 rounded-2xl shadow-sm flex justify-between items-center border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#0C1A47]">{currentCat?.icon}</span>
                  {currentCat?.label}
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileMenuOpen && (
                <div className="absolute left-6 right-6 mt-2 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full px-6 py-4 text-left flex items-center gap-4 border-b border-gray-50 last:border-none
                        ${
                          activeCategory === cat.id
                            ? "bg-[#F3F4FE] font-bold text-[#0C1A47]"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {cat.icon}
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* RIGHT: ACCORDION CONTENT */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="mb-10">
              <h2 className="text-[#0C1A47] text-3xl md:text-4xl font-black tracking-tight">
                {currentCat?.label}
              </h2>
              <div className="h-1.5 w-20 bg-[#FFD600] mt-4 rounded-full" />
            </div>

            {questions.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border-none rounded-3xl px-8 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
                  >
                    <AccordionTrigger className="py-6 hover:no-underline text-[#0C1A47] font-bold text-lg md:text-xl text-left gap-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0C1A47]/70 text-lg leading-relaxed pb-8 border-t border-gray-50 mt-2">
                      <div>{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="bg-white/50 border-2 border-dashed border-gray-200 p-16 rounded-[2.5rem] text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Info className="text-gray-300" />
                </div>
                <p className="text-gray-500 font-medium">
                  No questions found for this category yet.
                </p>
              </div>
            )}

            {/* --- 5. DETAILED GUIDANCE FOOTER (New Section) --- */}
            <div className="mt-16 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#F3F4FE] p-3 rounded-full text-[#0C1A47]">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C1A47]">
                    Security Screening Protocols
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  All passengers departing from {airportName} must undergo
                  centralized security screening. Regulations regarding liquids
                  remain strict: containers must not exceed 100ml and must fit
                  within a single 1-liter transparent plastic bag. Exceptions
                  are made for baby food and essential medications, provided a
                  prescription is presented.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Laptops and large electronic devices must be removed from
                  carry-on bags and placed in separate trays. We recommend
                  wearing shoes that are easy to remove and avoiding belts with
                  large metal buckles to expedite your passage through the metal
                  detectors.
                </p>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#F3F4FE] p-3 rounded-full text-[#0C1A47]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0C1A47]">
                    Still have questions?
                  </h3>
                </div>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    If you cannot find the information you require in this FAQ
                    section, we recommend checking the specific policy pages for
                    your airline regarding baggage limits and check-in times.
                    Operational guidelines at {airportName} are subject to
                    change based on regulatory updates.
                  </p>
                  <p>
                    For immediate assistance regarding lost property or security
                    clearance, please approach the Information Desk located in
                    the main terminal hall. Our staff is available during flight
                    operations to provide guidance and resolve passenger queries
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Minimalist Help Icon for Hero
function HelpCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
