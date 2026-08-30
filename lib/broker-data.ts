export type Tier = {
  id: string
  name: string
  commission: number
  subCommission: number
  minDeposit: number
  minVolume: number
  payout: string
}

export const tiers: Record<string, Tier> = {
  A: {
    id: 'A',
    name: 'Grupa A — Tier 1',
    commission: 500,
    subCommission: 50,
    minDeposit: 150,
    minVolume: 5,
    payout: 'Lunar',
  },
  B: {
    id: 'B',
    name: 'Grupa B — Tier 2',
    commission: 375,
    subCommission: 37,
    minDeposit: 150,
    minVolume: 3,
    payout: 'Lunar',
  },
  C: {
    id: 'C',
    name: 'Grupa C — Tier 3',
    commission: 250,
    subCommission: 25,
    minDeposit: 150,
    minVolume: 2.5,
    payout: 'Lunar',
  },
  D: {
    id: 'D',
    name: 'Grupa D — Tier 4',
    commission: 150,
    subCommission: 15,
    minDeposit: 150,
    minVolume: 1.5,
    payout: 'Lunar',
  },
}

export type Country = { name: string; code: string; tier: keyof typeof tiers }

export const countries: Country[] = [
  { name: 'United Kingdom', code: 'GB', tier: 'A' },
  { name: 'Germania', code: 'DE', tier: 'A' },
  { name: 'Switzerland', code: 'CH', tier: 'A' },
  { name: 'United Arab Emirates', code: 'AE', tier: 'C' },
  { name: 'Oman', code: 'OM', tier: 'C' },
  { name: 'Australia', code: 'AU', tier: 'A' },
  { name: 'Canada', code: 'CA', tier: 'D' },
  { name: 'Singapore', code: 'SG', tier: 'B' },
  { name: 'Taywan', code: 'TW', tier: 'B' },
  { name: 'Argentina', code: 'AR', tier: 'C' },
  { name: 'Belize', code: 'BZ', tier: 'C' },
  { name: 'Brazilia', code: 'BR', tier: 'C' },
  { name: 'China', code: 'CN', tier: 'C' },
  { name: 'Colombia', code: 'CO', tier: 'C' },
  { name: 'Croatia', code: 'HR', tier: 'C' },
  { name: 'Ecuador', code: 'EC', tier: 'C' },
  { name: 'Cyprus', code: 'CY', tier: 'C' },
  { name: 'Norvegia', code: 'NO', tier: 'A' },
  { name: 'Danemarca', code: 'DK', tier: 'A' },
  { name: 'Irlanda', code: 'IE', tier: 'A' },
  { name: 'Austria', code: 'AT', tier: 'A' },
  { name: 'Arabia Saudită', code: 'SA', tier: 'C' },
  { name: 'Italia', code: 'IT', tier: 'C' },
  { name: 'Jordan', code: 'JO', tier: 'C' },
  { name: 'Spania', code: 'ES', tier: 'A' },
  { name: 'Franța', code: 'FR', tier: 'A' },
  { name: 'Hong Kong', code: 'HK', tier: 'A' },
  { name: 'Seychelles', code: 'SC', tier: 'C' },
  { name: 'Hungary', code: 'HU', tier: 'A' },
  { name: 'Olanda', code: 'NL', tier: 'C' },
  { name: 'Belgia', code: 'BE', tier: 'B' },
  { name: 'Suedia', code: 'SE', tier: 'A' },
  { name: 'New Zealand', code: 'NZ', tier: 'A' },
  { name: 'Finlanda', code: 'FI', tier: 'C' },
  { name: 'Japonia', code: 'JP', tier: 'D' },
  { name: 'Israel', code: 'IL', tier: 'C' },
  { name: 'French Polynesia', code: 'PF', tier: 'C' },
  { name: 'Kuwait', code: 'KW', tier: 'B' },
  { name: 'Qatar', code: 'QA', tier: 'C' },
  { name: 'România', code: 'RO', tier: 'B' },
  { name: 'Estonia', code: 'EE', tier: 'A' },
  { name: 'Iceland', code: 'IS', tier: 'B' },
  { name: 'Jamaica', code: 'JM', tier: 'B' },
  { name: 'Kazakhstan', code: 'KZ', tier: 'B' },
  { name: 'Lithuania', code: 'LT', tier: 'B' },
  { name: 'Luxembourg', code: 'LU', tier: 'B' },
  { name: 'New Caledonia', code: 'NC', tier: 'B' },
  { name: 'Peru', code: 'PE', tier: 'C' },
  { name: 'Polonia', code: 'PL', tier: 'C' },
  { name: 'Czec Republic', code: 'CZ', tier: 'C' },
  { name: 'Dominican Republic', code: 'DO', tier: 'C' },
  { name: 'Slovacia', code: 'SK', tier: 'C' },
  { name: 'Slovenia', code: 'SI', tier: 'C' },
  { name: 'Bulgaria', code: 'BG', tier: 'B' },
  { name: 'Cayman Islands', code: 'KY', tier: 'B' },
  { name: 'Grecia', code: 'GR', tier: 'C' },
  { name: 'Portugalia', code: 'PT', tier: 'B' },
  { name: 'Turcia', code: 'TR', tier: 'D' },
  { name: 'Mexic', code: 'MX', tier: 'B' },
  { name: 'Chile', code: 'CL', tier: 'D' },
  { name: 'Africa de Sud', code: 'ZA', tier: 'C' },
  { name: 'Malaysia', code: 'MY', tier: 'D' },
  { name: 'India', code: 'IN', tier: 'C' },
  { name: 'Indonezia', code: 'ID', tier: 'D' },
  { name: 'Vietnam', code: 'VN', tier: 'D' },
  { name: 'Filipine', code: 'PH', tier: 'D' },
  { name: 'Thailanda', code: 'TH', tier: 'C' },
  { name: 'Tonga', code: 'TO', tier: 'C' },
  { name: 'Pakistan', code: 'PK', tier: 'D' },
  { name: 'Bangladesh', code: 'BD', tier: 'D' },
  { name: 'Korea', code: 'KR', tier: 'C' },
  { name: 'Nigeria', code: 'NG', tier: 'C' },
  { name: 'Kenya', code: 'KE', tier: 'C' },
  { name: 'Egipt', code: 'EG', tier: 'C' },
  { name: 'Maroc', code: 'MA', tier: 'C' },
  { name: 'Namibia', code: 'NA', tier: 'C' },
  { name: 'Ucraina', code: 'UA', tier: 'D' },
]

