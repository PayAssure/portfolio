const complianceItems = [
  {
    category: 'Data Security',
    items: [
      'End-to-end encryption for all transaction data',
      'AES-256 encryption at rest, TLS 1.2+ in transit',
      'Regular security audits and penetration testing',
      'Secure API authentication and rate limiting',
    ],
  },
  {
    category: 'Identity & Access',
    items: [
      'OAuth 2.0 and OpenID Connect for secure authentication',
      'Multi-factor authentication (MFA) support',
      'Role-based access control (RBAC)',
      'Comprehensive audit logging for all access',
    ],
  },
  {
    category: 'Regulatory Compliance',
    items: [
      'KYC/AML (Know Your Customer / Anti-Money Laundering) support',
      'Transaction monitoring and reporting workflows',
      'Compliance with Central Bank of Kenya guidelines',
      'PCI DSS compliance for payment processing',
    ],
  },
  {
    category: 'Data Governance',
    items: [
      'Data residency compliance (Kenya-based storage)',
      'GDPR and PDPA-aligned data protection',
      'Right to erasure and data portability',
      'Regular data retention policy reviews',
    ],
  },
  {
    category: 'Operational Resilience',
    items: [
      '99.9% uptime SLA with geographic redundancy',
      'Disaster recovery and business continuity planning',
      'Real-time monitoring and incident response',
      'Regular backups and recovery testing',
    ],
  },
  {
    category: 'Financial Reporting',
    items: [
      'Immutable audit trail for all transactions',
      'Real-time reconciliation and reporting',
      'Compliance with IFRS standards',
      'Regulatory reporting workflows',
    ],
  },
]

const bankingStrategy = [
  'Partnering with multiple tier-1 and tier-2 banks for settlement',
  'Direct API integrations with banking partners',
  'Central Bank of Kenya engagement for regulatory clarity',
  'Quarterly compliance reviews with legal and banking teams',
]

export default function RegulatoryReadinessSection() {
  return (
    <section id="regulatory-readiness" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Regulatory Strategy</p>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Built for compliance from day one.</h2>
          <p className="text-base leading-7 text-slate-600">As a financial infrastructure platform, regulatory compliance and data security are core product requirements, not afterthoughts.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {complianceItems.map((section, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">✓</span>
                </div>
                <p className="font-semibold text-slate-950">{section.category}</p>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-3">Banking Integration Strategy</p>
              <p className="text-base text-slate-700 leading-7 mb-4">We're building the platform to be banking-ready from day one, with multiple integration pathways:</p>
              <ul className="space-y-3">
                {bankingStrategy.map((strategy, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="font-bold text-blue-600 flex-shrink-0">→</span>
                    <span>{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-blue-900">Roadmap</p>
              <p className="mt-2 text-sm text-blue-900 leading-6">
                We expect to complete banking integration pilots within 6-8 months of seed funding, enabling our first production settlement partnerships by end of Year 1.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-green-200 bg-green-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-10">
          <p className="text-sm font-semibold text-green-900 uppercase tracking-widest mb-4">Regulatory Engagement</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-green-900">
              <span className="font-bold text-green-600 flex-shrink-0">✓</span>
              <span><span className="font-semibold">Central Bank Engagement:</span> We maintain ongoing dialogue with CBK for regulatory clarity and sand-box participation opportunities</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-green-900">
              <span className="font-bold text-green-600 flex-shrink-0">✓</span>
              <span><span className="font-semibold">Legal Compliance:</span> Our team includes regulatory and financial compliance expertise</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-green-900">
              <span className="font-bold text-green-600 flex-shrink-0">✓</span>
              <span><span className="font-semibold">Industry Standards:</span> We actively participate in fintech and settlement working groups to influence and align with emerging standards</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
