export default function MetricsSection() {
  const metrics = [
    { number: '95%', label: 'Settlement Accuracy', icon: '✓' },
    { number: '24H', label: 'Settlement SLA', icon: '⏱' },
    { number: '3', label: 'Payment Layers', icon: '📊' },
    { number: '100%', label: 'Transaction Visibility', icon: '👁' },
  ]

  return (
    <section id="metrics" className="w-full py-16">
      <div className="w-full space-y-4 mb-16">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Enterprise Grade</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">Built for Billions in Transactions</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">{metric.icon}</div>
            <div className="text-5xl lg:text-6xl font-bold text-blue-600 mb-2">{metric.number}</div>
            <p className="text-sm font-semibold text-slate-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
