import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  DollarSign,
  Clock,
  TrendingUp,
  AlertCircle,
  Navigation,
} from "lucide-react";

export default function ATMOptimizationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          ATM Optimization
        </h1>
        <p className="text-muted-foreground">
          AI-powered cash management and predictive maintenance for ATM networks
        </p>
      </div>

      {/* Network Overview */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-li6nhear-to-br from-primary to-accent">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Total ATMs</span>
          </div>
          <p className="text-3xl font-bold text-foreground">1,247</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
            +12 this month
          </p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              Cash Available
            </span>
          </div>
          <p className="text-3xl font-bold text-foreground">$8.4M</p>
          <p className="text-xs text-muted-foreground mt-1">Across network</p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Uptime</span>
          </div>
          <p className="text-3xl font-bold text-foreground">98.7%</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
            +0.3% vs last month
          </p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Avg Response</span>
          </div>
          <p className="text-3xl font-bold text-foreground">2.3h</p>
          <p className="text-xs text-muted-foreground mt-1">Maintenance time</p>
        </Card>
      </div>

      {/* Alerts & Predictions */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Critical Alerts
          </h2>
          <Badge variant="destructive">3 Urgent</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border-2 border-red-500/50">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-foreground">
                  ATM #A-1247 - Low Cash
                </p>
                <Badge variant="destructive" className="text-xs">
                  Critical
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Victoria Island, Lagos • Predicted to run out in 4 hours
              </p>
              <Button
                size="sm"
                className="bg-linear-to-r from-primary to-accent"
              >
                Schedule Refill
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-500/10 border-2 border-orange-500/50">
            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-foreground">
                  ATM #A-0892 - Maintenance Due
                </p>
                <Badge className="text-xs bg-orange-500">Warning</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Westlands, Nairobi • Card reader showing early failure signs
              </p>
              <Button size="sm" variant="outline">
                Schedule Maintenance
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-500/10 border-2 border-orange-500/50">
            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-foreground">
                  ATM #A-0543 - High Demand
                </p>
                <Badge className="text-xs bg-orange-500">Warning</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Sandton, Johannesburg • 40% above normal transaction volume
              </p>
              <Button size="sm" variant="outline">
                Optimize Cash Load
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Top Performing ATMs */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Top Performing Locations
        </h2>
        <div className="space-y-3">
          {[
            {
              id: "A-1523",
              location: "Ikeja City Mall, Lagos",
              transactions: 2847,
              uptime: 99.8,
            },
            {
              id: "A-0934",
              location: "Sarit Centre, Nairobi",
              transactions: 2634,
              uptime: 99.5,
            },
            {
              id: "A-1876",
              location: "Sandton City, Johannesburg",
              transactions: 2521,
              uptime: 99.2,
            },
            {
              id: "A-0445",
              location: "Accra Mall, Accra",
              transactions: 2398,
              uptime: 98.9,
            },
          ].map((atm) => (
            <div
              key={atm.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{atm.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {atm.location}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">
                  {atm.transactions.toLocaleString()} txns
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  {atm.uptime}% uptime
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Cash Flow Predictions */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          AI Cash Flow Predictions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">
                Weekend Surge Expected
              </span>
              <Badge className="bg-linear-to-r from-primary to-accent">
                High Confidence
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              15 ATMs predicted to need refills by Saturday 2 PM based on
              historical patterns
            </p>
            <Button
              size="sm"
              className="w-full bg-inear-to-r from-primary to-accent"
            >
              <Navigation className="w-3 h-3 mr-2" />
              Optimize Route
            </Button>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">
                Cost Savings Opportunity
              </span>
              <Badge className="bg-linear-to-r from-primary to-accent">
                $12.4K/month
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Consolidate 8 low-traffic ATMs into 3 strategic locations to
              reduce operational costs
            </p>
            <Button
              size="sm"
              variant="outline"
              className="w-full bg-transparent"
            >
              View Analysis
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
