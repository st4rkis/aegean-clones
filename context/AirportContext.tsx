"use client";

import { createContext, useContext } from "react";
import type { AirportConfig } from "@/lib/airports.config";

const AirportContext = createContext<AirportConfig | null>(null);

export function AirportProvider({
  value,
  children,
}: {
  value: AirportConfig;
  children: React.ReactNode;
}) {
  return (
    <AirportContext.Provider value={value}>{children}</AirportContext.Provider>
  );
}

export function useAirport() {
  const ctx = useContext(AirportContext);
  if (!ctx) {
    throw new Error("useAirport must be used within <AirportProvider>");
  }
  return ctx;
}
