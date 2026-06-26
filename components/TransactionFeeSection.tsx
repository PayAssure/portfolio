export default function TransactionFeeSection() {
  return (
    <section id="pricing" className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
      <div className="w-full mx-auto space-y-6 text-slate-900">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">PayAssure Fee</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">A simple 0.8% transaction fee for trusted settlement.</h2>
          <p className="mt-4 text-gray-600 leading-7">
            PayAssure charges a transparent 0.8% fee on transactions, giving businesses a low-cost path to faster settlement, better cash flow, and stronger supplier relationships.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Transparent pricing</p>
            <p className="mt-2 text-sm text-slate-600 leading-6">No hidden costs—only a predictable, low fee that makes it easier to manage working capital.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Faster reconciliation</p>
            <p className="mt-2 text-sm text-slate-600 leading-6">Automated fee processing helps clear transactions faster and reduces manual overhead for finance teams.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Built for trust</p>
            <p className="mt-2 text-sm text-slate-600 leading-6">A low fee keeps the platform accessible while supporting the reliability and security businesses need for settlement operations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
