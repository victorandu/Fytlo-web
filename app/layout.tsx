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
      <body className="bg-dark-gradient safe-area-top safe-area-bottom">
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 safe-area-top">
          <div className="mx-auto max-w-4xl">
            <a
              href="/"
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-lg p-1 transition-opacity hover:opacity-80 active:opacity-70"
              aria-label="Fytlo home"
            >
              <Logo size={36} />
            </a>
          </div>
        </header>
        <div className="relative z-10 min-h-dvh">
          {children}
        </div>
      </body>
    </html>
  )
}
