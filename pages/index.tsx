import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MetricsSection from '../components/MetricsSection'
import TransactionFlowSection from '../components/TransactionFlowSection'
import ArchitectureSection from '../components/ArchitectureSection'
import EcosystemSection from '../components/EcosystemSection'
import TrustBanner from '../components/TrustBanner'
import ProblemSection from '../components/ProblemSection'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>PayAssure — Supply Chain Financial Intelligence</title>
      </Head>

      <div className="w-full min-h-screen bg-white text-slate-900">
        <Header />
        <main className="w-full space-y-16 pt-24 px-6 md:px-8 lg:px-12 mx-auto">
          <Hero />
          <MetricsSection />
          <TransactionFlowSection />
          <ArchitectureSection />
          <EcosystemSection />
          <TrustBanner />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <FeaturesSection />
          <IndustriesSection />
          <TrustIntelligenceSection />
          <TrustScoreSection />
          <SecuritySection />
          <IntegrationsSection />
          <RoadmapSection />
          <DashboardSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
