import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  FileText,
  Lock,
  Eye,
  Award,
} from "lucide-react";

export default function TrustCenterPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Trust & Escrow Center
        </h1>
        <p className="text-muted-foreground">
          Secure transactions with blockchain-backed escrow and dispute
          resolution
        </p>
      </div>

      {/* Trust Score */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Your Trust Score
            </h2>
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <div className="text-center">
                <span className="text-4xl font-bold text-white">A+</span>
                <p className="text-xs text-white/80">Excellent</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Verified Trusted Seller
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              Top 2% in your category
            </p>
          </div>
        </Card>

        <Card className="glass-card p-6 border-2">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Trust Metrics
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Successful Transactions</span>
                <span className="font-semibold text-foreground">287/289</span>
              </div>
              <Progress value={99.3} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Dispute Resolution Rate</span>
                <span className="font-semibold text-foreground">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">On-Time Delivery</span>
                <span className="font-semibold text-foreground">96%</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Customer Satisfaction</span>
                <span className="font-semibold text-foreground">4.9/5.0</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
          </div>
        </Card>
      </div>

      {/* Active Escrows */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Active Escrow Transactions
          </h2>
          <Badge className="bg-gradient-to-r from-primary to-accent">
            4 Active
          </Badge>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary/50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Solar Panel Installation Kit
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Transaction #ESC-8472
                  </p>
                </div>
              </div>
              <Badge className="bg-green-500">In Progress</Badge>
            </div>
            <div className="grid gap-3 md:grid-cols-3 mb-3">
              <div className="text-sm">
                <p className="text-muted-foreground">Amount</p>
                <p className="font-semibold text-foreground">$2,450</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Buyer</p>
                <p className="font-semibold text-foreground">James Mwangi</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Status</p>
                <p className="font-semibold text-foreground">
                  Awaiting Delivery
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-accent"
              >
                Confirm Shipment
              </Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Agricultural Seeds Package
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Transaction #ESC-8391
                  </p>
                </div>
              </div>
              <Badge className="bg-blue-500">Pending Release</Badge>
            </div>
            <div className="grid gap-3 md:grid-cols-3 mb-3">
              <div className="text-sm">
                <p className="text-muted-foreground">Amount</p>
                <p className="font-semibold text-foreground">$890</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Buyer</p>
                <p className="font-semibold text-foreground">Fatima Diop</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Status</p>
                <p className="font-semibold text-foreground">
                  Delivered - Awaiting Confirmation
                </p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="w-full bg-transparent"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>

      {/* Dispute Resolution */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Dispute Resolution
          </h2>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-green-500/10 border-2 border-green-500/50">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-foreground">
                    Dispute #DIS-2847 - Resolved
                  </p>
                  <Badge className="text-xs bg-green-500">Closed</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Product quality concern • Resolved in favor of buyer • Refund
                  processed
                </p>
                <p className="text-xs text-muted-foreground">
                  Resolved on March 18, 2024
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50 text-center py-8">
            <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No active disputes</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              Excellent track record!
            </p>
          </div>
        </div>
      </Card>

      {/* Trust Badges */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Your Trust Badges
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Verified Identity
            </h3>
            <p className="text-xs text-muted-foreground">
              KYC & biometric verified
            </p>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Trusted Seller
            </h3>
            <p className="text-xs text-muted-foreground">
              100+ successful transactions
            </p>
          </div>

          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Elite Status</h3>
            <p className="text-xs text-muted-foreground">
              Top 5% in your region
            </p>
          </div>
        </div>
      </Card>

      {/* Blockchain Verification */}
      <Card className="glass-card p-6 border-2 border-primary/50">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <Eye className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">
              Blockchain-Backed Security
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              All escrow transactions are recorded on an immutable blockchain
              ledger, ensuring complete transparency and security. Your
              transaction history is permanently verified and cannot be altered.
            </p>
            <Button variant="outline" size="sm">
              <FileText className="w-3 h-3 mr-2" />
              View Transaction History
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
