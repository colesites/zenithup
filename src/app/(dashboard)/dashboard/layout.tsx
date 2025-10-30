import type React from "react";
import DashboardLayoutClient from "@/features/dashboard/components/DashboardLayoutClient";
import ZeniAssistant from "@/features/dashboard/components/ZeniAssistant";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardLayoutClient>{children}</DashboardLayoutClient>
      <ZeniAssistant />
    </div>
  );
}
