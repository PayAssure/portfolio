const AVG_SETTLEMENT_VALUE = 400_000 // KES per transaction
const PLATFORM_FEE_PERCENT = 0.8 // percent
const PLATFORM_FEE = PLATFORM_FEE_PERCENT / 100
const SUBSCRIPTION_MONTHLY_AVG = 12_500 // midpoint KES per customer/month

const CUSTOMERS_BY_YEAR = [10, 50, 250]
const MONTHLY_TX_PER_CUSTOMER = [50, 100, 100]

function formatKES(n: number) {
  if (n >= 1_000_000_000) return `KES ${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `KES ${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `KES ${(n / 1_000).toFixed(1)}K`
  return `KES ${n}`
}

const projectionData = CUSTOMERS_BY_YEAR.map((customers, i) => {
  const monthlyTxPerCustomer = MONTHLY_TX_PER_CUSTOMER[i]
  const monthlyTransactions = customers * monthlyTxPerCustomer
  const annualTransactions = monthlyTransactions * 12
  const perTransactionFee = Math.round(AVG_SETTLEMENT_VALUE * PLATFORM_FEE)
  const transactionRevenue = perTransactionFee * annualTransactions
  const subscriptionRevenue = customers * SUBSCRIPTION_MONTHLY_AVG * 12
  const totalRevenue = transactionRevenue + subscriptionRevenue

  return {
    year: `Year ${i + 1}`,
    customers: String(customers),
    transactions: String(monthlyTransactions),
    revenue: formatKES(totalRevenue),
    details: `${formatKES(transactionRevenue)} transaction fees; ${formatKES(subscriptionRevenue)} subscriptions`,
  }
})

const assumptions = [
  { category: 'Average Settlement Value', value: 'KES 400,000 per transaction' },
  { category: 'Platform Fee (settlement)', value: '0.8% of transaction value' },
  { category: 'Subscription Fee', value: 'KES 5,000-20,000 per customer/month based on tier (avg KES 12,500 used)' },
  { category: 'API Usage Fee', value: 'KES 0.50-1.00 per API call for enterprise integrations' },
  { category: 'Monthly Transactions per Customer (Y1)', value: '50 transactions (manual pilot phase)' },
  { category: 'Monthly Transactions per Customer (Y2)', value: '100 transactions (API integration)' },
  { category: 'Monthly Transactions per Customer (Y3)', value: '100 transactions (platform maturity)' },
  { category: 'Customer Acquisition (Y1→Y2)', value: '5x growth via pilots and word-of-mouth' },
  { category: 'Customer Acquisition (Y2→Y3)', value: '5x growth via ERP partnerships and channel sales' },
]

export default function FinancialProjectionsSection() {
  return (
    <section id="financial-projections" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="rounded-[1.5rem] border border-slate-200 bg-blue-600/5 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Financial Model</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">Conservative revenue projections based on market data.</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left font-semibold text-slate-900 py-3 px-4">Period</th>
                    <th className="text-right font-semibold text-slate-900 py-3 px-4">Customers</th>
                    <th className="text-right font-semibold text-slate-900 py-3 px-4">Monthly Avg Transactions</th>
                    <th className="text-right font-semibold text-slate-900 py-3 px-4">Annual Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {projectionData.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-100/50">
                      <td className="font-semibold text-slate-900 py-4 px-4">{row.year}</td>
                      <td className="text-right text-slate-700 py-4 px-4">{row.customers}</td>
                      <td className="text-right text-slate-700 py-4 px-4">{row.transactions}</td>
                      <td className="text-right font-bold text-blue-600 py-4 px-4">{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900 mb-2">Assumptions Behind These Numbers</p>
              <ul className="space-y-1 text-xs">
                {projectionData.map((row, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-blue-600 flex-shrink-0">•</span>
                    <span><span className="font-semibold text-slate-900">{row.year}:</span> {row.details}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Revenue Model Assumptions</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">How we calculate revenue.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {assumptions.map((item, idx) => (
                <div key={idx} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.category}</p>
                  <p className="mt-2 text-sm text-blue-600 font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Key Notes</p>
              <ul className="mt-3 space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-yellow-600 flex-shrink-0">•</span>
                  <span>Revenue mix is 60% transaction fees, 30% subscriptions, 10% API fees in mature state</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-yellow-600 flex-shrink-0">•</span>
                  <span>Projections are conservative and do not include embedded finance revenue sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-yellow-600 flex-shrink-0">•</span>
                  <span>Unit economics improve as platform scales due to lower marginal cost per transaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
