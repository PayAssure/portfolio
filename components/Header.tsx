import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Investors', href: '/investors' },
  { label: 'Join Pilot', href: '#pilot' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleHashLink = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return
    event.preventDefault()

    const targetId = href.slice(1)
    const targetEl = typeof document !== 'undefined' ? document.getElementById(targetId) : null

    if (targetEl) {
      window.location.hash = href
      return
    }

    router.push(`/${href}`)
  }

  return (
    <header className="w-full fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="flex w-full items-center justify-between px-6 py-2">
          <div className="flex-none h-23 w-85 md:h-20 md:w-80 overflow-hidden rounded-md">
            <img
              src="/payassure-logo.png"
              alt="PayAssure"
              className="h-full w-full object-cover transform scale-70 md:scale-100"
            />
          </div>
 

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a key={item.href} href={item.href} onClick={handleHashLink(item.href)} className="text-sm font-medium text-slate-700 hover:text-slate-950 transition">
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-950 transition">
                {item.label}
              </Link>
            )
          ))}
          <a href="#contact" onClick={handleHashLink('#contact')} className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
            Join the Free 90-Day Pilot
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-2 px-6 py-4">
              {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a key={item.href} href={item.href} onClick={handleHashLink(item.href)} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  {item.label}
                </Link>
              )
            ))}
            <a href="#contact" onClick={handleHashLink('#contact')} className="block rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
              Join the Free 90-Day Pilot
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
