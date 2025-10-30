import {
  Cpu,
  Shield,
  TrendingUp,
  Users,
  Zap,
  CreditCard,
  UserCheck,
  Store,
  Radio,
  AlertTriangle,
} from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Cpu,
      title: "ATM Genius",
      description:
        "Predictive maintenance AI that detects failures before they happen. Tesla-style automation for ATM operations.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: CreditCard,
      title: "CreditSense",
      description:
        "Alternative credit scoring using telco, utility, and mobile money data. AI that understands Africans, not paperwork.",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: Store,
      title: "SMEConnect",
      description:
        "Digital marketplace with smart lending. Where every small business gets seen and funded.",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Shield,
      title: "TrustHub",
      description:
        "Real-time dispute resolution through WhatsApp. Turn frustration into transparency.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: AlertTriangle,
      title: "FraudShield",
      description:
        "AI detects suspicious patterns using graph neural networks. Protection that never sleeps.",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "HyperBank",
      description:
        "AI-driven recommendations for saving, investing, spending. Your financial wellness at a glance.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Zap,
      title: "OneClick Onboarding",
      description:
        "Open a bank account like downloading an app. Instant digital onboarding in under 2 minutes.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: UserCheck,
      title: "KYC360",
      description:
        "AI-driven liveness check with OCR. Your identity, verified once, usable everywhere.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Radio,
      title: "AgentFlow",
      description:
        "Live liquidity map with AI demand prediction. Uber-style float sharing for mobile money agents.",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Users,
      title: "RepShield",
      description:
        "AI scans social media for misinformation. PR guardian that fights fake news with real facts.",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative bg-linear-to-b from-background to-orange-50 dark:to-orange-950/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-900 dark:text-orange-100">
            10 Modules. One Ecosystem.
          </h2>
          <p className="text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
            Every feature powered by AI. Every interaction designed for trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
