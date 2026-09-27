import { Analytics } from '@vercel/analytics/next'
import { headers } from 'next/headers'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Manrope, Playfair_Display } from 'next/font/google'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const _manrope = Manrope({ subsets: ['latin'] })
const _playfair = Playfair_Display({ subsets: ['latin'] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WS Capital | Forex Affiliate Program & Trading Tools',

  description:
    'Join the WS Capital forex affiliate program and access TradingView tools, Pine Script signals, copy trading and commissions up to $500 per active investor.',

  keywords:
    'martingale forex strategy, forex affiliate program, $500 commission per investor, leverage 1:500, copy trading, TradingView Pro free, pine script robot, blackbull affiliate, supertrend signals',

  verification: {
    google: 'KnH7JB4SeloisUNkSeKPnlEBk1FnIzeg2qNUsD4hMsk',
  },

  openGraph: {
    title: 'WS Capital | Forex Affiliate Program & Trading Tools',

    description:
      'Explore forex trading tools, TradingView resources, Pine Script signals, copy trading and the WS Capital affiliate program with commissions up to $500 per active investor.',

    url: 'https://wscapital.app',
    siteName: 'WS Capital',
    type: 'website',

    images: [
      {
        url: 'https://wscapital.app/images/wscapital-og.png',
        width: 1200,
        height: 630,
        alt:
          'WS Capital — Forex Affiliate Program and Trading Tools',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'WS Capital | Forex Affiliate Program & Trading Tools',

    description:
      'Explore forex trading tools, TradingView resources, Pine Script signals, copy trading and the WS Capital affiliate program with commissions up to $500 per active investor.',

    images: ['https://wscapital.app/images/wscapital-og.png'],
  },

  alternates: {
    canonical: 'https://wscapital.app',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8caf91',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const country = (await headers()).get('x-vercel-ip-country')
  const isRomanianVisitor = country?.toUpperCase() === 'RO'

  return (
    <html lang={isRomanianVisitor ? 'ro' : 'en'} className="light bg-background">
      <body className="font-sans antialiased">
        {isRomanianVisitor && (
          <script
            dangerouslySetInnerHTML={{
              __html:
                "if (!localStorage.getItem('site-language')) localStorage.setItem('site-language','ro')",
            }}
          />
        )}
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
