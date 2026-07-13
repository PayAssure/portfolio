const faqs = [
  {
    q: 'What problem does PayAssure solve?',
    a: 'We solve slow, opaque settlement and reconciliation between retailers, suppliers and financial institutions by automating transaction orchestration and settlement workflows.',
  },
  {
    q: 'How do you generate revenue?',
    a: 'Revenue comes from SaaS subscriptions, transaction fees, settlement processing fees, API usage, premium analytics and embedded finance revenue sharing.',
  },
  {
    q: 'Who are the competitors?',
    a: 'Competitors include ERP vendors, payment gateways and trade finance providers, but none focus on the settlement middleware layer for supply chain commerce in Africa.',
  },
  {
    q: 'Why is PayAssure different?',
    a: 'We are settlement-first, API-driven, and designed to integrate ERP, payment and banking partners in a single operational platform.',
  },
  {
    q: 'Which markets are you targeting?',
    a: 'East African manufacturers, distributors, retailers, ERP partners, banks and embedded finance providers.',
  },
  {
    q: 'What is your expansion strategy?',
    a: 'Start with pilots in Kenya, then expand to neighboring markets and partner with ERP and banking ecosystems to scale.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">FAQ</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Questions investors typically ask.</h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 mt-8 sm:mt-10">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <p className="text-base font-semibold text-slate-950">{item.q}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