export const LEVERAGE = 500
export const RISK_UNITS = 15

/** Un lot standard controlează 100.000 de unități din valuta de bază. */
export const CONTRACT_SIZE = 100_000
/** Valoarea unui pip pentru 1,00 lot standard pe perechi cu USD ca valută cotată. */
export const PIP_VALUE_PER_LOT = 10
/** Lotul minim tranzacționabil (micro-lot). */
export const MIN_LOT = 0.01

/**
 * Paritatea de loturi în funcție de leverage.
 * Marja = (loturi × 100.000) / leverage.
 * Pentru strategia WS Capital, $10 marjă pornește de la 0,10 lot.
 * Deci volumul este 0,01 lot pentru fiecare $1 de marjă.
 */
export const MARGIN_PER_MIN_LOT = 1 // $1 marjă pentru 0,01 lot în strategia WS Capital

/** Câte loturi se deschid pentru o anumită marjă: $10 => 0,10 lot. */
export function lotsForMargin(margin: number): number {
  return (margin / MARGIN_PER_MIN_LOT) * MIN_LOT
}

/**
 * Martingal pe 4 niveluri: depozitul este împărțit la 15 unități de risc.
 * Nivelurile folosesc 1, 2, 4 și 8 unități (1+2+4+8 = 15),
 * astfel încât cele 4 niveluri consumă exact 100% din depozitul alocat.
 */
export const MARTINGALE_MULTIPLIERS = [1, 2, 4, 8] as const

export type MartingaleLevel = {
  level: number
  multiplier: number
  margin: number
  notional: number
  lots: number
  pipValue: number
  stopLossPips: number
  takeProfitPips: number
  risk: number
  takeProfit: number
  cumulativeRisk: number
  cumulativeMargin: number
  netIfWin: number
}

export function buildMartingaleLevels(
  deposit: number,
  stopLossPips = 20,
): MartingaleLevel[] {
  const unit = deposit / RISK_UNITS
  let cumulativeRisk = 0
  let cumulativeMargin = 0

  return MARTINGALE_MULTIPLIERS.map((multiplier, index) => {
    // Capitalul alocat nivelului este folosit drept marjă și se dublează pe fiecare nivel.
    const margin = unit * multiplier
    // Leverage-ul determină expunerea și volumul de loturi deschis.
    const lots = lotsForMargin(margin)
    const notional = lots * CONTRACT_SIZE
    // Valoarea per pip depinde direct de volumul de loturi.
    const pipValue = lots * PIP_VALUE_PER_LOT
    // Profitul și pierderea rezultă din mișcarea în pips × valoarea per pip.
    const takeProfitPips = stopLossPips * 2
    const risk = pipValue * stopLossPips
    const takeProfit = pipValue * takeProfitPips
    cumulativeRisk += risk
    cumulativeMargin += margin

    return {
      level: index + 1,
      multiplier,
      margin,
      notional,
      lots,
      pipValue,
      stopLossPips,
      takeProfitPips,
      risk,
      takeProfit,
      cumulativeRisk,
      cumulativeMargin,
      netIfWin: takeProfit - (cumulativeRisk - risk),
    }
  })
}

export function buildDoublingPlan(start = 150, weeks = 10) {
  let balance = start
  return Array.from({ length: weeks }, (_, i) => {
    const opening = balance
    const profit = opening
    balance = opening * 2
    return {
      week: i + 1,
      opening,
      target: 150,
      profit,
      closing: balance,
      unit: opening / RISK_UNITS,
    }
  })
}

export const promotionChannels = [
  {
    name: 'Facebook Ads',
    audience: 'Traffic rece + retargeting',
    budget: '$15–$50 / zi',
    cpa: '$40–$90',
    format: 'Video 15s + lead form',
  },
  {
    name: 'Instagram Business',
    audience: 'Reels & Stories',
    budget: '$10–$40 / zi',
    cpa: '$35–$80',
    format: 'Reels verticale + link în bio',
  },
  {
    name: 'YouTube',
    audience: 'In-stream & Shorts',
    budget: '$20–$60 / zi',
    cpa: '$50–$110',
    format: 'Review robot Pine Script',
  },
  {
    name: 'TikTok Business',
    audience: 'Spark Ads',
    budget: '$20–$50 / zi',
    cpa: '$25–$70',
    format: 'Rezultate copy trading',
  },
  {
    name: 'X (Twitter)',
    audience: 'Promoted posts',
    budget: '$10–$30 / zi',
    cpa: '$45–$95',
    format: 'Thread + semnale live',
  },
]
