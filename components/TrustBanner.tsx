const trustHighlights = [
  'Automated Settlements',
  'Supply Chain Financing',
  'Intelligent Reconciliation',
  'Retailer Trust Scores',
  'Secure Payment Infrastructure',
]

export default function TrustBanner() {
  return (
    <section className="w-full rounded-xl bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 p-10 shadow-sm">
      <div className="w-full flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Trusted by High-Volume Supply Chains</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Manufacturers and retailers depend on PayAssure</h2>
        </div>
        <p className="w-full text-gray-600">A platform built to automate the financial rails behind inventory, payments, credit, and reconciliation.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {trustHighlights.map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-center text-sm font-semibold text-slate-900 shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
