export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Founder Contact</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Connect directly with our founder.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">For partnership opportunities, investor meetings or strategic conversations, reach out directly to Austine.</p>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">Austine Jefwa Katsinye</p>
                <p className="text-xs font-medium text-blue-600 mt-1">Founder & CEO</p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <p className="text-sm font-medium text-slate-900">Email</p>
                <a href="mailto:info@payassure.co.ke" className="mt-1 text-sm text-blue-600 hover:text-blue-700 break-words">info@payassure.co.ke</a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">phone</p>
                <p className="mt-1 text-sm text-slate-600">0748 595539</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
