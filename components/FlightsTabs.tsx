"use client";

import FlightWidget from "./FlightWidget";
import { Plane } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Tab = "departures" | "arrivals";

export default function FlightsTabs({ initial }: { initial: Tab }) {
  const pathname = usePathname();
  const router = useRouter();

  const [tab, setTab] = useState<Tab>(initial);

  // Sync URL with tab value
  useEffect(() => {
    const target = `/flights/${tab}`;
    if (!pathname.endsWith(target)) {
      router.replace(target);
    }
  }, [tab, pathname, router]);

  return (
    <section className="mx-auto max-w-6xl pb-10 md:pt-20 pt-10 px-4 text-[#0C1A47]">
      {/* TITLE */}

      {/* TABS */}
      {/* TABS */}
      <div className="flex items-center gap-3 md:gap-6 border-b border-[#DCE1EE] pb-3 mb-6">
        {(["departures", "arrivals"] as Tab[]).map((item) => {
          const active = tab === item;

          return (
            <button
              key={item}
              onClick={() => setTab(item)}
              className="
          relative flex items-center justify-center gap-2 px-2 md:px-3
          text-lg font-semibold pb-2 cursor-pointer
          transition-colors duration-300 text-[#0C1A47]
        "
            >
              <Plane className="h-5 w-5 transition-colors duration-300 text-[#0C1A47]" />
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* ACTIVE UNDERLINE: fills whole tab (half row) */}
              <span
                className={`
            absolute left-0 -bottom-px h-[3px] w-full bg-[#0C1A47]
            ${active ? "scale-x-100" : "scale-x-0"}
            origin-left
          `}
              />
            </button>
          );
        })}
      </div>

      {/* FLIGHTS WIDGET */}
      <FlightWidget type={tab} />
    </section>
  );
}
