// File: app/webhook/route.ts  (in your Next.js project)
// Deploy to Vercel — URL will be: https://your-project.vercel.app/webhook

import crypto from 'crypto'

export async function POST(req: Request) {
  const rawBody = await req.text()
  const sigHeader = req.headers.get('x-draftseo-signature') ?? ''
  const timestamp = req.headers.get('x-draftseo-timestamp') ?? ''
  const secret = process.env.DRAFTSEO_WEBHOOK_SECRET!

  // Reject deliveries older than 5 minutes (blocks replay attacks)
  const ageMs = Date.now() - parseInt(timestamp, 10) * 1000
  if (!timestamp || Number.isNaN(ageMs) || ageMs > 5 * 60 * 1000) {
    return new Response('Expired delivery', { status: 400 })
  }

  // DraftSEO signs "${timestamp}.${rawBody}" — not the body alone
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`, 'utf8')
    .digest('hex')

  // Constant-time compare (timingSafeEqual throws on length mismatch, so guard first)
  let verified = false
  try {
    verified = sigHeader.length === expected.length &&
      crypto.timingSafeEqual(Buffer.from(sigHeader), Buffer.from(expected))
  } catch { verified = false }
  if (!verified) return new Response('Unauthorized', { status: 401 })

  const { event, deliveryId, data } = JSON.parse(rawBody)

  if (event === 'blog.published') {
    // deliveryId (idempotency) / data.title / data.content (HTML) / data.slug / data.language
    // Upsert on data.id (permanent article id — republishing re-sends it), NOT on data.slug.
    // data.status is 'published' | 'draft' — honour it, or the Post status setting does nothing.
    console.log('New post received:', data.title)
    // → Add your publishing logic here
  }

  return new Response('OK', { status: 200 })
}