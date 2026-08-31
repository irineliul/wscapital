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

export type Country = {
  name: string
  code: string
  tier: keyof typeof tiers
}

export const countries: Country[] = [
  { name: 'United Kingdom', code: 'GB', tier: 'A' },
  { name: 'Germany', code: 'DE', tier: 'A' },
  { name: 'Switzerland', code: 'CH', tier: 'A' },
  { name: 'United Arab Emirates', code: 'AE', tier: 'C' },
  { name: 'Oman', code: 'OM', tier: 'C' },
  { name: 'Australia', code: 'AU', tier: 'A' },
  { name: 'Canada', code: 'CA', tier: 'D' },
  { name: 'Singapore', code: 'SG', tier: 'B' },
  { name: 'Taiwan', code: 'TW', tier: 'B' },
  { name: 'Argentina', code: 'AR', tier: 'C' },
  { name: 'Belize', code: 'BZ', tier: 'C' },
  { name: 'Brazil', code: 'BR', tier: 'C' },
  { name: 'China', code: 'CN', tier: 'C' },
  { name: 'Colombia', code: 'CO', tier: 'C' },
  { name: 'Croatia', code: 'HR', tier: 'C' },
  { name: 'Ecuador', code: 'EC', tier: 'C' },
  { name: 'Cyprus', code: 'CY', tier: 'C' },
  { name: 'Norway', code: 'NO', tier: 'A' },
  { name: 'Denmark', code: 'DK', tier: 'A' },
  { name: 'Ireland', code: 'IE', tier: 'A' },
  { name: 'Austria', code: 'AT', tier: 'A' },
  { name: 'Saudi Arabia', code: 'SA', tier: 'C' },
  { name: 'Italy', code: 'IT', tier: 'C' },
  { name: 'Jordan', code: 'JO', tier: 'C' },
  { name: 'Spain', code: 'ES', tier: 'A' },
  { name: 'France', code: 'FR', tier: 'A' },
  { name: 'Hong Kong', code: 'HK', tier: 'A' },
  { name: 'Seychelles', code: 'SC', tier: 'C' },
  { name: 'Hungary', code: 'HU', tier: 'A' },
  { name: 'Netherlands', code: 'NL', tier: 'C' },
  { name: 'Belgium', code: 'BE', tier: 'B' },
  { name: 'Sweden', code: 'SE', tier: 'A' },
  { name: 'New Zealand', code: 'NZ', tier: 'A' },
  { name: 'Finland', code: 'FI', tier: 'C' },
  { name: 'Japan', code: 'JP', tier: 'D' },
  { name: 'Israel', code: 'IL', tier: 'C' },
  { name: 'French Polynesia', code: 'PF', tier: 'C' },
  { name: 'Kuwait', code: 'KW', tier: 'B' },
  { name: 'Qatar', code: 'QA', tier: 'C' },
  { name: 'Romania', code: 'RO', tier: 'B' },
  { name: 'Estonia', code: 'EE', tier: 'A' },
  { name: 'Iceland', code: 'IS', tier: 'B' },
  { name: 'Jamaica', code: 'JM', tier: 'B' },
  { name: 'Kazakhstan', code: 'KZ', tier: 'B' },
  { name: 'Lithuania', code: 'LT', tier: 'B' },
  { name: 'Luxembourg', code: 'LU', tier: 'B' },
  { name: 'New Caledonia', code: 'NC', tier: 'B' },
  { name: 'Peru', code: 'PE', tier: 'C' },
  { name: 'Poland', code: 'PL', tier: 'C' },
  { name: 'Czech Republic', code: 'CZ', tier: 'C' },
  { name: 'Dominican Republic', code: 'DO', tier: 'C' },
  { name: 'Slovakia', code: 'SK', tier: 'C' },
  { name: 'Slovenia', code: 'SI', tier: 'C' },
  { name: 'Bulgaria', code: 'BG', tier: 'B' },
  { name: 'Cayman Islands', code: 'KY', tier: 'B' },
  { name: 'Greece', code: 'GR', tier: 'C' },
  { name: 'Portugal', code: 'PT', tier: 'B' },
  { name: 'Turkey', code: 'TR', tier: 'D' },
  { name: 'Mexico', code: 'MX', tier: 'B' },
  { name: 'Chile', code: 'CL', tier: 'D' },
  { name: 'South Africa', code: 'ZA', tier: 'C' },
  { name: 'Malaysia', code: 'MY', tier: 'D' },
  { name: 'India', code: 'IN', tier: 'C' },
  { name: 'Indonesia', code: 'ID', tier: 'D' },
  { name: 'Vietnam', code: 'VN', tier: 'D' },
  { name: 'Philippines', code: 'PH', tier: 'D' },
  { name: 'Thailand', code: 'TH', tier: 'C' },
  { name: 'Tonga', code: 'TO', tier: 'C' },
  { name: 'Pakistan', code: 'PK', tier: 'D' },
  { name: 'Bangladesh', code: 'BD', tier: 'D' },
  { name: 'South Korea', code: 'KR', tier: 'C' },
  { name: 'Nigeria', code: 'NG', tier: 'C' },
  { name: 'Kenya', code: 'KE', tier: 'C' },
  { name: 'Egypt', code: 'EG', tier: 'C' },
  { name: 'Morocco', code: 'MA', tier: 'C' },
  { name: 'Namibia', code: 'NA', tier: 'C' },
  { name: 'Ukraine', code: 'UA', tier: 'D' },
]

