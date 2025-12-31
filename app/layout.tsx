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
        {/* Top-left logo anchor */}
        <div className="fixed top-0 left-0 z-50 p-4 safe-area-top">
          <a href="/" aria-label="Fytlo home">
            <Logo size={32} />
          </a>
        </div>
        <div className="relative z-10 min-h-dvh">
          {children}
        </div>
      </body>
    </html>
  )
}
