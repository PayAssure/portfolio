export default function KenyaMarketNarrativeSection() {
  return (
    <section id="market-narrative" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
        <div className="space-y-6 w-full">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Market Context</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-950 sm:text-3xl">Why East Africa. Why now.</h2>
          </div>

          <div className="prose prose-sm max-w-none text-slate-700 leading-7">
            <p className="text-base">
              Kenya has witnessed the collapse of major retail chains including Nakumatt, Uchumi, and Tuskys over the past decade. While many factors contributed to their downfall, one recurring and critical challenge was <span className="font-semibold text-slate-900">poor visibility into cash flow, supplier obligations, and settlement processes</span>.
            </p>
            <p className="text-base mt-4">
              These retailers couldn't reconcile payables in real-time. Suppliers had no visibility into orders, shipments, and payment timelines. The manual, fragmented nature of their payment workflows meant:
            </p>
            <ul className="mt-4 space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">•</span>
                <span>Weeks of working capital tied up in reconciliation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">•</span>
                <span>Disputed invoices and delayed settlements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">•</span>
                <span>No access to trade finance or working capital credit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">•</span>
                <span>Inability to forecast cash positions or scale operations</span>
              </li>
            </ul>

            <p className="text-base mt-6 font-semibold text-slate-900">
              Across Africa, thousands of manufacturers, distributors, and retailers still operate this way.
            </p>

            <p className="text-base mt-4">
              Today, East African commerce is fragmenting across multiple channels: POS systems, mobile money, bank transfers, ERP platforms, and emerging marketplace integrations. Without a unified settlement layer, retailers and suppliers have even less control over their financial flows.
            </p>

            <p className="text-base mt-4">
              PayAssure is building the infrastructure layer to modernize these financial flows and enable faster, more transparent commerce. We're creating the settlement backbone that Nakumatt, Uchumi, and Tuskys needed—and that thousands of retailers, distributors, and manufacturers need today.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mt-8 pt-6 border-t border-slate-200">
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <p className="text-2xl font-bold text-blue-600">2000+</p>
              <p className="text-xs font-medium text-slate-600 mt-1">Retail enterprises in Kenya</p>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <p className="text-2xl font-bold text-blue-600">100B+</p>
              <p className="text-xs font-medium text-slate-600 mt-1">KES annual B2B transactions</p>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <p className="text-2xl font-bold text-blue-600">50%+</p>
              <p className="text-xs font-medium text-slate-600 mt-1">Manual reconciliation processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
