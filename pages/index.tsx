import Head from 'next/head'

export default function Blueprint() {
  return (
    <>
      <Head>
        <title>PayAssure — System Architecture Guide</title>
      </Head>

      <div className="w-full bg-slate-50 text-slate-900">
        <header className="w-full bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-700 text-white">
          <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">PayAssure Technologies</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">System Architecture Guide</h1>
              <p className="mt-5 text-lg md:text-xl text-cyan-100 max-w-3xl">A polished blueprint for PayAssure’s platform, written for technical decision makers and investors. The design highlights the business value, architecture, core modules, security, and launch roadmap.</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-md backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">Release</div>
                  <div className="mt-3 text-2xl font-semibold">v1.0</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-md backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">Date</div>
                  <div className="mt-3 text-2xl font-semibold">15 June 2026</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-md backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">Region</div>
                  <div className="mt-3 text-2xl font-semibold">Mombasa, Kenya</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12 space-y-14">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200/50">
                <h2 className="text-3xl font-semibold text-slate-900">Why this platform matters</h2>
                <p className="mt-5 text-slate-600 leading-8">PayAssure reduces cash flow risk in informal supply chains by automating invoice-backed payments, guaranteeing daily settlements, and enabling bank-grade financing. The architecture is designed for trust, visibility, and rapid growth.</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-blue-50 p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-blue-900">Business challenge</h3>
                  <p className="mt-4 text-slate-700">Manufacturers wait 60–120 days for retail payments, creating liquidity gaps and reconciliation overhead.</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-cyan-50 p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-cyan-900">Platform opportunity</h3>
                  <p className="mt-4 text-slate-700">The platform captures invoice health, enforces payment splits, and creates a trusted path for supply chain finance.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/10">
                <h3 className="text-xl font-semibold">Snapshot</h3>
                <ul className="mt-5 space-y-4 text-sm text-slate-300">
                  <li><strong>Architecture:</strong> 3-layer payment model</li>
                  <li><strong>Stack:</strong> Next.js, Node.js, PostgreSQL, Redis</li>
                  <li><strong>Payments:</strong> M-Pesa Daraja + bank APIs</li>
                  <li><strong>Compliance:</strong> Kenya DPA 2019-ready</li>
                </ul>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
                <h3 className="text-xl font-semibold">Design principles</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Financial-grade reliability with atomic transactions</li>
                  <li>Clear audit trail for every invoice and settlement</li>
                  <li>Modular components for faster launch and iteration</li>
                </ul>
              </div>
            </aside>
          </section>

          <section className="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200/40">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-600">Architecture</p>
                <h2 className="text-3xl font-semibold text-slate-900">Three-layer payment model</h2>
              </div>
              <div className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">0.8% fee capture across each layer</div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-200 text-blue-900 font-semibold">1</span>
                <h3 className="mt-6 text-2xl font-semibold text-blue-900">Instant split</h3>
                <p className="mt-4 text-slate-700">Real-time payment split at point of sale, sending agreed shares to manufacturer and retailer instantly.</p>
              </div>
              <div className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50 p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-200 text-cyan-900 font-semibold">2</span>
                <h3 className="mt-6 text-2xl font-semibold text-cyan-900">Daily float guarantee</h3>
                <p className="mt-4 text-slate-700">A ring-fenced pool covers daily manufacturer settlement obligations before final retailer payment arrives.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-100 p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-300 text-slate-900 font-semibold">3</span>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">Bank SCF</h3>
                <p className="mt-4 text-slate-700">Verified invoice data is packaged for partner banks, unlocking invoice-backed finance for manufacturers.</p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
              <h3 className="text-2xl font-semibold text-slate-900">Authentication & Access</h3>
              <p className="mt-4 text-slate-600">Secure role-based access for manufacturers, retailers, admins, and advisers, powered by JWT authentication and audit logging.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
              <h3 className="text-2xl font-semibold text-slate-900">Invoice Intelligence</h3>
              <p className="mt-4 text-slate-600">Invoices act as the single source of truth with lifecycle states, acknowledgement, dispute tracking, and history.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40">
              <h3 className="text-2xl font-semibold text-slate-900">Float & Credit</h3>
              <p className="mt-4 text-slate-600">A dedicated float pool, smart eligibility scoring, and credit scoring engine support guaranteed funding and growth.</p>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-xl shadow-slate-900/30">
              <h3 className="text-3xl font-semibold">Security & Compliance</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>JWT access + refresh rotation, short lifetime tokens.</li>
                <li>Bcrypt password encryption, strict validation, and audit logs.</li>
                <li>TLS 1.3, rate limiting, webhook validation, and PII handling.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200/40">
              <h3 className="text-3xl font-semibold text-slate-900">Integrations & Ops</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>M-Pesa Daraja for STK, B2C, and C2B payment flows.</li>
                <li>Bank APIs for invoice-backed finance and treasury reconciliation.</li>
                <li>Notifications via SMS and email for critical payment events.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200/40">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-600">Go-to-market</p>
                <h2 className="text-3xl font-semibold text-slate-900">Launch roadmap</h2>
              </div>
              <div className="rounded-full bg-slate-900 px-5 py-3 text-white">21 weeks to pilot-ready</div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Phase 1–3</h3>
                <p className="mt-3 text-slate-600">Launch auth, invoice workflows, and Layer 1 payment flows.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Phase 4–6</h3>
                <p className="mt-3 text-slate-600">Integrate M-Pesa, deploy float guarantees, and build credit scoring.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-900">Phase 7–10</h3>
                <p className="mt-3 text-slate-600">Deliver dashboards, notifications, analytics, and pilot readiness.</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-slate-900 p-10 text-white shadow-xl shadow-slate-900/30">
            <h2 className="text-3xl font-semibold">Investor highlights</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.75rem] bg-slate-950 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Market fit</p>
                <p className="mt-4 text-slate-300">Solves liquidity and trust gaps for supply chains in East Africa.</p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-950 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Differentiation</p>
                <p className="mt-4 text-slate-300">Combines instant settlements, float guarantees, and invoice-backed finance.</p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-950 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Execution</p>
                <p className="mt-4 text-slate-300">Designed for pilot validation and fast growth into formal financing channels.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>© PayAssure Technologies Limited</div>
            <div className="flex items-center gap-3">
              <button onClick={() => window.print()} className="rounded-full bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition">Print guide</button>
              <span className="text-xs text-slate-400">Confidential developer blueprint</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
