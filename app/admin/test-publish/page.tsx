import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { bestTradingAffiliateProgramArticle } from '@/components/articles/best-trading-affiliate-program'

async function publishBestTradingAffiliate() {
  'use server'

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const article = bestTradingAffiliateProgramArticle

  const { error } = await supabase
    .from('blog_posts')
    .upsert(
      {
        title: article.title,
        slug: article.slug,
        content: article.content,
        meta_title: article.seo?.metaTitle ?? null,
        meta_description: article.seo?.metaDescription ?? article.description ?? null,
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

  redirect(`/blog/${article.slug}`)
}

export default function TestPublishPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">
          WSCapital Article Publishing
        </h1>

        <div className="rounded-xl border p-6">
          <h2 className="mb-2 text-xl font-semibold">
            Best Trading Affiliate Program
          </h2>

          <p className="mb-6 text-gray-600">
            Publish the article directly to Supabase → blog_posts.
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
    </main>
  )
}