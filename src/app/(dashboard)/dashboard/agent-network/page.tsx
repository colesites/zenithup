import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  DollarSign,
  TrendingUp,
  MapPin,
  Phone,
  Star,
  AlertTriangle,
} from "lucide-react";

export default function AgentNetworkPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Agent Network Management
        </h1>
        <p className="text-muted-foreground">
          Monitor liquidity, performance, and support for your agent network
        </p>
      </div>

      {/* Network Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Active Agents</span>
          </div>
          <p className="text-3xl font-bold text-foreground">3,842</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
            +156 this month
          </p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              Total Liquidity
            </span>
          </div>
          <p className="text-3xl font-bold text-foreground">$2.8M</p>
          <p className="text-xs text-muted-foreground mt-1">Network-wide</p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              Avg Performance
            </span>
          </div>
          <p className="text-3xl font-bold text-foreground">4.6</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
            +0.2 vs last month
          </p>
        </Card>

        <Card className="glass-card p-6 border-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">Coverage</span>
          </div>
          <p className="text-3xl font-bold text-foreground">847</p>
          <p className="text-xs text-muted-foreground mt-1">Locations</p>
        </Card>
      </div>

      {/* Liquidity Alerts */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Liquidity Alerts
          </h2>
          <Badge variant="destructive">5 Critical</Badge>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border-2 border-red-500/50">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-foreground">
                  Agent #AG-8472 - Critical Low
                </p>
                <Badge variant="destructive" className="text-xs">
                  Urgent
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Kigali, Rwanda • $240 remaining • Predicted to run out in 3
                hours
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-linear-to-r from-primary to-accent"
                >
                  Send Liquidity
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="w-3 h-3 mr-1" />
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-500/10 border-2 border-orange-500/50">
            <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-foreground">
                  Agent #AG-3291 - Low Balance
                </p>
                <Badge className="text-xs bg-orange-500">Warning</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Kampala, Uganda • $580 remaining • High transaction area
              </p>
              <Button size="sm" variant="outline">
                Schedule Refill
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Top Performing Agents */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Top Performing Agents
        </h2>
        <div className="space-y-3">
          {[
            {
              id: "AG-1523",
              name: "Amina Okafor",
              location: "Lagos, Nigeria",
              transactions: 1847,
              rating: 4.9,
              liquidity: 95,
            },
            {
              id: "AG-0934",
              name: "James Mwangi",
              location: "Nairobi, Kenya",
              transactions: 1634,
              rating: 4.8,
              liquidity: 88,
            },
            {
              id: "AG-1876",
              name: "Fatima Diop",
              location: "Dakar, Senegal",
              transactions: 1521,
              rating: 4.7,
              liquidity: 92,
            },
            {
              id: "AG-0445",
              name: "Kwame Asante",
              location: "Accra, Ghana",
              transactions: 1398,
              rating: 4.8,
              liquidity: 85,
            },
          ].map((agent) => (
            <div key={agent.id} className="p-4 rounded-lg bg-secondary/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                    {agent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {agent.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {agent.id} • {agent.location}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-xs font-semibold text-foreground">
                        {agent.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">
                    {agent.transactions.toLocaleString()} txns
                  </p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">
                    Liquidity Health
                  </span>
                  <span className="font-semibold text-foreground">
                    {agent.liquidity}%
                  </span>
                </div>
                <Progress value={agent.liquidity} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Agent Distribution Map */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Geographic Distribution
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Nigeria</span>
              </div>
              <Badge className="bg-linear-to-r from-primary to-accent">
                1,247 agents
              </Badge>
            </div>
            <Progress value={85} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">
              85% coverage in major cities
            </p>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Kenya</span>
              </div>
              <Badge className="bg-linear-to-r from-primary to-accent">
                892 agents
              </Badge>
            </div>
            <Progress value={78} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">
              78% coverage in major cities
            </p>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">
                  South Africa
                </span>
              </div>
              <Badge className="bg-linear-to-r from-primary to-accent">
                734 agents
              </Badge>
            </div>
            <Progress value={72} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">
              72% coverage in major cities
            </p>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Ghana</span>
              </div>
              <Badge className="bg-linear-to-r from-primary to-accent">
                569 agents
              </Badge>
            </div>
            <Progress value={68} className="h-2 mb-1" />
            <p className="text-xs text-muted-foreground">
              68% coverage in major cities
            </p>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Quick Actions
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          <Button className="bg-linear-to-r from-primary to-accent">
            <Users className="w-4 h-4 mr-2" />
            Recruit New Agents
          </Button>
          <Button variant="outline">
            <DollarSign className="w-4 h-4 mr-2" />
            Bulk Liquidity Transfer
          </Button>
          <Button variant="outline">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Report
          </Button>
        </div>
      </Card>
    </div>
  );
}
