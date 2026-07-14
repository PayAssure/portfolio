const moatElements = [
  {
    title: 'Settlement Engine',
    description: 'Proprietary algorithm for real-time, multi-party settlement reconciliation',
  },
  {
    title: 'API Gateway',
    description: 'Unified interface for disparate payment, banking, and ERP systems',
  },
  {
    title: 'Banking Integrations',
    description: 'Deep partnerships and technical integrations with financial institutions',
  },
  {
    title: 'Audit Ledger',
    description: 'Immutable transaction history for regulatory compliance and dispute resolution',
  },
  {
    title: 'Reconciliation Engine',
    description: 'Automated matching and exception handling across all transaction types',
  },
  {
    title: 'Multi-Tenant Architecture',
    description: 'Highly scalable SaaS platform designed for rapid partner onboarding',
  },
]

export default function TechnologyMoatSection() {
  return (
    <section id="technology-moat" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
        <div className="space-y-6">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Competitive Moat</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">Why PayAssure is difficult to replicate.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Our technology and go-to-market approach create sustainable competitive advantages that are hard for competitors to duplicate.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-8">
            {moatElements.map((element, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-950">{element.title}</p>
                    <p className="mt-2 text-sm text-slate-600 leading-6">{element.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:rounded-3xl sm:p-8">
            <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">Barriers to Entry</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
                <span><span className="font-semibold">Banking Relationships:</span> Requires 12-18 months of regulatory and compliance work to establish banking partnerships. We've already begun this process.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
                <span><span className="font-semibold">Domain Expertise:</span> Building a settlement engine requires deep knowledge of financial operations, reconciliation logic, and regulatory requirements.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
                <span><span className="font-semibold">Network Effects:</span> As more retailers, suppliers, and financial institutions join the network, the value of the platform increases for all participants.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="font-bold text-blue-600 flex-shrink-0">✓</span>
                <span><span className="font-semibold">Data Network:</span> Our transaction data and patterns become more valuable over time, enabling better forecasting and risk assessment.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
