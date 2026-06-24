export default function TransactionFlowSection() {
  return (
    <section id="transaction-flow" className="w-full py-5">
      <div className="w-full space-y-4 mb-3">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Instant Splits</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">See Money Split in Real-Time</h2>
        <p className="text-lg text-gray-600 max-w-2xl">Every transaction is instantly verified, split, and settled. No delays. No manual reconciliation.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8 sm:px-6 sm:py-12 lg:p-12 shadow-lg">
        <div className="space-y-6">
          {/* Transaction header */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Customer Payment</p>
                <p className="text-3xl font-bold text-slate-950 mt-2">KES 10,000</p>
              </div>
              <div className="text-4xl">💳</div>
            </div>
          </div>

          {/* Processing */}
          <div className="flex justify-center">
            <div className="text-2xl text-slate-400">↓</div>
          </div>

          <div className="rounded-xl bg-blue-600 text-white p-6 shadow-md">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold">PayAssure Processing Engine</p>
            <p className="text-sm mt-2">Verification • Split • Settlement</p>
          </div>

          {/* Results */}
          <div className="flex justify-center">
            <div className="text-2xl text-slate-400">↓</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700 font-semibold">Manufacturer</p>
              <p className="text-2xl font-bold text-emerald-600 mt-3">KES 5,500</p>
              <p className="text-xs text-emerald-600 mt-2">✓ Instant</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-700 font-semibold">Retailer</p>
              <p className="text-2xl font-bold text-blue-600 mt-3">KES 4,420</p>
              <p className="text-xs text-blue-600 mt-2">✓ Verified</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">PayAssure</p>
              <p className="text-2xl font-bold text-amber-600 mt-3">KES 80</p>
              <p className="text-xs text-amber-600 mt-2">✓ Fee</p>
            </div>
          </div>

          {/* Confirmation */}
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
            <p className="text-sm font-semibold text-emerald-700">✓ All settlements complete in 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
