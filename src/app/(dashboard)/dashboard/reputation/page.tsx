import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Award, TrendingUp, Users, Shield } from "lucide-react";

export default function ReputationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Reputation Management
        </h1>
        <p className="text-muted-foreground">
          Build trust through verified transactions and community endorsements
        </p>
      </div>

      {/* Reputation Score */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Your Reputation Score
            </h2>
            <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-6 h-6 text-white fill-white" />
                  <span className="text-4xl font-bold text-white">4.8</span>
                </div>
                <p className="text-xs text-white/80">out of 5.0</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Excellent Standing
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              Top 5% in your region
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
                <span className="text-foreground">
                  Transaction Success Rate
                </span>
                <span className="font-semibold text-foreground">98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Community Endorsements</span>
                <span className="font-semibold text-foreground">156</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Response Time</span>
                <span className="font-semibold text-foreground">2.3 hrs</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">Dispute Resolution</span>
                <span className="font-semibold text-foreground">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </div>
        </Card>
      </div>

      {/* Badges & Achievements */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Badges & Achievements
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Verified Seller
            </h3>
            <p className="text-xs text-muted-foreground">
              100+ successful transactions
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Community Leader
            </h3>
            <p className="text-xs text-muted-foreground">
              50+ endorsements received
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50 border-2 border-primary text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Top Rated</h3>
            <p className="text-xs text-muted-foreground">
              4.5+ rating for 6 months
            </p>
          </div>
        </div>
      </Card>

      {/* Recent Reviews */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Recent Reviews
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  AM
                </div>
                <div>
                  <p className="font-medium text-foreground">Amina Mohammed</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            <p className="text-sm text-foreground">
              Excellent service! Fast delivery and product exactly as described.
              Highly recommended seller.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  KO
                </div>
                <div>
                  <p className="font-medium text-foreground">Kwame Osei</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-primary fill-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">1 week ago</span>
            </div>
            <p className="text-sm text-foreground">
              Very professional and trustworthy. Great communication throughout
              the transaction.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                  FN
                </div>
                <div>
                  <p className="font-medium text-foreground">Fatima Ndiaye</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-primary fill-primary"
                      />
                    ))}
                    <Star className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2 weeks ago</span>
            </div>
            <p className="text-sm text-foreground">
              Good experience overall. Delivery took a bit longer than expected
              but product quality is great.
            </p>
          </div>
        </div>
      </Card>

      {/* Trust Network */}
      <Card className="glass-card p-6 border-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Your Trust Network
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">Connections</span>
              <Badge className="bg-gradient-to-r from-primary to-accent">
                234
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Verified community members
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">
                Endorsements Given
              </span>
              <Badge className="bg-gradient-to-r from-primary to-accent">
                89
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              You&apos;ve endorsed others
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">
                Endorsements Received
              </span>
              <Badge className="bg-gradient-to-r from-primary to-accent">
                156
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">Others trust you</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground">Trust Score</span>
              <Badge className="bg-gradient-to-r from-primary to-accent">
                Elite
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">Top tier reputation</p>
          </div>
        </div>
        <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent">
          Expand Your Network
        </Button>
      </Card>
    </div>
  );
}
