import { redirect } from "next/navigation";

export default function FlightsHome() {
  // Redirects to /flights/departures relative to the current domain root.
  // We do not inject ${airport} here because the domain/middleware handles it.
  redirect("/flights/departures");
}
