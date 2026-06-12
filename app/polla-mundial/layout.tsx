import type { Metadata } from "next";
import { PollaFooter } from "@/components/layout/PollaFooter";
import { PollaHeader } from "@/components/layout/PollaHeader";

export const metadata: Metadata = {
  title: "Polla Mundial",
  description:
    "Polla Mundial LBOriente: pronósticos, partidos, ranking y reglas.",
};

export default function PollaMundialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,71,199,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.35),rgba(2,8,23,1))]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <PollaHeader />
        <div className="flex-1">{children}</div>
        <PollaFooter />
      </div>
    </div>
  );
}