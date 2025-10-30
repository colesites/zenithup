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
import Link from "next/link";

export function ModuleGrid() {
  const modules = [
    {
      icon: Cpu,
      title: "ATM Genius",
      description: "Monitor & optimize ATM operations",
      href: "/dashboard/atm-optimization",
      color: "from-blue-500 to-cyan-500",
      stats: "98.5% Uptime",
    },
    {
      icon: CreditCard,
      title: "CreditSense",
      description: "Alternative credit scoring",
      href: "/dashboard/credit-scoring",
      color: "from-emerald-500 to-teal-500",
      stats: "1,234 Scores Today",
    },
    {
      icon: Store,
      title: "SMEConnect",
      description: "Marketplace & smart lending",
      href: "/dashboard/marketplace",
      color: "from-purple-500 to-pink-500",
      stats: "456 Active Sellers",
    },
    {
      icon: Shield,
      title: "TrustHub",
      description: "Dispute resolution center",
      href: "/dashboard/trust-center",
      color: "from-orange-500 to-red-500",
      stats: "23 Open Cases",
    },
    {
      icon: AlertTriangle,
      title: "FraudShield",
      description: "Real-time fraud detection",
      href: "/dashboard/fraud-detection",
      color: "from-red-500 to-rose-500",
      stats: "5 Alerts Today",
    },
    {
      icon: TrendingUp,
      title: "HyperBank",
      description: "Personalized banking insights",
      href: "/dashboard/banking-insights",
      color: "from-cyan-500 to-blue-500",
      stats: "$12.5K Balance",
    },
    {
      icon: Zap,
      title: "OneClick Onboarding",
      description: "Instant account creation",
      href: "/dashboard/onboarding",
      color: "from-yellow-500 to-orange-500",
      stats: "89 New Users",
    },
    {
      icon: UserCheck,
      title: "KYC360",
      description: "Identity verification",
      href: "/dashboard/kyc",
      color: "from-indigo-500 to-purple-500",
      stats: "156 Verified",
    },
    {
      icon: Radio,
      title: "AgentFlow",
      description: "Liquidity optimization",
      href: "/dashboard/agent-network",
      color: "from-green-500 to-emerald-500",
      stats: "234 Agents Online",
    },
    {
      icon: Users,
      title: "RepShield",
      description: "Reputation management",
      href: "/dashboard/reputation",
      color: "from-pink-500 to-rose-500",
      stats: "12 Mentions",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {modules.map((module, i) => {
        const Icon = module.icon;
        return (
          <Link
            key={i}
            href={module.href}
            className="glass rounded-2xl p-6 hover:scale-105 transition-all group cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-linear-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {module.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{module.description}</p>
            <div className="text-accent font-semibold text-sm">
              {module.stats}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
