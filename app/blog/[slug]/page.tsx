import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

  const { data: post } = await supabase
    .from('blog_posts')
    .select(
      'title, meta_title, meta_description, featured_image, slug, published_at, created_at'
    )
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) {
    return {
      title: 'Article Not Found | WS Capital',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const title = post.meta_title || post.title

  const description =
    post.meta_description ||
    'Forex trading insights, risk management, leverage and trading strategies from WS Capital.'

  const canonicalUrl =
    'https://wscapital.app/blog/' + post.slug

  const publishedTime = post.published_at || post.created_at

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'WS Capital',
      type: 'article',

      ...(publishedTime && {
        publishedTime,
      }),

      ...(post.featured_image && {
        images: [
          {
            url: post.featured_image,
            alt: post.title,
          },
        ],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,

      ...(post.featured_image && {
        images: [post.featured_image],
      }),
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params

  const { data: post, error } = await supabase
    .from('blog_posts')
    .select(
      'id, title, slug, content, meta_title, meta_description, featured_image, published_at, created_at'
    )
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !post) {
    notFound()
  }

  const date = post.published_at || post.created_at

  const canonicalUrl =
    'https://wscapital.app/blog/' + post.slug

  const description =
    post.meta_description ||
    'Forex trading insights, risk management, leverage and trading strategies from WS Capital.'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WS Capital',
      url: 'https://wscapital.app',
    },
    ...(date && {
      datePublished: date,
      dateModified: date,
    }),
    ...(post.featured_image && {
      image: [post.featured_image],
    }),
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-12">
        {post.featured_image && (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
            <img
              src={post.featured_image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <header className="mb-10">
          {date && (
            <time
              dateTime={date}
              className="text-sm text-muted-foreground"
            >
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          {post.meta_description && (
            <p className="mt-5 text-lg text-muted-foreground">
              {post.meta_description}
            </p>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </article>
    </main>
  )
}