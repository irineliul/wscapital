'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const t = {
  en: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is the Martingale strategy used on WS Capital?',
        a: 'The 4-level Martingale strategy divides your deposit into 15 equal risk units. The 4 levels use 1, 2, 4 and 8 units — summing exactly 15 — so the complete series never exceeds your deposit. Each level uses 1:500 leverage to determine lot size, with Stop Loss and Take Profit at R:R 1:2 on every level.',
      },
      {
        q: 'Is affiliate registration free?',
        a: 'Yes, registration as an affiliate partner is completely free. You register once and receive two links by email — one to open your investor account with 1:500 leverage and one to register as an affiliate partner.',
      },
      {
        q: 'How much can I earn as an affiliate partner?',
        a: 'You earn $250–$500 per activated investor, depending on your country. You also earn 10% extra commission for every investor activated by affiliates you recruit — unlimited. Build your own team in your country and scale your earnings.',
      },
      {
        q: 'What do I receive as an investor?',
        a: 'After deposit validation you receive: 1:500 leverage trading account, TradingView PRO activation, free Pine Script trading robot (Supertrend signals), Copy Trading access and video tutorial, and your affiliate and sub-affiliate dashboard link.',
      },
      {
        q: 'Can I turn $150 into $153,600 in 10 weeks?',
        a: 'This is a mathematical projection of +100% per week using the 4-level Martingale strategy. Each week you recalculate your risk unit (balance divided by 15) and run the series until the target is hit. This is not a guaranteed return — leveraged trading involves high risk of capital loss.',
      },
      {
        q: 'What is the minimum deposit to activate as an investor?',
        a: 'The minimum deposit depends on your country tier, starting from $150. After deposit and minimum trading volume validation, your investor status is confirmed and all tools are activated.',
      },
      {
        q: 'What countries are eligible for the affiliate program?',
        a: 'The program is available in most countries worldwide. Commissions range from $250 to $500 per activated investor depending on the country tier. Check the Commissions section on the site for your country.',
      },
      {
        q: 'How do I promote my affiliate link?',
        a: 'You can promote for free via Facebook groups, Instagram stories, WhatsApp, Telegram and online communities. Paid promotion is allowed on Facebook Ads, Instagram Business, YouTube, TikTok Business and X. Your personalized link format is: wscapital.app/?affiliate=YOUR_ID',
      },
    ],
  },
  ro: {
    badge: 'FAQ',
    title: 'Întrebări frecvente',
    faqs: [
      {
        q: 'Ce este strategia Martingale folosită pe WS Capital?',
        a: 'Strategia Martingale pe 4 niveluri împarte depozitul în 15 unități egale de risc. Cele 4 niveluri folosesc 1, 2, 4 și 8 unități — suma lor exactă e 15 — deci seria completă nu depășește niciodată depozitul. Fiecare nivel folosește leverage 1:500 pentru a determina volumul de loturi, cu Stop Loss și Take Profit la R:R 1:2.',
      },
      {
        q: 'Înregistrarea ca afiliat este gratuită?',
        a: 'Da, înregistrarea ca partener afiliat este complet gratuită. Te înregistrezi o singură dată și primești două linkuri pe email — unul pentru deschiderea contului de investitor cu leverage 1:500 și unul pentru înregistrarea ca partener afiliat.',
      },
      {
        q: 'Cât pot câștiga ca partener afiliat?',
        a: 'Câștigi $250–$500 per investitor activat, în funcție de țara ta. Câștigi și 10% comision suplimentar pentru fiecare investitor activat de afiliații pe care îi recrutezi — fără limită. Îți construiești propria echipă în țara ta și scalezi câștigurile.',
      },
      {
        q: 'Ce primesc ca investitor?',
        a: 'După validarea depozitului primești: cont de tranzacționare cu leverage 1:500, TradingView PRO activat, robot de tranzacționare gratuit Pine Script (semnale Supertrend), acces la Copy Trading și tutorial video, și linkul de afiliere și sub-afiliere cu dashboard.',
      },
      {
        q: 'Pot transforma $150 în $153.600 în 10 săptămâni?',
        a: 'Acesta este un exemplu matematic de creștere de +100% pe săptămână folosind strategia Martingale pe 4 niveluri. În fiecare săptămână recalculezi unitatea de risc (soldul împărțit la 15) și rulezi seria până atingi ținta. Nu este o garanție de randament — tranzacționarea cu leverage implică risc ridicat de pierdere a capitalului.',
      },
      {
        q: 'Care este depozitul minim pentru activare ca investitor?',
        a: 'Depozitul minim depinde de grupul de țări, începând de la $150. După validarea depozitului și a rulajului minim de tranzacționare, statutul de investitor e confirmat și toate instrumentele sunt activate.',
      },
      {
        q: 'Ce țări sunt eligibile pentru programul de afiliere?',
        a: 'Programul este disponibil în majoritatea țărilor din lume. Comisioanele variază între $250 și $500 per investitor activat, în funcție de grupul de țări. Verifică secțiunea Comisioane de pe site pentru țara ta.',
      },
      {
        q: 'Cum îmi promovez linkul de afiliat?',
        a: 'Poți promova gratuit prin grupuri Facebook, story-uri Instagram, WhatsApp, Telegram și comunități online. Promovarea plătită este permisă pe Facebook Ads, Instagram Business, YouTube, TikTok Business și X. Formatul linkului tău personalizat este: wscapital.app/?affiliate=ID_TĂU',
      },
    ],
  },
}

export function Faq() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-accent-foreground/70 uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <ul className="mt-10 space-y-3">
          {content.faqs.map((faq, index) => (
            <li
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium hover:bg-secondary/40 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-accent-foreground transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}