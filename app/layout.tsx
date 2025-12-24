import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fytlo',
  description: 'Fit-first virtual try-on focused on realism, not filters.',
}

export const viewport: Viewport = {
  themeColor: '#050506',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-gradient bg-grain safe-area-top safe-area-bottom">
        <div className="relative z-10 min-h-dvh">
          {children}
        </div>
      </body>
    </html>
  )
}
