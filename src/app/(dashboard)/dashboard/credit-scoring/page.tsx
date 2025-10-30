import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function CreditScoringPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Alternative Credit Scoring
        </h1>
        <p className="text-muted-foreground">
          AI-powered creditworthiness assessment using alternative data
        </p>
      </div>

      {/* Credit Score Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Your Credit Score
            </h2>
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <span className="text-4xl font-bold text-white">750</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Excellent Credit
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              +12 points this month
            </p>
          </div>
        </Card>

        <Card className="glass-card p-6 border-2">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Score Breakdown
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Payment History</span>
                <span className="font-semibold text-foreground">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Transaction Patterns</span>
                <span className="font-semibold text-foreground">88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Social Trust Score</span>
                <span className="font-semibold text-foreground">82%</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Mobile Money Activity</span>
                <span className="font-semibold text-foreground">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </div>
        </Card>
      </div>

      {/* Loan Eligibility */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Loan Eligibility
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-foreground">
                Personal Loan
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">$5,000</p>
            <p className="text-xs text-muted-foreground">
              Up to 12 months at 8% APR
            </p>
            <Button className="w-full mt-3 bg-gradient-to-r from-primary to-accent">
              Apply Now
            </Button>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-foreground">
                Business Loan
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">$15,000</p>
            <p className="text-xs text-muted-foreground">
              Up to 24 months at 10% APR
            </p>
            <Button className="w-full mt-3 bg-gradient-to-r from-primary to-accent">
              Apply Now
            </Button>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border border-border opacity-60">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold text-foreground">
                Premium Loan
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground mb-1">$50,000</p>
            <p className="text-xs text-muted-foreground">
              Requires 800+ credit score
            </p>
            <Button
              className="w-full mt-3 bg-transparent"
              variant="outline"
              disabled
            >
              Not Eligible
            </Button>
          </div>
        </div>
      </Card>

      {/* Improvement Tips */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Ways to Improve Your Score
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                Increase mobile money transactions
              </p>
              <p className="text-sm text-muted-foreground">
                Regular activity shows financial stability
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                Build your social trust network
              </p>
              <p className="text-sm text-muted-foreground">
                Connect with verified community members
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-foreground">
                Maintain consistent payment patterns
              </p>
              <p className="text-sm text-muted-foreground">
                On-time payments boost your score significantly
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
