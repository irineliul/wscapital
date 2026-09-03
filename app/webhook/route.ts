import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
  return NextResponse.json({
    webhook: "OK",
    message: "WSCapital webhook is ready",
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      title,
      slug,
      content,
      metaTitle,
      metaDescription,
      featuredImage,
      published = true,
      publishedAt,
    } = body

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          error: "title, slug and content are required",
        },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from("blog_posts")
      .upsert(
        {
          title,
          slug,
          content,
          meta_title: metaTitle ?? null,
          meta_description: metaDescription ?? null,
          featured_image: featuredImage ?? null,
          published,
          published_at: publishedAt ?? (published ? new Date().toISOString() : null),
        },
        {
          onConflict: "slug",
        }
      )
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Article saved successfully",
      article: data,
    })
  } catch (error) {
    console.error("Webhook error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Invalid JSON request",
      },
      { status: 400 }
    )
  }
}