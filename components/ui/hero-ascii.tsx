'use client'

import { WaitlistForm } from '@/components'

export default function HeroAscii() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: 'calc(100dvh - 4rem)' }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg" />

      {/* Corner frame accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20 pointer-events-none" />
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20 pointer-events-none" style={{ bottom: '5vh' }} />
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20 pointer-events-none" style={{ bottom: '5vh' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 w-full max-w-2xl">
        {/* Top decorative line */}
        <div className="flex items-center gap-2 mb-3 opacity-60 w-full">
          <div className="flex-1 h-px bg-white" />
          <span className="text-white text-[10px] font-mono tracking-wider">001</span>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Headline */}
        <h1
          className="text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight font-mono"
          style={{ letterSpacing: '0.05em' }}
        >
          FIT, NOT
          <span className="block mt-1 lg:mt-2" style={{ color: 'var(--color-accent)' }}>
            FILTERS.
          </span>
        </h1>

        {/* Decorative dots */}
        <div className="flex gap-1 mb-3 opacity-40">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
          ))}
        </div>

        {/* Subheadline */}
        <p className="text-xs lg:text-sm text-gray-300 mb-6 leading-relaxed font-mono opacity-80">
          Upload a photo and see how clothes fit your body — realistically.
        </p>

        {/* Waitlist form */}
        <div className="liquid-glass w-full max-w-md">
          <WaitlistForm />
          <p className="mt-3 text-xs font-mono" style={{ color: 'var(--color-muted)' }}>
            Limited rollout while we refine fit accuracy.
          </p>
        </div>

        {/* Bottom notation */}
        <div className="flex items-center gap-2 mt-6 opacity-40 w-full">
          <div className="flex-1 h-px bg-white" />
          <span className="text-white text-[9px] font-mono">FYTLO VTO</span>
          <div className="flex-1 h-px bg-white" />
        </div>
      </div>
    </section>
  )
}
