const marketCards = [
  { label: 'TAM', title: 'Regional supply chain payments', desc: '$9B+ in annual settlement and working capital flow across East African commerce.' },
  { label: 'SAM', title: 'ERP-connected retail trade', desc: 'Focused on manufacturers, distributors and retailers using ERP and payment providers in Kenya, Tanzania and Uganda.' },
  { label: 'SOM', title: 'Initial pilot & partner rollout', desc: 'Early traction with pilot customers, ERP partners and banks gives a defensible path to the first 50 enterprise accounts.' },
  { label: 'Target segments', title: 'Retailers · Manufacturers · Banks', desc: 'We focus on enterprise buyers with the highest settlement complexity and financing need.' },
]

export default function MarketSection() {
  return (
    <section id="market" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6 mb-8">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Market Opportunity</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">A large, underserved market across East Africa and beyond.</h2>
        <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are targeting the payment and settlement flows that connect manufacturers, distributors, retailers, ERP providers and financial institutions in East Africa, with broader expansion across Africa as the network scales.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {marketCards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">{card.label}</p>
            <p className="mt-4 text-xl font-bold text-slate-950 sm:text-2xl">{card.title}</p>
            <p className="mt-3 text-sm text-slate-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
