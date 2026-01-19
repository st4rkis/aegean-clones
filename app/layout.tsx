import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { getAirportByDomain, AIRPORTS } from "@/lib/airports.config";

// Replaced static 'export const metadata' with this dynamic function
export async function generateMetadata(): Promise<Metadata> {
  // 1. Get the hostname from the request
  const headersList = await headers();
  const host = headersList.get("host");

  // 2. Find the matching airport
  // Fallback to JMK if something goes wrong, just to be safe
  const airport =
    getAirportByDomain(host) || AIRPORTS.find((a) => a.key === "JMK");

  // 3. Define the base verification (Seobility is always there)
  const verification: Metadata["verification"] = {
    other: {
      seobility: "f33e29bf5e55daa3d0799c51cea8f49d",
    },
  };

  // 4. Inject Google Verification ONLY if this airport has a code in config
  if (airport?.googleVerificationId) {
    verification.google = airport.googleVerificationId;
  }

  return {
    verification,
    // Optional: You can set a default title here if you want
    // title: `${airport?.name} | Official Guide`,
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-gray-50">{children}</body>
    </html>
  );
}
