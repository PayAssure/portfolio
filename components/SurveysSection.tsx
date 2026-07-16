type SurveyLinks = {
  retailer: string
  supplier: string
  general: string
}

const LINKS: SurveyLinks = {
  // Replace these placeholders with the actual Google Form URLs
  retailer: 'https://docs.google.com/forms/d/e/1FAIpQLSe7JNQ9JuK8QAEWkX7ckDpy3InDkXiwK5JNmXhoE3Rz9MYlVA/viewform',
  supplier: 'https://docs.google.com/forms/d/e/1FAIpQLSe5pkahhloaoAZFNJvyohKKvan4PVCOMCDc3Tu9hyBScYfmew/viewform',
  general: 'https://docs.google.com/forms/d/e/1FAIpQLSfRr7N_jlOvwJzURWb2sLUuwJvKzUxAXgKNvIDpVviTdaEL8Q/viewform',
}

export default function SurveysSection() {
  return (
    <section id="surveys" className="w-full py-12">
      <div className="mx-auto  text-center">
        <h2 className="text-3xl font-bold text-slate-950">Help Shape the Future of Business Payments</h2>
        <p className="mt-4 text-gray-600">
          We're building PayAssure alongside retailers, suppliers, manufacturers, financial institutions, and technology partners. Your feedback helps us create solutions that address real business challenges.
        </p>

        <p className="mt-6 font-semibold">Choose the survey that best describes you:</p>

        <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <a href={LINKS.retailer} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-left shadow-sm hover:shadow-md transition">
            <span className="text-2xl">🏪</span>
            <div>
              <div className="font-semibold text-slate-900">Retailer Survey</div>
              <div className="text-xs text-slate-500">Share experiences from the retail floor</div>
            </div>
          </a>

          <a href={LINKS.supplier} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-left shadow-sm hover:shadow-md transition">
            <span className="text-2xl">🏭</span>
            <div>
              <div className="font-semibold text-slate-900">Supplier / Manufacturer Survey</div>
              <div className="text-xs text-slate-500">Tell us about supply-side finance needs</div>
            </div>
          </a>
          <a href={LINKS.general} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-left shadow-sm hover:shadow-md transition">
            <span className="text-2xl">👥</span>
            <div>
              <div className="font-semibold text-slate-900">General Business Feedback</div>
              <div className="text-xs text-slate-500">Broad feedback from any business</div>
            </div>
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">Each button opens the relevant Google Form in a new tab.</p>
      </div>
    </section>
  )
}
