"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  Phone,
  Car,
  ArrowRight,
  Plane,
  Mail,
  HelpCircle,
  Info,
  MapPin,
  Building2,
  AlertTriangle,
} from "lucide-react";

// --- MAP & CONTACT DATA (UNCHANGED) ---
const DATA: Record<
  string,
  {
    regionName: string;
    callCenter: string;
    policePhone?: string;
    mapEmbed: string;
  }
> = {
  ATH: {
    regionName: "Athens",
    callCenter: "+30 210 3530000",
    policePhone: "+30 210 3536919",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.4673546777!2d23.944467376518!3d37.936358971944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1901ad9cb76dd%3A0x666b9623e2c34e8a!2sAthens%20International%20Airport%20Eleftherios%20Venizelos!5e0!3m2!1sen!2sgr!4v1709923456789!5m2!1sen!2sgr",
  },
  JMK: {
    regionName: "Mykonos",
    callCenter: "+30 22890 79000",
    policePhone: "+30 22890 22482",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.277353976!2d25.3453!3d37.4351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2bfbd23c33375%3A0x7057f9202302392!2sMykonos%20International%20Airport!5e0!3m2!1sen!2sgr!4v1709923456789!5m2!1sen!2sgr",
  },
  JTR: {
    regionName: "Santorini",
    callCenter: "+30 22860 28402",
    policePhone: "+30 22860 28451",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.789!2d25.478!3d36.399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cdd996d92555%3A0x334571d79678393e!2sSantorini%20(Thira)%20International%20Airport!5e0!3m2!1sen!2sgr!4v1709923456789!5m2!1sen!2sgr",
  },
  // Default fallback
  DEFAULT: {
    regionName: "the area",
    callCenter: "+30 210 3530000",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.4673546777!2d23.944467376518!3d37.936358971944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1901ad9cb76dd%3A0x666b9623e2c34e8a!2sAthens%20International%20Airport%20Eleftherios%20Venizelos!5e0!3m2!1sen!2sgr!4v1709923456789!5m2!1sen!2sgr",
  },
};

export default function ContactClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const info = DATA[code] || DATA["DEFAULT"];

  return (
    <main className="min-h-screen bg-[#F3F4FE]">
      {/* 1. HERO HEADER */}
      <div className="bg-[#0C1A47] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 text-[#FFD600] font-bold uppercase tracking-wider text-sm">
            <Info className="w-5 h-5" />
            <span>Support & Directions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Contact — <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              {airport?.name || "Airport"} ({code})
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Need assistance or directions? Find all essential {info.regionName}{" "}
            Airport contact information and location data below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        {/* --- INTRO: WHO TO CALL (New Section for Word Count) --- */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg mb-16 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#F3F4FE] rounded-xl text-[#0C1A47]">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0C1A47]">
              Communication Channels
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3">
                Airport Authority vs. Airlines
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                It is important to direct your query to the correct department
                to ensure a swift resolution. The contact numbers listed on this
                page connect you to the central Airport Authority call center.
                This team handles general inquiries regarding terminal
                facilities, parking, accessibility services, and security
                protocols.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                However, the Airport Authority does not have access to airline
                reservation systems. If your query relates to flight
                cancellations, rebooking, baggage allowances, or specific
                check-in requirements, you must contact your airline directly
                using the directory provided in our Airlines section.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3">
                Emergency & Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                For matters concerning personal safety, theft, or lost
                identification documents within the terminal, the Airport Police
                is the primary point of contact. Their office is operational
                24/7. For medical emergencies, first aid stations are available
                on-site, but for serious incidents, please dial the European
                emergency number (112) or alert the nearest airport staff member
                immediately.
              </p>
            </div>
          </div>
        </div>

        {/* TOP ROW: MAP & MAIN CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Map Section (Takes 2 columns on desktop) */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-white relative h-[500px]">
            <iframe
              src={info.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Airport Location"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Transfer CTA (Deep Night Gradient) */}
          <div className="bg-linear-to-br from-[#1B3168] to-[#12224A] rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl" />

            <div className="relative z-10">
              <div className="bg-white/10 p-4 rounded-2xl text-[#FFD600] w-fit mb-6">
                <Car className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Request a Ride</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                The most reliable way to get to or from the Airport. Pre-book
                your transfer with professional drivers.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <Link
                href="/transport/taxi"
                className="flex items-center justify-between bg-[#FFD600] text-[#0C1A47] px-6 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all"
              >
                <span>Book a Transfer</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card: Official Airport Info */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#F3F4FE] rounded-xl flex items-center justify-center text-[#0C1A47] mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0C1A47] mb-4">
              Airport Authorities
            </h3>
            <div className="space-y-6">
              <div className="pb-4 border-b border-gray-50">
                <p className="text-base font-medium text-gray-500 mb-1">
                  General Call Center
                </p>
                <a
                  href={`tel:${info.callCenter}`}
                  className="text-xl font-bold text-[#0C1A47] hover:text-blue-600 transition-colors block"
                >
                  {info.callCenter}
                </a>
              </div>
              {info.policePhone && (
                <div>
                  <p className="text-base font-medium text-gray-500 mb-1">
                    Airport Police Station
                  </p>
                  <a
                    href={`tel:${info.policePhone}`}
                    className="text-xl font-bold text-[#0C1A47] hover:text-blue-600 transition-colors block"
                  >
                    {info.policePhone}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Card: Lost & Found */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FFF4E5] rounded-xl flex items-center justify-center text-[#B35F00] mb-6">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
              Lost Property
            </h3>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed mb-6">
              Misplaced an item in the terminal or on your flight? View our
              dedicated guide for ground handler contacts.
            </p>
            <Link
              href="/information/lost-and-found"
              className="inline-flex items-center gap-2 text-[#0C1A47] font-bold hover:gap-3 transition-all text-lg"
            >
              Contact Lost & Found{" "}
              <ArrowRight className="w-4 h-4 text-[#FFD600]" />
            </Link>
          </div>

          {/* Card: Corporate Info */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#EBEEF8] rounded-xl flex items-center justify-center text-[#0C1A47] mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
              Administrative Inquiries
            </h3>
            <p className="text-[#0C1A47]/70 text-lg leading-relaxed mb-6">
              For questions regarding this informational guide, data protection,
              or website operations, please refer to our official policies.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-[#0C1A47] font-bold hover:gap-3 transition-all text-lg"
            >
              Privacy & Legal <ArrowRight className="w-4 h-4 text-[#FFD600]" />
            </Link>
          </div>
        </div>

        {/* --- FOOTER: LOCATION CONTEXT (New Section) --- */}
        <div className="mt-16 bg-[#F8F9FC] rounded-[2.5rem] p-10 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white rounded-xl text-[#0C1A47] shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0C1A47]">
              Location & Accessibility
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3">
                Strategic Position
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The airport is strategically located to serve the{" "}
                {info.regionName} region efficiently. Positioned near major
                highway arteries, it provides relatively quick access to the
                city center and key tourist resorts. The surrounding road
                network is generally well-signposted, making navigation
                straightforward for those renting cars or using private
                transfers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0C1A47] mb-3">
                Traffic Considerations
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                While the airport is accessible, travelers should be aware that
                traffic congestion can be significant during peak summer months,
                particularly on the main approach roads. We strongly advise
                allowing extra travel time when heading to the airport for a
                departure, especially during morning and evening rush hours or
                on weekends when turnover is high.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
