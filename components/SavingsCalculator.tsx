import { useMemo, useState } from 'react'

export default function SavingsCalculator() {
  const [monthlySales, setMonthlySales] = useState('1000000')
  const [monthlyTransactions, setMonthlyTransactions] = useState('500')
  const [hoursRecon, setHoursRecon] = useState('40')
  const [costPerEmployee, setCostPerEmployee] = useState('80000') // KES/month, optional

  // assumptions
  const reductionPercent = 0.8 // 80% reduction in manual reconciliation time
  const workingHoursPerMonth = 160

  const results = useMemo(() => {
    const sales = Number(monthlySales) || 0
    const tx = Number(monthlyTransactions) || 0
    const hours = Number(hoursRecon) || 0
    const costMonthly = Number(costPerEmployee) || 0

    const timeSavedHours = hours * reductionPercent
    const manualReducedPercent = Math.round(reductionPercent * 100)

    const costPerHour = costMonthly > 0 ? costMonthly / workingHoursPerMonth : 0
    const estimatedOperationalSavings = costPerHour > 0 ? timeSavedHours * costPerHour : 0

    // simple metric: savings as percent of monthly sales (illustrative)
    const savingsAsPctOfSales = sales > 0 ? (estimatedOperationalSavings / sales) * 100 : 0

    return {
      timeSavedHours: Math.round(timeSavedHours),
      manualReducedPercent,
      estimatedOperationalSavings: Math.round(estimatedOperationalSavings),
      savingsAsPctOfSales: Number(savingsAsPctOfSales.toFixed(2)),
      tx,
    }
  }, [monthlySales, monthlyTransactions, hoursRecon, costPerEmployee])

  function formatKES(n: number) {
    return n.toLocaleString('en-KE', { maximumFractionDigits: 0 })
  }

  return (
    <section id="savings" className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="w-full mx-auto">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Settlement Savings Calculator</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">Estimate PayAssure savings for your business</h2>
          <p className="mt-2 text-sm text-slate-600">Enter a few numbers to see an illustrative, conservative estimate of time and operational savings. These estimates are for illustration only and may vary by business.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-950">Monthly Sales (KES)</span>
            <input value={monthlySales} onChange={(e) => setMonthlySales(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-950">Number of Monthly Transactions</span>
            <input value={monthlyTransactions} onChange={(e) => setMonthlyTransactions(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-950">Average Hours Spent on Reconciliation / Month</span>
            <input value={hoursRecon} onChange={(e) => setHoursRecon(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-950">Average Cost per Finance Employee (KES/month, optional)</span>
            <input value={costPerEmployee} onChange={(e) => setCostPerEmployee(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" inputMode="numeric" />
          </label>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Time Saved</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">≈ {results.timeSavedHours} Hours / Month</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Manual Reconciliation Reduced</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">≈ {results.manualReducedPercent}%</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Estimated Operational Savings</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">KES {formatKES(results.estimatedOperationalSavings)} / Month</p>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            <p>Settlement visibility: Improved</p>
            {results.savingsAsPctOfSales > 0 && (
              <p className="mt-1">Estimated savings ≈ {results.savingsAsPctOfSales}% of monthly sales (illustrative)</p>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Talk to Us</a>
            <a href="#pilot" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Join the Free Pilot</a>
          </div>

          <p className="mt-4 text-xs text-slate-500">These estimates are for illustration only and may vary depending on your business operations and transaction volumes.</p>
        </div>
      </div>
    </section>
  )
}
