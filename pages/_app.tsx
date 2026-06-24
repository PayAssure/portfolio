import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="pt-2">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
