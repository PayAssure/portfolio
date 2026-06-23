export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="w-full py-16">
      <div className="w-full space-y-4 mb-16">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Supply Chain Ecosystem</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">PayAssure at the Center</h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-12 shadow-lg">
        {/* Central PayAssure */}
        <div className="flex justify-center mb-12">
          <div className="rounded-2xl border-2 border-blue-600 bg-blue-600 text-white p-8 shadow-xl w-full sm:w-64 text-center">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="text-xl font-bold">PayAssure</h3>
            <p className="text-sm text-blue-100 mt-2">Financial Intelligence Engine</p>
          </div>
        </div>

        {/* Four sides */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Manufacturers */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Manufacturers</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Paid instantly on order</li>
              <li>✓ Automatic collection from retailers</li>
              <li>✓ Access to supply chain financing</li>
              <li>✓ Transparent payment tracking</li>
            </ul>
          </div>

          {/* Retailers */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
            <div className="text-3xl mb-3">🏪</div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Retailers</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Trust-based financing offers</li>
              <li>✓ Extended payment terms</li>
              <li>✓ Real-time cash flow visibility</li>
              <li>✓ Supplier performance insights</li>
            </ul>
          </div>

          {/* Banks */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-8">
            <div className="text-3xl mb-3">🏦</div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Banks</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Verified transaction data</li>
              <li>✓ Reduced credit risk</li>
              <li>✓ Automated repayment settlement</li>
              <li>✓ New lending opportunities</li>
            </ul>
          </div>

          {/* Enterprises */}
          <div className="rounded-xl border border-slate-300 bg-slate-100 p-8">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">Large Enterprises</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Unified supply chain visibility</li>
              <li>✓ Automated reconciliation</li>
              <li>✓ Risk monitoring & compliance</li>
              <li>✓ Custom integration support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
