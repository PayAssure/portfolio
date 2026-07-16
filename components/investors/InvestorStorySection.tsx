export default function InvestorStorySection() {
  return (
    <section id="investor-story" className="w-full py-12">
      <div className="mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950 text-center">The Problem We Solve</h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Across Africa, millions of businesses collect payments every day. The issue isn't payment acceptance — it begins after the payment is received. Retailers collect funds intended for suppliers, distributors, commissions, and taxes into a single account. From there, manual decisions about who gets paid create delayed settlements, reconciliation costs, supplier disputes, and recurring working capital shortages.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-slate-900 text-center">Our Thesis</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The next generation of financial infrastructure won't simply move money — it will intelligently allocate it. If funds are distributed correctly at the moment of payment, businesses reconcile less, suppliers are paid faster, and dependence on short-term lending reduces.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-slate-900 text-center">Our Platform</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            PayAssure sits between payment acceptance and settlement. Every transaction is authenticated, business rules determine allocation, the settlement engine distributes payments, and the ledger records every movement. Reconciliation is generated automatically — programmable financial infrastructure for African commerce.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-slate-900 text-center">Vision</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Today's systems answer "Was the payment successful?" PayAssure answers "Now that the payment has arrived, where should the money go?" That infrastructure layer is what we're building.
          </p>

          <p className="mt-6 text-sm text-slate-500 font-semibold text-center">North Star: Businesses don't struggle because customers don't pay — they struggle because money isn't allocated correctly after payment. PayAssure automates that allocation.</p>
        </div>
      </div>
    </section>
  )
}
