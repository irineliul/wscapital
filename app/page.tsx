import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { DoublingExample } from '@/components/doubling-example'
import { MartingaleStrategy } from '@/components/martingale-strategy'
import { InvestorTools } from '@/components/investor-tools'
import { AffiliateProgram } from '@/components/affiliate-program'
import { CommissionChecker } from '@/components/commission-checker'
import { PromotionMethods } from '@/components/promotion-methods'
import { RegisterForm } from '@/components/register-form'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { SiteTranslation } from '@/components/site-translation'

const heroVideoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'WS Capital Forex Trading Tools & Free Affiliate Program',
  description:
    'Discover WS Capital forex trading tools, TradingView resources, AI-powered Pine Script signals, copy trading and the free affiliate program with commissions of up to $500 per active investor.',
  thumbnailUrl: 'https://wscapital.app/images/trading-terminal.png',
  uploadDate: '2026-08-31T13:58:39Z',
  duration: 'PT10S',
  contentUrl: 'https://wscapital.app/video/wscapital.mp4',
  creator: {
    '@type': 'Organization',
    name: 'WS Capital',
    url: 'https://wscapital.app',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroVideoSchema) }}
      />
      <SiteHeader />
      <SiteTranslation />
      <main className="site-theme">
        <Hero />
        <DoublingExample />
        <MartingaleStrategy />
        <InvestorTools />
        <AffiliateProgram />
        <CommissionChecker />
        <PromotionMethods />
        <RegisterForm />
      </main>
      <Faq />
      <SiteFooter />
    </>
  )
}
