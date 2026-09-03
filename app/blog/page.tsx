import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const metadata = {
  title: 'Forex Trading Blog | WS Capital',
  description:
    'Forex trading, risk management, leverage, Martingale strategy, copy trading and affiliate trading insights from WS Capital.',
}

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select(
      'id, title, slug, content, meta_title, meta_description, featured_image, published_at, created_at'
    )
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Blog error:', error)

    return (
      <main className="min-h-screen bg-background px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">
            WS Capital Blog
          </h1>

          <p className="mt-4 text-muted-foreground">
            Unable to load articles at the moment.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            WS Capital
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Forex Trading Blog
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Forex trading strategies, risk management, leverage,
            Martingale trading, copy trading and affiliate insights.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {!posts || posts.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No articles yet
            </h2>

            <p className="mt-3 text-muted-foreground">
              New articles will appear here when they are published.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const date = post.published_at || post.created_at

              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  {post.featured_image ? (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="flex aspect-video w-full items-center justify-center bg-muted">
                        <span className="text-sm text-muted-foreground">
                          WS Capital
                        </span>
                      </div>
                    </Link>
                  )}

                  <div className="p-6">
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

                    <h2 className="mt-3 text-2xl font-bold leading-tight">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-accent"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 line-clamp-3 text-muted-foreground">
                      {post.meta_description ||
                        'Read the latest forex trading insights from WS Capital.'}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex font-semibold text-accent hover:underline"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}