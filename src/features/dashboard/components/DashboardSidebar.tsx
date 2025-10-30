"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CreditCard,
  ShoppingBag,
  Shield,
  Users,
  TrendingUp,
  FileCheck,
  Wallet,
  Star,
  Settings,
  LogOut,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "Credit Scoring",
    href: "/dashboard/credit-scoring",
    icon: CreditCard,
  },
  { name: "Marketplace", href: "/dashboard/marketplace", icon: ShoppingBag },
  { name: "Fraud Detection", href: "/dashboard/fraud-detection", icon: Shield },
  { name: "Trust Center", href: "/dashboard/trust-center", icon: FileCheck },
  { name: "Agent Network", href: "/dashboard/agent-network", icon: Users },
  {
    name: "ATM Optimization",
    href: "/dashboard/atm-optimization",
    icon: TrendingUp,
  },
  { name: "Digital Onboarding", href: "/dashboard/onboarding", icon: Wallet },
  { name: "Reputation", href: "/dashboard/reputation", icon: Star },
];

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function DashboardSidebar({ isOpen = false, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-screen w-64 bg-background border-r border-border transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center gap-2 px-6 border-b border-border bg-linear-to-r from-primary to-accent">
            <Link href="/" className="flex items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-orange-950 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-xl font-bold text-white">ZenithUp</span>
            </Link>
            {/* Close button for mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-border space-y-1">
              <Link
                href="/dashboard/settings"
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Settings className="w-5 h-5" />
                Settings
              </Link>
            </div>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-border">
            <div className="glass-card rounded-lg p-3 mb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    john@example.com
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 border-border hover:border-primary bg-transparent"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
