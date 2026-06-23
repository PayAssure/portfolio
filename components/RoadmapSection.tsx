const roadmap = [
  { phase: 'Phase 1', title: 'Core Settlement Platform', color: 'blue' },
  { phase: 'Phase 2', title: 'Trust Scoring', color: 'emerald' },
  { phase: 'Phase 3', title: 'Supply Chain Finance', color: 'amber' },
  { phase: 'Phase 4', title: 'Regional Expansion', color: 'purple' },
  { phase: 'Phase 5', title: 'Credit Marketplace', color: 'rose' },
]

const colorClasses = {
  blue: 'border-blue-200 bg-blue-50',
  emerald: 'border-emerald-200 bg-emerald-50',
  amber: 'border-amber-200 bg-amber-50',
  purple: 'border-purple-200 bg-purple-50',
  rose: 'border-rose-200 bg-rose-50',
}

const phaseColorText = {
  blue: 'text-blue-600',
  emerald: 'text-emerald-600',
  amber: 'text-amber-600',
  purple: 'text-purple-600',
  rose: 'text-rose-600',
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4 pb-8 border-b border-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-semibold">Roadmap</p>
          <h2 className="text-4xl font-bold text-slate-950">A clear growth path from launch to market expansion</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {roadmap.map((item) => (
            <div key={item.phase} className={`rounded-lg border p-6 shadow-sm hover:shadow-md transition ${colorClasses[item.color as keyof typeof colorClasses]}`}>
              <p className={`text-sm uppercase tracking-[0.28em] font-semibold ${phaseColorText[item.color as keyof typeof phaseColorText]}`}>{item.phase}</p>
              <p className="mt-4 text-lg font-bold text-slate-950">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
