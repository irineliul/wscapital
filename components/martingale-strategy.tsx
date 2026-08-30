'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  buildMartingaleLevels,
  lotsForMargin,
  LEVERAGE,
  RISK_UNITS,
  MIN_LOT,
  MARGIN_PER_MIN_LOT,
} from '@/lib/broker-data'
import { ShieldAlert } from 'lucide-react'

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })

const t = {
  en: {
    badge: 'Money Management',
    title: `4-Level Martingale Strategy with Deposit Divided by ${RISK_UNITS}`,
    desc: `The deposit is divided into ${RISK_UNITS} equal units. The 4 levels utilize 1, 2, 4, and 8 units, summing up to exactly ${RISK_UNITS} — ensuring the complete series never exceeds your deposit. Each level's capital is used as margin, while 1:${LEVERAGE} leverage determines lot size: lot volume doubles per level, and net gain equals pip movement × pip value.`,
    calcTitle: 'Level Calculator',
    depositLabel: 'Deposit',
    slLabel: 'Stop Loss',
    unitLabel: '1 unit (margin)',
    lotsPerUnit: `Lots / unit at 1:${LEVERAGE}`,
    lotSuffix: 'lot',
    tpLabel: 'Take Profit',
    rrRatio: 'R:R Ratio',
    totalRisk: 'Total Series Risk',
    parityTitle: `Lot Parity (1:${LEVERAGE})`,
    parityDesc1: `Margin = (lots × 100,000) ÷ ${LEVERAGE}. Results in `,
    parityDesc2: ' thus ',
    parityDesc3: ' and ',
    caption: '4 Martingale levels showing volume, margin, stop loss, and take profit',
    tableCols: {
      level: 'Level',
      mult: 'Mult.',
      margin: `Margin 1:${LEVERAGE}`,
      lots: 'Lots',
      pipVal: 'Pip Value',
      risk: 'Risk (SL)',
      tp: 'Take Profit',
      net: 'Net Profit if Win',
    },
    totalRow: 'Total',
    ruleAlert: `Fixed Rules: After reaching Take Profit, reset to Level 1 and re-divide the deposit by ${RISK_UNITS}. After Level 4, stop immediately — do not proceed to Level 5.`,
  },
  ro: {
    badge: 'Managementul banilor',
    title: 'Strategia de Martingal pe 4 niveluri, cu depozitul împărțit la 15',
    desc: `Depozitul este împărțit de fiecare dată la ${RISK_UNITS} unități egale. Cele 4 niveluri folosesc 1, 2, 4 și 8 unități, iar suma lor este exact ${RISK_UNITS} — deci seria completă nu depășește niciodată depozitul alocat. Capitalul fiecărui nivel este folosit drept marjă, iar leverage-ul de 1:${LEVERAGE} determină volumul de loturi deschis.`,
    calcTitle: 'Calculator de niveluri',
    depositLabel: 'Depozit',
    slLabel: 'Stop Loss',
    unitLabel: '1 unitate (marjă)',
    lotsPerUnit: `Loturi / unitate la 1:${LEVERAGE}`,
    lotSuffix: 'lot',
    tpLabel: 'Take Profit',
    rrRatio: 'Raport R:R',
    totalRisk: 'Risc total serie',
    parityTitle: `Paritatea de loturi (1:${LEVERAGE})`,
    parityDesc1: `Marja = (loturi × 100.000) ÷ ${LEVERAGE}. Rezultă `,
    parityDesc2: ', deci ',
    parityDesc3: ' și ',
    caption: 'Cele 4 niveluri Martingal cu volum, marjă, stop loss și take profit',
    tableCols: {
      level: 'Nivel',
      mult: 'Multipl.',
      margin: `Marjă 1:${LEVERAGE}`,
      lots: 'Loturi',
      pipVal: 'Val / pip',
      risk: 'Risc (SL)',
      tp: 'Take Profit',
      net: 'Net dacă închide pe profit',
    },
    totalRow: 'Total',
    ruleAlert: `Reguli fixe: după un Take Profit atins seria se resetează la nivelul 1 și depozitul se reîmparte din nou la ${RISK_UNITS}. După nivelul 4 seria se oprește obligatoriu — Martingalul nu se continuă la nivelul 5.`,
  },
}

