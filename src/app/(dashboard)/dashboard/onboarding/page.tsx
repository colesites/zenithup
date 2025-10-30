import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Clock,
  FileText,
  Camera,
  CreditCard,
  Shield,
} from "lucide-react";

export default function OnboardingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Digital Onboarding
        </h1>
        <p className="text-muted-foreground">
          Complete your profile setup in minutes with our AI-powered
          verification
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Onboarding Progress
          </h2>
          <span className="text-sm font-semibold text-primary">
            75% Complete
          </span>
        </div>
        <Progress value={75} className="h-3 mb-2" />
        <p className="text-sm text-muted-foreground">3 of 4 steps completed</p>
      </Card>

      {/* Onboarding Steps */}
      <div className="space-y-4">
        {/* Step 1 - Completed */}
        <Card className="glass-card p-6 border-2 border-green-500/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-500/20">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Personal Information
                </h3>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Completed
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Basic details including name, date of birth, and contact
                information
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>Verified on March 15, 2024</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 2 - Completed */}
        <Card className="glass-card p-6 border-2 border-green-500/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-500/20">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Document Upload
                </h3>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Completed
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Government-issued ID and proof of address documents
              </p>
              <div className="grid gap-2 md:grid-cols-2 mb-3">
                <div className="flex items-center gap-2 p-2 rounded bg-secondary/50">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">
                    National ID - Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-secondary/50">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">
                    Utility Bill - Verified
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>Verified on March 16, 2024</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 3 - Completed */}
        <Card className="glass-card p-6 border-2 border-green-500/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-500/20">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Biometric Verification
                </h3>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Completed
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Facial recognition and liveness detection for enhanced security
              </p>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 mb-3">
                <Camera className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Face Match: 98.5%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Liveness check passed
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>Verified on March 17, 2024</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 4 - In Progress */}
        <Card className="glass-card p-6 border-2 border-primary">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Payment Setup
                </h3>
                <span className="text-xs font-semibold text-primary">
                  In Progress
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Link your bank account or mobile money wallet to start
                transacting
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border-2 border-dashed border-border">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      Bank Account
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Connect your bank for transfers
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border-2 border-dashed border-border">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      Mobile Money
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Link M-Pesa or other wallets
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Connect
                  </Button>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent">
                Complete Payment Setup
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Security Notice */}
      <Card className="glass-card p-6 border-2 border-primary/50">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Your Data is Secure
            </h3>
            <p className="text-sm text-muted-foreground">
              All information is encrypted and stored securely. We use
              bank-level security protocols and never share your data without
              permission. Your documents are automatically deleted after
              verification.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
