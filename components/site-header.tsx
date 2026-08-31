'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LanguageSelector } from '@/components/language-selector'

const navItems = {
  en: [
    { href: '#exemplu',     label: 'Calculation' },
    { href: '#strategie',   label: 'Strategy' },
    { href: '#instrumente', label: 'Tools' },
    { href: '#afiliere',    label: 'Affiliates' },
    { href: '#comisioane',  label: 'Commissions' },
    { href: '#promovare',   label: 'Promotions' },
  ],
  ro: [
    { href: '#exemplu',     label: 'Exemplu calcul' },
    { href: '#strategie',   label: 'Strategie' },
    { href: '#instrumente', label: 'Instrumente' },
    { href: '#afiliere',    label: 'Afiliere' },
    { href: '#comisioane',  label: 'Comisioane' },
    { href: '#promovare',   label: 'Promovare' },
  ],
}

export function SiteHeader() {
  const [lang, setLang] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro') setLang('ro')
  }, [])

  const items = navItems[lang]
  const btnLabel = lang === 'en' ? 'Register Free' : 'Înregistrare gratuită'

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image
            src="/images/wsg-dragon.png"
            alt="WS Capital — Wolf Snake Capital"
            width={44}
            height={44}
            className="size-16 shrink-0 object-contain"
            priority
          />
          <span className="text-base">
            <span className="text-primary-foreground">WS</span> <span className="text-accent">Capital</span>
            <span className="block text-[10px] font-normal tracking-[0.16em] text-primary-foreground/60">Wolf Snake Capital</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSelector />

        <a
          href="#inregistrare"
          className={cn(
            buttonVariants(),
            'ml-auto h-10 bg-accent px-4 text-accent-foreground hover:bg-accent/90 lg:ml-0',
          )}
        >
          {btnLabel}
        </a>
      </div>
    </header>
  )
}