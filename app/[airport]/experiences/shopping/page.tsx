import type { Metadata } from "next";
import ShoppingClient from "@/components/ShoppingClient";

export const metadata: Metadata = {
  title: "Airport Shopping & Retail Guide | Duty Free & Souvenirs",
  description:
    "Discover shopping options, duty-free exclusive offers, and local boutiques at the airport. Find jewelry, fashion, and travel essentials before you fly.",
};

export default function ShoppingPage() {
  return <ShoppingClient />;
}
