export default function PilotCTASection() {
  return (
    <section id="pilot" className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
      <div className="w-full mx-auto space-y-8 text-slate-900">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Pilot Program</p>
          <h2 className="text-4xl font-bold text-slate-950">Join Us in Building the Future of Retail Finance</h2>
          <p className="text-gray-600 leading-7 max-w-3xl">
            PayAssure is currently seeking <strong>pilot customers, strategic partners, and early investors</strong> to help shape the future of payment orchestration and automated settlements in Kenya. Whether you're a manufacturer, distributor, retailer, financial institution, or investor, we'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-2xl">🚀</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Pilot Customers</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Join our free 90-day pilot program and help shape the future of automated settlements.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              Join the Pilot
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-2xl">💼</div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Investors & Strategic Partners</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Interested in supporting PayAssure's growth? Let's discuss investment and partnership opportunities.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
