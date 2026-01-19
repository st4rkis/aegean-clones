"use client";

import { useAirport } from "@/context/AirportContext";

type Props = {
  type: "arrivals" | "departures"; // NO iata HERE
};

export default function FlightWidget({ type }: Props) {
  const airport = useAirport(); // pulls active airport from context

  const depArr = type === "arrivals" ? "arr" : "dep";

  const url = `https://www.flightera.net/en/widgets/airport?iata=${airport.iata}&depArr=${depArr}&nrFlights=10&airlineIata=&theme=light`;

  return (
    <iframe
      src={url}
      loading="lazy"
      className="w-full h-[600px] border-0"
      style={{
        background: "transparent",
      }}
    />
  );
}
