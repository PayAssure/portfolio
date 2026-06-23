const intelligenceItems = [
  { title: 'Trust Scores', detail: 'A score built from payment history, behaviour and risk patterns.', color: 'blue' },
  { title: 'Reliability Scoring', detail: 'Operational reliability backed by real-time data.', color: 'emerald' },
  { title: 'Risk Monitoring', detail: 'Alerts for anomalies, delays, and payment gaps.', color: 'amber' },
  { title: 'Supply Chain Health Index', detail: 'A composite view of liquidity, inventory, and trust.', color: 'purple' },
  { title: 'Revenue-Based Financing', detail: 'Financing offers that reflect actual revenue performance.', color: 'rose' },
]

const colorClasses = {
  blue: 'border-blue-200 bg-blue-50',
  emerald: 'border-emerald-200 bg-emerald-50',
  amber: 'border-amber-200 bg-amber-50',
  purple: 'border-purple-200 bg-purple-50',
  rose: 'border-rose-200 bg-rose-50',
}

export default function TrustIntelligenceSection() {
  return (
    <section id="intelligence" className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4 pb-8 border-b border-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Supply Chain Intelligence</p>
          <h2 className="text-4xl font-bold text-slate-950">PayAssure creates a digital financial identity for your business</h2>
          <p className="text-gray-600">A unique trust layer that turns transaction data into credit intelligence, risk monitoring, and supply chain health insights.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {intelligenceItems.map((item) => (
            <div key={item.title} className={`rounded-lg border p-6 text-slate-900 shadow-sm hover:shadow-md transition ${colorClasses[item.color as keyof typeof colorClasses]}`}>
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="mt-3 text-xs text-gray-600 leading-5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
