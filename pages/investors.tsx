import Head from 'next/head'
import InvestorsPageSections from '../components/investors/InvestorsPageSections'

export default function Investors() {
  return (
    <>
      <Head>
        <title>PayAssure Investors | Financial Infrastructure for Africa's Supply Chains</title>
        <meta name="description" content="Investor page for PayAssure: payment orchestration and settlement infrastructure for African supply chains. Learn about the market, product, business model, and progress." />
        <link rel="canonical" href="https://payassure.co.ke/investors" />
      </Head>

      <div className="w-full min-h-screen bg-white text-slate-900">
        <main className="w-full px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
          <InvestorsPageSections />
        </main>
      </div>
    </>
  )
}