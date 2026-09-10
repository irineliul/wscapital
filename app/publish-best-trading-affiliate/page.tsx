"use server"

import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import { bestTradingAffiliateProgramArticle } from "@/components/articles/best-trading-affiliate-program"

export default function PublishBestTradingAffiliatePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border p-8">
        <h1 className="text-2xl font-bold mb-4">
          Publish Best Trading Affiliate Program
        </h1>

        <p className="mb-6 text-muted-foreground">
          Publish the article directly to Supabase blog_posts.
        </p>

        <form action={publishArticle}>
          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground cursor-pointer"
          >
            Publish Article
          </button>
        </form>
      </div>
    </main>
  )
}

async function publishArticle() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing.")
  }

  const supabase = createClient(
    supabaseUrl,
    serviceRoleKey
  )

  const article = bestTradingAffiliateProgramArticle

  const { error } = await supabase
    .from("blog_posts")
    .upsert(
      {
        title: article.title,
        slug: article.slug,
        content: article.content,
        meta_title:
          "Best Trading Affiliate Program | WS Capital Commissions & Country Rates",
        meta_description:
          "Learn how the WS Capital trading affiliate program works, including country-based commissions, qualified investors, tracking, payouts, leverage and trading risk.",
        featured_image:
          "https://pub-8504ee5dfbcc44ec838bbc73f281521e.r2.dev/blog-images/openai/9007/openai-1789062173007-ix1wf0-1789062173015-n3w06f.png",
        published: true,
        published_at: new Date(
          `${article.date}T12:00:00.000Z`
        ).toISOString(),
      },
      {
        onConflict: "slug",
      }
    )

  if (error) {
    throw new Error(`Supabase error: ${error.message}`)
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${article.slug}`)
}