import Head from 'next/head'
import InvestorsPageSections from '../components/investors/InvestorsPageSections'

export default function Investors() {
  return (
    <>
      <Head>
        <title>PayAssure Investors | Settlement Infrastructure & Cashflow Orchestration in Africa</title>
        <meta name="description" content="Investor page for PayAssure: payment orchestration and settlement infrastructure for African supply chains. Learn about the market, product, business model, and progress." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://payassure.co.ke/investors" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payassure.co.ke/investors" />
        <meta property="og:title" content="PayAssure Investors | Settlement Infrastructure & Cashflow Orchestration in Africa" />
        <meta property="og:description" content="Investor page for PayAssure: payment orchestration and settlement infrastructure for African supply chains. Learn about the market, product, business model, and progress." />
        <meta property="og:image" content="https://payassure.co.ke/og-image.png" />
        <meta property="og:site_name" content="PayAssure" />
        <meta property="og:locale" content="en_US" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://payassure.co.ke/investors" />
        <meta property="twitter:title" content="PayAssure Investors | Settlement Infrastructure & Cashflow Orchestration in Africa" />
        <meta property="twitter:description" content="Investor page for PayAssure: payment orchestration and settlement infrastructure for African supply chains. Learn about the market, product, business model, and progress." />
        <meta property="twitter:image" content="https://payassure.co.ke/og-image.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "PayAssure Investors",
          "description": "Investor page for PayAssure: payment orchestration and settlement infrastructure for African supply chains.",
          "url": "https://payassure.co.ke/investors",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://payassure.co.ke/" },
              { "@type": "ListItem", "position": 2, "name": "Investors", "item": "https://payassure.co.ke/investors" }
            ]
          }
        }) }} />
      </Head>

      {/* Structured data for investor page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'PayAssure Investors',
        'url': 'https://payassure.co.ke/investors',
        'description': 'Investor information for PayAssure: market, product, business model, financials, and team.',
        'publisher': {
          '@type': 'Organization',
          'name': 'PayAssure',
          'logo': { '@type': 'ImageObject', 'url': 'https://payassure.co.ke/logo.png' }
        }
      }) }} />

      <div className="w-full min-h-screen bg-white text-slate-900">
        <main className="w-full px-5 py-16 sm:px-6 sm:py-8 md:px-8 md:py-8">
          <InvestorsPageSections />
        </main>
      </div>
    </>
  )
}