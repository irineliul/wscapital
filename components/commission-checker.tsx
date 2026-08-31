'use client'

import { useEffect, useMemo, useState } from 'react'
import { countries, tiers } from '@/lib/broker-data'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Globe2 } from 'lucide-react'

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const t = {
  en: {
    badge: 'Countries',
    title: 'Check commissions by country',
    desc: 'Commission ranges between $250 and $500 per active investor, depending on country tier. Investors are considered active after deposit and minimum trading volume.',
    selectCountry: 'Select Country',
    directLabel: 'Direct active investors / month',
    subLabel: 'Sub-affiliate investors / month',
    directComm: 'Direct commission',
    perActive: 'per active investor',
    subComm: 'Sub-affiliate',
    perSub: 'per sub-affiliate investor',
    minDep: 'Deposit for activation',
    minVol: 'Minimum trading volume',
    lotsSuffix: 'standard lots',
    payout: 'Payout',
    estRev: 'Estimated Income / Month',
    fromDirect: 'from direct affiliate',
    fromSub: 'from sub-affiliate',
    registerNow: 'Register Now',
  },
  ro: {
    badge: 'Țări',
    title: 'Verifică comisioanele pe țări',
    desc: 'Comisionul este între $250 și $500 per investitor activat, în funcție de țară. Investitorul este considerat activat după depozit și după atingerea rulajului minim de tranzacționare.',
    selectCountry: 'Selectează țara',
    directLabel: 'Investitori direcți activați / lună',
    subLabel: 'Investitori din sub-afiliere / lună',
    directComm: 'Comision direct',
    perActive: 'per investitor activat',
    subComm: 'Sub-afiliere',
    perSub: 'per investitor al sub-afiliatei',
    minDep: 'Depozit pentru activare',
    minVol: 'Rulaj minim de tranzacționare',
    lotsSuffix: 'loturi standard',
    payout: 'Plată',
    estRev: 'Venit estimat / lună',
    fromDirect: 'din afiliere directă',
    fromSub: 'din sub-afiliere',
    registerNow: 'Înregistrează-te acum',
  },
}

export function CommissionChecker() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')
  const [code, setCode] = useState('GB')
  const [investors, setInvestors] = useState(5)
  const [subInvestors, setSubInvestors] = useState(10)

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  const country = useMemo(
    () => countries.find((c) => c.code === code) ?? countries[0],
    [code],
  )
  const tier = tiers[country.tier]
  const direct = tier.commission * investors
  const sub = tier.subCommission * subInvestors

  const sorted = useMemo(
    () => [...countries].sort((a, b) => a.name.localeCompare(b.name, lang === 'ro' ? 'ro' : 'en')),
    [lang],
  )

  return (
    <section id="comisioane" className="hero-striations bg-background py-16 text-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {content.desc}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Cardul Stânga - Setări / Sliders */}
          <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Globe2 className="size-4 text-primary" aria-hidden="true" />
              {content.selectCountry}
            </div>
            <select
              aria-label={content.selectCountry}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-3 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
            >
              {sorted.map((c) => (
                <option key={c.code} value={c.code} className="bg-background text-foreground">
                  {c.name}
                </option>
              ))}
            </select>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="investors"
                  className="flex items-center justify-between text-sm font-medium text-foreground"
                >
                  {content.directLabel}
                  <span className="font-mono font-bold text-primary">{investors}</span>
                </label>
                <input
                  id="investors"
                  type="range"
                  min={1}
                  max={50}
                  value={investors}
                  onChange={(e) => setInvestors(Number(e.target.value))}
                  className="mt-3 w-full accent-primary cursor-pointer"
                />
              </div>
              <div>
                <label
                  htmlFor="sub-investors"
                  className="flex items-center justify-between text-sm font-medium text-foreground"
                >
                  {content.subLabel}
                  <span className="font-mono font-bold text-primary">{subInvestors}</span>
                </label>
                <input
                  id="sub-investors"
                  type="range"
                  min={0}
                  max={200}
                  value={subInvestors}
                  onChange={(e) => setSubInvestors(Number(e.target.value))}
                  className="mt-3 w-full accent-primary cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Cardul Dreapta - Rezultate */}
          <div className="rounded-2xl border border-primary/30 bg-primary p-6 text-primary-foreground shadow-md">
            <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/80">{tier.name}</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-primary-foreground">{country.name}</h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <p className="text-xs text-primary-foreground/80">{content.directComm}</p>
                <p className="mt-1 font-mono text-3xl font-bold text-primary-foreground">
                  {usd(tier.commission)}
                </p>
                <p className="mt-1 text-xs text-primary-foreground/75">
                  {content.perActive}
                </p>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4">
                <p className="text-xs text-primary-foreground/80">{content.subComm}</p>
                <p className="mt-1 font-mono text-3xl font-bold text-primary-foreground">
                  {usd(tier.commission / 10)}
                </p>
                <p className="mt-1 text-xs text-primary-foreground/75">
                  {content.perSub}
                </p>
              </div>
            </div>

            <dl className="mt-5 grid gap-2 border-t border-primary-foreground/20 pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-primary-foreground/80">{content.minDep}</dt>
                <dd className="font-mono font-medium">{usd(tier.minDeposit)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-primary-foreground/80">{content.minVol}</dt>
                <dd className="font-mono font-medium">{tier.minVolume} {content.lotsSuffix}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-primary-foreground/80">{content.payout}</dt>
                <dd className="font-mono font-medium">
                  {tier.payout === 'Lunar' ? (lang === 'ro' ? 'Lunar' : 'Monthly') : tier.payout}
                </dd>
              </div>
            </dl>

            {/* Caseta cu Venit Estimat */}
            <div className="mt-6 rounded-xl border border-primary-foreground/20 bg-primary-foreground/15 p-5 text-primary-foreground backdrop-blur-xs">
              <p className="text-xs font-semibold tracking-widest uppercase opacity-90">
                {content.estRev}
              </p>
              <p className="mt-1 font-mono text-4xl font-bold">{usd(direct + sub)}</p>
              <p className="mt-2 text-sm text-primary-foreground/90">
                {usd(direct)} {content.fromDirect} + {usd(sub)} {content.fromSub}
              </p>
            </div>

            <a
              href="#inregistrare"
              className={cn(
                buttonVariants(),
                'mt-6 h-11 w-full bg-primary-foreground px-6 text-base font-semibold text-primary shadow-sm hover:bg-primary-foreground/90',
              )}
            >
              {content.registerNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}