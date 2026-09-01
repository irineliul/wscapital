import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const _manrope = Manrope({ subsets: ['latin'] })
const _playfair = Playfair_Display({ subsets: ['latin'] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "WS Capital — Martingale Forex Strategy + Up to $500 Affiliate Program",
  description: "Turn $150 into $153,600 in 10 weeks with the 4-level Martingale strategy. Free affiliate registration: earn up to $500 per activated investor. Free Pine Script robot + TradingView Pro included.",
  keywords: "martingale forex strategy, forex affiliate program, $500 commission per investor, leverage 1:500, copy trading, TradingView Pro free, pine script robot, blackbull affiliate, supertrend signals",
  openGraph: {
    title: "WS Capital — Martingale Strategy + Affiliate Up $500",
    description: "Free affiliate registration. Earn Up to $500 per investor. 4-level Martingale with 1:500 leverage. Free Pine Script trading robot.",
    url: "https://wscapital.app",
    siteName: "WS Capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WS Capital — Earn Up to $500 per Forex Investor",
    description: "Free affiliate program + Martingale trading strategy + Pine Script robot.",
  },
  alternates: {
    canonical: "https://wscapital.app",
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8caf91',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
