export default function InvestorResourcesSection() {
  return (
    <section id="investor-resources" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Investor Resources</p>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Everything you need to evaluate PayAssure.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="rounded-[1.5rem] border border-slate-200 bg-blue-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Investor Deck</h3>
                <p className="mt-2 text-sm text-slate-700 leading-6">
                  Comprehensive 20-page deck covering problem, solution, market, business model, competitive advantages, financials, and team.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Financial projections and unit economics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Market size and opportunity analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Go-to-market strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Use of funds breakdown</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                📥 Request Deck
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-300/20">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Founder Video</h3>
                <p className="mt-2 text-sm text-slate-700 leading-6">
                  2-minute founder introduction explaining the problem, vision, and why PayAssure is built to win.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-slate-600 font-bold">✓</span>
                  <span>Personal introduction and background</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600 font-bold">✓</span>
                  <span>Problem and market opportunity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600 font-bold">✓</span>
                  <span>PayAssure solution and approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-600 font-bold">✓</span>
                  <span>Call to action for investors</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                📹 Watch Video
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">Available on Request</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: 'Financial Model', desc: 'Excel projections with assumptions' },
              { title: 'Data Room Access', desc: 'Full diligence materials package' },
              { title: 'Product Demo', desc: 'Live walkthrough of platform' },
              { title: 'Team Deep Dive', desc: 'Background and expertise overview' },
              { title: 'Customer References', desc: 'Pilot partner introductions' },
              { title: 'Regulatory Summary', desc: 'Compliance and banking engagement plan' },
            ].map((resource, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-950 text-sm">{resource.title}</p>
                <p className="mt-1 text-xs text-slate-600">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-green-200 bg-green-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <p className="text-sm font-semibold text-green-900 uppercase tracking-widest mb-4">Next Steps</p>
          <ol className="space-y-3 text-sm text-green-900">
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-600 flex-shrink-0">1</span>
              <span>Download investor deck or request a demo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-600 flex-shrink-0">2</span>
              <span>Schedule a 30-minute discovery call with Austine</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-600 flex-shrink-0">3</span>
              <span>Access data room for detailed diligence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-green-600 flex-shrink-0">4</span>
              <span>Move to term sheet discussions and final negotiations</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
