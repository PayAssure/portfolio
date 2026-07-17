export default function RetailCreditCrisisSection() {
  return (
    <section id="retail-credit-crisis" className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
      <div className="w-full mx-auto space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Retail Credit Crisis</p>
          <h2 className="text-4xl font-bold text-slate-950">The Cost of Delayed Payments</h2>
          <p className="text-gray-600 leading-8">
            Major retail failures in Kenya exposed the financial risks of inefficient settlement and credit management. When large retailers collapsed, manufacturers and suppliers were left waiting for billions of shillings in unpaid invoices, disrupting cash flow across the supply chain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">KSh 30 - 35.8B</h3>
            <p className="mt-3 text-sm text-slate-600 leading-6">Estimated debt linked to the Nakumatt collapse, affecting suppliers, lenders, and other stakeholders.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">KSh 40B+</h3>
            <p className="mt-3 text-sm text-slate-600 leading-6">Estimated supplier exposure from delayed and unpaid trade credit across Kenya's retail sector.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">Why It Matters</h3>
            <p className="mt-3 text-sm text-slate-600 leading-6">Without real-time visibility into settlements and receivables, businesses face increased financial risk, reduced liquidity, and slower growth.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
          <p className="text-base leading-7">
            <span className="font-semibold">Kenya's retail sector has experienced billions of shillings in supplier losses due to delayed payments and retail failures.</span> PayAssure is building the infrastructure to improve settlement transparency, reduce reconciliation delays, and strengthen trust across the supply chain.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950">PayAssure helps businesses reduce settlement risk.</h3>
          <p className="mt-4 text-slate-600 leading-7">
            Our platform gives manufacturers, distributors, and retailers a secure way to automate collections, reconcile payments, and improve visibility into outstanding balances—helping businesses make faster, more informed financial decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
