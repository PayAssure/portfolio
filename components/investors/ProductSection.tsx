const productItems = [
  'Business onboarding and account management',
  'API-first integrations for ERP, payments and banking',
  'Settlement engine with configurable workflows',
  'Payment orchestration and split settlement',
  'Reconciliation and trade finance reporting',
  'Embedded finance enablement for lending and credit',
]

export default function ProductSection() {
  return (
    <section id="product" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Product</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">An API-first settlement platform for enterprise commerce.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">PayAssure combines onboarding, API integrations, orchestration, reconciliation and embedded finance into one operational platform for enterprise customers.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {productItems.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
            <p className="text-sm font-semibold text-slate-900">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
