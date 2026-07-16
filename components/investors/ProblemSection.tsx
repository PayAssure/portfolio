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
    <section id="problem" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="mx-auto">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  )
}
