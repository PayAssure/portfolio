import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found — PayAssure</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Page not found</p>
          <h1 className="mt-6 text-4xl font-bold text-slate-950">404</h1>
          <p className="mt-4 text-lg text-slate-700">The page you are looking for doesn't exist or has been moved.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Go Home</Link>
            <Link href="/investors" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Investor Page</Link>
          </div>
        </div>
      </div>
    </>
  )
}
