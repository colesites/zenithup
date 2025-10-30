import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Activity,
  CreditCard,
} from "lucide-react";

const stats = [
  {
    name: "Total Balance",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    name: "Active Users",
    value: "2,350",
    change: "+180",
    trend: "up",
    icon: Users,
  },
  {
    name: "Transactions",
    value: "12,234",
    change: "+19%",
    trend: "up",
    icon: Activity,
  },
  {
    name: "Credit Score",
    value: "750",
    change: "+12",
    trend: "up",
    icon: CreditCard,
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center`}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {stat.trend === "up" ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {stat.change}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{stat.name}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
