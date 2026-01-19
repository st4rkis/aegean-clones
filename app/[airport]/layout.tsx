// app/[airport]/layout.tsx

import AirportShell from "@/components/AirportShell";
import AirportFooter from "@/components/AirportFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default async function AirportLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ airport: string }>;
}) {
  const { airport } = await params;

  return (
    <AirportShell airportCode={airport}>
      {children}
      {/* Footer sits here, inside the Shell (Context) but after children */}
      <FloatingWhatsApp />
      <AirportFooter />
    </AirportShell>
  );
}
