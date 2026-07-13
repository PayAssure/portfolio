const phases = [
  { phase: 'Phase 1', items: ['Manufacturers', 'Retailers', 'Wholesalers'] },
  { phase: 'Phase 2', items: ['ERP providers', 'POS vendors'] },
  { phase: 'Phase 3', items: ['Banks', 'SACCOs', 'Digital lenders'] },
]

export default function GoToMarketSection() {
  return (
    <section id="go-to-market" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[0.9fr_0.95fr] lg:gap-12">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Go-to-Market</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">A staged path from pilots to ecosystem leadership.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We begin with enterprise pilots, then expand through ERP partners and financial institutions to build a settlement network that becomes the default infrastructure layer.</p>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {phases.map((block) => (
          <div key={block.phase} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold">{block.phase}</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
