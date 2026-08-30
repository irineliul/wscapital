'use client'

import { useEffect, useState } from 'react'
import { tiers } from '@/lib/broker-data'
import { Check, Network, UserPlus, Users } from 'lucide-react'

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const t = {
  en: {
    badge: 'Partnership Program',
    title: 'Affiliate and sub-affiliate: $250–$500 per active investor',
    desc: 'Two-tier structure, paid after verification of deposit and trading turnover. Commission depends on the country tier.',
    steps: [
      {
        icon: UserPlus,
        title: '1. Direct Affiliate',
        text: 'You get your own unique tracking link. Earn between $250 and $500 for every investor activated with deposit and trading turnover.',
      },
      {
        icon: Network,
        title: '2. Sub-Affiliate',
        text: 'Recruit sub-affiliates under you and earn an extra 10% commission for every investor activated by them, unlimited.',
      },
      {
        icon: Users,
        title: '3. Multi-Territory Scaling',
        text: 'Run campaigns across multiple countries simultaneously; commission rates apply automatically based on tier.',
      },
    ],
    tableCaption: 'Commission rates grouped by countries',
    cols: {
      group: 'Country Group',
      direct: 'Direct Commission',
      sub: 'Sub-Affiliate',
      minDep: 'Min Deposit',
      minVol: 'Min Turnover',
      payout: 'Payout',
    },
    lotsUnit: 'lots',
    bullets: [
      'Payouts in USD, crypto, or wire transfer',
      'Real-time dashboard with clicks, registrations, and deposits',
      'Ready-to-use promotional materials and ad creatives',
      'Dedicated account manager for active affiliates',
    ],
  },
  ro: {
    badge: 'Program de parteneriat',
    title: 'Afiliere și sub-afiliere: $250–$500 per investitor activat',
    desc: 'Structură pe două niveluri, cu plată după validarea depozitului și a rulajului de tranzacționare. Comisionul depinde de țară.',
    steps: [
      {
        icon: UserPlus,
        title: '1. Afiliere directă',
        text: 'Primești link-ul propriu de tracking. Pentru fiecare investitor activat cu depozit și rulaj de tranzacționare încasezi între $250 și $500, în funcție de țară.',
      },
      {
        icon: Network,
        title: '2. Sub-afiliere',
        text: 'Recrutezi alți afiliați sub tine și primești un comision suplimentar 10% pentru fiecare investitor activat de ei, fără limită de număr.',
      },
      {
        icon: Users,
        title: '3. Scalare pe teritorii',
        text: 'Rulezi campanii pe mai multe țări în paralel, iar comisionul se aplică automat conform grupei fiecărui teritoriu.',
      },
    ],
    tableCaption: 'Grile de comision pe grupe de țări',
    cols: {
      group: 'Grupă de țări',
      direct: 'Comision direct',
      sub: 'Sub-afiliere',
      minDep: 'Depozit min.',
      minVol: 'Rulaj min.',
      payout: 'Plată',
    },
    lotsUnit: 'loturi',
    bullets: [
      'Plăți în USD, crypto sau transfer bancar',
      'Dashboard cu click-uri, înregistrări și depozite în timp real',
      'Materiale promoționale și creative gata de publicare',
      'Manager de cont dedicat pentru afiliații activi',
    ],
  },
}

export function AffiliateProgram() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  return (
    <section id="afiliere" className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-foreground/70 uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {content.desc}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {content.steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <s.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">{content.tableCaption}</caption>
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-medium">
                    {content.cols.group}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.direct}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.sub}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.minDep}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.minVol}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.payout}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.values(tiers).map((tierItem) => (
                  <tr key={tierItem.id} className="border-t border-border odd:bg-secondary/40">
                    <th scope="row" className="px-4 py-3 text-left font-medium">
                      {tierItem.name}
                    </th>
                    <td className="px-4 py-3 text-right font-mono font-semibold text-accent-foreground">
                      {usd(tierItem.commission)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono">{usd(tierItem.subCommission)}</td>
                    <td className="px-4 py-3 text-right font-mono">{usd(tierItem.minDeposit)}</td>
                    <td className="px-4 py-3 text-right font-mono">
                      {tierItem.minVolume} {content.lotsUnit}
                    </td>
                    <td className="px-4 py-3 text-right">{lang === 'en' ? tierItem.payout.replace('Lunar', 'Monthly').replace('lunar', 'monthly') : tierItem.payout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid gap-2 border-t border-border bg-secondary/40 px-5 py-5 text-sm sm:grid-cols-2">
            {content.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-accent-foreground"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}