export default function Hero() {
  return (
    <section className="mt-7 grid w-full items-center gap-8 py-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-start xl:gap-12">
      <div className="w-full space-y-6 xl:space-y-8">
        <div className="w-full space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 sm:text-sm sm:tracking-[0.32em]">Supply Chain Financial Infrastructure</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">PayAssure is a platform that automates settlements, reconciliation, and supply chain financing.</h1>
          <p className="max-w-lg text-base leading-7 text-gray-600 xl:text-lg xl:leading-8">We connect manufacturers, retailers, financial institutions, and payment providers to ensure faster settlements, greater financial visibility, and more reliable supply chains.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 xl:px-8 xl:py-4 xl:text-base">Talk To Us</a>
          <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 xl:px-8 xl:py-4 xl:text-base">Explore The Platform</a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-5 shadow-lg backdrop-blur sm:p-6 xl:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-900 px-4 py-4 text-white sm:p-5 xl:p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Money Flow</div>
              <div className="mt-6 space-y-4 text-sm font-semibold">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-xs font-bold">M</span>
                  Manufacturer
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold">R</span>
                  Retailer
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-xs font-bold">C</span>
                  Customer
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-slate-100/50 px-4 py-4 sm:p-5 xl:p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-600 font-semibold">PayAssure Engine</div>
              <div className="mt-6 rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Sits in the middle. Manages every flow.</p>
                <div className="mt-4 space-y-2 text-xs text-gray-600">
                  <p>• Money automatically splits</p>
                  <p>• Trust is verified in real-time</p>
                  <p>• Settlements execute instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-slate-900 px-4 py-6 text-white shadow-2xl shadow-slate-900/25 sm:p-6 xl:p-10">
        <div className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold">Transaction Architecture</div>
        <div className="mt-5 space-y-3 xl:mt-8 xl:space-y-4">
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-3 sm:p-4 xl:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Manufacturer</p>
                <p className="mt-2 text-base font-bold text-emerald-400 xl:text-lg">KES 5,500 ↓</p>
              </div>
              <div className="text-2xl">⚡</div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-3 sm:p-4 xl:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Retailer</p>
                <p className="mt-2 text-base font-bold text-blue-400 xl:text-lg">KES 4,420 ↓</p>
              </div>
              <div className="text-2xl">📊</div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-3 sm:p-4 xl:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Bank</p>
                <p className="mt-2 text-base font-bold text-amber-400 xl:text-lg">Paid Automatically ✓</p>
              </div>
              <div className="text-2xl">🏦</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
