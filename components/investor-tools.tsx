'use client'

import { useEffect, useState } from 'react'
import { Bot, Code2, Copy, Gauge, LineChart, Wallet } from 'lucide-react'

const t = {
  en: {
    badge: 'What You Get as an Investor',
    title: 'All tools included in the offer',
    tools: [
      {
        icon: Gauge,
        title: '1:500 Leverage',
        text: 'Reduced margin requirements per level, allowing execution of full 1-2-4-8 series with a small deposit.',
        tag: 'Standard Account',
      },
      {
        icon: LineChart,
        title: 'Free TradingView Pro',
        text: 'Pro subscription activated on your TradingView account after deposit verification: multiple indicators, alerts, and multi-chart layouts.',
        tag: 'Included',
      },
      {
        icon: Bot,
        title: 'Free Trading Robot',
        text: 'Investors receive the trading robot via email — an AI-generated script for Pine Editor producing trade signals.',
        tag: 'Pine Script',
      },
      {
        icon: Code2,
        title: 'Pine Editor Script',
        text: 'Copy the script into Pine Editor, add it to your 1 min chart, and receive entry signals with automated SL/TP.',
        tag: 'Signals',
      },
      {
        icon: Copy,
        title: 'Brokerage Copy Trading',
        text: 'Automatically copy top traders on the platform; set custom percentage allocations and strict risk limits.',
        tag: 'Automated',
      },
      {
        icon: Wallet,
        title: '15-Unit Capital Management',
        text: 'Your deposit is split into 15 equal units',
        tag: 'Risk Control',
      },
    ],
  },
  ro: {
    badge: 'Ce primești ca investitor',
    title: 'Toate instrumentele incluse în ofertă',
    tools: [
      {
        icon: Gauge,
        title: 'Leverage 1:500',
        text: 'Marjă redusă pe fiecare nivel Martingal, ceea ce permite rularea completă a seriei 1-2-4-8 cu un depozit mic.',
        tag: 'Cont standard',
      },
      {
        icon: LineChart,
        title: 'TradingView Pro — gratuit',
        text: 'Abonament Pro activat pe contul tău TradingView după validarea depozitului: indicatori multipli, alerte și grafice multiple.',
        tag: 'Inclus',
      },
      {
        icon: Bot,
        title: 'Robot de tranzacționare gratuit',
        text: 'Investitorii primesc gratuit pe email robotul de tranzacționare — script creat de AI pentru Pine Editor care generează semnalele de intrare.',
        tag: 'Pine Script',
      },
      {
        icon: Code2,
        title: 'Script pentru Pine Editor',
        text: 'Copiezi scriptul în Pine Editor, îl adaugi pe grafic și primești semnale cu SL/TP.',
        tag: 'Semnale',
      },
      {
        icon: Copy,
        title: 'Copy Trading în brokeraj',
        text: 'Copiază automat tranzacțiile traderilor din platformă, aloci procentual și fixezi limita de risc pentru fiecare nivel.',
        tag: 'Automatizat',
      },
      {
        icon: Wallet,
        title: 'Management pe 15 de unități',
        text: 'Depozitul este împărțit de fiecare dată la 15.',
        tag: 'Risc controlat',
      },
    ],
  },
}

export function InvestorTools() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const content = t[lang]

  return (
    <section id="instrumente" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-accent-foreground/70 uppercase">
            {content.badge}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.tools.map((tool) => (
            <li
              key={tool.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <tool.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {tool.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}