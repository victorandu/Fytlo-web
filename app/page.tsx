import { GlassCard, WaitlistForm } from '@/components'

export default function Home() {
  return (
    <main className="min-h-dvh">

      {/* 1. Hero */}
      <section id="hero" className="px-4 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1.5 text-xs tracking-wide text-[var(--color-muted)] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Early Access · Invite Only
          </div>

          <h1 className="text-3xl font-semibold tracking-tight leading-tight md:text-5xl">
            Fit, Not Filters. Virtual Try-On That Matches You.
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] md:text-xl">
            Upload a photo and see how clothes fit your body — realistically.
          </p>

          {/* Liquid glass form panel */}
          <div className="mt-8 liquid-glass mx-auto max-w-lg">
            <WaitlistForm />
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Limited rollout while we refine fit accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Early Fit Preview */}
      <section id="early-fit-preview" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="liquid-glass">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">See It Before You Buy It</h2>
                <p className="mt-3 text-[var(--color-muted)]">
                  Upload a photo of yourself, pick a garment, and Fytlo shows you how it drapes on your body. Not a flat overlay — actual fit visualization that accounts for your shape.
                </p>
                <p className="mt-3 text-[var(--color-muted)]">
                  We&apos;re still refining accuracy, but early testers are already using it to avoid returns and find clothes that work.
                </p>
              </div>
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-xl border border-dashed border-[var(--glass-border)] bg-[var(--color-surface)] md:w-48">
                <span className="text-sm text-[var(--color-muted)]">Preview coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Fytlo Works */}
      <section id="how-it-works" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            How Fytlo Works
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <GlassCard variant="subtle">
              <div className="text-4xl font-bold tracking-tighter text-[var(--color-accent)] opacity-40 leading-none">01</div>
              <h3 className="mt-3 font-semibold tracking-tight">Upload a photo</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">Any well-lit photo works. No special equipment or setup required.</p>
            </GlassCard>
            <GlassCard variant="subtle">
              <div className="text-4xl font-bold tracking-tighter text-[var(--color-accent)] opacity-40 leading-none">02</div>
              <h3 className="mt-3 font-semibold tracking-tight">Choose a garment</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">Browse items and pick what you want to try on from partnered brands.</p>
            </GlassCard>
            <GlassCard variant="subtle">
              <div className="text-4xl font-bold tracking-tighter text-[var(--color-accent)] opacity-40 leading-none">03</div>
              <h3 className="mt-3 font-semibold tracking-tight">See how it fits</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">Fytlo renders the fit on your body — not a generic model or flat overlay.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. Fit Is the Problem */}
      <section id="fit-problem" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Fit Is the Problem</h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Most returns happen because clothes don&apos;t fit as expected. A size label tells you almost nothing about how a garment will actually sit on your body.
          </p>
          <p className="mt-3 text-sm font-medium text-[var(--color-accent)]">
            Fytlo shows you before you order.
          </p>
        </div>
      </section>

      {/* 5. Built for Realism */}
      <section id="built-for-realism" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Built for Realism
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <GlassCard variant="subtle">
              <h3 className="font-semibold tracking-tight">Accurate draping</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                Fabric behaves like real fabric — weight, texture, and fall included.
              </p>
            </GlassCard>
            <GlassCard variant="subtle">
              <h3 className="font-semibold tracking-tight">Body-aware fit</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                Fit adjusts to your proportions, not a standard sample size.
              </p>
            </GlassCard>
            <GlassCard variant="subtle">
              <h3 className="font-semibold tracking-tight">No generic models</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                You see the fit on your photo — not a stock body that doesn&apos;t represent you.
              </p>
            </GlassCard>
            <GlassCard variant="subtle">
              <h3 className="font-semibold tracking-tight">Works with any photo</h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                No special lighting or equipment. A standard phone photo is enough.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 6. Early, Honest, and in Progress */}
      <section id="transparency" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="liquid-glass">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Early, Honest, and in Progress
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              We&apos;re building in the open. Fit accuracy improves with each update — and early testers are part of that process.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section id="final-cta" className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to see how clothes actually fit?
          </h2>
          <div className="mt-6 liquid-glass mx-auto max-w-lg">
            <WaitlistForm />
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Limited rollout while we refine fit accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--glass-border)] px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center text-sm text-[var(--color-muted)] md:flex-row md:justify-between">
          <span>Fytlo</span>
          <nav className="flex gap-2">
            <a
              href="/privacy"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-3 transition-colors hover:text-white focus-visible:text-white active:text-white/80"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-3 transition-colors hover:text-white focus-visible:text-white active:text-white/80"
            >
              Terms
            </a>
          </nav>
        </div>
      </footer>

    </main>
  )
}
