export default function AboutSection() {
  return (
    <section id="about" className="w-full rounded-xl bg-white p-10 shadow-sm border border-slate-200">
      <div className="w-full grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Mission</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Create a supply chain where manufacturers are paid on time.</h2>
          <p className="mt-4 text-gray-600 leading-7">Retailers access financing fairly. Financial institutions recover capital efficiently. Everyone benefits from trust and transparency.</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Vision</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Building Africa's financial infrastructure for commerce.</h2>
          <p className="mt-4 text-gray-600 leading-7">A platform where supply chain participants have instant access to capital, payments, and financial intelligence.</p>
        </div>
      </div>
    </section>
  )
}
