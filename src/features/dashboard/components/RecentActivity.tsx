import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownLeft,
  ShoppingBag,
  CreditCard,
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "sent",
    description: "Sent to Jane Cooper",
    amount: "-$250.00",
    time: "2 hours ago",
    icon: ArrowUpRight,
  },
  {
    id: 2,
    type: "received",
    description: "Received from Mike Johnson",
    amount: "+$1,200.00",
    time: "5 hours ago",
    icon: ArrowDownLeft,
  },
  {
    id: 3,
    type: "purchase",
    description: "Purchase at Amazon",
    amount: "-$89.99",
    time: "1 day ago",
    icon: ShoppingBag,
  },
  {
    id: 4,
    type: "payment",
    description: "Credit card payment",
    amount: "-$500.00",
    time: "2 days ago",
    icon: CreditCard,
  },
];

export function RecentActivity() {
  return (
    <Card className="glass-card p-6 border-2">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === "received"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                  : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
              }`}
            >
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <p
              className={`text-sm font-semibold ${
                activity.type === "received"
                  ? "text-green-600 dark:text-green-400"
                  : "text-foreground"
              }`}
            >
              {activity.amount}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
