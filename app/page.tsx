import { GlassCard, Logo, WaitlistForm } from '@/components'

export default function Home() {
  return (
    <main className="min-h-dvh">
      {/* 1. Hero */}
      <section id="hero" className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Brand mark */}
          <div className="mb-8 flex items-center justify-center gap-2 md:mb-10 md:gap-2.5">
            <Logo size={26} />
            <span className="text-xs font-medium tracking-[0.2em] text-[#b8b8bf] uppercase md:text-sm">
              Fytlo
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Fit, Not Filters. Virtual Try-On That Matches You.
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)] md:text-xl">
            Upload a photo and see how clothes fit your body — realistically.
          </p>
          <div className="mt-8">
            <div className="mx-auto max-w-md">
              <WaitlistForm />
            </div>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Limited rollout while we refine fit accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Early Fit Preview */}
      <section id="early-fit-preview" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <GlassCard>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-medium md:text-2xl">See It Before You Buy It</h2>
                <p className="mt-3 text-[var(--color-muted)]">
                  Upload a photo of yourself, pick a garment, and Fytlo shows you how it drapes on your body. Not a flat overlay — actual fit visualization that accounts for your shape.
                </p>
                <p className="mt-3 text-[var(--color-muted)]">
                  We&apos;re still refining accuracy, but early testers are already using it to avoid returns and find clothes that work.
                </p>
              </div>
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-dashed border-[var(--glass-border)] bg-[var(--color-surface)] md:w-48">
                <span className="text-sm text-[var(--color-muted)]">Preview coming soon</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 3. How Fytlo Works */}
      <section id="how-it-works" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            How Fytlo Works
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <GlassCard variant="subtle">
              <h3 className="font-medium">Step 1</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">Upload a photo</p>
            </GlassCard>
            <GlassCard variant="subtle">
              <h3 className="font-medium">Step 2</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">Choose a garment</p>
            </GlassCard>
            <GlassCard variant="subtle">
              <h3 className="font-medium">Step 3</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">See how it fits</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. Fit Is the Problem */}
      <section id="fit-problem" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Fit Is the Problem</h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Most returns happen because clothes don&apos;t fit as expected.
          </p>
        </div>
      </section>

      {/* 5. Built for Realism */}
      <section id="built-for-realism" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            Built for Realism
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <GlassCard variant="subtle">
              <h3 className="font-medium">Accurate draping</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Fabric behaves like real fabric.
              </p>
            </GlassCard>
            <GlassCard variant="subtle">
              <h3 className="font-medium">Body-aware fit</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Fit adjusts to your proportions.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 6. Early, Honest, and in Progress */}
      <section id="transparency" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <GlassCard>
            <h2 className="text-xl font-semibold md:text-2xl">
              Early, Honest, and in Progress
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              We&apos;re building in the open. Fit accuracy improves with each update.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section id="final-cta" className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Ready to see how clothes actually fit?
          </h2>
          <div className="mt-6">
            <div className="mx-auto max-w-md">
              <WaitlistForm />
            </div>
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
