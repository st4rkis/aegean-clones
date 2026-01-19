import type { Metadata } from "next";
import SpecialAssistanceClient from "@/components/SpecialAssistanceClient";

export const metadata: Metadata = {
  title: "Special Assistance & PRM Services | Accessibility Info",
  description:
    "Information for passengers with reduced mobility (PRM) and disabilities. Learn about wheelchair services, meeting points, and how to request assistance.",
};

export default function SpecialAssistancePage() {
  return <SpecialAssistanceClient />;
}
