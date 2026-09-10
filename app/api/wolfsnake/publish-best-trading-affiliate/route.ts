import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"
import { bestTradingAffiliateProgramArticle } from "@/components/articles/best-trading-affiliate-program"

export async function POST() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          error: "Supabase environment variables are missing.",
        },
        { status: 500 }
      )
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
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Article published successfully!",
      slug: article.slug,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    )
  }
}