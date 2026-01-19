"use client";

import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import { ArrowLeft, Scale, AlertCircle, MessageSquare } from "lucide-react";

export default function TermsClient() {
  const airport = useAirport();
  const airportName = airport?.name || "The Airport";

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
            Terms of Use <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              for {airportName}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Agreement and conditions for using the {airportName} Guide provided
            by {/* SEO FIX: Kept as the PRIMARY strong tag */}
            <strong className="text-white">Nova Quantum LLC</strong>.
          </p>
        </div>
      </div>

      {/* --- TWO-COLUMN LAYOUT --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-16">
          {/* LEFT COLUMN: STICKY NAV */}
          <div className="hidden lg:block lg:col-span-1">
            <nav className="sticky top-32 space-y-4 border-l-2 border-gray-100 pl-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">
                Contents
              </span>
              <NavLink href="#acceptance" label="1. Acceptance" />
              <NavLink href="#purpose" label="2. Purpose" />
              <NavLink href="#license" label="3. Use License" />
              <NavLink href="#disclaimer" label="4. Disclaimer" />
              <NavLink href="#limitations" label="5. Limitations" />
              <NavLink href="#governing" label="8. Governing Law" />
            </nav>
          </div>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-20">
            {/* 1. Acceptance */}
            <section id="acceptance" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">01.</span> Acceptance of Terms
              </h2>
              <div className="text-lg leading-8 text-gray-600">
                <p>
                  By accessing and using this website, you agree to be bound by
                  these Terms of Use and all applicable laws and regulations. If
                  you do not agree with any of these terms, you are prohibited
                  from using or accessing this site.
                </p>
              </div>
            </section>

            {/* 2. Purpose */}
            <section id="purpose" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">02.</span> Purpose of the
                Website
              </h2>
              <div className="text-lg leading-8 text-gray-600 space-y-4">
                <p>
                  This website serves as an independent informational guide for
                  passengers using <strong>{airportName}</strong>. While we
                  strive to provide accurate data regarding airport services,
                  bus schedules, and terminal facilities, this site is{" "}
                  <strong>not</strong> the official website of the airport
                  operator.
                </p>
                <p>
                  All transportation services booked via this website are
                  provided by{" "}
                  {/* SEO FIX: Changed 'strong' to 'span' to avoid duplicate tag error */}
                  <span className="text-[#0C1A47] font-bold">
                    Nova Quantum LLC
                  </span>
                  .
                </p>
              </div>
            </section>

            {/* 3. Use License */}
            <section id="license" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">03.</span> Use License
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on this website for
                personal, non-commercial transitory viewing only. Under this
                license, you may not:
              </p>
              <ul className="space-y-4 border-l-4 border-[#0C1A47] pl-6">
                <li className="text-lg text-gray-700">
                  Modify or copy the materials.
                </li>
                <li className="text-lg text-gray-700">
                  Use the materials for any commercial purpose or public
                  display.
                </li>
                <li className="text-lg text-gray-700">
                  Attempt to decompile or reverse engineer any software
                  contained on the website.
                </li>
                <li className="text-lg text-gray-700">
                  Remove any copyright or other proprietary notations from the
                  materials.
                </li>
              </ul>
            </section>

            {/* 4. Disclaimer */}
            <section id="disclaimer" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">04.</span> Disclaimer
              </h2>
              <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-200 flex gap-6 items-start">
                <div className="p-3 bg-white rounded-xl text-[#0C1A47] shadow-sm shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    The materials on this website are provided on an 'as is'
                    basis. {/* SEO FIX: Changed 'strong' to 'span' */}
                    <span className="text-[#0C1A47] font-bold">
                      Nova Quantum LLC
                    </span>{" "}
                    makes no warranties, expressed or implied, and hereby
                    disclaims all other warranties including, without
                    limitation, implied warranties or conditions of
                    merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property.
                  </p>
                  <p>
                    Further, we do not warrant or make any representations
                    concerning the accuracy, likely results, or reliability of
                    the use of the materials on its website or otherwise
                    relating to such materials or on any sites linked to this
                    site.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Limitations */}
            <section id="limitations" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">05.</span> Limitations
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                In no event shall {/* SEO FIX: Changed 'strong' to 'span' */}
                <span className="text-[#0C1A47] font-bold">
                  Nova Quantum LLC
                </span>{" "}
                or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to
                business interruption) arising out of the use or inability to
                use the materials on the {airportName} Guide, even if an
                authorized representative has been notified orally or in writing
                of the possibility of such damage.
              </p>
            </section>

            {/* 6. Accuracy (Combined for brevity) */}
            <section id="accuracy" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">06.</span> Accuracy & Links
              </h2>
              <div className="text-lg leading-8 text-gray-600 space-y-6">
                <p>
                  The materials appearing on the website could include
                  technical, typographical, or photographic errors. We do not
                  warrant that any of the materials on the website are accurate,
                  complete, or current.
                </p>
                <p>
                  We have not reviewed all of the sites linked to this website
                  and are not responsible for the contents of any such linked
                  site. The inclusion of any link does not imply endorsement by
                  us. Use of any such linked website is at the user's own risk.
                </p>
              </div>
            </section>

            {/* 8. Governing Law */}
            <section id="governing" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">08.</span> Governing Law
              </h2>
              <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                <Scale className="w-6 h-6 text-[#0C1A47] shrink-0 mt-1" />
                <p className="text-lg text-gray-600">
                  These terms and conditions are governed by and construed in
                  accordance with the laws of <strong>Greece</strong>. You
                  irrevocably submit to the exclusive jurisdiction of the courts
                  in Athens, Greece.
                </p>
              </div>
            </section>

            {/* CONTACT CTA */}
            <div className="mt-16 pt-10 border-t border-gray-100">
              <div className="bg-[#0C1A47] p-8 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Have legal questions?
                  </h3>
                  <p className="text-white/60">
                    Contact our legal team regarding these terms.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#FFD600] text-[#0C1A47] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Contact Legal Team
                </Link>
              </div>
            </div>
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
