export function StatsSection() {
  const stats = [
    {
      company: "Zenith Bank",
      metric: "40% reduction",
      description: "in ATM downtime",
    },
    {
      company: "SME Partners",
      metric: "3x faster",
      description: "loan approvals",
    },
    {
      company: "Mobile Agents",
      metric: "85% improvement",
      description: "in liquidity management",
    },
    {
      company: "Customers",
      metric: "99.2% satisfaction",
      description: "trust & resolution rate",
    },
  ]

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-900 dark:text-orange-100">
            Trusted by Africa&apos;s Financial Leaders
          </h2>
          <p className="text-xl text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
            Real impact. Real results. Real transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-sm text-orange-600 dark:text-orange-400 mb-3">{stat.company}</div>
              <div className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-2">{stat.metric}</div>
              <div className="text-orange-700 dark:text-orange-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
