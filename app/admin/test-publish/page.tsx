import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

import { highLeverageForexArticle } from '@/components/articles/high-leverage-forex'
import { martingaleForexStrategyArticle } from '@/components/articles/martingale-forex-strategy'
import { bestTradingAffiliateProgramArticle } from '@/components/articles/best-trading-affiliate-program'

type Article = {
  title: string
  slug: string
  content: string
  description?: string
  date?: string
  image?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

async function saveArticle(article: Article) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase
    .from('blog_posts')
    .upsert(
      {
        title: article.title,
        slug: article.slug,
        content: article.content,
        meta_title: article.seo?.metaTitle ?? null,
        meta_description:
          article.seo?.metaDescription ?? article.description ?? null,
        featured_image: article.image || null,
        published: true,
        published_at: article.date
          ? new Date(article.date).toISOString()
          : new Date().toISOString(),
      },
      {
        onConflict: 'slug',
      }
    )

  if (error) {
    throw new Error(`Supabase error: ${error.message}`)
  }
}

async function publishHighLeverageForex() {
  'use server'

  await saveArticle(highLeverageForexArticle)

  redirect(`/blog/${highLeverageForexArticle.slug}`)
}

async function publishMartingaleForexStrategy() {
  'use server'

  await saveArticle(martingaleForexStrategyArticle)

  redirect(`/blog/${martingaleForexStrategyArticle.slug}`)
}

async function publishBestTradingAffiliate() {
  'use server'

  await saveArticle(bestTradingAffiliateProgramArticle)

  redirect(`/blog/${bestTradingAffiliateProgramArticle.slug}`)
}

export default function TestPublishPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold">
          WSCapital Article Publishing
        </h1>

        <p className="mb-8 text-gray-600">
          Publish or update the three WSCapital blog articles directly in
          Supabase.
        </p>

        <div className="space-y-6">

          {/* High Leverage Forex */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-2 text-xl font-semibold">
              High Leverage Forex
            </h2>

            <p className="mb-4 text-gray-600">
              Risks of High Leverage Forex Trading: Margin Calls, Martingale
              and Risk Management
            </p>

            <form action={publishHighLeverageForex}>
              <button
                type="submit"
                className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
              >
                Publish High Leverage Forex
              </button>
            </form>
          </div>

          {/* Martingale Forex Strategy */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-2 text-xl font-semibold">
              Martingale Forex Strategy
            </h2>

            <p className="mb-4 text-gray-600">
              Martingale Forex Strategy: How the 1-2-4-8 System Works and How
              to Manage Risk
            </p>

            <form action={publishMartingaleForexStrategy}>
              <button
                type="submit"
                className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
              >
                Publish Martingale Forex Strategy
              </button>
            </form>
          </div>

          {/* Best Trading Affiliate Program */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-2 text-xl font-semibold">
              Best Trading Affiliate Program
            </h2>

            <p className="mb-4 text-gray-600">
              Best Trading Affiliate Program: How Forex Affiliate Marketing
              Works and How to Earn Up to $500 per Investor
            </p>

            <form action={publishBestTradingAffiliate}>
              <button
                type="submit"
                className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
              >
                Publish Best Trading Affiliate Program
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}