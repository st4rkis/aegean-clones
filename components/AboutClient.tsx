"use client";

import {
  Users,
  TrendingUp,
  Clock,
  Building2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Globe,
  Briefcase,
  History,
  HardHat,
  Info,
} from "lucide-react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";

// --- THE TRUTH DATABASE (UNCHANGED) ---
const DATA_CONFIG: Record<
  string,
  {
    tier: string;
    role: string;
    hours: string;
    status: string;
    operator: string;
    intlPercent: number;
    domPercent: number;
  }
> = {
  // --- THE BIG ONE ---
  ATH: {
    tier: "Major International Gateway",
    role: "National Hub",
    hours: "24-Hour Operation",
    status: "Operational Year-Round",
    operator: "AIA S.A.",
    intlPercent: 70,
    domPercent: 30,
  },
  // --- FRAPORT GREECE AIRPORTS ---
  JMK: {
    tier: "High-Volume Seasonal Hub",
    role: "Premium Leisure",
    hours: "Seasonal Schedule",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 75,
    domPercent: 25,
  },
  JTR: {
    tier: "High-Volume Seasonal Hub",
    role: "Premium Leisure",
    hours: "Seasonal Schedule",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 60,
    domPercent: 40,
  },
  SKG: {
    tier: "International Hub",
    role: "Commercial & Leisure",
    hours: "24-Hour Operation",
    status: "Operational Year-Round",
    operator: "Fraport Greece",
    intlPercent: 65,
    domPercent: 35,
  },
  CFU: {
    tier: "Major Charter Hub",
    role: "Summer Leisure",
    hours: "Seasonal Schedule",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 90,
    domPercent: 10,
  },
  RHO: {
    tier: "Major Charter Hub",
    role: "Summer Leisure",
    hours: "24-Hour Operation",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 85,
    domPercent: 15,
  },
  ZTH: {
    tier: "Regional Charter Hub",
    role: "Summer Leisure",
    hours: "Restricted (Nature Protection)",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 95,
    domPercent: 5,
  },
  KGS: {
    tier: "Regional Charter Hub",
    role: "Summer Leisure",
    hours: "Seasonal Schedule",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 80,
    domPercent: 20,
  },
  EFL: {
    tier: "Regional Hub",
    role: "Summer Leisure",
    hours: "Seasonal Schedule",
    status: "Summer Peak Focus",
    operator: "Fraport Greece",
    intlPercent: 70,
    domPercent: 30,
  },
  // --- STATE RUN (HCAA) ---
  HER: {
    tier: "Major International Hub",
    role: "Strategic Keypoint",
    hours: "24-Hour Operation",
    status: "Operational Year-Round",
    operator: "HCAA / State Authority",
    intlPercent: 80,
    domPercent: 20,
  },
  PAS: {
    tier: "National Hub",
    role: "Domestic Connector",
    hours: "Daylight Operations",
    status: "Growing Capacity",
    operator: "HCAA / State Authority",
    intlPercent: 20,
    domPercent: 80,
  },
  JNX: {
    tier: "National Hub",
    role: "Domestic Connector",
    hours: "Daylight Operations",
    status: "Domestic Focus",
    operator: "HCAA / State Authority",
    intlPercent: 5,
    domPercent: 95,
  },
  MLO: {
    tier: "National Island Hub",
    role: "Domestic Connector",
    hours: "Daylight Operations",
    status: "Domestic Focus",
    operator: "HCAA / State Authority",
    intlPercent: 5,
    domPercent: 95,
  },
  // --- TURKEY ---
  BJV: {
    tier: "International Gateway",
    role: "Tourism & Commerce",
    hours: "24-Hour Operation",
    status: "Operational Year-Round",
    operator: "TAV Airports",
    intlPercent: 50,
    domPercent: 50,
  },
};

