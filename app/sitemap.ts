import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: MetadataRoute.Sitemap = []
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (supabaseUrl && supabaseAnonKey) {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug, published_at, created_at')
      .eq('published', true)

    blogPosts =
      posts?.map((post) => ({
        url: `https://wscapital.app/blog/${post.slug}`,
        lastModified: new Date(post.published_at || post.created_at),
        changeFrequency: 'weekly',
        priority: 0.8,
      })) || []
  }

  return [
    {
      url: 'https://wscapital.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://wscapital.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts,
  ]
}
