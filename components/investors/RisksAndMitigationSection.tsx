const risks = [
  {
    category: 'Execution Risk',
    risks: [
      'Banking integration timelines longer than expected',
      'Regulatory approvals delayed',
      'Enterprise sales cycles longer than projected',
    ],
    mitigations: [
      'Modular architecture allows phased rollout without full banking integration',
      'Proactive engagement with regulators and legal counsel',
      'Pilot-first approach with early revenue customers',
    ],
  },
  {
    category: 'Market Risk',
    risks: [
      'Retail consolidation reduces addressable market',
      'Larger players enter the market with greater resources',
      'Digital payment adoption slower than expected',
    ],
    mitigations: [
      'Focus on underserved SME and mid-market segment',
      'Strong product differentiation and niche focus',
      'Network effects create defensibility as customer base grows',
    ],
  },
  {
    category: 'Technology Risk',
    risks: [
      'Integration complexity with diverse legacy systems',
      'Security or data privacy incidents',
      'Scaling challenges with high transaction volumes',
    ],
    mitigations: [
      'Modular API design supports flexible integrations',
      'Enterprise-grade security, encryption, and compliance frameworks',
      'Cloud infrastructure designed for 10x scale from day one',
    ],
  },
  {
    category: 'Regulatory Risk',
    risks: [
      'New financial regulations could change requirements',
      'Cross-border compliance complexity',
      'Data residency and protection requirements',
    ],
    mitigations: [
      'Flexible compliance framework that adapts to regulatory changes',
      'Regional approach starting with Kenya before cross-border expansion',
      'Data governance and encryption comply with African data protection laws',
    ],
  },
]

export default function RisksAndMitigationSection() {
  return (
    <section id="risks-mitigation" className="mt-16 sm:mt-20 lg:mt-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Risk Management</p>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">We address risks directly.</h2>
          <p className="text-base leading-7 text-slate-600">Experienced investors appreciate transparency. Here's how we're thinking about and mitigating key risks.</p>
        </div>

        <div className="grid gap-6">
          {risks.map((riskGroup, idx) => (
            <div key={idx} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-base font-bold text-orange-600">⚠</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">{riskGroup.category}</h3>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-3">Key Risks</p>
                    <ul className="space-y-2">
                      {riskGroup.risks.map((risk, riskIdx) => (
                        <li key={riskIdx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="font-bold text-red-500 flex-shrink-0">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-3">Mitigation Strategies</p>
                    <ul className="space-y-2">
                      {riskGroup.mitigations.map((mitigation, mitIdx) => (
                        <li key={mitIdx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="font-bold text-green-600 flex-shrink-0">✓</span>
                          <span>{mitigation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] border border-blue-200 bg-blue-50 p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
          <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">Our Approach</p>
          <p className="mt-4 text-base text-blue-900 leading-7">
            We believe that building a sustainable business means acknowledging risks head-on rather than ignoring them. Our team has experience navigating complex environments and adapting to regulatory and market changes. We maintain regular reviews of these risks and adjust our strategy accordingly.
          </p>
        </div>
      </div>
    </section>
  )
}
