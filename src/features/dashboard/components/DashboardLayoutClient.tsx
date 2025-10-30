"use client";

import type React from "react";
import { useState } from "react";
import DashBoardHeader from "@/features/dashboard/components/DashBoardHeader";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";

interface DashboardLayoutClientProps {
  children: React.ReactNode;
}

export default function DashboardLayoutClient({ children }: DashboardLayoutClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <DashboardSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="lg:pl-64">
        <DashBoardHeader onMenuClick={toggleSidebar} />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </>
  );
}

