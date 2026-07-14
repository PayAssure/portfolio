export default function SolutionSection() {
  return (
    <section id="solution" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6 mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Our Solution</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Middleware for settlement orchestration, not another ERP.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">PayAssure sits between retailers, suppliers, ERPs, banks and payment rails to orchestrate every transaction, execute settlement, and continuously reconcile cash flow.</p>
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Architecture</div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl">
              <div className="flex flex-col items-center gap-3 text-center text-xs font-semibold text-slate-700 sm:text-sm">
                <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Retailer ERP</div>
                <span className="text-slate-400">↓</span>
                <div className="w-full rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700">PayAssure Settlement Engine</div>
                <span className="text-slate-400">↓</span>
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Suppliers</div>
                  <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Financial Institutions</div>
                </div>
              </div>
            </div>

          <p className="text-sm leading-7 text-slate-600">PayAssure connects ERP systems, payment providers and financial institutions in a single settlement workflow that is audit-ready and configurable.</p>
        </div>
      </div>
    </section>
  )
}