export function MartingaleStrategy() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')
  const [deposit, setDeposit] = useState(150)
  const [stopLossPips, setStopLossPips] = useState(20)

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  const levels = useMemo(
    () => buildMartingaleLevels(deposit || 0, stopLossPips || 1),
    [deposit, stopLossPips],
  )
  const unit = (deposit || 0) / RISK_UNITS

  return (
    <section id="strategie" className="bg-background py-16 lg:py-24">
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

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="rounded-2xl border border-border bg-secondary/60 p-6">
            <h3 className="text-base font-semibold">{content.calcTitle}</h3>
            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="deposit"
                  className="flex items-center justify-between text-sm font-medium"
                >
                  {content.depositLabel}
                  <span className="font-mono text-accent-foreground">{usd(deposit)}</span>
                </label>
                <input
                  id="deposit"
                  type="range"
                  min={150}
                  max={10000}
                  step={10}
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="mt-3 w-full accent-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="sl"
                  className="flex items-center justify-between text-sm font-medium"
                >
                  {content.slLabel}
                  <span className="font-mono text-accent-foreground">{stopLossPips} pips</span>
                </label>
                <input
                  id="sl"
                  type="range"
                  min={5}
                  max={60}
                  step={1}
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(Number(e.target.value))}
                  className="mt-3 w-full accent-primary"
                />
              </div>

              <dl className="grid gap-3 border-t border-border pt-5 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{content.unitLabel}</dt>
                  <dd className="font-mono font-semibold">{usd(unit)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{content.lotsPerUnit}</dt>
                  <dd className="font-mono font-semibold">{lotsForMargin(unit).toFixed(2)} {content.lotSuffix}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{content.tpLabel}</dt>
                  <dd className="font-mono font-semibold">{stopLossPips * 2} pips</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{content.rrRatio}</dt>
                  <dd className="font-mono font-semibold">1:2</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{content.totalRisk}</dt>
                  <dd className="font-mono font-semibold">{usd(unit * RISK_UNITS)}</dd>
                </div>
              </dl>

              <div className="mt-5 rounded-lg border border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">{content.parityTitle}</p>
                <p className="mt-1">
                  {content.parityDesc1}
                  <span className="font-mono text-accent-foreground">
                    {usd(MARGIN_PER_MIN_LOT)} = {MIN_LOT.toFixed(2)} {content.lotSuffix}
                  </span>
                  {content.parityDesc2}
                  <span className="font-mono text-accent-foreground">
                    $10 = {lotsForMargin(10).toFixed(2)} {content.lotSuffix}
                  </span>
                  {content.parityDesc3}
                  <span className="font-mono text-accent-foreground">
                    $100 = {lotsForMargin(100).toFixed(2)} {content.lotSuffix}
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <caption className="sr-only">{content.caption}</caption>
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left font-medium">
                      {content.tableCols.level}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.mult}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.margin}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.lots}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.pipVal}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.risk}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.tp}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-medium">
                      {content.tableCols.net}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {levels.map((l) => (
                    <tr key={l.level} className="border-t border-border odd:bg-secondary/40">
                      <th scope="row" className="px-4 py-3 text-left font-semibold">
                        N{l.level}
                      </th>
                      <td className="px-4 py-3 text-right font-mono">{l.multiplier}×</td>
                      <td className="px-4 py-3 text-right font-mono">{usd(l.margin)}</td>
                      <td className="px-4 py-3 text-right font-mono">
                        {l.lots.toFixed(2)} {content.lotSuffix}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">{usd(l.pipValue)}</td>
                      <td className="px-4 py-3 text-right font-mono text-destructive">
                        −{usd(l.risk)}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">+{usd(l.takeProfit)}</td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-accent-foreground">
                        +{usd(l.netIfWin)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-primary bg-secondary/70 font-semibold">
                    <th scope="row" className="px-4 py-3 text-left">
                      {content.totalRow}
                    </th>
                    <td className="px-4 py-3 text-right font-mono">{RISK_UNITS}×</td>
                    <td className="px-4 py-3 text-right font-mono">
                      {usd(levels.reduce((s, l) => s + l.margin, 0))}
                    </td>
                    <td className="px-4 py-3 text-right font-mono">
                      {levels.reduce((s, l) => s + l.lots, 0).toFixed(2)} {content.lotSuffix}
                    </td>
                    <td className="px-4 py-3 text-right font-mono">—</td>
                    <td className="px-4 py-3 text-right font-mono text-destructive">
                      −{usd(unit * RISK_UNITS)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono">—</td>
                    <td className="px-4 py-3 text-right font-mono">—</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="flex items-start gap-3 border-t border-border bg-secondary/40 px-4 py-4 text-sm text-muted-foreground">
              <ShieldAlert
                className="mt-0.5 size-4 shrink-0 text-destructive"
                aria-hidden="true"
              />
              <p className="leading-relaxed">{content.ruleAlert}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}