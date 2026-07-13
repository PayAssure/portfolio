const advantages = [
  'API-first platform designed for modern integrations',
  'Multi-tenant architecture for rapid partner onboarding',
  'Settlement-first design focused on payables and receivables',
  'ERP and payment partner integration capability',
  'Banking partnerships and regulatory-ready flows',
  'Network effects as suppliers, buyers and financiers join',
]

export default function CompetitiveAdvantagesSection() {
  return (
    <section id="competitive-advantages" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Competitive Advantages</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Built to be difficult to replace.</h2>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 mt-6 sm:mt-8">
          {advantages.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
