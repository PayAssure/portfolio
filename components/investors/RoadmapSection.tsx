const roadmapBlocks = [
  { quarter: 'Q3', items: ['Pilot launch', 'Early ERP integrations'] },
  { quarter: 'Q4', items: ['Retailer and supplier onboarding', 'Payment partner pilots'] },
  { quarter: 'Q1', items: ['Banking integrations', 'Settlement automation live'] },
  { quarter: 'Q2', items: ['Embedded lending rollout', 'Regional expansion planning'] },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Roadmap</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Quarterly milestones that move the platform forward.</h2>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 mt-6 sm:mt-8">
          {roadmapBlocks.map((block) => (
            <div key={block.quarter} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-blue-600">{block.quarter}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {block.items.map((item) => (<li key={item}>• {item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
