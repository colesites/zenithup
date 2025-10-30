import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50 dark:from-orange-950/20 dark:via-transparent dark:to-orange-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm text-orange-700 dark:text-orange-300">
              Powered by AI • Built for Africa
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up text-orange-900 dark:text-orange-100">
            Africa&apos;s Intelligent
            <br />
            <span className="bg-linear-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 bg-clip-text text-transparent">
              Financial OS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-orange-700 dark:text-orange-300 mb-12 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
            One platform. Infinite possibilities. Transform how Africa banks,
            lends, and grows with AI-powered financial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 text-lg px-8 h-14"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="glass border-orange-300 dark:border-orange-700 hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-600 dark:hover:bg-orange-950/50 text-orange-700 dark:text-orange-300 text-lg px-8 h-14 bg-transparent"
              >
                Watch Demo
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "10+", label: "Integrated Modules" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "<2min", label: "Onboarding Time" },
              { value: "AI-First", label: "Intelligence" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${600 + i * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
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
    </section>
  );
}
