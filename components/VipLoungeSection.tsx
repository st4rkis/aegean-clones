"use client";

import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useAirport } from "@/context/AirportContext";
import { useState, useEffect } from "react";
import { client, contactQuery } from "@/lib/sanity";

export default function VipLoungeSection() {
  const airport = useAirport();
  const name = airport?.key || "DXB";

  // --- STATE FOR DYNAMIC NUMBERS ---
  const [whatsappNumber, setWhatsappNumber] = useState("306955736505"); // Fallback from your JSON
  const [callNumber, setCallNumber] = useState("+302152154000"); // Fallback from your JSON

  // --- FETCH DATA FROM SANITY ---
  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const data = await client.fetch(contactQuery);

        // 1. Find the WhatsApp Number (look for numberType="whatsappBot" or title containing "Whatsapp")
        const waObj = data.find(
          (item: any) =>
            item.numberType === "whatsappBot" ||
            item.title?.toLowerCase().includes("whatsapp")
        );
        if (waObj?.phoneNumber) {
          // Remove '+' and spaces for the wa.me link
          setWhatsappNumber(waObj.phoneNumber.replace(/[^0-9]/g, ""));
        }

        // 2. Find the Support Call Number
        const supportObj = data.find(
          (item: any) =>
            item.numberType === "support" ||
            item.title?.toLowerCase().includes("support")
        );
        if (supportObj?.phoneNumber) {
          setCallNumber(supportObj.phoneNumber);
        }
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };

    fetchNumbers();
  }, []);

  // --- LINKS ---
  const BG_IMAGE = "/images/services/airport-transfers.jpg";
  const BOOKING_LINK = "https://www.aegeantaxi.com";
  const WHATSAPP_LINK = `https://wa.me/${whatsappNumber}`;
  const CALL_LINK = `tel:${callNumber}`;

  return (
    <section className="w-full">
      {/* --- DESKTOP LAYOUT --- */}
      <div
        className="hidden md:flex relative w-full items-center bg-[#1E2C79] overflow-hidden"
        style={{ height: "60vh" }}
      >
        <img
          src={BG_IMAGE}
          alt="Transfers"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

        <div className="mx-auto max-w-6xl w-full px-6 z-10 relative">
          <div className="bg-white p-10 rounded-3xl max-w-[500px] shadow-2xl">
            <h2 className="text-[#0C1A47] text-3xl font-bold mb-4">
              Aegean Taxi Transfers
            </h2>
            <p className="text-[#0C1A47] text-base leading-relaxed mb-8">
              The smartest way to get to or leave {name}. Skip the taxi queue
              and enjoy a premium, stress-free ride with our professional
              drivers.
            </p>

            {/* BUTTON GROUP */}
            <div className="flex flex-col gap-3">
              {/* Primary: Web Booking */}
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="nofollow noreferrer"
                className="
                  flex items-center justify-center gap-2
                  bg-[#0C1A47] text-white px-8 py-4 rounded-xl 
                  text-[15px] font-bold 
                  hover:bg-[#0C1A47]/90 transition-all shadow-lg hover:-translate-y-0.5
                "
              >
                Book Online <ArrowRight className="w-5 h-5" />
              </a>

              {/* Secondary: WhatsApp & Call (Grid Layout) */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    bg-[#25D366] text-white px-4 py-3 rounded-xl 
                    text-[14px] font-bold 
                    hover:bg-[#20bd5a] transition-colors shadow-sm
                  "
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href={CALL_LINK}
                  className="
                    flex items-center justify-center gap-2
                    bg-white border-2 border-[#0C1A47]/10 text-[#0C1A47] px-4 py-3 rounded-xl 
                    text-[14px] font-bold 
                    hover:bg-gray-50 transition-colors shadow-sm
                  "
                >
                  <Phone className="w-5 h-5" /> Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden flex flex-col relative bg-[#F3F4FE]">
        <div className="w-full h-[450px] bg-[#1E2C79] relative">
          <img
            src={BG_IMAGE}
            alt="Transfers"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="px-6 -mt-16 pb-16 relative z-10">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-[#0C1A47] text-2xl font-bold mb-4">
              Aegean Taxi Transfers
            </h2>
            <p className="text-[#0C1A47] text-[15px] leading-relaxed mb-8">
              The smartest way to get to or leave {name}. Skip the taxi queue
              and enjoy a premium, stress-free ride with our professional
              drivers.
            </p>

            {/* MOBILE BUTTON GROUP */}
            <div className="flex flex-col gap-3">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="nofollow noreferrer"
                className="
                  flex w-full justify-center items-center gap-2
                  bg-[#0C1A47] text-white px-6 py-4 rounded-xl 
                  text-[15px] font-bold 
                  hover:bg-[#0C1A47]/90 transition-all shadow-md
                "
              >
                Book Online <ArrowRight className="w-5 h-5" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="
                    flex justify-center items-center gap-2
                    bg-[#25D366] text-white px-3 py-3 rounded-xl 
                    text-[14px] font-bold 
                    hover:bg-[#20bd5a] transition-colors shadow-sm
                  "
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href={CALL_LINK}
                  className="
                    flex justify-center items-center gap-2
                    bg-white border-2 border-[#0C1A47]/10 text-[#0C1A47] px-3 py-3 rounded-xl 
                    text-[14px] font-bold 
                    hover:bg-gray-50 transition-colors shadow-sm
                  "
                >
                  <Phone className="w-5 h-5" /> Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
