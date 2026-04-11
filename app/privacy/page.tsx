export default function Privacy() {
  return (
    <main className="min-h-dvh px-4 py-16 md:py-24">
      <article className="prose-invert mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: April 2026</p>

        <p className="mt-8 text-[var(--color-muted)]">
          Fytlo is a virtual try-on app built by Pausora Labs. We help you see how clothes fit before you buy them. Here&apos;s how we handle your data.
        </p>

        <h2 className="mt-10 text-xl font-medium">Your Photos</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          When you upload a photo to Fytlo, it is stored securely on our servers to power your closet and try-on experience. When you request a try-on, your photo and garment image are sent to our processing provider to generate the result. We do not sell your photos or share them for advertising.
        </p>

        <h2 className="mt-10 text-xl font-medium">What We Collect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li><strong className="text-[var(--color-foreground)]">Email address</strong> — for your account, waitlist, or when you contact us</li>
          <li><strong className="text-[var(--color-foreground)]">Photos</strong> — body photos and garment images you upload to your closet and for try-on</li>
          <li><strong className="text-[var(--color-foreground)]">Closet data</strong> — garments you save, outfits you create, and outfit history</li>
          <li><strong className="text-[var(--color-foreground)]">Basic device info</strong> — to fix crashes and improve the app</li>
        </ul>
        <p className="mt-3 text-[var(--color-muted)]">
          Payment processing is handled entirely by Apple through the App Store. We never see or store your payment details.
        </p>

        <h2 className="mt-10 text-xl font-medium">Third-Party Processing</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          To generate virtual try-on results, your photos are sent to a third-party processing provider. This provider processes your images solely to return the try-on result to you. They do not retain your photos after processing is complete.
        </p>

        <h2 className="mt-10 text-xl font-medium">What We Don&apos;t Do</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li>We don&apos;t sell your data</li>
          <li>We don&apos;t show ads</li>
          <li>We don&apos;t use third-party trackers</li>
          <li>We don&apos;t share your photos for advertising or marketing</li>
        </ul>

        <h2 className="mt-10 text-xl font-medium">AI Model Training (Optional)</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We may ask if you&apos;d like to help improve Fytlo by allowing us to use your photos to train our AI models. This is <strong className="text-[var(--color-foreground)]">always optional</strong> and requires your explicit, separate consent. You can use Fytlo fully without opting in. If you do opt in, you can withdraw your consent at any time, and we will remove your contributed photos from our training data.
        </p>

        <h2 className="mt-10 text-xl font-medium">Your Rights</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Depending on where you live, you may have the following rights regarding your personal data:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--color-muted)]">
          <li><strong className="text-[var(--color-foreground)]">Access</strong> — request a copy of the data we hold about you</li>
          <li><strong className="text-[var(--color-foreground)]">Deletion</strong> — request that we delete your data</li>
          <li><strong className="text-[var(--color-foreground)]">Correction</strong> — request that we correct inaccurate data</li>
          <li><strong className="text-[var(--color-foreground)]">Portability</strong> — request your data in a portable format</li>
          <li><strong className="text-[var(--color-foreground)]">Opt out of AI training</strong> — withdraw your consent at any time</li>
        </ul>
        <p className="mt-3 text-[var(--color-muted)]">
          These rights apply under regulations including the GDPR (EU), UK GDPR, and CCPA (California). To exercise any of these rights, email us at the address below.
        </p>

        <h2 className="mt-10 text-xl font-medium">Age Requirement</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Fytlo is not intended for anyone under the age of 13. If you are between 13 and 18, you may only use Fytlo with parental or guardian consent. We do not knowingly collect data from children under 13.
        </p>

        <h2 className="mt-10 text-xl font-medium">Data Retention</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Your closet data and photos are stored as long as your account is active. If you delete your account or specific items, the associated data is removed from our servers. Try-on processing data is not retained after your result is delivered.
        </p>

        <h2 className="mt-10 text-xl font-medium">Deleting Your Data</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          You can delete individual items from your closet within the app. To delete your entire account and all associated data, email us at the address below and we&apos;ll handle it within 30 days.
        </p>

        <h2 className="mt-10 text-xl font-medium">Changes to This Policy</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          We may update this policy as Fytlo evolves. If we make significant changes, we&apos;ll notify you through the app or by email. Continued use of Fytlo after changes means you accept the updated policy.
        </p>

        <h2 className="mt-10 text-xl font-medium">Contact</h2>
        <p className="mt-3 text-[var(--color-muted)]">
          Questions about your data or this policy? Reach out at{' '}
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
