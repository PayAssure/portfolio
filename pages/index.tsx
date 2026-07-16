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
        <title>PayAssure — Supply Chain Financial Intelligence | Real-Time Trade Finance</title>
        <meta name="description" content="PayAssure provides real-time supply chain financial intelligence and trade finance solutions. Get trust scores, reduce payment risks, and accelerate cash flow with our AI-powered platform." />
        <meta name="keywords" content="supply chain finance, trade finance, financial intelligence, trust score, payment intelligence, supply chain risk, cash flow management, trade credit, supply chain optimization, B2B payments, financial technology, fintech, supply chain management, supply chain visibility, payment automation, trade finance platform, credit intelligence, supplier financing, working capital, invoice financing" />
        <meta name="author" content="PayAssure" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payassure.co.ke/" />
        <meta property="og:title" content="PayAssure — Supply Chain Financial Intelligence" />
        <meta property="og:description" content="Real-time supply chain financial intelligence and trade finance solutions for modern enterprises." />
        <meta property="og:image" content="https://payassure.co.ke/og-image.png" />
        <meta property="og:site_name" content="PayAssure" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://payassure.co.ke/" />
        <meta property="twitter:title" content="PayAssure — Supply Chain Financial Intelligence" />
        <meta property="twitter:description" content="Real-time supply chain financial intelligence and trade finance solutions for modern enterprises." />
        <meta property="twitter:image" content="https://payassure.co.ke/twitter-image.png" />
        
        {/* LinkedIn */}
        <meta property="linkedin:title" content="PayAssure — Supply Chain Financial Intelligence" />
        <meta property="linkedin:description" content="Real-time supply chain financial intelligence and trade finance solutions for modern enterprises." />
        
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
      </Head>

      <div className="w-full min-h-screen bg-white text-slate-900">
        <Header />
        <main className="w-full space-y-16 pt-24 px-6 md:px-8 lg:px-12 mx-auto">
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
