"use client";

import { AirportProvider } from "@/context/AirportContext";
import { airportByKey } from "@/lib/airports.config";
import AirportNavbar from "./AirportNavbar";

export default function AirportShell({
  airportCode,
  children,
}: {
  airportCode: string;
  children: React.ReactNode;
}) {
  const airport = airportByKey[airportCode.toUpperCase()];

  if (!airport) {
    return <main className="p-10">Unknown Airport: {airportCode}</main>;
  }

  return (
    <AirportProvider value={airport}>
      <AirportNavbar />
      {/* CHANGED: Removed max-w-6xl, px-6, and pt-10. Now it's just full width. */}
      <main className="w-full">{children}</main>
    </AirportProvider>
  );
}
