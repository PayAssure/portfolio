const features = [
  'Payment Orchestration',
  'Settlement Automation',
  'Reconciliation Engine',
  'Trust Scoring',
  'Supply Chain Finance',
  'Batch Tracking',
  'Risk Monitoring',
  'Compliance',
]

const featureDetails: Record<string, string> = {
  'Payment Orchestration': 'Automatic revenue splitting.',
  'Settlement Automation': 'Real-time and end-of-day settlements.',
  'Reconciliation Engine': 'Automated ledger matching.',
  'Trust Scoring': 'Behavioral and transaction-based scoring.',
  'Supply Chain Finance': 'Working capital powered by verified data.',
  'Batch Tracking': 'Product-level and batch-level visibility.',
  'Risk Monitoring': 'Alerts and fraud detection.',
  Compliance: 'Audit trails and regulatory support.',
}

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full rounded-3xl bg-blue-600 p-10 shadow-sm">
      <div className="w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-black-600 font-semibold">Enterprise Capabilities</p>
        <h2 className="mt-3 text-4xl font-bold text-slate-950">Built for operational scale and financial certainty</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div key={feature} className="rounded-3xl border border-blue-200 bg-blue-200 p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-slate-950">{feature}</h3>
            <p className="mt-4 text-slate-600 text-sm">{featureDetails[feature]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
