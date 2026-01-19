"use client";

import React from "react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";
import {
  ArrowLeft,
  Accessibility,
  Eye,
  Monitor,
  MessageSquare,
  Keyboard,
  MousePointer2,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Layers,
} from "lucide-react";

export default function AccessibilityClient() {
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

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Ensuring digital inclusion for all travelers at {airportName}. Our
            commitment to a barrier-free experience.
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
              <NavLink href="#commitment" label="1. Our Commitment" />
              <NavLink href="#standards" label="2. Conformance Status" />
              <NavLink href="#technologies" label="3. Technologies Used" />
              <NavLink href="#features" label="4. Digital Features" />
              <NavLink href="#physical" label="5. Terminal Access" />
              <NavLink href="#feedback" label="6. Feedback & Support" />
            </nav>
          </div>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="lg:col-span-3 space-y-24">
            {/* 1. Commitment */}
            <section id="commitment" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">01.</span> Our Commitment
              </h2>
              <div className="text-lg leading-8 text-gray-600 space-y-6">
                <p>
                  At <strong>Nova Quantum LLC</strong>, we believe that the
                  internet should be available and accessible to anyone,
                  regardless of circumstance and ability. We are committed to
                  ensuring digital accessibility for people with disabilities by
                  continually improving the user experience for everyone and
                  applying the relevant accessibility standards to our digital
                  platforms.
                </p>
                <p>
                  This commitment extends beyond mere compliance; it reflects
                  our core value of inclusivity. Whether you are using screen
                  reader technology, voice recognition software, or simply
                  require higher contrast settings due to visual impairments,
                  our goal is to make the {airportName}
                  digital guide a seamless tool for your travel planning.
                </p>
              </div>
            </section>

            {/* 2. Standards */}
            <section id="standards" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">02.</span> Conformance Status
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The Web Content Accessibility Guidelines (WCAG) defines
                requirements for designers and developers to improve
                accessibility for people with disabilities. It defines three
                levels of conformance: Level A, Level AA, and Level AAA.
              </p>

              <div className="bg-[#F8F9FC] p-8 rounded-2xl border border-gray-200 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0C1A47] rounded-xl flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                      WCAG 2.1 Level AA Compliance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The {airportName} Guide is partially conformant with WCAG
                      2.1 level AA. Partially conformant means that some parts
                      of the content may not fully conform to the accessibility
                      standard due to third-party integrations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-[#0C1A47]">Known Limitations:</h4>
                <p className="text-gray-600">
                  While we strive for comprehensive accessibility, some content
                  managed by external entities may not meet our rigorous
                  standards. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    <strong>Third-party Maps:</strong> Interactive maps provided
                    by Google or other vendors may present challenges for
                    keyboard-only navigation.
                  </li>
                  <li>
                    <strong>External Booking Engines:</strong> While we link to
                    reputable partners for flights and transfers, we cannot
                    guarantee the accessibility of their respective booking
                    flows.
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Technologies */}
            <section id="technologies" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">03.</span> Technologies Used
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Accessibility of this website relies on the following
                technologies to work with the particular combination of web
                browser and any assistive technologies or plugins installed on
                your computer:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["HTML5", "WAI-ARIA", "CSS3", "JavaScript"].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white border border-gray-200 p-4 rounded-xl text-center font-bold text-[#0C1A47] shadow-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Features */}
            <section id="features" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-[#FFD600]">04.</span> Digital Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <FeatureCard
                  icon={<Keyboard className="w-6 h-6" />}
                  title="Keyboard Navigation"
                  desc="Full site functionality is accessible via keyboard interfaces (Tab, Enter, Esc) for users who cannot use a mouse."
                />
                <FeatureCard
                  icon={<Eye className="w-6 h-6" />}
                  title="Visual Contrast"
                  desc="We use a high-contrast color palette (Deep Navy & White) to assist users with low vision or color blindness."
                />
                <FeatureCard
                  icon={<Monitor className="w-6 h-6" />}
                  title="Screen Reader Support"
                  desc="Semantic HTML5 and ARIA labels are used throughout to ensure compatibility with screen readers like NVDA and VoiceOver."
                />
                <FeatureCard
                  icon={<MousePointer2 className="w-6 h-6" />}
                  title="Focus Indicators"
                  desc="Clear visual indicators show exactly which element has focus when navigating via keyboard."
                />
              </div>
            </section>

            {/* 5. Physical Accessibility (New Section for Context) */}
            <section id="physical" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">05.</span> Terminal Access
              </h2>
              <div className="bg-[#FFF9E5] p-8 rounded-2xl border border-[#FFEBAA]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD600] rounded-xl flex items-center justify-center text-[#0C1A47] shrink-0">
                    <Accessibility className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0C1A47] mb-2">
                      Requesting PRM Assistance
                    </h3>
                    <p className="text-[#0C1A47]/80 leading-relaxed mb-4">
                      While this website is digital, we understand your journey
                      is physical. Passengers with Reduced Mobility (PRM) are
                      entitled to free assistance at {airportName} under EU
                      Regulation 1107/2006.
                    </p>
                    <p className="text-[#0C1A47]/80 font-bold">
                      Important: You must notify your airline at least 48 hours
                      before your flight to ensure staff availability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Feedback */}
            <section id="feedback" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#FFD600]">06.</span> Feedback & Support
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We welcome your feedback on the accessibility of the{" "}
                {airportName} Guide. Please let us know if you encounter
                accessibility barriers:
              </p>

              <div className="p-8 bg-[#0C1A47] rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-2">
                  Accessibility Officer
                </h3>
                <p className="text-gray-300 mb-6">
                  Nova Quantum LLC • Digital Inclusion Team
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#FFD600] font-bold text-lg hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Contact Support Team
                  </Link>
                </div>
                <p className="mt-6 text-sm text-white/40 border-t border-white/10 pt-4">
                  We try to respond to feedback within 2 business days.
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

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
      <div className="text-[#0C1A47] mb-4 bg-white w-fit p-3 rounded-lg shadow-sm">
        {icon}
      </div>
      <h3 className="font-bold text-[#0C1A47] text-lg mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
