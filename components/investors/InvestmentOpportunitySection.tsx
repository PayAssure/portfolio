const useOfFundsItems = [
  { percentage: '35%', category: 'Engineering', description: 'Product development and platform enhancement' },
  { percentage: '20%', category: 'Banking Integrations', description: 'Partnerships and integration with financial institutions' },
  { percentage: '15%', category: 'Compliance & Regulatory', description: 'Legal, audit, and regulatory framework' },
  { percentage: '15%', category: 'Customer Acquisition', description: 'Go-to-market and pilot execution' },
  { percentage: '10%', category: 'Infrastructure', description: 'Cloud, security and platform operations' },
  { percentage: '5%', category: 'Operations', description: 'Administration and back-office support' },
]

export default function InvestmentOpportunitySection() {
  return (
    <section id="investment-opportunity" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="rounded-[1.5rem] border border-slate-200 bg-blue-600/5 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Funding Ask</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">We're raising KES 8 Million for our seed round.</h2>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">This capital will accelerate product development, banking integrations, compliance framework, pilot execution and market expansion across East Africa.</p>
              <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4 sm:p-5">
                <p className="text-sm font-semibold text-slate-900">Target Round</p>
                <p className="mt-2 text-lg font-bold text-blue-600">KES 8 Million Seed Round</p>
                <p className="mt-3 text-sm text-slate-600">Equity available for strategic investors. Details available during due diligence.</p>
              </div>
            </div>
            <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-6">
              {useOfFundsItems.map((item) => (
                <div key={item.category} className="flex items-start justify-between border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{item.category}</p>
                    <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                  </div>
                  <p className="ml-3 text-lg font-bold text-blue-600 whitespace-nowrap">{item.percentage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Investor Profile</p>
          <p className="mt-4 text-base font-semibold text-slate-950 sm:text-lg">We welcome strategic investors and partners who:</p>
          <ul className="mt-4 space-y-2 sm:space-y-3">
            <li className="flex items-start gap-3 text-sm text-slate-600">
              <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
              <span>Understand settlement infrastructure and fintech in African commerce</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600">
              <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
              <span>Are positioned in banking, payments, ERP or supply chain ecosystems</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600">
              <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
              <span>Can provide distribution, partnership or technical support</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600">
              <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
              <span>Are committed to long-term growth in East African markets</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
