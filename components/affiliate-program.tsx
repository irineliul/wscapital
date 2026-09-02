'use client'

import { useEffect, useState } from 'react'
import { tiers } from '@/lib/broker-data'
import { Check, Network, UserPlus, Users } from 'lucide-react'

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const t = {
  en: {
    badge: 'FREE AFFILIATE PARTNERSHIP PROGRAM',
    title: 'Free Affiliate Partnership — Up to $500 per Active Investor',
    desc: 'Join the Affiliate Partnership Program for free. Earn up to $500 per active investor, depending on the country tier. Commissions are paid after verification of the investor’s deposit and minimum trading turnover. Build your own sub-affiliate team and earn additional commissions.',
    steps: [
      {
        icon: UserPlus,
        title: '1. Direct Affiliate',
        text: 'You get your own unique tracking link. Earn up to $500 for every investor activated with deposit and trading turnover.',
      },
      {
        icon: Network,
        title: '2. Sub-Affiliate',
        text: 'Recruit sub-affiliates under you and earn an extra 10% commission for every investor activated by them, unlimited.',
      },
      {
        icon: Users,
        title: '3. Multi-Territory Scaling',
        text: 'Run campaigns across multiple countries simultaneously; commission rates apply automatically based on tier. Reinvest your profits to scale your capital, expand your campaigns, and grow your affiliate network.',
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
    badge: 'PROGRAM DE PARTENERIAT AFILIAT GRATUIT',
    title: 'Parteneriat Afiliat Gratuit — Până la $500 per Investitor Activat',
    desc: 'Înscrierea în programul de afiliere este gratuită. Poți câștiga până la $500 pentru fiecare investitor activat, în funcție de grupa țării. Comisioanele sunt plătite după verificarea depozitului și a rulajului minim de tranzacționare. Construiește propria echipă de sub-afiliați și obține comisioane suplimentare.',
    steps: [
      {
        icon: UserPlus,
        title: '1. Afiliere directă',
        text: 'Primești link-ul propriu de tracking. Pentru fiecare investitor activat cu depozit și rulaj de tranzacționare încasezi până la $500, în funcție de țară.',
      },
      {
        icon: Network,
        title: '2. Sub-afiliere',
        text: 'Recrutezi alți afiliați sub tine și primești un comision suplimentar 10% pentru fiecare investitor activat de ei, fără limită de număr.',
      },
      {
        icon: Users,
        title: '3. Scalare în Mai Multe Țări',
        text: 'Rulează campanii în mai multe țări simultan; ratele de comision se aplică automat în funcție de nivel. Reinvestește profiturile pentru a-ți crește capitalul, a-ți extinde aria de promovare și a-ți dezvolta rețeaua de afiliați.',
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