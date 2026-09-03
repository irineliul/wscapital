import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.WEBHOOK_SECRET

  if (!webhookSecret) {
    return NextResponse.json(
      { success: false, error: 'Webhook secret is not configured' },
      { status: 500 },
    )
  }

  const body = await request.text()
  const webhookUrl = new URL('/webhook', request.url)

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-webhook-secret': webhookSecret,
    },
    body,
    cache: 'no-store',
  })

  const responseBody = await response.text()

  return new NextResponse(responseBody, {
    status: response.status,
    headers: { 'content-type': 'application/json' },
  })
}

export const dynamic = 'force-dynamic'
