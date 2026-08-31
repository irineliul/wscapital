'use client'

import { useEffect, useRef, useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BadgeCheck, Bot, Copy, LineChart } from 'lucide-react'

const t = {
  en: {
    badge: 'AFFILIATE PROGRAM + LEVERAGE 1:500 BROKERAGE',
    title: 'Professional Investment Management with Martingale Strategy &',
    highlight: 'Up to $500 Earnings per Investor',
    desc: 'As an affiliate partner, you earn up to $500 per activated investor, depending on the country tier. Investors receive free TradingView Pro, a free Pine Script robot created with AI, and access to Copy Trading. Deposit split into 15 units for 4 Martingale levels.',
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
      { k: 'Up to $500', v: 'Affiliate Commission' },
    ],
  },

  ro: {
    badge: 'PROGRAM DE AFILIERE + BROKERAJ CU LEVERAGE 1:500',
    title: 'Administrare Profesională a Investiției cu Strategia Martingale &',
    highlight: 'Până la $500 câștig per Investitor',
    desc: 'Ca partener afiliat, beneficiezi de până la $500 pentru fiecare investitor activat, în funcție de grupa țării. Investitorii primesc TradingView Pro gratuit, un robot Pine Script creat cu AI și acces la Copy Trading. Depozitul este împărțit în 15 unități pentru 4 niveluri Martingale.',
    ctaRegister: 'Înregistrează-te acum',
    ctaCommission: 'Verifică comisioanele pe țară',
    highlights: [
      { icon: LineChart, label: 'Leverage 1:500' },
      { icon: BadgeCheck, label: 'TradingView Pro gratuit' },
      { icon: Bot, label: 'Robot Pine Script gratuit' },
      { icon: Copy, label: 'Copy Trading în brokeraj' },
    ],
    stats: [
      { k: '15', v: 'Unități' },
      { k: 'Gratuit', v: 'Afiliere' },
      { k: 'Până la $500', v: 'Comision afiliat' },
    ],
  },
}

export function Hero() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')

    if (saved === 'ro') {
      setLang('ro')
    }

    // Pornește video-ul automat după 5 secunde
    const timer = window.setTimeout(() => {
      const video = videoRef.current

      if (video) {
        video.muted = true

        video.play().catch((error) => {
          console.log('Video autoplay was blocked:', error)
        })
      }
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [])

  const content = t[lang]

  return (
    <section className="hero-striations relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">

        {/* LEFT SIDE */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
            {content.badge}
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {content.title}{' '}
            <span className="text-accent">
              {content.highlight}
            </span>
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
                <item.icon
                  className="size-4 text-accent"
                  aria-hidden="true"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 shadow-2xl">

            <video
              ref={videoRef}
              className="block h-auto w-full"
              muted
              playsInline
              controls
              preload="auto"
              poster="/images/trading-terminal.png"
            >
              <source
                src="/videos/wscapital.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

          </div>

          {/* STATS */}
          <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
            {content.stats.map((stat) => (
              <div
                key={stat.k}
                className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-2 py-3"
              >
                <dt className="font-mono text-lg font-semibold text-accent">
                  {stat.k}
                </dt>

                <dd className="mt-1 text-xs text-primary-foreground/70">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  )
}