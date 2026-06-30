import Head from 'next/head'

export default function Investors() {
  return (
    <>
      <Head>
        <title>PayAssure Investors | Financial Infrastructure for Africa's Supply Chains</title>
        <meta name="description" content="Investor page for PayAssure: payment orchestration and settlement infrastructure for African supply chains. Learn about the market, product, business model, and progress." />
        <link rel="canonical" href="https://payassure.co.ke/investors" />
      </Head>

      <div className="w-full min-h-screen bg-white text-slate-900">
        <main className="w-full px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">

          {/* HERO */}
          <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Investor Briefing</p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Building the financial infrastructure for Africa&apos;s supply chains.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                PayAssure is developing payment orchestration and settlement infrastructure that enables retailers, suppliers, financial institutions, and ERP providers to automate transactions, reconciliations, and working capital across Africa.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="mailto:info@payassure.co.ke?subject=Investor%20Deck%20Request"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Request Investor Deck
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Opportunity</p>
                  <p className="mt-3 text-2xl font-bold text-slate-950 sm:mt-4 sm:text-3xl">Large, defensible, settlement-first platform</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">TAM</p>
                    <p className="mt-4 text-2xl font-semibold text-slate-950">$9B+</p>
                    <p className="mt-2 text-sm text-slate-600">Regional supply chain payment and working capital flows across East Africa.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Revenue model</p>
                    <p className="mt-4 text-2xl font-semibold text-slate-950">SaaS + fees</p>
                    <p className="mt-2 text-sm text-slate-600">Subscription, transaction, settlement and embedded finance revenue.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:rounded-3xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">Why now</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">Digital payments, ERP adoption, embedded finance, and regulatory momentum are creating the conditions for PayAssure to become the middleware backbone for trade settlement across Africa.</p>
                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM */}
          <section id="problem" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[0.95fr_0.9fr] lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">The Problem</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Enterprise payments are stuck in manual, disconnected processes.</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Retailers, suppliers and financial institutions struggle with slow settlement cycles, poor visibility, and fragmented reconciliation. That creates expensive capital requirements and leaves trade finance underutilized.</p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {[
                'Manual settlement processes between retailers and suppliers',
                'Poor visibility into receivables, payables and cash positions',
                'High working capital requirements for inventory and payables',
                'Fragmented payment systems across POS, ERP and banking partners',
                'Limited access to embedded finance and trade credit',
                'Expensive reconciliation and error-prone settlement workflows',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:items-start lg:gap-12">
              <div className="space-y-5 sm:space-y-6">
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Our Solution</p>
                <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Middleware for settlement orchestration, not another ERP.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">PayAssure sits between retailers, suppliers, ERPs, banks and payment rails to orchestrate every transaction, execute settlement, and continuously reconcile cash flow.</p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Architecture</div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm sm:rounded-3xl">
                    <div className="flex flex-col items-center gap-3 text-center text-xs font-semibold text-slate-700 sm:text-sm">
                      <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Retailer ERP</div>
                      <span className="text-slate-400">↓</span>
                      <div className="w-full rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700">PayAssure Settlement Engine</div>
                      <span className="text-slate-400">↓</span>
                      <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Suppliers</div>
                        <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">Financial Institutions</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-slate-600">PayAssure connects ERP systems, payment providers and financial institutions in a single settlement workflow that is audit-ready and configurable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* MARKET */}
          <section id="market" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[0.85fr_1.1fr] lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Market Opportunity</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">A large, underserved market across East Africa and beyond.</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are targeting the payment and settlement flows that connect manufacturers, distributors, retailers, ERP providers and financial institutions in East Africa, with broader expansion across Africa as the network scales.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'TAM', title: 'Regional supply chain payments', desc: '$9B+ in annual settlement and working capital flow across East African commerce.' },
                { label: 'SAM', title: 'ERP-connected retail trade', desc: 'Focused on manufacturers, distributors and retailers using ERP and payment providers in Kenya, Tanzania and Uganda.' },
                { label: 'SOM', title: 'Initial pilot & partner rollout', desc: 'Early traction with pilot customers, ERP partners and banks gives a defensible path to the first 50 enterprise accounts.' },
                { label: 'Target segments', title: 'Retailers · Manufacturers · Banks', desc: 'We focus on enterprise buyers with the highest settlement complexity and financing need.' },
              ].map((card) => (
                <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">{card.label}</p>
                  <p className="mt-4 text-xl font-bold text-slate-950 sm:text-2xl">{card.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WHY NOW */}
          <section id="why-now" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Why Now</p>
                  <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Market dynamics are aligning for settlement-first infrastructure.</h2>
                  <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Regulatory support, open banking, ERP adoption and growing embedded finance demand are creating a rare opportunity to define the settlement layer for African commerce.</p>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  {[
                    'Increased digital payments across retail and wholesale channels',
                    'Open banking and account-to-account settlement initiatives',
                    'Growing ERP adoption across distribution and manufacturing',
                    'Embedded finance available through payments and banking partners',
                    'Regulators encouraging faster, more transparent settlements',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                      <p className="text-sm font-semibold text-slate-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCT */}
          <section id="product" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Product</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">An API-first settlement platform for enterprise commerce.</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">PayAssure combines onboarding, API integrations, orchestration, reconciliation and embedded finance into one operational platform for enterprise customers.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {[
                'Business onboarding and account management',
                'API-first integrations for ERP, payments and banking',
                'Settlement engine with configurable workflows',
                'Payment orchestration and split settlement',
                'Reconciliation and trade finance reporting',
                'Embedded finance enablement for lending and credit',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <p className="text-sm font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BUSINESS MODEL */}
          <section id="business-model" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
              <div className="space-y-5 sm:space-y-6">
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Business Model</p>
                <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Recurring platform revenue plus transaction and financial services fees.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Our revenue mix is engineered for predictable growth, with subscription income and high-margin settlement fees supporting expansion into embedded finance.</p>
              </div>

              <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:space-y-4 sm:rounded-[2rem] sm:p-8">
                {[
                  { title: 'SaaS subscriptions', description: 'Platform access and customer onboarding for retailers, suppliers and ERP partners.' },
                  { title: 'Transaction fees', description: 'Per-transaction fees for payment orchestration, reconciliation and settlement.' },
                  { title: 'Settlement processing fees', description: 'Fees for settlement routing, account-to-account transfers and financial institution flows.' },
                  { title: 'API usage', description: 'Usage fees for high-volume integrations and data services.' },
                  { title: 'Premium analytics', description: 'Advanced trade finance reporting, risk monitoring and cash-flow intelligence.' },
                  { title: 'Embedded finance revenue sharing', description: 'Partner share from lending, credit and cash management services embedded in the workflow.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl">
                    <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMPETITIVE ADVANTAGES */}
          <section id="competitive-advantages" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Competitive Advantages</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Built to be difficult to replace.</h2>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 mt-6 sm:mt-8">
                {[
                  'API-first platform designed for modern integrations',
                  'Multi-tenant architecture for rapid partner onboarding',
                  'Settlement-first design focused on payables and receivables',
                  'ERP and payment partner integration capability',
                  'Banking partnerships and regulatory-ready flows',
                  'Network effects as suppliers, buyers and financiers join',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GO TO MARKET */}
          <section id="go-to-market" className="mt-16 grid gap-8 sm:mt-20 lg:mt-24 lg:grid-cols-[0.9fr_0.95fr] lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Go-to-Market</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">A staged path from pilots to ecosystem leadership.</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We begin with enterprise pilots, then expand through ERP partners and financial institutions to build a settlement network that becomes the default infrastructure layer.</p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {[
                { phase: 'Phase 1', items: ['Manufacturers', 'Retailers', 'Wholesalers'] },
                { phase: 'Phase 2', items: ['ERP providers', 'POS vendors'] },
                { phase: 'Phase 3', items: ['Banks', 'SACCOs', 'Digital lenders'] },
              ].map((block) => (
                <div key={block.phase} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold">{block.phase}</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CURRENT PROGRESS */}
          <section id="current-progress" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
              <div className="space-y-5 sm:space-y-6">
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Current Progress</p>
                <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Early traction with a realistic product roadmap.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are focused on concrete execution milestones that validate the business model and prepare the platform for scale.</p>
              </div>

              <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:space-y-4 sm:rounded-[2rem] sm:p-8">
                {[
                  'Business onboarding workflows designed and validated',
                  'API key management and integration architecture defined',
                  'Settlement engine under development for live routing',
                  'Pilot program launching with early retail and supplier partners',
                  'Customer discovery completed in East Africa',
                  'Company registration and compliance groundwork in place',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl">
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ROADMAP */}
          <section id="roadmap" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Roadmap</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Quarterly milestones that move the platform forward.</h2>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 mt-6 sm:mt-8">
                {[
                  { quarter: 'Q3', items: ['Pilot launch', 'Early ERP integrations'] },
                  { quarter: 'Q4', items: ['Retailer and supplier onboarding', 'Payment partner pilots'] },
                  { quarter: 'Q1', items: ['Banking integrations', 'Settlement automation live'] },
                  { quarter: 'Q2', items: ['Embedded lending rollout', 'Regional expansion planning'] },
                ].map((block) => (
                  <div key={block.quarter} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                    <p className="text-sm font-semibold text-blue-600">{block.quarter}</p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {block.items.map((item) => (<li key={item}>• {item}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TEAM */}
          <section id="team" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Team</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Founders with experience across fintech, supply chain and infrastructure.</h2>
              <div className="grid gap-5 sm:gap-6 md:grid-cols-2 mt-8 sm:mt-10">
                {[
                  { name: 'Founder', title: 'Business Vision & Go-to-Market', description: 'Experienced in enterprise sales, trade finance distribution and African commerce ecosystems.' },
                  { name: 'Technical Founder / CTO', title: 'Platform Architecture & Engineering', description: 'Specialist in backend systems, distributed settlement engines and secure financial infrastructure.' },
                ].map((member) => (
                  <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold">{member.name}</p>
                    <p className="mt-4 text-lg font-bold text-slate-950 sm:text-xl">{member.title}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INVESTMENT OPPORTUNITY */}
          <section id="investment-opportunity" className="mt-16 rounded-[1.5rem] border border-slate-200 bg-blue-600/5 p-6 shadow-sm sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:mt-24">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start lg:gap-10">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Investment Opportunity</p>
                <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Engaging strategic investors and partners for the next stage of growth.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are actively engaging investors who understand the value of settlement infrastructure and shared finance networks across African commerce.</p>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Stage</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">Pre-seed / seed stage, building the first commercial pilots with enterprise buyers.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Use of funds</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">Product development, partner integrations, pilot execution, and go-to-market expansion.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Investor profile</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">Strategic investors and partners that support infrastructure, fintech, banking, or supply chain growth in East Africa.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-16 sm:mt-20 lg:mt-24">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">FAQ</p>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Questions investors typically ask.</h2>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 mt-8 sm:mt-10">
                {[
                  { q: 'What problem does PayAssure solve?', a: 'We solve slow, opaque settlement and reconciliation between retailers, suppliers and financial institutions by automating transaction orchestration and settlement workflows.' },
                  { q: 'How do you generate revenue?', a: 'Revenue comes from SaaS subscriptions, transaction fees, settlement processing fees, API usage, premium analytics and embedded finance revenue sharing.' },
                  { q: 'Who are the competitors?', a: 'Competitors include ERP vendors, payment gateways and trade finance providers, but none focus on the settlement middleware layer for supply chain commerce in Africa.' },
                  { q: 'Why is PayAssure different?', a: 'We are settlement-first, API-driven, and designed to integrate ERP, payment and banking partners in a single operational platform.' },
                  { q: 'Which markets are you targeting?', a: 'East African manufacturers, distributors, retailers, ERP partners, banks and embedded finance providers.' },
                  { q: 'What is your expansion strategy?', a: 'Start with pilots in Kenya, then expand to neighboring markets and partner with ERP and banking ecosystems to scale.' },
                ].map((item) => (
                  <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                    <p className="text-base font-semibold text-slate-950">{item.q}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mt-16 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:mt-24">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Contact</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Investor relations and strategic partnership inquiries.</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">For investor deck requests, meeting scheduling, and partnership conversations, contact us directly below.</p>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Investor Relations</p>
                  <p className="mt-2 text-sm text-slate-600 break-words">invest@payassure.co.ke</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Schedule a meeting</p>
                  <p className="mt-2 text-sm text-slate-600">Use the contact form on the homepage or email us with availability for a briefing.</p>
                </div>
                <a
                  href="mailto:invest@payassure.co.ke?subject=PayAssure%20Investor%20Meeting"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Request a Meeting
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}