/* -------------------------------------------------------------------------- */
/* Trading configuration                                                      */
/* -------------------------------------------------------------------------- */

export const LEVERAGE = 500
export const RISK_UNITS = 15

/**
 * Standard Forex contract:
 * 1.00 lot = 100,000 units of the base currency.
 */
export const CONTRACT_SIZE = 100_000

/**
 * Approximate pip value for 1.00 standard lot
 * on Forex pairs where USD is the quote currency.
 *
 * Example:
 * EUR/USD:
 * 1.00 lot ≈ $10 / pip
 */
export const PIP_VALUE_PER_LOT = 10

/**
 * Minimum commonly used Forex lot.
 */
export const MIN_LOT = 0.01

/**
 * Required margin for 1.00 standard lot at 1:500 leverage,
 * excluding price/conversion effects.
 *
 * 100,000 / 500 = $200
 */
export const MARGIN_PER_STANDARD_LOT =
  CONTRACT_SIZE / LEVERAGE

/**
 * Required margin for the minimum 0.01 lot at 1:500.
 *
 * 0.01 × 100,000 / 500 = $2
 */
export const MARGIN_PER_MIN_LOT =
  MIN_LOT * MARGIN_PER_STANDARD_LOT

/**
 * Calculate the lot size that corresponds to a given margin.
 *
 * Formula:
 *
 * margin = lots × contract size / leverage
 *
 * Therefore:
 *
 * lots = margin × leverage / contract size
 *
 * At 1:500:
 *
 * $2  -> 0.01 lot
 * $10 -> 0.05 lot
 * $20 -> 0.10 lot
 * $100 -> 0.50 lot
 */
export function lotsForMargin(margin: number): number {
  if (!Number.isFinite(margin) || margin <= 0) {
    return 0
  }

  return (margin * LEVERAGE) / CONTRACT_SIZE
}

/**
 * Calculate margin required for a given number of lots.
 */
export function marginForLots(lots: number): number {
  if (!Number.isFinite(lots) || lots <= 0) {
    return 0
  }

  return (lots * CONTRACT_SIZE) / LEVERAGE
}

/**
 * Round a lot size down to the nearest allowed minimum lot.
 *
 * This prevents the UI from displaying a position size that
 * cannot normally be submitted if the broker requires 0.01
 * lot increments.
 */
export function roundLotsToStep(
  lots: number,
  step = MIN_LOT,
): number {
  if (!Number.isFinite(lots) || lots <= 0) {
    return 0
  }

  if (step <= 0) {
    return lots
  }

  return Math.floor((lots + Number.EPSILON) / step) * step
}

/**
 * 4-level Martingale:
 *
 * N1 = 1 unit
 * N2 = 2 units
 * N3 = 4 units
 * N4 = 8 units
 *
 * 1 + 2 + 4 + 8 = 15
 */
export const MARTINGALE_MULTIPLIERS = [1, 2, 4, 8] as const

export type MartingaleLevel = {
  level: number
  multiplier: number

  /** Capital allocated as margin for this level. */
  margin: number

  /** Notional position value before price conversion. */
  notional: number

  /** Position volume in standard lots. */
  lots: number

  /** Approximate USD value of one pip for this position. */
  pipValue: number

  stopLossPips: number
  takeProfitPips: number

  /** Monetary loss if SL is reached. */
  risk: number

  /** Gross profit if TP is reached. */
  takeProfit: number

  cumulativeRisk: number
  cumulativeMargin: number

  /**
   * Net result if this level wins after all previous
   * levels in the current series have lost.
   */
  netIfWin: number
}

