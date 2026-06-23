export default function TrustScoreSection() {
  const benefits = [
    { label: 'Lower Float', icon: '📉' },
    { label: 'Better Financing', icon: '💳' },
    { label: 'Faster Settlements', icon: '⚡' },
    { label: 'Preferred Access', icon: '⭐' },
  ]

  return (
    <section id="trust-score" className="w-full py-16">
      <div className="w-full space-y-4 mb-16">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Behavioral Scoring</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">Trust Score: Your Supply Chain Reputation</h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Score Card */}
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-12 shadow-lg">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Retailer Trust Score</p>
            
            {/* Circular Progress */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#1e4ed8"
                    strokeWidth="8"
                    strokeDasharray={`${0.87 * 2 * 3.14159 * 70} ${2 * 3.14159 * 70}`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-blue-600">87</div>
                  <p className="text-xs text-slate-600 mt-1">Excellent</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-600">Based on payment history, transaction volume, and settlement performance</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <p className="text-lg font-semibold text-slate-950 mb-6">Unlock These Benefits</p>
          {benefits.map((benefit) => (
            <div key={benefit.label} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <p className="font-semibold text-slate-950">{benefit.label}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {benefit.label === 'Lower Float' && 'Reduce cash tied up in inventory'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {benefit.label === 'Better Financing' && 'Access higher credit limits at lower rates'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {benefit.label === 'Faster Settlements' && 'Get paid in 24 hours instead of 30–90 days'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {benefit.label === 'Preferred Access' && 'Priority support and custom integrations'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
