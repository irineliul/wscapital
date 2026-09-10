import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
  return NextResponse.json({
    webhook: 'OK',
    message: 'WSCapital webhook is ready',
  })
}

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.WEBHOOK_SECRET
  const providedSecret = request.headers.get('x-webhook-secret')

  if (!configuredSecret || providedSecret !== configuredSecret) {
    return NextResponse.json(
      {
        success: false,
        error: 'Unauthorized',
      },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()

    /*
     * Acceptăm două formate:
     *
     * 1. Format simplu:
     * {
     *   title,
     *   slug,
     *   content,
     *   metaTitle,
     *   metaDescription,
     *   featuredImage,
     *   published,
     *   publishedAt
     * }
     *
     * 2. Formatul articolului WSCapital:
     * {
     *   slug,
     *   title,
     *   description,
     *   date,
     *   category,
     *   image,
     *   content,
     *   seo: {
     *     focusKeyword,
     *     keywords,
     *     metaTitle,
     *     metaDescription
     *   }
     * }
     */

    const seo = body.seo ?? {}

    const title = body.title
    const slug = body.slug
    const content = body.content

    const metaTitle =
      body.metaTitle ??
      seo.metaTitle ??
      null

    const metaDescription =
      body.metaDescription ??
      seo.metaDescription ??
      body.description ??
      null

    const featuredImage =
      body.featuredImage ??
      body.image ??
      null

    const published =
      body.published ?? true

    const publishedAt =
      body.publishedAt ??
      body.date ??
      (published ? new Date().toISOString() : null)

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          error: 'title, slug and content are required',
        },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .upsert(
        {
          title,
          slug,
          content,
          meta_title: metaTitle,
          meta_description: metaDescription,
          featured_image: featuredImage,
          published,
          published_at: publishedAt,
        },
        {
          onConflict: 'slug',
        }
      )
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)

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
      message: 'Article saved successfully',
      article: data,
    })
  } catch (error) {
    console.error('Webhook error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Invalid JSON request',
      },
      { status: 400 }
    )
  }
}
