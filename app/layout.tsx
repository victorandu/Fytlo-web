import type { Metadata, Viewport } from 'next'
import { Logo } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fytlo',
  description: 'Fit-first virtual try-on focused on realism, not filters.',
}

export const viewport: Viewport = {
  themeColor: '#0F1C2E',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-hero-gradient safe-area-top safe-area-bottom">
        {/* Brand bar: logo left, wordmark centered - same vertical rail */}
        <div className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center px-4 safe-area-top">
          {/* Logo anchor */}
          <a href="/" aria-label="Fytlo home" className="shrink-0">
            <Logo size={32} />
          </a>
          {/* Centered wordmark - absolutely positioned for true center */}
          <p className="absolute left-1/2 -translate-x-1/2 text-xl font-light tracking-[0.25em] text-[#d0d0d6] uppercase md:text-2xl">
            Fytlo
          </p>
        </div>
        <div className="relative z-10 min-h-dvh pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
