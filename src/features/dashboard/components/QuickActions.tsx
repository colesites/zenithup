import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Download, Upload, Plus } from "lucide-react";

const actions = [
  { name: "Send Money", icon: Send, color: "from-orange-500 to-orange-600" },
  {
    name: "Request Loan",
    icon: Download,
    color: "from-orange-600 to-orange-700",
  },
  { name: "Top Up", icon: Upload, color: "from-orange-500 to-orange-600" },
  {
    name: "New Transaction",
    icon: Plus,
    color: "from-orange-600 to-orange-700",
  },
];

export function QuickActions() {
  return (
    <Card className="glass-card p-6 border-2">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {actions.map((action) => (
          <Button
            key={action.name}
            variant="outline"
            className="h-auto flex-col gap-2 py-4 border-border hover:border-primary hover:bg-transparent group bg-transparent"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">
              {action.name}
            </span>
          </Button>
        ))}
      </div>
    </Card>
  );
}
