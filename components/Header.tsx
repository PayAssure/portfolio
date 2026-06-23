import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-40 bg-white/70 nav-backdrop shadow-sm">
      <nav className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">P</div>
          <div>
            <div className="text-sm font-semibold">PayAssure</div>
            <div className="text-xs text-gray-500 -mt-1">Software Development</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm hover:text-blue-600 transition">Services</Link>
          <Link href="#projects" className="text-sm hover:text-blue-600 transition">Projects</Link>
          <Link href="#about" className="text-sm hover:text-blue-600 transition">About</Link>
          <Link href="#contact" className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">Contact</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </nav>

        {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#services" className="py-2">Services</a>
            <a href="#projects" className="py-2">Projects</a>
            <a href="#about" className="py-2">About</a>
            <a href="#contact" className="py-2 text-white bg-blue-600 px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
