export default function Terms() {
  return (
    <main className="min-h-dvh px-4 py-16 md:py-24">
      <article className="prose-invert mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: April 2026</p>

        <p className="mt-8 text-[var(--color-muted)]">
          By using Fytlo, you agree to these terms. They&apos;re short and written in plain language.
        </p>

        <h2 className="mt-10 text-xl font-medium">What Fytlo Does</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Fytlo is a virtual try-on tool. You upload a photo, pick a garment, and we show you how it might look on you. You can save garments to your closet and build outfits. It&apos;s meant to help you shop smarter — not replace actually trying things on.
        </p>

        <h2 className="mt-10 text-xl font-medium">Your Content</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          You own your photos. When you upload a photo, you give us permission to process it for try-on and to store it in your closet. We don&apos;t claim ownership of your content.
        </p>
        <p className="mt-3 text-[var(--color-muted)]">
          If you opt in to help improve our AI, you grant us a license to use your contributed photos for model training. You can revoke this at any time. See our{' '}
          <a href="/privacy" className="text-[var(--color-foreground)] underline underline-offset-2">Privacy Policy</a>
          {' '}for details.
        </p>
        <p className="mt-3 text-[var(--color-muted)]">
          Don&apos;t upload photos you don&apos;t have rights to, or content that&apos;s illegal or harmful.
        </p>

        <h2 className="mt-10 text-xl font-medium">Free & Paid Features</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Fytlo offers a free tier with limited try-ons and core features. A paid subscription (Fytlo Pro) unlocks unlimited try-ons and premium features. Subscriptions are billed through the Apple App Store and managed by Apple. You can cancel anytime through your device&apos;s subscription settings.
        </p>
        <p className="mt-3 text-[var(--color-muted)]">
          We may change pricing or what&apos;s included in each tier. If we make changes that affect your current subscription, we&apos;ll give you notice before they take effect.
        </p>

        <h2 className="mt-10 text-xl font-medium">Accuracy</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We work hard to make try-ons realistic, but they&apos;re approximations. Fit, color, and fabric may look different in real life. Fytlo is a tool to help — not a guarantee of how something will fit.
        </p>

        <h2 className="mt-10 text-xl font-medium">Age Requirement</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          You must be at least 13 years old to use Fytlo. If you are between 13 and 18, you must have parental or guardian consent.
        </p>

        <h2 className="mt-10 text-xl font-medium">Account & Access</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          You&apos;re responsible for keeping your account secure. We may offer early access, waitlists, or limited features as we build. Access can change as we develop the product. We&apos;ll try to give notice when things change significantly.
        </p>

        <h2 className="mt-10 text-xl font-medium">Acceptable Use</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Use Fytlo for its intended purpose. Don&apos;t try to reverse-engineer, abuse, or use the service in ways that harm others or our systems. Don&apos;t use Fytlo to generate inappropriate, harmful, or misleading content.
        </p>

        <h2 className="mt-10 text-xl font-medium">Liability</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Fytlo is provided as-is. We&apos;re a small team doing our best, but we can&apos;t guarantee the service will always be available or error-free. We&apos;re not liable for purchase decisions you make based on try-on results.
        </p>

        <h2 className="mt-10 text-xl font-medium">Termination</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          You can stop using Fytlo at any time. We may suspend or terminate accounts that violate these terms. If your account is terminated, you can request deletion of your data by emailing us.
        </p>

        <h2 className="mt-10 text-xl font-medium">Changes</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We may update these terms as Fytlo evolves. If we make significant changes, we&apos;ll let you know through the app or by email. Continued use after changes means you accept the updated terms.
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
