const problemCards = [
  'Delayed Payments',
  'Manual Reconciliation',
  'Credit Risk',
  'Poor Visibility',
  'Financing Barriers',
]

export default function ProblemSection() {
  return (
    <section id="problem" className="w-full rounded-3xl bg-orange-200 p-10 shadow-sm">
      <div className="w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-600 font-semibold">The Crisis</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-950">30–90 day payment delays destroy supply chains</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Retailers collect money immediately. Manufacturers bear all the financial risk. This creates payment delays, cash flow shortages, lost revenue, and limited access to financing.</p>
      </div>
      <div className="mt-10 grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {problemCards.map((label) => (
          <div key={label} className="rounded-3xl border border-orange-200 bg-white p-6 text-slate-950 shadow-lg shadow-orange-100/80">
            <div className="text-sm uppercase tracking-[0.3em] text-orange-500">Issue</div>
            <p className="mt-4 text-xl font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
