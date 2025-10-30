import { StatsCards } from "@/features/dashboard/components/StatsCard";
import { RecentActivity } from "@/features/dashboard/components/RecentActivity";
import { QuickActions } from "@/features/dashboard/components/QuickActions";
import { ModuleGrid } from "@/features/dashboard/components/ModuleGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, John
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your financial ecosystem today.
        </p>
      </div>

      <StatsCards />
      <QuickActions />
      <ModuleGrid />
      <RecentActivity />
    </div>
  );
}