/**
 * Build the complete 4-level Martingale calculation.
 *
 * Important:
 *
 * The 1:500 leverage determines the position size from
 * the margin allocated to each level.
 *
 * SL and TP are then calculated from:
 *
 * position lots × pip value × pips
 *
 * Therefore the displayed monetary risk is no longer
 * artificially forced to equal the margin.
 */
export function buildMartingaleLevels(
  deposit: number,
  stopLossPips = 20,
): MartingaleLevel[] {
  const safeDeposit = Number.isFinite(deposit)
    ? Math.max(0, deposit)
    : 0

  const safeStopLossPips = Number.isFinite(stopLossPips)
    ? Math.max(1, stopLossPips)
    : 20

  /**
   * The deposit is divided into exactly 15 units.
   *
   * Example with $150:
   *
   * $150 / 15 = $10 per unit
   *
   * N1 = $10
   * N2 = $20
   * N3 = $40
   * N4 = $80
   *
   * Total = $150
   */
  const unit = safeDeposit / RISK_UNITS

  let cumulativeRisk = 0
  let cumulativeMargin = 0

  return MARTINGALE_MULTIPLIERS.map((multiplier, index) => {
    const margin = unit * multiplier

    /**
     * Calculate lots from the actual 1:500 leverage relationship.
     *
     * Example for $150:
     *
     * N1 $10 margin -> 0.05 lot
     * N2 $20 margin -> 0.10 lot
     * N3 $40 margin -> 0.20 lot
     * N4 $80 margin -> 0.40 lot
     */
    const rawLots = lotsForMargin(margin)

    /**
     * Keep the exact mathematical value here.
     *
     * The UI can display 2 decimals.
     */
    const lots = rawLots

    const notional = lots * CONTRACT_SIZE

    /**
     * Approximate pip value for USD-quoted Forex pairs.
     */
    const pipValue = lots * PIP_VALUE_PER_LOT

    const takeProfitPips = safeStopLossPips * 2

    /**
     * Real monetary risk based on SL.
     */
    const risk = pipValue * safeStopLossPips

    /**
     * Real monetary gross profit based on TP.
     */
    const takeProfit = pipValue * takeProfitPips

    cumulativeRisk += risk
    cumulativeMargin += margin

    /**
     * If this level wins after all previous levels lost:
     *
     * current TP
     * minus previous accumulated losses.
     */
    const netIfWin =
      takeProfit - (cumulativeRisk - risk)

    return {
      level: index + 1,
      multiplier,
      margin,
      notional,
      lots,
      pipValue,
      stopLossPips: safeStopLossPips,
      takeProfitPips,
      risk,
      takeProfit,
      cumulativeRisk,
      cumulativeMargin,
      netIfWin,
    }
  })
}

/**
 * Build the 10-week capital doubling projection.
 *
 * Example:
 *
 * Week 1:  $150 -> $300
 * Week 2:  $300 -> $600
 * Week 3:  $600 -> $1,200
 * ...
 * Week 10: $76,800 -> $153,600
 *
 * This is a mathematical projection only.
 */
export function buildDoublingPlan(
  start = 150,
  weeks = 10,
) {
  const safeStart = Number.isFinite(start)
    ? Math.max(0, start)
    : 0

  const safeWeeks = Number.isFinite(weeks)
    ? Math.max(0, Math.floor(weeks))
    : 10

  let balance = safeStart

  return Array.from(
    { length: safeWeeks },
    (_, i) => {
      const opening = balance

      /**
       * 100% weekly target = profit equal to
       * the opening balance.
       */
      const profit = opening

      /**
       * Target profit for this particular week.
       *
       * This was previously hardcoded to 150,
       * which was incorrect for weeks 2-10.
       */
      const target = opening

      balance = opening + profit

      return {
        week: i + 1,
        opening,
        target,
        profit,
        closing: balance,
        unit: opening / RISK_UNITS,
      }
    },
  )
}

/* -------------------------------------------------------------------------- */
/* Promotion                                                                  */
/* -------------------------------------------------------------------------- */

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