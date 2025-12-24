export default function Terms() {
  return (
    <main className="min-h-dvh px-4 py-16 md:py-24">
      <article className="prose-invert mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: December 2024</p>

        <p className="mt-8 text-[var(--color-muted)]">
          By using Fytlo, you agree to these terms. They&apos;re short and written in plain language.
        </p>

        <h2 className="mt-10 text-xl font-medium">What Fytlo Does</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Fytlo is a virtual try-on tool. You upload a photo, pick a garment, and we show you how it might look on you. It&apos;s meant to help you shop smarter — not replace actually trying things on.
        </p>

        <h2 className="mt-10 text-xl font-medium">Your Content</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          You own your photos. When you upload a photo for try-on, you give us permission to process it for that purpose. We don&apos;t claim ownership of your content.
        </p>
        <p className="mt-3 text-[var(--color-muted)]">
          Don&apos;t upload photos you don&apos;t have rights to, or content that&apos;s illegal or harmful.
        </p>

        <h2 className="mt-10 text-xl font-medium">Accuracy</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We work hard to make try-ons realistic, but they&apos;re approximations. Fit, color, and fabric may look different in real life. Fytlo is a tool to help — not a guarantee of how something will fit.
        </p>

        <h2 className="mt-10 text-xl font-medium">Account & Access</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We may offer early access, waitlists, or limited features as we build. Access can change as we develop the product. We&apos;ll try to give notice when things change significantly.
        </p>

        <h2 className="mt-10 text-xl font-medium">Acceptable Use</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Use Fytlo for its intended purpose. Don&apos;t try to reverse-engineer, abuse, or use the service in ways that harm others or our systems.
        </p>

        <h2 className="mt-10 text-xl font-medium">Liability</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Fytlo is provided as-is. We&apos;re a small team doing our best, but we can&apos;t guarantee the service will always be available or error-free. We&apos;re not liable for purchase decisions you make based on try-on results.
        </p>

        <h2 className="mt-10 text-xl font-medium">Changes</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We may update these terms as Fytlo evolves. If we make significant changes, we&apos;ll let you know through the app or by email.
        </p>

        <h2 className="mt-10 text-xl font-medium">Contact</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Questions? Email us at{' '}
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
            <a href="/privacy" className="hover:text-white">Privacy</a>
          </nav>
        </footer>
      </article>
    </main>
  )
}
