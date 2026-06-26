export default function ArchitectureSection() {
  const layers = [
    {
      name: 'Layer 3: Supply Chain Finance',
      description: 'Working capital powered by verified transaction data',
      icon: '💰',
      color: 'bg-amber-50 border-amber-200',
    },
    {
      name: 'Layer 2: Daily Float Management',
      description: 'Real-time cash positioning and optimization',
      icon: '📊',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      name: 'Layer 1: Instant Settlement',
      description: 'Atomic splits and trust-based payments',
      icon: '⚡',
      color: 'bg-emerald-50 border-emerald-200',
    },
  ]

  return (
    <section id="architecture" className="w-full py-5">
      <div className="w-full space-y-4 mb-8">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">3-Layer Foundation</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">Enterprise Architecture</h2>
        <p className="text-lg text-gray-600 max-w-2xl">PayAssure's 3-layer architecture handles instant settlements, daily float, and supply chain financing.</p>
      </div>

      <div className="space-y-4">
        {layers.map((layer, index) => (
          <div
            key={layer.name}
            className={`rounded-2xl border-2 p-8 shadow-lg transition hover:shadow-xl transform hover:-translate-y-1 ${layer.color}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl">{layer.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-950">{layer.name}</h3>
                <p className="text-gray-600 mt-2">{layer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-600 font-semibold mb-4">Enterprise Grade</p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">99.99% Uptime</p>
            <p className="text-sm text-gray-600 mt-1">Bank-grade infrastructure</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">ISO 27001 Certified</p>
            <p className="text-sm text-gray-600 mt-1">Security & compliance</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Real-time Monitoring</p>
            <p className="text-sm text-gray-600 mt-1">24/7 operational oversight</p>
          </div>
        </div> 
      </div>*/}
    </section>
  )
}
