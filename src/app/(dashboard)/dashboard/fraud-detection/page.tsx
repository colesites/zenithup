import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingDown,
  Activity,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "high",
    title: "Unusual transaction pattern detected",
    description: "Multiple large transactions from new location",
    time: "2 hours ago",
    status: "investigating",
  },
  {
    id: 2,
    type: "medium",
    title: "Login from unrecognized device",
    description: "New device access from Lagos, Nigeria",
    time: "5 hours ago",
    status: "resolved",
  },
  {
    id: 3,
    type: "low",
    title: "Velocity check triggered",
    description: "5 transactions within 10 minutes",
    time: "1 day ago",
    status: "false-positive",
  },
];

const recentChecks = [
  {
    id: 1,
    transaction: "TXN-2024-001",
    amount: "$250.00",
    risk: "Low",
    status: "approved",
  },
  {
    id: 2,
    transaction: "TXN-2024-002",
    amount: "$1,200.00",
    risk: "Medium",
    status: "review",
  },
  {
    id: 3,
    transaction: "TXN-2024-003",
    amount: "$89.99",
    risk: "Low",
    status: "approved",
  },
  {
    id: 4,
    transaction: "TXN-2024-004",
    amount: "$5,000.00",
    risk: "High",
    status: "blocked",
  },
];

export default function FraudDetectionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Fraud Detection
        </h1>
        <p className="text-muted-foreground">
          AI-powered real-time fraud prevention and monitoring
        </p>
      </div>

      {/* Security Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">
            Protection Status
          </p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            Active
          </p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Active Alerts</p>
          <p className="text-xl font-bold text-foreground">3</p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Blocked Today</p>
          <p className="text-xl font-bold text-foreground">12</p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Fraud Rate</p>
          <p className="text-xl font-bold text-foreground">0.3%</p>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Active Alerts
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="border-border hover:border-primary bg-transparent"
          >
            View All
          </Button>
        </div>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  alert.type === "high"
                    ? "bg-red-100 dark:bg-red-900/30"
                    : alert.type === "medium"
                    ? "bg-orange-100 dark:bg-orange-900/30"
                    : "bg-yellow-100 dark:bg-yellow-900/30"
                }`}
              >
                <AlertTriangle
                  className={`w-5 h-5 ${
                    alert.type === "high"
                      ? "text-red-600 dark:text-red-400"
                      : alert.type === "medium"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">
                    {alert.title}
                  </h3>
                  <Badge
                    variant={
                      alert.type === "high" ? "destructive" : "secondary"
                    }
                    className={
                      alert.type === "high"
                        ? ""
                        : alert.type === "medium"
                        ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                    }
                  >
                    {alert.type.toUpperCase()}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {alert.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {alert.time}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs bg-transparent"
                    >
                      Investigate
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 text-xs bg-linear-to-r from-primary to-accent"
                    >
                      Resolve
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Transaction Checks */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Recent Transaction Checks
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Transaction ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Risk Level
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {recentChecks.map((check) => (
                <tr
                  key={check.id}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-3 px-4 text-sm text-foreground font-mono">
                    {check.transaction}
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground font-semibold">
                    {check.amount}
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="secondary"
                      className={
                        check.risk === "High"
                          ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                          : check.risk === "Medium"
                          ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                          : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                      }
                    >
                      {check.risk}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {check.status === "approved" && (
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      )}
                      {check.status === "blocked" && (
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      )}
                      {check.status === "review" && (
                        <Activity className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      )}
                      <span className="text-sm text-foreground capitalize">
                        {check.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
