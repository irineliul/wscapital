'use client'

import { useEffect } from 'react'

const translations: Record<string, string> = {
  // Navigation & General Headers
  'Strategie': 'Strategy',
  'Exemplu de calcul': 'Calculation example',
  'Instrumente': 'Tools',
  'Afiliere': 'Affiliates',
  'Comisioane': 'Commissions',
  'Metode de promovare': 'Promotion methods',
  'Înregistrare': 'Registration',
  'Înregistrează-te acum': 'Register now',
  'Fă înregistrarea acum': 'Register now',
  'Formular de înregistrare': 'Registration form',
  'Nume complet': 'Full name',
  'Telefon': 'Phone',
  'Țară': 'Country',
  'Depozit planificat': 'Planned deposit',
  'Avertisment de risc': 'Risk warning',
  'Toate drepturile rezervate.': 'All rights reserved.',
  'Copy Trading': 'Copy Trading',
  'Copy trading': 'Copy trading',
  'Program de afiliere': 'Affiliate program',
  'Strategie martingal': 'Martingale strategy',
  'Instrumente incluse': 'Included tools',
  'Comisioane pe țări': 'Country commissions',
  'Link de afiliere și sub-afiliere cu dashboard': 'Affiliate and sub-affiliate dashboard link',
  'TradingView Pro activat gratuit': 'TradingView Pro activated for free',
  'Robot de tranzacționare': 'Trading robot',
  'Acces la copy trading': 'Copy Trading access',
  'Se salvează...': 'Saving...',
  'Sistem Profesional de Administrare a Investiției cu Strategia Martingale': 'Professional Investment Management System with the Martingale Strategy',
  '4 Niveluri, Leverage 1:500': '4 Levels, 1:500 Leverage',
  'Cont de investitor in Brokeraj + program de afiliere': 'Brokerage investor account + affiliate program',
  'Fiecare depozit este divizat în 15 de unități de risc': 'Each deposit is divided into 15 risk units',
  'Capitalul fiecărui nivel este folosit drept': 'The capital of each level is used as',
  'marjă': 'margin',
  'Calculator de niveluri': 'Level calculator',
  'Risc total serie': 'Total series risk',
  'Paritatea de loturi': 'Lot parity',
  'Obiectivul este simplu și repetabil:': 'The objective is simple and repeatable:',
  'pe săptămână': 'per week',
  'Sold inițial': 'Initial balance',
  'Sold final teoretic': 'Theoretical final balance',
  'Creștere': 'Growth',
  'Ce primești ca investitor': 'What you receive as an investor',
  'Toate instrumentele incluse în ofertă': 'All tools included in the offer',
  'Leverage 1:500 pe contul de tranzacționare': '1:500 leverage on your trading account',
  'Robot de tranzacționare — script pentru Pine Editor': 'Trading robot — Pine Editor script',
  'Acces la copy trading + tutorial video de setări': 'Copy Trading access + setup video tutorial',
  'Prezentare video pentru setările de Copy trading': 'Video guide to Copy Trading setup',
  'Redă tutorialul': 'Play tutorial',
  'Afiliere și sub-afiliere: $250–$500 per investitor activat': 'Affiliate and sub-affiliate program: $250–$500 per activated investor',
  'Structură pe două niveluri': 'Two-tier structure',
  'Afiliere directă': 'Direct affiliate',
  'Sub-afiliere': 'Sub-affiliate',
  'Scalare pe teritorii': 'Scaling across territories',
  'Comision direct': 'Direct commission',
  'Depozit min.': 'Min. deposit',
  'Rulaj min.': 'Min. volume',
  'Trafic plătit': 'Paid traffic',
  'Plasare': 'Placement',
  'Buget recomandat': 'Recommended budget',
  'CPA estimat': 'Estimated CPA',
  'Format câștigător': 'Winning format',
  'Reguli de compliance': 'Compliance rules',
  'Comisionul este între': 'The commission ranges from',
  'per investitor activat, în funcție de țară și depozit.': 'per activated investor, depending on country and deposit.',
  'Verifică comisionul oferit în țara ta': 'Check the commission offered in your country',
  'Selectează țara': 'Select your country',
  'Investitori direcți activați / lună': 'Activated direct investors / month',
  'Investitori din sub-afiliere / lună': 'Sub-affiliate investors / month',
  'Venit estimat / lună': 'Estimated income / month',
  'Depozit pentru activare': 'Deposit required for activation',
  'Rulaj minim de tranzacționare': 'Minimum trading volume',
  'Înregistrare trimisă': 'Registration submitted',
  'Înregistrarea ta a fost salvată.': 'Your registration has been saved.',
  'Alege țara': 'Choose country',
  'Alege nivelul': 'Choose level',
  'Trimite înregistrarea': 'Submit registration',
  'Linkuri utile': 'Useful links',
  'Consultanță și management pentru investitori': 'Consulting and management for investors',
  'TradingView Pro gratuit': 'TradingView Pro for free',
  'Robot Pine Script gratuit': 'Free Pine Script Robot',
  'Copy Trading în brokeraj': 'Copy Trading in brokerage',
  'Verifică comisionul de afiliere din țara ta': 'Check your country affiliate commission',
  'Fiecare depozit este divizat în 15 de unități de risc, iar cele 4 niveluri Martingale (1-2-4-8) au Stop Loss și Take Profit calculate cu leverage pe fiecare nivel. Primești Trading View Pro, un robot de tranzacționare generat de AI pentru Pine Editor și acces la Copy trading.': 'Each deposit is divided into 15 risk units, and the 4 Martingale levels (1-2-4-8) have Stop Loss and Take Profit calculated with leverage at each level. You receive TradingView Pro, an AI-generated trading robot for Pine Editor, and Copy Trading access.',
  'Leverage maxim': 'Maximum leverage',
  'Unități de risc': 'Risk units',
  'Comision afiliat': 'Affiliate commission',
  'Terminal de tranzacționare cu grafic candlestick și panou de ordine cu Stop Loss și Take Profit': 'Trading terminal with candlestick chart and order panel with Stop Loss and Take Profit',
  'Navigare principală': 'Main navigation',
  'WS Capital — Wolf Snake Capital': 'WS Capital — Wolf Snake Capital',
  'WS Capital - oferim consultanta si management pentru investitorii in Brokeraj cu leverage de 1:500, tranzactionare cu depozit impartit la 15 unități, robot creat cu AI pentru Pine Script, Copy trading și program de afiliere pe două niveluri.': 'WS Capital - we offer consulting and management for brokerage investors with 1:500 leverage, trading with deposit divided into 15 units, AI-created Pine Script robot, Copy Trading and a two-tier affiliate program.',
  'Tranzacționarea produselor cu efect de levier (până la 1:500) implică un risc ridicat și poate duce la pierderea întregului capital investit. Strategia de Martingale crește expunerea progresiv și poate epuiza depozitul într-o singură serie pierdută. Exemplul de dublare a capitalului este o proiecție matematică, nu o garanție de randament. Comisioanele de afiliere ($250–$500) depind de țară, depozitul validat și rulajul minim de tranzacționare. Nu oferim consultanță de investiții.': 'Trading leveraged products (up to 1:500) involves high risk and may result in the loss of all invested capital. The Martingale strategy progressively increases exposure and can deplete the deposit in a single losing series. The capital doubling example is a mathematical projection, not a return guarantee. Affiliate commissions ($250–$500) depend on country, validated deposit and minimum trading volume. We do not offer investment advice.',
  'Managementul banilor': 'Money management',
  'Strategia de Martingal pe 4 niveluri, cu depozitul împărțit la 15': 'The 4-level Martingale strategy, with deposit divided by 15',
  'Depozitul este împărțit de fiecare dată la': 'The deposit is divided each time by',
  'unități egale. Cele 4 niveluri folosesc 1, 2, 4 și 8 unități, iar suma lor este exact': 'equal units. The 4 levels use 1, 2, 4 and 8 units, and their sum is exactly',
  '— deci seria completă nu depășește niciodată depozitul alocat. Capitalul fiecărui nivel este folosit drept': '— so the complete series never exceeds the allocated deposit. The capital of each level is used as',
  ', iar leverage-ul de 1:': ', and the leverage of 1:',
  'este cel care determină volumul de loturi deschis: volumul se dublează pe fiecare nivel, iar profitul rezultă din mișcarea în pips × valoarea per pip a acelui volum.': 'determines the open lot volume: volume doubles at each level, and profit results from pip movement × pip value of that volume.',
  'Depozit': 'Deposit',
  'Stop Loss': 'Stop Loss',
  '1 unitate (marjă)': '1 unit (margin)',
  'Loturi / unitate la 1:': 'Lots / unit at 1:',
  'Take Profit': 'Take Profit',
  'Raport R:R': 'R:R ratio',
  'Marja = (loturi × 100.000) ÷': 'Margin = (lots × 100,000) ÷',
  'Cele 4 niveluri Martingal cu volum, marjă, stop loss și take profit': '4 Martingale levels with volume, margin, stop loss and take profit',
  'Nivel': 'Level',
  'Multipl.': 'Mult.',
  'Loturi': 'Lots',
  'Val / pip': 'Val / pip',
  'Risc (SL)': 'Risk (SL)',
  'Net dacă închide pe profit': 'Net if closes in profit',
  'Total': 'Total',
  'Reguli fixe: după un Take Profit atins seria se resetează la nivelul 1 și depozitul se reîmparte din nou la': 'Fixed rules: after a Take Profit is hit, the series resets to level 1 and the deposit is redistributed by',
  '. După nivelul 4 seria se oprește obligatoriu — Martingalul nu se continuă la nivelul 5.': '. After level 4 the series stops — Martingale does not continue to level 5.',
  'Marjă 1:': 'Margin 1:',
  'Dublează suma de 10 ori la rând: de la $150 la': 'Double the amount 10 times in a row: from $150 to',
  'în 10 săptămâni': 'in 10 weeks',
  '+100% pe săptămână': '+100% per week',
  '. La începutul fiecărei săptămâni recalculezi unitatea de risc (soldul împărțit la': '. At the start of each week you recalculate the risk unit (balance divided by',
  ') și rulezi seria martingal pe 4 niveluri până atingi ținta. Când soldul se dublează, oprești săptămâna și repornești cu noul sold.': ') and run the 4-level martingale series until you hit the target. When the balance doubles, you stop the week and restart with the new balance.',
  'Plan de dublare a capitalului pe 10 săptămâni, pornind de la 150 de dolari': 'Capital doubling plan over 10 weeks, starting from $150',
  'Săptămâna': 'Week',
  'Țintă profit': 'Profit target',
  'Sold final': 'Final balance',
  'Capital de start': 'Starting capital',
  'Multiplicator după 10 dublări': 'Multiplier after 10 doublings',
  'Acest exemplu este o proiecție matematică a unei creșteri de 100% pe săptămână, nu o promisiune de randament. O singură serie martingal pierdută integral (toate cele 4 niveluri) șterge depozitul alocat săptămânii respective. Tranzacționarea cu leverage implică risc ridicat de pierdere a capitalului.': 'This example is a mathematical projection of 100% weekly growth, not a return promise. A single fully lost martingale series (all 4 levels) wipes the deposit allocated for that week. Leveraged trading involves high risk of capital loss.',
  'Unitate (÷': 'Unit (÷',
  'Program de parteneriat': 'Partnership program',
  '1. Afiliere directă': '1. Direct affiliate',
  'Primești link-ul propriu de tracking. Pentru fiecare investitor activat cu depozit și rulaj de tranzacționare încasezi între $250 și $500, în funcție de țară.': 'You receive your own tracking link. For each investor activated with deposit and trading volume you earn between $250 and $500, depending on the country.',
  '2. Sub-afiliere': '2. Sub-affiliate',
  'Recrutezi alți afiliați sub tine și primești un comision suplimentar 10% pentru fiecare investitor activat de ei, fără limită de număr.': 'You recruit other affiliates under you and receive an additional 10% commission for each investor they activate, with no limit.',
  '3. Scalare pe teritorii': '3. Scaling across territories',
  'Rulezi campanii pe mai multe țări în paralel, iar comisionul se aplică automat conform grupei fiecărui teritoriu.': 'You run campaigns across multiple countries in parallel, and the commission applies automatically according to each territory group.',
  'Structură pe două niveluri, cu plată după validarea depozitului și a rulajului de tranzacționare. Comisionul depinde de țară.': 'Two-tier structure, with payment after deposit and trading volume validation. Commission depends on country.',
  'Grile de comision pe grupe de țări': 'Commission grids by country group',
  'Grupă de țări': 'Country group',
  'Plată': 'Payment',
  'loturi': 'lots',
  'Plăți în USD, crypto sau transfer bancar': 'Payments in USD, crypto or bank transfer',
  'Dashboard cu click-uri, înregistrări și depozite în timp real': 'Dashboard with real-time clicks, registrations and deposits',
  'Materiale promoționale și creative gata de publicare': 'Promotional materials and creatives ready to publish',
  'Manager de cont dedicat pentru afiliații activi': 'Dedicated account manager for active affiliates',
  'Țări': 'Countries',
  'per investitor activat, în funcție de țară. Investitorul este considerat activat după depozit și după atingerea rulajului minim de tranzacționare.': 'per activated investor, depending on country. The investor is considered activated after deposit and reaching the minimum trading volume.',
  'per investitor activat': 'per activated investor',
  'per investitor al sub-afiliatului': 'per sub-affiliate investor',
  'loturi standard': 'standard lots',
  'din afiliere directă +': 'from direct affiliate +',
  'din sub-afiliere': 'from sub-affiliate',
  'Tutorialul pas cu pas îți arată exact cum configurezi copy trading-ul în brokeraj.': 'The step-by-step tutorial shows you exactly how to set up copy trading in the brokerage.',
  'Deschiderea contului de copy trading': 'Opening the copy trading account',
  'Alegerea traderului și verificarea drawdown-ului': 'Choosing the trader and verifying the drawdown',
  'Cadru din tutorialul video cu panoul de setări pentru copy trading': 'Frame from the video tutorial with the copy trading settings panel',
  'Redă tutorialul (4:20)': 'Play tutorial (4:20)',
  'Setări Copy Trading — acces gratuit după înregistrare.': 'Copy Trading settings — free access after registration.',
  'Deblochează videoul și robotul': 'Unlock the video and the robot',
  'Marjă redusă pe fiecare nivel Martingal, ceea ce permite rularea completă a seriei 1-2-4-8 cu un depozit mic.': 'Reduced margin at each Martingale level, allowing the full 1-2-4-8 series to run with a small deposit.',
  'TradingView Pro — gratuit': 'TradingView Pro — free',
  'Abonament Pro activat pe contul tău TradingView după validarea depozitului: indicatori multipli, alerte și grafice multiple.': 'Pro subscription activated on your TradingView account after deposit validation: multiple indicators, alerts and multiple charts.',
  'Robot de tranzacționare gratuit': 'Free trading robot',
  'Investitorii primesc gratuit pe email robotul de tranzacționare — script creat de AI pentru Pine Editor care generează semnalele de intrare.': 'Investors receive the trading robot free by email — an AI-created Pine Editor script that generates entry signals.',
  'Script pentru Pine Editor': 'Pine Editor Script',
  'Copiezi scriptul în Pine Editor, îl adaugi pe grafic și primești semnale cu SL/TP.': 'Copy the script into Pine Editor, add it to the chart and receive signals with SL/TP.',
  'Copiezi automat tranzacțiile traderilor din platformă, voi alocați procentual și fixați limita de risc per nivel.': 'Automatically copies traders\' transactions from the platform, you allocate percentage-wise and set the risk limit per level.',
  'Management pe 15 de unități': 'Management on 15 units',
  'Depozitul este împărțit de fiecare dată la 15.': 'The deposit is divided each time by 15.',
  'Cont standard': 'Standard account',
  'Inclus': 'Included',
  'Semnale': 'Signals',
  'Automatizat': 'Automated',
  'Risc controlat': 'Controlled risk',
  'Trafic plătit: Facebook Ads, Instagram Business, YouTube, TikTok Business și X': 'Paid traffic: Facebook Ads, Instagram Business, YouTube, TikTok Business and X',
  'Promovarea cu plată este permisă pe toate cele 5 platforme. Folosești link-ul de afiliat de forma: https://fintrade-self.vercel.app/?affiliate=ID unde ID este numarul tau ca afiliat.': 'Paid promotion is allowed on all 5 platforms. Use the affiliate link in the format: https://fintrade-self.vercel.app/?affiliate=ID where ID is your affiliate number.',
  'Fără promisiuni de profit garantat, fără capturi de cont falsificate și fără targetare a minorilor. Fiecare reclamă trebuie să includă avertismentul de risc privind tranzacționarea cu leverage.': 'No guaranteed profit promises, no fake account screenshots and no targeting of minors. Every ad must include the risk warning regarding leveraged trading.',
  'Deschide contul de investitor și intră în programul de afiliere': 'Open your investor account and join the affiliate program',
  'Dupa inregistrare îți activeazi atât contul de tranzacționare cu leverage 1:500, cat și inregistrarea ca partener sa ai link-urile de afiliere și sub-afiliere.': 'After registration you activate both the trading account with 1:500 leverage and the partner registration to get your affiliate and sub-affiliate links.',
  'investitor': 'investor',
  'afiliat': 'affiliate',
  'ambele': 'both',
  'Îți vom trimite pe email link-ul de inregistrare si activare a contului și scriptul pentru TradingView PRO pentru Pine Editor ce ofera semnale de tranzactionare. Comisionul tău pentru': 'We will send you by email the account registration and activation link and the TradingView PRO Pine Editor script that provides trading signals. Your commission for',
  'per investitor activat.': 'per activated investor.',
  'Trimite o altă înregistrare': 'Submit another registration',
  'Depozit planificat (min.': 'Planned deposit (min.',
  'pentru activare)': 'for activation)',
  'Am înțeles că tranzacționarea cu leverage și strategia Martingal implică risc ridicat de pierdere a capitalului.': 'I understand that trading with leverage and the Martingale strategy involves high risk of capital loss.',
  'Completează datele obligatorii și verifică depozitul planificat.': 'Fill in the required fields and check the planned deposit.',
  'Nu am putut salva înregistrarea. Verifică datele și încearcă din nou.': 'We could not save the registration. Check the data and try again.',
  'Comision pentru': 'Commission for',
  'per investitor activat · sub-afiliere': 'per activated investor · sub-affiliate',
  'Ion Popescu': 'John Smith',
  'nume@email.com': 'name@email.com',
}

