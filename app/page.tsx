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

export default function Page() {
  return (
    <>
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
