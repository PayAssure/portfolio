export default function SolutionSection() {
  return (
    <section id="solution" className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white px-4 py-8 sm:p-8 shadow-sm">
        <div className="space-y-4 pb-8 border-b border-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">One Platform. Three Layers.</p>
          <h2 className="text-3xl font-bold text-slate-950">How PayAssure Works</h2>
          <p className="text-gray-600 max-w-3xl">A unified platform that protects manufacturers, retailers, and financiers through instant settlement, cash float guarantees, and finance automation.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-emerald-50 px-4 py-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold">Layer 1</p>
            <h3 className="mt-4 text-2xl font-bold text-slate-950">Instant Digital Split</h3>
            <p className="mt-4 text-gray-600">When customers pay digitally using M-Pesa, cards, or QR payments, PayAssure automatically splits revenue. Manufacturer receives payment immediately, with no waiting, no manual reconciliation, and no credit risk.</p>
          </div>
          <div className="rounded-3xl bg-blue-50 px-4 py-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-700 font-semibold">Layer 2</p>
            <h3 className="mt-4 text-2xl font-bold text-slate-950">Daily Float Guarantee</h3>
            <p className="mt-4 text-gray-600">For cash sales, the retailer maintains daily float while PayAssure tracks transactions and runs end-of-day settlement automatically. Manufacturers still get paid even when customers pay cash.</p>
          </div>
          <div className="rounded-3xl bg-amber-50 px-4 py-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">Layer 3</p>
            <h3 className="mt-4 text-2xl font-bold text-slate-950">Supply Chain Finance</h3>
            <p className="mt-4 text-gray-600">Banks finance inventory, manufacturers are paid on dispatch, retailers receive stock without traditional collateral, and PayAssure automates collection and repayment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
