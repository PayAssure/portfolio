const progressItems = [
  { status: '✓', item: 'Company incorporated and legally registered' },
  { status: '✓', item: 'Domain and core brand secured' },
  { status: '✓', item: 'Settlement architecture designed and validated' },
  { status: '✓', item: 'Authentication and API security framework completed' },
  { status: '✓', item: 'API gateway architecture designed' },
  { status: '🔄', item: 'Settlement Engine in active development' },
  { status: '🔄', item: 'First pilot retailer securing' },
  { status: '🔄', item: 'Manufacturer partnerships underway' },
]

export default function CurrentProgressSection() {
  return (
    <section id="current-progress" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6 mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Traction & Milestones</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Measurable progress toward product-market fit.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are focused on concrete execution milestones that validate market demand and prepare the platform for scale.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {progressItems.map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-slate-950 flex-shrink-0">{item.status}</span>
              <p className="text-sm leading-6 text-slate-700 flex-1">{item.item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
