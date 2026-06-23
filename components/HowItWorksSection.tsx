import { useEffect, useMemo, useRef, useState } from 'react'

const steps = [
  { title: 'Customer Purchase', description: 'A customer initiates a purchase at retail or wholesale checkout.' },
  { title: 'POS / ERP', description: 'Point-of-sale or ERP systems capture transaction details in real time.' },
  { title: 'PayAssure Engine', description: 'The platform validates, splits, and routes payment flows instantly.' },
  { title: 'Settlement Layer', description: 'Funds are prepared for settlement across manufacturers, retailers, and banks.' },
  { title: 'Manufacturer Wallet', description: 'Manufacturers receive settlement notifications and instant balances.' },
  { title: 'Retailer Wallet', description: 'Retailers get financed, reconciled, and ready for the next order.' },
  { title: 'Bank Collection Engine', description: 'Banks manage repayment and monitor supply chain finance exposure.' },
  { title: 'Reports & Analytics', description: 'Stakeholders access actionable visibility across every transaction.' },
]

// How many visible full cards per breakpoint
const CARDS_MOBILE = 2
const CARDS_DESKTOP = 3

// Gap between cards as a percentage of the track width
// This is the space where the arrow lives
const GAP_PERCENT = 3 // % of total track width per gap slot

export default function HowItWorksSection() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const autoPlayRef = useRef<number | null>(null)

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const visibleCount = isDesktop ? CARDS_DESKTOP : CARDS_MOBILE
  const maxIndex = useMemo(() => Math.max(0, steps.length - visibleCount), [visibleCount])

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(maxIndex)
  }, [activeIndex, maxIndex])

  const handlePrev = () => setActiveIndex((c) => Math.max(0, c - 1))
  const handleNext = () => setActiveIndex((c) => Math.min(maxIndex, c + 1))

  useEffect(() => {
    if (autoPlayRef.current) window.clearInterval(autoPlayRef.current)
    autoPlayRef.current = window.setInterval(() => {
      setActiveIndex((c) => (c === maxIndex ? 0 : c + 1))
    }, 4500)
    return () => {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current)
    }
  }, [maxIndex])

  // Each "slot" in the track = card + gap (except last card has no gap after it)
  // Total track = visibleCount cards + (visibleCount - 1) gaps filling 100%
  // cardWidth% = (100 - (visibleCount - 1) * GAP_PERCENT) / visibleCount
  const totalGapPercent = (visibleCount - 1) * GAP_PERCENT
  const cardWidthPercent = (100 - totalGapPercent) / visibleCount
  // Each step in the slide = cardWidth + gap
  const slotWidthPercent = cardWidthPercent + GAP_PERCENT

  return (
    <section id="how-it-works" className="w-full rounded-xl bg-white p-10 shadow-sm border border-slate-200">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">How It Works</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-950">Transaction flow across the supply chain</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous step"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next step"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * slotWidthPercent}%)` }}
        >
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1
            return (
              <div
                key={step.title}
                className="relative flex-shrink-0 flex items-stretch"
                style={{ width: `${slotWidthPercent}%` }}
              >
                {/* Card — takes up the card portion, not the full slot */}
                <div
                  className="rounded-3xl border border-slate-200 bg-blue-50 p-6 shadow-sm flex flex-col"
                  style={{ width: `${(cardWidthPercent / slotWidthPercent) * 100}%` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-lg font-semibold text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="mt-6 text-lg font-semibold text-slate-950">{step.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>

                {/* Arrow — lives in the gap space, never overlaps the card */}
                {!isLast && (
                  <div
                    className="hidden lg:flex flex-col items-center justify-center"
                    style={{ width: `${(GAP_PERCENT / slotWidthPercent) * 100}%` }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-7xl font-black leading-none text-slate-800">→</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
        {Array.from({ length: maxIndex + 1 }).map((_, page) => (
          <button
            key={page}
            onClick={() => setActiveIndex(page)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              page === activeIndex ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to position ${page + 1}`}
          />
        ))}
      </div>
    </section>
  )
}