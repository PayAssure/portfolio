export default function Cookies() {
  return (
    <main className="w-full mx-auto px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Cookie Policy</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">1. Effective Date</h2>
          <p className="text-sm text-slate-600">Effective Date: June 30, 2026 · Last Updated: June 30, 2026</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">2. What Cookies Are</h2>
          <p className="text-sm text-slate-600">Cookies are small text files stored on your device that enable websites to recognize your browser, remember preferences, improve security, and provide analytics.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">3. Why We Use Cookies</h2>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Authenticate users</li>
            <li>Maintain secure sessions</li>
            <li>Prevent fraud</li>
            <li>Remember language and preferences</li>
            <li>Measure platform performance</li>
            <li>Improve user experience</li>
          </ul>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">4. Categories of Cookies</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-600 border-collapse">
              <thead>
                <tr className="text-left text-slate-800 border-b">
                  <th className="py-3 pr-6">Cookie Type</th>
                  <th className="py-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-6 font-semibold text-slate-800">Essential</td>
                  <td>Login, authentication, and security functions required for the platform to operate.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-6 font-semibold text-slate-800">Functional</td>
                  <td>Save preferences such as language and UI settings to improve your experience.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-6 font-semibold text-slate-800">Analytics</td>
                  <td>Understand website usage and behaviour to improve features and performance.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-semibold text-slate-800">Performance</td>
                  <td>Improve speed and reliability of the platform by measuring resource usage and latency.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">5. Third-party Cookies</h2>
          <p className="text-sm text-slate-600">We may use third-party services that set cookies when you visit our site. Common providers include analytics, content delivery, and payment processors. If you need a precise list of third-party cookies we currently use, we can extract them from the live site and document them here.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">6. Cookie Retention</h2>
          <p className="text-sm text-slate-600">Some cookies expire when you close your browser (session cookies), while others remain on your device for a fixed period (persistent cookies) so we can remember your preferences. Retention varies by cookie purpose.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">7. Browser Controls</h2>
          <p className="text-sm text-slate-600">You can manage cookies through your browser settings — delete cookies, block cookies, or disable third-party cookies. Note that disabling certain cookies may affect site functionality.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">8. Changes to This Policy</h2>
          <p className="text-sm text-slate-600">We may update this Cookie Policy to reflect changes in our practices or legal obligations. When we make significant changes, we will update the "Last Updated" date and, where required, obtain consent again.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm text-slate-600">If you have questions about this policy or want a detailed list of cookies in use, email <a className="text-blue-600" href="mailto:info@payassure.co.ke">info@payassure.co.ke</a>.</p>
        </article>
      </div>
    </main>
  )
}
