const teamMembers = [
  {
    name: 'Austine Jefwa Katsinye',
    title: 'Founder & CEO',
    credentials: [
      'Business Strategy & Partnerships',
      'Go-to-Market Leadership',
      'business development and enterprise sales',
      'Millennium Fellow 2026',
    ],
    description: 'Leads business strategy, partnerships and go-to-market expansion. Deep experience in enterprise sales, trade finance distribution and African commerce ecosystems.',
  },
  {
    name: 'Wilfred Mwaura Kimani',
    title: 'Co-Founder & CTO',
    credentials: [
      'Backend Systems Engineer',
      'Architect of PayAssure settlement platform',
      'Distributed Systems Specialist',
      'Financial Infrastructure Expert',
    ],
    description: 'Architect of the PayAssure settlement platform. Specialist in backend systems, distributed settlement engines and secure financial infrastructure.',
  },
  {
    name: 'Simon Amani Tunje',
    title: 'Business Adviser',
    credentials: [],
    description: 'Strategic advisor providing business and market expertise.',
  },
  {
    name: 'Esther Sidi Charo',
    title: 'Operations Adviser',
    credentials: [],
    description: 'Strategic advisor on operations and business development.',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-5 sm:space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Leadership Team</p>
        <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">We invest in founders first. Meet the team building PayAssure.</h2>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 mt-8 sm:mt-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <p className="text-base font-bold text-slate-950">{member.name}</p>
              <p className="mt-2 text-sm font-semibold text-blue-600">{member.title}</p>
              {member.credentials.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {member.credentials.map((cred) => (
                    <li key={cred} className="text-xs text-slate-600">• {cred}</li>
                  ))}
                </ul>
              )}
              <p className="mt-4 text-sm leading-6 text-slate-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
