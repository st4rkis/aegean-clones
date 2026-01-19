"use client";

import { ArrowRight, MapPin, Car, KeyRound } from "lucide-react";
import Link from "next/link";
import { useAirport } from "@/context/AirportContext";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const airport = useAirport();
  const airportKey = airport?.key?.toLowerCase() || "jmk";

  // --- DATA CONFIGURATION ---
  const services = [
    {
      id: "directions",
      title: "How to get to",
      description:
        "Directions, bus routes, and maps to reach the airport easily.",
      icon: <MapPin className="w-12 h-12" />,
      bgColor: "bg-white", // 1. White
      btnText: "Get directions",
      href: `/transport/directions`,
    },
    {
      id: "parking",
      title: "Parking",
      description: "Reserve your preferred spot online to smoothen your trip.",
      icon: (
        <span className="font-bold text-5xl leading-none tracking-tighter">
          P
        </span>
      ),
      bgColor: "bg-[#DDE3FF]", // 2. Blue
      btnText: "Book a spot",
      href: `/transport/parking`,
    },
    {
      id: "car-rental",
      title: "Rent a Car",
      description: "Find the best car rental deals from top providers.",
      icon: <KeyRound className="w-12 h-12" />,
      bgColor: "bg-[#E5D5F5]", // 3. Soft Purple (Distinct & Premium)
      btnText: "View offers",
      href: `/transport/car-rental`,
    },
    {
      id: "taxi",
      title: "Taxi",
      description: "Pre-book your taxi transfer for a hassle-free arrival.",
      icon: <Car className="w-12 h-12" />,
      bgColor: "bg-[#FFD600]", // 4. Yellow
      btnText: "Book transfer",
      href: `/transport/taxi`,
    },
  ];

  return (
    <section className="w-full bg-[#F3F4FE] md:min-h-[50vh] flex items-center py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 w-full h-full flex flex-col justify-center">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 px-2">
          <h2 className="text-[#0C1A47] text-3xl md:text-5xl font-bold tracking-tight">
            Useful services
          </h2>
          <p className="hidden md:block text-[#0C1A47]/60 text-lg font-medium mt-2 md:mt-0">
            Everything you need for a smooth journey
          </p>
        </div>

        {/* SWIPER SLIDER */}
        <div className="w-full relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            autoHeight={false}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full overflow-visible! pb-12!"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="h-auto!">
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// --- REUSABLE CARD COMPONENT ---
function ServiceCard({
  title,
  description,
  icon,
  bgColor,
  btnText,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  btnText: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`
        ${bgColor} 
        relative
        rounded-[2.5rem] p-8 md:p-10
        flex flex-col items-start 
        h-full w-full shadow-sm hover:shadow-xl hover:shadow-[#0C1A47]/10 border border-transparent hover:border-[#0C1A47]/5 transition-all duration-300 ease-out group
      `}
    >
      {/* Icon Wrapper - Static */}
      <div className="mb-8 text-[#0C1A47]">{icon}</div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-start">
        <h3 className="text-[#0C1A47] text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-[#0C1A47]/70 text-base md:text-lg font-medium leading-relaxed mb-10">
          {description}
        </p>
      </div>

      {/* Button Visual */}
      <div
        className="
          mt-auto
          bg-[#0C1A47] text-white 
          px-8 py-4 rounded-full 
          text-sm font-bold tracking-wide
          flex items-center gap-2 
          group-hover:bg-[#152255]
          transition-colors duration-300
        "
      >
        {btnText} <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
