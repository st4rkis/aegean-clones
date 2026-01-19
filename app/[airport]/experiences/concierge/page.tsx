import ConciergeClient from "@/components/ConciergeClient";
import { getAirportByDomain, AIRPORTS } from "@/lib/airports.config";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

// Force dynamic rendering to check headers
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get("host");
  const airport = getAirportByDomain(host) || AIRPORTS[0];

  return {
    title: `VIP Concierge & Luxury Services | ${airport.name}`,
    description: `Experience ${airport.name} like never before. Luxury transfers, villa rentals, and bespoke concierge services powered by Fine Living Services.`,
  };
}

export default async function ConciergePage() {
  const headersList = await headers();
  const host = headersList.get("host");
  const airport = getAirportByDomain(host);

  if (!airport) {
    return notFound();
  }

  return <ConciergeClient />;
}
