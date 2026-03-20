import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emanuel Blueboard Corporation | Premier Plastering & Blueboard — MetroWest MA',
  description: '15+ years of expert blueboard installation, plastering, and drywall finishing across MetroWest Massachusetts. Licensed, insured, trusted by contractors and homeowners.',
  keywords: 'blueboard installation, plastering, MetroWest MA, Framingham MA, skim coat, drywall, vaulted ceiling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
