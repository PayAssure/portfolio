const progressItems = [
  'Business onboarding workflows designed and validated',
  'API key management and integration architecture defined',
  'Settlement engine under development for live routing',
  'Pilot program launching with early retail and supplier partners',
  'Customer discovery completed in East Africa',
  'Company registration and compliance groundwork in place',
]

export default function CurrentProgressSection() {
  return (
    <section id="current-progress" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
        <div className="space-y-5 sm:space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Current Progress</p>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Early traction with a realistic product roadmap.</h2>
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are focused on concrete execution milestones that validate the business model and prepare the platform for scale.</p>
        </div>

        <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:space-y-4 sm:rounded-[2rem] sm:p-8">
          {progressItems.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl">
              <p className="text-sm leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
