const modelItems = [
  { title: 'SaaS subscriptions', description: 'Platform access and customer onboarding for retailers, suppliers and ERP partners.' },
  { title: 'Transaction fees', description: 'Per-transaction fees for payment orchestration, reconciliation and settlement.' },
  { title: 'Settlement processing fees', description: 'Fees for settlement routing, account-to-account transfers and financial institution flows.' },
  { title: 'API usage', description: 'Usage fees for high-volume integrations and data services.' },
  { title: 'Premium analytics', description: 'Advanced trade finance reporting, risk monitoring and cash-flow intelligence.' },
  { title: 'Embedded finance revenue sharing', description: 'Partner share from lending, credit and cash management services embedded in the workflow.' },
]

export default function BusinessModelSection() {
  return (
    <section id="business-model" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6 mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Business Model</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Recurring platform revenue plus transaction and financial services fees.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Our revenue mix is engineered for predictable growth, with subscription income and high-margin settlement fees supporting expansion into embedded finance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modelItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
