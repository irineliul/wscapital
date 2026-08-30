'use client'

import { useEffect, useState } from 'react'

export function LanguageSelector() {
  const [language, setLanguage] = useState<'en' | 'ro'>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('site-language')
    if (saved === 'ro' || saved === 'en') {
      setLanguage(saved)
      document.documentElement.lang = saved
    } else {
      document.documentElement.lang = 'en'
    }
  }, [])

  function changeLanguage(next: 'en' | 'ro') {
    setLanguage(next)
    window.localStorage.setItem('site-language', next)
    document.documentElement.lang = next
    window.location.reload()
  }

  return (
    <label className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground/90">
      <span className="sr-only">Select language / Selectează limba</span>
      <span aria-hidden="true" className="font-semibold">{language === 'en' ? 'EN' : 'RO'}</span>
      <select
        value={language}
        onChange={(event) => changeLanguage(event.target.value as 'en' | 'ro')}
        aria-label="Select language / Selectează limba"
        className="h-8 rounded-md border border-primary-foreground/20 bg-primary px-1.5 text-xs text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <option value="en">EN</option>
        <option value="ro">RO</option>
      </select>
    </label>
  )
}