export default function CompetitiveComparisonSection() {
  return (
    <section id="competitive-comparison" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Market Position</p>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Why we're different from the competition.</h2>
          <p className="text-base leading-7 text-slate-600">PayAssure occupies a unique position that existing competitors cannot easily replicate.</p>
        </div>

        <div className="overflow-x-auto rounded-[1.5rem] border border-slate-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left font-semibold text-slate-900 py-4 px-4 sm:px-6">Capability</th>
                <th className="text-center font-semibold text-slate-600 py-4 px-4 sm:px-6">ERP Systems</th>
                <th className="text-center font-semibold text-slate-600 py-4 px-4 sm:px-6">Payment Gateways</th>
                <th className="text-center font-semibold text-slate-600 py-4 px-4 sm:px-6">Banks</th>
                <th className="text-center font-semibold text-blue-600 py-4 px-4 sm:px-6">PayAssure</th>
              </tr>
            </thead>
            <tbody>
              {[
                { capability: 'Inventory Management', erp: true, payment: false, bank: false, payassure: false },
                { capability: 'Payment Processing', erp: false, payment: true, bank: true, payassure: true },
                { capability: 'Settlement & Reconciliation', erp: false, payment: false, bank: false, payassure: true },
                { capability: 'Multi-Party Matching', erp: false, payment: false, bank: false, payassure: true },
                { capability: 'Embedded Finance', erp: false, payment: false, bank: false, payassure: true },
                { capability: 'API-First Architecture', erp: false, payment: true, bank: false, payassure: true },
                { capability: 'Real-Time Reconciliation', erp: false, payment: false, bank: false, payassure: true },
                { capability: 'Audit Ledger & Compliance', erp: true, payment: false, bank: true, payassure: true },
                { capability: 'Multi-Vendor Integration', erp: true, payment: false, bank: false, payassure: true },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-b-0">
                  <td className="font-medium text-slate-900 py-4 px-4 sm:px-6 text-left">{row.capability}</td>
                  <td className="py-4 px-4 sm:px-6 text-center">
                    {row.erp ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                        <span className="text-green-600 font-bold">✓</span>
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-center">
                    {row.payment ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                        <span className="text-green-600 font-bold">✓</span>
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-center">
                    {row.bank ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                        <span className="text-green-600 font-bold">✓</span>
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-center">
                    {row.payassure ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100">
                        <span className="text-blue-600 font-bold">✓</span>
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:rounded-3xl">
            <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest">What Competitors Focus On</p>
            <ul className="mt-4 space-y-2">
              {[
                'Inventory and order management (ERPs)',
                'Payment authorization and processing (Gateways)',
                'Account management (Banks)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-slate-400 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm sm:rounded-3xl">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">What PayAssure Focuses On</p>
            <ul className="mt-4 space-y-2">
              {[
                'Settlement and reconciliation (the gap)',
                'Multi-party financial workflows',
                'Real-time visibility and transparency',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-blue-900">
                  <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">The Opportunity</p>
          <p className="text-base text-slate-700 leading-7">
            While ERP systems manage operations and payment gateways process transactions, nobody is building for the settlement layer. That's where the friction, cost, and capital inefficiency live. PayAssure is the only player focused on modernizing settlement for East African commerce—and that's exactly why we're positioned to win.
          </p>
        </div>
      </div>
    </section>
  )
}
