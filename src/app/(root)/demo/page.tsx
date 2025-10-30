"use client";

import { VideoDialog } from "@/components/VideoDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Set up your account in under 2 minutes",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Enterprise-level encryption and compliance",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Insights",
      description: "Real-time analytics and predictions",
    },
    {
      icon: Users,
      title: "Seamless Integration",
      description: "Works with your existing tools",
    },
  ];

  const benefits = [
    "Reduce ATM downtime by 40% with predictive maintenance",
    "Approve loans 3x faster with AI credit scoring",
    "Detect fraud in real-time with neural networks",
    "Onboard customers in under 2 minutes",
    "Manage agent liquidity like Uber for cash",
    "Resolve disputes via WhatsApp instantly",
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50 dark:from-orange-950/20 dark:via-transparent dark:to-orange-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
                <Play className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm text-orange-700 dark:text-orange-300">
                  Watch ZenithUp in Action
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up text-orange-900 dark:text-orange-100">
                See the Future of
                <br />
                <span className="bg-linear-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 bg-clip-text text-transparent">
                  African Finance
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-orange-700 dark:text-orange-300 mb-12 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
                Watch how ZenithUp transforms banking, lending, and financial
                operations across Africa with AI-powered intelligence.
              </p>
            </div>

            {/* Video Player */}
            <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-400">
              <div className="absolute -inset-4 bg-linear-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              
              <div className="relative">
                <VideoDialog
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
                  thumbnailAlt="ZenithUp Demo Video"
                  className="w-full"
                />
              </div>

              {/* Video Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "5 min", label: "Demo Length" },
                  { value: "10+", label: "Modules Shown" },
                  { value: "Live", label: "Real-Time Demo" },
                  { value: "HD", label: "Quality" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                Why Choose ZenithUp
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-900 dark:text-orange-100">
                Built for Scale, Designed for Africa
              </h2>
              <p className="text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
                Every feature engineered to solve real African financial
                challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6 hover:scale-105 transition-all group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-orange-700 dark:text-orange-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-24 relative bg-linear-to-b from-background to-orange-50 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <Badge className="mb-4 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                  Demo Highlights
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-900 dark:text-orange-100">
                  What You&apos;ll See in the Demo
                </h2>
                <p className="text-lg text-orange-700 dark:text-orange-300 mb-8">
                  Get a comprehensive walkthrough of all 10 modules and see how
                  they work together to transform your financial operations.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-orange-900 dark:text-orange-100 font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300"
                    >
                      Schedule Live Demo
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Decorative Card */}
              <div className="relative">
                <div className="glass rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-900 dark:text-orange-100">
                          AI-Powered Platform
                        </h3>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          10 Integrated Modules
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { module: "ATM Genius", status: "Active", value: "99.9%" },
                        { module: "CreditSense", status: "Processing", value: "3x" },
                        { module: "FraudShield", status: "Monitoring", value: "Live" },
                        { module: "AgentFlow", status: "Connected", value: "Real-time" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-orange-950/30"
                        >
                          <div>
                            <p className="font-semibold text-orange-900 dark:text-orange-100">
                              {item.module}
                            </p>
                            <p className="text-xs text-orange-600 dark:text-orange-400">
                              {item.status}
                            </p>
                          </div>
                          <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 border-0">
                            {item.value}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-linear-to-br from-orange-100/80 to-orange-200/80 dark:from-orange-900/30 dark:to-orange-800/30 border border-orange-300 dark:border-orange-700">
                      <p className="text-sm text-orange-900 dark:text-orange-100 font-medium">
                        🚀 New: Zeni AI Copilot now available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-linear-to-b from-orange-50 to-background dark:from-orange-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30" />

            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-6" />
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-900 dark:text-orange-100 text-balance">
                Ready to Transform Your Financial Operations?
              </h2>

              <p className="text-xl text-orange-700 dark:text-orange-300 mb-10 max-w-2xl mx-auto text-balance">
                Join thousands of institutions already using ZenithUp to
                revolutionize African finance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 text-lg px-8 h-14"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/80 dark:bg-orange-950/80 backdrop-blur-sm border-orange-300 dark:border-orange-700 hover:bg-orange-100 dark:hover:bg-orange-900/50 text-orange-700 hover:text-orange-900 dark:text-orange-300 text-lg px-8 h-14"
                  >
                    Talk to Sales
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-orange-600 dark:text-orange-400 mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

