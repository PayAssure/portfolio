export default function DashboardSection() {
  return (
    <section id="dashboard" className="w-full py-5">
      <div className="w-full space-y-4 mb-16">
        <p className="text-sm uppercase tracking-[0.32em] text-blue-600 font-semibold">Platform Overview</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">The PayAssure Dashboard</h2>
        <p className="text-lg text-gray-600 max-w-2xl">Enterprise-grade visibility into every settlement, trust score, and financial flow.</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white px-4 py-6 sm:p-8 shadow-lg overflow-hidden">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200">
          <div>
            <h3 className="text-xl font-bold text-slate-950">PayAssure Dashboard</h3>
            <p className="text-sm text-gray-600 mt-1">Real-time supply chain finance & settlements</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Live
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex gap-6 mb-8 border-b border-slate-200 pb-0 overflow-x-auto">
          <button className="px-4 py-3 text-sm font-semibold text-blue-600 border-b-2 border-blue-600 text-slate-950 whitespace-nowrap">Overview</button>
          <button className="px-4 py-3 text-sm font-semibold text-slate-500 border-b-2 border-transparent hover:text-slate-700 whitespace-nowrap">Settlements</button>
          <button className="px-4 py-3 text-sm font-semibold text-slate-500 border-b-2 border-transparent hover:text-slate-700 whitespace-nowrap">Trust Scores</button>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 mb-8 lg:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-semibold">Today's Settlements</p>
            <p className="text-2xl font-bold text-emerald-600 mt-3">KES 245M</p>
            <p className="text-xs text-emerald-600 mt-1">↑ 12% from yesterday</p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">Avg Trust Score</p>
            <p className="text-2xl font-bold text-blue-600 mt-3">82/100</p>
            <p className="text-xs text-blue-600 mt-1">342 retailers connected</p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700 font-semibold">Reconciliation</p>
            <p className="text-2xl font-bold text-amber-600 mt-3">99.98%</p>
            <p className="text-xs text-amber-600 mt-1">Accuracy rate</p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-700 font-semibold">Active Retailers</p>
            <p className="text-2xl font-bold text-purple-600 mt-3">342</p>
            <p className="text-xs text-purple-600 mt-1">Transacting today</p>
          </div>
        </div>

        {/* Main Chart Area */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] mb-8">
          {/* Settlement Trends */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
            <p className="text-sm font-semibold text-slate-950 mb-4">Settlement Trends (7 Days)</p>
            <div className="space-y-2">
              <div className="flex items-end gap-2 h-24">
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{ height: '60%' }} />
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{ height: '75%' }} />
                <div className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{ height: '85%' }} />
                <div className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: '95%' }} />
                <div className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: '90%' }} />
                <div className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: '92%' }} />
                <div className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" style={{ height: '88%' }} />
              </div>
            </div>
            <div className="flex gap-4 mt-4 text-xs text-slate-500">
              <div>Mon</div>
              <div className="flex-1" />
              <div>Sun</div>
            </div>
          </div>

          {/* Performance */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
            <p className="text-sm font-semibold text-slate-950 mb-4">Performance Metrics</p>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600 font-medium">Uptime</p>
                  <p className="text-sm font-semibold text-emerald-600">99.99%</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: '99.99%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600 font-medium">Processing Speed</p>
                  <p className="text-sm font-semibold text-blue-600">98.2ms</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600 font-medium">Error Rate</p>
                  <p className="text-sm font-semibold text-amber-600">0.02%</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: '5%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] mb-8">
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-950">Recent Settlements</p>
              <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All →</a>
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Settlement #{1000 + i}</p>
                    <p className="text-xs text-slate-500">Retailer #{500 + i} • {i} hours ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-emerald-600">KES {(45 + i * 10).toLocaleString()}M</p>
                    <p className="text-xs text-emerald-700 font-medium">✓ Complete</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Score Distribution */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
            <p className="text-sm font-semibold text-slate-950 mb-4">Trust Score Distribution</p>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600">90-100 (Excellent)</p>
                  <p className="text-xs font-semibold text-slate-900">42%</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: '42%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600">75-89 (Good)</p>
                  <p className="text-xs font-semibold text-slate-900">38%</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '38%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600">60-74 (Fair)</p>
                  <p className="text-xs font-semibold text-slate-900">15%</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: '15%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-600">Below 60 (Risk)</p>
                  <p className="text-xs font-semibold text-slate-900">5%</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500" style={{ width: '5%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
          <p className="text-sm font-semibold text-slate-950 mb-4">Quick Actions</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a href="#" className="px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition">↓ Export Report</a>
            <a href="#" className="px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition">⚙ Settings</a>
            <a href="#" className="px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition">👥 Manage Users</a>
            <a href="#" className="px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition">📋 View Docs</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
          Talk To Us
        </a>
      </div>
    </section>
  )
}
