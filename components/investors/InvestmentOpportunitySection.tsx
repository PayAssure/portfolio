export default function InvestmentOpportunitySection() {
  return (
    <section id="investment-opportunity" className="mt-16 rounded-[1.5rem] border border-slate-200 bg-blue-600/5 p-6 shadow-sm sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:mt-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Investment Opportunity</p>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Engaging strategic investors and partners for the next stage of growth.</h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are actively engaging investors who understand the value of settlement infrastructure and shared finance networks across African commerce.</p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
          <div>
            <p className="text-sm font-semibold text-slate-900">Stage</p>
            <p className="mt-1 text-sm leading-7 text-slate-600">Pre-seed / seed stage, building the first commercial pilots with enterprise buyers.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Use of funds</p>
            <p className="mt-1 text-sm leading-7 text-slate-600">Product development, partner integrations, pilot execution, and go-to-market expansion.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Investor profile</p>
            <p className="mt-1 text-sm leading-7 text-slate-600">Strategic investors and partners that support infrastructure, fintech, banking, or supply chain growth in East Africa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
