"use client";

import React, { useEffect, useState } from "react";
import { useAirport } from "@/context/AirportContext";
import {
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  Loader2,
} from "lucide-react";

// --- 1. COORDINATES MAPPING ---
const AIRPORT_COORDS: Record<string, { lat: number; lon: number }> = {
  ATH: { lat: 37.9364, lon: 23.9445 },
  JMK: { lat: 37.4351, lon: 25.3481 },
  JTR: { lat: 36.3992, lon: 25.4793 },
  HER: { lat: 35.3397, lon: 25.1803 },
  CFU: { lat: 39.6019, lon: 19.9117 },
  RHO: { lat: 36.4054, lon: 28.0862 },
  SKG: { lat: 40.5197, lon: 22.9709 },
  ZTH: { lat: 37.7509, lon: 20.8843 },
  KGS: { lat: 36.7933, lon: 27.0917 },
  PAS: { lat: 37.0208, lon: 25.113 },
  JNX: { lat: 37.0811, lon: 25.3681 },
  MLO: { lat: 36.6961, lon: 24.475 },
  EFL: { lat: 38.12, lon: 20.5 },
  BJV: { lat: 37.2506, lon: 27.6644 },
};

export default function NavbarWeather() {
  const airport = useAirport();
  const airportKey = airport?.key?.toUpperCase() || "ATH";

  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  // --- 2. FETCH WEATHER ---
  useEffect(() => {
    const coords = AIRPORT_COORDS[airportKey] || AIRPORT_COORDS["ATH"];

    async function fetchWeather() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
        );
        const data = await res.json();

        if (data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode,
          });
        }
      } catch (error) {
        console.error("Weather fetch failed", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [airportKey]);

  // --- 3. ICON MAPPER (Updated for Light Theme) ---
  const getWeatherIcon = (code: number) => {
    // Clear
    if (code === 0)
      return <Sun className="w-5 h-5 text-[#FFD600] fill-current" />;

    // Partly Cloudy - Dark blue instead of gray-300
    if (code >= 1 && code <= 3)
      return <CloudSun className="w-5 h-5 text-[#0C1A47]" />;

    // Fog - Muted blue
    if (code >= 45 && code <= 48)
      return <CloudFog className="w-5 h-5 text-[#0C1A47]/60" />;

    // Rain - Standard blue
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82))
      return <CloudRain className="w-5 h-5 text-[#0C1A47]" />;

    // Snow - Dark blue (white would be invisible)
    if (code >= 71 && code <= 77)
      return <Snowflake className="w-5 h-5 text-[#0C1A47]" />;

    // Thunderstorm - Yellow/Dark mix
    if (code >= 95)
      return <CloudLightning className="w-5 h-5 text-[#FFD600]" />;

    // Default - Muted blue
    return <Cloud className="w-5 h-5 text-[#0C1A47]/60" />;
  };

  if (loading) {
    // Subtle loader matching navbar text
    return (
      <div className="flex items-center px-2">
        <Loader2 className="w-4 h-4 text-[#0C1A47]/30 animate-spin" />
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div
      className="
        flex items-center gap-1.5 
        px-2 py-1
        cursor-default
        /* Removed: hidden, borders, shadows, backgrounds */
      "
      title={`Current weather at ${airport?.name || "Airport"}`}
    >
      {getWeatherIcon(weather.code)}
      {/* Matches Navbar Link Color exactly (#0C1A47) */}
      <span className="text-[15px] font-bold text-[#0C1A47] tabular-nums">
        {weather.temp}°
      </span>
    </div>
  );
}
