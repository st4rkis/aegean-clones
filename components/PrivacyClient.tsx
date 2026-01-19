"use client";

import React from "react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  ArrowLeft,
  Building2,
  Cookie,
  ShieldCheck,
  Server,
  Globe,
  Lock,
  MessageSquare,
} from "lucide-react";

export default function PrivacyClient() {
  const airport = useAirport();
  const airportName = airport?.name || "The Airport";
  const key = airport?.key || "DEFAULT";
  const regionName = getNameFromKey(key);

  return (
    <main className="min-h-screen bg-white font-sans text-[#0C1A47]">
      {/* --- WIDE HERO SECTION --- */}
      <div className="w-full bg-[#0C1A47] text-white pt-32 pb-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFD600] font-bold mb-8 transition-colors uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Privacy Policy <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              for {airportName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Transparency is core to our values at{" "}
            {/* SEO FIX: Kept this as the ONLY strong tag for the entity name */}
            <strong className="text-white">Nova Quantum LLC</strong>. Here is
            how we handle your data at {airportName}.
          </p>
        </div>
      </div>

      {/* --- TWO-COLUMN LAYOUT (Desktop) --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-16">
          {/* LEFT COLUMN: STICKY NAV */}
          <div className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-32 space-y-4 border-l-2 border-gray-100 pl-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">
                Contents
              </span>
              <NavLink href="#intro" label="1. Introduction" />
              <NavLink href="#controller" label="2. Data Controller" />
              <NavLink href="#collection" label="3. What We Collect" />
              <NavLink href="#purpose" label="4. Purpose of Use" />
              <NavLink href="#sharing" label="5. Data Sharing" />
              <NavLink href="#rights" label="6. Your Rights" />
              <NavLink href="#cookies" label="7. Cookie Policy" />
            </nav>
          </div>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-24">
            {/* 1. Introduction */}
            <section id="intro" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">01.</span> Introduction
              </h2>
              <div className="text-lg leading-8 text-gray-600 space-y-6">
                <p>
                  Welcome to the {airportName} Transport Guide. This platform is
                  operated by
                  {/* SEO FIX: Changed 'strong' to 'span' to avoid duplicate tag error */}
                  <span className="text-[#0C1A47] font-medium">
                    {" "}
                    Nova Quantum LLC
                  </span>{" "}
                  ("we", "us"). We take your privacy seriously and are committed
                  to protecting your personal data in strict compliance with the{" "}
                  <span className="text-[#0C1A47] font-medium border-b-2 border-[#FFD600]/30">
                    GDPR (EU 2016/679)
                  </span>
                  .
                </p>
                <p>
                  This document outlines exactly how we handle your information
                  when you use our guide to navigate {regionName} or book
                  transport services.
                </p>
              </div>
            </section>

            {/* 2. Data Controller */}
            <section id="controller" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-[#FFD600]">02.</span> Data Controller
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#0C1A47] rounded-xl text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0C1A47]">
                        Nova Quantum LLC
                      </h3>
                      <p className="text-sm text-gray-500">Registered Entity</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-1">Athens, Greece</p>
                  <p className="text-gray-600">VAT: EL123456789</p>
                </div>

                <div className="p-8 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#0C1A47] rounded-xl text-white">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0C1A47]">
                        Data Protection Officer
                      </h3>
                      <p className="text-sm text-gray-500">
                        Contact for Privacy
                      </p>
                    </div>
                  </div>
                  {/* Link to Contact Page */}
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-blue-600 hover:text-[#0C1A47] transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Contact Data Protection Team
                  </Link>
                </div>
              </div>
            </section>

            {/* 3. Collection */}
            <section id="collection" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-[#FFD600]">03.</span> Information We
                Collect
              </h2>
              <div className="space-y-12">
                <DataPoint
                  title="Booking Information"
                  desc={`When you book a transfer from ${airportName}, we process your Name, Email, Phone Number, Flight Details, and Drop-off Address.`}
                />
                <DataPoint
                  title="Technical Data"
                  desc="Your IP address, browser version, and device type. This is automatically collected to ensure the site functions correctly."
                />
                <DataPoint
                  title="Usage Analytics"
                  desc="Anonymous data regarding which pages you visit. This helps us understand what information is most valuable to travelers."
                />
              </div>
            </section>

            {/* 4. Purpose */}
            <section id="purpose" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-[#FFD600]">04.</span> Why We Process It
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <PurposeBox
                  icon={<Server className="w-6 h-6" />}
                  title="Service Delivery"
                  desc="To physically execute your transport request."
                />
                <PurposeBox
                  icon={<Lock className="w-6 h-6" />}
                  title="Security"
                  desc="To prevent fraud and secure our booking platform."
                />
                <PurposeBox
                  icon={<Globe className="w-6 h-6" />}
                  title="Legal Compliance"
                  desc="To comply with Greek tax & transport regulations."
                />
              </div>
            </section>

            {/* 5. Sharing */}
            <section id="sharing" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">05.</span> Data Sharing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                <strong>We never sell your personal data.</strong> Information
                is only shared with:
              </p>
              <ul className="space-y-4 border-l-4 border-[#0C1A47] pl-6">
                <li className="text-lg text-gray-700">
                  <strong className="text-[#0C1A47]">Drivers:</strong> To
                  execute your ride (Name, Location).
                </li>
                <li className="text-lg text-gray-700">
                  <strong className="text-[#0C1A47]">Cloud Providers:</strong>{" "}
                  Vercel & AWS for secure hosting.
                </li>
                <li className="text-lg text-gray-700">
                  <strong className="text-[#0C1A47]">
                    Payment Processors:
                  </strong>{" "}
                  Stripe for secure transactions.
                </li>
              </ul>
            </section>

            {/* 6. Rights */}
            <section id="rights" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">06.</span> Your Rights
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                You have full control over your data. Under GDPR, you have the
                right to request:
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-lg font-medium text-gray-700">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD600] rounded-full" /> Access
                  to your data
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD600] rounded-full" />{" "}
                  Correction of errors
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD600] rounded-full" />{" "}
                  Deletion (Right to be Forgotten)
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD600] rounded-full" /> Data
                  Portability
                </span>
              </div>
              <div className="mt-10 p-8 bg-[#0C1A47] text-white rounded-xl">
                <p className="text-lg font-light mb-6">
                  To exercise any of these rights, simply contact our team. We
                  typically respond within 30 days.
                </p>
                <Link
                  href="/contact"
                  className="text-[#FFD600] font-bold text-lg hover:underline decoration-2 underline-offset-4"
                >
                  Contact Data Officer &rarr;
                </Link>
              </div>
            </section>

            {/* 7. Cookies Policy */}
            <section id="cookies" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#FFD600] rounded-xl text-[#0C1A47]">
                  <Cookie className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">
                  <span className="text-[#FFD600] mr-3">07.</span> Cookie Policy
                </h2>
              </div>

              <div className="text-lg leading-8 text-gray-600 space-y-8">
                <p>
                  Nova Quantum LLC uses cookies to enhance your experience on
                  the {airportName} Guide. A cookie is a small text file stored
                  on your device that helps us remember your preferences.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                      Essential Cookies
                    </h3>
                    <p>
                      Strictly necessary for the website to function (e.g.,
                      keeping your booking session active). These cannot be
                      disabled.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                      Analytics Cookies
                    </h3>
                    <p>
                      Help us understand how visitors interact with the site
                      (e.g., Google Analytics). We only set these with your
                      explicit consent.
                    </p>
                  </div>
                </div>

                <p className="text-sm bg-gray-50 p-4 rounded-lg">
                  You can control and manage cookies in various ways. You can
                  choose to disable cookies entirely through your browser
                  settings, though this may affect the functionality of the
                  booking system.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block py-2 text-sm text-gray-500 hover:text-[#0C1A47] hover:font-bold hover:border-l-4 hover:border-[#FFD600] hover:pl-3 transition-all border-l-4 border-transparent"
    >
      {label}
    </a>
  );
}

function DataPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-gray-100 pl-6 hover:border-[#0C1A47] transition-colors duration-300">
      <h3 className="text-xl font-bold text-[#0C1A47] mb-2">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function PurposeBox({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="text-[#0C1A47] mb-4">{icon}</div>
      <h3 className="font-bold text-[#0C1A47] text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

// Helper to get nice names from codes
function getNameFromKey(key: string) {
  const map: Record<string, string> = {
    JMK: "Mykonos",
    ATH: "Athens",
    JTR: "Santorini",
    HER: "Heraklion",
    CFU: "Corfu",
    RHO: "Rhodes",
    SKG: "Thessaloniki",
    ZTH: "Zakynthos",
    KGS: "Kos",
    PAS: "Paros",
    JNX: "Naxos",
    MLO: "Milos",
    EFL: "Kefalonia",
    BJV: "Bodrum",
  };
  return map[key.toUpperCase()] || "the region";
}
