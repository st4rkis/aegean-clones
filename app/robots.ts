import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getAirportByDomain, AIRPORTS } from "@/lib/airports.config";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers(); // Await is crucial here!
  const host = headersList.get("host");

  // Use HTTPS unless on localhost
  const protocol = host?.includes("localhost") ? "http" : "https";

  // Find the correct airport for this domain
  const airport =
    getAirportByDomain(host) || AIRPORTS.find((a) => a.key === "JMK");

  // Fallback to the incoming host if no config match (safety net)
  const domain = airport ? airport.domain : host;
  const baseUrl = `${protocol}://${domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Block internal Next.js paths and API routes from indexing
      disallow: ["/api/", "/_next/", "/static/"],
    },
    // This is the magic line. It changes based on the domain!
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
