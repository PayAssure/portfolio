const problems = [
  'Manual settlement processes between retailers and suppliers',
  'Poor visibility into receivables, payables and cash positions',
  'High working capital requirements for inventory and payables',
  'Fragmented payment systems across POS, ERP and banking partners',
  'Limited access to embedded finance and trade credit',
  'Expensive reconciliation and error-prone settlement workflows',
]

export default function ProblemSection() {
  return (
    <section id="problem" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[0.95fr_0.9fr] lg:gap-12">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">The Problem</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Enterprise payments are stuck in manual, disconnected processes.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Retailers, suppliers and financial institutions struggle with slow settlement cycles, poor visibility, and fragmented reconciliation. That creates expensive capital requirements and leaves trade finance underutilized.</p>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {problems.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
            <p className="text-sm font-semibold text-slate-900">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
