"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, CreditCard, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and security
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <User className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Profile Information
          </h2>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="firstName" className="text-foreground">
                First Name
              </Label>
              <Input id="firstName" defaultValue="John" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-foreground">
                Last Name
              </Label>
              <Input id="lastName" defaultValue="Doe" className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@example.com"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              defaultValue="+234 801 234 5678"
              className="mt-1.5"
            />
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent">
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Notifications
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div>
              <p className="font-medium text-foreground">Transaction Alerts</p>
              <p className="text-sm text-muted-foreground">
                Get notified for all transactions
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div>
              <p className="font-medium text-foreground">Fraud Alerts</p>
              <p className="text-sm text-muted-foreground">
                Immediate alerts for suspicious activity
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div>
              <p className="font-medium text-foreground">Marketing Updates</p>
              <p className="text-sm text-muted-foreground">
                Receive news and promotions
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div>
              <p className="font-medium text-foreground">Weekly Reports</p>
              <p className="text-sm text-muted-foreground">
                Get weekly financial summaries
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Security</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div>
              <p className="font-medium text-foreground">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div>
              <p className="font-medium text-foreground">Biometric Login</p>
              <p className="text-sm text-muted-foreground">
                Use fingerprint or face ID
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <p className="font-medium text-foreground mb-2">Change Password</p>
            <Button variant="outline" className="w-full bg-transparent">
              Update Password
            </Button>
          </div>
        </div>
      </Card>

      {/* Appearance Settings */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">Appearance</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-secondary/50">
            <p className="font-medium text-foreground mb-3">Theme</p>
            <div className="flex gap-3">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                onClick={() => setTheme("light")}
                className="flex-1"
              >
                <Sun className="w-4 h-4 mr-2" />
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                onClick={() => setTheme("dark")}
                className="flex-1"
              >
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </Button>
              <Button
                variant={theme === "system" ? "default" : "outline"}
                onClick={() => setTheme("system")}
                className="flex-1"
              >
                System
              </Button>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-secondary/50">
            <Label htmlFor="language" className="text-foreground">
              Language
            </Label>
            <select
              id="language"
              className="w-full mt-2 p-2 rounded-md border border-border bg-background text-foreground"
            >
              <option>English</option>
              <option>French</option>
              <option>Swahili</option>
              <option>Hausa</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Payment Methods */}
      <Card className="glass-card p-6 border-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Payment Methods
          </h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border-2 border-primary">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xs font-bold text-white">VISA</span>
              </div>
              <div>
                <p className="font-medium text-foreground">•••• 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/25</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-primary">Primary</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">M-PESA</span>
              </div>
              <div>
                <p className="font-medium text-foreground">+254 712 345 678</p>
                <p className="text-xs text-muted-foreground">Mobile Money</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-transparent">
            Add Payment Method
          </Button>
        </div>
      </Card>
    </div>
  );
}
