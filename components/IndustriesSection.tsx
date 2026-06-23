const industries = [
  { title: 'Retail', description: 'Supermarkets and merchants' },
  { title: 'Pharmacies', description: 'Medicine supply chains' },
  { title: 'FMCG', description: 'Manufacturers and distributors' },
  { title: 'Hospitality', description: 'Hotels and food businesses' },
  { title: 'Healthcare', description: 'Hospitals and clinics' },
  { title: 'Wholesale Distribution', description: 'Multi-branch operations' },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4 pb-8 border-b border-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Industries</p>
          <h2 className="text-4xl font-bold text-slate-950">Built for every supply chain</h2>
          <p className="text-gray-600 max-w-3xl">From supermarkets to hospitals, PayAssure supports industries that need fast payment flow, inventory visibility, and trusted financing.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item.title} className="rounded-3xl bg-blue-50 p-8 shadow-sm border border-blue-200 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