function translatePage(language: 'en' | 'ro') {
  // Dacă limba este română (limba nativă din JSX), reîncărcăm pagina sau nu aplicăm înlocuiri inverse agresive
  if (language === 'ro') {
    document.documentElement.lang = 'ro'
    // Dacă pagina a fost modificată de traducere, o reîmprospătăm pentru a reveni la textul nativ curat
    if (document.documentElement.getAttribute('data-translated') === 'true') {
      window.location.reload()
    }
    return
  }

  const root = document.body
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  let node: Node | null
  while ((node = walker.nextNode())) nodes.push(node as Text)

  // Sortăm cheile după lungime descurcătoare pentru a evita potrivirile parțiale din cuvinte scurte
  const sortedEntries = Object.entries(translations).sort((a, b) => b[0].length - a[0].length)

  for (const textNode of nodes) {
    let value = textNode.nodeValue ?? ''
    for (const [ro, en] of sortedEntries) {
      if (value.includes(ro)) {
        value = value.replaceAll(ro, en)
      }
    }
    textNode.nodeValue = value
  }
  
  document.documentElement.lang = 'en'
  document.documentElement.setAttribute('data-translated', 'true')
}

export function SiteTranslation() {
  useEffect(() => {
    const language = window.localStorage.getItem('site-language') === 'ro' ? 'ro' : 'en'
    translatePage(language)
    
    const observer = new MutationObserver(() => {
      const currentLang = window.localStorage.getItem('site-language') === 'ro' ? 'ro' : 'en'
      if (currentLang === 'en') {
        translatePage('en')
      }
    })
    
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}