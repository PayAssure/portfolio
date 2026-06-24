const securityItems = [
  { title: 'Data Security', detail: 'AES-256 encryption', color: 'emerald' },
  { title: 'Access Control', detail: 'Role-based permissions', color: 'blue' },
  { title: 'Audit Trails', detail: 'Immutable records', color: 'purple' },
  { title: 'Regulatory Compliance', detail: 'ODPC alignment', color: 'amber' },
  { title: 'Settlement Monitoring', detail: 'Real-time tracking', color: 'rose' },
]

const colorClasses = {
  emerald: 'border-emerald-200 bg-emerald-50',
  blue: 'border-blue-200 bg-blue-50',
  purple: 'border-purple-200 bg-purple-50',
  amber: 'border-amber-200 bg-amber-50',
  rose: 'border-rose-200 bg-rose-50',
}

export default function SecuritySection() {
  return (
    <section id="security" className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white px-4 py-6 sm:p-8 shadow-sm">
        <div className="space-y-4 pb-8 border-b border-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">Enterprise Security</p>
          <h2 className="text-4xl font-bold text-slate-950">Bank-grade controls for payments and data</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {securityItems.map((item) => (
            <div key={item.title} className={`rounded-lg border px-4 py-4 sm:p-6 shadow-sm hover:shadow-md transition ${colorClasses[item.color as keyof typeof colorClasses]}`}>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
