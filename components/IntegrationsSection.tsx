const integrations = ['M-Pesa', 'Banks', 'POS Systems', 'ERP Systems', 'Accounting Platforms']

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="w-full rounded-xl bg-white p-10 shadow-sm border border-slate-200">
      <div className="w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Integrations</p>
        <h2 className="mt-4 text-4xl font-bold text-slate-950">Connect to your existing systems</h2>
        <p className="mt-3 text-gray-600">PayAssure integrates with the tools you already use.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {integrations.map((item) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-slate-900 shadow-sm hover:shadow-md transition">
            <div className="text-3xl font-bold text-blue-600 mb-2">⚙</div>
            <p className="font-semibold text-sm">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
