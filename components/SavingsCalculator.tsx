"use client"

import { useMemo, useState } from 'react'

export default function SavingsCalculator() {
  const [monthlySales, setMonthlySales] = useState('1000000')
  const [monthlyTransactions, setMonthlyTransactions] = useState('500')
  const [hoursRecon, setHoursRecon] = useState('40')
  const [costPerEmployee, setCostPerEmployee] = useState('80000') // KES/month, optional
  const [monthlyCreditSales, setMonthlyCreditSales] = useState('800000')
  const [currentBadDebtPct, setCurrentBadDebtPct] = useState('5')
  const [badDebtReductionPct, setBadDebtReductionPct] = useState('50') // percent of bad debt reduced
  const [workingCapitalLoan, setWorkingCapitalLoan] = useState('2000000')
  const [annualInterestRate, setAnnualInterestRate] = useState('18')
  const [settlementDelayDaysCurrent, setSettlementDelayDaysCurrent] = useState('7')
  const [settlementDelayDaysAfter, setSettlementDelayDaysAfter] = useState('1')
  const [processingLossPct, setProcessingLossPct] = useState('1')
  const [processingLossReductionPct, setProcessingLossReductionPct] = useState('0.2')
  const [monthlyFee, setMonthlyFee] = useState('20000')
  const [showKey, setShowKey] = useState(false)

  // assumptions
  const reconciliationReductionPercent = 0.8 // 80% reduction in manual reconciliation time
  const workingHoursPerMonth = 160

  function parseNumber(value: string) {
    if (!value) return 0
    const cleaned = value.toString().replace(/,/g, '').replace(/[^0-9.\-]/g, '')
    const n = Number(cleaned)
    return Number.isFinite(n) ? n : 0
  }

  const results = useMemo(() => {
    const sales = parseNumber(monthlySales)
    const tx = parseNumber(monthlyTransactions)
    const hours = parseNumber(hoursRecon)
    const costMonthly = parseNumber(costPerEmployee)
    const creditSales = parseNumber(monthlyCreditSales)
    const badDebtPct = parseNumber(currentBadDebtPct) / 100
    const badDebtReduction = parseNumber(badDebtReductionPct) / 100
    const loan = parseNumber(workingCapitalLoan)
    const annualRate = parseNumber(annualInterestRate) / 100
    const delayCurrent = parseNumber(settlementDelayDaysCurrent)
    const delayAfter = parseNumber(settlementDelayDaysAfter)
    const processingLoss = parseNumber(processingLossPct) / 100
    const processingLossReduction = parseNumber(processingLossReductionPct) / 100
    const fee = parseNumber(monthlyFee)

    // Reconciliation / labour savings
    const timeSavedHours = hours * reconciliationReductionPercent
    const manualReducedPercent = Math.round(reconciliationReductionPercent * 100)
    const costPerHour = costMonthly > 0 ? costMonthly / workingHoursPerMonth : 0
    const labourSavings = costPerHour > 0 ? timeSavedHours * costPerHour : 0

    // Bad debt savings
    const currentBadDebt = creditSales * badDebtPct
    const badDebtSavings = currentBadDebt * badDebtReduction

    // Interest savings from reduced working capital needs
    const monthlyInterest = loan * (annualRate / 12)
    // assume settlement improvement reduces working capital need by a percent
    const settlementImprovementPct = Math.max(0, ((delayCurrent - delayAfter) / Math.max(delayCurrent, 1)))
    const interestSavings = monthlyInterest * settlementImprovementPct

    // Processing / payment error reduction savings (absolute reduction percent)
    const processingSavings = sales * processingLoss * processingLossReduction

    // Faster cash flow -> working capital released (approx)
    const daysReduced = Math.max(0, delayCurrent - delayAfter)
    const workingCapitalReleased = daysReduced > 0 ? (sales / 30) * daysReduced : 0
    const cashFlowImprovementPct = loan > 0 ? (workingCapitalReleased / loan) * 100 : (workingCapitalReleased / Math.max(sales, 1)) * 100

    const totalMonthlySavings = labourSavings + badDebtSavings + interestSavings + processingSavings
    const annualSavings = totalMonthlySavings * 12

    const roi = fee > 0 ? (totalMonthlySavings / fee) * 100 : 0
    const paybackMonths = fee > 0 ? fee / Math.max(totalMonthlySavings, 1) : Infinity

    return {
      sales,
      tx,
      timeSavedHours: Math.round(timeSavedHours),
      manualReducedPercent,
      labourSavings: Math.round(labourSavings),
      badDebtSavings: Math.round(badDebtSavings),
      interestSavings: Math.round(interestSavings),
      processingSavings: Math.round(processingSavings),
      totalMonthlySavings: Math.round(totalMonthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Number(roi.toFixed(0)),
      paybackMonths: Number(paybackMonths.toFixed(1)),
      workingCapitalReleased: Math.round(workingCapitalReleased),
      cashFlowImprovementPct: Number(cashFlowImprovementPct.toFixed(1)),
      delayCurrent,
      delayAfter,
    }
  }, [monthlySales, monthlyTransactions, hoursRecon, costPerEmployee, monthlyCreditSales, currentBadDebtPct, badDebtReductionPct, workingCapitalLoan, annualInterestRate, settlementDelayDaysCurrent, settlementDelayDaysAfter, processingLossPct, processingLossReductionPct, monthlyFee])

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
            <span className="font-semibold text-slate-600">Monthly Sales (KES)</span>
            <input value={monthlySales} onChange={(e) => setMonthlySales(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Number of Monthly Transactions</span>
              <input value={monthlyTransactions} onChange={(e) => setMonthlyTransactions(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Average Hours Spent on Reconciliation / Month</span>
                <input value={hoursRecon} onChange={(e) => setHoursRecon(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Average Cost per Finance Employee (KES/month, optional)</span>
                <input value={costPerEmployee} onChange={(e) => setCostPerEmployee(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Monthly Credit Sales (KES)</span>
            <input value={monthlyCreditSales} onChange={(e) => setMonthlyCreditSales(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Current Bad Debt (%)</span>
            <input value={currentBadDebtPct} onChange={(e) => setCurrentBadDebtPct(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Est. Bad Debt Reduction (%)</span>
            <input value={badDebtReductionPct} onChange={(e) => setBadDebtReductionPct(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Average Working Capital Loan (KES)</span>
            <input value={workingCapitalLoan} onChange={(e) => setWorkingCapitalLoan(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Annual Interest Rate (%)</span>
            <input value={annualInterestRate} onChange={(e) => setAnnualInterestRate(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Settlement Delay (days) — Current</span>
            <input value={settlementDelayDaysCurrent} onChange={(e) => setSettlementDelayDaysCurrent(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Settlement Delay (days) — After</span>
            <input value={settlementDelayDaysAfter} onChange={(e) => setSettlementDelayDaysAfter(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Processing Loss (%)</span>
            <input value={processingLossPct} onChange={(e) => setProcessingLossPct(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Processing Loss Reduction (%)</span>
            <input value={processingLossReductionPct} onChange={(e) => setProcessingLossReductionPct(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-semibold text-slate-600">Estimated Monthly Fee (KES)</span>
            <input value={monthlyFee} onChange={(e) => setMonthlyFee(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" inputMode="numeric" />
          </label>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm text-slate-500">Labour Savings</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">KES {formatKES(results.labourSavings)}</p>
              <p className="text-xs text-slate-500 mt-1">≈ {results.timeSavedHours} hrs/month</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Reduced Bad Debt</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">KES {formatKES(results.badDebtSavings)}</p>
              <p className="text-xs text-slate-500 mt-1">Based on credit sales and bad debt reduction</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Interest Cost Savings</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">KES {formatKES(results.interestSavings)}</p>
              <p className="text-xs text-slate-500 mt-1">From improved settlement → lower working capital need</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Payment Error Reduction</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">KES {formatKES(results.processingSavings)}</p>
              <p className="text-xs text-slate-500 mt-1">Less manual loss / processing errors</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-slate-500">Estimated Monthly Impact</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">KES {formatKES(results.totalMonthlySavings)}</p>
            <p className="mt-1 text-sm text-slate-600">Estimated Annual Impact: KES {formatKES(results.annualSavings)}</p>
            <p className="mt-1 text-sm text-slate-600">ROI (vs monthly fee): {results.roi}% · Payback: {results.paybackMonths} months</p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Talk to Us</a>
            <a href="#pilot" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Join the Free Pilot</a>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 rounded-md bg-slate-50 p-4 border border-slate-200">
            <p className="text-sm text-slate-600">Need help understanding the terms?</p>
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {showKey ? 'Hide Key' : 'Show Terms Key'}
            </button>
          </div>

          {showKey && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Terms Key</h4>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Monthly Sales (KES)</dt>
                  <dd className="mt-1 text-sm text-slate-600">Your total sales value for the month used to estimate transaction scale and working capital.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Number of Monthly Transactions</dt>
                  <dd className="mt-1 text-sm text-slate-600">How many payments or invoices are processed each month.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Average Hours Spent on Reconciliation / Month</dt>
                  <dd className="mt-1 text-sm text-slate-600">Time your team spends manually matching payments, invoices and settlements each month.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Average Cost per Finance Employee (KES/month)</dt>
                  <dd className="mt-1 text-sm text-slate-600">Monthly salary cost for the finance or reconciliation employee doing that work.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Monthly Credit Sales (KES)</dt>
                  <dd className="mt-1 text-sm text-slate-600">Sales made on credit, used to estimate bad debt exposure and recovery potential.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Current Bad Debt (%)</dt>
                  <dd className="mt-1 text-sm text-slate-600">Share of credit sales that typically become overdue or uncollectible today.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Est. Bad Debt Reduction (%)</dt>
                  <dd className="mt-1 text-sm text-slate-600">How much of that bad debt you expect to recover with better settlement and visibility.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Average Working Capital Loan (KES)</dt>
                  <dd className="mt-1 text-sm text-slate-600">The typical amount borrowed to cover inventory, payables and cash flow gaps.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Annual Interest Rate (%)</dt>
                  <dd className="mt-1 text-sm text-slate-600">The yearly cost of that working capital loan.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Settlement Delay (days) — Current</dt>
                  <dd className="mt-1 text-sm text-slate-600">How long it currently takes for funds to settle in your accounts.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Settlement Delay (days) — After</dt>
                  <dd className="mt-1 text-sm text-slate-600">The settlement time you expect after PayAssure automation.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Processing Loss (%)</dt>
                  <dd className="mt-1 text-sm text-slate-600">The percentage of sales lost to settlement mistakes, payment errors or reconciliation gaps.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Processing Loss Reduction (%)</dt>
                  <dd className="mt-1 text-sm text-slate-600">How much of that loss PayAssure can help eliminate.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-800">Estimated Monthly Fee (KES)</dt>
                  <dd className="mt-1 text-sm text-slate-600">Your expected monthly cost for PayAssure, used to compare savings and ROI.</dd>
                </div>
              </dl>
            </div>
          )}

          <p className="mt-4 text-xs text-slate-500">These estimates are illustrative and depend on your inputs. Use them to start a conversation — we can provide a tailored analysis for your business.</p>
        </div>
      </div>
    </section>
  )
}
