import { useState } from 'react'

type FormState = {
  name: string
  company: string
  industry: string
  email: string
  phone: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    industry: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const payload = await response.json()
        throw new Error(payload?.error || 'Unable to send inquiry')
      }

      setStatus('success')
      setForm({ name: '', company: '', industry: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error')
    }
  }

  return (
    <section id="contact" className="w-full py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Side - Content */}
          <div className="space-y-2">
            <div>
              <p className="text-sm uppercase tracking-[0.1em] text-blue-600 font-semibold">Get In Touch</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-950">Let's explore how PayAssure can support your supply chain</h2>
              <p className="mt-4 text-gray-600">Whether you're a manufacturer, retailer, distributor, financial institution, or technology partner, we'd love to hear from you and discuss partnership opportunities.</p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 pt-4">
              <a href="mailto:hello@payassure.co.ke" className="flex items-center gap-4 p-4 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition">
                <div className="text-2xl">✉️</div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Email</p>
                  <p className="text-sm text-blue-600">hello@payassure.co.ke</p>
                </div>
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-4 p-4 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition">
                <div className="text-2xl">📱</div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Phone</p>
                  <p className="text-sm text-emerald-600">+254 791614036</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-lg border border-purple-200 bg-purple-50">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">Location</p>
                  <p className="text-sm text-purple-600">Mombasa, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-bold text-slate-950 mb-6">Send us a message</h3>

            {status === 'success' && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">Thank you! Your inquiry is on its way and we’ll reply soon.</div>
            )}
            {status === 'error' && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{errorMessage || 'Unable to send the message. Please try again.'}</div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-950">Name *</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange('name')}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-950">Company *</span>
                <input
                  type="text"
                  placeholder="Company name"
                  value={form.company}
                  onChange={handleChange('company')}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-950">Industry *</span>
                <input
                  type="text"
                  placeholder="e.g., Retail, FMCG, Healthcare"
                  value={form.industry}
                  onChange={handleChange('industry')}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-semibold text-slate-950">Email *</span>
                <input
                  type="email"
                  placeholder="hello@company.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm">
              <span className="font-semibold text-slate-950">Phone *</span>
              <input
                type="tel"
                placeholder="+254 700 000 000"
                value={form.phone}
                onChange={handleChange('phone')}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </label>

            <label className="space-y-2 text-sm">
              <span className="font-semibold text-slate-950">Message *</span>
              <textarea
                rows={4}
                placeholder="Tell us about your supply chain opportunity..."
                value={form.message}
                onChange={handleChange('message')}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 mt-6"
            >
              {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
            </button>

            <p className="text-xs text-gray-500 text-center">We'll get back to you within 24 hours</p>
          </form>
        </div>
      </div>
    </section>
  )
}

