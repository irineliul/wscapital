'use client'

import { useEffect, useMemo, useState } from 'react'
import { countries, tiers } from '@/lib/broker-data'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const t = {
  en: {
    badge: 'Complete Registration Now',
    title: 'Open your investor account & join the affiliate program',
    accountTypes: [
      {
        title: '1. Investor Account',
        desc: 'You receive by email your personalized brokerage account opening link with 1:500 leverage, the free Pine Editor trading robot and Copy Trading access. TradingView PRO is activated after your deposit is validated as an investor.',
      },
      {
        title: '2. Affiliate Partner Account',
        desc: 'You receive by email a second registration link as a partner. After approval you receive your affiliate ID and access to your dashboard with commissions, clicks and registrations.',
      },
    ],
    perks: [
      '1:500 Leverage on trading account',
      'Free TradingView Pro activated',
      'Free Trading Robot after activate — script for Pine Editor',
      'Copy Trading access + video setup guide',
      'Affiliate & sub-affiliate link dashboard',
    ],
    formTitle: 'Registration Form',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'John Doe',
    emailLabel: 'Email',
    emailPlaceholder: 'name@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+1 555 123 4567',
    countryLabel: 'Country',
    depositLabelPrefix: 'Planned Deposit (min. ',
    depositLabelSuffix: ' for activation)',
    agreeText: 'I understand that leveraged trading and the Martingale strategy carry a high risk of capital loss.',
    errInvalid: 'Please complete all required fields and verify planned deposit amount.',
    errSave: 'Failed to save registration. Please check your data and try again.',
    btnSubmit: 'Register Now',
    btnSubmitting: 'Saving...',
    commissionNoticePrefix: 'Commission for ',
    commissionNoticeMid: ': ',
    commissionNoticeSuffix: ' per active investor · sub-affiliate ',
    successTitle: 'Registration Submitted',
    successTextPrefix: 'We will send the account activation link and TradingView PRO Pine Editor script to your email. Your commission for ',
    successTextMid: ' is ',
    successTextSuffix: ' per activated investor.',
    btnAnother: 'Submit another registration',
  },
  ro: {
    badge: 'Fă înregistrarea acum',
    title: 'Deschide contul de investitor și intră în programul de afiliere',
    accountTypes: [
      {
        title: '1. Cont de investitor',
        desc: 'Primești pe email link-ul personalizat de deschidere cont în brokeraj cu leverage 1:500, robotul de tranzacționare gratuit pentru Pine Editor și acces la Copy Trading. TradingView PRO se activează după validarea depozitului ca investitor.',
      },
      {
        title: '2. Cont de partener afiliat',
        desc: 'Primești pe email al doilea link de înregistrare ca partener. După aprobare primești ID-ul tău de afiliat și accesul la dashboard cu comisioane, click-uri și înregistrări.',
      },
    ],
    perks: [
      'Leverage 1:500 pe contul de tranzacționare',
      'TradingView Pro gratuit după activare',
      'Robot de tranzacționare gratuit — script pentru Pine Editor',
      'Acces la copy trading + tutorial video de setări',
      'Link de afiliere și sub-afiliere cu dashboard',
    ],
    formTitle: 'Formular de înregistrare',
    fullNameLabel: 'Nume complet',
    fullNamePlaceholder: 'Ion Popescu',
    emailLabel: 'Email',
    emailPlaceholder: 'nume@email.com',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+40 7xx xxx xxx',
    countryLabel: 'Țară',
    depositLabelPrefix: 'Depozit planificat (min. ',
    depositLabelSuffix: ' pentru activare)',
    agreeText: 'Am înțeles că tranzacționarea cu leverage și strategia Martingal implică risc ridicat de pierdere a capitalului.',
    errInvalid: 'Completează datele obligatorii și verifică depozitul planificat.',
    errSave: 'Nu am putut salva înregistrarea. Verifică datele și încearcă din nou.',
    btnSubmit: 'Înregistrează-te acum',
    btnSubmitting: 'Se salvează...',
    commissionNoticePrefix: 'Comision pentru ',
    commissionNoticeMid: ': ',
    commissionNoticeSuffix: ' per investitor activat · sub-afiliere ',
    successTitle: 'Înregistrare trimisă',
    successTextPrefix: 'Îți vom trimite pe email link-ul de inregistrare si activare a contului și scriptul pentru TradingView PRO pentru Pine Editor ce ofera semnale de tranzactionare. Comisionul tău pentru ',
    successTextMid: ' este ',
    successTextSuffix: ' per investitor activat.',
    btnAnother: 'Trimite o altă înregistrare',
  },
}

