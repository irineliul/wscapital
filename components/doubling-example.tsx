'use client'

import { useEffect, useState } from 'react'
import { buildDoublingPlan, RISK_UNITS } from '@/lib/broker-data'

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const t = {
  en: {
    badge: 'Calculation Example',
    titlePrefix: 'What would it mean to invest just $150 for a potential x 1000 profit opportunity in 10 weeks? ',
    descPrefix: 'The goal is simple and repeatable: ',
    descTarget: '+100% per week',
    descMiddle: '. At the start of every week, recalculate your risk unit (balance divided by ',
    descSuffix: ') and run the 4-level Martingale series until target is hit. Once doubled, stop for the week and restart with the new balance.',
    caption: '10-week capital doubling plan starting from $150',
    cols: {
      week: 'Week',
      open: 'Initial Balance',
      unit: `Unit (÷${RISK_UNITS})`,
      target: 'Profit Target',
      close: 'Final Balance',
      growth: 'Growth',
    },
    weekShort: 'W',
    stats: [
      { k: '$150', v: 'Starting Capital' },
      { k: '×1,024', v: 'Multiplier after 10 doublings' },
      { k: 'Theoretical Final Balance', isDynamic: true },
    ],
    disclaimer: 'This example is a mathematical projection of 100% weekly growth, not a guarantee of returns. A single fully lost Martingale series (all 4 levels) wipes out that week\'s assigned deposit. Leveraged trading carries high capital risk.',
  },
  ro: {
    badge: 'Exemplu de calcul',
    titlePrefix: 'Cum înțelegi că este să investești doar $150 pentru o oportunitate de profit de x 1000 în 10 săptămâni? ',
    descPrefix: 'Obiectivul este simplu și repetabil: ',
    descTarget: '+100% pe săptămână',
    descMiddle: '. La începutul fiecărei săptămâni recalculezi unitatea de risc (soldul împărțit la ',
    descSuffix: ') și rulezi seria Martingale pe 4 niveluri până atingi ținta. Când soldul se dublează, oprești săptămâna și repornești cu noul sold.',
    caption: 'Plan de dublare a capitalului pe 10 săptămâni, pornind de la 150 de dolari',
    cols: {
      week: 'Săptămâna',
      open: 'Sold inițial',
      unit: `Unitate (÷${RISK_UNITS})`,
      target: 'Țintă profit',
      close: 'Sold final',
      growth: 'Creștere',
    },
    weekShort: 'S',
    stats: [
      { k: '$150', v: 'Capital de start' },
      { k: '×1.024', v: 'Multiplicator după 10 dublări' },
      { k: 'Sold final teoretic', isDynamic: true },
    ],
    disclaimer: 'Acest exemplu este o proiecție matematică a unei creșteri de 100% pe săptămână, nu o promisiune de randament. O singură serie Martingale pierdută integral (toate cele 4 niveluri) șterge depozitul alocat săptămânii respective. Tranzacționarea cu leverage implică risc ridicat de pierdere a capitalului.',
  },
}

export function DoublingExample() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]
  const plan = buildDoublingPlan(150, 10)
  const final = plan[plan.length - 1].closing
  const maxBar = final

  return (
    <section id="exemplu" className="hero-striations bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.titlePrefix}{usd(final)}{content.titleSuffix}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            {content.descPrefix}<strong>{content.descTarget}</strong>
            {content.descMiddle}{RISK_UNITS}{content.descSuffix}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">{content.caption}</caption>
              <thead>
                <tr className="border-b border-primary-foreground/15 text-primary-foreground/70">
                  <th scope="col" className="px-4 py-3 text-left font-medium">
                    {content.cols.week}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.open}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.unit}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.target}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">
                    {content.cols.close}
                  </th>
                  <th scope="col" className="hidden px-4 py-3 text-left font-medium sm:table-cell">
                    {content.cols.growth}
                  </th>
                </tr>
              </thead>
              <tbody>
                {plan.map((row) => (
                  <tr key={row.week} className="border-b border-primary-foreground/10">
                    <th scope="row" className="px-4 py-3 text-left font-semibold">
                      {content.weekShort}{row.week}
                    </th>
                    <td className="px-4 py-3 text-right font-mono">{usd(row.opening)}</td>
                    <td className="px-4 py-3 text-right font-mono text-primary-foreground/70">
                      ${row.unit.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-accent">
                      +{usd(row.profit)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-semibold">
                      {usd(row.closing)}
                    </td>
                    <td className="hidden px-4 py-3 sm:table-cell">
                      <div
                        className="h-2 rounded-full bg-accent"
                        style={{ width: `${Math.max((row.closing / maxBar) * 100, 2)}%` }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 border-t border-primary-foreground/15 p-6 sm:grid-cols-3">
            <div key="start">
              <p className="font-mono text-2xl font-semibold text-accent">$150</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{content.stats[0].v}</p>
            </div>
            <div key="multiplier">
              <p className="font-mono text-2xl font-semibold text-accent">{content.stats[1].k}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{content.stats[1].v}</p>
            </div>
            <div key="final">
              <p className="font-mono text-2xl font-semibold text-accent">{usd(final)}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{content.stats[2].v}</p>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary-foreground/60">
          {content.disclaimer}
        </p>
      </div>
    </section>
  )
}
