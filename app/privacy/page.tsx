export default function Privacy() {
  return (
    <main className="min-h-dvh px-4 py-16 md:py-24">
      <article className="prose-invert mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: December 2024</p>

        <p className="mt-8 text-[var(--color-muted)]">
          Fytlo is a virtual try-on app. We built it to help you see how clothes fit before you buy them. Here&apos;s how we handle your data.
        </p>

        <h2 className="mt-10 text-xl font-medium">Your Photos</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          When you select a photo in Fytlo, it stays on your device. We store it locally in the app&apos;s private storage — not in your camera roll or anywhere else on your phone.
        </p>
        <p className="mt-3 text-[var(--color-muted)]">
          When you request a try-on, your photo is uploaded to our servers for processing. Once the try-on is complete, we don&apos;t keep a copy. The photo returns to being stored only on your device.
        </p>

        <h2 className="mt-10 text-xl font-medium">What We Collect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li><strong className="text-[var(--color-foreground)]">Email address</strong> — if you join our waitlist or contact us</li>
          <li><strong className="text-[var(--color-foreground)]">Photos</strong> — uploaded temporarily for try-on processing only</li>
          <li><strong className="text-[var(--color-foreground)]">Basic device info</strong> — to fix crashes and improve the app</li>
        </ul>

        <h2 className="mt-10 text-xl font-medium">What We Don&apos;t Do</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li>We don&apos;t sell your data</li>
          <li>We don&apos;t show ads</li>
          <li>We don&apos;t use third-party trackers</li>
          <li>We don&apos;t share photos with anyone</li>
        </ul>

        <h2 className="mt-10 text-xl font-medium">Model Training</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We may ask if you&apos;d like to help improve Fytlo by contributing your photos to train our models. This is always optional and requires your explicit consent. If you don&apos;t opt in, your photos are never used for training.
        </p>

        <h2 className="mt-10 text-xl font-medium">Deleting Your Data</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Your photo is stored locally on your device. To delete it, simply delete it within the app or uninstall Fytlo. If you&apos;ve shared your email with us and want it removed, email us and we&apos;ll take care of it.
        </p>

        <h2 className="mt-10 text-xl font-medium">Contact</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Questions? Reach out at{' '}
          <a
            href="mailto:fytlo.app@gmail.com"
            className="text-[var(--color-foreground)] underline underline-offset-2"
          >
            fytlo.app@gmail.com
          </a>
        </p>

        <footer className="mt-16 border-t border-[var(--glass-border)] pt-8">
          <nav className="flex gap-6 text-sm text-[var(--color-muted)]">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </nav>
        </footer>
      </article>
    </main>
  )
}
