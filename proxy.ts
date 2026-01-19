import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAirportByDomain } from "@/lib/airports.config";

export default function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const airport = getAirportByDomain(host);

  // If domain is not mapped → let Next.js continue normally
  if (!airport) return NextResponse.next();

  const url = request.nextUrl.clone();
  const path = url.pathname;

  // If path doesn't already contain airport code → inject it
  if (!path.startsWith(`/${airport.key}`)) {
    url.pathname = `/${airport.key}${path}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // FIX: Added "|sitemap.xml" to the exclusion list.
  // Now the proxy will ignoring rewriting this file, allowing app/sitemap.xml/route.ts to handle it.
  matcher: [
    "/((?!_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|seobilityverify_8521323.html).*)",
  ],
};
