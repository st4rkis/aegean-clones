"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  ChevronDown,
  ArrowRight,
  X,
  FileText,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { useAirport } from "@/context/AirportContext";
// --- 1. IMPORT WEATHER COMPONENT ---
import NavbarWeather from "@/components/NavbarWeather";

// --- TYPES ---
type DesktopSection = "search" | null;

type NavItem =
  | { type: "drawer"; key: string; label: string }
  | { type: "link"; href: string; label: string };

// --- CONFIGURATION ---
const desktopItems: NavItem[] = [
  { type: "link", href: "/flights/departures", label: "Flights" },
  { type: "link", href: "/information", label: "Information" },
  { type: "link", href: "/transport", label: "Transport" },
  { type: "link", href: "/experiences", label: "Experiences" },
  { type: "link", href: "/about", label: "About" },
  { type: "link", href: "/contact", label: "Contact" },
  { type: "link", href: "/information/lost-and-found", label: "Lost & Found" },
  { type: "link", href: "/faqs", label: "FAQ" },
];

const SEARCH_DATA = [
  { label: "Flight Arrivals", href: "/flights/arrivals", category: "Flights" },
  {
    label: "Flight Departures",
    href: "/flights/departures",
    category: "Flights",
  },
  { label: "Airlines Directory", href: "/airlines", category: "Flights" },
  { label: "Taxi & Transfers", href: "/transport/taxi", category: "Transport" },
  { label: "Bus Schedules", href: "/transport/bus", category: "Transport" },
  {
    label: "Parking Information",
    href: "/transport/parking",
    category: "Transport",
  },
  {
    label: "Airport Lounges",
    href: "/experiences/lounges",
    category: "Experiences",
  },
  {
    label: "Dining & Restaurants",
    href: "/experiences/dining",
    category: "Experiences",
  },
  {
    label: "Shopping & Duty Free",
    href: "/experiences/shopping",
    category: "Experiences",
  },
  {
    label: "Lost & Found",
    href: "/information/lost-and-found",
    category: "Information",
  },
  {
    label: "Airport Services",
    href: "/information/services",
    category: "Information",
  },
  { label: "Frequently Asked Questions", href: "/faqs", category: "Support" },
  { label: "About the Airport", href: "/about", category: "Corporate" },
  { label: "Contact Us", href: "/contact", category: "Support" },
];

const mobileMenu = [
  {
    type: "group",
    title: "Flights",
    children: [
      { label: "Arrivals", href: "/flights/arrivals" },
      { label: "Departures", href: "/flights/departures" },
      { label: "Airlines", href: "/airlines" },
    ],
  },
  {
    type: "group",
    title: "Information",
    children: [
      { label: "Services", href: "/information/services" },
      { label: "Shops", href: "/information/shops" },
      { label: "Lost & Found", href: "/information/lost-and-found" },
    ],
  },
  {
    type: "group",
    title: "Transport",
    children: [
      { label: "Taxi", href: "/transport/taxi" },
      { label: "Bus", href: "/transport/bus" },
      { label: "Parking", href: "/transport/parking" },
    ],
  },
  {
    type: "group",
    title: "Experiences",
    children: [
      { label: "Dining", href: "/experiences/dining" },
      { label: "Shopping", href: "/experiences/shopping" },
      { label: "Concierge", href: "/" },
    ],
  },
  { type: "link", label: "About Us", href: "/about" },
  { type: "link", label: "Contact", href: "/contact" },
  { type: "link", label: "Lost & Found", href: "/information/lost-and-found" },
  { type: "link", label: "FAQ", href: "/faqs" },
];

