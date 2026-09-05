'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, CreditCard, Megaphone, QrCode } from 'lucide-react'

const t = {
  en: {
    badge: 'Promotion Methods',
    title: 'Promotion methods',
    freeTitle: 'Free promotion',
    freeMethods: [
      'Share your affiliate link with your ID on Facebook pages, Instagram stories, WhatsApp groups, Telegram channels, and relevant online communities.',
      'Work with social media influencers who can introduce the QR code and affiliate opportunity to their audience.',
      'Recommend WS Capital directly to friends, colleagues, or people interested in brokerage and trading.',
      'Create helpful educational content, short videos, or posts and include your affiliate link.',
    ],
    qrEyebrow: 'Offline growth kit',
    qrTitle: 'The QR code that brings added profit opportunities to your business, employees, clients, and visitors',
    qrDesc: 'What do you imagine investing just $150 for a 1000x profit opportunity in 10 weeks feels like? You receive the AI-created Trading Robot free by email. All you have to do is display your QR code — on a business card, poster, banner, or directly on your phone screen — giving your clients, employees, and visitors instant access to this technology. Every scan becomes a real financial opportunity for them and a continuous source of passive income for you.',
    qrAudience: 'Ideal for fitness studios, gyms, sports clubs, wellness centers, business owners, factory managers, and partners in hotels, malls, stores, travel agencies, waiting rooms, and service hubs.',
    qrBenefits: [
      ['ZERO setup costs', 'Print-ready QR code templates, prepared for immediate use.'],
      ['Extra passive income', 'Earn commissions from every client or employee who scans and becomes an active investor.'],
      ['Universal placement', 'Perfect for high-traffic physical locations, events, factories, hotels, and commercial spaces.'],
    ],
    qrCardLabel: 'SCAN TO JOIN',
    qrCardSub: 'Free affiliate access',
    qrCta: 'Generate your QR code',
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
      'Colaborează cu influenceri din social media care pot prezenta codul QR și oportunitatea de afiliere publicului lor.',
      'Recomandă WS Capital direct prietenilor, colegilor sau persoanelor interesate de brokeraj și tranzacționare.',
      'Creează conținut educațional util, videoclipuri scurte sau postări și include link-ul tău de afiliat.',
    ],
    qrEyebrow: 'Kit de promovare offline',
    qrTitle: 'Codul QR care aduce o oportunitate de profit adăugat afacerii tale, angajaților, clienților și vizitatorilor',
    qrDesc: 'Cum crezi că este să investești doar $150 pentru o oportunitate de profit de x1000 în 10 săptămâni? Primești Gratuit Robot de tranzacționare creat de AI pe e-mail. Tot ce trebuie să faci este să arăți codul tău QR — pe o carte de vizită, pe un poster, banner sau direct pe ecranul telefonului tău, oferind clienților, angajaților și vizitatorilor tăi acces instant la această tehnologie, iar fiecare scanare devine o oportunitate financiară reală pentru ei și o sursă continuă de venit pasiv pentru tine.',
    qrAudience: 'Ideal pentru săli de fitness, săli de sport, cluburi sportive, centre de wellness, proprietari de afaceri, manageri în fabrici și parteneri din hoteluri, mall-uri, magazine, agenții de voiaj, săli de așteptare și hub-uri de servicii.',
    qrBenefits: [
      ['Costuri ZERO de configurare', 'Șabloane de coduri QR pregătite direct pentru tipar.'],
      ['Venit pasiv suplimentar', 'Generează comisioane de la fiecare client sau angajat care scanează și devine investitor activ.'],
      ['Aplicabilitate universală', 'Ideal pentru locații fizice cu trafic mare, evenimente, fabrici, hoteluri și spații comerciale.'],
    ],
    qrCardLabel: 'SCANEAZĂ PENTRU ÎNSCRIERE',
    qrCardSub: 'Acces gratuit la afiliere',
    qrCta: 'Generează codul QR',
    freeLinkLabel: 'Link-ul tău pentru promovare gratuită:',
    freeLinkNote: 'unde ID este numărul tău ca afiliat.',
    paidTitle: 'Trafic plătit: Facebook Ads, Instagram Business, YouTube, TikTok Business și X',
    paidDesc: 'Promovarea cu plată este permisă pe toate cele 5 platforme. Folosești link-ul de afiliat de forma:',
    linkNote: 'unde ID este numărul tău ca afiliat.',
  },
}

export function PromotionMethods() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')
  const [qrTarget, setQrTarget] = useState('http://wscapital.ws')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
    setQrTarget(window.location.href)
  }, [])

  const qrImage = `https://quickchart.io/qr?text=${encodeURIComponent(qrTarget)}&size=720&margin=2`
  const content = t[lang]

  return (
    <section id="promovare" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-foreground/70 uppercase">{content.badge}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{content.title}</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Megaphone className="size-4" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{content.freeTitle}</h3>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground leading-relaxed">
              {content.freeMethods.map((method) => <li key={method}>{method}</li>)}
            </ul>
            <div className="mt-6">
              <p className="text-sm font-medium">{content.freeLinkLabel}</p>
              <p className="mt-2 rounded-lg bg-secondary px-4 py-3 font-mono text-sm break-all">https://wscapital.app/?affiliate=ID</p>
              <p className="mt-3 text-sm text-muted-foreground">{content.freeLinkNote}</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_160px] lg:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <QrCode className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-semibold tracking-widest text-accent-foreground uppercase">{content.qrEyebrow}</p>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-balance sm:text-[1.35rem]">{content.qrTitle}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{content.qrDesc}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{content.qrAudience}</p>
              </div>

              <div className="mx-auto w-full max-w-[160px] rotate-2 rounded-xl bg-primary p-2.5 text-primary-foreground shadow-xl shadow-primary/20">
                <div className="rounded-lg border border-primary-foreground/20 p-3">
                  <CreditCard className="size-5" aria-hidden="true" />
                  <p className="mt-8 text-[9px] font-semibold tracking-[0.18em]">WS CAPITAL</p>
                  <div className="mt-3 rounded-md bg-card p-2">
                    <img src={qrImage} alt={`QR code linking to ${qrTarget}`} className="aspect-square w-full" />
                  </div>
                  <p className="mt-3 text-[8px] font-semibold tracking-wider">{content.qrCardLabel}</p>
                  <p className="mt-1 text-[8px] text-primary-foreground/70">{content.qrCardSub}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-secondary/50 p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {content.qrBenefits.map(([title, description]) => (
                  <div key={title}>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
              <a href={qrImage} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                {content.qrCta}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-2">
            <h3 className="text-xl font-semibold text-balance">{content.paidTitle}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{content.paidDesc}</p>
            <p className="mt-5 rounded-lg bg-secondary px-4 py-3 font-mono text-sm break-all">https://wscapital.app/?affiliate=ID</p>
            <p className="mt-3 text-sm text-muted-foreground">{content.linkNote}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
