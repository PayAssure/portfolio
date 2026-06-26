export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-950 text-slate-400">
      {/* Main footer body */}
      <div className="px-8 pt-14 pb-10 grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-900/40">
              P
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">PayAssure</div>
              <div className="text-xs text-slate-500 mt-0.5">Supply Chain Financial Intelligence</div>
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-400 max-w-xs">
            A platform designed to make African supply chains more reliable, transparent, and finance-ready — from manufacturer to retailer.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600 mt-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Operational · Mombasa, Kenya</span>
          </div>
        </div>

        {/* Product column */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Product</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Company</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
            <li><a href="#pilot" className="hover:text-white transition-colors">Join Pilot</a></li>
            <li><a href="#pilot" className="hover:text-white transition-colors">Invest</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">Get in Touch</div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">✉</span>
              <a href="mailto:info@payassure.co.ke" className="hover:text-white transition-colors">info@payassure.co.ke</a>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">✆</span>
              <a href="tel:+254791614036" className="hover:text-white transition-colors">+254 791 614 036</a>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-blue-500">⌖</span>
              <span>Mombasa, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800 mx-8" />

      {/* Bottom bar */}
      <div className="px-8 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <span>©</span>
          <span>{currentYear} PayAssure Technologies Limited. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <span className="text-slate-800">·</span>
          <a href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <span className="text-slate-800">·</span>
          <a href="/cookies" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
        </div>

        <div className="text-slate-700">
          Reg. No. PVT-RQ1K2JAY · Mombasa, Kenya
        </div>
      </div>
    </footer>
  )
}