export default function AirportNavbar() {
  const airport = useAirport();
  const pathname = usePathname();
  const airportCode = airport?.key ?? "";

  const [open, setOpen] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [desktopSection, setDesktopSection] = useState<DesktopSection>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const drawerRef = useRef<HTMLDivElement | null>(null);

  const toggleDesktopSection = (section: DesktopSection) => {
    setDesktopSection((prev) => (prev === section ? null : section));
    setSearchQuery("");
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return SEARCH_DATA.filter(
      (page) =>
        page.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8);
  }, [searchQuery]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        desktopSection &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        setDesktopSection(null);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [desktopSection]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#edeefd] border-b border-[#0C1A47]/5">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-[53px] md:h-[74px] relative">
          {/* LOGO (Left) */}
          <Link
            href="/"
            className="text-[#0C1A47] font-extrabold text-[22px] tracking-widest shrink-0 cursor-pointer"
          >
            {airportCode || "ATX"}
          </Link>

          {/* DESKTOP NAV (Center) */}
          <nav className="hidden md:flex items-center gap-4 text-[14px] lg:text-[15px] font-semibold h-[74px]">
            {desktopItems.map((item) => {
              if (item.type === "drawer") return null;

              const isActiveLink =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setDesktopSection(null)}
                  className={`relative inline-flex items-center gap-1 group h-full cursor-pointer px-1 transition-colors duration-200 ${
                    isActiveLink
                      ? "text-[#0C1A47]"
                      : "text-[#0C1A47] hover:text-[#0C1A47]/60"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 bg-[#0C1A47] rounded-full transition-all duration-300 ${
                      isActiveLink
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            {/* 1. DESKTOP SEARCH */}
            <button
              type="button"
              onClick={() => toggleDesktopSection("search")}
              className="hidden md:flex items-center gap-2 text-[16px] font-semibold shrink-0 text-[#0C1A47] hover:text-[#0C1A47]/60 transition-colors cursor-pointer"
            >
              {desktopSection === "search" ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-4 h-4" />
              )}
              {desktopSection === "search" ? "Close" : "Search"}
            </button>

            {/* 2. MOBILE ACTIONS: Weather + Menu */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Weather (Left of Menu) */}
              <NavbarWeather />

              <button
                onClick={() => setOpen(!open)}
                className="ml-auto flex items-center gap-2 text-[#0C1A47] font-semibold cursor-pointer"
              >
                {open ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {/* 3. DESKTOP WEATHER (Absolute Position - Far Right Outside Container) */}
          <div className="hidden md:block absolute right-[-100px] top-1/2 -translate-y-1/2">
            <NavbarWeather />
          </div>
        </div>
      </header>

      {/* --- DESKTOP SEARCH DRAWER --- */}
      <div
        ref={drawerRef}
        className={`hidden md:block fixed left-0 right-0 z-40 bg-[#EBEEF8] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          desktopSection === "search"
            ? "translate-y-0 opacity-100 shadow-2xl"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          top: "74px",
          bottom: "0",
          height: "auto",
        }}
      >
        <div className="mx-auto max-w-6xl h-full px-6 py-12 overflow-y-auto">
          {desktopSection === "search" && (
            <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto space-y-12 pt-10 pb-32">
              <div className="w-full relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-10 h-10 group-focus-within:text-[#0C1A47] transition-colors" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full bg-white border-b-8 border-gray-200 focus:border-[#0C1A47] outline-none text-5xl md:text-6xl font-bold py-4 pl-24 pr-8 text-[#0C1A47] transition-all placeholder:text-gray-200"
                />
              </div>

              {searchQuery ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-500">
                  {filteredResults.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      onClick={() => setDesktopSection(null)}
                      className="flex items-center justify-between p-6 bg-white rounded-4xl border-2 border-transparent hover:border-[#0C1A47] transition-all group shadow-sm cursor-pointer"
                    >
                      <div className="flex items-center gap-6">
                        <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#0C1A47] group-hover:text-[#FFD600] transition-colors">
                          <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold text-[#0C1A47]">
                          {result.label}
                        </span>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-[#0C1A47] group-hover:translate-x-2 transition-all" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
                  <div className="space-y-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">
                      Popular
                    </p>
                    <div className="flex flex-col gap-4">
                      {["Arrivals", "Taxi", "Parking", "Lounges"].map(
                        (term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="text-xl font-bold text-[#0C1A47] text-left hover:text-[#FFD600] transition-colors cursor-pointer"
                          >
                            {term}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">
                      Featured Content
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link
                        href="/transport/overview"
                        onClick={() => setDesktopSection(null)}
                        className="p-6 bg-white rounded-3xl group cursor-pointer shadow-sm hover:shadow-md transition-all"
                      >
                        <Sparkles className="text-[#FFD600] mb-3" />
                        <h4 className="font-bold text-[#0C1A47] text-lg">
                          Transport Guide
                        </h4>
                        <p className="text-sm text-gray-500">
                          Every way to reach the city.
                        </p>
                      </Link>
                      <Link
                        href="/information/lost-and-found"
                        onClick={() => setDesktopSection(null)}
                        className="p-6 bg-white rounded-3xl group cursor-pointer shadow-sm hover:shadow-md transition-all"
                      >
                        <FileText className="text-blue-500 mb-3" />
                        <h4 className="font-bold text-[#0C1A47] text-lg">
                          Lost & Found
                        </h4>
                        <p className="text-sm text-gray-500">
                          Recover your items quickly.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* --- FIXED MOBILE DRAWER (UNCHANGED) --- */}
      <div
        className={`fixed inset-0 top-[53px] bg-[#EBEEF8] z-40 transform duration-500 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto pb-40">
          {mobileSearchActive ? (
            <div className="animate-in fade-in duration-300">
              <button
                onClick={() => setMobileSearchActive(false)}
                className="flex items-center gap-2 text-[#0C1A47] font-bold mb-8 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Menu
              </button>
              <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm mb-10">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guide..."
                  className="outline-none w-full bg-transparent text-lg font-bold text-[#0C1A47]"
                />
              </div>
              <div className="space-y-4">
                {filteredResults.map((result) => (
                  <Link
                    key={result.href}
                    href={result.href || "#"}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between p-5 bg-white rounded-2xl cursor-pointer"
                  >
                    <span className="font-bold text-[#0C1A47]">
                      {result.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col text-[#0C1A47] font-semibold">
              <button
                onClick={() => setMobileSearchActive(true)}
                className="flex gap-3 items-center text-[18px] mb-8 cursor-pointer text-left"
              >
                <Search className="h-5 w-5" /> Search the guide
              </button>
              {mobileMenu.map((item, idx) => (
                <div key={idx}>
                  {item.type === "group" ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenSection(
                            openSection === item.title ? null : item.title || ""
                          )
                        }
                        className="w-full flex justify-between items-center text-[18px] py-4 border-t border-[#d1d4fa] cursor-pointer"
                      >
                        {item.title}{" "}
                        <ChevronDown
                          className={`transition-transform ${
                            openSection === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all ${
                          openSection === item.title ? "max-h-80" : "max-h-0"
                        }`}
                      >
                        {(item.children || []).map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href || "#"}
                            onClick={() => setOpen(false)}
                            className="flex items-center py-3 px-4 text-[#4b4caa] cursor-pointer"
                          >
                            {sub.label} <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={() => setOpen(false)}
                      className="w-full flex justify-between items-center text-[18px] py-4 border-t border-[#d1d4fa] cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
