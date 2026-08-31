'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function SiteFooter() {
  const [lang, setLang] = useState<'ro' | 'en'>('en')

  useEffect(() => {
    const l = window.localStorage.getItem('site-language')
    setLang(l === 'ro' ? 'ro' : 'en')
    const handler = () => setLang(window.localStorage.getItem('site-language') === 'ro' ? 'ro' : 'en')
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  const t = (ro: string, en: string) => lang === 'en' ? en : ro

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-semibold">
              <Image
                src="/images/wsg-dragon.png"
                alt="WS Capital — Wolf Snake Capital"
                width={44}
                height={44}
                className="size-16 shrink-0 object-contain"
              />
              <span className="text-foreground">WS</span> <span className="text-accent">Capital</span>
            </div>
            <p className="mt-1 text-xs font-medium tracking-[0.16em] text-muted-foreground">Wolf Snake Capital</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(
                'WS Capital - oferim consultanta si management pentru investitorii in Brokeraj cu leverage de 1:500, tranzactionare cu depozit impartit la 15 unități, robot creat cu AI pentru Pine Script, Copy trading și program de afiliere pe două niveluri.',
                'WS Capital - we offer consulting and management for brokerage investors with 1:500 leverage, trading with deposit divided into 15 units, AI-created Pine Script robot, Copy Trading and a two-tier affiliate program.'
              )}
            </p>
          </div>
          <nav aria-label={t('Linkuri utile', 'Useful links')} className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {[
              { href: '#afiliere', ro: 'Afiliere', en: 'Affiliates' },
              { href: '#comisioane', ro: 'Comisioane pe țări', en: 'Country commissions' },
              { href: '#promovare', ro: 'Metode de promovare', en: 'Promotion methods' },
              { href: '#exemplu', ro: 'Exemplu de calcul', en: 'Calculation example' },
              { href: '#strategie', ro: 'Strategie martingal', en: 'Martingale strategy' },     
              { href: '#instrumente', ro: 'Instrumente incluse', en: 'Included tools' },
              { href: '#inregistrare', ro: 'Înregistrare', en: 'Registration' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {t(l.ro, l.en)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-5">
          <h2 className="text-sm font-semibold">{t('Avertisment de risc', 'Risk warning')}</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {t(
              'Tranzacționarea produselor cu efect de levier (până la 1:500) implică un risc ridicat și poate duce la pierderea întregului capital investit. Strategia de Martingale crește expunerea progresiv și poate epuiza depozitul într-o singură serie pierdută. Exemplul de dublare a capitalului este o proiecție matematică, nu o garanție de randament. Comisioanele de afiliere (până la $500) depind de țară, depozitul validat și rulajul minim de tranzacționare. Nu oferim consultanță de investiții.',
              'Trading leveraged products (up to 1:500) involves high risk and may result in the loss of all invested capital. The Martingale strategy progressively increases exposure and can deplete the deposit in a single losing series. The capital doubling example is a mathematical projection, not a return guarantee. Affiliate commissions (up to $500) depend on country, validated deposit and minimum trading volume. We do not offer investment advice.'
            )}
          </p>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} WS Capital. {t('Toate drepturile rezervate.', 'All rights reserved.')}
        </p>
      </div>
    </footer>
  )
}