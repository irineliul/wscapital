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

export default async function BlogArticlePage({ params }: PageProps) {
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

  return (
    <main className="min-h-screen bg-background">
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