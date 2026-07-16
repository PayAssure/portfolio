export default function StoryBehindPayassure() {
  return (
    <section id="story-behind-payassure" className="w-full py-8">
      <div className="mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">The Story Behind PayAssure</p>
          <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl text-center">Why this company needs to exist</h2>

          <div className="prose prose-sm max-w-none text-slate-700 mt-6">
            <p>
              Every day, businesses across Africa receive millions of customer payments. Yet many of these same businesses struggle to pay suppliers on time, maintain healthy cash flow, and grow without relying on expensive short-term financing.
            </p>

            <p>
              The challenge isn't always a lack of revenue. It's what happens after a payment is received. Customer payments intended for suppliers, operating expenses, inventory, and business growth are often pooled into a single account. As daily expenses accumulate, businesses lose visibility into what belongs to whom. By the time suppliers expect payment, the funds have often been used elsewhere.
            </p>

            <p>
              The result is delayed settlements, strained supplier relationships, manual reconciliation, cash flow pressure, and an increasing dependence on working capital loans. Financial institutions have responded by creating more lending products to finance these gaps.
            </p>

            <p className="font-semibold">
              We believe there is a better approach. Instead of financing broken payment flows, businesses should have infrastructure that allocates money correctly from the moment a customer pays. That's why we built PayAssure.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <h3 className="text-xl font-semibold text-cyan-700">Our Thesis</h3>
                <p className="mt-3 text-sm text-slate-700">
                  The next generation of financial infrastructure won't simply move money — it will intelligently allocate it. If funds are distributed correctly at the moment of payment, businesses reconcile less, suppliers are paid faster, and dependence on short-term lending reduces.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <h3 className="text-xl font-semibold text-blue-700">Our Platform</h3>
                <p className="mt-3 text-sm text-slate-700">
                  PayAssure sits between payment acceptance and settlement. Every transaction is authenticated, business rules determine allocation, the settlement engine distributes payments, and the ledger records every movement. Reconciliation is generated automatically — programmable financial infrastructure for African commerce.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <h3 className="text-xl font-semibold text-emerald-700">Vision</h3>
                <p className="mt-3 text-sm text-slate-700">
                  Today's systems answer "Was the payment successful?" PayAssure answers "Now that the payment has arrived, where should the money go?" That infrastructure layer is what we're building.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-500 font-semibold text-center">North Star: Businesses don't struggle because customers don't pay — they struggle because money isn't allocated correctly after payment. PayAssure automates that allocation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
