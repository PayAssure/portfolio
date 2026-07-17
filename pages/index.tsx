import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import StoryHomeSection from '../components/StoryHomeSection'
import TransactionFlowSection from '../components/TransactionFlowSection'
import TransactionFeeSection from '../components/TransactionFeeSection'
import ArchitectureSection from '../components/ArchitectureSection'
import EcosystemSection from '../components/EcosystemSection'
import TrustBanner from '../components/TrustBanner'
import ProblemSection from '../components/ProblemSection'
import RetailCreditCrisisSection from '../components/RetailCreditCrisisSection'
import SolutionSection from '../components/SolutionSection'
import HowItWorksSection from '../components/HowItWorksSection'
import FeaturesSection from '../components/FeaturesSection'
import IndustriesSection from '../components/IndustriesSection'
import TrustIntelligenceSection from '../components/TrustIntelligenceSection'
import TrustScoreSection from '../components/TrustScoreSection'
import SecuritySection from '../components/SecuritySection'
import IntegrationsSection from '../components/IntegrationsSection'
import RoadmapSection from '../components/RoadmapSection'
import DashboardSection from '../components/DashboardSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import PilotCTASection from '../components/PilotCTASection'
import TeamSection from '../components/TeamSection'
import SavingsCalculator from '../components/SavingsCalculator'
import SurveysSection from '../components/SurveysSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>PayAssure | Payment Orchestration & Settlement Platform for African Businesses</title>
        <meta name="description" content="PayAssure is a payment orchestration and settlement platform that automates supplier payments, transaction reconciliation, payment routing, and financial workflows for businesses across Africa." />
        <meta name="keywords" content="payment orchestration, settlement platform, settlement engine, automated supplier payments, payment routing, payment reconciliation, merchant settlements, financial infrastructure, business payment automation, ERP payment integration, POS integration, B2B payments Africa, payment APIs, cashflow automation, supplier settlement, multi-party payments, working capital automation, fintech Africa" />
        <meta name="author" content="PayAssure" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payassure.co.ke/" />
        <meta property="og:title" content="PayAssure | Payment Orchestration Platform for Africa" />
        <meta property="og:description" content="Automate supplier settlements, payment routing, reconciliation, and cashflow management with PayAssure." />
        <meta property="og:image" content="https://payassure.co.ke/og-image.png" />
        <meta property="og:site_name" content="PayAssure" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://payassure.co.ke/" />
        <meta property="twitter:title" content="PayAssure | Payment Orchestration Platform for Africa" />
        <meta property="twitter:description" content="Automate supplier settlements, payment routing, reconciliation, and cashflow management with PayAssure." />
        <meta property="twitter:image" content="https://payassure.co.ke/twitter-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://payassure.co.ke/" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional SEO tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Rich JSON-LD: Organization, SoftwareApplication, WebSite, BreadcrumbList, FAQPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://payassure.co.ke/#organization",
              "name": "PayAssure",
              "url": "https://payassure.co.ke",
              "logo": "https://payassure.co.ke/logo.png",
              "description": "PayAssure is a payment orchestration and settlement platform that automates supplier payments and reconciliation across Africa.",
              "foundingLocation": { "@type": "Place", "name": "Kenya" },
              "contactPoint": [{ "@type": "ContactPoint", "telephone": "+254748595539", "contactType": "Sales" }],
              "sameAs": ["https://www.linkedin.com/company/payassure"]
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://payassure.co.ke/#software",
              "name": "PayAssure",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://payassure.co.ke",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KES" }
            },
            {
              "@type": "WebSite",
              "@id": "https://payassure.co.ke/#website",
              "url": "https://payassure.co.ke/",
              "name": "PayAssure",
              "publisher": { "@id": "https://payassure.co.ke/#organization" }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://payassure.co.ke/" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is PayAssure?",
                  "acceptedAnswer": { "@type": "Answer", "text": "PayAssure is a payment orchestration and settlement platform that automates supplier payments, reconciliation, and financial workflows for businesses." }
                },
                {
                  "@type": "Question",
                  "name": "Who is PayAssure for?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Retailers, suppliers, manufacturers, financial institutions, and ERP/POS providers across Africa looking to automate settlements and reconciliation." }
                }
              ]
            }
          ]
        }) }} />
      </Head>

      <div className="w-full min-h-screen bg-white text-slate-900">
        <Header />
        <main className="w-full space-y-16 pt-1 px-6 md:px-8 lg:px-12 mx-auto">
          <Hero />
          <StoryHomeSection />
          <TrustBanner />
          <RetailCreditCrisisSection />
          <ProblemSection />
          <SolutionSection />
          <IndustriesSection />
          <HowItWorksSection />
          <TransactionFlowSection />
          <TransactionFeeSection />
          <EcosystemSection />
          <ArchitectureSection />
          <FeaturesSection />
          <TrustIntelligenceSection />
          <TrustScoreSection />
          <SavingsCalculator />
          {/* <DashboardSection /> */}
          <SecuritySection />
          <IntegrationsSection />
          <RoadmapSection />
          <AboutSection />
          <TeamSection />
          <PilotCTASection />
          <SurveysSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
