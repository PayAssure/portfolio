const reasons = [
  'Increased digital payments across retail and wholesale channels',
  'Open banking and account-to-account settlement initiatives',
  'Growing ERP adoption across distribution and manufacturing',
  'Embedded finance available through payments and banking partners',
  'Regulators encouraging faster, more transparent settlements',
]

export default function WhyNowSection() {
  return (
    <section id="why-now" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Why Now</p>
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Market dynamics are aligning for settlement-first infrastructure.</h2>
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Regulatory support, open banking, ERP adoption and growing embedded finance demand are creating a rare opportunity to define the settlement layer for African commerce.</p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {reasons.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
