const integrations = ['M-Pesa', 'Banks', 'POS Systems', 'ERP Systems', 'Accounting Platforms']

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="w-full rounded-xl bg-white p-8 lg:p-10 shadow-sm border border-slate-200">
      <div className="grid gap-8 grid-cols-1">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Integrations</p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-slate-950">Connect to your existing systems</h2>
          <p className="mt-3 text-gray-600">PayAssure integrates with the tools you already use.</p>

          <div className="mt-6 space-y-4 text-slate-800">
            <p>
              You don't need expensive point-of-sale hardware to use PayAssure. A smartphone is often
              all that's required — use a barcode scanning app or a mobile POS application to scan
              products and accept payments. PayAssure automatically allocates funds between retailers,
              suppliers, and other stakeholders.
            </p>

            <p>
              For businesses that already have a POS system, PayAssure integrates seamlessly with
              existing workflows. And not every sale happens in a physical store — whether purchases
              come through an e-commerce website, a mobile app, social commerce, or another sales
              platform, PayAssure can integrate as long as the platform provides transaction details
              and payment information.
            </p>

            <p className="font-medium">
              Wherever a payment happens, PayAssure ensures the right people are paid automatically.
            </p>
          </div>
        </div>

        <div>
          <div className="w-full rounded-lg border border-slate-100 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">Supported Integrations</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg font-bold">⚙</div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">{item}</p>
                    <p className="text-xs text-slate-500">Integrate via API or connector</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-slate-500">Supports custom connectors, webhooks, and file-based imports.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
