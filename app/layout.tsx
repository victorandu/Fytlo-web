import type { Metadata, Viewport } from 'next'
import { Header } from '@/components'
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
      <body className="safe-area-bottom">
        <div aria-hidden="true" className="aurora-primary" />
        <div aria-hidden="true" className="aurora-secondary" />
        <Header />
        <div className="relative z-10 min-h-dvh pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
