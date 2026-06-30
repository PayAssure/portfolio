

type TeamMember = {
  name: string
  role: string
  email: string
  phone: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Austine Jefwa Katsinye',
    role: 'CEO & Founder',
    email: 'austinejefwa09@gmail.com',
    phone: '+254748 595 539',
    bio: 'Leads PayAssure’s vision, business strategy, and partnerships, focusing on building financial infrastructure that helps manufacturers, distributors, and retailers streamline settlements and reduce credit risk.',
    image: '/austine.jpeg',
  },
  {
    name: 'Wilfred Mwaura Kimani',
    role: 'CTO & Co-Founder',
    email: 'kimaniwilfred95@gmail.com',
    phone: '+254791614036',
    bio: 'Leads the company’s technology strategy and product development, designing secure, scalable financial systems and overseeing the engineering of PayAssure’s payment and settlement platform.',
    image: '/wilfred.jpeg',
  },
  {
    name: 'Simon Amani Tunje',
    role: 'Business Adviser',
    email: 'tunjechiro2002@gmail.com',
    phone: '+254723 201 659',
    bio: 'Provides strategic business guidance, helping shape market expansion, partnership development, and long-term growth initiatives while ensuring the platform addresses real industry needs.',
    image: '/simon.jpeg',
  },
  {
    name: 'Esther Sidi Charo',
    role: 'Co-Adviser',
    email: 'esthersidi7@gmail.com',
    phone: '+254710 944 354',
    bio: 'Supports business planning and operational strategy, contributing insights that strengthen product direction, stakeholder engagement, and organizational development.',
    image: '/logo.png',
  },
]

function getWhatsAppLink(phone: string, name: string) {
  const message = `Hello ${name}, I visited the PayAssure website and would like to get in touch with you.`;
  const encoded = encodeURIComponent(message)
  const formattedPhone = phone.replace(/[^0-9]/g, '')
  return `https://wa.me/${formattedPhone}?text=${encoded}`
}

export default function TeamSection() {
  return (
    <section id="team" className="w-full rounded-xl bg-white p-10 shadow-sm border border-slate-200">
      <div className="w-full mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Team</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950">PayAssure leadership and advisers</h2>
          <p className="mt-4 text-gray-600 leading-7 max-w-2xl">A lean leadership team guiding PayAssure’s product, technology, and market strategy with a focus on reliable finance operations for supply chain participants.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <div key={member.email} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  {member.image && !member.image.toLowerCase().includes('logo') ? (
                    <img src={member.image} alt={`${member.name} profile`} className="h-16 w-16 rounded-2xl object-cover bg-slate-200" />
                  ) : (
                    <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{member.name}</h3>
                    <p className="text-sm font-medium text-blue-600">{member.role}</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-600">{member.bio}</p>

                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <span>✉</span>
                    <span>{member.email}</span>
                  </a>
                  <a
                    href={getWhatsAppLink(member.phone, member.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-100"
                  >
                    <span>💬</span>
                    <span>WhatsApp: {member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
