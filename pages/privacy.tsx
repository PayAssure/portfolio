export default function Privacy() {
  return (
    <main className="w-full mx-auto px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">1. Introduction</h2>
          <p className="text-sm text-slate-600">PayAssure is committed to protecting the privacy of our users, partners, and visitors. This Privacy Policy explains what information we collect, why we collect it, how we use and share it, and the choices you have about your information.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">2. Information We Collect</h2>
          <h3 className="text-sm font-semibold text-slate-800 mt-2">Personal Information</h3>
          <p className="text-sm text-slate-600">We may collect name, email address, phone number, and other identifiers when you register, contact us, or use our services.</p>

          <h3 className="text-sm font-semibold text-slate-800 mt-3">Business Information</h3>
          <p className="text-sm text-slate-600">We may collect business name, registration number, tax information, and business address as part of onboarding and verification.</p>

          <h3 className="text-sm font-semibold text-slate-800 mt-3">Technical Information</h3>
          <p className="text-sm text-slate-600">We collect browser type, IP address, device details, and operating system information to help secure and improve the platform.</p>

          <h3 className="text-sm font-semibold text-slate-800 mt-3">Usage Information</h3>
          <p className="text-sm text-slate-600">We collect login history, API usage, transaction logs, and audit logs to operate the service, troubleshoot issues, and detect fraud.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">3. How We Use Information</h2>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Verify business identities and perform onboarding checks</li>
            <li>Provide and maintain platform services</li>
            <li>Improve security and detect fraud</li>
            <li>Meet legal and regulatory obligations</li>
            <li>Provide customer support</li>
            <li>Inform product improvements and analytics</li>
          </ul>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">4. Legal Basis for Processing</h2>
          <p className="text-sm text-slate-600">When required by law, we process data based on consent, performance of a contract, legal obligations, or our legitimate interests (such as fraud prevention and platform security).</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">5. Sharing Information</h2>
          <p className="text-sm text-slate-600">We may share data with payment providers, banking partners, cloud and infrastructure providers, identity verification services, and regulatory authorities when required. All third-party processors are bound by contracts and security measures to protect your data.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">6. Data Security</h2>
          <p className="text-sm text-slate-600">We use encryption in transit and at rest, strict access controls, multi-factor authentication for admin access, secure infrastructure, monitoring, and regular security reviews to protect data.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">7. Data Retention</h2>
          <p className="text-sm text-slate-600">We retain information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">8. Your Rights</h2>
          <p className="text-sm text-slate-600">Depending on your jurisdiction, you may have the right to access, correct, delete, or export your personal data, withdraw consent, and lodge complaints with supervisory authorities.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">9. International Transfers</h2>
          <p className="text-sm text-slate-600">Your data may be processed in jurisdictions outside your country. Where transfers occur, we apply appropriate safeguards to protect your privacy.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">10. Children's Privacy</h2>
          <p className="text-sm text-slate-600">PayAssure is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">11. Policy Updates</h2>
          <p className="text-sm text-slate-600">We may update this Privacy Policy periodically. Material changes will be reflected by updating the "Last Updated" date and, where required, notifying users.</p>
        </article>

        <article className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-blue-700 text-lg font-semibold mb-2">Contact Information</h2>
          <p className="text-sm text-slate-600">For privacy inquiries, data subject requests, or compliance questions, contact us at <a className="text-blue-600" href="mailto:info@payassure.co.ke">info@payassure.co.ke</a>.</p>
        </article>
      </div>
    </main>
  )
}
