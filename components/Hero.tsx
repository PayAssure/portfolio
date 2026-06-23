export default function Hero() {
  return (
    <section className="w-full grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center py-20">
      <div className="w-full space-y-8">
        <div className="w-full space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Supply Chain Financial Infrastructure</p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">Building the future of supply chain finance.</h1>
          <p className="text-lg leading-8 text-gray-600 max-w-lg">PayAssure is seeking pilot partners, strategic discussions, and industry feedback for a new platform that enables real-time settlements, supply chain financing, and financial intelligence across Africa.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">Talk To Us</a>
          <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">Explore The Platform</a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-8 shadow-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-900 p-6 text-white">
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
            <div className="rounded-xl bg-slate-100/50 p-6">
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

      <div className="w-full rounded-2xl bg-slate-900 p-10 text-white shadow-2xl shadow-slate-900/25">
        <div className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-semibold">Transaction Architecture</div>
        <div className="mt-8 space-y-4">
          <div className="rounded-lg bg-slate-800/50 p-5 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Manufacturer</p>
                <p className="mt-2 text-lg font-bold text-emerald-400">KES 5,500 ↓</p>
              </div>
              <div className="text-2xl">⚡</div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-800/50 p-5 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Retailer</p>
                <p className="mt-2 text-lg font-bold text-blue-400">KES 4,420 ↓</p>
              </div>
              <div className="text-2xl">📊</div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-800/50 p-5 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">Bank</p>
                <p className="mt-2 text-lg font-bold text-amber-400">Paid Automatically ✓</p>
              </div>
              <div className="text-2xl">🏦</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
