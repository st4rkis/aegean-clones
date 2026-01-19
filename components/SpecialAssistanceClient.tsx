"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Accessibility,
  Ear,
  Eye,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  Plane,
  ShieldCheck,
  Info,
} from "lucide-react";

export default function SpecialAssistanceClient() {
  const airport = useAirport();
  const airportName = airport?.name || "the Airport";
  const code = airport?.key?.toUpperCase();

  // --- CLIENT-SIDE SEO TWEAK ---
  useEffect(() => {
    if (airport?.name) {
      document.title = `Special Assistance | ${airport.name} Accessibility Services`;
    }
  }, [airport]);

  const GUIDELINES = [
    {
      title: "Notify in Advance",
      description:
        "Please notify your airline or travel agent at least 48 hours before your flight to ensure assistance is ready.",
      icon: Clock,
    },
    {
      title: "Meeting Points",
      description:
        "Designated PRM (Passengers with Reduced Mobility) meeting points are located at terminal entrances and check-in areas.",
      icon: MapPin,
    },
    {
      title: "Priority Boarding",
      description:
        "Passengers requiring assistance usually board first and disembark last to ensure safety and comfort.",
      icon: CheckCircle2,
    },
  ];

  const SERVICES = [
    {
      title: "Mobility Assistance",
      description:
        "Wheelchair services from check-in to the aircraft seat. Ramps and lifts available for boarding.",
      icon: Accessibility,
    },
    {
      title: "Visual Impairment",
      description:
        "Escort services through security and passport control. Guide dogs are welcome (subject to airline rules).",
      icon: Eye,
    },
    {
      title: "Hearing Impairment",
      description:
        "Visual information screens are available throughout the terminal. Staff are trained to assist.",
      icon: Ear,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- HERO SECTION --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 border-b border-white/10 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <Link
            href="/information"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFD600] font-bold mb-8 transition-colors uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Information
          </Link>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Special <span className="text-[#FFD600]">Assistance</span> at <br />
            {airportName}
            {code && (
              <span className="text-white/40 ml-2 md:ml-4 text-3xl md:text-5xl align-middle font-medium">
                ({code})
              </span>
            )}
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            {airportName} is committed to providing a seamless experience for
            passengers with disabilities and reduced mobility (PRM).
          </h2>
        </div>
      </div>

      {/* --- INTRO: RIGHTS & REGULATIONS (New Section) --- */}
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="bg-[#F8F9FC] rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white rounded-xl text-[#0C1A47] shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0C1A47]">
              Understanding Your Rights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-gray-600 text-lg leading-relaxed">
              Under European Regulation (EC) No 1107/2006, the rights of
              disabled persons and persons with reduced mobility traveling by
              air are strictly protected. This legislation ensures that
              assistance is provided free of charge at all EU airports. Whether
              your mobility is restricted due to disability, age, or a temporary
              injury, you are entitled to support from the moment you arrive at
              the airport curbside until you are seated in the aircraft.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              It is important to note that while the airport authority manages
              the infrastructure (such as ramps and help points), the actual
              assistance service is typically contracted to ground handling
              agents. Therefore, pre-notification is critical to allow these
              teams to allocate the necessary staff and equipment for your
              specific time slot.
            </p>
          </div>
        </div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* SECTION 1: IMPORTANT GUIDELINES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <AlertCircle className="text-[#FFD600]" />
            Important Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GUIDELINES.map((item, idx) => (
              <div
                key={idx}
                className="
                  group p-8 rounded-[2.5rem] bg-[#F8F9FC] border border-gray-100
                  hover:bg-white hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#0C1A47]/5 text-[#0C1A47] group-hover:bg-[#0C1A47] group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: IATA CODES (New Educational Section) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-2 bg-[#0C1A47] rounded-lg text-white">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Requesting the Right Help</h2>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When booking your flight, airlines use specific IATA codes to
              define the level of assistance required. Selecting the correct
              code ensures the ground crew arrives with the appropriate
              equipment.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="bg-[#E5D5F5] text-[#0C1A47] px-4 py-1 rounded-full font-bold w-fit text-sm">
                  WCHR (Ramp)
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  For passengers who can ascend/descend steps and walk to their
                  seat but require a wheelchair for long distances to/from the
                  terminal.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-[#D5E5F5] text-[#0C1A47] px-4 py-1 rounded-full font-bold w-fit text-sm">
                  WCHS (Steps)
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  For passengers who cannot ascend/descend steps but are able to
                  slowly walk to their own seat inside the cabin. An Ambulift
                  (high-loader) is usually required.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-[#F5D5D5] text-[#0C1A47] px-4 py-1 rounded-full font-bold w-fit text-sm">
                  WCHC (Cabin)
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  For passengers who are completely immobile. Assistance is
                  required to the seat, often using an onboard aisle chair.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: SERVICES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Assistance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="
                  group flex flex-col justify-between p-10 
                  bg-white border border-gray-200 rounded-[2.5rem] 
                  shadow-sm hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#F3F4FE] text-[#0C1A47] group-hover:bg-[#0C1A47] group-hover:text-white transition-colors">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: THE JOURNEY (New Instructional Section) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#0C1A47]">
            The Assistance Journey
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 p-6 bg-[#F8F9FC] rounded-3xl border border-gray-100 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#FFD600] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                  1. Arrival & Call Points
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon arriving at the airport, look for the designated Help
                  Points located at the curbside drop-off zones and within the
                  car parks. Pressing the button connects you to the PRM
                  assistance desk. State your location, and a staff member will
                  be dispatched to escort you to the terminal.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-[#F8F9FC] rounded-3xl border border-gray-100 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#FFD600] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                  2. Security Screening
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Passengers with reduced mobility, pacemakers, or cochlear
                  implants can request a private screening or a manual pat-down
                  instead of passing through the metal detector. Mobility aids
                  such as wheelchairs and walkers will also be security
                  screened.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-[#F8F9FC] rounded-3xl border border-gray-100 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#FFD600] shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                  3. Boarding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Assistance staff will remain with you at the gate.
                  Pre-boarding is standard practice to allow you ample time to
                  settle in. If the aircraft is parked remotely (on the tarmac),
                  a specialized Ambulift vehicle will be used to raise you
                  safely to the aircraft door level, avoiding the stairs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: CONTACT CTA */}
        <div className="bg-[#0C1A47] rounded-[2.5rem] p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need to book assistance?
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Assistance services are free of charge but must be booked through
              your airline. Please contact your carrier directly to arrange
              support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/airlines"
                className="
                  inline-flex items-center gap-2 bg-[#FFD600] text-[#0C1A47] 
                  font-bold px-8 py-4 rounded-full 
                  hover:bg-white transition-colors duration-300
                "
              >
                Find Airline Contact <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2 bg-white/10 text-white 
                  font-bold px-8 py-4 rounded-full border border-white/20
                  hover:bg-white hover:text-[#0C1A47] transition-all duration-300
                "
              >
                <Phone className="w-5 h-5" />
                Contact Airport Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
