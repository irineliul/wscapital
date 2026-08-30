'use client'

import { useEffect, useState } from 'react'
import { Megaphone } from 'lucide-react'

const t = {
  en: {
    badge: 'Promotion Methods',
    title: 'Promotion methods',
    freeTitle: 'Free promotion',
    freeMethods: [
      'Share your affiliate link with your ID on Facebook pages, Instagram stories, WhatsApp groups, Telegram channels, and relevant online communities.',
      'Recommend WS Capital directly to friends, colleagues, or people interested in brokerage and trading.',
      'Create helpful educational content, short videos, or posts and include your affiliate link.',
    ],
    freeLinkLabel: 'Your free promotion link:',
    freeLinkNote: 'where ID is your affiliate number.',
    paidTitle: 'Paid traffic: Facebook Ads, Instagram Business, YouTube, TikTok Business, and X',
    paidDesc: 'Paid promotion is allowed across all 5 platforms. Use your affiliate link in this format:',
    linkNote: 'where ID is your affiliate number.',
  },
  ro: {
    badge: 'Metode de promovare',
    title: 'Metode de promovare',
    freeTitle: 'Promovare gratuită',
    freeMethods: [
      'Distribuie link-ul tău de afiliat cu ID-ul tău pe pagini de Facebook, story-uri pe Instagram, grupuri WhatsApp, canale Telegram și comunități online relevante.',
      'Recomandă WS Capital direct prietenilor, colegilor sau persoanelor interesate de brokeraj și tranzacționare.',
      'Creează conținut educațional util, videoclipuri scurte sau postări și include link-ul tău de afiliat.',
    ],
    freeLinkLabel: 'Link-ul tău pentru promovare gratuită:',
    freeLinkNote: 'unde ID este numărul tău ca afiliat.',
    paidTitle: 'Trafic plătit: Facebook Ads, Instagram Business, YouTube, TikTok Business și X',
    paidDesc: 'Promovarea cu plată este permisă pe toate cele 5 platforme. Folosești link-ul de afiliat de forma:',
    linkNote: 'unde ID este numărul tău ca afiliat.',
  },
}

export function PromotionMethods() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  return (
    <section id="promovare" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-foreground/70 uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Megaphone className="size-4" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold">{content.freeTitle}</h3>
            </div>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
              {content.freeMethods.map((method) => <li key={method}>{method}</li>)}
            </ul>
            <div className="mt-6">
              <p className="text-sm font-medium">{content.freeLinkLabel}</p>
              <p className="mt-2 rounded-lg bg-secondary px-4 py-3 font-mono text-sm break-all">
                https://wscapital.app/?affiliate=ID
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{content.freeLinkNote}</p>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-balance">{content.paidTitle}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{content.paidDesc}</p>
            <p className="mt-5 rounded-lg bg-secondary px-4 py-3 font-mono text-sm break-all">
              https://wscapital.app/?affiliate=ID
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{content.linkNote}</p>
          </article>
        </div>
      </div>
    </section>
  )
}