'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BadgeCheck, Bot, Copy, LineChart } from 'lucide-react'

const t = {
  en: {
    badge: 'AFILIATE $250–$500 / INVESTOR + LEVERAGE 1:500 BROKERAGE',
    title: 'Professional Investment Management with Martingale Strategy &',
    highlight: '$250–$500 Earnings per Investor',
    desc: 'As an affiliate partner, you earn commissions of $250–$500 per activated investor. Investors receive free TradingView Pro, a free Pine Editor bot created by AI, and access to Copy trading. Deposit split into 15 units for 4 Martingale levels.',
    ctaRegister: 'Register now',
    ctaCommission: 'Check commissions by country',
    highlights: [
      { icon: LineChart, label: '1:500 Leverage' },
      { icon: BadgeCheck, label: 'Free TradingView Pro' },
      { icon: Bot, label: 'Free Pine Script Robot' },
      { icon: Copy, label: 'Brokerage Copy Trading' },
    ],
    stats: [
      { k: '15', v: 'Units' },
      { k: 'Free', v: 'Affiliate' },
      { k: '$250–$500', v: 'Affiliate Commission' },     
    ],
    imgAlt: 'Trading terminal with candlestick chart and order panel showing Stop Loss and Take Profit',
  },
  ro: {
    badge: 'AFILIERE $250–$500 / INVESTITOR + BROKERAJ LEVERAGE 1:500',
    title: 'Administrare Profesională a Investiției cu Strategia Martingale &',
    highlight: 'Câștiguri de $250–$500 per Investitor',
    desc: 'Ca partener afiliat beneficiezi de comisioane de $250–$500 per investitor activat. Investitorii primesc TradingView Pro gratuit, robot gratuit pentru Pine Editor creat de AI și acces la Copy trading. Depozit divizat în 15 unități pentru 4 niveluri Martingale.',
    ctaRegister: 'Înregistrează-te acum',
    ctaCommission: 'Verifică comisioanele pe țari',
    highlights: [
      { icon: LineChart, label: 'Leverage 1:500' },
      { icon: BadgeCheck, label: 'TradingView Pro gratuit' },
      { icon: Bot, label: 'Robot Pine Script gratuit' },
      { icon: Copy, label: 'Copy Trading în brokeraj' },
    ],
    stats: [
      { k: '15', v: 'Unități' },
      { k: 'Free', v: 'Afiliere' },
      { k: '$250–$500', v: 'Comision afiliat' },  
    ],
    imgAlt: 'Terminal de tranzacționare cu grafic candlestick și panou de ordine cu Stop Loss și Take Profit',
  },
}

export function Hero() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  return (
    <section className="hero-striations relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
            {content.badge}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {content.title} <span className="text-accent">{content.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {content.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inregistrare"
              className={cn(
                buttonVariants(),
                'h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90',
              )}
            >
              {content.ctaRegister}
            </a>
            <a
              href="#comisioane"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-12 border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
              )}
            >
              {content.ctaCommission}
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3">
            {content.highlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-2 text-sm"
              >
                <item.icon className="size-4 text-accent" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 shadow-2xl">
            <Image
              src="/images/trading-terminal.png"
              alt={content.imgAlt}
              width={1200}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
            {content.stats.map((stat) => (
              <div
                key={stat.k}
                className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-2 py-3"
              >
                <dt className="font-mono text-lg font-semibold text-accent">{stat.k}</dt>
                <dd className="mt-1 text-xs text-primary-foreground/70">{stat.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
