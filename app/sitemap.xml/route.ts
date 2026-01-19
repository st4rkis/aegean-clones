import { AIRPORTS, getAirportByDomain } from "@/lib/airports.config";
import { headers } from "next/headers";

// --- PRECISION ROUTE LIST ---
const APP_ROUTES = [
  "",
  "/about",
  "/accessibility",
  "/airlines",
  "/contact",
  "/experiences",
  "/experiences/dining",
  "/experiences/lounges",
  "/experiences/relax",
  "/experiences/shopping",
  "/faqs",
  "/flights",
  "/flights/arrivals",
  "/flights/departures",
  "/information",
  "/information/baggage",
  "/information/lost-and-found",
  "/information/services",
  "/information/shops",
  "/information/special-assistance",
  "/privacy",
  "/sitemap-page",
  "/terms",
  "/transport",
  "/transport/bus",
  "/transport/car-rental",
  "/transport/directions",
  "/transport/overview",
  "/transport/parking",
  "/transport/taxi",
];

export async function GET(request: Request) {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https"; // Default to https for safety

  // 1. Resolve Airport
  const airport =
    getAirportByDomain(host) || AIRPORTS.find((a) => a.key === "JMK");

  if (!airport) {
    return new Response("Unknown Domain", { status: 404 });
  }

  // 2. Construct Base URL (No trailing slash)
  const baseUrl = `${protocol}://${airport.domain}`;

  // 3. Build XML String (Minified to prevent whitespace errors)
  const sitemapFields = APP_ROUTES.map((path) => {
    // Priority Scoring
    let priority = "0.7";
    if (path === "") priority = "1.0";
    if (path.includes("flights")) priority = "0.9";
    if (path.includes("transport")) priority = "0.8";

    // Escape special characters in URL just in case
    const loc = `${baseUrl}${path}`;
    const escLoc = loc
      .replace(/&/g, "&amp;")
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;")
      .replace(/>/g, "&gt;")
      .replace(/</g, "&lt;");

    // Return single line to avoid whitespace issues
    return `<url><loc>${escLoc}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>${priority}</priority></url>`;
  });

  // 4. Construct Final XML
  // CRITICAL: No spaces or newlines before <?xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapFields.join(
    ""
  )}</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8", // Added charset
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