export default function AboutClient() {
  const airport = useAirport();
  const code = airport?.key?.toUpperCase() || "DEFAULT";
  const name = airport?.name || "the Airport";

  // Safe Fallback
  const stats = DATA_CONFIG[code] || {
    tier: "Regional Airport",
    role: "Transport Hub",
    hours: "Scheduled Flights Only",
    status: "Operational",
    operator: "Civil Aviation Authority",
    intlPercent: 50,
    domPercent: 50,
  };

  return (
    <main className="bg-white min-h-screen font-sans text-[#0C1A47]">
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0C1A47] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 text-[#FFD600] font-bold uppercase tracking-widest text-xs">
            <Info className="w-4 h-4" />
            <span>General Information</span>
          </div>

          {/* SEO FIX: H1 Matches common Page Title "About [Airport Name]" directly */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            About <br />
            <span className="text-white/40">
              {name} ({code})
            </span>
          </h1>

          {/* SEO FIX: Subtitle includes keywords like "History" and "Operations" */}
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12 font-normal">
            A comprehensive overview of the airport's history, current
            operations, and strategic role in {airport?.city || "the region"}.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="text-white/50 uppercase text-xs font-black tracking-widest mb-4">
                Classification
              </p>
              <p className="text-3xl md:text-4xl font-bold leading-tight">
                {stats.tier}
              </p>
              <p className="text-[#FFD600] mt-2 font-medium">
                Operational Scale
              </p>
            </div>
            <div>
              <p className="text-white/50 uppercase text-xs font-black tracking-widest mb-4">
                Primary Function
              </p>
              <p className="text-3xl md:text-4xl font-bold leading-tight">
                {stats.role}
              </p>
              <p className="text-white/40 mt-2 font-medium">Strategic Role</p>
            </div>
            <div>
              <p className="text-white/50 uppercase text-xs font-black tracking-widest mb-4">
                Management
              </p>
              <p className="text-3xl md:text-4xl font-bold leading-tight">
                {stats.operator}
              </p>
              <p className="text-white/40 mt-2 font-medium">Operator</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OPERATING HOURS BAR --- */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#0C1A47] rounded-full flex items-center justify-center text-[#FFD600]">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                Operating Schedule
              </h3>
              <p className="text-2xl font-bold text-[#0C1A47]">{stats.hours}</p>
            </div>
          </div>
          <div className="bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-bold text-[#0C1A47] flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {stats.status}
            </p>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL MISSION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-8">
              Driving connectivity across the Aegean.
            </h2>
            <div className="h-2 w-20 bg-[#FFD600] mb-8" />
            <p className="text-gray-500 text-lg">
              Our platform serves as the central digital interface for
              travelers, stakeholders, and industry partners operating within
              the airport ecosystem.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light space-y-8">
              <p>
                {name} stands as a critical junction for regional tourism and
                international commerce. Managed by {stats.operator}, the
                facility focuses on maximizing passenger throughput while
                ensuring a seamless and compliant terminal experience. The
                airport operates under strict regulatory frameworks to guarantee
                safety and efficiency for all scheduled commercial aviation.
              </p>

              <p>
                This digital platform provides deep operational transparency,
                offering travelers and stakeholders direct access to real-time
                data on capacity, logistics, and essential services for{" "}
                {airport?.city}. From live flight telemetry to ground transport
                coordination, our mission is to digitize the passenger journey
                and reduce friction at every touchpoint.
              </p>

              <p>
                As the region continues to experience fluctuations in visitor
                numbers, the infrastructure at {name} adapts to meet evolving
                demands. We are committed to providing accurate,
                up-to-the-minute information regarding facility upgrades,
                seasonal schedule changes, and regulatory updates that impact
                your travel plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC DATA --- */}
      <section className="bg-white pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F8F9FC] rounded-[3rem] p-10 lg:p-20 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-[#0C1A47]">
                  Traffic Profile
                </h3>
                <p className="text-gray-500 text-lg">
                  Market segmentation by flight volume.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  Data Source
                </p>
                <p className="text-sm font-medium">Aggregated Flight Data</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-lg font-bold">
                      International Segment
                    </span>
                    <span className="text-4xl font-black text-[#0C1A47]">
                      {stats.intlPercent}%
                    </span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0C1A47] rounded-full"
                      style={{ width: `${stats.intlPercent}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-lg font-bold">
                      Domestic Operations
                    </span>
                    <span className="text-4xl font-black text-[#0C1A47]">
                      {stats.domPercent}%
                    </span>
                  </div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-400 rounded-full"
                      style={{ width: `${stats.domPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <TrendingUp className="text-[#FFD600]" />
                  <h4 className="font-bold text-[#0C1A47]">Scale</h4>
                  <p className="text-sm text-gray-500">
                    High-efficiency processing for {stats.tier}.
                  </p>
                </div>
                <div className="space-y-2">
                  <Users className="text-[#FFD600]" />
                  <h4 className="font-bold text-[#0C1A47]">Capacity</h4>
                  <p className="text-sm text-gray-500">
                    Terminal architecture optimized for peak surges.
                  </p>
                </div>
                <div className="space-y-2">
                  <Building2 className="text-[#FFD600]" />
                  <h4 className="font-bold text-[#0C1A47]">Infrastructure</h4>
                  <p className="text-sm text-gray-500">
                    Continuous investment cycles for modernization.
                  </p>
                </div>
                <div className="space-y-2">
                  <Calendar className="text-[#FFD600]" />
                  <h4 className="font-bold text-[#0C1A47]">Resilience</h4>
                  <p className="text-sm text-gray-500">
                    Sustained operational agility year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HISTORY & DEVELOPMENT --- */}
      <section className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
                <History className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Historical Context
                </h3>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
                Evolution of the Hub
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Originally established to serve the rudimentary needs of island
                connectivity, the airport has undergone significant
                transformation over the past decades. From a simple airstrip
                supporting light propeller aircraft, it has evolved into a fully
                modern facility capable of handling commercial jet traffic. This
                evolution was driven by the surge in global tourism demand,
                necessitating substantial expansion of both the runway and the
                terminal building.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Key milestones in this development timeline include the
                extension of the apron to accommodate more aircraft stands, the
                installation of advanced navigational aids for night operations,
                and the recent refurbishment of the passenger departure halls.
                These upgrades have solidified the airport's position as a
                reliable gateway, even during the peak demands of the summer
                season.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
                <HardHat className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Infrastructure Projects
                </h3>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-[#0C1A47]">
                Modernization Roadmap
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Current infrastructure projects focus on optimizing the
                passenger experience and reducing the environmental footprint.
                The management authority is implementing a comprehensive
                modernization plan that includes the digitization of check-in
                counters and the upgrading of baggage handling systems to
                current international standards. These technical improvements
                are designed to increase hourly throughput capacity, reducing
                wait times at security and passport control.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Furthermore, sustainability initiatives are being integrated
                into the operational framework. Solar energy utilization and
                water recycling systems are part of a broader strategy to align
                the facility with international green aviation targets, ensuring
                that growth in passenger numbers does not come at the expense of
                the local environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- REGIONAL IMPACT --- */}
      <section className="bg-[#0C1A47] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
                <Globe className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Regional Impact
                </h3>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Connecting the Archipelago
              </h2>
              <p className="text-blue-200 leading-relaxed mb-6">
                The strategic location of {name} allows it to function as a
                vital economic engine for the surrounding region. By
                facilitating direct air links to major European hubs, the
                airport supports the local hospitality sector and enables
                year-round commerce. The facility is fully integrated into the
                national aviation network, serving as a primary entry point for
                international visitors and a reliable transport node for island
                residents.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#FFD600]">
                <Briefcase className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-sm">
                  Operational Excellence
                </h3>
              </div>
              <h2 className="text-3xl font-bold mb-6">Future-Ready Aviation</h2>
              <p className="text-blue-200 leading-relaxed mb-6">
                Looking ahead, {stats.operator} continues to invest in
                modernizing terminal capabilities. Focus areas include the
                implementation of biometric processing to speed up passenger
                flows, upgrades to runway lighting for extended operational
                hours, and the expansion of retail zones to enhance the
                commercial offering. These initiatives ensure that {code}{" "}
                remains competitive in the Mediterranean aviation market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0C1A47] mb-8">
            Direct Access
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#FFD600] text-[#0C1A47] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 border border-[#FFD600] hover:border-gray-200 transition-all flex items-center gap-2"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
