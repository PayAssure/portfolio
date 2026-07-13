export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:mt-24">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Contact</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Investor relations and strategic partnership inquiries.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">For investor deck requests, meeting scheduling, and partnership conversations, contact us directly below.</p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
          <div>
            <p className="text-sm font-semibold text-slate-900">Investor Relations</p>
            <p className="mt-2 text-sm text-slate-600 break-words">info@payassure.co.ke</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Schedule a meeting</p>
            <p className="mt-2 text-sm text-slate-600">Use the contact form on the homepage or email us with availability for a briefing.</p>
          </div>
          <a href="mailto:info@payassure.co.ke?subject=PayAssure%20Investor%20Meeting" className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Request a Meeting</a>
        </div>
      </div>
    </section>
  )
}