export function RegisterForm() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')
  const [type] = useState<'investitor' | 'afiliat' | 'ambele'>('ambele')
  const [code, setCode] = useState('GB')
  const [done, setDone] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  const sorted = useMemo(
    () => [...countries].sort((a, b) => a.name.localeCompare(b.name, lang === 'ro' ? 'ro' : 'en')),
    [lang],
  )
  const country = countries.find((c) => c.code === code) ?? countries[0]
  const tier = tiers[country.tier]

  return (
    <section id="inregistrare" className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.title}
          </h2>

          {/* Cele 2 texte plasate direct sub titlu */}
          <div className="mt-6 space-y-4 text-primary-foreground/90">
            {content.accountTypes.map((item) => (
              <p key={item.title} className="text-base leading-relaxed">
                <strong className="font-semibold text-accent">{item.title}</strong> — {item.desc.replace(/^(1|2)\.\s*(Cont de investitor|Cont de partener afiliat|Investor Account|Affiliate Partner Account)\s*—\s*/, '')}
              </p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {content.perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-primary-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground p-6 text-foreground shadow-2xl sm:p-8">
          {done ? (
            <div className="py-10 text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <CheckCircle2 className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{content.successTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {content.successTextPrefix}
                {country.name}
                {content.successTextMid}
                {usd(tier.commission)}
                {content.successTextSuffix}
              </p>
              <Button
                variant="outline"
                className="mt-6 h-10 px-4"
                onClick={() => setDone(false)}
              >
                {content.btnAnother}
              </Button>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault()
                setError(null)
                setIsSubmitting(true)

                const form = new FormData(e.currentTarget)
                const fullName = String(form.get('nume') ?? '').trim()
                const email = String(form.get('email') ?? '').trim().toLowerCase()
                const phone = String(form.get('telefon') ?? '').trim()
                const depositValue = Number(form.get('depozit') ?? tier.minDeposit)

                if (fullName.length < 2 || !email || !Number.isFinite(depositValue) || depositValue < 0) {
                  setIsSubmitting(false)
                  setError(content.errInvalid)
                  return
                }

                const affiliateCode = (
                  new URLSearchParams(window.location.search).get('affiliate')?.trim() || '39778'
                )
                  .replace(/[^A-Za-z0-9_-]/g, '')
                  .slice(0, 100) || '39778'
                const supabase = createClient()
                const { error: insertError } = await supabase.from('registrations').insert({
                  full_name: fullName,
                  email,
                  phone: phone || null,
                  country_code: country.code || null,
                  country_name: country.name || null,
                  deposit: depositValue,
                  registration_type: type,
                  affiliate_ui: affiliateCode,
                })

                setIsSubmitting(false)
                if (insertError) {
                  setError(content.errSave)
                  return
                }

                window.location.assign(
                  `https://go.blackbull.com/visit/?bta=${encodeURIComponent(affiliateCode)}&brand=blackbull`,
                )
              }}
            >
              <h3 className="text-lg font-semibold">{content.formTitle}</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="nume" label={content.fullNameLabel} placeholder={content.fullNamePlaceholder} />
                <Field id="email" label={content.emailLabel} type="email" placeholder={content.emailPlaceholder} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="telefon" label={content.phoneLabel} type="tel" placeholder={content.phonePlaceholder} />
                <div>
                  <label htmlFor="tara" className="text-sm font-medium">
                    {content.countryLabel}
                  </label>
                  <select
                    id="tara"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                  >
                    {sorted.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="depozit" className="text-sm font-medium">
                  {content.depositLabelPrefix}{usd(tier.minDeposit)}{content.depositLabelSuffix}
                </label>
                <input
                  key={code}
                  id="depozit"
                  name="depozit"
                  type="number"
                  min={150}
                  step={10}
                  defaultValue={tier.minDeposit}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  required
                  className="mt-1 size-4 accent-primary"
                  name="acord"
                />
                <span>{content.agreeText}</span>
              </label>

              {error ? (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full bg-accent text-base text-accent-foreground hover:bg-accent/90"
              >
                {isSubmitting ? content.btnSubmitting : content.btnSubmit}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                {content.commissionNoticePrefix}
                {country.name}
                {content.commissionNoticeMid}
                <strong className="text-foreground">{usd(tier.commission)}</strong>
                {content.commissionNoticeSuffix}
                {usd(tier.subCommission)}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = 'text',
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
    </div>
  )
}