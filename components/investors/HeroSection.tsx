export default function HeroSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Investor Briefing</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Businesses don't have a payment problem. They have a money allocation problem.</h1>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">PayAssure is building the financial infrastructure that automatically allocates, settles, and reconciles every transaction across Africa's supply chains.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="https://wa.me/254748595539?text=Hello%20Austine%2C%20I%20would%20like%20to%20request%20the%20investor%20deck" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">Request Investor Deck</a>
          <a href="https://wa.me/254748595539?text=Hello%20Austine%2C%20I%20would%20like%20to%20schedule%20a%20meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">Schedule a Meeting</a>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
        <div className="space-y-5 sm:space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Opportunity</p>
            <p className="mt-3 text-2xl font-bold text-slate-950 sm:mt-4 sm:text-3xl">Large, defensible, settlement-first platform</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">TAM</p>
              <p className="mt-4 text-2xl font-semibold text-slate-950">$9B+</p>
              <p className="mt-2 text-sm text-slate-600">Regional supply chain payment and working capital flows across East Africa.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Revenue model</p>
              <p className="mt-4 text-2xl font-semibold text-slate-950">SaaS + fees</p>
              <p className="mt-2 text-sm text-slate-600">Subscription, transaction, settlement and embedded finance revenue.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:rounded-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">Why now</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">Digital payments, ERP adoption, embedded finance, and regulatory momentum are creating the conditions for PayAssure to become the middleware backbone for trade settlement across Africa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
