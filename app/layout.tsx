import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const _manrope = Manrope({ subsets: ['latin'] })
const _playfair = Playfair_Display({ subsets: ['latin'] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "WS Capital — Free Forex Affiliate Program | Up to $500 per Investor | Martingale Trading",

  description:
    "Join the WS Capital Free Forex Affiliate Program and earn up to $500 per active investor. Access Martingale Trading, 1:500 leverage, Copy Trading, TradingView Pro and a free Pine Script trading robot.",

  keywords:
    "martingale forex strategy, forex affiliate program, $500 commission per investor, leverage 1:500, copy trading, TradingView Pro free, pine script robot, blackbull affiliate, supertrend signals",

  openGraph: {
    title:
      "WS Capital — Free Forex Affiliate Program | Up to $500 per Investor",

    description:
      "Join for free and earn up to $500 per active investor. Access Martingale Trading, 1:500 leverage, Copy Trading and a free Pine Script trading robot.",

    url: "https://wscapital.app",
    siteName: "WS Capital",
    type: "website",
  },

  openGraph: {
  title: "WS Capital — Free Forex Affiliate Program | Up to $500 per Investor",
  description:
    "Join for free and earn up to $500 per active investor. Access Martingale Trading, 1:500 leverage, Copy Trading and a free Pine Script trading robot.",
  url: "https://wscapital.app",
  siteName: "WS Capital",
  type: "website",
  images: [
    {
      url: "https://wscapital.app/images/wscapital-og.png",
      width: 1200,
      height: 630,
      alt: "WS Capital — Free Forex Affiliate Program, Martingale Trading and 1:500 Leverage",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title:
    "WS Capital — Free Affiliate Program | Up to $500 per Investor | Martingale Trading",
  description:
    "Join the WS Capital Free Affiliate Partnership Program and earn up to $500 per active investor. Access Martingale Trading, 1:500 leverage, Copy Trading and a free Pine Script trading robot.",
  images: ["https://wscapital.app/images/wscapital-og.png"],
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
