import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-24 relative bg-linear-to-b from-orange-50 to-background dark:from-orange-950/20 dark:to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-orange-950/80 backdrop-blur-sm mb-6 border border-orange-200 dark:border-orange-800">
              <MessageSquare className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm text-orange-700 dark:text-orange-300">
                Meet Zeni - Your AI Financial Copilot
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-900 dark:text-orange-100 text-balance">
              Ready to Transform African Finance?
            </h2>

            <p className="text-xl text-orange-700 dark:text-orange-300 mb-10 max-w-2xl mx-auto text-balance">
              Join thousands of users, SMEs, and institutions building the
              future of financial inclusion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 text-lg px-8 h-14"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/80 dark:bg-orange-950/80 backdrop-blur-sm border-orange-300 dark:border-orange-700 hover:bg-orange-20 dark:hover:bg-orange-900/50 text-orange-700 hover:text-orange-900 dark:text-orange-300 text-lg px-8 h-14"
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
