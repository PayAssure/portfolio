const teamMembers = [
  { name: 'Founder', title: 'Business Vision & Go-to-Market', description: 'Experienced in enterprise sales, trade finance distribution and African commerce ecosystems.' },
  { name: 'Technical Founder / CTO', title: 'Platform Architecture & Engineering', description: 'Specialist in backend systems, distributed settlement engines and secure financial infrastructure.' },
]

export default function TeamSection() {
  return (
    <section id="team" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Team</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Founders with experience across fintech, supply chain and infrastructure.</h2>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 mt-8 sm:mt-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold">{member.name}</p>
              <p className="mt-4 text-lg font-bold text-slate-950 sm:text-xl">{member.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
